import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { SolutionBenefit } from "@/lib/content/solutions";

interface SolutionBenefitsProps {
  title: string;
  subtitle?: string;
  benefits: SolutionBenefit[];
}

export function SolutionBenefits({ title, subtitle, benefits }: SolutionBenefitsProps) {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto w-full max-w-container-max px-5 sm:px-6 lg:px-8">
        <SectionHeader title={title} subtitle={subtitle} align="left" />
        <div className="grid gap-6 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <RevealOnScroll key={benefit.title} delayMs={index * 80}>
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MaterialIcon name={benefit.icon} className="text-[22px]" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">{benefit.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
