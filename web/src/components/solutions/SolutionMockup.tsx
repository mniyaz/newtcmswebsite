import { Card } from "@/components/ui/Card";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { cn } from "@/lib/utils/cn";

/** Accounting page — revenue chart mockup */
export function AccountingMockup() {
  const bars = [40, 60, 45, 80, 100, 65, 50];
  return (
    <Card padding="lg" className="shadow-image">
      <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">Total Revenue</h3>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Quarterly Performance
          </p>
        </div>
        <span className="text-xl font-bold text-emerald-600">RM 482,901.50</span>
      </div>
      <div className="flex h-48 items-end gap-2 md:gap-3">
        {bars.map((height, i) => (
          <div
            key={i}
            className={cn(
              "w-full rounded-t-lg transition-colors",
              i === 4 ? "bg-primary shadow-md" : "bg-slate-200 hover:bg-primary/20",
            )}
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
      <div className="mt-8 space-y-3 border-t border-slate-100 pt-6">
        <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-4">
          <span className="text-sm font-medium text-slate-600">INV-2024-001</span>
          <span className="rounded-full bg-slate-200 px-3 py-1 text-[10px] font-bold uppercase text-slate-600">
            Processing
          </span>
        </div>
        <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-4">
          <span className="text-sm font-medium text-slate-600">INV-2024-002</span>
          <span className="flex items-center gap-2 text-[10px] font-bold uppercase text-emerald-600">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            Syncing
          </span>
        </div>
      </div>
    </Card>
  );
}

/** Fleet maintenance — queue mockup */
export function FleetMaintenanceMockup() {
  const queue = [
    {
      icon: "engineering",
      vehicle: "VH-7729-LX",
      task: "Volvo FH16 • Full Engine Overhaul",
      status: "04:11:53",
      statusLabel: "Est. Completion",
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
    {
      icon: "license",
      vehicle: "VH-1104-QM",
      task: "Scania R500 • Road Tax Renewal",
      status: "Expiring Soon",
      statusLabel: "Due in 48h",
      color: "text-red-600",
      bg: "bg-red-50",
    },
    {
      icon: "verified_user",
      vehicle: "VH-8821-XP",
      task: "DAF XF • Annual Safety Inspection",
      status: "Scheduled",
      statusLabel: "Sep 12, 2024",
      color: "text-primary",
      bg: "bg-primary/10",
    },
  ];

  return (
    <Card padding="lg" className="shadow-image">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-slate-900">Active Maintenance Queue</h3>
        <MaterialIcon name="history" className="text-slate-400" />
      </div>
      <div className="space-y-3">
        {queue.map((item) => (
          <div
            key={item.vehicle}
            className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex items-center gap-4">
              <div className={cn("rounded-xl p-3", item.bg)}>
                <MaterialIcon name={item.icon} className={item.color} />
              </div>
              <div>
                <p className="font-semibold text-slate-900">{item.vehicle}</p>
                <p className="text-sm text-slate-500">{item.task}</p>
              </div>
            </div>
            <div className="text-left sm:text-right">
              <p className={cn("font-semibold", item.color)}>{item.status}</p>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                {item.statusLabel}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 grid grid-cols-3 gap-3 border-t border-slate-100 pt-6">
        {[
          { label: "Critical", value: "03", border: "border-red-500" },
          { label: "Pending", value: "12", border: "border-amber-500" },
          { label: "Safe Fleet", value: "88%", border: "border-emerald-500" },
        ].map((stat) => (
          <div
            key={stat.label}
            className={cn("rounded-xl border-l-4 bg-white p-3", stat.border)}
          >
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
              {stat.label}
            </p>
            <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}

/** Payroll — summary + driver table mockup */
export function PayrollMockup() {
  const drivers = [
    { name: "Ahmad Razali", id: "MY-D-4029", trips: "42 (8,400 KM)", net: "RM 4,850.20" },
    { name: "Chong Wei Liang", id: "MY-D-3881", trips: "38 (7,200 KM)", net: "RM 4,210.45" },
    { name: "S. Kumar", id: "MY-D-5102", trips: "45 (9,100 KM)", net: "RM 5,120.80" },
  ];

  return (
    <Card padding="lg" className="shadow-image">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-slate-900">March Payroll Summary</h3>
        <p className="text-sm text-slate-500">Cycle: 01 Mar – 31 Mar</p>
      </div>
      <div className="mb-6 space-y-3 border-b border-slate-100 pb-6">
        {[
          { label: "Total Gross Pay", value: "RM 142,500.00", color: "text-slate-900" },
          { label: "EPF (Employer)", value: "RM 18,525.00", color: "text-amber-700" },
          { label: "SOCSO + EIS", value: "RM 2,410.50", color: "text-emerald-600" },
        ].map((row) => (
          <div key={row.label} className="flex justify-between text-sm">
            <span className="text-slate-500">{row.label}</span>
            <span className={cn("font-semibold", row.color)}>{row.value}</span>
          </div>
        ))}
      </div>
      <div className="mb-4 flex items-center gap-3 rounded-xl bg-emerald-50 p-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          <MaterialIcon name="verified_user" />
        </div>
        <div>
          <p className="font-semibold text-slate-900">Compliance Score: 100%</p>
          <p className="text-xs text-slate-500">All LHDN forms ready for submission</p>
        </div>
      </div>
      <div className="overflow-hidden rounded-xl border border-slate-200">
        <div className="bg-slate-50 px-4 py-3 text-xs font-bold uppercase tracking-wider text-slate-500">
          Active Driver Payroll
        </div>
        <div className="divide-y divide-slate-100">
          {drivers.map((driver) => (
            <div
              key={driver.id}
              className="flex flex-col gap-1 px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="font-semibold text-slate-900">{driver.name}</p>
                <p className="text-xs text-slate-500">{driver.id} • {driver.trips}</p>
              </div>
              <p className="font-bold text-primary">{driver.net}</p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

interface SolutionMockupProps {
  variant: "accounting" | "fleet" | "payroll";
}

export function SolutionMockup({ variant }: SolutionMockupProps) {
  switch (variant) {
    case "accounting":
      return <AccountingMockup />;
    case "fleet":
      return <FleetMaintenanceMockup />;
    case "payroll":
      return <PayrollMockup />;
  }
}
