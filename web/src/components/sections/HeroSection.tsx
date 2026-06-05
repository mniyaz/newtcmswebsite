import Image from "next/image";
import type { HomepageContent } from "@/lib/content/schema";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

interface HeroSectionProps {
  hero: HomepageContent["hero"];
}

export function HeroSection({ hero }: HeroSectionProps) {
  return (
    <section className="bg-white pb-12 pt-28 md:pb-16 md:pt-32 lg:pt-36">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6 md:space-y-8">
            <RevealOnScroll delayMs={100}>
              <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
                {hero.headline}{" "}
                <span className="text-primary">{hero.headlineHighlight}</span>
              </h1>
            </RevealOnScroll>
            <RevealOnScroll delayMs={200}>
              <p className="max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
                {hero.description}
              </p>
            </RevealOnScroll>
            <RevealOnScroll delayMs={300}>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <Button size="lg" pulse className="w-full sm:w-auto">
                  {hero.primaryCta.label}
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  className="group w-full sm:w-auto"
                >
                  <MaterialIcon
                    name="play_circle"
                    className="text-primary transition-transform group-hover:scale-110"
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
        <RevealOnScroll delayMs={500} className="mt-12 border-t border-slate-200 pt-8 md:mt-16">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:justify-between">
            {hero.trustBadges.map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500"
              >
                <MaterialIcon name={badge.icon} className="text-primary" filled />
                {badge.label}
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
