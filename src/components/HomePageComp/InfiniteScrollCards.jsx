"use client";

import React from "react";
import { Apple, Sparkles, Heart, Zap, Bell } from "lucide-react";
import Image from "next/image";

const InfiniteScrollCards = () => {
    const cards = [
        {
            icon: Apple,
            text: "Quality meal choices",
            color: "bg-orange-500/20 border-orange-500/30",
        },
        {
            icon: Sparkles,
            text: "Fresh market picks",
            color: "bg-emerald-500/20 border-emerald-500/30",
        },
        {
            icon: Heart,
            text: "Essential healthcare supplies",
            color: "bg-pink-500/20 border-pink-500/30",
        },
        {
            icon: Zap,
            text: "Quick-grab groceries",
            color: "bg-amber-500/20 border-amber-500/30",
        },
        {
            icon: Bell,
            text: "Live updates",
            color: "bg-purple-500/20 border-purple-500/30",
        },
    ];

    const duplicatedCards = Array(50).fill(cards).flat();

    return (
        <div className="bg-[#0c513f] py-12 flex items-center overflow-hidden">
            <div className="w-full">
                <div className="flex animate-scroll">
                    {duplicatedCards.map((card, index) => {
                        const IconComponent = card.icon;
                        return (
                            <div
                                key={index}
                                className={`
                                    flex-shrink-0 mx-4 px-6 py-4 rounded-2xl
                                    backdrop-blur-md bg-white/10 border border-white/20
                                    shadow-xl hover:shadow-2xl
                                    transition-all duration-300 hover:scale-105
                                    ${card.color}
                                    min-w-max
                                `}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-full bg-white/20 backdrop-blur-sm">
                                        <IconComponent className="w-5 h-5 text-white" />
                                    </div>
                                    <span className="text-white font-medium text-sm whitespace-nowrap">
                                        {card.text}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <InfiniteScrollImages />
            </div>

            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-33.33%);
                    }
                }

                .animate-scroll {
                    animation: scroll 200s linear infinite;
                    display: flex;
                    width: max-content;
                }
            `}</style>
        </div>
    );
};

const InfiniteScrollImages = () => {
    const images = [
        {
            id: 1,
            src: "/pickup.png",
            alt: "Order accepted notification",
            position: "top",
        },
        {
            id: 2,
            src: "/order-transit.png",
            alt: "Happy family gathering",
            position: "bottom",
        },
        {
            id: 3,
            src: "/order-arrived.png",
            alt: "Rider picked up order",
            position: "top",
        },
        {
            id: 4,
            src: "/accept-order.png",
            alt: "Family mealtime",
            position: "bottom",
        },
    ];

    const duplicatedImages = Array(50).fill(images).flat();

    return (
        <div className="lg:min-h-screen flex items-center overflow-hidden py-12 px-6 md:px-14 lg:px-22">
            <div className="w-full">
                <div className="flex animate-scroll items-start">
                    {duplicatedImages.map((image, index) => (
                        <div
                            key={`${image.id}-${index}`}
                            className={`flex-shrink-0 mx-2 sm:mx-3 md:mx-4 transition-all duration-300 ${
                                image.position === "bottom"
                                    ? "mt-8 md:mt-12"
                                    : "mt-0"
                            }`}
                        >
                            <div className="relative group">
                                <div className="relative w-[55vw] h-[85vh] sm:w-[45vw] sm:h-[100vh] md:w-[30vw] md:h-[80vh] lg:w-[25vw] lg:h-[105vh] py-8">
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        width={800}
                                        height={800}
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-33.33%);
                    }
                }

                .animate-scroll {
                    animation: scroll 250s linear infinite;
                    display: flex;
                    width: max-content;
                }

                @media (max-width: 374px) {
                    .animate-scroll {
                        animation-duration: 200s;
                    }
                }

                @media (min-width: 1024px) {
                    .animate-scroll {
                        animation-duration: 300s;
                    }
                }
            `}</style>
        </div>
    );
};

export default InfiniteScrollCards;
