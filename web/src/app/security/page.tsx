import type { Metadata } from "next";
import { ModulePagePreview } from "@/components/modules/ModulePagePreview";
import { CommandCenterFooter } from "@/components/solutions/CommandCenterFooter";
import { CommandCenterShell } from "@/components/solutions/CommandCenterShell";
import { securityPage } from "@/lib/content/modules";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: securityPage.metadata.title,
    description: securityPage.metadata.description,
  };
}

export default function SecurityPage() {
  return (
    <CommandCenterShell
      subtitle={securityPage.sidebarSubtitle}
      activeMenu={securityPage.activeMenu}
      apiLinkLabel="API"
      footer={
        <CommandCenterFooter
          columns={securityPage.footer.columns}
          tagline={securityPage.footer.tagline}
          legalLinks={securityPage.footer.legalLinks}
        />
      }
    >
      <ModulePagePreview page={securityPage} />
    </CommandCenterShell>
  );
}
