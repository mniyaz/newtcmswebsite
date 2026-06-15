const features = [
    {
        title: "Automated Invoice Generation",
        description: "Generate invoices instantly from completed shipments.",
    },
    {
        title: "Payment Tracking",
        description: "Monitor paid, pending and overdue invoices.",
    },
    {
        title: "Multi-Payment Support",
        description: "Accept bank transfers, cards and digital payments.",
    },
    {
        title: "Financial Reporting",
        description: "Revenue reports and payment trend analysis.",
    },
];

export default function BillingFeatures() {
    return (
        <section className="py-10 overflow-hidden">
            <div className="mx-auto">

                <div className="text-center mb-10">
                    <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary mb-3">
                        Billing & Finance
                    </span>

                    <h2 className="text-4xl font-bold">
                        Financial Control Made Easy
                    </h2>

                    <p className="mt-5 text-slate-600 max-w-2xl mx-auto">
                        Manage invoicing, payments and financial reporting
                        from a single platform built for logistics businesses.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-10 items-center">

                    {/* Left Image */}
                    <div className="relative h-full">

                        <img
                            src="/webpImages/FinancialControl.webp"
                            alt="Finance Dashboard"
                            className="relative rounded-md shadow w-full h-full object-cover"
                        />

                        {/* Floating Stats */}
                        <div className="absolute bottom-8 left-8 bg-white rounded-2xl shadow-xl px-6 py-5">
                            <p className="text-sm text-slate-500">
                                Monthly Revenue
                            </p>
                            <h4 className="text-3xl font-bold text-slate-900">
                                $248K
                            </h4>
                        </div>
                    </div>

                    {/* Right Timeline */}
                    <div className="relative">

                        <div className="space-y-12">

                            {features.map((item, index) => (
                                <div
                                    key={item.title}
                                    className="relative pl-14"
                                >
                                    <div className="absolute left-0 top-1 flex items-center justify-center w-10 h-10 rounded-full bg-[#003b8f] text-white font-bold shadow-lg">
                                        {index + 1}
                                    </div>

                                    <div className="bg-white hover:bg-[#003b8f] hover:text-white border border-slate-200 rounded-lg p-4 hover:shadow-xl transition-all duration-300">
                                        <h3 className="text-xl font-semibold mb-2">
                                            {item.title}
                                        </h3>

                                        <p className="text-sm">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}