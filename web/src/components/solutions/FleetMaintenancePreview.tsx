import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  Download,
  FileText,
  History,
  Map,
  QrCode,
  Settings,
  Smartphone,
  Wrench,
} from "lucide-react";
import { PreviewCard } from "@/components/solutions/PreviewCard";
import { cn } from "@/lib/utils/cn";

const queueItems = [
  {
    icon: Wrench,
    vehicle: "VH-7729-LX",
    task: "Volvo FH16 • Full Engine Overhaul",
    status: "04:11:53",
    statusLabel: "Est. Completion",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: FileText,
    vehicle: "VH-1104-QM",
    task: "Scania R500 • Road Tax Renewal",
    status: "Expiring Soon",
    statusLabel: "Due in 48h",
    color: "text-red-600",
    bg: "bg-red-50",
  },
  {
    icon: CheckCircle2,
    vehicle: "VH-8821-XP",
    task: "DAF XF • Annual Safety Inspection",
    status: "Scheduled",
    statusLabel: "Sep 12, 2024",
    color: "text-primary",
    bg: "bg-primary/10",
  },
];

const kpiCards = [
  {
    label: "Critical Alerts",
    value: "03",
    desc: "Expired Driver Licenses found.",
    border: "border-red-500",
    icon: AlertTriangle,
    iconColor: "text-red-500",
  },
  {
    label: "Pending Service",
    value: "12",
    desc: "Vehicles due for oil changes.",
    border: "border-amber-600",
    icon: Settings,
    iconColor: "text-amber-600",
  },
  {
    label: "Safe Fleet",
    value: "88%",
    desc: "Compliance health score.",
    border: "border-emerald-500",
    icon: CheckCircle2,
    iconColor: "text-emerald-600",
  },
];

const ecosystemFeatures = [
  {
    icon: Smartphone,
    title: "Real-time Sync",
    description:
      "Instant push notifications for drivers and dispatch ensure no maintenance milestone is ever overlooked.",
  },
  {
    icon: ClipboardList,
    title: "Paperless Workflows",
    description:
      "Digital inspection forms encrypted for security, instantly feeding into your central dashboard.",
  },
  {
    icon: History,
    title: "Auditable Logs",
    description:
      "Generate compliance reports for road authorities with one tap, ensuring full legal transparency.",
  },
];

const tools = [
  {
    icon: Map,
    title: "Load Planning",
    description:
      "Cross-reference vehicle health with weight-load limits to prevent structural wear and ensure safety on every route.",
    link: "Explore Tech",
    color: "primary",
  },
  {
    icon: FileText,
    title: "Digital Logs",
    description:
      "A permanent, immutable digital history of every asset in your global fleet ecosystem, from engine parts to tire rotations.",
    link: "Review Logs",
    color: "secondary",
  },
  {
    icon: CheckCircle2,
    title: "Inspection Intelligence",
    description:
      "AI-powered visual detection identifies potential damage before it becomes an operational failure, reducing costly downtime.",
    link: "See Process",
    color: "tertiary",
  },
];

