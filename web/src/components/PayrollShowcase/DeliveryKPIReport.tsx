import React from "react";

interface KPISectionProps {
  title: string;
  description: string;
  items: string[];
  color?: string;
}

const KPISection: React.FC<KPISectionProps> = ({
  title,
  description,
  items,
  color = "from-blue-500 to-blue-700",
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>

      <div className="space-y-2">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 text-gray-700 text-sm"
          >
            <span
              className={`w-2 h-2 rounded-full bg-gradient-to-r ${color}`}
            />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

const DeliveryKPIReport: React.FC = () => {
  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto">

        {/* HERO SECTION */}
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-14">
          
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
              Delivery KPI Report
            </h2>

            <p className="text-gray-600 mt-4 text-lg">
              Tracks delivery performance and efficiency across operations,
              helping improve accuracy, reduce delays, and optimize fleet
              performance in real time.
            </p>

            {/* Quick highlight badges */}
            <div className="flex flex-wrap gap-3 mt-6">
              <span className="px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                On-time Tracking
              </span>
              <span className="px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                Fleet Performance
              </span>
              <span className="px-4 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
                Route Optimization
              </span>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src="/kpi.jpeg"
              alt="Delivery KPI Dashboard"
              className="w-full rounded-md shadow-2xl border border-slate-200"
            />
          </div>
        </div>

        {/* GRID SECTION */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Use Cases */}
          <KPISection
            title="Use Cases"
            description="Where this KPI report is applied"
            items={[
              "Monitor on-time deliveries",
              "Identify delay patterns",
              "Measure driver and fleet performance",
            ]}
            color="from-indigo-500 to-indigo-700"
          />

          {/* Benefits */}
          <KPISection
            title="Benefits"
            description="Value delivered to operations"
            items={[
              "Improves delivery accuracy",
              "Reduces operational delays",
              "Helps optimize routes",
            ]}
            color="from-green-500 to-green-700"
          />

          {/* Insights */}
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Key Insights
            </h3>

            <div className="space-y-4 text-sm text-gray-700">
              <div className="p-3 rounded-lg bg-blue-50 border border-blue-100">
                On-time delivery rate is the most critical KPI for logistics performance.
              </div>

              <div className="p-3 rounded-lg bg-yellow-50 border border-yellow-100">
                Delay tracking helps identify bottlenecks in routes and drivers.
              </div>

              <div className="p-3 rounded-lg bg-green-50 border border-green-100">
                Consistent KPI monitoring improves customer satisfaction and reduces cost.
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DeliveryKPIReport;