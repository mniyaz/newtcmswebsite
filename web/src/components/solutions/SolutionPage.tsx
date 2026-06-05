import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SolutionHero } from "@/components/solutions/SolutionHero";
import { SolutionFeatureGrid } from "@/components/solutions/SolutionFeatureGrid";
import { SolutionStats } from "@/components/solutions/SolutionStats";
import { SolutionBenefits } from "@/components/solutions/SolutionBenefits";
import { SolutionCTA } from "@/components/solutions/SolutionCTA";
import { SolutionMockup } from "@/components/solutions/SolutionMockup";
import type { SolutionPageContent } from "@/lib/content/solutions";
import type { HomepageContent } from "@/lib/content/schema";

interface SolutionPageProps {
  page: SolutionPageContent;
  mockupVariant: "accounting" | "fleet" | "payroll";
  siteContent: Pick<HomepageContent, "navigation" | "footer">;
}

export function SolutionPage({
  page,
  mockupVariant,
  siteContent,
}: SolutionPageProps) {
  return (
    <>
      <Header navigation={siteContent.navigation} />
      <main className="bg-white text-slate-900">
        <SolutionHero
          hero={page.hero}
          mockup={<SolutionMockup variant={mockupVariant} />}
        />
        <SolutionFeatureGrid features={page.features} />
        {page.benefits && page.benefitsTitle && (
          <SolutionBenefits
            title={page.benefitsTitle}
            subtitle={page.benefitsSubtitle}
            benefits={page.benefits}
          />
        )}
        <SolutionStats stats={page.stats} />
        <SolutionCTA cta={page.cta} />
        <div className="border-t border-slate-200 bg-section-muted py-8">
          <p className="text-center text-sm text-slate-500">
            <Link href="/" className="font-semibold text-primary hover:underline">
              ← Back to TCMS.ai homepage
            </Link>
          </p>
        </div>
      </main>
      <Footer footer={siteContent.footer} />
    </>
  );
}
