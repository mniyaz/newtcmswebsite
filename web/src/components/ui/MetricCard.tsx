import { type ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

interface MetricCardProps {
  value: ReactNode;
  label: string;
  className?: string;
}

export function MetricCard({ value, label, className }: MetricCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-slate-200/80 bg-white px-6 py-8 text-center shadow-card",
        className,
      )}
    >
      <div className="text-4xl font-bold tracking-tight text-primary md:text-5xl">
        {value}
      </div>
      <p className="mt-3 text-base text-slate-600">{label}</p>
    </div>
  );
}
