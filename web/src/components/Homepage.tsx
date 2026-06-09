import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { PainPointsSection } from "@/components/sections/PainPointsSection";
import { VisibilitySection } from "@/components/sections/VisibilitySection";
import { CustomerExperienceSection } from "@/components/sections/CustomerExperienceSection";
import { FuelCostSection } from "@/components/sections/FuelCostSection";
import { ComplianceSection } from "@/components/sections/ComplianceSection";
import { EcosystemSection } from "@/components/sections/EcosystemSection";
import { RoiCalculatorSection } from "@/components/sections/RoiCalculatorSection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import type { HomepageContent } from "@/lib/content/schema";

interface HomepageProps {
  content: HomepageContent;
}

export function Homepage({ content }: HomepageProps) {
  return (
    <>
      <Header navigation={content.navigation} />
      <main className="bg-white text-slate-900">
        <HeroSection hero={content.hero} />
        <PainPointsSection painPoints={content.painPoints} />
        <VisibilitySection visibility={content.visibility} />
        <CustomerExperienceSection customerExperience={content.customerExperience} />
        <FuelCostSection fuelCost={content.fuelCost} />
        <ComplianceSection compliance={content.compliance} />
        <EcosystemSection ecosystem={content.ecosystem} />
        <RoiCalculatorSection roiCalculator={content.roiCalculator} />
        <SocialProofSection socialProof={content.socialProof} />
        <PricingSection pricing={content.pricing} />
        {/* <FinalCtaSection finalCta={content.finalCta} /> */}
      </main>
      <Footer footer={content.footer} />
    </>
  );
}
