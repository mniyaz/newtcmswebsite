import { SectionHeader } from "@/components/ui/SectionHeader";
import { MetricCard } from "@/components/ui/MetricCard";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { cn } from "@/lib/utils/cn";
import type { SolutionPageContent } from "@/lib/content/solutions";

interface SolutionStatsProps {
  stats: SolutionPageContent["stats"];
}

const valueColors = {
  primary: "text-primary",
  secondary: "text-emerald-600",
  default: "text-slate-900",
};

export function SolutionStats({ stats }: SolutionStatsProps) {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto w-full max-w-container-max px-5 sm:px-6 lg:px-8">
        <SectionHeader title={stats.title} subtitle={stats.subtitle} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {stats.items.map((item, index) => (
            <RevealOnScroll key={item.label} delayMs={index * 80}>
              <MetricCard
                value={
                  <span
                    className={cn(
                      "text-4xl font-bold tracking-tight md:text-[2.625rem]",
                      valueColors[item.variant ?? "default"],
                    )}
                  >
                    {item.value}
                  </span>
                }
                label={item.label}
              />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
