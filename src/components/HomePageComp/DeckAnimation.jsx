"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const ScrollPhoneAnimation = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    // Phone exits completely BEFORE cards start opening - faster animation
    const phoneX = useTransform(
        scrollYProgress,
        [0, 0.1, 0.2],
        [0, -300, -700]
    );

    const phoneScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.9]);
    const phoneOpacity = useTransform(scrollYProgress, [0.15, 0.2], [1, 0]);

    // Cards appear while phone is moving
    const cardsX = useTransform(scrollYProgress, [0.15, 0.25], [600, 0]);
    const cardsOpacity = useTransform(scrollYProgress, [0.15, 0.25], [0, 1]);

    // Sequential card opening/closing with updated timing
    // Card 1: Opens at 25%, closes at 45%
    const card1Width = useTransform(
        scrollYProgress,
        [0.25, 0.3, 0.4, 0.45],
        [200, 700, 700, 200]
    );
    const card1ContentOpacity = useTransform(
        scrollYProgress,
        [0.27, 0.32, 0.38, 0.43],
        [0, 1, 1, 0]
    );
    const card1TextOpacity = useTransform(
        scrollYProgress,
        [0.25, 0.3, 0.4, 0.45],
        [1, 0, 0, 1]
    );
    // Card 1 image growth
    const card1ImageScale = useTransform(
        scrollYProgress,
        [0.27, 0.32, 0.38, 0.43], // match content open/close timing
        [1, 1.2, 1.3, 1] // start normal → bigger → normal
    );

    // Card 2: Opens at 49%, closes at 65%
    const card2Width = useTransform(
        scrollYProgress,
        [0.49, 0.54, 0.6, 0.65],
        [200, 700, 700, 200]
    );
    const card2ContentOpacity = useTransform(
        scrollYProgress,
        [0.51, 0.56, 0.58, 0.63],
        [0, 1, 1, 0]
    );
    const card2TextOpacity = useTransform(
        scrollYProgress,
        [0.49, 0.54, 0.6, 0.65],
        [1, 0, 0, 1]
    );
    // Card 2 image growth
    const card2ImageScale = useTransform(
        scrollYProgress,
        [0.51, 0.56, 0.58, 0.63], // fixed timing to match card 2
        [1, 1.2, 1.3, 1] // start normal → bigger → normal
    );

    // Card 3: Opens at 69%, closes at 85%
    const card3Width = useTransform(
        scrollYProgress,
        [0.69, 0.74, 0.8, 0.85],
        [200, 700, 700, 200]
    );
    const card3ContentOpacity = useTransform(
        scrollYProgress,
        [0.71, 0.76, 0.78, 0.83],
        [0, 1, 1, 0]
    );
    const card3TextOpacity = useTransform(
        scrollYProgress,
        [0.69, 0.74, 0.8, 0.85],
        [1, 0, 0, 1]
    );
    // Card 3 image growth
    const card3ImageScale = useTransform(
        scrollYProgress,
        [0.71, 0.76, 0.78, 0.83], // fixed timing to match card 3
        [1, 1.2, 1.3, 1] // start normal → bigger → normal
    );

    // Card 4: Opens at 89%, closes at 110% (stays open at the end)
    const card4Width = useTransform(
        scrollYProgress,
        [0.89, 0.94, 1.05, 1.1],
        [200, 700, 700, 200]
    );
    // Card 4 image growth
    const card4ImageScale = useTransform(
        scrollYProgress,
        [0.91, 0.96, 1.03, 1.08], // fixed timing to match card 4
        [1, 1.2, 1.3, 1] // start normal → bigger → normal
    );

    const card4ContentOpacity = useTransform(
        scrollYProgress,
        [0.91, 0.96, 1.03, 1.08],
        [0, 1, 1, 0]
    );
    const card4TextOpacity = useTransform(
        scrollYProgress,
        [0.89, 0.94, 1.05, 1.1],
        [1, 0, 0, 1]
    );

    const cards = [
        {
            id: "restaurants",
            title: "Restaurants",
            closedColor: "#dcd6f9",
            closedColorText: "#baadf4",
            width: card1Width,
            contentOpacity: card1ContentOpacity,
            textOpacity: card1TextOpacity,
            imageScale: card1ImageScale,
            openContent: {
                title: "Restaurants",
                description:
                    "Order food from a wide variety of restaurants, ranging from African to Continental and Intercontinental cuisines.",
                img: "/restaurants.svg",
            },
        },
        {
            id: "shops",
            title: "Shops",
            closedColor: "#ffedb3",
            closedColorText: "#ffd134",
            width: card2Width,
            contentOpacity: card2ContentOpacity,
            textOpacity: card2TextOpacity,
            imageScale: card2ImageScale,
            openContent: {
                title: "Shops",
                description:
                    "Groceries, household items, and other daily essentials from your trusted stores and supermarkets nearby.",
                img: "/shops.svg",
            },
        },
        {
            id: "pharmacies",
            title: "Pharmacies",
            closedColor: "#99c8ff",
            closedColorText: "#336bad",
            width: card3Width,
            contentOpacity: card3ContentOpacity,
            textOpacity: card3TextOpacity,
            imageScale: card3ImageScale,
            openContent: {
                title: "Pharmacies",
                description:
                    "Over-the-counter meds, wellness products, baby care, and hygiene items from verified pharmacies.",
                img: "/pharmacy.svg",
            },
        },
        {
            id: "markets",
            title: "Local Markets",
            closedColor: "#ccf3e5",
            closedColorText: "#68b99d",
            width: card4Width,
            contentOpacity: card4ContentOpacity,
            textOpacity: card4TextOpacity,
            imageScale: card4ImageScale,
            openContent: {
                title: "Local Markets",
                description:
                    "Fresh produce, grains, proteins, fruits, and other groceries directly from local markets closest to you.",
                img: "/markets.svg",
            },
        },
    ];

    return (
        <div className="relative">
            {/* Diagonal Wavy Divider - Right to Left */}
            <div className="absolute top-[-45] right-0 w-full overflow-hidden leading-none z-40 bg-white">
                <svg
                    className="relative block w-full h-[80px] rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 80"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M1200,40
         C1180,50 1160,50 1140,38
         C1120,50 1100,50 1080,36
         C1060,50 1040,50 1020,34
         C1000,50 980,50 960,32
         C940,50 920,50 900,30
         C880,50 860,50 840,28
         C820,50 800,50 780,26
         C760,50 740,50 720,24
         C700,50 680,50 660,22
         C640,50 620,50 600,20
         C580,50 560,50 540,18
         C520,50 500,50 480,16
         C460,50 440,50 420,14
         C400,50 380,50 360,12
         C340,50 320,50 300,10
         C280,50 260,50 240,8
         C220,50 200,50 180,6
         C160,50 140,50 120,4
         C100,50 80,50 60,2
         C40,50 20,50 0,0
         L0,80 L1200,80 Z"
                        fill="#6B837D"
                    />
                </svg>
            </div>

            <div className="bg-white pt-18">
                <div className="flex flex-col gap-4 z-10 mb-6">
                    <h1 className="text-6xl font-extrabold text-center text-black">
                        What's on Deck?
                    </h1>
                    <p className="text-2xl font-medium text-center text-black">
                        Try the everything app.
                    </p>
                </div>
                <div ref={containerRef} className="h-[5000vh] relative">
                    <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden ">
                        {/* Phone - starts centered, moves left */}
                        <motion.div
                            style={{
                                x: phoneX,
                                scale: phoneScale,
                                opacity: phoneOpacity,
                            }}
                            className="absolute top-0 left-0 z-40 w-full h-screen flex justify-center items-start"
                        >
                            {/* Phone container with extra space for overlay */}
                            <div className="relative w-[500px] h-[900px] pt-6 pr-16">
                                {/* Base Phone Image */}
                                <div className="relative w-[400px] h-[850px]">
                                    <Image
                                        src="/chowdeck-app.png"
                                        alt="Phone Base"
                                        width={400}
                                        height={800}
                                        priority
                                        className="object-top"
                                    />
                                </div>

                                {/* Overlay Image - positioned absolutely within the larger container */}
                                <div className="absolute top-0 right-7 z-50">
                                    <Image
                                        src="/pastry.svg"
                                        alt="Overlay Image"
                                        width={144}
                                        height={144}
                                        priority
                                        className="drop-shadow-lg"
                                    />
                                </div>
                            </div>
                        </motion.div>

                        {/* Cards Container - sequential opening and closing */}
                        <motion.div
                            style={{
                                x: cardsX,
                                opacity: cardsOpacity,
                            }}
                            className="flex gap-2 absolute right-0 h-screen items-center pr-4"
                        >
                            {cards.map((card, index) => (
                                <motion.div
                                    key={card.id}
                                    style={{
                                        width: card.width,
                                        backgroundColor: card.closedColor,
                                    }}
                                    className={`rounded-2xl relative overflow-hidden h-[99.5vh] flex items-center justify-center transition-all duration-700 ease-out`}
                                >
                                    {/* Closed state - vertical text */}
                                    <motion.div
                                        style={{ opacity: card.textOpacity }}
                                        className="absolute inset-0 flex items-end justify-center pb-8 z-10 border-4 border-black rounded-2xl"
                                    >
                                        <h3
                                            className="text-5xl font-extrabold tracking-[8px] transform -rotate-90 whitespace-nowrap"
                                            style={{
                                                writingMode: "vertical-lr",
                                                textOrientation: "mixed",
                                                transform: "rotate(-90deg)",
                                                color: card.closedColorText,
                                            }}
                                        >
                                            {card.title}
                                        </h3>
                                    </motion.div>

                                    {/* Open state - expanded content with animations */}
                                    <motion.div
                                        style={{
                                            opacity: card.contentOpacity,
                                            backgroundColor: card.closedColor,
                                        }}
                                        className="absolute inset-0 text-gray-800  border-4 border-black overflow-hidden z-20
                                         rounded-2xl"
                                    >
                                        {/* Vertical Stack Layout */}
                                        <div className="flex flex-col h-full pt-24">
                                            {/* Top Section - Title and Description (35% height) */}
                                            <div className="flex-none h-[35%] flex flex-col justify-center p-8">
                                                <h2 className="text-5xl font-bold text-gray-900 mb-8 leading-tight">
                                                    {card.openContent.title}
                                                </h2>
                                                <p className="text-lg text-gray-700 leading-relaxed">
                                                    {
                                                        card.openContent
                                                            .description
                                                    }
                                                </p>
                                            </div>

                                            {/* Bottom Section - Image (65% height) */}
                                            <div className="flex-none h-[65%] flex items-center justify-center relative">
                                                <div className="w-full h-full relative">
                                                    <motion.div
                                                        style={{
                                                            scale: card.imageScale,
                                                        }} // dynamic scale
                                                        className="w-full h-full relative z-30" // higher z-index to float above
                                                    >
                                                        <Image
                                                            src={
                                                                card.openContent
                                                                    .img
                                                            }
                                                            alt="Open Section Img"
                                                            fill
                                                            priority
                                                            className="object-contain"
                                                        />
                                                    </motion.div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScrollPhoneAnimation;
