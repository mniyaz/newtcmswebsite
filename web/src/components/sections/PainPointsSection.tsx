import type { HomepageContent } from "@/lib/content/schema";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { RevealOnScroll, StaggerItem, StaggerReveal } from "@/components/ui/RevealOnScroll";

interface PainPointsSectionProps {
  painPoints: HomepageContent["painPoints"];
}

export function PainPointsSection({ painPoints }: PainPointsSectionProps) {
  return (
    <div id="solutions"  className="lg:px-10 xl:px-0 md:px-0 px-5  bg-[#F3F4F5] md:py-15 py-5">
      <div className="container mx-auto">
        <SectionHeader title={painPoints.title} subtitle={painPoints.subtitle} />
        <StaggerReveal className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {painPoints.items.map((item, index) => (
            <StaggerItem key={item.title} index={index}>
              <div className="flex h-full flex-col rounded-lg border border-[#C3C6D5] bg-white p-6 shadow-card transition-all duration-300 hover:border-red-200 hover:shadow-card-hover">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-red-50">
                  <MaterialIcon name={item.icon} className="text-[22px] text-error" />
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[#434653]">
                  {item.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>

      <div className="bg-[#0047AB] mt-8 rounded-lg container mx-auto">
        <div>
          <RevealOnScroll variant="scale">
            <div className="flex flex-col items-center justify-between gap-4 md:gap-6 py-5 text-center md:flex-row px-3 md:px-5 md:py-5 md:text-left">
              <h3 className="text-xl font-bold text-white md:text-2xl">
                {painPoints.ctaBanner.title}
              </h3>
              <Button variant="white" className="shrink-0 font-bold !rounded-lg">
                {painPoints.ctaBanner.cta.label}
              </Button>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </div>
  );
}
