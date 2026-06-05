import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { cn } from "@/lib/utils/cn";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  iconVariant?: "primary" | "secondary" | "error";
  className?: string;
  layout?: "horizontal" | "stacked";
}

const iconVariantStyles = {
  primary: "bg-primary/10 text-primary",
  secondary: "bg-emerald-50 text-secondary",
  error: "bg-red-50 text-error",
};

export function FeatureCard({
  icon,
  title,
  description,
  iconVariant = "primary",
  className,
  layout = "horizontal",
}: FeatureCardProps) {
  if (layout === "stacked") {
    return (
      <div
        className={cn(
          "rounded-2xl border border-slate-200/80 bg-white p-6 shadow-card transition-all duration-300 hover:border-primary/30 hover:shadow-card-hover",
          className,
        )}
      >
        <div
          className={cn(
            "mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl",
            iconVariantStyles[iconVariant],
          )}
        >
          <MaterialIcon name={icon} className="text-[22px]" />
        </div>
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
      </div>
    );
  }

  return (
    <div className={cn("flex gap-4", className)}>
      <div
        className={cn(
          "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl",
          iconVariantStyles[iconVariant],
        )}
      >
        <MaterialIcon name={icon} className="text-[22px]" />
      </div>
      <div>
        <h4 className="text-base font-semibold text-slate-900">{title}</h4>
        <p className="mt-1 text-sm leading-relaxed text-slate-600">{description}</p>
      </div>
    </div>
  );
}
