import { cn } from "@/lib/utils/cn";

interface PreviewCardProps {
  children: React.ReactNode;
  className?: string;
  padding?: "md" | "lg";
}

export function PreviewCard({
  children,
  className,
  padding = "lg",
}: PreviewCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-shadow hover:shadow-md",
        padding === "lg" ? "p-6 md:p-8" : "p-5 md:p-6",
        className,
      )}
    >
      {children}
    </div>
  );
}
