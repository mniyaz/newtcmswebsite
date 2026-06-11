import type { Metadata } from "next";
import { ModulePagePreview } from "@/components/modules/ModulePagePreview";
import { CommandCenterFooter } from "@/components/solutions/CommandCenterFooter";
import { CommandCenterShell } from "@/components/solutions/CommandCenterShell";
import { operationsPage } from "@/lib/content/modules";
import TrustedStats from "@/components/Showcase/TrustedStats";
import ChallengesSection from "@/components/Showcase/ChallengesSection";
import SolutionOverview from "@/components/Showcase/SolutionOverview";
import WorkflowSection from "@/components/Showcase/WorkflowSection";
import DashboardPreview from "@/components/Showcase/DashboardPreview";
import BenefitsSection from "@/components/Showcase/BenefitsSection";
import IndustriesSection from "@/components/Showcase/IndustriesSection";
import ClaimsWorkflow from "@/components/Showcase/ClaimsWorkflow";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: operationsPage.metadata.title,
    description: operationsPage.metadata.description,
  };
}

export default function OperationsPage() {
  return (
    <CommandCenterShell
      subtitle={operationsPage.sidebarSubtitle}
      activeMenu={operationsPage.activeMenu}
      footer={
        <CommandCenterFooter
          columns={operationsPage.footer.columns}
          tagline={operationsPage.footer.tagline}
          legalLinks={operationsPage.footer.legalLinks}
        />
      }
    >
      <ModulePagePreview page={operationsPage} />
      <TrustedStats/>
      <ChallengesSection/>
      <SolutionOverview/>
      <WorkflowSection/>
      <BenefitsSection/>
      <IndustriesSection/>
      <ClaimsWorkflow/>
    </CommandCenterShell>
  );
}
