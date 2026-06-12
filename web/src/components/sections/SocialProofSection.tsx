import Image from "next/image";
import type { HomepageContent } from "@/lib/content/schema";
import { Section } from "@/components/ui/Section";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { MetricCard } from "@/components/ui/MetricCard";
import { StaggerItem, StaggerReveal } from "@/components/ui/RevealOnScroll";

interface SocialProofSectionProps {
  socialProof: HomepageContent["socialProof"];
}

export function SocialProofSection({ socialProof }: SocialProofSectionProps) {
  return (
    <div className="lg:px-0 md:px-10 px-5 py-5 md:py-10 !bg-[#FFFFFF]">
      <div className="container mx-auto">
      <StaggerReveal className="mb-5 grid gap-5 md:mb-1 md:grid-cols-3 md:gap-6">
        {socialProof.stats.map((stat, index) => (
          <StaggerItem key={stat.label} index={index}>
            <MetricCard
            className="!shadow-none border-none !p-0"
              value={
                <AnimatedCounter
                  target={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                  className="text-3xl font-bold tracking-tight text-primary md:text-5xl"
                />
              }
              label={stat.label}
            />
          </StaggerItem>
        ))}
      </StaggerReveal>
      <StaggerReveal className="grid gap-6 md:grid-cols-2 md:mt-10">
        {socialProof.testimonials.map((testimonial, index) => (
          <StaggerItem key={testimonial.name} index={index}>
            <div className="flex h-full flex-col rounded-lg bg-[#EDEEEF] p-4 shadow-card transition-all duration-300 hover:shadow-card-hover md:p-8">
              <p className="flex-1 text-base italic md:text-base">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-4 pt-6">
                <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-slate-100">
                  <Image
                    src={testimonial.avatar.src}
                    alt={testimonial.avatar.alt}
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-[#434653]">{testimonial.role}</p>
                </div>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerReveal>
      </div>
    </div>
  );
}
