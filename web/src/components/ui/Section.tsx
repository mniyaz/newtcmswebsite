import { type ReactNode } from "react";
import { cn } from "@/lib/utils/cn";
import { Container } from "@/components/ui/Container";

type SectionVariant = "white" | "muted" | "primary";

interface SectionProps {
  id?: string;
  variant?: SectionVariant;
  className?: string;
  containerClassName?: string;
  children: ReactNode;
  fullWidth?: boolean;
}

const variantStyles: Record<SectionVariant, string> = {
  white: "bg-white",
  muted: "bg-section-muted",
  primary: "bg-primary text-on-primary",
};

export function Section({
  id,
  variant = "white",
  className,
  containerClassName,
  children,
  fullWidth = false,
}: SectionProps) {
  const padding = "py-16 md:py-20";

  if (fullWidth) {
    return (
      <section id={id} className={cn(variantStyles[variant], padding, className)}>
        {children}
      </section>
    );
  }

  return (
    <section id={id} className={cn(variantStyles[variant], padding, className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
