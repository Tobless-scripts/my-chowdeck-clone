"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

const ScrollPhoneAnimation = () => {
    const containerRef = useRef(null);
    const [screenSize, setScreenSize] = useState("lg");
    const [animatedItems, setAnimatedItems] = useState(new Set());

    // Track screen size
    useEffect(() => {
        const checkScreenSize = () => {
            if (window.innerWidth >= 1024) {
                setScreenSize("lg");
            } else if (window.innerWidth >= 768) {
                setScreenSize("md");
            } else {
                setScreenSize("sm");
            }
        };

        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    const headerRef = useRef(null);
    const isInView = useInView(headerRef, { once: true, margin: "-50px" });

    // Large screen scroll animations (original complex animation)
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
    const card1ImageScale = useTransform(
        scrollYProgress,
        [0.27, 0.32, 0.38, 0.43],
        [1, 1.2, 1.3, 1]
    );

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
    const card2ImageScale = useTransform(
        scrollYProgress,
        [0.51, 0.56, 0.58, 0.63],
        [1, 1.2, 1.3, 1]
    );

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
    const card3ImageScale = useTransform(
        scrollYProgress,
        [0.71, 0.76, 0.78, 0.83],
        [1, 1.2, 1.3, 1]
    );

    const card4Width = useTransform(
        scrollYProgress,
        [0.89, 0.94, 1.05, 1.1],
        [200, 700, 700, 200]
    );
    const card4ImageScale = useTransform(
        scrollYProgress,
        [0.91, 0.96, 1.03, 1.08],
        [1, 1.2, 1.3, 1]
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

    // Mobile Card Component for smaller screens
    const MobileCard = ({ card, index }) => {
        const ref = useRef(null);
        const isInView = useInView(ref, {
            once: true,
            amount: screenSize === "sm" ? 0.3 : 0.4,
            margin: "-50px 0px -50px 0px",
        });

        return (
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "easeOut",
                }}
                className={`
                ${screenSize === "sm" ? "mb-8 mx-6" : "mx-14 mb-12"}
                rounded-3xl overflow-hidden shadow-2xl border-4 border-black
                ${screenSize === "sm" ? "h-[500px]" : "h-[600px]"}
            `}
                style={{ backgroundColor: card.closedColor }}
            >
                <div className="h-full flex flex-col">
                    {/* Header section */}
                    <div
                        className={`${
                            screenSize === "sm" ? "p-6 h-[40%]" : "p-8 h-[35%]"
                        } flex flex-col justify-center`}
                    >
                        <h2
                            className={`font-bold mb-4 leading-tight ${
                                screenSize === "sm" ? "text-3xl" : "text-4xl"
                            }`}
                            style={{ color: card.closedColorText }}
                        >
                            {card.openContent.title}
                        </h2>
                        <p
                            className={`text-gray-700 leading-relaxed ${
                                screenSize === "sm" ? "text-sm" : "text-base"
                            }`}
                        >
                            {card.openContent.description}
                        </p>
                    </div>

                    {/* Image section */}
                    <div
                        className={`${
                            screenSize === "sm" ? "h-[60%]" : "h-[65%]"
                        } relative overflow-hidden`}
                    >
                        <div className="w-full h-full relative">
                            <Image
                                src={card.openContent.img}
                                alt={card.openContent.title}
                                fill
                                className="object-contain p-4"
                            />
                        </div>
                    </div>
                </div>
            </motion.div>
        );
    };

    // Tablet Card Component, same logic as MobileCard but with different layout
    const TabletCard = ({ card, index }) => {
        const ref = useRef(null);
        const isInView = useInView(ref, {
            once: true,
            amount: 0.4,
            margin: "-100px 0px -100px 0px",
        });

        return (
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "easeOut",
                }}
                className="mx-8 mb-16 rounded-3xl overflow-hidden shadow-2xl border-4 border-black"
                style={{ backgroundColor: card.closedColor }}
            >
                <div className="grid grid-cols-2 h-[400px]">
                    {/* Content side */}
                    <div className="p-8 flex flex-col justify-center">
                        <h2
                            className="text-4xl font-bold mb-6 leading-tight"
                            style={{ color: card.closedColorText }}
                        >
                            {card.openContent.title}
                        </h2>
                        <p className="text-gray-700 leading-relaxed text-lg">
                            {card.openContent.description}
                        </p>
                    </div>

                    {/* Image side */}
                    <div className="relative overflow-hidden">
                        <div className="w-full h-full relative">
                            <Image
                                src={card.openContent.img}
                                alt={card.openContent.title}
                                fill
                                className="object-contain p-6"
                            />
                        </div>
                    </div>
                </div>
            </motion.div>
        );
    };

    // Phone component for smaller screens
    const ResponsivePhone = () => {
        const ref = useRef(null);
        const phoneId = "responsive-phone";
        const hasAnimated = animatedItems.has(phoneId);

        const isInView = useInView(ref, { once: true, margin: "-50px" });

        // Track when animation has been triggered
        useEffect(() => {
            if (isInView && !hasAnimated && screenSize !== "lg") {
                setAnimatedItems((prev) => new Set([...prev, phoneId]));
            }
        }, [isInView, hasAnimated, screenSize]);

        return (
            <motion.div
                ref={ref}
                transition={{
                    duration: 0.8,
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                }}
                className="flex justify-center items-center mx-auto py-12"
            >
                <div
                    className={`relative ${
                        screenSize === "sm"
                            ? "w-[280px] h-[500px]"
                            : "w-[350px] h-[600px]"
                    }`}
                >
                    {/* Phone with single floating animation */}
                    <motion.div
                        className="relative w-full h-full"
                        transition={{
                            duration: 1.2,
                            ease: "easeOut",
                            delay: 0.2,
                        }}
                    >
                        <Image
                            src="/chowdeck-app.png"
                            alt="ChowDeck App"
                            fill
                            priority
                            className="object-contain drop-shadow-2xl"
                        />
                    </motion.div>

                    {/* Floating overlay with single animation */}
                    <motion.div
                        className={`absolute ${
                            screenSize === "sm"
                                ? "top-4 right-2 w-[80px] h-[80px]"
                                : "top-6 right-4 w-[100px] h-[100px]"
                        }`}
                        animate={
                            hasAnimated
                                ? {
                                      y: -30,
                                      x: 15,
                                      rotate: 10,
                                      scale: 1.2,
                                  }
                                : { y: 0, x: 0, rotate: 0, scale: 1 }
                        }
                        transition={{
                            duration: 1,
                            ease: "easeOut",
                            delay: 0.5,
                        }}
                    >
                        <Image
                            src="/Pastry.svg"
                            alt="Floating Pastry"
                            fill
                            className="drop-shadow-xl"
                        />
                    </motion.div>

                    {/* Additional floating elements */}
                    <motion.div
                        className="absolute top-1/3 left-0 w-4 h-4 bg-orange-400 rounded-full opacity-70"
                        animate={
                            hasAnimated
                                ? {
                                      y: -40,
                                      opacity: 1,
                                      scale: 1.5,
                                  }
                                : { y: 0, opacity: 0.4, scale: 1 }
                        }
                        transition={{
                            duration: 0.8,
                            ease: "easeOut",
                            delay: 1,
                        }}
                    />
                    <motion.div
                        className="absolute bottom-1/3 right-0 w-6 h-6 bg-green-400 rounded-full opacity-60"
                        animate={
                            hasAnimated
                                ? {
                                      y: 35,
                                      x: -20,
                                      opacity: 0.8,
                                  }
                                : { y: 0, x: 0, opacity: 0.3 }
                        }
                        transition={{
                            duration: 0.8,
                            ease: "easeOut",
                            delay: 1.5,
                        }}
                    />
                </div>
            </motion.div>
        );
    };

    if (screenSize !== "lg") {
        // Mobile and Tablet Layout
        return (
            <div className="relative">
                {/* Diagonal Wavy Divider */}
                <div className="absolute top-[-45] right-0 w-full overflow-hidden leading-none z-40 bg-white">
                    <svg
                        className="relative block w-full h-[80px] rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 80"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M1200,40 C1180,50 1160,50 1140,38 C1120,50 1100,50 1080,36 C1060,50 1040,50 1020,34 C1000,50 980,50 960,32 C940,50 920,50 900,30 C880,50 860,50 840,28 C820,50 800,50 780,26 C760,50 740,50 720,24 C700,50 680,50 660,22 C640,50 620,50 600,20 C580,50 560,50 540,18 C520,50 500,50 480,16 C460,50 440,50 420,14 C400,50 380,50 360,12 C340,50 320,50 300,10 C280,50 260,50 240,8 C220,50 200,50 180,6 C160,50 140,50 120,4 C100,50 80,50 60,2 C40,50 20,50 0,0 L0,80 L1200,80 Z"
                            fill="#6B837D"
                        />
                    </svg>
                </div>

                <div className="bg-white pt-18">
                    {/* Header */}
                    <motion.div
                        className="flex flex-col gap-4 z-10 mb-12 px-4"
                        ref={headerRef}
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <h1
                            className={`font-extrabold text-center text-black ${
                                screenSize === "sm" ? "text-4xl" : "text-5xl"
                            }`}
                        >
                            What's on Deck?
                        </h1>
                        <p
                            className={`font-medium text-center text-black ${
                                screenSize === "sm" ? "text-lg" : "text-xl"
                            }`}
                        >
                            Try the everything app.
                        </p>
                    </motion.div>

                    {/* Phone Section */}
                    <ResponsivePhone />

                    {/* Cards Section */}
                    <div className={screenSize === "sm" ? "py-8" : "py-12"}>
                        {cards.map((card, index) =>
                            screenSize === "md" ? (
                                <TabletCard
                                    key={card.id}
                                    card={card}
                                    index={index}
                                />
                            ) : (
                                <MobileCard
                                    key={card.id}
                                    card={card}
                                    index={index}
                                />
                            )
                        )}
                    </div>
                </div>
            </div>
        );
    }

    // Desktop Layout (original complex animation)
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
                        d="M1200,40 C1180,50 1160,50 1140,38 C1120,50 1100,50 1080,36 C1060,50 1040,50 1020,34 C1000,50 980,50 960,32 C940,50 920,50 900,30 C880,50 860,50 840,28 C820,50 800,50 780,26 C760,50 740,50 720,24 C700,50 680,50 660,22 C640,50 620,50 600,20 C580,50 560,50 540,18 C520,50 500,50 480,16 C460,50 440,50 420,14 C400,50 380,50 360,12 C340,50 320,50 300,10 C280,50 260,50 240,8 C220,50 200,50 180,6 C160,50 140,50 120,4 C100,50 80,50 60,2 C40,50 20,50 0,0 L0,80 L1200,80 Z"
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
                <div ref={containerRef} className="h-[3500vh] relative">
                    <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
                        {/* Phone - starts centered, moves left */}
                        <motion.div
                            style={{
                                x: phoneX,
                                scale: phoneScale,
                                opacity: phoneOpacity,
                            }}
                            className="absolute top-0 left-0 z-40 w-full h-screen flex justify-center items-start"
                        >
                            <div className="relative w-[500px] h-[900px] pt-6 pr-16">
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
                                <div className="absolute top-0 right-7 z-50">
                                    <Image
                                        src="/Pastry.svg"
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
                                    className="rounded-2xl relative overflow-hidden h-[99.5vh] flex items-center justify-center transition-all duration-700 ease-out"
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
                                        className="absolute inset-0 text-gray-800 border-4 border-black overflow-hidden z-20 rounded-2xl"
                                    >
                                        <div className="flex flex-col h-full pt-24">
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
                                            <div className="flex-none h-[65%] flex items-center justify-center relative">
                                                <div className="w-full h-full relative">
                                                    <motion.div
                                                        style={{
                                                            scale: card.imageScale,
                                                        }}
                                                        className="w-full h-full relative z-30"
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
