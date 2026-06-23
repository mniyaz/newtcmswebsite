import type { HomepageContent } from "@/lib/content/schema";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { StaggerItem, StaggerReveal } from "@/components/ui/RevealOnScroll";
import { cn } from "@/lib/utils/cn";

interface PricingSectionProps {
  pricing: HomepageContent["pricing"];
}

export function PricingSection({ pricing }: PricingSectionProps) {
  return (
    <div className="md:py-15 py-5 px-5 md:px-10 lg:px-10 xl:px-0 !bg-[#F3F4F5]">
      <SectionHeader title={pricing.title} subtitle={pricing.subtitle} />
      <StaggerReveal className="grid items-stretch gap-6 lg:grid-cols-3 lg:gap-8 container mx-auto">
        {pricing.plans.map((plan, index) => (
          <StaggerItem key={plan.name} index={index}>
            <div
              className={cn(
                "relative flex h-full flex-col rounded-2xl border bg-white p-4 shadow-card transition-all duration-300 md:p-8",
                plan.isFeatured
                  ? "z-10 border-2 border-[#00327D] shadow-card-hover lg:-mt-2 lg:mb-2 lg:scale-[1.03]"
                  : "border-[#C3C6D5] hover:border-[#00327D] hover:shadow-card-hover",
              )}
            >
              {plan.badge && (
                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold uppercase tracking-wide text-white">
                  {plan.badge}
                </div>
              )}
              <h4 className="text-2xl font-bold text-slate-900">{plan.name}</h4>
              <p className="mt-2 text-sm text-slate-600">{plan.description}</p>
              <div className="my-6 border-b border-slate-100 pb-6">
                <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                {plan.period && (
                  <span className="text-slate-500">{plan.period}</span>
                )}
              </div>
              <ul className="mb-8 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature.label}
                    className={cn(
                      "flex items-center gap-2.5 text-sm",
                      !feature.included && "text-slate-400",
                    )}
                  >
                    <MaterialIcon
                      name={feature.included ? "check" : "cancel"}
                      className={cn(
                        "mt-0.5 shrink-0 text-[18px]",
                        feature.included ? "text-emerald-600" : "text-slate-300",
                      )}
                      filled={feature.included}
                    />
                    {feature.label}
                  </li>
                ))}
              </ul>
              <div className="hidden md:block">
                <Button
                  variant={plan.isFeatured ? "primary" : "outline"}
                  pulse={plan.isFeatured}
                  size="lg"
                  className="w-full"
                >
                  {plan.cta.label}
                </Button>
                {plan.trail && (
                  <p
                    className="text-sm md:text-base font-semibold text-[#00327D] mt-4"
                  >
                    {plan.trail}
                  </p>
                )}
              </div>
              <div className="block md:hidden">
                <Button
                  variant={plan.isFeatured ? "primary" : "outline"}
                  pulse={plan.isFeatured}

                  className="w-full"
                >
                  {plan.cta.label}
                </Button>
                {plan.trail && (
                  <p
                    className="text-sm md:text-base font-semibold text-[#00327D] mt-4"
                  >
                    {plan.trail}
                  </p>
                )}
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerReveal>
    </div>
  );
}
