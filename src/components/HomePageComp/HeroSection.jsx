"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Responsive hook for device type
function useDeviceType() {
    const [device, setDevice] = useState(() => {
        if (typeof window === "undefined") return "desktop";
        if (window.innerWidth <= 750) return "mobile";
        if (window.innerWidth <= 1024) return "tablet";
        return "desktop";
    });
    useEffect(() => {
        function handleResize() {
            if (window.innerWidth <= 768) setDevice("mobile");
            else if (window.innerWidth <= 1024) setDevice("tablet");
            else setDevice("desktop");
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return device;
}

// Paths: desktop vs tablet vs mobile
function getPaths(device) {
    const WIDTH = window.innerWidth;
    const PADDING = WIDTH * 0.025;

    if (device === "mobile") {
        const BASE_Y = window.innerHeight - 60;
        return [
            // Rider 1: left-to-right
            `M ${PADDING} ${BASE_Y} Q ${WIDTH / 2} ${BASE_Y - 30} ${
                WIDTH - PADDING
            } ${BASE_Y}`,
            // Rider 2: right-to-left
            `M ${WIDTH - PADDING} ${BASE_Y} Q ${WIDTH / 2} ${
                BASE_Y - 30
            } ${PADDING} ${BASE_Y}`,
            // Rider 3: diagonal
            `M ${WIDTH - 2 * PADDING} ${BASE_Y} Q ${WIDTH * 0.75} ${
                BASE_Y - 60
            } ${PADDING * 2} ${BASE_Y}`,
        ];
    } else if (device === "tablet") {
        const BASE_Y = Math.round(window.innerHeight * 0.65) - 48;
        return [
            `M ${PADDING} ${BASE_Y} Q ${WIDTH / 2} ${BASE_Y - 70} ${
                WIDTH - PADDING
            } ${BASE_Y}`,
            `M ${WIDTH - PADDING} ${BASE_Y} Q ${WIDTH / 2} ${
                BASE_Y - 50
            } ${PADDING} ${BASE_Y}`,
            `M ${WIDTH - 2 * PADDING} ${BASE_Y} Q ${WIDTH * 0.75} ${
                BASE_Y - 80
            } ${PADDING * 2} ${BASE_Y}`,
        ];
    } else {
        const BASE_Y = window.innerHeight - 60;
        return [
            `M 0 ${BASE_Y} Q ${WIDTH / 2} ${BASE_Y - 70} ${WIDTH} ${BASE_Y}`,
            `M ${WIDTH} ${BASE_Y} Q ${WIDTH / 2} ${BASE_Y - 40} 0 ${BASE_Y}`,
            `M ${WIDTH - 40} ${BASE_Y + 10} Q ${WIDTH * 0.75} ${
                BASE_Y - 40
            } 40 ${BASE_Y - 10}`,
        ];
    }
}

function getSVGPath(pathD) {
    const svgNS = "http://www.w3.org/2000/svg";
    const path = document.createElementNS(svgNS, "path");
    path.setAttribute("d", pathD);
    return path;
}

function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

function Rider({ src, path, duration, progress, size = 64 }) {
    let riderStyle = { display: "none" };
    if (typeof window !== "undefined" && progress < 1) {
        const pathElem = getSVGPath(path);
        const length = pathElem.getTotalLength();
        const easedProgress = easeInOutQuad(progress);
        const point = pathElem.getPointAtLength(easedProgress * length);
        riderStyle = {
            position: "absolute",
            left: point.x,
            top: point.y,
            width: size,
            height: size,
            zIndex: 10,
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
            display: "block",
        };
    }
    return (
        <Image
            src={src}
            alt="Rider"
            width={size}
            height={size}
            style={riderStyle}
            priority
        />
    );
}

export default function Hero() {
    const texts = [
        "Have you eaten?",
        "You don Chow?",
        "Se o ti jeun?",
        "Iriela nri?",
        "Kun ci abinci?",
    ];

    const device = useDeviceType();

    // Dynamic paths based on screen size and device type
    const [paths, setPaths] = useState(() =>
        typeof window !== "undefined" ? getPaths(device) : []
    );

    useEffect(() => {
        function updatePaths() {
            setPaths(getPaths(device));
        }
        updatePaths();
        window.addEventListener("resize", updatePaths);
        return () => window.removeEventListener("resize", updatePaths);
    }, [device]);

    const riders = [
        { src: "/rider1.svg", path: paths[0], duration: 8 },
        { src: "/rider2.svg", path: paths[1], duration: 8 },
        { src: "/rider3.webp", path: paths[2], duration: 8 },
    ];

    const [index, setIndex] = useState(0);
    const [activeRider, setActiveRider] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % texts.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [texts.length]);

    useEffect(() => {
        setProgress(0); // Instantly reset progress so animation starts immediately

        let start = null;
        let animationFrame;

        function animate(ts) {
            if (!start) start = ts;
            const elapsed = ts - start;
            let nextProgress = Math.min(
                elapsed / (riders[activeRider].duration * 1000),
                1
            );
            setProgress(nextProgress);
            if (nextProgress < 1) {
                animationFrame = requestAnimationFrame(animate);
            } else {
                setTimeout(() => {
                    setProgress(0);
                    setActiveRider((prev) => (prev + 1) % riders.length);
                }, 500);
            }
        }

        animationFrame = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animationFrame);
        };
    }, [activeRider, paths]);

    return (
        <section className="relative w-full h-screen md:h-[65vh] lg:h-screen overflow-hidden">
            {/* Background image */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/chow1.svg"
                    alt="Hero Background"
                    fill
                    priority
                    className="object-cover"
                />
            </div>

            {/* Hero Content */}
            <div className="flex flex-col items-center justify-center h-full text-center text-black px-4">
                <AnimatePresence mode="wait">
                    <motion.h1
                        key={index}
                        className="text-5xl md:text-8xl font-extrabold mb-6 tracking-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.8 }}
                    >
                        {texts[index]}
                    </motion.h1>
                </AnimatePresence>

                <div className="flex flex-col md:flex-row items-center justify-center mx-auto gap-6 mt-6">
                    <button className="flex items-center gap-2 bg-[#155B4A] hover:bg-[#195143] text-white px-4 py-3.5 cursor-pointer rounded-md">
                        <Image
                            src="/PlayStore.svg"
                            alt="Google Play"
                            priority
                            width={20}
                            height={20}
                            className="object-cover w-10 h-10"
                        />
                        <span className="text-lg font-bold">
                            Download on Google Play
                        </span>
                    </button>
                    <button className="flex items-center gap-2 bg-[#155B4A] hover:bg-[#195143] text-white px-4 py-3.5 cursor-pointer rounded-md">
                        <Image
                            src="/AppleStore.svg"
                            alt="App Store"
                            priority
                            width={20}
                            height={20}
                            className="object-cover w-10 h-10"
                        />
                        <span className="text-lg font-bold">
                            Download on App Store
                        </span>
                    </button>
                </div>
            </div>

            {/* SVG road overlay for debugging (optional, remove for production) */}
            <svg
                className="absolute w-full h-full pointer-events-none"
                style={{ zIndex: 2 }}
            >
                <path
                    d={paths[0]}
                    stroke="red"
                    strokeDasharray="4"
                    fill="none"
                />
                <path
                    d={paths[1]}
                    stroke="blue"
                    strokeDasharray="4"
                    fill="none"
                />
                <path
                    d={paths[2]}
                    stroke="green"
                    strokeDasharray="4"
                    fill="none"
                />
            </svg>

            {/* Only the active rider animates */}
            {riders.map((r, i) =>
                i === activeRider ? (
                    <Rider
                        key={i}
                        src={r.src}
                        path={r.path}
                        duration={r.duration}
                        progress={progress}
                        size={
                            device === "mobile"
                                ? 40
                                : device === "tablet"
                                ? 56
                                : 64
                        }
                    />
                ) : null
            )}
        </section>
    );
}
