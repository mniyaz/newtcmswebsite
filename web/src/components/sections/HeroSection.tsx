'use client';

import { useState } from "react";
import Image from "next/image";
import type { HomepageContent } from "@/lib/content/schema";
import { Button } from "@/components/ui/Button";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

interface HeroSectionProps {
  hero: HomepageContent["hero"];
}

const slides = [
    {
        id: 1,
        bgColor: "#EEEEEE",
        textColor: "#111111",
        title: "Malaysia's Complete Transport Management System",
        description:
            "Manage vehicles, drivers, fuel consumption, compliance, and fleet operations from a single platform.",
        image:
            "/webpImages/hs1.webp",
    },
    {
        id: 2,
        bgColor: "#F3F4F5",
        textColor: "#111111",
        title: "Track Your Entire Fleet in Real Time",
        description: "Monitor vehicle locations, routes, driver activities, and operational performance from a centralized dashboard.",
        image:
            "/webpImages/hs2.webp",
    },
    {
        id: 3,
        bgColor: "#F8F9FA",
        textColor: "#111111",
        title: "Simplify APAD Compliance Reporting",
        description: "Automate compliance processes and reduce manual administrative work with built-in reporting tools.",
        image:
            "/webpImages/hero3.webp",
    },
    {
        id: 4,
        bgColor: "#FFFFFF",
        textColor: "#111111",
        title: "Reduce Fuel Costs and Improve Efficiency",
        description: "Identify fuel wastage, optimize routes, and improve fleet profitability through actionable insights.",
        image:
            "/webpImages/hero4.webp",
    },
];

export function HeroSection({ hero }: HeroSectionProps) {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section
      className="pb-5 pt-28 md:pt-32 lg:pt-36 transition-colors duration-700 lg:hidden block"
      style={{
        backgroundColor: slides[activeSlide].bgColor,
      }}
    >
      <div className="px-5 md:px-10">
        <Swiper
          modules={[Autoplay]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          slidesPerView={1}
          spaceBetween={20}
          loop
          speed={800}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          onSlideChange={(swiper) => {
            setActiveSlide(swiper.realIndex);
          }}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                {/* Content */}
                <div className="space-y-6 md:space-y-8">
                  <RevealOnScroll delayMs={100}>
                    <h1
                      className="text-3xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]"
                      style={{ color: slide.textColor }}
                    >
                      {slide.title}
                    </h1>
                  </RevealOnScroll>

                  <RevealOnScroll delayMs={200}>
                    <p
                      className="max-w-xl text-sm leading-relaxed md:text-base"
                      style={{ color: slide.textColor }}
                    >
                      {slide.description}
                    </p>
                  </RevealOnScroll>

                  <RevealOnScroll delayMs={300}>
                    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-start justify-start">
                      <Button
                        variant="ghost"
                        className="w-full sm:w-auto bg-[#00327D] text-white  !rounded-md"
                      >
                        {hero.primaryCta.label}
                      </Button>

                      <Button
                        variant="ghost"
                        className="group w-full sm:w-auto border border-[#C3C6D5] bg-white !text-black !rounded-md"
                      >
                        <MaterialIcon
                          name="play_circle"
                          className="transition-transform group-hover:scale-110"
                        />
                        {hero.secondaryCta.label}
                      </Button>
                    </div>
                  </RevealOnScroll>
                </div>

                {/* Image */}
                <RevealOnScroll delayMs={400} >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      priority
                      className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </RevealOnScroll>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Trust Badges */}
        <RevealOnScroll
          delayMs={500}
          className="mt-12 border-t border-[#C3C6D5] pt-6 md:mt-10"
        >
          {/* Mobile */}
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
                  <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#434653]">
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

          {/* Desktop */}
          <div className="hidden md:flex flex-wrap items-center justify-between gap-x-8 gap-y-4">
            {hero.trustBadges.map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#434653]"
              >
                <MaterialIcon
                  name={badge.icon}
                  className="text-[#00327D]"
                  filled
                />
                {badge.label}
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}