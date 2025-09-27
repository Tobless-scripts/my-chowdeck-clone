"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { useInView } from "framer-motion";

const cardData = [
    {
        id: 1,
        image: "/Blogpost_banner.png",
        title: "BRAND NEW PS5 FOR ₦3K?",
        subtitle: "Order2Win",
        description:
            "Order food on Chowdeck this September and win prizes like iPhones, PS5, microwaves, wigs, and more. Every order counts!",
        link: "#",
    },
    {
        id: 2,
        image: "/5_Things.png",
        title: "5 THINGS YOU WILL NOT MISS ABOUT NIGERIAN MARKETS",
        subtitle: "5 Things You Will Not Miss About Nigerian Markets",
        description:
            "Skip the stress of Lagos markets. Order fresh groceries online in Nigeria with Chowdeck; on-time delivery, great prices,…",
        link: "#",
    },
    {
        id: 3,
        image: "/Fresh_Online.png",
        title: "9 MILLION DOLLARS AFTER: CHOWDECK’S EXPANSIVE NEW TRAJECTORY",
        subtitle: "$9 Million After",
        description:
            "Chowdeck raises funding to expand food & grocery delivery in Nigeria. Faster service, more cities, fresher produce — the…",
        link: "#",
    },
];

export default function PromoCards() {
    return (
        <div className="w-full py-12 px-6 md:px-14 lg:px-22 bg-white pb-[35vh]">
            <div className="flex items-center justify-start gap-2 mb-6">
                <h1 className="text-3xl md:text-7xl text-black font-bold">
                    Stories
                </h1>

                <div className="relative w-28 h-28">
                    <Image
                        src="/Pasta.svg"
                        alt="pasta"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cardData.map((card) => (
                    <FadeInCard key={card.id} card={card} />
                ))}
            </div>
        </div>
    );
}

function FadeInCard({ card }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="rounded-xl border border-gray-200 shadow-md overflow-hidden bg-white flex flex-col"
        >
            <div className="relative w-full h-48">
                <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="p-4 flex-1 flex flex-col justify-between">
                <h3 className="text-md font-bold text-black leading-tight uppercase mb-4 text-center">
                    {card.title}
                </h3>
                <p className="text-black text-lg font-semibold mb-4 text-center">
                    {card.description}
                </p>
                <button
                    href={card.link}
                    className="text-lg font-medium text-[#1b5c4b] py-3 hover:text-[#f3f6f5] bg-[#f3f6f5] hover:bg-[#1b5c4b] transition-all duration-300 ease-in-out rounded-lg cursor-pointer"
                >
                    Read More
                </button>
            </div>
        </motion.div>
    );
}
