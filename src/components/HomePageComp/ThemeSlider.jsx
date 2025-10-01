"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, MapPin, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
    {
        id: 1,
        title: "Get started in 3",
        image: "/african-meals.svg",
        color: "bg-[#038b5c]",
        textColor: "text-[#038b5c]",
        icon: <MapPin className="w-7 h-7" />,
        bg: "bg-[#02c27f]",
        timer: "text-[#02c27f]",
    },
    {
        id: 2,
        title: "Download the app",
        image: "/Fastfoodxsnacks.svg",
        color: "bg-[#8c77ec]",
        textColor: "text-[#8c77ec]",
        icon: "01",
        bg: "bg-[#ffd1e2]",
        timer: "text-[#ffd1e2]",
    },
    {
        id: 3,
        title: "Explore categories",
        image: "/drink.svg",
        color: "bg-[#ffc501]",
        textColor: "text-[#ffc501]",
        icon: "02",
        bg: "bg-[#000000]",
        timer: "text-[#000000]",
    },
    {
        id: 4,
        title: "Place your order",
        image: "/Fitfam.svg",
        color: "bg-[#ff884d]",
        textColor: "text-[#ff884d]",
        icon: "03",
        bg: "bg-[#0c513f]",
        timer: "text-[#0c513f]",
    },
    {
        id: 5,
        title: "Unpack and enjoy",
        image: "/Pack.svg",
        color: "bg-[#ffedb3]",
        textColor: "text-[#ffedb3]",
        icon: <Sparkles className="w-7 h-7" />,
        bg: "bg-[#ed5e3b]",
        timer: "text-[#ed5e3b]",
    },
];

const AUTO_PLAY_TIME = 3000; // 3s autoplay

export default function FoodSlider() {
    const [index, setIndex] = useState(0);
    const [progress, setProgress] = useState(0);

    // Autoplay logic
    useEffect(() => {
        setProgress(100); // reset progress each slide
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev <= 0) {
                    nextSlide();
                    return 100; // reset
                }
                return prev - 1;
            });
        }, AUTO_PLAY_TIME / 100);

        return () => clearInterval(interval);
    }, [index]);

    const nextSlide = () =>
        setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    const prevSlide = () =>
        setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    const goToSlide = (i) => setIndex(i);

    return (
        <div className="px-6 md:px-14 lg:px-22 relative">
            {/* Floating rounded div */}
            <div className="relative">
                {/* The rounded div should float above by 150px */}
                <div
                    className={`relative z-20 h-[75vh] lg:h-[100vh] rounded-3xl -top-[150px] 
      flex items-center justify-center overflow-hidden 
      ${slides[index].color} transition-colors duration-700`}
                >
                    {/* Title above image */}
                    <div className="absolute top-6 w-full text-center my-6 md:my-12">
                        <h2 className="text-3xl md:text-7xl font-bold text-black drop-shadow-md">
                            {slides[index].title}
                        </h2>
                    </div>

                    {/* Main Image */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={slides[index].id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.6 }}
                            className="flex items-center justify-center"
                        >
                            <Image
                                src={slides[index].image}
                                alt={slides[index].title}
                                width={400}
                                height={400}
                                quality={100}
                                className="max-md:w-56 max-md:h-56"
                            />
                        </motion.div>
                    </AnimatePresence>

                    {/* Bottom Controls */}
                    <div className="absolute bottom-6 left-6 flex flex-wrap items-center gap-4">
                        {slides.map((slide, i) => {
                            const isActive = i === index;
                            return (
                                <button
                                    key={slide.id}
                                    onClick={() => goToSlide(i)}
                                    className={`relative w-14 h-14 text-md rounded-full flex items-center justify-center transition cursor-pointer ${
                                        isActive
                                            ? `${slide.timer} bg-transparent`
                                            : slides[index].bg
                                    }`}
                                >
                                    {typeof slide.icon === "string" ? (
                                        <span
                                            className={
                                                isActive
                                                    ? `${slide.timer}`
                                                    : `${slides[index].textColor}`
                                            }
                                        >
                                            {slide.icon}
                                        </span>
                                    ) : (
                                        <span
                                            className={
                                                isActive
                                                    ? `${slide.timer}`
                                                    : `${slides[index].textColor}`
                                            }
                                        >
                                            {slide.icon}
                                        </span>
                                    )}

                                    {/* Timer ring */}
                                    {isActive && (
                                        <svg
                                            className="absolute inset-0 w-full h-full -rotate-90"
                                            viewBox="0 0 36 36"
                                        >
                                            <path
                                                className={`${slide.timer}`}
                                                stroke="currentColor"
                                                strokeWidth="3"
                                                fill="none"
                                                strokeDasharray="100, 100"
                                                strokeDashoffset={
                                                    100 - progress
                                                }
                                                d="M18 2a16 16 0 1 1 0 32 16 16 0 1 1 0-32"
                                            />
                                        </svg>
                                    )}
                                </button>
                            );
                        })}
                    </div>

                    {/* Prev / Next */}
                    <div className="absolute bottom-6 right-6 hidden md:flex gap-3">
                        <button
                            onClick={prevSlide}
                            className={`w-12 h-12 rounded-full ${slides[index].bg} flex items-center justify-center transition cursor-pointer`}
                        >
                            <ArrowLeft
                                className={`w-6 h-6 ${slides[index].textColor}`}
                            />
                        </button>
                        <button
                            onClick={nextSlide}
                            className={`w-12 h-12 rounded-full ${slides[index].bg} flex items-center justify-center transition cursor-pointer`}
                        >
                            <ArrowRight
                                className={`w-6 h-6 ${slides[index].textColor}`}
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
