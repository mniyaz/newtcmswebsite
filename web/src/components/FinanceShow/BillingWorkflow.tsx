import { Truck, FileText, CreditCard, BarChart3 } from "lucide-react";

const workflow = [
  {
    title: "Shipment Completed",
    description:
      "Shipment is successfully delivered and marked as completed in the system.",
    icon: Truck,
  },
  {
    title: "Invoice Generated",
    description:
      "System automatically generates invoice with tax, cost and shipment details.",
    icon: FileText,
  },
  {
    title: "Customer Payment",
    description:
      "Customer completes secure payment using UPI, card or bank transfer.",
    icon: CreditCard,
  },
  {
    title: "Financial Reporting",
    description:
      "All transactions are recorded into analytics dashboard for business insights.",
    icon: BarChart3,
  },
];

export default function BillingWorkflow() {
  return (
    <section className="py-10">
      <div className="mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">
          Billing Workflow
        </h2>

        <div className="relative">
          {/* connecting line */}
          <div className="hidden lg:block absolute top-5 left-0 right-0 h-[2px] bg-[#003b8f]/20" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 relative">
            {workflow.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  className="flex flex-col items-center text-center"
                >
                  {/* Step number badge */}
                  <div className="w-12 h-12 rounded-md bg-white border-2 border-[#003b8f] flex items-center justify-center text-[#003b8f] font-semibold shadow-sm z-10">
                    {index + 1}
                  </div>

                  {/* Card */}
                  <div className="mt-8 h-full w-full bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                    {/* Icon */}
                    <div className="w-12 h-10 mx-auto mb-4 rounded-xl bg-[#003b8f]/10 flex items-center justify-center">
                      <Icon className="text-[#003b8f] w-6 h-6" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-base text-gray-600 mt-2 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
