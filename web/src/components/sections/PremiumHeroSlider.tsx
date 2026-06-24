"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "../ui/Button";
import type { HomepageContent } from "@/lib/content/schema";
import { MaterialIcon } from "../ui/MaterialIcon";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useSwipeable } from "react-swipeable";
import "swiper/css";
import Link from "next/link";
const AUTO_PLAY_DELAY = 5000;
const BG_TRANSITION_DURATION = 1800;

// 0 = immediately
// 0.5 = middle of wipe
// 1 = after wipe finishes
const CONTENT_SWITCH_AT = 0.3;

const slides = [
    {
        id: 1,
        bgColor: "#EEEEEE",
        textColor: "#111111",
        title: "Know Where Every Lorry Is. Right Now.",
        p1: "GPS. Fuel Control. APAD Done For You. Al In One Place",
        description:
            "Stop chasing drivers on WhatsApp. Stop guessing where your lorries are. TCMS.ai shows you everything — on your phone, right now.",
        image:
            "/tcmsH1.png",
    },
    {
        id: 2,
        bgColor: "#F3F4F5",
        textColor: "#111111",
        title: "You Know. Right Now. Where Every Lorry Is",
        description: "No more calling drivers every hour. Open the app and see every lorry moving on the map — live. It's that simple.",
        image:
            "/webpImages/dashboard.webp",
    },
    {
        id: 3,
        bgColor: "#F8F9FA",
        textColor: "#111111",
        title: "Never Get Fined Again. APAD & JPJ Handled For You.",
        description: "Permit expiring? We remind you 30 days early. License due for renewal? We handle the paperwork. You just run your business.",
        image:
            "/webpImages/report.webp",
    },
    {
        id: 4,
        bgColor: "#FFFFFF",
        textColor: "#111111",
        title: "Stop Losing RM 10,000 a Month on Fuel You Can't See.",
        description: "Fuel being stolen? We catch it. Driver leaving engine on? We alert you. Most fleets save 20–30% on fuel in the first month.",
        image:
            "/webpImages/fuelChar.webp",
    },
];

interface HeroSectionProps {
    hero: HomepageContent["hero"];
}

