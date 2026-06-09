import { type ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

interface SectionHeaderProps {
  title: ReactNode;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-5 md:mb-10",
        align === "center" && "mx-auto text-center",
        align === "left" && "max-w-2xl text-left",
        className,
      )}
    >
      <h2 className="text-2xl text-start md:text-center font-bold tracking-tight md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-sm text-start md:text-center leading-relaxed text-[#434653] md:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}
