import type { HomepageContent } from "@/lib/content/schema";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { StaggerItem, StaggerReveal } from "@/components/ui/RevealOnScroll";

interface ComplianceSectionProps {
  compliance: HomepageContent["compliance"];
}

export function ComplianceSection({ compliance }: ComplianceSectionProps) {
  return (
    <Section variant="muted">
      <SectionHeader title={compliance.title} subtitle={compliance.subtitle} />
      <StaggerReveal className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {compliance.items.map((item, index) => (
          <StaggerItem key={item.title} index={index}>
            <div className="flex h-full flex-col items-center rounded-2xl border border-slate-200/80 bg-white p-6 text-center shadow-card transition-all duration-300 hover:border-primary/30 hover:shadow-card-hover">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <MaterialIcon name={item.icon} className="text-[28px] text-primary" />
              </div>
              <h4 className="text-base font-semibold text-slate-900">{item.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {item.description}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerReveal>
    </Section>
  );
}
