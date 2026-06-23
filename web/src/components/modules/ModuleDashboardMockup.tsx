import {
  AlertTriangle,
  Calendar,
  CheckCircle2,
  Clock,
  Headphones,
  Shield,
  ShieldCheck,
  Star,
  TrendingUp,
  Truck,
  Users,
  Wrench,
} from "lucide-react";
import { PreviewCard } from "@/components/solutions/PreviewCard";
import type { ModuleSlug } from "@/lib/content/modules";
import { cn } from "@/lib/utils/cn";

interface ModuleDashboardMockupProps {
  variant: ModuleSlug;
}

function StatPill({
  label,
  value,
  tone = "default",
}: {
  label: string;
  value: string;
  tone?: "default" | "primary" | "warning" | "success";
}) {
  return (
    <div className="rounded-xl border border-slate-100 bg-slate-50 p-3">
      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
        {label}
      </p>
      <p
        className={cn(
          "mt-1 text-lg font-bold",
          tone === "primary" && "text-primary",
          tone === "warning" && "text-amber-600",
          tone === "success" && "text-emerald-600",
          tone === "default" && "text-slate-900",
        )}
      >
        {value}
      </p>
    </div>
  );
}

function OperationsDashboard() {
  const dispatchRows = [
    { id: "LD-2401", route: "Shah Alam → JB", driver: "Ahmad H.", status: "In Transit", tone: "text-primary" },
    { id: "LD-2402", route: "Penang → KL", driver: "Raj K.", status: "Loading", tone: "text-slate-600" },
    { id: "LD-2403", route: "Ipoh → Melaka", driver: "Lee W.", status: "Delayed", tone: "text-amber-600" },
  ];

  return (
    <div className="xl:h-[380px]">
      {/* <div className="mb-5 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">Live Dispatch Board</h3>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Today&apos;s Overview
          </p>
        </div>
        <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-600">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
          Live
        </span>
      </div>
      <div className="mb-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <StatPill label="Today's Loads" value="24" tone="primary" />
        <StatPill label="Active Trips" value="18" tone="success" />
        <StatPill label="Delayed" value="3" tone="warning" />
        <StatPill label="Assigned" value="21" />
      </div>
      <div className="space-y-2">
        <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
          Driver Assignments
        </p>
        {dispatchRows.map((row) => (
          <div
            key={row.id}
            className="flex flex-col gap-2 rounded-xl border border-slate-100 bg-slate-50 p-3 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Truck className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">{row.id}</p>
                <p className="text-xs text-slate-500">{row.route}</p>
              </div>
            </div>
            <div className="sm:text-right">
              <p className="text-xs font-medium text-slate-600">{row.driver}</p>
              <p className={cn("text-xs font-bold", row.tone)}>{row.status}</p>
            </div>
          </div>
        ))}
      </div> */}
      <img src='/masterDashBoard.png' className="shadow-lg rounded-lg h-full w-full border border-gray-200"/>
    </div>
  );
}