export function FleetMaintenancePreview() {
  return (
    <div className="space-y-10 md:space-y-14">
      {/* Header */}
      <header className="flex flex-col gap-6 border-b border-slate-200 pb-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <div className="mb-4 flex items-center gap-2">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-500" />
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
              Fleet Operational Status: Optimized
            </span>
          </div>
          <h1 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Zero-Downtime Maintenance
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
            Predictive monitoring and automated compliance for the modern Malaysian fleet.
            Keep your assets moving with precision engineering.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-slate-100 px-6 py-3 text-sm font-bold text-slate-700"
          >
            <Download className="h-4 w-4" />
            Export Log
          </button>
          <button
            type="button"
            className="rounded-lg bg-primary px-8 py-3 text-sm font-bold text-white shadow-lg"
          >
            Schedule Service
          </button>
        </div>
      </header>

      {/* Dashboard bento */}
      <section className="grid gap-5 lg:grid-cols-12 lg:gap-6">
        <PreviewCard className="lg:col-span-8">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-lg font-bold text-slate-900">Active Maintenance Queue</h3>
            <History className="h-5 w-5 text-slate-400" />
          </div>
          <div className="space-y-3">
            {queueItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.vehicle}
                  className="flex flex-col gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className={cn("rounded-xl p-3", item.bg)}>
                      <Icon className={cn("h-5 w-5", item.color)} />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">{item.vehicle}</p>
                      <p className="text-sm text-slate-500">{item.task}</p>
                    </div>
                  </div>
                  <div className="sm:text-right">
                    <p className={cn("font-semibold", item.color)}>{item.status}</p>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      {item.statusLabel}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </PreviewCard>

        <div className="flex flex-col gap-5 lg:col-span-4 lg:gap-6">
          {kpiCards.map((kpi) => {
            const Icon = kpi.icon;
            return (
              <PreviewCard key={kpi.label} padding="md" className={cn("border-l-[6px]", kpi.border)}>
                <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                  {kpi.label}
                </span>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-4xl font-bold text-slate-900">{kpi.value}</span>
                  <Icon className={cn("h-8 w-8", kpi.iconColor)} />
                </div>
                <p className="mt-3 text-sm text-slate-500">{kpi.desc}</p>
              </PreviewCard>
            );
          })}
        </div>
      </section>

      {/* Mobile ecosystem */}
      <section className="grid items-center gap-10 rounded-[2rem] border border-slate-200 bg-slate-50 p-6 md:p-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative mx-auto flex justify-center">
          <div className="relative z-10 w-[260px] overflow-hidden rounded-[2.5rem] border-[10px] border-slate-900 bg-white shadow-2xl sm:w-[280px]">
            <div className="mx-auto mb-3 h-5 w-24 rounded-b-xl bg-slate-900" />
            <div className="px-5 pb-6">
              <div className="mb-6 flex items-center justify-between">
                <span className="text-lg font-bold text-primary">TCMS Go</span>
                <span className="text-slate-400">≡</span>
              </div>
              <div className="space-y-4">
                <div className="rounded-2xl border border-primary/20 bg-primary/5 p-4">
                  <p className="text-[10px] font-bold uppercase text-primary">New Task</p>
                  <p className="mt-1 text-sm font-bold text-slate-900">
                    Complete pre-trip check for Volvo VH-7729.
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-100 p-4">
                  <p className="text-[10px] font-bold uppercase text-slate-500">
                    Maintenance Progress
                  </p>
                  <div className="mt-2 flex items-center gap-2">
                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-200">
                      <div className="h-full w-3/4 rounded-full bg-emerald-500" />
                    </div>
                    <span className="text-xs font-bold">75%</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3 text-center">
                    <QrCode className="mx-auto h-5 w-5 text-primary" />
                    <p className="mt-1 text-[10px] font-bold">Scan VIN</p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3 text-center">
                    <FileText className="mx-auto h-5 w-5 text-emerald-600" />
                    <p className="mt-1 text-[10px] font-bold">Form</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto mb-3 h-1 w-24 rounded-full bg-slate-300" />
          </div>
          <div className="absolute left-1/2 top-1/2 -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
        </div>
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Mobile App Ecosystem
          </span>
          <h2 className="mt-3 text-2xl font-bold text-slate-900 md:text-3xl">
            Synchronized Fleet Intelligence
          </h2>
          <div className="mt-8 space-y-8">
            {ecosystemFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white text-primary shadow-sm">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">{feature.title}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission-critical tools */}
      <section>
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
            Mission-Critical Tools
          </h2>
          <p className="mt-3 text-slate-600">
            Precision-engineered for high-stakes logistics enterprises.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3 md:gap-6">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <PreviewCard key={tool.title}>
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/20 bg-primary/5 text-primary">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{tool.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {tool.description}
                </p>
                <p className="mt-6 flex items-center gap-2 text-sm font-bold text-primary">
                  {tool.link}
                  <ArrowRight className="h-4 w-4" />
                </p>
              </PreviewCard>
            );
          })}
        </div>
      </section>

      {/* Global compliance panel */}
      <PreviewCard className="relative min-h-[420px] overflow-hidden border-slate-200 p-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-200/50 to-slate-100" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#f7f8fd] via-transparent to-transparent" />
        <div className="relative flex h-full min-h-[420px] flex-col justify-between p-6 md:p-10">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Global Compliance
            </span>
            <h2 className="mt-3 text-2xl font-bold text-slate-900 md:text-3xl">
              Tracking Fleet Health Across Malaysia
            </h2>
            <p className="mt-4 text-slate-600">
              Scale with confidence using localized APAD/JPJ regulatory compliance and unified
              maintenance standards.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {[
              { value: "4.8k", label: "Active Assets" },
              { value: "99.9%", label: "Uptime Target", color: "text-emerald-600" },
              { value: "0", label: "Missed Renewals", color: "text-amber-700" },
              { value: "24/7", label: "Support", color: "text-primary" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl bg-white/70 p-4 backdrop-blur-md md:p-6"
              >
                <p className={cn("text-3xl font-bold text-slate-900", stat.color)}>
                  {stat.value}
                </p>
                <p className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </PreviewCard>
    </div>
  );
}
