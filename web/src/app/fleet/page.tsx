import type { Metadata } from "next";
import { ModulePagePreview } from "@/components/modules/ModulePagePreview";
import { CommandCenterFooter } from "@/components/solutions/CommandCenterFooter";
import { CommandCenterShell } from "@/components/solutions/CommandCenterShell";
import { fleetPage } from "@/lib/content/modules";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: fleetPage.metadata.title,
    description: fleetPage.metadata.description,
  };
}

export default function FleetModulePage() {
  return (
    <CommandCenterShell
      subtitle={fleetPage.sidebarSubtitle}
      activeMenu={fleetPage.activeMenu}
      apiLinkLabel="API"
      footer={
        <CommandCenterFooter
          columns={fleetPage.footer.columns}
          tagline={fleetPage.footer.tagline}
          legalLinks={fleetPage.footer.legalLinks}
        />
      }
    >
      <ModulePagePreview page={fleetPage} />
    </CommandCenterShell>
  );
}
