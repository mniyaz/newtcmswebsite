"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

type RevealVariant = "fade-up" | "scale";

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  variant?: RevealVariant;
  delayMs?: number;
}

export function RevealOnScroll({
  children,
  className,
  variant = "fade-up",
  delayMs = 0,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        variant === "scale" ? "scale-reveal-hidden" : "reveal-hidden",
        isVisible &&
          (variant === "scale" ? "scale-reveal-visible" : "reveal-visible"),
        className,
      )}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {children}
    </div>
  );
}

interface StaggerRevealProps {
  children: ReactNode;
  className?: string;
}

export function StaggerReveal({ children, className }: StaggerRevealProps) {
  return <div className={cn("stagger-reveal", className)}>{children}</div>;
}

export function StaggerItem({
  children,
  index,
  className,
}: {
  children: ReactNode;
  index: number;
  className?: string;
}) {
  return (
    <RevealOnScroll className={className} delayMs={(index + 1) * 100}>
      {children}
    </RevealOnScroll>
  );
}
