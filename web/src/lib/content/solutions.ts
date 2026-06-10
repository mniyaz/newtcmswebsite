export interface SolutionStat {
  value: string;
  label: string;
  variant?: "primary" | "secondary" | "default";
}

export interface SolutionFeature {
  icon: string;
  title: string;
  description: string;
  layout?: "default" | "wide" | "highlight";
  tags?: string[];
}

export interface SolutionBenefit {
  icon: string;
  title: string;
  description: string;
}

export interface SolutionPageContent {
  slug: string;
  metadata: {
    title: string;
    description: string;
  };
  hero: {
    badge: string;
    title: string;
    titleHighlight?: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
  features: SolutionFeature[];
  stats: {
    title: string;
    subtitle: string;
    items: SolutionStat[];
  };
  benefits?: SolutionBenefit[];
  benefitsTitle?: string;
  benefitsSubtitle?: string;
  cta: {
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
}

export const platformMenu = [
  {
    label: "GPS",
    href: "/platform/gps",
    description: "Live vehicle tracking",
  },
  {
    label: "TCMS",
    children: [
      {
        label: "Accounting & Payments",
        href: "/solutions/accounting-payments",
        description: "Invoicing, banking & reconciliation",
      },
      {
        label: "Fleet Maintenance",
        href: "/solutions/fleet-maintenance",
        description: "Inspections, service & compliance health",
      },
      {
        label: "Payroll & Compliance",
        href: "/solutions/payroll-compliance",
        description: "EPF, SOCSO, LHDN & APAD for drivers",
      },
    ],
  },
];

export const accountingPaymentsPage: SolutionPageContent = {
  slug: "accounting-payments",
  metadata: {
    title: "Accounting & Payments | TCMS.ai",
    description:
      "Automated invoicing, Malaysian bank reconciliation, and payment gateways for transport operators. Get paid faster with TCMS.ai.",
  },
  hero: {
    badge: "Accounting & Payments",
    title: "Financial Clarity for",
    titleHighlight: "Malaysian Carriers.",
    description:
      "Eliminate manual entry and reclaim your time. TCMS.ai automates the entire financial lifecycle from the second a load is delivered to the moment funds hit your bank account.",
    primaryCta: "Book Demo",
    secondaryCta: "Contact Sales",
  },
  features: [
    {
      icon: "receipt_long",
      title: "One-Click Invoicing",
      description:
        "Turn proof-of-delivery photos into professional, audit-ready invoices instantly. AI extracts data directly from shipping docs, eliminating human error.",
      layout: "wide",
    },
    {
      icon: "account_balance_wallet",
      title: "Localized Banking",
      description:
        "Direct integration with major Malaysian banks. Reconcile settlements in real-time without spreadsheet exports.",
      tags: ["MAYBANK", "CIMB", "RHB", "PUBLIC BANK"],
    },
    {
      icon: "sync",
      title: "Zero-Touch Reconciliation",
      description:
        "Automatic matching of bank statements with your ledger. Mark loads as paid instantly upon settlement.",
    },
    {
      icon: "payments",
      title: "Integrated Payment Gateways",
      description:
        "Accept payments via FPX, credit cards, or wire transfers. Every transaction tracked with enterprise-grade encryption.",
      layout: "highlight",
    },
  ],
  stats: {
    title: "Stop Chasing Paperwork",
    subtitle:
      "Traditional accounting takes hours of manual work. TCMS.ai reduces that to zero. Focus on moving freight, not numbers.",
    items: [
      { value: "94%", label: "Reduction in Errors", variant: "secondary" },
      { value: "12h", label: "Saved Per Week", variant: "primary" },
      { value: "Instant", label: "Ledger Updates", variant: "secondary" },
      { value: "RM 0", label: "Manual Data Fees", variant: "default" },
    ],
  },
  benefits: [
    {
      icon: "description",
      title: "Trip-Linked Invoicing",
      description: "Every invoice tied to completed trips and digital PODs — no more missing paperwork.",
    },
    {
      icon: "account_balance",
      title: "Multi-Bank Support",
      description: "Works with the banks Malaysian transporters already use for daily operations.",
    },
    {
      icon: "shield",
      title: "Audit-Ready Records",
      description: "Complete financial trail for LHDN, auditors, and enterprise customers.",
    },
  ],
  benefitsTitle: "Built for Malaysian Transport Finance",
  benefitsSubtitle: "Simple, trustworthy tools that fit how local operators actually work.",
  cta: {
    title: "Ready to Automate Your Transport Accounting?",
    description:
      "Join Malaysian fleet operators who invoice faster, reconcile automatically, and get paid weeks sooner.",
    primaryCta: "Book Demo",
    secondaryCta: "Contact Sales",
  },
};

export const fleetMaintenancePage: SolutionPageContent = {
  slug: "fleet-maintenance",
  metadata: {
    title: "Fleet Maintenance & Inspection | TCMS.ai",
    description:
      "Maintenance queue, inspections, service reminders, and compliance health for Malaysian fleets. Prevent breakdowns before they happen.",
  },
  hero: {
    badge: "Fleet Maintenance",
    title: "Zero-Downtime Maintenance for",
    titleHighlight: "Your Fleet.",
    description:
      "Predictive monitoring and automated compliance for Malaysian transport operators. Keep prime movers on the road with service reminders, digital inspections, and APAD-ready records.",
    primaryCta: "Book Demo",
    secondaryCta: "Contact Sales",
  },
  features: [
    {
      icon: "engineering",
      title: "Maintenance Queue",
      description:
        "See every vehicle in service, road tax renewal, or inspection — prioritised by urgency so nothing slips through.",
      layout: "wide",
    },
    {
      icon: "warning",
      title: "Critical Alerts",
      description:
        "Expired licenses, overdue services, and failed inspections surfaced immediately — not after a roadside check.",
    },
    {
      icon: "settings_suggest",
      title: "Service Reminders",
      description:
        "Oil changes, tyre rotations, and APAD-required checks scheduled automatically based on mileage and calendar dates.",
    },
    {
      icon: "fact_check",
      title: "Digital Inspections",
      description:
        "Paperless pre-trip and post-trip forms from the TCMS Go app, synced to your central dashboard in real time.",
      layout: "highlight",
    },
  ],
  stats: {
    title: "Keep Your Fleet Road-Ready",
    subtitle:
      "Unplanned breakdowns cost Malaysian operators thousands per day. TCMS.ai helps you stay ahead of maintenance.",
    items: [
      { value: "88%", label: "Compliance Health Score", variant: "secondary" },
      { value: "03", label: "Critical Alerts Resolved", variant: "primary" },
      { value: "12", label: "Scheduled Services", variant: "default" },
      { value: "0", label: "Missed Renewals", variant: "secondary" },
    ],
  },
  benefits: [
    {
      icon: "notifications_active",
      title: "Real-Time Driver Sync",
      description: "Push maintenance tasks to drivers instantly via the TCMS Go mobile app.",
    },
    {
      icon: "history_edu",
      title: "Auditable Service Logs",
      description: "Complete digital history for JPJ, APAD, and internal audits.",
    },
    {
      icon: "verified_user",
      title: "Compliance Health Dashboard",
      description: "One view of fleet readiness — licenses, permits, inspections, and service status.",
    },
  ],
  benefitsTitle: "Mission-Critical Fleet Tools",
  benefitsSubtitle: "Engineered for high-stakes Malaysian logistics operations.",
  cta: {
    title: "Stop Losing Money to Breakdowns",
    description:
      "Schedule a demo and see how TCMS.ai keeps your fleet compliant, serviced, and on the road.",
    primaryCta: "Book Demo",
    secondaryCta: "Contact Sales",
  },
};

export const payrollCompliancePage: SolutionPageContent = {
  slug: "payroll-compliance",
  metadata: {
    title: "Payroll & Compliance (Malaysia) | TCMS.ai",
    description:
      "Driver payroll with EPF/KWSP, SOCSO, EIS, LHDN PCB, and APAD ICOP compliance. Trip-based allowances integrated from fleet data.",
  },
  hero: {
    badge: "LHDN & APAD Integrated",
    title: "Worry-Free Payroll for",
    titleHighlight: "Malaysian Logistics.",
    description:
      "Automated statutory deductions and trip-based allowances integrated directly from your fleet data. Compliance-first payroll built for transport operators.",
    primaryCta: "Book Demo",
    secondaryCta: "Contact Sales",
  },
  features: [
    {
      icon: "account_balance_wallet",
      title: "EPF / KWSP",
      description: "Monthly E-Caruman calculations and upload-ready files for Malaysian employers.",
    },
    {
      icon: "medical_services",
      title: "SOCSO & EIS",
      description: "Real-time benefit filings with accurate employer and employee contributions.",
    },
    {
      icon: "description",
      title: "LHDN PCB & EA Forms",
      description: "Accurate tax deductions and year-end EA form generation for every driver.",
    },
    {
      icon: "approval_delegation",
      title: "APAD / ICOP Compliance",
      description:
        "Working hours and rest periods validated against fleet trip data for regulatory audit trails.",
      layout: "highlight",
    },
  ],
  stats: {
    title: "Compliance You Can Trust",
    subtitle:
      "Malaysian statutory payroll is complex. TCMS.ai handles EPF, SOCSO, EIS, and LHDN so you can focus on operations.",
    items: [
      { value: "100%", label: "Compliance Score", variant: "secondary" },
      { value: "RM 142K", label: "Monthly Gross Processed", variant: "primary" },
      { value: "42", label: "Drivers on Payroll", variant: "default" },
      { value: "0", label: "Manual Statutory Errors", variant: "secondary" },
    ],
  },
  benefits: [
    {
      icon: "route",
      title: "Smart Trip Allowances",
      description: "Mileage and trip allowances calculated automatically when each delivery completes.",
    },
    {
      icon: "smartphone",
      title: "Driver Self-Service",
      description: "Drivers access payslips and claims via the TCMS Go mobile app.",
    },
    {
      icon: "verified",
      title: "Automated Audit Trail",
      description: "Every deduction logged and ready for LHDN, SOCSO, and APAD inspections.",
    },
  ],
  benefitsTitle: "Designed for Financial Clarity",
  benefitsSubtitle: "Payroll that connects directly to how your fleet actually operates.",
  cta: {
    title: "Run Payroll Without the Headache",
    description:
      "See how TCMS.ai automates Malaysian statutory compliance for transport operators with 10 to 500+ drivers.",
    primaryCta: "Book Demo",
    secondaryCta: "Contact Sales",
  },
};

export const solutionPages = {
  "accounting-payments": accountingPaymentsPage,
  "fleet-maintenance": fleetMaintenancePage,
  "payroll-compliance": payrollCompliancePage,
} as const;

export type SolutionSlug = keyof typeof solutionPages;

export function getSolutionPage(slug: SolutionSlug): SolutionPageContent {
  return solutionPages[slug];
}

export interface SolutionFooterColumn {
  title: string;
  links: { label: string; href: string; active?: boolean }[];
}

export interface SolutionFooterConfig {
  tagline?: string;
  columns: SolutionFooterColumn[];
  legalLinks?: string[];
}

export const accountingPaymentsFooter: SolutionFooterConfig = {
  columns: [
    {
      title: "Operations",
      links: [
        { label: "GPS Tracking", href: "#" },
        { label: "Route Optimization", href: "#" },
        { label: "Load Planning", href: "#" },
      ],
    },
    {
      title: "Finance",
      links: [
        { label: "Accounting", href: "/solutions/accounting-payments", active: true },
        { label: "Payroll", href: "/solutions/payroll-compliance" },
        { label: "Banking", href: "#" },
      ],
    },
    {
      title: "Compliance",
      links: [
        { label: "Maintenance", href: "/solutions/fleet-maintenance" },
        { label: "Inspections", href: "#" },
        { label: "Safety Compliance", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Driver Portal", href: "#" },
        { label: "Client Portal", href: "#" },
        { label: "API Access", href: "#" },
      ],
    },
  ],
};

export const fleetMaintenanceFooter: SolutionFooterConfig = {
  tagline:
    "© 2024 TCMS.ai. Enterprise Intelligence for Global Freight. Engineered for precision and safety.",
  columns: [
    {
      title: "Tracking",
      links: [
        { label: "GPS Systems", href: "#" },
        { label: "Route Optimization", href: "#" },
        { label: "Telematics", href: "#" },
      ],
    },
    {
      title: "Operations",
      links: [
        { label: "Maintenance", href: "/solutions/fleet-maintenance", active: true },
        { label: "Inspections", href: "#" },
        { label: "Safety Rules", href: "#" },
      ],
    },
    {
      title: "Enterprise",
      links: [
        { label: "Accounting", href: "/solutions/accounting-payments" },
        { label: "Payroll", href: "/solutions/payroll-compliance" },
        { label: "API Solutions", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy", href: "#" },
        { label: "Terms", href: "#" },
        { label: "Contact", href: "#" },
      ],
    },
  ],
  legalLinks: ["Privacy Policy", "Terms of Service", "Global Support"],
};

export const payrollComplianceFooter: SolutionFooterConfig = {
  tagline:
    "© 2024 TCMS.ai. Enterprise Intelligence for Global Freight. Specialized Malaysian Payroll and Compliance Engine.",
  columns: [
    {
      title: "Platform",
      links: [
        { label: "GPS Tracking", href: "#" },
        { label: "Route Optimization", href: "#" },
        { label: "Load Planning", href: "#" },
      ],
    },
    {
      title: "Finance",
      links: [
        { label: "Accounting", href: "/solutions/accounting-payments", active: true },
        { label: "Payroll", href: "/solutions/payroll-compliance", active: true },
        { label: "Banking", href: "#", active: true },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Security Audit", href: "#" },
        { label: "Compliance", href: "#" },
      ],
    },
  ],
  legalLinks: ["Privacy Policy", "Terms of Service", "Compliance"],
};
