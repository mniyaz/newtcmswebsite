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
    <>
      <Section id="solutions" variant="muted">
        <SectionHeader title={painPoints.title} subtitle={painPoints.subtitle} />
        <StaggerReveal className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {painPoints.items.map((item, index) => (
            <StaggerItem key={item.title} index={index}>
              <div className="flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-card transition-all duration-300 hover:border-red-200 hover:shadow-card-hover">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-red-50">
                  <MaterialIcon name={item.icon} className="text-[22px] text-error" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </Section>

      <div className="bg-primary">
        <Container>
          <RevealOnScroll variant="scale">
            <div className="flex flex-col items-center justify-between gap-6 py-10 text-center md:flex-row md:py-12 md:text-left">
              <h3 className="text-2xl font-bold text-white md:text-3xl">
                {painPoints.ctaBanner.title}
              </h3>
              <Button variant="white" size="lg" className="shrink-0 font-bold">
                {painPoints.ctaBanner.cta.label}
              </Button>
            </div>
          </RevealOnScroll>
        </Container>
      </div>
    </>
  );
}
