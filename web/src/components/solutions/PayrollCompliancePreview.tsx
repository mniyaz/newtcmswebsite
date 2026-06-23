'use client'
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Calendar,
  CheckCircle2,
  Download,
  FileText,
  Play,
  Shield,
  Users,
  X,
} from "lucide-react";
import { PreviewCard } from "@/components/solutions/PreviewCard";
import { payrollCompliancePage } from "@/lib/content/solutions";
import { cn } from "@/lib/utils/cn";
import { useState } from "react";

const page = payrollCompliancePage;

const payrollRows = [
  {
    driver: "Ahmad bin Hassan",
    id: "DRV-1024",
    vehicle: "VH-7729-LX",
    gross: "RM 4,850.00",
    status: "Processed",
    statusColor: "bg-emerald-100 text-emerald-700",
  },
  {
    driver: "Raj Kumar",
    id: "DRV-1025",
    vehicle: "VH-1104-QM",
    gross: "RM 5,200.00",
    status: "Pending",
    statusColor: "bg-amber-100 text-amber-700",
  },
  {
    driver: "Lee Wei Ming",
    id: "DRV-1026",
    vehicle: "VH-8821-XP",
    gross: "RM 4,600.00",
    status: "Processed",
    statusColor: "bg-emerald-100 text-emerald-700",
  },
  {
    driver: "Mohd Faizal",
    id: "DRV-1027",
    vehicle: "VH-3345-KL",
    gross: "RM 5,450.00",
    status: "Review",
    statusColor: "bg-blue-100 text-blue-700",
  },
];

const complianceCards = [
  {
    icon: Building2,
    title: "EPF / KWSP",
    description: "Automated monthly contributions with real-time validation against LHDN rates.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Shield,
    title: "SOCSO / EIS",
    description: "Full statutory coverage for drivers and support staff with audit-ready exports.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: FileText,
    title: "LHDN PCB",
    description: "Monthly tax deductions calculated and filed automatically for every employee.",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    icon: BadgeCheck,
    title: "APAD ICOP",
    description: "Continuous ICOP monitoring with alerts before license or permit expiry.",
    color: "text-red-600",
    bg: "bg-red-50",
  },
];

