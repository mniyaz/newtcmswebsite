import type { Metadata } from "next";
import { AccountingPaymentsPreview } from "@/components/solutions/AccountingPaymentsPreview";
import { CommandCenterFooter } from "@/components/solutions/CommandCenterFooter";
import { CommandCenterShell } from "@/components/solutions/CommandCenterShell";
import {
  accountingPaymentsFooter,
  accountingPaymentsPage,
} from "@/lib/content/solutions";
import BillingFeatures from "@/components/FinanceShow/BillingFeatures";
import BillingWorkflow from "@/components/FinanceShow/BillingWorkflow";
import BillingBenefits from "@/components/FinanceShow/BillingBenefits";
import BillingCTA from "@/components/FinanceShow/BillingCTA";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: accountingPaymentsPage.metadata.title,
    description: accountingPaymentsPage.metadata.description,
  };
}

export default function AccountingPaymentsPage() {
  return (
    <CommandCenterShell
      subtitle="LOGISTICS CORE"
      activeMenu="finance"
      apiLinkLabel="API Docs"
      footer={
        <CommandCenterFooter
          columns={accountingPaymentsFooter.columns}
          tagline={accountingPaymentsFooter.tagline}
          legalLinks={accountingPaymentsFooter.legalLinks}
        />
      }
    >
      <AccountingPaymentsPreview />
      <BillingFeatures/>
      <BillingWorkflow/>
      <BillingBenefits/>
    </CommandCenterShell>
  );
}
