import React from "react";

const PickupKPIReport: React.FC = () => {
  return (
    <section className="py-10">
      <div className="mx-auto">
        {/* HEADER */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900">
            Pickup KPI Report
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            A real-time view of pickup performance, efficiency, and operational
            health.
          </p>
        </div>

        {/* KPI SUMMARY STRIP */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {[
            {
              label: "Pickup Success Rate",
              value: "94%",
              color: "text-green-600",
            },
            { label: "Delayed Pickups", value: "6%", color: "text-red-500" },
            {
              label: "Avg. Processing Time",
              value: "18 min",
              color: "text-blue-600",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white border border-slate-300 rounded-lg p-6 shadow-sm hover:shadow-md transition"
            >
              <p className="text-sm">{item.label}</p>
              <h3 className={`text-2xl font-bold mt-2 ${item.color}`}>
                {item.value}
              </h3>
            </div>
          ))}
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-10">
          {/* LEFT SIDE */}
          <div className="space-y-8">
            {/* USE CASES */}
            <div className="bg-white border border-slate-300 rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-5">
                Use Cases
              </h3>

              <div className="space-y-4">
                {[
                  "Monitor pickup completion rate in real-time",
                  "Identify delayed or failed pickup patterns",
                  "Optimize field operations efficiency",
                  "Improve logistics planning decisions",
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                    <p className="text-gray-700 text-sm">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* BENEFITS */}
            <div className="bg-white border border-slate-300 rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-5">
                Business Benefits
              </h3>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "Faster Scheduling",
                    desc: "Optimized pickup allocation",
                  },
                  { title: "Fewer Failures", desc: "Reduced missed pickups" },
                  {
                    title: "Better Visibility",
                    desc: "Live operational tracking",
                  },
                  {
                    title: "Customer Satisfaction",
                    desc: "Improved delivery experience",
                  },
                ].map((b, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-gray-50 border border-slate-300  hover:bg-white transition"
                  >
                    <h4 className="font-semibold text-gray-800 text-sm">
                      {b.title}
                    </h4>
                    <p className="text-xs text-gray-600 mt-1">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - INSIGHT PANEL */}
          <div className="bg-white border border-slate-300 rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Operational Insights
            </h3>

            <div className="space-y-6">
              {[
                {
                  title: "Peak Delay Window",
                  desc: "Most delays occur between 2 PM – 5 PM due to high load.",
                  tag: "Warning",
                  color: "bg-red-100 text-red-600",
                },
                {
                  title: "High Efficiency Zones",
                  desc: "Urban clusters show 12% faster pickup completion.",
                  tag: "Insight",
                  color: "bg-blue-100 text-blue-600",
                },
                {
                  title: "Optimization Impact",
                  desc: "Route optimization reduced missed pickups by 18%.",
                  tag: "Improved",
                  color: "bg-green-100 text-green-600",
                },
              ].map((item, i) => (
                <div key={i} className="p-5 rounded-xl border border-slate-300  bg-gray-50">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold text-gray-800">
                      {item.title}
                    </h4>
                    <span
                      className={`text-xs px-3 py-1 rounded-full font-medium ${item.color}`}
                    >
                      {item.tag}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PickupKPIReport;