export function PayrollCompliancePreview() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  return (
    <div className="space-y-10 md:space-y-14">
      {/* Hero */}
      <section className="flex flex-col gap-6 border-b border-slate-200 pb-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
            LHDN & APAD Integrated
          </span>
          <h1 className="mt-6 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Worry-Free Payroll for Malaysian Logistics.
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
            {page.hero.description}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            className="flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-sm font-bold text-white shadow-lg"
          >
            Book Demo
          </button>
          <button
            type="button"
            onClick={() => setIsVideoOpen(true)}
            className="flex items-center justify-center gap-2 rounded-xl border-2 border-slate-200 px-6 py-4 text-sm font-bold text-primary"
          >
            Watch a video
          </button>

        </div>
        {isVideoOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
            <div className="relative w-full max-w-4xl rounded-2xl p-4">
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute lg:-right-4 lg:-top-4 right-0 -top-6 bg-white rounded-full p-2 cursor-pointer"
              >
                <X size={16} />
              </button>

              <video
                controls
                autoPlay
                className="w-full rounded-xl"
              >
                <source src="/payrollSumary.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        )}
      </section>

      {/* Dashboard */}
      <section className="grid gap-5 lg:grid-cols-12 lg:gap-6">
        {/* March Summary */}
        <PreviewCard className="lg:col-span-4">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-lg font-bold text-slate-900">March Summary</h3>
            <Calendar className="h-5 w-5 text-slate-400" />
          </div>
          <div className="space-y-4">
            {[
              { label: "Total Gross Pay", value: "RM 248,750.00" },
              { label: "EPF Contributions", value: "RM 27,362.50" },
              { label: "SOCSO / EIS", value: "RM 4,975.00" },
              { label: "Net Disbursement", value: "RM 216,412.50", highlight: true },
            ].map((row) => (
              <div
                key={row.label}
                className={cn(
                  "flex items-center justify-between rounded-xl border p-4",
                  row.highlight
                    ? "border-primary/20 bg-primary/5"
                    : "border-slate-100 bg-slate-50",
                )}
              >
                <span className="text-sm text-slate-600">{row.label}</span>
                <span
                  className={cn(
                    "font-bold",
                    row.highlight ? "text-primary" : "text-slate-900",
                  )}
                >
                  {row.value}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-center gap-2 text-sm text-emerald-600">
            <CheckCircle2 className="h-4 w-4" />
            <span className="font-semibold">All statutory filings up to date</span>
          </div>
        </PreviewCard>

        {/* Active Driver Payroll table */}
        <PreviewCard className="lg:col-span-8">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-lg font-bold text-slate-900">Active Driver Payroll</h3>
            <Users className="h-5 w-5 text-slate-400" />
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-500">
                  <th className="pb-3 pr-4">Driver</th>
                  <th className="pb-3 pr-4">Vehicle</th>
                  <th className="pb-3 pr-4">Gross Pay</th>
                  <th className="pb-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {payrollRows.map((row) => (
                  <tr key={row.id} className="border-b border-slate-100 last:border-0">
                    <td className="py-4 pr-4">
                      <p className="font-semibold text-slate-900">{row.driver}</p>
                      <p className="text-xs text-slate-500">{row.id}</p>
                    </td>
                    <td className="py-4 pr-4 text-slate-600">{row.vehicle}</td>
                    <td className="py-4 pr-4 font-semibold text-slate-900">{row.gross}</td>
                    <td className="py-4">
                      <span
                        className={cn(
                          "rounded-full px-3 py-1 text-xs font-bold",
                          row.statusColor,
                        )}
                      >
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </PreviewCard>
      </section>

      {/* Integration section */}
      <section>
        <div className="mb-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Statutory Integration
          </span>
          <h2 className="mt-3 text-2xl font-bold text-slate-900 md:text-3xl">
            Built for Malaysian Compliance
          </h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-12 lg:gap-6">
          {/* ICOP Monitoring card */}
          <PreviewCard className="relative min-h-[280px] overflow-hidden border-primary/20 bg-gradient-to-br from-primary to-primary-dark text-white lg:col-span-5">
            <div className="relative z-10">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-200">
                Automated Monitoring
              </span>
              <h3 className="mt-3 text-2xl font-bold">Automated ICOP Monitoring</h3>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-blue-100">
                Real-time tracking of driver ICOP status with proactive alerts before expiry.
                Never miss a renewal deadline again.
              </p>
              <button
                type="button"
                className="mt-8 flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-primary"
              >
                View Compliance Dashboard
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            <Shield className="pointer-events-none absolute -bottom-8 -right-8 h-48 w-48 text-white/10" />
          </PreviewCard>

          {/* Four compliance cards */}
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7 lg:gap-6">
            {complianceCards.map((card) => {
              const Icon = card.icon;
              return (
                <PreviewCard key={card.title}>
                  <div className={cn("mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl", card.bg, card.color)}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-slate-900">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {card.description}
                  </p>
                </PreviewCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Payslip preview */}
      <section className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Driver Experience
          </span>
          <h2 className="mt-3 text-2xl font-bold text-slate-900 md:text-3xl">
            Transparent Payslips, Every Month
          </h2>
          <div className="mt-8 space-y-6">
            {(page.benefits ?? []).map((benefit) => (
              <div key={benefit.title} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">{benefit.title}</h4>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Payslip card */}
        <PreviewCard className="shadow-lg">
          <div className="mb-6 flex items-center justify-between border-b border-slate-100 pb-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Payslip Preview
              </p>
              <p className="mt-1 font-bold text-slate-900">March 2024</p>
            </div>
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">
              Paid
            </span>
          </div>
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
              AH
            </div>
            <div>
              <p className="font-semibold text-slate-900">Ahmad bin Hassan</p>
              <p className="text-xs text-slate-500">DRV-1024 • VH-7729-LX</p>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            {[
              { label: "Basic Salary", value: "RM 3,500.00" },
              { label: "Trip Allowance", value: "RM 850.00" },
              { label: "Overtime", value: "RM 500.00" },
              { label: "EPF (Employee)", value: "- RM 495.00", deduct: true },
              { label: "SOCSO", value: "- RM 24.75", deduct: true },
              { label: "PCB Tax", value: "- RM 180.25", deduct: true },
            ].map((line) => (
              <div key={line.label} className="flex justify-between">
                <span className="text-slate-600">{line.label}</span>
                <span className={cn("font-medium", line.deduct ? "text-red-600" : "text-slate-900")}>
                  {line.value}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between border-t border-slate-200 pt-4">
            <span className="font-bold text-slate-900">Net Pay</span>
            <span className="text-xl font-bold text-primary">RM 4,150.00</span>
          </div>
        </PreviewCard>
      </section>
    </div>
  );
}
