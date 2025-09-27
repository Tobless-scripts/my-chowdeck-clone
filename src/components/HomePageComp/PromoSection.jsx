"use client";

import Image from "next/image";
import { Percent } from "lucide-react";

export default function PromoSection() {
    return (
        <section className="w-full py-10 static">
            <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center px-6 md:px-14 lg:px-22 h-[60vh] md:h-[55vh] lg:h-[105vh] 2xl:h-[65vh] 3xl:h-[45vh]">
                {/* Left Section */}
                <div className="bg-[#0c513f] rounded-xl p-8 flex flex-col relative h-full">
                    {/* Header Text */}
                    <h1 className="text-xl md:text-3xl lg:text-6xl font-bold md:font-extrabold tracking-tighter leading-tighter text-white">
                        Place your order in seconds
                    </h1>

                    {/* Play Store button */}
                    <div className="flex lg:flex-col gap-3 items-start mt-4 lg:mt-10">
                        {/* Google Play */}
                        <a
                            href="#"
                            className="flex items-center py-2 lg:pl-3 lg:pr-6 lg:py-3 max-lg:rounded-full rounded-md bg-white shadow-sm hover:shadow-md transition duration-200"
                        >
                            <Image
                                src="/PlayStore.svg"
                                alt="Google Play"
                                width={45}
                                height={45}
                            />
                            <span className="hidden lg:block text-md font-semibold text-[#0c513f]">
                                Download on Google Play
                            </span>
                        </a>

                        {/* App Store */}
                        <a
                            href="#"
                            className="flex items-center px-2 py-2 gap-2 lg:px-6 lg:py-3 max-lg:rounded-full rounded-md bg-white shadow-sm hover:shadow-md transition duration-200"
                        >
                            <Image
                                src="/GreenAppleIcon.png"
                                alt="App Store"
                                width={25}
                                height={25}
                            />
                            <span className="hidden lg:block text-md font-semibold text-[#0c513f]">
                                Download on App Store
                            </span>
                        </a>
                    </div>

                    {/* Promo code section */}
                    <div className="absolute bottom-5 left-0 flex flex-col gap-4">
                        {/* Discount icon */}
                        <div className="block md:hidden lg:block relative w-[90px] sm:w-[80px] md:w-[120px] lg:w-[200px] h-[12vh] sm:h-[80px] md:h-[120px] xl:h-[200px]">
                            <Image
                                src="/Promo-code.svg"
                                alt="Google Play"
                                fill
                                className="object-contain"
                            />
                        </div>

                        {/* Promo code box */}
                        <div className="flex items-center gap-2 px-4 lg:px-8">
                            <button className="bg-yellow-400 px-6 py-2 rounded-lg text-black font-bold shadow border-4 border-black transition">
                                CDNWEB
                            </button>
                        </div>

                        {/* Description */}
                        <p className="text-sm sm:text-md font-medium sm:font-semibold text-white max-w-[60%] px-4 lg:px-8">
                            Get{" "}
                            <span className="text-yellow-400 font-medium sm:font-semibold">
                                ₦300 off
                            </span>{" "}
                            your first order when you use this promo code!
                        </p>
                    </div>

                    {/* Bottle and can illustration */}
                    <div className="absolute bottom-0 sm:bottom-3 lg:-bottom-10 right-3 lg:right-6 flex items-end">
                        <div className="relative w-[100px] sm:w-[160px] md:w-[120px] lg:w-[180px] h-[45vh] sm:h-[180px] md:h-[240px] lg:h-[540px]">
                            <Image
                                src="/drink.svg"
                                alt="Bottle"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="hidden md:block rounded-xl overflow-hidden h-full">
                    <Image
                        src="/placeImg.webp"
                        alt="Phone in hand"
                        width={600}
                        height={500}
                        className="rounded-xl object-cover w-full h-full"
                    />
                </div>
            </div>
        </section>
    );
}
