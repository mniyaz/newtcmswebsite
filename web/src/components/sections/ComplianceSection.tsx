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
    <div className="lg:px-0 md:px-10 md:py-10 py-5 px-5 !bg-[#F3F4F5]">
      <div className="container mx-auto">
      <SectionHeader title={compliance.title} subtitle={compliance.subtitle} />
      <StaggerReveal className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {compliance.items.map((item, index) => (
          <StaggerItem key={item.title} index={index}>
            <div className="flex h-full flex-col items-center rounded-lg border border-[#C3C6D5] bg-white p-4 md:p-6 text-center shadow-card transition-all duration-300 hover:border-primary/30 hover:shadow-card-hover">
              <div className="mb-4 flex h-10 w-10 md:h-16 md:w-16 items-center justify-center rounded-lg bg-primary/10">
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
      </div>
    </div>
  );
}