function FleetDashboard() {
  const fuelBars = [55, 62, 48, 70, 65, 58, 72];

  return (
    <PreviewCard className="shadow-md">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">Fleet Overview</h3>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Real-Time Status
          </p>
        </div>
        <TrendingUp className="h-5 w-5 text-emerald-600" />
      </div>
      <div className="mb-5 grid grid-cols-3 gap-3">
        <StatPill label="Utilization" value="87%" tone="success" />
        <StatPill label="Available" value="42" tone="primary" />
        <StatPill label="Maintenance" value="6" tone="warning" />
      </div>
      <div className="mb-5">
        <p className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-500">
          Fuel Cost Trend
        </p>
        <div className="flex h-28 items-end gap-2">
          {fuelBars.map((height, i) => (
            <div
              key={i}
              className={cn(
                "w-full rounded-t-md",
                i === fuelBars.length - 1 ? "bg-primary" : "bg-slate-100",
              )}
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </div>
      <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Maintenance Calendar
          </p>
          <Calendar className="h-4 w-4 text-slate-400" />
        </div>
        <div className="space-y-2">
          {[
            { vehicle: "VH-7729", task: "Oil Change", date: "Mar 12" },
            { vehicle: "VH-1104", task: "Road Tax", date: "Mar 15" },
          ].map((item) => (
            <div key={item.vehicle} className="flex items-center justify-between text-sm">
              <span className="flex items-center gap-2 text-slate-700">
                <Wrench className="h-3.5 w-3.5 text-primary" />
                {item.vehicle} — {item.task}
              </span>
              <span className="text-xs font-bold text-slate-500">{item.date}</span>
            </div>
          ))}
        </div>
      </div>
    </PreviewCard>
  );
}

function ComplianceDashboard() {
  return (
    <PreviewCard className="shadow-md">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">Compliance Health</h3>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Audit Readiness
          </p>
        </div>
        <CheckCircle2 className="h-6 w-6 text-emerald-600" />
      </div>
      <div className="mb-5 flex items-center gap-4 rounded-xl border border-emerald-100 bg-emerald-50 p-4">
        <div className="text-center">
          <p className="text-3xl font-bold text-emerald-600">94%</p>
          <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">
            Compliance Score
          </p>
        </div>
        <div className="h-12 w-px bg-emerald-200" />
        <div>
          <p className="text-sm font-bold text-slate-900">Audit Status</p>
          <p className="mt-1 flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
            <CheckCircle2 className="h-3.5 w-3.5" />
            Ready for Review
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <StatPill label="Expiring Licenses" value="5" tone="warning" />
        <StatPill label="Expiring Permits" value="3" tone="warning" />
        <StatPill label="Pending Inspections" value="8" tone="primary" />
        <StatPill label="Overdue Items" value="0" tone="success" />
      </div>
      <div className="mt-4 space-y-2">
        {[
          { label: "Driver IC — Ahmad H.", days: "12 days left", icon: AlertTriangle },
          { label: "APAD Permit — VH-7729", days: "28 days left", icon: Clock },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-3 py-2.5"
            >
              <span className="flex items-center gap-2 text-xs font-medium text-slate-700">
                <Icon className="h-3.5 w-3.5 text-amber-600" />
                {item.label}
              </span>
              <span className="text-[10px] font-bold text-amber-600">{item.days}</span>
            </div>
          );
        })}
      </div>
    </PreviewCard>
  );
}

function CrmDashboard() {
  const pipelineStages = [
    { label: "Prospect", width: "w-1/4", color: "bg-slate-200" },
    { label: "Quoted", width: "w-1/3", color: "bg-primary/30" },
    { label: "Negotiation", width: "w-1/5", color: "bg-primary/60" },
    { label: "Renewal", width: "w-1/6", color: "bg-primary" },
  ];

  return (
    <PreviewCard className="shadow-md">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">Customer Performance</h3>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Account Overview
          </p>
        </div>
        <Users className="h-5 w-5 text-primary" />
      </div>
      <div className="mb-5 grid grid-cols-2 gap-3">
        <StatPill label="Active Customers" value="156" tone="primary" />
        <StatPill label="Monthly Revenue" value="RM 1.2M" tone="success" />
        <StatPill label="Open Tickets" value="12" tone="warning" />
        <StatPill label="Satisfaction" value="4.8/5" tone="success" />
      </div>
      <div className="mb-4 flex items-center gap-2 rounded-xl border border-slate-100 bg-slate-50 p-3">
        <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
        <span className="text-sm font-semibold text-slate-700">Customer Satisfaction</span>
        <span className="ml-auto text-sm font-bold text-emerald-600">Excellent</span>
      </div>
      <div>
        <p className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-500">
          Renewal Pipeline
        </p>
        <div className="flex h-3 overflow-hidden rounded-full bg-slate-100">
          {pipelineStages.map((stage) => (
            <div key={stage.label} className={cn("h-full", stage.width, stage.color)} />
          ))}
        </div>
        <div className="mt-2 flex flex-wrap gap-3">
          {pipelineStages.map((stage) => (
            <span key={stage.label} className="text-[10px] font-bold text-slate-500">
              {stage.label}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-4 flex items-center gap-3 rounded-xl border border-primary/20 bg-primary/5 p-3">
        <Headphones className="h-5 w-5 text-primary" />
        <div>
          <p className="text-xs font-bold text-slate-900">3 renewals due this month</p>
          <p className="text-[10px] text-slate-500">RM 840K pipeline value</p>
        </div>
      </div>
    </PreviewCard>
  );
}

function SecurityDashboard() {
  const stats = [
    {
      label: "Active Users",
      value: "248",
      sublabel: "Verified platform users",
      tone: "primary" as const,
      icon: Users,
    },
    {
      label: "Suspicious Login Attempts",
      value: "03",
      sublabel: "Blocked this week",
      tone: "warning" as const,
      icon: AlertTriangle,
    },
    {
      label: "Role Permissions",
      value: "12",
      sublabel: "Custom access groups",
      tone: "default" as const,
      icon: ShieldCheck,
    },
    {
      label: "Audit Events",
      value: "1,284",
      sublabel: "Activities logged this month",
      tone: "success" as const,
      icon: Shield,
    },
  ];

  return (
    <PreviewCard className="shadow-md">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">Security Command Center</h3>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Operational Overview
          </p>
        </div>
        <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-600">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
          Protected
        </span>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="rounded-xl border border-slate-100 bg-slate-50 p-4"
            >
              <div className="mb-3 flex items-start justify-between">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                  {stat.label}
                </p>
                <Icon
                  className={cn(
                    "h-4 w-4",
                    stat.tone === "primary" && "text-primary",
                    stat.tone === "warning" && "text-amber-600",
                    stat.tone === "success" && "text-emerald-600",
                    stat.tone === "default" && "text-slate-400",
                  )}
                />
              </div>
              <p
                className={cn(
                  "text-2xl font-bold leading-none",
                  stat.tone === "primary" && "text-primary",
                  stat.tone === "warning" && "text-amber-600",
                  stat.tone === "success" && "text-emerald-600",
                  stat.tone === "default" && "text-slate-900",
                )}
              >
                {stat.value}
              </p>
              <p className="mt-2 text-xs text-slate-500">{stat.sublabel}</p>
            </div>
          );
        })}
      </div>
    </PreviewCard>
  );
}

const dashboards: Record<ModuleSlug, () => React.ReactNode> = {
  operations: OperationsDashboard,
  fleet: FleetDashboard,
  compliance: ComplianceDashboard,
  crm: CrmDashboard,
  security: SecurityDashboard,
};

export function ModuleDashboardMockup({ variant }: ModuleDashboardMockupProps) {
  const Dashboard = dashboards[variant];
  return <Dashboard />;
}
