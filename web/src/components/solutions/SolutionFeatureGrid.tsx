import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { cn } from "@/lib/utils/cn";
import type { SolutionFeature } from "@/lib/content/solutions";

interface SolutionFeatureGridProps {
  features: SolutionFeature[];
}

export function SolutionFeatureGrid({ features }: SolutionFeatureGridProps) {
  return (
    <section className="bg-section-muted py-16 md:py-20">
      <div className="mx-auto grid w-full max-w-container-max gap-5 px-5 sm:px-6 md:grid-cols-3 md:gap-6 lg:px-8">
        {features.map((feature, index) => (
          <RevealOnScroll
            key={feature.title}
            delayMs={index * 80}
            className={cn(
              feature.layout === "wide" && "md:col-span-2",
              feature.layout === "highlight" && "md:col-span-2",
            )}
          >
            <div
              className={cn(
                "flex h-full flex-col rounded-2xl border p-6 shadow-card transition-all duration-300 md:p-8",
                feature.layout === "highlight"
                  ? "border-primary/20 bg-primary text-white shadow-card-hover"
                  : "border-slate-200/80 bg-white hover:border-primary/30 hover:shadow-card-hover",
              )}
            >
              <div
                className={cn(
                  "mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl",
                  feature.layout === "highlight"
                    ? "bg-white/15 text-white"
                    : "bg-primary/10 text-primary",
                )}
              >
                <MaterialIcon name={feature.icon} className="text-[22px]" />
              </div>
              <h3
                className={cn(
                  "text-lg font-semibold",
                  feature.layout === "highlight" ? "text-white" : "text-slate-900",
                )}
              >
                {feature.title}
              </h3>
              <p
                className={cn(
                  "mt-2 flex-1 text-sm leading-relaxed",
                  feature.layout === "highlight" ? "text-white/85" : "text-slate-600",
                )}
              >
                {feature.description}
              </p>
              {feature.tags && feature.tags.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {feature.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-slate-100 px-3 py-1 text-[11px] font-bold text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