export default function PremiumHeroSlider({ hero }: HeroSectionProps) {
    // Controls text/image content
    const [activeIndex, setActiveIndex] = useState(0);

    // Controls actual background color shown underneath
    const [displayedBgIndex, setDisplayedBgIndex] = useState(0);

    // Incoming wipe background
    const [incomingBgIndex, setIncomingBgIndex] = useState(0);

    const [isTransitioning, setIsTransitioning] = useState(false);

    const contentTimeout = useRef<NodeJS.Timeout | null>(null);
    const transitionTimeout = useRef<NodeJS.Timeout | null>(null);
    const goToSlide = (index: number) => {
        const next = (index + slides.length) % slides.length;

        if (contentTimeout.current) {
            clearTimeout(contentTimeout.current);
        }

        setIncomingBgIndex(next);
        setIsTransitioning(true);

        contentTimeout.current = setTimeout(() => {
            setActiveIndex(next);
        }, BG_TRANSITION_DURATION * CONTENT_SWITCH_AT);
    };

    const nextSlide = () => {
        goToSlide(activeIndex + 1);
    };

    const prevSlide = () => {
        goToSlide(activeIndex - 1);
    };
    useEffect(() => {
        const interval = setInterval(() => {
            const next = (displayedBgIndex + 1) % slides.length;

            setIncomingBgIndex(next);
            setIsTransitioning(true);

            if (contentTimeout.current) {
                clearTimeout(contentTimeout.current);
            }

            contentTimeout.current = setTimeout(() => {
                setActiveIndex(next);
            }, BG_TRANSITION_DURATION * CONTENT_SWITCH_AT);
        }, AUTO_PLAY_DELAY);

        return () => {
            clearInterval(interval);

            if (contentTimeout.current) {
                clearTimeout(contentTimeout.current);
            }
        };
    }, [displayedBgIndex]);

    const currentSlide = slides[activeIndex];
    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => nextSlide(),
        onSwipedRight: () => prevSlide(),
        trackTouch: true,
        preventScrollOnSwipe: true,
    });

    return (
        <section {...swipeHandlers} className="relative h-fit py-30 overflow-hidden lg:block hidden">
            {/* Base Background */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundColor: slides[displayedBgIndex].bgColor,
                }}
            />

            {/* Incoming Background Wipe */}
            <AnimatePresence>
                {isTransitioning && (
                    <motion.div
                        className="absolute inset-0"
                        style={{
                            backgroundColor: slides[incomingBgIndex].bgColor,
                        }}
                        initial={{ y: "100%" }}
                        animate={{ y: "0%" }}
                        transition={{
                            duration: BG_TRANSITION_DURATION / 1000,
                            ease: "linear",
                        }}
                        onAnimationComplete={() => {
                            setDisplayedBgIndex(incomingBgIndex);
                            setIsTransitioning(false);

                            if (transitionTimeout.current) {
                                clearTimeout(transitionTimeout.current);
                            }
                        }}
                    />
                )}
            </AnimatePresence>

            {/* Content */}
            <div className="relative z-20 mx-auto flex flex-col h-full items-center justify-center container lg:px-10 xl:px-0">
                <div className="grid w-full items-center gap-12 lg:grid-cols-2">
                    {/* Text */}
                    <div className="overflow-hidden ">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide.id}
                                initial={{
                                    opacity: 0,
                                    y: 60,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                exit={{
                                    opacity: 0,
                                    y: -40,
                                }}
                                transition={{
                                    duration: 0.7,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="space-y-6 md:space-y-4"
                            >
                                <h1
                                    className="text-3xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]"
                                    style={{
                                        color: currentSlide.textColor,
                                    }}
                                >
                                    {currentSlide.title}
                                </h1>
                                {currentSlide.p1 && (


                                    <p
                                        className="max-w-xl text-sm leading-relaxed text-[#434653] md:text-base"
                                        style={{
                                            color: currentSlide.textColor,
                                            opacity: 0.8,
                                        }}
                                    >

                                        {currentSlide.p1}
                                    </p>
                                )}
                                <p
                                    className="max-w-xl text-sm leading-relaxed text-[#434653] md:text-base"
                                    style={{
                                        color: currentSlide.textColor,
                                        opacity: 0.8,
                                    }}
                                >
                                    {currentSlide.description}
                                </p>

                                <p
                                    className="text-sm md:text-base font-semibold text-[#00327D]"
                                >
                                    14-day free trial. No credit card required.
                                </p>

                                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center lg:hidden">
                                    <Link href="/#demoBook">
                                        <Button variant="ghost" pulse className="w-full sm:w-auto bg-[#00327D] text-white !rounded-md">
                                            {hero.primaryCta.label}
                                        </Button>
                                    </Link>
                                    <Button
                                        variant="ghost"
                                        className="group w-full sm:w-auto border border-[#C3C6D5] !rounded-md bg-white !text-black"
                                    >
                                        <MaterialIcon
                                            name="play_circle"
                                            className="transition-transform group-hover:scale-110"
                                        />
                                        {hero.secondaryCta.label}
                                    </Button>
                                </div>
                                <div className="lg:flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center hidden">
                                    <Link href="/#demoBook">
                                        <Button variant="ghost" size="lg" pulse className="w-full sm:w-auto bg-[#00327D] text-white !rounded-md">
                                            {hero.primaryCta.label}
                                        </Button>
                                    </Link>
                                    <Button
                                        variant="ghost"
                                        size="lg"
                                        className="group w-full sm:w-auto border border-[#C3C6D5] !rounded-md bg-white !text-black"
                                    >
                                        <MaterialIcon
                                            name="play_circle"
                                            className="transition-transform group-hover:scale-110"
                                        />
                                        {hero.secondaryCta.label}
                                    </Button>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Image */}
                    <div className="relative flex justify-center overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide.id}
                                initial={{
                                    opacity: 0,
                                    y: 40,
                                    scale: 0.96,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    scale: 1,
                                }}
                                exit={{
                                    opacity: 0,
                                    y: -20,
                                    scale: 1.03,
                                }}
                                transition={{
                                    duration: 0.9,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="relative aspect-[16/10] overflow-hidden lg:h-[300px] xl:h-[400px]"
                            >
                                <img
                                    src={currentSlide.image}
                                    alt={currentSlide.title}
                                    className=" h-full transition-transform duration-700 hover:scale-[1.03]"
                                />
                            </motion.div>

                        </AnimatePresence>

                    </div>
                </div>
                <RevealOnScroll delayMs={500} className="mt-12 border-t border-[#C3C6D5] pt-6 md:mt-15 w-full">
                    {/* Mobile Swiper */}
                    <div className="">
                        <Swiper
                            modules={[Autoplay]}
                            slidesPerView={1}
                            spaceBetween={16}
                            loop
                            autoplay={{
                                delay: 5500,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                1024: {
                                    slidesPerView: 3,
                                },
                                768: {
                                    slidesPerView: 2,
                                }
                            }}

                        >
                            {hero.trustBadges.map((badge) => (
                                <SwiperSlide key={badge.label} className="justify-center">
                                    <div className="flex justify-center items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#434653]">
                                        <MaterialIcon
                                            name={badge.icon}
                                            className="text-[#00327D]"
                                            filled
                                        />
                                        {badge.label}
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    {/* <div className="flex-wrap items-center justify-center gap-x-8 gap-y-4 md:justify-between hidden">
                        {hero.trustBadges.map((badge) => (
                            <div
                                key={badge.label}
                                className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#434653]"
                            >
                                <MaterialIcon name={badge.icon} className="text-[#00327D]" filled />
                                {badge.label}
                            </div>
                        ))}
                    </div> */}
                </RevealOnScroll>

            </div>



            {/* Indicators */}
            <div className="absolute bottom-10 left-1/2 z-30 flex items-center -translate-x-1/2 gap-3">
                <button
                    onClick={prevSlide}
                    className="flex h-10 w-10 items-center justify-center rounded-full cursor-pointer"
                >
                    <MaterialIcon name="chevron_left" />
                </button>

                {slides.map((slide, index) => (
                    <button
                        key={slide.id}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                        className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${index === activeIndex
                            ? "w-10 bg-[#003b8f]"
                            : "w-2 bg-[#003b8f]/40 hover:bg-[#003b8f]"
                            }`}
                    />
                ))}

                <button
                    onClick={nextSlide}
                    className="flex h-10 w-10 items-center justify-center rounded-full cursor-pointer"
                >
                    <MaterialIcon name="chevron_right" />
                </button>
            </div>

        </section>
    );
}