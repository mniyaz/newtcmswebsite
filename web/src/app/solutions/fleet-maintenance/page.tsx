import type { Metadata } from "next";
import { CommandCenterFooter } from "@/components/solutions/CommandCenterFooter";
import { CommandCenterShell } from "@/components/solutions/CommandCenterShell";
import { FleetMaintenancePreview } from "@/components/solutions/FleetMaintenancePreview";
import {
  fleetMaintenanceFooter,
  fleetMaintenancePage,
} from "@/lib/content/solutions";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: fleetMaintenancePage.metadata.title,
    description: fleetMaintenancePage.metadata.description,
  };
}

export default function FleetMaintenancePage() {
  return (
    <CommandCenterShell
      subtitle="PRECISION LOGISTICS"
      activeMenu="fleet"
      showSecurity
      apiLinkLabel="API"
      footer={
        <CommandCenterFooter
          columns={fleetMaintenanceFooter.columns}
          tagline={fleetMaintenanceFooter.tagline}
          legalLinks={fleetMaintenanceFooter.legalLinks}
        />
      }
    >
      <FleetMaintenancePreview />
    </CommandCenterShell>
  );
}
