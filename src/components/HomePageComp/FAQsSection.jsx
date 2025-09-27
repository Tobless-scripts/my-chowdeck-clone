"use client";

import React, { useState, useRef, useEffect } from "react";
import { Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQComponent = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [scrollTop, setScrollTop] = useState(0);
    const [scrollHeight, setScrollHeight] = useState(0);
    const [clientHeight, setClientHeight] = useState(0);
    const scrollContainerRef = useRef(null);

    const faqs = [
        {
            question: "What is Chowdeck?",
            answer: "Chowdeck is a technology company that provides logistics services to both vendors and customers. Our services allow vendors to deliver their products seamlessly while providing customers with an easy platform to order meals, groceries, everyday essentials, and health products. Our platform curates a wide range restaurants, markets, shops, and pharmacies in customers' city and helps them purchase and access their needs conveniently.",
        },
        {
            question: "Does Chowdeck deliver groceries?",
            answer: "Yes, we do. You can order groceries on Chowdeck and get them delivered to your doorstep. That includes fresh produce from local markets, everyday essentials from supermarkets, pantry staples like rice, beans, and oil, plus snacks, drinks, and cleaning supplies. It's the easiest way to keep your home stocked without the stress of market runs.",
        },
        {
            question: "Will my groceries be fresh if I order on Chowdeck?",
            answer: "Freshness is one of the most important parts of grocery delivery at Chowdeck. We make sure you don't lose out on quality. We work with trusted supermarkets and well-known local markets so your fruits, vegetables, meat, and fish arrive crisp, clean, and ready to use. Everything is sourced the same way you would in person, only with less stress. And because delivery is on time, you don't have to worry about items sitting around because they go from market stall to your kitchen in record time.",
        },
        {
            question: "How do I sign up as a vendor on Chowdeck?",
            answer: "Go to Playstore or App Store on your phone, search for Chowdeck Vendor and download the app. Create an account in minutes by entering your personal and business details, set up your restaurant with menu items and prices, opening and closing times, average preparation time, tags and pictures. Our restaurant team will review and send a required agreement to be signed before you're fully live on the app. Read here for more.",
        },
        {
            question: "How do I create an account on Chowdeck?",
            answer: "Go to Playstore or App Store on your phone, search for Chowdeck and download the app. Create an account in seconds by entering your details and verifying your phone number and email address.",
        },
        {
            question: "Does Chowdeck deliver only food?",
            answer: "No, Chowdeck delivers more than just food. In addition to meals from your favourite restaurants, you can also order fresh produce from local markets, everyday essentials from nearby shops, and healthcare items from trusted pharmacies, all in one app.",
        },
        {
            question: "What is Chowdeck wallet?",
            answer: "Chowdeck wallet is a safe feature on the app where you can put in money for later use. The money in the Chowdeck wallet can be used to make payments for orders placed on the app. When an order gets rejected due to various reasons, the payment made initially when the order was placed automatically goes into your Chowdeck wallet which is accessible to make payments for future orders. You can always request a withdrawal to your local account..",
        },
        {
            question: "What is Chowscore?",
            answer: "Your Chowscore is the extent of your bragging rights on the app. The higher it goes, the more perks you unlock. It tracks how active you've been since joining: placing orders, rating vendors and riders, dropping reviews, and referring friends. The more you do, the more points you rack up. Climb tiers to unlock exclusive discounts, free delivery, and flex-worthy rewards.",
        },
        {
            question: "What is Service fee?",
            answer: "The service fee is a consumer charge that appears in the price breakdown at checkout on the Chowdeck app. It's calculated as a percentage of your order subtotal (excluding the delivery fee), and it helps support platform operations. To keep things fair, we've capped the fee so it doesn't grow excessively with higher order amounts. The service fee does not apply to all vendors on the platform.",
        },
        {
            question: "How do we charge Service fee?",
            answer: "Operating an on-demand delivery platform comes with high costs, from technology and support to transaction processing and logistics. The service fee helps us cover these costs so we can continue serving you, our deserving customer. It also helps us maintain high standards while making Chowdeck reliable for everyone. We appreciate your continued support.",
        },
        {
            question: "What is Surge fee?",
            answer: "A surge fee is a dynamic flat fee that may appear when a lot of people are ordering at the same time and there aren't enough riders available in your area. The surge fee is added to your subtotal during checkout on the Chowdeck app. It is calculated based on the number of active orders versus available riders nearby.",
        },
        {
            question: "How do we charge Surge fee?",
            answer: "The surge fee helps motivate and reward Chowdeck Champions (our delivery riders) for working during busy hours, bad weather, or heavy traffic. It ensures we can keep fulfilling orders quickly, even when conditions aren't ideal. This way, you still get what you need without long delays. We sincerely appreciate your patronage as we establish ourselves across Africa.",
        },
        {
            question: "How do I update my profile?",
            answer: "On the app, you can update your account details, delivery address and profile picture with avatars. Go to Profile on the homepage and make necessary edits.",
        },
        {
            question: "How do I delete a saved card?",
            answer: "On the app, you can delete your saved card details. Go to Profile on the homepage and click on Wallet. Click the Bin icon at the right of the saved card to delete the card.",
        },
        {
            question: "How do I fund/top up my Chowdeck wallet?",
            answer: "From the home page, click on Profile at the bottom right. Select Wallet, at the top right click on Add Money and you'll be able to fund your wallet with either your saved card or via a payment gateway. The added amount will reflect in your wallet balance after transaction as been completed.",
        },
        {
            question: "What locations do we currently deliver to?",
            answer: "We currently pick up and also deliver food to cities across in Lagos, Abuja, Ibadan, Port-Harcourt, Ilorin, Benin City, Abeokuta, Owerri, Enugu, Kaduna and Asaba. This means you can find your favourite restaurants, supermarkets, pharmacies and local markets in these locations and order your meals from them. There are ongoing plans to expand to other areas of Nigeria soon.",
        },
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (scrollContainerRef.current) {
                const { scrollTop, scrollHeight, clientHeight } =
                    scrollContainerRef.current;
                setScrollTop(scrollTop);
                setScrollHeight(scrollHeight);
                setClientHeight(clientHeight);
            }
        };

        const scrollContainer = scrollContainerRef.current;
        if (scrollContainer) {
            scrollContainer.addEventListener("scroll", handleScroll);
            handleScroll(); // Initialize values
            return () =>
                scrollContainer.removeEventListener("scroll", handleScroll);
        }
    }, []);

    const scrollPercentage =
        scrollHeight > clientHeight
            ? scrollTop / (scrollHeight - clientHeight)
            : 0;
    const thumbHeight = Math.max((clientHeight / scrollHeight) * 100, 10);
    const thumbTop = scrollPercentage * (100 - thumbHeight);

    const handleCustomScrollbarClick = (e) => {
        if (scrollContainerRef.current) {
            const rect = e.currentTarget.getBoundingClientRect();
            const clickPosition = (e.clientY - rect.top) / rect.height;
            const scrollPosition =
                clickPosition * (scrollHeight - clientHeight);
            scrollContainerRef.current.scrollTop = scrollPosition;
        }
    };

    return (
        <div className="relative mt-[-100px] min-h-screen px-6 md:px-14 lg:px-22 mx-auto rounded-3xl">
            <div className="bg-[#f1f1f1] border-4 border-black rounded-3xl">
                {/* Desktop Layout */}
                <div className="hidden lg:grid lg:grid-cols-2 gap-8 h-full relative bg-white rounded-3xl">
                    {/* FAQs Section */}
                    <div className="bg-white p-6 md:p-8 rounded-3xl">
                        <h2 className="text-4xl md:text-6xl font-extrabold text-[#0c513f] mb-8">
                            FAQs.
                        </h2>

                        <div
                            ref={scrollContainerRef}
                            className="space-y-3 max-h-[600px] overflow-y-auto pr-4 scrollbar-hide"
                        >
                            {faqs.map((faq, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveIndex(index)}
                                    className={`w-full text-left p-4 tracking-tight md:p-6 rounded-2xl transition-all duration-300 ease-in-out transform hover:scale-[1.02] cursor-pointer ${
                                        activeIndex === index
                                            ? "bg-black text-white"
                                            : "bg-gray-50 text-[#0c513f] hover:bg-gray-100"
                                    }`}
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="font-semibold sm:text-xs md:text-md lg:text-lg pr-2">
                                            {faq.question}
                                        </span>
                                        {activeIndex === index && (
                                            <Star className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-current flex-shrink-0" />
                                        )}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Custom Scrollbar Between Sections */}
                    {scrollHeight > clientHeight && (
                        <div className="absolute left-1/2 top-1/2 w-8 h-[70%] flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 z-10">
                            <div
                                className="w-6 h-full bg-[#f1f1f1] rounded-full px-1 cursor-pointer relative"
                                onClick={handleCustomScrollbarClick}
                            >
                                <motion.div
                                    className="absolute w-4 my-1 bg-white rounded-full"
                                    style={{
                                        height: `${thumbHeight}%`,
                                        top: `${thumbTop}%`,
                                    }}
                                    animate={{
                                        top: `${thumbTop}%`,
                                    }}
                                    transition={{
                                        type: "tween",
                                        duration: 0.1,
                                        ease: "easeOut",
                                    }}
                                />
                            </div>
                        </div>
                    )}

                    {/* Answer Section */}
                    <div className="bg-white p-6 md:p-8 rounded-3xl">
                        <h2 className="text-4xl md:text-6xl font-extrabold text-[#0c513f] mb-8">
                            Ans.
                        </h2>

                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="bg-yellow-400 rounded-3xl p-6 md:p-8 min-h-[600px] flex flex-col justify-start"
                        >
                            <Star className="w-4 h-4 md:w-6 fill-black md:h-6 text-black mb-2 md:mb-4" />
                            <p className="text-black text-xl md:text-2xl font-normal leading-relaxed">
                                {faqs[activeIndex].answer}
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Mobile Layout */}
                <div className="lg:hidden">
                    <div className="bg-white p-6 rounded-3xl">
                        <h2 className="text-4xl font-bold text-[#0c513f] mb-8">
                            FAQs.
                        </h2>

                        <div className="space-y-3">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="border-b border-gray-100 last:border-b-0"
                                >
                                    <button
                                        onClick={() =>
                                            setActiveIndex(
                                                activeIndex === index
                                                    ? -1
                                                    : index
                                            )
                                        }
                                        className={`w-full text-left p-4 rounded-2xl transition-all duration-300 ease-in-out cursor-pointer ${
                                            activeIndex === index
                                                ? "bg-black text-white shadow-lg mb-4"
                                                : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                                        }`}
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="font-semibold text-sm md:text-lg pr-4">
                                                {faq.question}
                                            </span>
                                            {activeIndex === index && (
                                                <Star className="w-5 h-5 text-yellow-400 fill-current flex-shrink-0" />
                                            )}
                                        </div>
                                    </button>

                                    <AnimatePresence>
                                        {activeIndex === index && (
                                            <motion.div
                                                initial={{
                                                    opacity: 0,
                                                    height: 0,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    height: "auto",
                                                }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{
                                                    duration: 0.4,
                                                    ease: [
                                                        0.04, 0.62, 0.23, 0.98,
                                                    ],
                                                }}
                                                className="overflow-hidden"
                                            >
                                                <div className="bg-yellow-400 rounded-2xl p-6 mb-4">
                                                    <div className="flex flex-col md:flex-row items-start">
                                                        <Star className="w-4 h-4 fill-black text-black mr-3 mb-2 mt-1 flex-shrink-0" />
                                                        <p className="text-black text-xs md:text-lg font-normal leading-relaxed">
                                                            {faq.answer}
                                                        </p>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }

                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </div>
    );
};

export default FAQComponent;
