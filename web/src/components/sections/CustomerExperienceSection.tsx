import type { HomepageContent } from "@/lib/content/schema";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { RevealOnScroll, StaggerItem, StaggerReveal } from "@/components/ui/RevealOnScroll";
import { cn } from "@/lib/utils/cn";

interface CustomerExperienceSectionProps {
  customerExperience: HomepageContent["customerExperience"];
}

export function CustomerExperienceSection({
  customerExperience,
}: CustomerExperienceSectionProps) {
  const { shipment } = customerExperience;

  return (
    <div id="advantage" className="!bg-[#F3F4F5] md:py-10 py-5 px-5 md:px-10 lg:px-0">
      <SectionHeader
        title={customerExperience.title}
        subtitle={customerExperience.subtitle}
      />
      <div className="grid items-start gap-8 lg:grid-cols-5 lg:gap-12 container mx-auto">
        <StaggerReveal className="space-y-4 lg:col-span-2">
          {customerExperience.features.map((feature, index) => (
            <StaggerItem key={feature.title} index={index}>
              <div className="rounded-lg border border-[#C3C6D5] bg-white p-3 md:p-5 shadow-card transition-all duration-300 hover:border-primary/30 hover:shadow-card-hover">
                <h4 className="flex items-center gap-3 text-base font-semibold text-slate-900">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50">
                    <MaterialIcon name={feature.icon} className="text-[#006E25]" />
                  </span>
                  {feature.title}
                </h4>
                <p className="pl-12 text-sm leading-relaxed text-[#434653]">
                  {feature.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerReveal>
        <RevealOnScroll className="lg:col-span-3 h-full">
          <div className="overflow-hidden rounded-lg border border-[#C3C6D5] bg-white shadow-card h-full">
            <div className="border-b border-slate-200 bg-slate-50 px-3 md:px-6 py-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Shipment Tracking
                  </p>
                  <h5 className="mt-1 text-lg font-bold text-slate-900">{shipment.id}</h5>
                </div>
                <span className="rounded-full bg-[#80F98B] px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-[#007327]">
                  {shipment.status}
                </span>
              </div>
            </div>
            <div className="relative space-y-8 p-6 md:p-8">
              <div className="absolute bottom-8 left-[2.3rem] md:left-[2.8rem] top-8 w-0.5 bg-slate-200" />
              {shipment.steps.map((step) => (
                <div key={step.title} className="group relative flex items-start gap-4">
                  <div
                    className={cn(
                      "relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full",
                      step.status === "completed" &&
                        "bg-[#006E25] text-white",
                      step.status === "active" &&
                        "bg-[#00327D] text-white",
                      step.status === "pending" &&
                        "border-2 border-slate-300 bg-white",
                    )}
                  >
                    {step.status === "completed" && (
                      <MaterialIcon name="check" size={14} className="!text-[16px]" filled />
                    )}
                    {step.status === "active" && (
                      <MaterialIcon name="local_shipping" size={6} className="!text-[16px]" />
                    )}
                  </div>
                  <div className="pt-0.5 transition-transform group-hover:translate-x-0.5">
                    <p
                      className={cn(
                        "text-sm font-bold",
                        step.status === "active" && "text-black",
                        step.status === "completed" && "text-black",
                        step.status === "pending" && "text-[#434653]",
                      )}
                    >
                      {step.title} 
                    </p>
                    <p className="mt-0.5 text-xs text-[#434653]">{step.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
}
