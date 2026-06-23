import type { HomepageContent } from "@/lib/content/schema";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import Link from "next/link";

interface FinalCtaSectionProps {
  finalCta: HomepageContent["finalCta"];
}

export function FinalCtaSection({ finalCta }: FinalCtaSectionProps) {
  return (
    <section
      id="contact"
      className="overflow-hidden bg-[#00327D] py-5 text-center text-white md:py-15"
    >
      <Container className="mx-auto max-w-2xl">
        <RevealOnScroll>
          <div className="space-y-6 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              {finalCta.title}
            </h2>
            <p className="text-sm leading-relaxed text-white/85 md:text-lg">
              {finalCta.description}
            </p>
            <div className="block md:hidden">
              <Link href="/#demoBook">
                <Button
                  variant="white"
                  pulse
                  className="min-w-[240px] text-base font-bold"
                >
                  {finalCta.cta.label}
                </Button>
              </Link>
            </div>
            <div className="pt-2 hidden md:block">
              <Link href="/#demoBook">
                <Button
                  variant="white"
                  size="lg"
                  pulse
                  className="min-w-[240px] text-base font-bold"
                >
                  {finalCta.cta.label}
                </Button>
              </Link>
            </div>
            <p className="text-sm text-white/65">{finalCta.footnote}</p>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
