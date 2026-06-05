"use client";

import { useEffect, useRef, useState } from "react";
import type { HomepageContent } from "@/lib/content/schema";
import { Section } from "@/components/ui/Section";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { Card } from "@/components/ui/Card";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { cn } from "@/lib/utils/cn";

interface FuelCostSectionProps {
  fuelCost: HomepageContent["fuelCost"];
}

function FuelBar({
  bar,
}: {
  bar: HomepageContent["fuelCost"]["chart"]["bars"][number];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-1 flex-col items-center">
      <div
        ref={ref}
        className="relative flex h-52 w-full max-w-[7rem] items-end justify-center"
      >
        <div
          className={cn(
            "w-full rounded-t-xl transition-all duration-1000 ease-out",
            bar.variant === "manual" ? "bg-slate-400" : "bg-primary",
          )}
          style={{ height: animated ? `${bar.heightPercent}%` : "0%" }}
        />
      </div>
      <p className="mt-4 text-center text-xs font-semibold uppercase tracking-wide text-slate-500">
        {bar.label}
      </p>
      <p
        className={cn(
          "mt-1 text-center text-sm font-bold",
          bar.variant === "manual" ? "text-slate-600" : "text-primary",
        )}
      >
        {bar.value}
      </p>
    </div>
  );
}

export function FuelCostSection({ fuelCost }: FuelCostSectionProps) {
  return (
    <Section variant="white">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-8">
          <RevealOnScroll>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              {fuelCost.title}
            </h2>
          </RevealOnScroll>
          <div className="space-y-6">
            {fuelCost.features.map((feature, index) => (
              <RevealOnScroll key={feature.title} delayMs={index * 80}>
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              </RevealOnScroll>
            ))}
          </div>
        </div>
        <RevealOnScroll>
          <Card padding="lg" className="shadow-card-hover">
            <h5 className="mb-8 text-center text-lg font-semibold text-slate-900">
              {fuelCost.chart.title}
            </h5>
            <div className="flex items-end justify-center gap-8 border-b border-slate-200 pb-2 md:gap-12">
              {fuelCost.chart.bars.map((bar) => (
                <FuelBar key={bar.label} bar={bar} />
              ))}
            </div>
            <div className="mt-8 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-4 text-center">
              <p className="text-lg font-bold text-emerald-700">
                {fuelCost.chart.savingsLabel}
              </p>
            </div>
          </Card>
        </RevealOnScroll>
      </div>
    </Section>
  );
}
