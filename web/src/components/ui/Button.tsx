import { cn } from "@/lib/utils/cn";
import type { CtaButton } from "@/lib/content/schema";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: CtaButton["variant"] | "white" | "ghost";
  size?: "sm" | "md" | "lg";
  pulse?: boolean;
}

const variantStyles: Record<
  NonNullable<CtaButton["variant"]> | "white" | "ghost",
  string
> = {
  primary:
    "bg-primary text-white shadow-btn hover:bg-primary-dark hover:shadow-btn-hover active:scale-[0.98]",
  secondary:
    "border border-slate-200 bg-white text-slate-800 shadow-sm hover:border-primary/40 hover:bg-slate-50",
  outline:
    "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-white",
  white:
    "bg-white text-primary shadow-btn hover:bg-slate-50 hover:shadow-btn-hover active:scale-[0.98]",
  ghost: "text-primary hover:bg-primary/5",
};

const sizeStyles = {
  sm: "rounded-lg px-4 py-2 text-sm font-semibold",
  md: "rounded-xl px-6 py-3 text-sm font-semibold",
  lg: "rounded-xl px-8 py-4 text-base font-bold tracking-wide",
};

export function Button({
  variant = "primary",
  size = "md",
  pulse = false,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 transition-all duration-200",
        variantStyles[variant],
        sizeStyles[size],
        pulse && "pulse-primary",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
