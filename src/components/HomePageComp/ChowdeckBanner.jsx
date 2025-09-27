import React from "react";
import { Download } from "lucide-react";
import Image from "next/image";

export default function ChowdeckBanner() {
    return (
        <div className="w-full bg-[#0c513f] text-white overflow-hidden">
            <div className="mx-auto px-6 md:px-14 lg:px-22 py-8 lg:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <div className="space-y-4">
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight">
                                Chowdeck has <br className="hidden sm:block" />
                                <span className="inline-flex items-center">
                                    you covered
                                    {/* Food Icons Placeholder  */}
                                    <div className="relative w-[70px] md:w-[140px] h-[70px] md:h-[140px]">
                                        <Image
                                            src="/meal.png"
                                            alt="Delicious meal"
                                            fill
                                            quality={100}
                                            className="object-contain rounded-lg"
                                        />
                                    </div>
                                </span>
                            </h1>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="space-y-6">
                        <div className="space-y-4">
                            <p className="text-base sm:text-lg lg:text-xl text-emerald-50 leading-relaxed">
                                What do you need? A quick fix on a busy day?
                                Last-minute dinner backup? Supplies for the
                                week? Download Chowdeck and let's deliver
                                happiness to your doorstep in minutes.
                            </p>
                        </div>

                        {/* CTA Button */}
                        <div className="pt-2">
                            <button className="inline-flex items-center gap-2 bg-white text-emerald-600 hover:bg-emerald-50 transition-all duration-200 px-6 py-3 rounded-lg font-semibold text-sm lg:text-base shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer">
                                <Download className="w-4 h-4 lg:w-5 lg:h-5" />
                                Download Chowdeck
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
                <div className="absolute -top-4 -right-4 w-24 h-24 lg:w-32 lg:h-32 bg-white rounded-full"></div>
                <div className="absolute top-1/2 -left-8 w-16 h-16 lg:w-20 lg:h-20 bg-emerald-400 rounded-full"></div>
                <div className="absolute -bottom-6 right-1/4 w-12 h-12 lg:w-16 lg:h-16 bg-yellow-300 rounded-full"></div>
            </div>
        </div>
    );
}
