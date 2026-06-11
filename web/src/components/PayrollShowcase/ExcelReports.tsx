import React from "react";

const ExcelReports: React.FC = () => {
  const useCases = [
    {
      title: "Download Structured Reports",
      desc: "Export clean, formatted operational data in Excel format instantly.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
          <path
            d="M12 3v12m0 0l4-4m-4 4l-4-4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M4 17v3h16v-3"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: "Data Analysis in Excel",
      desc: "Perform deep analysis using pivot tables, charts, and formulas.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
          <path
            d="M4 19V5m0 14h16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M7 15l3-4 3 2 4-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: "Business Audits",
      desc: "Use historical exports for compliance and auditing needs.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
          <path
            d="M12 2l7 4v6c0 5-3 9-7 10-4-1-7-5-7-10V6l7-4z"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      ),
    },
  ];

  const benefits = [
    {
      title: "Easy Data Portability",
      desc: "Move data across systems without complexity.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
          <path
            d="M7 7h10M7 12h10M7 17h10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: "Supports Finance Teams",
      desc: "Helps accounting and finance teams with structured reports.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
          <path
            d="M12 1v22"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: "Better Decision Making",
      desc: "Turn raw data into actionable business insights.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
          <path
            d="M12 2l4 8 8 2-6 6 2 8-8-4-8 4 2-8-6-6 8-2 4-8z"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      ),
    },
  ];

  type IconBadgeProps = {
    children: React.ReactNode;
    variant: "blue" | "green";
  };

  const IconBadge: React.FC<IconBadgeProps> = ({ children, variant }) => {
    const styles =
      variant === "blue"
        ? "bg-blue-50 text-blue-600 ring-blue-100"
        : "bg-emerald-50 text-emerald-600 ring-emerald-100";

    return (
      <div
        className={`w-10 h-10 flex items-center justify-center rounded-xl ring-1 ${styles} shadow-sm`}
      >
        {children}
      </div>
    );
  };

  return (
    <section className="w-full py-10">
      <div className="mx-auto">
        {/* HEADER */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-4xl font-bold">
            Excel Reports
          </h2>
          <p className="text-gray-600 mt-4 text-base max-w-2xl mx-auto">
            Central export system for all operational data with structured
            insights and analytics-ready formats.
          </p>
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-10">
          {/* USE CASES */}
          <div className="bg-white rounded-2xl shadow-lg border border-slate-300 p-4 md:p-8">
            <h3 className="text-2xl font-semibold mb-8 text-gray-900">
              Use Cases
            </h3>

            <div className="space-y-6">
              {useCases.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 md:p-4 rounded-xl hover:bg-gray-50 transition"
                >
                  <IconBadge variant="blue">{item.icon}</IconBadge>

                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* BENEFITS */}
          <div className="bg-white rounded-2xl shadow-lg border border-slate-300 p-4 md:p-8">
            <h3 className="text-2xl font-semibold mb-8 text-gray-900">
              Benefits
            </h3>

            <div className="space-y-6">
              {benefits.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 md:p-4 rounded-xl hover:bg-gray-50 transition"
                >
                  <IconBadge variant="green">{item.icon}</IconBadge>

                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExcelReports;
