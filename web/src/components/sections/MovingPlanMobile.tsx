"use client";

interface Step {
    id: number;
    label: string;
    title: string;
    desc: string;
    image: string;
}

const STEPS: Step[] = [
    {
        id: 1,
        label: "Step one",
        title: "Vehicles",
        desc: "Manage your entire fleet with real-time vehicle tracking, maintenance schedules, utilization insights, and operational status from a centralized dashboard.",
        image:
            "https://images.unsplash.com/photo-1501700493788-fa1a4fc9fe62?w=500&h=500&fit=crop&crop=center",
    },
    {
        id: 2,
        label: "Step two",
        title: "Drivers",
        desc: "Monitor driver assignments, licenses, trip history, attendance, and performance to ensure safe and efficient transportation operations.",
        image:
            "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=500&h=500&fit=crop&crop=center",
    },
    {
        id: 3,
        label: "Step three",
        title: "Customers",
        desc: "Streamline customer management with shipment tracking, delivery updates, communication history, and service records in one place.",
        image:
            "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=500&h=500&fit=crop&crop=center",
    },
    {
        id: 4,
        label: "Step four",
        title: "Accounting",
        desc: "Simplify financial operations with automated invoicing, expense tracking, payment reconciliation, and comprehensive transport cost reports.",
        image:
            "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&h=500&fit=crop&crop=center",
    },
];

export default function MovingPlanMobile() {
    return (
        <section className="py-14 md:px-10 px-5">
            {/* Header */}
            <div className="md:text-center mb-10">
                <div className="inline-flex items-center gap-2 mb-3">
                    <span className="text-sm font-medium text-gray-600">
                        Our work process
                    </span>
                </div>

                <h2 className="text-3xl font-extrabold text-gray-900">
                    Everything Connected
                </h2>
            </div>

            {/* Cards */}
            <div className="grid md:grid-cols-2 gap-5">
                {STEPS.map((step) => (
                    <div
                        key={step.id}
                        className="overflow-hidden rounded-lg bg-primary/5 shadow-sm h-full"
                    >
                        {/* <img
                            src={step.image}
                            alt={step.title}
                            className="h-52 w-full object-cover"
                        /> */}

                        <div className="md:p-6 p-4">
                            <p className="text-xs uppercase text-[#003b8f] mb-2">
                                {step.label}
                            </p>

                            <h3 className="text-xl font-bold text-[#003b8f] mb-3">
                                {step.title}
                            </h3>

                            <p className="text-gray-600">
                                {step.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}