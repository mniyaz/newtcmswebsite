import Image from "next/image";
import type { HomepageContent } from "@/lib/content/schema";
import { Section } from "@/components/ui/Section";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

interface VisibilitySectionProps {
  visibility: HomepageContent["visibility"];
}

export function VisibilitySection({ visibility }: VisibilitySectionProps) {
  return (
    <div id="platform" className="!bg-[#F8F9FA] md:py-10 py-5 px-5 md:px-10 lg:px-10 xl:px-0">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16 container mx-auto">
        <RevealOnScroll className="order-2 lg:order-1">
          <div className="group overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-image ring-1 ring-slate-200/50">
            <Image
              src={visibility.image.src}
              alt={visibility.image.alt}
              width={1200}
              height={750}
              className="w-full transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </div>
        </RevealOnScroll>
        <div className="order-1 space-y-8 lg:order-2">
          <RevealOnScroll>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              {visibility.title}{" "}
              <span className="text-[#00327D]">{visibility.titleHighlight}</span>
            </h2>
          </RevealOnScroll>
          <div className="grid gap-6 sm:grid-cols-2">
            {visibility.features.map((feature, index) => (
              <RevealOnScroll key={feature.title} delayMs={index * 80}>
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
