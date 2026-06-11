export default function BillingBenefits() {
    const benefits = [
        "Faster invoice processing",
        "Reduced payment delays",
        "Improved cash flow visibility",
        "Centralized financial records",
        "Accurate reporting and audits",
    ];

    return (
        <section className="mx-auto py-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                
                {/* Left Content */}
                <div>
                    <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
                        Why Choose Smart Billing?
                    </h2>

                    <p className="text-slate-600 mb-8">
                        Streamline your billing process with smarter automation, better visibility,
                        and reliable financial control.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4">
                        {benefits.map((item, idx) => (
                            <div
                                key={idx}
                                className="flex items-start gap-3 p-4 rounded-xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition"
                            >
                                <div className="mt-1 h-3 w-3 rounded-full bg-blue-500" />
                                <span className="text-slate-700 text-sm font-medium">
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Image */}
                <div className="relative h-full">

                    {/* Image container */}
                    <div className="relative h-full rounded-lg overflow-hidden shadow-lg border border-slate-200">
                        <img
                            src="/billing.png"
                            alt="Smart Billing Dashboard"
                            className="w-full h-full "
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}