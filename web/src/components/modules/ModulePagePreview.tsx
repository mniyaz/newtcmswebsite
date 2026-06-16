import {
  AlertTriangle,
  BarChart3,
  Camera,
  ClipboardCheck,
  ClipboardList,
  Eye,
  FileLock,
  FileText,
  Fuel,
  Headphones,
  KeyRound,
  LayoutGrid,
  MapPin,
  Shield,
  ShieldCheck,
  Star,
  Truck,
  Users,
  Wrench,
} from "lucide-react";
import { ModuleDashboardMockup } from "@/components/modules/ModuleDashboardMockup";
import { PreviewCard } from "@/components/solutions/PreviewCard";
import type { ModulePageContent } from "@/lib/content/modules";
import { cn } from "@/lib/utils/cn";

const featureIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "Smart Dispatching": Truck,
  "Digital POD": Camera,
  "Exception Management": AlertTriangle,
  "Real-Time Visibility": Eye,
  "Vehicle Lifecycle Management": Truck,
  "Maintenance Planning": Wrench,
  "Fuel Monitoring": Fuel,
  "Fleet Analytics": BarChart3,
  "License & Permit Tracking": FileText,
  "Safety Management": Shield,
  "Automated Alerts": AlertTriangle,
  "Regulatory Reporting": ClipboardCheck,
  "Customer 360°": Users,
  "Sales Pipeline": LayoutGrid,
  "Customer Portal": MapPin,
  "Service Management": Headphones,
  "Role-Based Access": Users,
  "Audit Trail": ClipboardList,
  "Login Protection": KeyRound,
  "Customer Data Security": ShieldCheck,
  "Operational Risk Alerts": AlertTriangle,
  "Secure Document Access": FileLock,
};

interface ModulePagePreviewProps {
  page: ModulePageContent;
}

export function ModulePagePreview({ page }: ModulePagePreviewProps) {
  return (
    <div className="space-y-10 md:space-y-14">
      <section className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <div>
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
            {page.badge}
          </span>
          <h1 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            {page.headline}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
            {page.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              className="rounded-xl bg-primary px-8 py-4 text-sm font-bold text-white shadow-lg transition hover:bg-primary-dark"
            >
              {page.primaryCta}
            </button>
            <button
              type="button"
              className="rounded-xl border-2 border-slate-200 px-8 py-4 text-sm font-bold text-primary transition hover:bg-white"
            >
              {page.secondaryCta}
            </button>
          </div>
        </div>
        <ModuleDashboardMockup variant={page.slug} />
      </section>

      <section id="fuel"
        className={cn(
          "grid gap-5 sm:grid-cols-2 lg:gap-6",
          page.features.length > 4 ? "lg:grid-cols-3" : "lg:grid-cols-4",
        )}
      >
        {page.features.map((feature) => {
          const Icon = featureIcons[feature.title] ?? Star;
          return (
            <PreviewCard key={feature.title}>
              <div  className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">{feature.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {feature.description}
              </p>
            </PreviewCard>
          );
        })}
      </section>
    </div>
  );
}
