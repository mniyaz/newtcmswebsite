import Link from "next/link";
import {
  Bell,
  CircleHelp,
  Landmark,
  Route,
  Settings,
  Shield,
  Truck,
  User,
  Users,
  BadgeCheck,
  Wallet,
} from "lucide-react";
import { cn } from "@/lib/utils/cn";

export type CommandCenterMenu =
  | "operations"
  | "finance"
  | "fleet"
  | "compliance"
  | "crm"
  | "security"
  |"payroll";

interface CommandCenterShellProps {
  subtitle: string;
  activeMenu: CommandCenterMenu;
  showSecurity?: boolean;
  apiLinkLabel?: "API" | "API Docs";
  children: React.ReactNode;
  footer: React.ReactNode;
}

const menuItems: {
  id: CommandCenterMenu;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  securityOnly?: boolean;
}[] = [
  { id: "operations", label: "Operations", icon: Route },
  { id: "finance", label: "Finance", icon: Landmark },
  { id: "fleet", label: "Fleet", icon: Truck },
  { id: "compliance", label: "Compliance", icon: BadgeCheck },
  { id: "crm", label: "CRM", icon: Users },
  { id: "security", label: "Security", icon: Shield },
  { id: "payroll", label: "Payroll", icon: Wallet },
];

const menuHrefs: Partial<Record<CommandCenterMenu, string>> = {
  operations: "/operations",
  finance: "/solutions/accounting-payments",
  fleet: "/fleet",
  compliance: "/compliance",
  crm: "/crm",
  security: "/security",
  payroll: "/solutions/payroll-compliance",
};

const topNavLinks = ["Dashboard", "Analytics", "Global View", "Reports"];

export function CommandCenterShell({
  subtitle,
  activeMenu,
  showSecurity = false,
  apiLinkLabel = "API Docs",
  children,
  footer,
}: CommandCenterShellProps) {
  const visibleMenu = menuItems.filter(
    (item) => !item.securityOnly || showSecurity,
  );

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f7f8fd] text-slate-900">
      {/* Top navigation */}
      <header className="fixed top-0 z-50 flex h-16 w-full items-center justify-between border-b border-slate-200/80 bg-white/95 px-4 backdrop-blur-md sm:px-6 lg:px-8">
        <div className="flex items-center gap-6 lg:gap-10">
          <Link href="/" className="text-xl font-bold tracking-tight text-primary">
            TCMS.ai
          </Link>
          <nav className="hidden items-center gap-6 lg:flex">
            {topNavLinks.map((link) => (
              <span
                key={link}
                className="cursor-default text-sm font-semibold uppercase tracking-wide text-slate-500"
              >
                {link}
              </span>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            type="button"
            className="hidden rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white shadow-sm sm:block"
          >
            Live Tracking
          </button>
          <div className="hidden items-center gap-3 text-slate-400 sm:flex">
            <Bell className="h-5 w-5" />
            <Settings className="h-5 w-5" />
            <CircleHelp className="h-5 w-5" />
          </div>
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-primary/10 text-primary">
            <User className="h-4 w-4" />
          </div>
        </div>
      </header>

      {/* Sidebar — desktop only */}
      <aside className="fixed left-0 top-16 z-40 hidden h-[calc(100vh-4rem)] w-[232px] flex-col border-r border-slate-200/80 bg-white px-4 py-8 md:flex">
        <div className="mb-8 px-2">
          <h2 className="text-base font-semibold text-primary">Command Center</h2>
          <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
            {subtitle}
          </p>
        </div>

        <nav className="flex flex-1 flex-col gap-1">
          {visibleMenu.map((item) => {
            const Icon = item.icon;
            const isActive = item.id === activeMenu;
            const href = menuHrefs[item.id];
            const className = cn(
              "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold uppercase tracking-wide transition-colors",
              isActive
                ? "border-l-4 border-primary bg-primary/5 text-primary"
                : "text-slate-500 hover:bg-slate-50 hover:text-primary",
            );

            if (href) {
              return (
                <Link key={item.id} href={href} className={className}>
                  <Icon className="h-5 w-5 shrink-0" />
                  {item.label}
                </Link>
              );
            }

            return (
              <div key={item.id} className={className}>
                <Icon className="h-5 w-5 shrink-0" />
                {item.label}
              </div>
            );
          })}
        </nav>

        <div className="mt-auto space-y-4 border-t border-slate-200 pt-6">
          <button
            type="button"
            className="w-full rounded-xl bg-emerald-400 py-3 text-sm font-bold uppercase tracking-tight text-emerald-950 shadow-sm"
          >
            New Load
          </button>
          <div className="space-y-2 px-2 text-xs font-bold uppercase tracking-widest text-slate-400">
            <p className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              System Status
            </p>
            <p>{apiLinkLabel}</p>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="pt-16 md:pl-[232px]">
        <div className="mx-auto max-w-[1200px] px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
          {children}
        </div>
        {footer}
      </main>
    </div>
  );
}
