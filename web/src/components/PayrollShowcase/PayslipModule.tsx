import React from "react";
import {
  FileText,
  BarChart3,
  Eye,
  ShieldCheck,
  Download,
  Lock,
} from "lucide-react";

const PayslipModule: React.FC = () => {
  const features = [
    {
      icon: <FileText size={22} />,
      title: "Generate Payslips",
      desc: "Auto-create employee payslips with salary, allowances, and deductions.",
      color: "bg-indigo-100 text-indigo-600",
    },
    {
      icon: <BarChart3 size={22} />,
      title: "Payslip Reports",
      desc: "Analyze payroll reports with structured insights and summaries.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: <Eye size={22} />,
      title: "Activity Tracking",
      desc: "Track employee access, downloads, and payslip views in real time.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: <ShieldCheck size={22} />,
      title: "Audit Logs",
      desc: "Maintain transparent payroll history with secure audit tracking.",
      color: "bg-amber-100 text-amber-600",
    },
    {
      icon: <Download size={22} />,
      title: "Export Reports",
      desc: "Download payslips in PDF, Excel, or bulk ZIP formats.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: <Lock size={22} />,
      title: "Secure Delivery",
      desc: "Encrypted delivery of payslips through secure employee portal.",
      color: "bg-rose-100 text-rose-600",
    },
  ];

  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-slate-900">
            Payslip Module
          </h2>
          <p className="text-slate-600 mt-3">
            Smart payroll reporting system for generating, tracking, and securing employee payslips.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT - Features */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-5 border border-slate-300 shadow-sm hover:shadow-md transition"
              >
                <div
                  className={`w-11 h-11 flex items-center justify-center rounded-xl mb-4 ${item.color}`}
                >
                  {item.icon}
                </div>
                <h3 className="text-md font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 mt-2">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* RIGHT - IMAGE PREVIEW */}
          <div className="relative">

            {/* Glow background */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-200 via-purple-100 to-blue-100 blur-3xl opacity-40 rounded-3xl"></div>

            {/* Image container */}
            <div className="relative bg-white border border-slate-300 rounded-lg shadow-xl overflow-hidden">

              {/* IMAGE */}
              <img
                src="/slip.png"
                alt="Payslip Dashboard Preview"
                className="w-full h-auto object-cover"
              />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PayslipModule;