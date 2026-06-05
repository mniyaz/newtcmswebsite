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
    <Section id="advantage" variant="muted">
      <SectionHeader
        title={customerExperience.title}
        subtitle={customerExperience.subtitle}
      />
      <div className="grid items-start gap-8 lg:grid-cols-5 lg:gap-12">
        <StaggerReveal className="space-y-4 lg:col-span-2">
          {customerExperience.features.map((feature, index) => (
            <StaggerItem key={feature.title} index={index}>
              <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-card transition-all duration-300 hover:border-primary/30 hover:shadow-card-hover">
                <h4 className="flex items-center gap-3 text-base font-semibold text-slate-900">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50">
                    <MaterialIcon name={feature.icon} className="text-secondary" />
                  </span>
                  {feature.title}
                </h4>
                <p className="mt-2 pl-12 text-sm leading-relaxed text-slate-600">
                  {feature.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerReveal>
        <RevealOnScroll className="lg:col-span-3">
          <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-card">
            <div className="border-b border-slate-200 bg-slate-50 px-6 py-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Shipment Tracking
                  </p>
                  <h5 className="mt-1 text-lg font-bold text-slate-900">{shipment.id}</h5>
                </div>
                <span className="rounded-full bg-emerald-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-emerald-700">
                  {shipment.status}
                </span>
              </div>
            </div>
            <div className="relative space-y-8 p-6 md:p-8">
              <div className="absolute bottom-8 left-[1.65rem] top-8 w-0.5 bg-slate-200" />
              {shipment.steps.map((step) => (
                <div key={step.title} className="group relative flex items-start gap-4">
                  <div
                    className={cn(
                      "relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full",
                      step.status === "completed" &&
                        "bg-emerald-600 text-white ring-4 ring-emerald-100",
                      step.status === "active" &&
                        "bg-primary text-white shadow-lg ring-4 ring-primary/20",
                      step.status === "pending" &&
                        "border-2 border-slate-300 bg-white",
                    )}
                  >
                    {step.status === "completed" && (
                      <MaterialIcon name="check" size={14} filled />
                    )}
                    {step.status === "active" && (
                      <MaterialIcon name="local_shipping" size={14} />
                    )}
                  </div>
                  <div className="pt-0.5 transition-transform group-hover:translate-x-0.5">
                    <p
                      className={cn(
                        "text-sm font-bold",
                        step.status === "active" && "text-primary",
                        step.status === "completed" && "text-slate-900",
                        step.status === "pending" && "text-slate-500",
                      )}
                    >
                      {step.title}
                    </p>
                    <p className="mt-0.5 text-xs text-slate-500">{step.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </Section>
  );
}
