'use client'
import React from 'react'
import type { HomepageContent } from "@/lib/content/schema";
import { MaterialIcon } from '../ui/MaterialIcon';
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
interface HeroSectionProps {
    hero: HomepageContent["hero"];
}
function TrustedSec({ hero }: HeroSectionProps) {
    return (
        <RevealOnScroll delayMs={500} className="mt-12 border-t border-[#C3C6D5] pt-6 md:mt-10">
            {/* Mobile Swiper */}
            <div className="md:hidden">
                <Swiper
                    modules={[Autoplay]}
                    slidesPerView={1}
                    spaceBetween={16}
                    loop
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                >
                    {hero.trustBadges.map((badge) => (
                        <SwiperSlide key={badge.label}>
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
            <div className="md:flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:justify-between hidden">
                {hero.trustBadges.map((badge) => (
                    <div
                        key={badge.label}
                        className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#434653]"
                    >
                        <MaterialIcon name={badge.icon} className="text-[#00327D]" filled />
                        {badge.label}
                    </div>
                ))}
            </div>
        </RevealOnScroll>
    )
}

export default TrustedSec