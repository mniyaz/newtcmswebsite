import type { CommandCenterMenu } from "@/components/solutions/CommandCenterShell";
import type { SolutionFooterConfig } from "@/lib/content/solutions";

export type ModuleSlug = "operations" | "fleet" | "compliance" | "crm" | "security";

export interface ModuleFeature {
  title: string;
  description: string;
}

export interface ModulePageContent {
  slug: ModuleSlug;
  metadata: {
    title: string;
    description: string;
  };
  badge: string;
  headline: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  sidebarSubtitle: string;
  activeMenu: CommandCenterMenu;
  features: ModuleFeature[];
  footer: SolutionFooterConfig;
}

const defaultLegalLinks = [
  "SLA Standards",
  "Privacy Policy",
  "Terms of Service",
  "Carrier Network",
  "Sustainability",
  "Global Support",
];

const platformFooterLinks = [
  { label: "Operations", href: "/operations" },
  { label: "Fleet", href: "/fleet" },
  { label: "Compliance", href: "/compliance" },
  { label: "CRM", href: "/crm" },
  { label: "Security", href: "/security" },
];

export const operationsPage: ModulePageContent = {
  slug: "operations",
  metadata: {
    title: "Operations & Execution | TCMS.ai",
    description:
      "Manage bookings, dispatching, manifests, driver assignments, delivery proof, and customer updates from one command center built for Malaysian transporters.",
  },
  badge: "OPERATIONS & EXECUTION",
  headline: "Transportation Management Software for End-to-End Shipment Operations",
  description:
    "TCMS is a cloud-based Transportation Management Software (TMS) that helps businesses manage shipment booking, route planning, fleet operations, delivery tracking, freight billing, and logistics analytics from a single platform.",
  primaryCta: "Book Demo",
  secondaryCta: "Watch a video",
  sidebarSubtitle: "LOGISTICS CORE",
  activeMenu: "operations",
  features: [
    {
      title: "Smart Dispatching",
      description:
        "Assign the right driver and vehicle to every load in seconds. Cut down phone calls and WhatsApp back-and-forth.",
    },
    {
      title: "Digital POD",
      description:
        "Capture delivery proof with photos and signatures on mobile. Customers get updates automatically.",
    },
    {
      title: "Exception Management",
      description:
        "See delays, breakdowns, and missed slots immediately so your team can act before customers call.",
    },
    {
      title: "Real-Time Visibility",
      description:
        "Track every shipment from booking to delivery on one live board your whole team can trust.",
    },
  ],
  footer: {
    columns: [
      {
        title: "Platform",
        links: platformFooterLinks.map((link) => ({
          ...link,
          active: link.href === "/operations",
        })),
      },
      {
        title: "Finance",
        links: [
          { label: "Accounting", href: "/solutions/accounting-payments" },
          { label: "Payroll", href: "/solutions/payroll-compliance" },
          { label: "Banking", href: "#" },
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
    legalLinks: defaultLegalLinks,
  },
};

export const fleetPage: ModulePageContent = {
  slug: "fleet",
  metadata: {
    title: "Fleet Management | TCMS.ai",
    description:
      "Track vehicle availability, maintenance, fuel usage, inspections, documents, and operating costs in one place for Malaysian transport operators.",
  },
  badge: "FLEET MANAGEMENT",
  headline: "Maximize Vehicle Utilization. Minimize Downtime.",
  description:
    "Track vehicle availability, maintenance, fuel usage, inspections, documents, and operating costs in one place.",
  primaryCta: "Book Demo",
  secondaryCta: "Watch a video",
  sidebarSubtitle: "PRECISION LOGISTICS",
  activeMenu: "fleet",
  features: [
    {
      title: "Vehicle Lifecycle Management",
      description:
        "Keep a full record for every truck—from registration to disposal—in one easy-to-read profile.",
    },
    {
      title: "Maintenance Planning",
      description:
        "Schedule services before breakdowns happen. Keep prime movers on the road and earning.",
    },
    {
      title: "Fuel Monitoring",
      description:
        "Track fuel spend per vehicle and spot unusual costs early before they hurt your margins.",
    },
    {
      title: "Fleet Analytics",
      description:
        "See utilization, downtime, and cost trends so you can make smarter fleet decisions.",
    },
  ],
  footer: {
    columns: [
      {
        title: "Platform",
        links: platformFooterLinks.map((link) => ({
          ...link,
          active: link.href === "/fleet",
        })),
      },
      {
        title: "Enterprise",
        links: [
          { label: "Accounting", href: "/solutions/accounting-payments" },
          { label: "Payroll", href: "/solutions/payroll-compliance" },
          { label: "Maintenance", href: "/solutions/fleet-maintenance" },
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
    legalLinks: defaultLegalLinks,
  },
};

export const compliancePage: ModulePageContent = {
  slug: "compliance",
  metadata: {
    title: "Compliance & Governance | TCMS.ai",
    description:
      "Manage driver documents, vehicle permits, insurance, road tax, inspections, and compliance alerts. Stay audit-ready with TCMS.ai.",
  },
  badge: "COMPLIANCE & GOVERNANCE",
  headline: "Stay Audit-Ready and Fully Compliant.",
  description:
    "Manage driver documents, vehicle permits, insurance, road tax, inspections, safety records, and compliance alerts.",
  primaryCta: "Book Demo",
  secondaryCta: "Watch a video",
  sidebarSubtitle: "LOGISTICS CORE",
  activeMenu: "compliance",
  features: [
    {
      title: "License & Permit Tracking",
      description:
        "Never miss APAD, JPJ, or driver license renewals. See what expires and when—at a glance.",
    },
    {
      title: "Safety Management",
      description:
        "Keep inspections, training records, and incident logs organised and ready for any audit.",
    },
    {
      title: "Automated Alerts",
      description:
        "Get warned before documents expire—days or weeks ahead—so you fix issues before they become fines.",
    },
    {
      title: "Regulatory Reporting",
      description:
        "Export compliance reports for authorities in minutes instead of scrambling through folders.",
    },
  ],
  footer: {
    columns: [
      {
        title: "Platform",
        links: platformFooterLinks.map((link) => ({
          ...link,
          active: link.href === "/compliance",
        })),
      },
      {
        title: "Compliance",
        links: [
          { label: "Governance", href: "/compliance", active: true },
          { label: "Inspections", href: "#" },
          { label: "Safety Records", href: "#" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "Audit Guides", href: "#" },
          { label: "APAD Resources", href: "#" },
          { label: "Support", href: "#" },
        ],
      },
    ],
    legalLinks: defaultLegalLinks,
  },
};

export const crmPage: ModulePageContent = {
  slug: "crm",
  metadata: {
    title: "Customer Relationship Management | TCMS.ai",
    description:
      "Manage customers, quotations, contracts, support requests, shipment history, invoices, and account performance for Malaysian logistics businesses.",
  },
  badge: "CUSTOMER RELATIONSHIP MANAGEMENT",
  headline: "Turn Every Shipment Into a Better Customer Experience.",
  description:
    "Manage customers, quotations, contracts, support requests, shipment history, invoices, and account performance.",
  primaryCta: "Book Demo",
  secondaryCta: "Watch a video",
  sidebarSubtitle: "LOGISTICS CORE",
  activeMenu: "crm",
  features: [
    {
      title: "Customer 360°",
      description:
        "See every quotation, shipment, invoice, and support ticket for each customer in one clear view.",
    },
    {
      title: "Sales Pipeline",
      description:
        "Track quotes from first enquiry to signed contract without spreadsheets or lost follow-ups.",
    },
    {
      title: "Customer Portal",
      description:
        "Let customers track shipments and download documents themselves—fewer calls to your office.",
    },
    {
      title: "Service Management",
      description:
        "Handle support requests and complaints with full shipment context so your team responds faster.",
    },
  ],
  footer: {
    columns: [
      {
        title: "Platform",
        links: platformFooterLinks.map((link) => ({
          ...link,
          active: link.href === "/crm",
        })),
      },
      {
        title: "Finance",
        links: [
          { label: "Accounting", href: "/solutions/accounting-payments" },
          { label: "Invoicing", href: "#" },
          { label: "Banking", href: "#" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "Customer Portal", href: "#" },
          { label: "Sales Tools", href: "#" },
          { label: "API Access", href: "#" },
        ],
      },
    ],
    legalLinks: defaultLegalLinks,
  },
};

export const securityPage: ModulePageContent = {
  slug: "security",
  metadata: {
    title: "Security & Access Control | TCMS.ai",
    description:
      "Secure your logistics business with role-based access, audit trails, login protection, customer data safeguards, and operational activity monitoring.",
  },
  badge: "SECURITY & ACCESS CONTROL",
  headline: "Protect Every Load, User, and Business Operation.",
  description:
    "Secure your logistics business with role-based access, audit trails, login protection, customer data safeguards, and operational activity monitoring.",
  primaryCta: "Book Demo",
  secondaryCta: "Watch a video",
  sidebarSubtitle: "PRECISION LOGISTICS",
  activeMenu: "security",
  features: [
    {
      title: "Role-Based Access",
      description:
        "Control what owners, managers, dispatchers, finance users, drivers, and customers can see or change.",
    },
    {
      title: "Audit Trail",
      description:
        "Track who created, edited, approved, cancelled, downloaded, or exported operational records.",
    },
    {
      title: "Login Protection",
      description:
        "Protect accounts with secure sessions, password rules, device monitoring, and optional two-factor authentication.",
    },
    {
      title: "Customer Data Security",
      description:
        "Keep shipment details, PODs, invoices, contracts, and customer records protected by permission level.",
    },
    {
      title: "Operational Risk Alerts",
      description:
        "Detect unusual activity such as bulk exports, failed logins, permission changes, or suspicious account access.",
    },
    {
      title: "Secure Document Access",
      description:
        "Restrict access to invoices, POD images, contracts, compliance documents, and reports.",
    },
  ],
  footer: {
    columns: [
      {
        title: "Platform",
        links: platformFooterLinks.map((link) => ({
          ...link,
          active: link.href === "/security",
        })),
      },
      {
        title: "Security",
        links: [
          { label: "Access Control", href: "/security", active: true },
          { label: "Audit Logs", href: "#" },
          { label: "Data Protection", href: "#" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Privacy Policy", href: "#" },
          { label: "Security Audit", href: "#" },
          { label: "Compliance", href: "/compliance" },
        ],
      },
    ],
    legalLinks: defaultLegalLinks,
  },
};

export const modulePages = {
  operations: operationsPage,
  fleet: fleetPage,
  compliance: compliancePage,
  crm: crmPage,
  security: securityPage,
} as const;

export function getModulePage(slug: ModuleSlug): ModulePageContent {
  return modulePages[slug];
}
