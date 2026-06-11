import type { Metadata } from "next";
import { CommandCenterFooter } from "@/components/solutions/CommandCenterFooter";
import { CommandCenterShell } from "@/components/solutions/CommandCenterShell";
import { PayrollCompliancePreview } from "@/components/solutions/PayrollCompliancePreview";
import {
  payrollComplianceFooter,
  payrollCompliancePage,
} from "@/lib/content/solutions";
import DeliveryKPIReport from "@/components/PayrollShowcase/DeliveryKPIReport";
import PickupKPIReport from "@/components/PayrollShowcase/PickupKPIReport";
import ExcelReports from "@/components/PayrollShowcase/ExcelReports";
import PayslipModule from "@/components/PayrollShowcase/PayslipModule";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: payrollCompliancePage.metadata.title,
    description: payrollCompliancePage.metadata.description,
  };
}

export default function PayrollCompliancePage() {
  return (
    <CommandCenterShell
      subtitle="LOGISTICS CORE"
      activeMenu="payroll"
      apiLinkLabel="API Docs"
      footer={
        <CommandCenterFooter
          columns={payrollComplianceFooter.columns}
          tagline={payrollComplianceFooter.tagline}
          legalLinks={payrollComplianceFooter.legalLinks}
        />
      }
    >
      <PayrollCompliancePreview />
      <DeliveryKPIReport/>
      <PickupKPIReport/>
      <ExcelReports/>
      <PayslipModule/>
    </CommandCenterShell>
  );
}
