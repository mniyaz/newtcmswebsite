import type { Metadata } from "next";
import { ModulePagePreview } from "@/components/modules/ModulePagePreview";
import { CommandCenterFooter } from "@/components/solutions/CommandCenterFooter";
import { CommandCenterShell } from "@/components/solutions/CommandCenterShell";
import { compliancePage } from "@/lib/content/modules";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: compliancePage.metadata.title,
    description: compliancePage.metadata.description,
  };
}

export default function CompliancePage() {
  return (
    <CommandCenterShell
      subtitle={compliancePage.sidebarSubtitle}
      activeMenu={compliancePage.activeMenu}
      footer={
        <CommandCenterFooter
          columns={compliancePage.footer.columns}
          tagline={compliancePage.footer.tagline}
          legalLinks={compliancePage.footer.legalLinks}
        />
      }
    >
      <ModulePagePreview page={compliancePage} />
    </CommandCenterShell>
  );
}
