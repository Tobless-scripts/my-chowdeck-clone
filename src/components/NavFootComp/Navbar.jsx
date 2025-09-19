"use client";

import { useState } from "react";
import { ChevronDownCircle, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    const [openMenu, setOpenMenu] = useState(null);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-12 md:px-24 py-18 bg-transparent">
            <div className="flex items-center gap-4">
                {/* Logo */}
                <div className="flex items-center bg-[#0c513f] text-white rounded-full px-6 py-2.5 font-semibold cursor-pointer">
                    <span className="mr-1 text-lg">🔑</span> Chowdeck
                </div>

                {/* Country Selector */}
                <div
                    className="relative"
                    onMouseEnter={() => setOpenMenu("country")}
                    onMouseLeave={() => setOpenMenu(null)}
                >
                    <button className="flex items-center gap-1 rounded-full px-6 py-3.5 bg-white shadow cursor-pointer">
                        <Image
                            src="/NigeriaFlag.svg"
                            alt="Nigeria Flag"
                            width={20}
                            height={20}
                        />
                        <span className="text-sm text-black ml-1 font-medium">
                            NG
                        </span>
                        <ChevronDownCircle
                            size={20}
                            className="text-[#0c513f]"
                        />
                    </button>

                    {/* Dropdown with fade only */}
                    <div
                        className={`absolute top-full left-0 mt-2 w-40 rounded-lg py-2 space-y-2 transition-opacity duration-500 ${
                            openMenu === "country"
                                ? "opacity-100"
                                : "opacity-0 pointer-events-none"
                        }`}
                    >
                        <button className="flex items-left gap-1 rounded-full px-6 py-3.5 bg-white shadow cursor-pointer font-semibold border border-gray-100">
                            <Image
                                src="/GhanaFlag.svg"
                                alt="Ghana Flag"
                                width={20}
                                height={20}
                            />
                            <span className="text-md text-black ml-1 font-semibold tracking-wider">
                                Ghana
                            </span>
                        </button>
                        <button className="flex items-left gap-1 rounded-full px-6 py-3.5 bg-white shadow cursor-pointer font-semibold border border-gray-100">
                            <Image
                                src="/NigeriaFlag.svg"
                                alt="Nigeria Flag"
                                width={20}
                                height={20}
                            />
                            <span className="text-md text-black ml-1 font-semibold tracking-wider">
                                Nigeria
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Center Menu */}
            <div className="relative flex items-center bg-white rounded-full shadow px-8 ml-8 py-4 gap-8">
                <Link
                    href="#"
                    className="text-black font-semibold cursor-pointer"
                >
                    Company
                </Link>
                <Link
                    href="#"
                    className="text-black font-semibold cursor-pointer"
                >
                    Vendors
                </Link>
                <Link
                    href="#"
                    className="text-black font-semibold cursor-pointer"
                >
                    Riders
                </Link>

                {/* Products Dropdown */}
                <div
                    onMouseEnter={() => setOpenMenu("products")}
                    onMouseLeave={() => setOpenMenu(null)}
                    className="relative"
                >
                    <button className="flex items-center gap-1 text-black font-semibold cursor-pointer">
                        Products{" "}
                        <ChevronDownCircle
                            className={`transform transition-transform duration-500 ${
                                openMenu === "products"
                                    ? "rotate-180"
                                    : "rotate-0"
                            }`}
                            size={20}
                        />
                    </button>

                    <div
                        className={`absolute mt-4 rounded-lg py-2 space-y-2 transform origin-top transition-all duration-700 ${
                            openMenu === "products"
                                ? "scale-y-100 opacity-100"
                                : "scale-y-0 opacity-0 pointer-events-none"
                        }`}
                    >
                        <button className="flex items-center ml-auto gap-2 text-black font-semibold cursor-pointer bg-white rounded-full shadow px-6 py-2.5 border border-gray-100">
                            Chowpass
                        </button>
                        <button className="flex items-center gap-2 ml-auto text-black font-semibold cursor-pointer bg-white rounded-full shadow px-6 py-2.5 border border-gray-100">
                            Relay
                        </button>
                    </div>
                </div>
            </div>

            {/* More Dropdown */}
            <div className="ml-26 flex items-center bg-white rounded-full shadow ">
                {/* Products Dropdown */}
                <div
                    onMouseEnter={() => setOpenMenu("more")}
                    onMouseLeave={() => setOpenMenu(null)}
                >
                    <button className="flex items-center gap-1 px-8 py-3.5 text-black font-semibold cursor-pointer">
                        More{" "}
                        <ChevronDownCircle
                            className={`transform transition-transform duration-500 ${
                                openMenu === "more" ? "rotate-180" : "rotate-0"
                            }`}
                            size={20}
                        />
                    </button>

                    <div
                        className={`absolute rounded-lg w-40 space-y-2 transform origin-top transition-all duration-700 ${
                            openMenu === "more"
                                ? "scale-y-100 opacity-100"
                                : "scale-y-0 opacity-0 pointer-events-none"
                        }`}
                    >
                        <div className="absolute mt-2 rounded-lg py-1 space-y-2">
                            <button className="flex items-center ml-auto gap-2 text-black font-semibold cursor-pointer bg-white rounded-full shadow px-6 py-2.5 border border-gray-100">
                                Contact Us
                            </button>
                            <button className="flex items-center gap-2 ml-auto text-black font-semibold cursor-pointer bg-white rounded-full shadow px-6 py-2.5 border border-gray-100">
                                FAQs
                            </button>
                            <button className="flex items-center gap-2 ml-auto text-black font-semibold cursor-pointer bg-white rounded-full shadow px-6 py-2.5 border border-gray-100">
                                Blog
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Cart */}
            <button className="rounded-full bg-white shadow p-4 cursor-pointer">
                <ShoppingCart className="text-green-600" size={22} />
            </button>
        </nav>
    );
}
