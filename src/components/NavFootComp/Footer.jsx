"use client";

import React, { useState } from "react";
import {
    ArrowRight,
    Star,
    Sparkles,
    Twitter,
    Instagram,
    Facebook,
    Linkedin,
} from "lucide-react";

export default function ChowdeckFooter() {
    const [email, setEmail] = useState("");

    const handleSubmit = () => {
        console.log("Email submitted:", email);
    };

    return (
        <div className="bg-black text-white px-6 md:px-14 lg:px-22">
            {/* Newsletter Section */}
            <div className="border-b border-b-[#202020] bg-black">
                <div className="pt-16 pb-4">
                    {/* Top row */}
                    <div className="flex items-start justify-between border-b-1 border-b-[#202020]">
                        <div className="flex flex-wrap gap-4 items-end ">
                            {/* Left: Icon + Text */}
                            <div className="flex items-center gap-3">
                                <Sparkles className="w-6 h-6 text-[#9c916e] fill-[#9c916e]" />
                                <h2 className="text-3xl md:text-6xl font-extrabold tracking-normal [word-spacing:-0.15em] text-white">
                                    Cool stuff only
                                </h2>
                            </div>
                            <div>
                                {/* Subtitle */}
                                <p className="text-[#9c916e] mt-2 text-md font-semibold">
                                    Subscribe to our newsletter
                                </p>
                            </div>
                        </div>

                        {/* Right: Bag Illustration */}
                        <div className="relative hidden md:block">
                            <img
                                src="/Pack.svg"
                                alt="Bag illustration"
                                className="w-20 h-24 object-contain"
                            />
                        </div>
                    </div>

                    {/* Input field */}
                    <div className="relative mt-4">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="yourname@email.com"
                            className="w-full bg-black py-4 pr-14 text-[#616161] placeholder-[#616161] focus:outline-none focus:border-gray-500 font-extrabold text-base md:text-xl"
                        />

                        <div className="md:px-31.5 md:border-l-1 md:border-l-[#202020] absolute right-0 top-1/2 -translate-y-1/2">
                            <button
                                onClick={handleSubmit}
                                className="text-[#8c77ec] hover:text-purple-300 transition-colors cursor-pointer"
                            >
                                <ArrowRight className="w-6 h-6 md:w-12 md:h-22" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Content */}
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {/* Logo Column */}
                    <div className="hidden md:block md:border-r-1 md:border-r-[#202020] py-16 pr-16">
                        <div className="flex items-center justify-center w-32 h-32 rounded-full bg-teal-900 border-4 border-teal-700">
                            <Star className="w-12 h-12 text-yellow-400 fill-yellow-400" />
                        </div>
                        <div className="mt-4 text-xs text-gray-600 tracking-widest">
                            <div className="flex items-center justify-center gap-1">
                                <span>I</span>
                                <span>T</span>
                                <span>'</span>
                                <span>S</span>
                            </div>
                            <div className="flex items-center justify-center gap-1 mt-1">
                                <span>R</span>
                                <span>E</span>
                                <span>A</span>
                                <span>L</span>
                                <span>L</span>
                                <span>Y</span>
                            </div>
                            <div className="flex items-center justify-center gap-1 mt-1">
                                <span>B</span>
                                <span>E</span>
                                <span>T</span>
                                <span>T</span>
                                <span>E</span>
                                <span>R</span>
                            </div>
                        </div>
                    </div>

                    {/* Company Column */}
                    <div className="grid grid-cols-2 gap-4 md:block md:border-r-1 md:border-r-[#202020] py-16">
                        <h3 className="text-[#666666] text-sm md:text-lg font-semibold mb-8">
                            COMPANY
                        </h3>
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href="#"
                                    className="text-white hover:underline text-sm md:text-md font-medium md:font-semibold transition-colors"
                                >
                                    Customers
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-white hover:underline text-sm md:text-md font-medium md:font-semibold transition-colors"
                                >
                                    Vendors
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-white hover:underline text-sm md:text-md font-medium md:font-semibold transition-colors"
                                >
                                    Riders
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-white hover:underline text-sm md:text-md font-medium md:font-semibold transition-colors"
                                >
                                    Storefront
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-white hover:underline text-sm md:text-md font-medium md:font-semibold transition-colors"
                                >
                                    Documentation
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-white hover:underline text-sm md:text-md font-medium md:font-semibold transition-colors"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-white hover:underline text-sm md:text-md font-medium md:font-semibold transition-colors"
                                >
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-white hover:underline text-sm md:text-md font-medium md:font-semibold transition-colors"
                                >
                                    FAQs
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-white hover:underline text-sm md:text-md font-medium md:font-semibold transition-colors"
                                >
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-white hover:underline text-sm md:text-md font-medium md:font-semibold transition-colors"
                                >
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-white hover:underline text-sm md:text-md font-medium md:font-semibold transition-colors"
                                >
                                    Terms of Use
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-white hover:underline text-sm md:text-md font-medium md:font-semibold transition-colors"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Cuisines Near You Column */}
                    <div className="grid grid-cols-2 gap-4 md:block md:border-r-1 md:border-r-[#202020] py-16">
                        <h3 className="text-[#666666] text-sm md:text-lg font-semibold mb-8">
                            CUISINES NEAR YOU
                        </h3>
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href="#"
                                    className="text-white hover:underline text-sm md:text-md font-medium md:font-semibold transition-colors"
                                >
                                    Pasta near me
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-white hover:underline text-sm md:text-md font-medium md:font-semibold transition-colors"
                                >
                                    Rice near me
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-white hover:underline text-sm md:text-md font-medium md:font-semibold transition-colors"
                                >
                                    Fast food near me
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-white hover:underline text-sm md:text-md font-medium md:font-semibold transition-colors"
                                >
                                    Asian food in Lagos
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-white hover:underline text-sm md:text-md font-medium md:font-semibold transition-colors"
                                >
                                    African food in Lagos
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-white hover:underline text-sm md:text-md font-medium md:font-semibold transition-colors"
                                >
                                    Breakfast menu in Lagos
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-white hover:underline text-sm md:text-md font-medium md:font-semibold transition-colors"
                                >
                                    Fitfam stores in Lagos
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-white hover:underline text-sm md:text-md font-medium md:font-semibold transition-colors"
                                >
                                    American food in Lagos
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-white hover:underline text-sm md:text-md font-medium md:font-semibold transition-colors"
                                >
                                    Pastries in Lagos
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-white hover:underline text-sm md:text-md font-medium md:font-semibold transition-colors"
                                >
                                    Salad in Lagos
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-white hover:underline text-sm md:text-md font-medium md:font-semibold transition-colors"
                                >
                                    Fruits in Lagos
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Popular Column */}
                    <div className="grid grid-cols-2 gap-4 md:block md:border-r-1 md:border-r-[#202020] py-16">
                        <h3 className="text-[#666666] text-sm md:text-lg font-semibold mb-8">
                            POPULAR
                        </h3>
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href="#"
                                    className="text-white hover:underline text-sm md:text-md font-medium md:font-semibold transition-colors"
                                >
                                    Food delivery
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-white hover:underline text-sm md:text-md font-medium md:font-semibold transition-colors"
                                >
                                    Surulere
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-white hover:underline text-sm md:text-md font-medium md:font-semibold transition-colors"
                                >
                                    Ogudu
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-white hover:underline text-sm md:text-md font-medium md:font-semibold transition-colors"
                                >
                                    Yaba
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-white hover:underline text-sm md:text-md font-medium md:font-semibold transition-colors"
                                >
                                    Ikeja
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-white hover:underline text-sm md:text-md font-medium md:font-semibold transition-colors"
                                >
                                    Lekki
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-white hover:underline text-sm md:text-md font-medium md:font-semibold transition-colors"
                                >
                                    King Glab
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-white hover:underline text-sm md:text-md font-medium md:font-semibold transition-colors"
                                >
                                    Korede Spaghetti
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-white hover:underline text-sm md:text-md font-medium md:font-semibold transition-colors"
                                >
                                    Iyan Aladuke
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-white hover:underline text-sm md:text-md font-medium md:font-semibold transition-colors"
                                >
                                    Food Fusion
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-white hover:underline text-sm md:text-md font-medium md:font-semibold transition-colors"
                                >
                                    Belefull
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Social Media and Copyright */}
            <div className="border-t border-gray-800">
                <div className="mx-auto md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 items-center">
                        {/* Logo */}
                        <div className="py-12 hidden md:block">
                            <div className="flex items-center gap-2">
                                <span className="lg:mr-1 text-xl lg:text-3xl">
                                    🔑
                                </span>{" "}
                                <p className="text-2xl sm:text-3xl lg:text-5xl font-bold">
                                    Chowdeck
                                </p>
                            </div>
                        </div>

                        {/* Social Media Grid */}
                        <div className="col-span-2 grid grid-cols-2 md:border-l md:border-gray-800">
                            <a
                                href="#"
                                className="flex items-center justify-center gap-3 py-8 border-b border-r border-gray-800 hover:bg-gray-900 transition-colors"
                            >
                                <Sparkles className="w-5 h-5 text-blue-400 fill-blue-400" />
                                <span className="font-semibold">Twitter</span>
                            </a>
                            <a
                                href="#"
                                className="flex items-center justify-center gap-3 py-8 border-b border-gray-800 hover:bg-gray-900 transition-colors"
                            >
                                <Sparkles className="w-5 h-5 text-pink-400 fill-pink-400" />
                                <span className="font-semibold">Instagram</span>
                            </a>
                            <a
                                href="#"
                                className="flex items-center justify-center gap-3 py-8 border-r border-gray-800 hover:bg-gray-900 transition-colors"
                            >
                                <div className="w-5 h-5 bg-blue-600 rounded-sm flex items-center justify-center">
                                    <span className="text-white text-xs font-bold">
                                        f
                                    </span>
                                </div>
                                <span className="font-semibold">Facebook</span>
                            </a>
                            <a
                                href="#"
                                className="flex items-center justify-center gap-3 py-8 hover:bg-gray-900 transition-colors"
                            >
                                <div className="w-5 h-5 bg-orange-400 rounded-full"></div>
                                <span className="font-semibold">LinkedIn</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-800 py-6">
                    <p className="text-center text-[#5a5a5a] text-xs font-semibold">
                        © All Rights Reserved. 2022, Chowdeck Logistics Inc.
                    </p>
                </div>
            </div>
        </div>
    );
}
