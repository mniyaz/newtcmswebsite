'use client'
import Image from "next/image";
import type { HomepageContent } from "@/lib/content/schema";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
interface HeroSectionProps {
  hero: HomepageContent["hero"];
}

export function HeroSection({ hero }: HeroSectionProps) {
  return (
    <section className="pb-5 pt-28 md:pt-32 lg:pt-36 bg-[#F8F9FA]">
      <div className="md:px-10 px-5">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6 md:space-y-8">
            <RevealOnScroll delayMs={100}>
              <h1 className="text-3xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
                {hero.headline}{" "}
                <span className="text-[#00327D]">{hero.headlineHighlight}</span>
              </h1>
            </RevealOnScroll>
            <RevealOnScroll delayMs={200}>
              <p className="max-w-xl text-sm leading-relaxed text-[#434653] md:text-base">
                {hero.description}
              </p>
            </RevealOnScroll>
            <RevealOnScroll delayMs={300}>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center lg:hidden">
                <Button variant="ghost" pulse className="w-full sm:w-auto bg-[#00327D] text-white !rounded-md">
                  {hero.primaryCta.label}
                </Button>
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
                <Button variant="ghost" size="lg" pulse className="w-full sm:w-auto bg-[#00327D] text-white !rounded-md">
                  {hero.primaryCta.label}
                </Button>
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
            </RevealOnScroll>
          </div>
          <RevealOnScroll delayMs={400}>
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-image ring-1 ring-slate-200/60">
              <Image
                src={hero.image.src}
                alt={hero.image.alt}
                fill
                className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </RevealOnScroll>
        </div>
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
      </div>
    </section>
  );
}
