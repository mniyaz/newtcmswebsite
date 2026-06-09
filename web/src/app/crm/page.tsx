import type { Metadata } from "next";
import { ModulePagePreview } from "@/components/modules/ModulePagePreview";
import { CommandCenterFooter } from "@/components/solutions/CommandCenterFooter";
import { CommandCenterShell } from "@/components/solutions/CommandCenterShell";
import { crmPage } from "@/lib/content/modules";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: crmPage.metadata.title,
    description: crmPage.metadata.description,
  };
}

export default function CrmPage() {
  return (
    <CommandCenterShell
      subtitle={crmPage.sidebarSubtitle}
      activeMenu={crmPage.activeMenu}
      footer={
        <CommandCenterFooter
          columns={crmPage.footer.columns}
          tagline={crmPage.footer.tagline}
          legalLinks={crmPage.footer.legalLinks}
        />
      }
    >
      <ModulePagePreview page={crmPage} />
    </CommandCenterShell>
  );
}
