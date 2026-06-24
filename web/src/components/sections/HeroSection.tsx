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
import Link from "next/link";

interface HeroSectionProps {
  hero: HomepageContent["hero"];
}

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

                  <p
                    className="text-sm md:text-base font-semibold text-[#00327D]"
                  >
                    14-day free trial. No credit card required.
                  </p>

                  <RevealOnScroll delayMs={300}>
                    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-start justify-start">
                      <Link href="/#demoBook">
                        <Button
                          variant="ghost"
                          className="w-full sm:w-auto bg-[#00327D] text-white  !rounded-md"
                        >
                          {hero.primaryCta.label}
                        </Button>
                      </Link>
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
          <div className="">
            <Swiper
              modules={[Autoplay]}
              slidesPerView={1}
              spaceBetween={16}
              loop
              autoplay={{
                delay: 3500,
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
          {/* <div className="hidden md:flex flex-wrap items-center justify-between gap-x-8 gap-y-4">
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
          </div> */}
        </RevealOnScroll>
      </div>
    </section>
  );
}