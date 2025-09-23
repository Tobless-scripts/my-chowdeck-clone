"use client";

import { useState, useEffect } from "react";
import {
    ChevronDownCircle,
    ShoppingCart,
    X,
    Users,
    CircleDollarSign,
    Bike,
    Store,
    Truck,
    Building2,
    BookOpen,
    Contact2,
    Twitter,
    Instagram,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    const [openMenu, setOpenMenu] = useState(null);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // ✅ Track scroll
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-10 md:px-18 lg:px-26 
                transition-all duration-300 ${
                    isScrolled ? "py-4" : "py-12 lg:py-18 bg-transparent"
                }`}
            >
                <div className="flex items-center gap-4">
                    {/* Logo */}
                    <div className="flex items-center justify-center bg-[#0c513f] text-white rounded-full px-2 lg:px-6 py-2 lg:py-2.5 font-semibold cursor-pointer">
                        <span className="lg:mr-1 text-md lg:text-lg">🔑</span>{" "}
                        <p className="hidden lg:block">Chowdeck</p>
                    </div>

                    {/* Country Selector */}
                    <div
                        className="relative"
                        onMouseEnter={() => setOpenMenu("country")}
                        onMouseLeave={() => setOpenMenu(null)}
                    >
                        <button className="flex items-center justify-center gap-1 rounded-full px-3 lg:px-6 py-3 lg:py-3.5 bg-white shadow cursor-pointer">
                            <Image
                                src="/NigeriaFlag.svg"
                                alt="Nigeria Flag"
                                width={20}
                                height={20}
                                className="max-lg:w-5 max-lg:h-5"
                            />
                            <span className="hidden md:block text-sm text-black ml-1 font-medium">
                                NG
                            </span>
                            <ChevronDownCircle
                                size={20}
                                className="hidden md:block text-[#0c513f]"
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
                <div className="relative hidden lg:flex items-center bg-white rounded-full shadow px-8 ml-8 py-4 gap-8">
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
                <div className="ml-26 hidden lg:flex items-center bg-white rounded-full shadow ">
                    {/* Products Dropdown */}
                    <div
                        onMouseEnter={() => setOpenMenu("more")}
                        onMouseLeave={() => setOpenMenu(null)}
                    >
                        <button className="flex items-center gap-1 px-8 py-3.5 text-black font-semibold cursor-pointer">
                            More{" "}
                            <ChevronDownCircle
                                className={`transform transition-transform duration-500 ${
                                    openMenu === "more"
                                        ? "rotate-180"
                                        : "rotate-0"
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

                <div className="flex gap-2">
                    {/* Cart */}
                    <button className="rounded-full bg-white shadow-md p-2 lg:p-4 cursor-pointer">
                        <ShoppingCart className="text-green-600" size={22} />
                    </button>
                    {/* Hamburger Icon */}
                    <div
                        className="flex lg:hidden items-center justify-center cursor-pointer"
                        onClick={() => setDrawerOpen(true)}
                    >
                        <div className="bg-[#155B4A] rounded-full w-10 h-10 flex items-center justify-center">
                            <div className="flex flex-col gap-1">
                                <span className="block w-5 h-0.5 bg-white rounded"></span>
                                <span className="block w-5 h-0.5 bg-white rounded"></span>
                                <span className="block w-5 h-0.5 bg-white rounded"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            {/* Mobile Drawer */}
            <div
                className={`fixed inset-0 z-[100] ${
                    drawerOpen ? "pointer-events-auto" : "pointer-events-none"
                }`}
            >
                {/* Overlay */}
                <div
                    className={`absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-500 ease-in-out ${
                        drawerOpen ? "opacity-100" : "opacity-0"
                    }`}
                    onClick={() => setDrawerOpen(false)}
                ></div>

                {/* Drawer */}
                <div
                    className={`fixed top-0 left-0 h-full w-full bg-black text-white shadow-lg transform transition-transform duration-500 ease-in-out no-scrollbar ${
                        drawerOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
                >
                    {/* Top: Cart + Cancel */}
                    <div className="flex items-center justify-between px-4 py-5 bg-black sticky top-0 z-10">
                        {/* Logo */}
                        <div className="flex items-center justify-center bg-[#0c513f] text-white rounded-full px-4 py-2.5 gap-1 font-semibold cursor-pointer">
                            <span className="lg:mr-1 text-md ">🔑</span>{" "}
                            <p className="block">Chowdeck</p>
                        </div>
                        <div className="flex gap-2">
                            <button className="rounded-full bg-white shadow p-4 cursor-pointer">
                                <ShoppingCart
                                    className="text-green-600"
                                    size={22}
                                />
                            </button>
                            <button
                                className="rounded-full bg-transparent text-white p-2 ml-2 cursor-pointer"
                                onClick={() => setDrawerOpen(false)}
                            >
                                <X size={26} />
                            </button>
                        </div>
                    </div>

                    {/* Links: scrollable section */}
                    <div className="overflow-y-auto max-h-[calc(100vh-80px)] pb-6 scrollbar-hide">
                        <ul className="flex flex-col">
                            <li>
                                <Link
                                    href="#"
                                    className="flex items-center gap-3 px-6 py-10 hover:bg-[#155B4A] text-yellow-400 font-semibold"
                                >
                                    {/* Users icon for Customers */}
                                    <span className="text-yellow-400">
                                        <Users size={32} />
                                    </span>
                                    Customers
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="flex items-center gap-3 px-6 py-10 border-t border-gray-800 hover:bg-[#155B4A]"
                                >
                                    {/* Circle Dollar Sign icon for Chowpass */}
                                    <span className="text-purple-400">
                                        <CircleDollarSign size={32} />
                                    </span>
                                    Chowpass
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="flex items-center gap-3 px-6 py-10 border-t border-gray-800 hover:bg-[#155B4A]"
                                >
                                    {/* Bike icon for Relay */}
                                    <span className="text-pink-400">
                                        <Bike size={32} />
                                    </span>
                                    Relay
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="flex items-center gap-3 px-6 py-10 border-t border-gray-800 hover:bg-[#155B4A]"
                                >
                                    {/* Store icon for Vendors */}
                                    <span className="text-blue-300">
                                        <Store size={32} />
                                    </span>
                                    Vendors
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="flex items-center gap-3 px-6 py-10 border-t border-gray-800 hover:bg-[#155B4A]"
                                >
                                    {/* Truck icon for Riders */}
                                    <span className="text-green-300">
                                        <Truck size={32} />
                                    </span>
                                    Riders
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="flex items-center gap-3 px-6 py-10 border-t border-gray-800 hover:bg-[#155B4A]"
                                >
                                    {/* Building icon for Company */}
                                    <span className="text-orange-300">
                                        <Building2 size={32} />
                                    </span>
                                    Company
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="flex items-center gap-3 px-6 py-10 border-t border-gray-800 hover:bg-[#155B4A]"
                                >
                                    {/* BookOpen icon for Blog */}
                                    <span className="text-green-400">
                                        <BookOpen size={32} />
                                    </span>
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="flex items-center gap-3 px-6 py-10 border-t border-gray-800 hover:bg-[#155B4A]"
                                >
                                    {/* Contact2 (Phone) icon for Contact */}
                                    <span className="text-yellow-400">
                                        <Contact2 size={32} />
                                    </span>
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="flex items-center gap-3 px-6 py-10 border-t border-gray-800 hover:bg-[#155B4A]"
                                >
                                    {/* Twitter icon for Twitter */}
                                    <span className="text-blue-400">
                                        <Twitter size={32} />
                                    </span>
                                    Twitter
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="flex items-center gap-3 px-6 py-10 border-t border-gray-800 hover:bg-[#155B4A]"
                                >
                                    {/* Instagram icon for Instagram */}
                                    <span className="text-purple-400">
                                        <Instagram size={32} />
                                    </span>
                                    Instagram
                                </Link>
                            </li>
                        </ul>
                        <div className="w-full text-center text-gray-400 text-sm py-6 border-t border-gray-800">
                            © All Rights Reserved. 2025 Chowdeck Technologies
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
