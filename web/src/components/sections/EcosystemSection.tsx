import type { HomepageContent } from "@/lib/content/schema";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

interface EcosystemSectionProps {
  ecosystem: HomepageContent["ecosystem"];
}

export function EcosystemSection({ ecosystem }: EcosystemSectionProps) {
  const [vehicles, drivers, customers, accounting] = ecosystem.nodes;

  return (
    <Section variant="white">
      <SectionHeader title={ecosystem.title} subtitle={ecosystem.subtitle} />
      <div className="relative mx-auto max-w-3xl py-8 md:py-12">
        {/* Connector lines */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 hidden md:block"
        >
          <div className="absolute left-1/2 top-[18%] h-0.5 w-[38%] -translate-x-full bg-slate-200" />
          <div className="absolute right-1/2 top-[18%] h-0.5 w-[38%] translate-x-full bg-slate-200" />
          <div className="absolute left-1/2 top-[18%] h-[32%] w-0.5 -translate-x-1/2 bg-slate-200" />
          <div className="absolute bottom-[18%] left-1/2 h-[32%] w-0.5 -translate-x-1/2 bg-slate-200" />
          <div className="absolute bottom-[18%] left-1/2 h-0.5 w-[38%] -translate-x-full bg-slate-200" />
          <div className="absolute bottom-[18%] right-1/2 h-0.5 w-[38%] translate-x-full bg-slate-200" />
        </div>

        <div className="relative flex min-h-[22rem] flex-col items-center justify-center md:min-h-[26rem]">
          {/* Top nodes */}
          <div className="mb-8 flex w-full max-w-md justify-center md:absolute md:inset-x-0 md:top-0 md:mb-0">
            {customers && (
              <RevealOnScroll delayMs={200}>
                <div className="rounded-2xl border border-slate-200/80 bg-white px-5 py-4 text-center shadow-card transition-all duration-300 hover:shadow-card-hover">
                  <MaterialIcon name={customers.icon} className="mx-auto text-primary" />
                  <p className="mt-1 text-sm font-bold text-slate-900">{customers.label}</p>
                </div>
              </RevealOnScroll>
            )}
          </div>

          {/* Center hub + side nodes */}
          <div className="flex w-full items-center justify-center gap-6 md:gap-0">
            {vehicles && (
              <RevealOnScroll delayMs={100} className="md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2">
                <div className="rounded-2xl border border-slate-200/80 bg-white px-5 py-4 text-center shadow-card transition-all duration-300 hover:shadow-card-hover">
                  <MaterialIcon name={vehicles.icon} className="mx-auto text-primary" />
                  <p className="mt-1 text-sm font-bold text-slate-900">{vehicles.label}</p>
                </div>
              </RevealOnScroll>
            )}

            <RevealOnScroll>
              <div className="breathe-node relative z-10 flex h-40 w-40 flex-col items-center justify-center rounded-2xl bg-primary text-white shadow-image md:h-44 md:w-44">
                <p className="text-xl font-bold">{ecosystem.hubLabel}</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] opacity-90">
                  {ecosystem.hubSublabel}
                </p>
              </div>
            </RevealOnScroll>

            {drivers && (
              <RevealOnScroll delayMs={150} className="md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2">
                <div className="rounded-2xl border border-slate-200/80 bg-white px-5 py-4 text-center shadow-card transition-all duration-300 hover:shadow-card-hover">
                  <MaterialIcon name={drivers.icon} className="mx-auto text-primary" />
                  <p className="mt-1 text-sm font-bold text-slate-900">{drivers.label}</p>
                </div>
              </RevealOnScroll>
            )}
          </div>

          {/* Bottom node */}
          <div className="mt-8 flex w-full max-w-md justify-center md:absolute md:inset-x-0 md:bottom-0 md:mt-0">
            {accounting && (
              <RevealOnScroll delayMs={250}>
                <div className="rounded-2xl border border-slate-200/80 bg-white px-5 py-4 text-center shadow-card transition-all duration-300 hover:shadow-card-hover">
                  <MaterialIcon name={accounting.icon} className="mx-auto text-primary" />
                  <p className="mt-1 text-sm font-bold text-slate-900">{accounting.label}</p>
                </div>
              </RevealOnScroll>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}
