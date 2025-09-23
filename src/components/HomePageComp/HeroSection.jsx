"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Hook: detect device type (safe for SSR)
function useDeviceType() {
    const [device, setDevice] = useState("desktop");

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth <= 768) setDevice("mobile");
            else if (window.innerWidth <= 1024) setDevice("tablet");
            else setDevice("desktop");
        }
        handleResize(); // run once on mount
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return device;
}

// Path generator (client-only)
function getPaths(device) {
    const WIDTH = window.innerWidth;
    const PADDING = WIDTH * 0.025;

    if (device === "mobile") {
        const BASE_Y = window.innerHeight - 60;
        return [
            `M ${PADDING} ${BASE_Y} Q ${WIDTH / 2} ${BASE_Y - 30} ${
                WIDTH - PADDING
            } ${BASE_Y}`,
            `M ${WIDTH - PADDING} ${BASE_Y} Q ${WIDTH / 2} ${
                BASE_Y - 30
            } ${PADDING} ${BASE_Y}`,
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

// Helpers
function getSVGPath(pathD) {
    const svgNS = "http://www.w3.org/2000/svg";
    const path = document.createElementNS(svgNS, "path");
    path.setAttribute("d", pathD);
    return path;
}

function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

// Rider component (only render client-side)
function Rider({ src, path, progress, size = 64 }) {
    if (!path) return null;

    const pathElem = getSVGPath(path);
    const length = pathElem.getTotalLength();
    const easedProgress = easeInOutQuad(progress);
    const point = pathElem.getPointAtLength(easedProgress * length);

    const riderStyle = {
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

    const [mounted, setMounted] = useState(false);
    const [paths, setPaths] = useState([]);
    const [index, setIndex] = useState(0);
    const [activeRider, setActiveRider] = useState(0);
    const [progress, setProgress] = useState(0);

    // Mark component as mounted (prevents hydration mismatch)
    useEffect(() => {
        setMounted(true);
    }, []);

    // Update paths when mounted or device changes
    useEffect(() => {
        if (!mounted) return;
        function updatePaths() {
            setPaths(getPaths(device));
        }
        updatePaths();
        window.addEventListener("resize", updatePaths);
        return () => window.removeEventListener("resize", updatePaths);
    }, [device, mounted]);

    // Text cycle
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % texts.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [texts.length]);

    // Rider animation
    useEffect(() => {
        if (!mounted || paths.length === 0) return;

        setProgress(0);
        let start = null;
        let animationFrame;

        function animate(ts) {
            if (!start) start = ts;
            const elapsed = ts - start;
            let nextProgress = Math.min(elapsed / 8000, 1); // duration 8s
            setProgress(nextProgress);
            if (nextProgress < 1) {
                animationFrame = requestAnimationFrame(animate);
            } else {
                setTimeout(() => {
                    setProgress(0);
                    setActiveRider((prev) => (prev + 1) % 3);
                }, 500);
            }
        }

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [activeRider, paths, mounted]);

    if (!mounted) {
        // Render only static background + text on server to avoid mismatch
        return (
            <section className="relative w-full h-screen md:h-[65vh] lg:h-screen overflow-hidden">
                <div className="absolute inset-0 -z-10">
                    <Image
                        src="/chow1.svg"
                        alt="Hero Background"
                        fill
                        priority
                        className="object-cover"
                    />
                </div>
                <div className="flex flex-col items-center justify-center h-full text-center text-black px-4">
                    <h1 className="text-5xl md:text-8xl font-extrabold mb-6 tracking-tight">
                        {texts[0]}
                    </h1>
                </div>
            </section>
        );
    }

    const riders = [
        { src: "/rider1.svg", path: paths[0] },
        { src: "/rider2.svg", path: paths[1] },
        { src: "/rider3.webp", path: paths[2] },
    ];

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
                            width={20}
                            height={20}
                            className="object-cover w-10 h-10"
                            priority
                        />
                        <span className="text-lg font-bold">
                            Download on Google Play
                        </span>
                    </button>
                    <button className="flex items-center gap-2 bg-[#155B4A] hover:bg-[#195143] text-white px-4 py-3.5 cursor-pointer rounded-md">
                        <Image
                            src="/AppleStore.svg"
                            alt="App Store"
                            width={20}
                            height={20}
                            className="object-cover w-10 h-10"
                            priority
                        />
                        <span className="text-lg font-bold">
                            Download on App Store
                        </span>
                    </button>
                </div>
            </div>

            {/* Debug road paths */}
            <svg
                className="absolute w-full h-full pointer-events-none"
                style={{ zIndex: 2 }}
            >
                {paths[0] && (
                    <path
                        d={paths[0]}
                        stroke="red"
                        strokeDasharray="4"
                        fill="none"
                    />
                )}
                {paths[1] && (
                    <path
                        d={paths[1]}
                        stroke="blue"
                        strokeDasharray="4"
                        fill="none"
                    />
                )}
                {paths[2] && (
                    <path
                        d={paths[2]}
                        stroke="green"
                        strokeDasharray="4"
                        fill="none"
                    />
                )}
            </svg>

            {/* Active rider */}
            {riders.map((r, i) =>
                i === activeRider ? (
                    <Rider
                        key={i}
                        src={r.src}
                        path={r.path}
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
