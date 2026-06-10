"use client";

export default function BenefitsSection() {
    const benefits = [
        {
            title: "Reduce Transportation Costs",
            desc: "Optimize routes, carriers, and fleet utilization to significantly reduce operational expenses.",
        },
        {
            title: "Increase Delivery Performance",
            desc: "Improve on-time delivery rates through better planning and real-time visibility.",
        },
        {
            title: "Enhance Customer Experience",
            desc: "Provide accurate delivery updates and complete transparency across shipments.",
        },
        {
            title: "Improve Productivity",
            desc: "Automate manual transportation workflows and reduce operational workload.",
        },
        {
            title: "Strengthen Compliance",
            desc: "Digitize documentation and ensure audit-ready transportation records.",
        },
        {
            title: "Gain Full Visibility",
            desc: "Track every shipment, carrier, and delivery from a single unified dashboard.",
        },
        {
            title: "Scale Efficiently",
            desc: "Handle growing shipment volumes without increasing operational complexity.",
        },
    ];

    return (
        <section className="py-5">
            <div className="mx-auto">

                {/* Heading */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Business Benefits
                    </h2>
                    <p className="text-gray-500 mt-3">
                        Improve efficiency, reduce cost, and gain complete control over transportation operations.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits.map((item, i) => (
                        <div
                            key={i}
                            className="p-6 rounded-xl bg-[#003b8f] text-white border border-slate-200 shadow"
                        >
                            <h3 className="text-lg font-semibold mb-2">
                                {item.title}
                            </h3>
                            <p className="text-sm text-white/80 leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}