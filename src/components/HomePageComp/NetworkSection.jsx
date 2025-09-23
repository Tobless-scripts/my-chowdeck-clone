"use client";

import Image from "next/image";
import { Star, Circle, Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function JoinNetwork() {
    const cards = [
        {
            id: 1,
            icon: <Star className="w-9 h-9 text-orange-500 fill-orange-500" />,
            title: "Start selling",
            text: "Do you own a restaurant, store, or pharmacy? Join our network to reach new customers and grow your business with ease.",
            img: "/network1.webp",
        },
        {
            id: 2,
            icon: <Circle className="w-9 h-9 text-green-500 fill-green-500" />,
            title: "Deliver happiness",
            text: "Join our elite league of delivery riders delivering happiness to customers and earn to achieve your dreams while at it.",
            img: "/network2.webp",
        },
        {
            id: 3,
            icon: (
                <Sparkles className="w-9 h-9 text-purple-500 fill-purple-500" />
            ),
            title: "Behind the scenes",
            text: "If you are passionate about helping us achieve our goal to deliver meals seamlessly, come join the team.",
            img: "/network3.webp",
        },
    ];

    return (
        <section className="w-full bg-white py-12">
            <h2 className="text-4xl md:text-7xl leading-tight font-extralight text-center text-[#d1d5db] mb-10">
                Join our growing network ↓
            </h2>

            <div className="px-6 md:px-14 lg:px-22 mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {cards.map((card, i) => {
                    const ref = useRef(null);
                    const isInView = useInView(ref, {
                        once: true,
                        margin: "-50px",
                    });

                    return (
                        <motion.div
                            ref={ref}
                            key={card.id}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                duration: 0.6,
                                delay: i * 0.2,
                                ease: "easeOut",
                            }}
                            className="flex flex-col rounded-xl overflow-hidden border-4 border-black bg-white"
                        >
                            <div className="p-6 flex flex-col flex-1">
                                <div className="mb-4">{card.icon}</div>
                                <h3 className="text-black text-2xl md:text-3xl lg:text-4xl font-bold mb-2 tracking-tighter">
                                    {card.title}
                                </h3>
                                <p className="text-[#1e1e1e] text-sm md:text-md lg:text-base font-medium flex-1">
                                    {card.text}
                                </p>
                                <a
                                    href="#"
                                    className="mt-4 flex gap-1 text-sm font-semibold text-black hover:text-[#1e1e1e] hover:underline"
                                >
                                    SEE MORE{" "}
                                    <ArrowRight className="text-black w-5 h-5" />
                                </a>
                            </div>
                            <div className="w-full h-42 border-t-3 border-black relative">
                                <Image
                                    src={card.img}
                                    alt={card.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
