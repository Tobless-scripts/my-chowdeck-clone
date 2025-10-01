"use client";

import React from "react";
import {
    Headphones,
    Radio,
    ShoppingBasket,
    ShoppingCart,
    Star,
    UserPlus,
    Utensils,
} from "lucide-react";
import Image from "next/image";

const InfiniteScrollCards = () => {
    const cards = [
        {
            icon: UserPlus,
            text: "Quick and easy onboarding",
            color: "fill-yellow-500",
            theme: "text-yellow-500",
        },
        {
            icon: Utensils,
            text: "Quality meal choices",
            color: "fill-orange-500",
            theme: "text-orange-500",
        },
        {
            icon: ShoppingBasket,
            text: "Fresh market picks",
            color: "fill-green-500",
            theme: "text-green-500",
        },
        {
            icon: ShoppingCart,
            text: "Quick-grab groceries",
            color: "fill-orange-900",
            theme: "text-orange-900",
        },
        {
            icon: Radio,
            text: "Live updates on orders",
            color: "fill-purple-500",
            theme: "text-purple-500",
        },
        {
            icon: Star,
            text: "Highly rated riders",
            color: "fill-green-500",
            theme: "text-green-500",
        },
        {
            icon: Headphones,
            text: "24/7 support for customers and vendors",
            color: "fill-pink-500",
            theme: "text-pink-500",
        },
    ];

    const duplicatedCards = Array(50).fill(cards).flat();

    return (
        <div className="py-12 flex items-center overflow-hidden">
            <div className="w-full">
                <div className="flex animate-scroll">
                    {duplicatedCards.map((card, index) => {
                        const IconComponent = card.icon;
                        return (
                            <div
                                key={index}
                                className={`
                                    flex-shrink-0 mx-4 px-6 py-3.5 rounded-lg
                                    backdrop-blur-md bg-white/10 border border-white/20
                                    transition-all duration-300
                                    min-w-max
                                `}
                            >
                                <div className="flex items-center gap-3">
                                    <IconComponent
                                        className={`w-7 h-7 ${card.theme} ${card.color}`}
                                    />

                                    <span className="text-white font-semibold text-md whitespace-nowrap">
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
                                <div className="relative w-[55vw] h-[54vh] sm:w-[45vw] sm:h-[49vh] md:w-[30vw] md:h-[49vh] lg:w-[25vw] lg:h-[105vh] py-8">
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
