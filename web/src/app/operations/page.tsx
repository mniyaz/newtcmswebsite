import type { Metadata } from "next";
import { ModulePagePreview } from "@/components/modules/ModulePagePreview";
import { CommandCenterFooter } from "@/components/solutions/CommandCenterFooter";
import { CommandCenterShell } from "@/components/solutions/CommandCenterShell";
import { operationsPage } from "@/lib/content/modules";

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
    </CommandCenterShell>
  );
}
