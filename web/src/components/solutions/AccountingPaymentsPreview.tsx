import {
  Landmark,
  Receipt,
  RefreshCw,
  CreditCard,
} from "lucide-react";
import { PreviewCard } from "@/components/solutions/PreviewCard";
import { accountingPaymentsPage } from "@/lib/content/solutions";
import { cn } from "@/lib/utils/cn";

const page = accountingPaymentsPage;
const bars = [40, 60, 45, 80, 100, 65, 50];

export function AccountingPaymentsPreview() {
  return (
    <div className="space-y-10 md:space-y-14">
      {/* Hero */}
      <section className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <div>
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
            Accounting & Banking
          </span>
          <h1 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Financial Clarity for Carriers.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
            {page.hero.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              className="rounded-xl bg-primary px-8 py-4 text-sm font-bold text-white shadow-lg transition hover:bg-primary-dark"
            >
              Get Started
            </button>
            <button
              type="button"
              className="rounded-xl border-2 border-slate-200 px-8 py-4 text-sm font-bold text-primary transition hover:bg-white"
            >
              View Demo
            </button>
          </div>
        </div>
        <PreviewCard className="shadow-md">
          <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Total Revenue</h3>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Quarterly Performance
              </p>
            </div>
            <span className="text-xl font-bold text-emerald-600">RM 482,901.50</span>
          </div>
          <div className="flex h-44 items-end gap-2 md:h-52 md:gap-3">
            {bars.map((height, i) => (
              <div
                key={i}
                className={cn(
                  "w-full rounded-t-lg transition-colors",
                  i === 4 ? "bg-primary shadow-md" : "bg-slate-100 hover:bg-primary/20",
                )}
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </PreviewCard>
      </section>

      {/* Bento grid */}
      <section className="grid gap-5 md:grid-cols-3 md:gap-6">
        {/* One-Click Invoicing — wide */}
        <PreviewCard className="md:col-span-2">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Receipt className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">One-Click Invoicing</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {page.features[0].description}
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
              <div className="space-y-3">
                <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                  <span className="text-sm font-medium text-slate-600">INV-2024-001</span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-bold uppercase text-slate-500">
                    Processing
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                  <span className="text-sm font-medium text-slate-600">INV-2024-002</span>
                  <span className="flex items-center gap-2 text-[10px] font-bold uppercase text-emerald-600">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                    Syncing
                  </span>
                </div>
                <button
                  type="button"
                  className="w-full rounded-xl bg-primary py-3 text-sm font-bold text-white shadow-sm"
                >
                  Generate Invoice
                </button>
              </div>
            </div>
          </div>
        </PreviewCard>

        {/* Localized Banking */}
        <PreviewCard className="flex flex-col justify-between">
          <div>
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
              <Landmark className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Localized Banking</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              {page.features[1].description}
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-2 opacity-70">
            {["MAYBANK", "CIMB", "RHB"].map((bank) => (
              <span
                key={bank}
                className="rounded bg-slate-100 px-3 py-1 text-[11px] font-bold text-slate-600"
              >
                {bank}
              </span>
            ))}
          </div>
        </PreviewCard>

        {/* Zero-Touch Recon */}
        <PreviewCard>
          <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <RefreshCw className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">Zero-Touch Recon</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            {page.features[2].description}
          </p>
        </PreviewCard>

        {/* Payment Gateways — wide blue */}
        <PreviewCard className="relative overflow-hidden border-primary/20 bg-primary text-white md:col-span-2">
          <div className="relative z-10">
            <h3 className="text-xl font-bold">Integrated Payment Gateways</h3>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-blue-100">
              {page.features[3].description}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div className="flex -space-x-2">
                {["V", "M", "F"].map((letter) => (
                  <div
                    key={letter}
                    className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-white text-sm font-bold text-primary"
                  >
                    {letter}
                  </div>
                ))}
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-200">
                Trusted by 500+ Regional Logistics Firms
              </span>
            </div>
          </div>
          <CreditCard className="pointer-events-none absolute -right-8 -top-8 h-48 w-48 rotate-12 text-white/10" />
        </PreviewCard>
      </section>

      {/* Stats panel */}
      <PreviewCard className="border-slate-200/80 bg-slate-50 text-center">
        <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
          {page.stats.title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600">
          {page.stats.subtitle}
        </p>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {page.stats.items.map((stat) => (
            <div key={stat.label}>
              <p
                className={cn(
                  "text-4xl font-bold leading-none md:text-[2.625rem]",
                  stat.variant === "secondary" && "text-emerald-600",
                  stat.variant === "primary" && "text-primary",
                  stat.variant === "default" && "text-slate-900",
                )}
              >
                {stat.value}
              </p>
              <p className="mt-2 text-xs font-bold uppercase tracking-widest text-slate-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </PreviewCard>
    </div>
  );
}
