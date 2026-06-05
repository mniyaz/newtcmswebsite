import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import type { SolutionPageContent } from "@/lib/content/solutions";

interface SolutionHeroProps {
  hero: SolutionPageContent["hero"];
  mockup: React.ReactNode;
}

export function SolutionHero({ hero, mockup }: SolutionHeroProps) {
  return (
    <section className="bg-white pb-12 pt-28 md:pb-16 md:pt-32 lg:pt-36">
      <div className="mx-auto grid w-full max-w-container-max items-center gap-10 px-5 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="space-y-6 md:space-y-8">
          <RevealOnScroll>
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
              {hero.badge}
            </span>
          </RevealOnScroll>
          <RevealOnScroll delayMs={100}>
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.25rem]">
              {hero.title}{" "}
              {hero.titleHighlight && (
                <span className="text-primary">{hero.titleHighlight}</span>
              )}
            </h1>
          </RevealOnScroll>
          <RevealOnScroll delayMs={200}>
            <p className="max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
              {hero.description}
            </p>
          </RevealOnScroll>
          <RevealOnScroll delayMs={300}>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button size="lg" className="w-full sm:w-auto">
                {hero.primaryCta}
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                {hero.secondaryCta}
              </Button>
            </div>
          </RevealOnScroll>
        </div>
        <RevealOnScroll delayMs={400}>{mockup}</RevealOnScroll>
      </div>
    </section>
  );
}
