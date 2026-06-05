import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import type { SolutionPageContent } from "@/lib/content/solutions";

interface SolutionCTAProps {
  cta: SolutionPageContent["cta"];
}

export function SolutionCTA({ cta }: SolutionCTAProps) {
  return (
    <section className="overflow-hidden bg-primary py-16 text-center text-white md:py-20">
      <Container className="mx-auto max-w-2xl">
        <RevealOnScroll>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              {cta.title}
            </h2>
            <p className="text-base leading-relaxed text-white/85 md:text-lg">
              {cta.description}
            </p>
            <div className="flex flex-col items-center justify-center gap-3 pt-2 sm:flex-row">
              <Button variant="white" size="lg" pulse className="min-w-[200px]">
                {cta.primaryCta}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="min-w-[200px] border-white/40 text-white hover:bg-white hover:text-primary"
              >
                {cta.secondaryCta}
              </Button>
            </div>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
