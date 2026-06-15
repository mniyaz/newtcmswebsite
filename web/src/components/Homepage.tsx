import dynamic from "next/dynamic";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";

import PremiumHeroSlider from "./sections/PremiumHeroSlider";
import ProductHighlights from "./sections/ProductHighlights";
import { HomepageContent } from "@/lib/content/schema";

const PainPointsSection = dynamic(
  () =>
    import("@/components/sections/PainPointsSection").then(
      (mod) => mod.PainPointsSection
    )
);

const VisibilitySection = dynamic(
  () =>
    import("@/components/sections/VisibilitySection").then(
      (mod) => mod.VisibilitySection
    )
);

const CustomerExperienceSection = dynamic(
  () =>
    import("@/components/sections/CustomerExperienceSection").then(
      (mod) => mod.CustomerExperienceSection
    )
);

const FuelCostSection = dynamic(
  () =>
    import("@/components/sections/FuelCostSection").then(
      (mod) => mod.FuelCostSection
    )
);

const ComplianceSection = dynamic(
  () =>
    import("@/components/sections/ComplianceSection").then(
      (mod) => mod.ComplianceSection
    )
);

const EcosystemSection = dynamic(
  () =>
    import("@/components/sections/EcosystemSection").then(
      (mod) => mod.EcosystemSection
    )
);

const RoiCalculatorSection = dynamic(
  () =>
    import("@/components/sections/RoiCalculatorSection").then(
      (mod) => mod.RoiCalculatorSection
    )
);

const SocialProofSection = dynamic(
  () =>
    import("@/components/sections/SocialProofSection").then(
      (mod) => mod.SocialProofSection
    )
);

const PricingSection = dynamic(
  () =>
    import("@/components/sections/PricingSection").then(
      (mod) => mod.PricingSection
    )
);

const FinalCtaSection = dynamic(
  () =>
    import("@/components/sections/FinalCtaSection").then(
      (mod) => mod.FinalCtaSection
    )
);

interface HomepageProps {
  content: HomepageContent;
}

export function Homepage({ content }: HomepageProps) {
  return (
    <>
      <Header navigation={content.navigation} />

      <main className="bg-white text-slate-900">
        <PremiumHeroSlider hero={content.hero} />
        <HeroSection hero={content.hero} />
        <ProductHighlights />

        <PainPointsSection painPoints={content.painPoints} />
        <VisibilitySection visibility={content.visibility} />
        <CustomerExperienceSection
          customerExperience={content.customerExperience}
        />
        <FuelCostSection fuelCost={content.fuelCost} />
        <ComplianceSection compliance={content.compliance} />
        <EcosystemSection ecosystem={content.ecosystem} />
        <RoiCalculatorSection roiCalculator={content.roiCalculator} />
        <SocialProofSection socialProof={content.socialProof} />
        <PricingSection pricing={content.pricing} />
        <FinalCtaSection finalCta={content.finalCta} />
      </main>

      <Footer footer={content.footer} />
    </>
  );
}