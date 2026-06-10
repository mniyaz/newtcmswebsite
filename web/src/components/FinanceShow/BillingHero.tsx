export default function BillingHero() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-24">
            <div className="max-w-4xl">
                <span className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm">
                    Billing & Finance
                </span>

                <h1 className="text-5xl md:text-7xl font-bold mt-6">
                    Smart Billing &
                    <span className="text-cyan-400">
                        {" "}Payment Management
                    </span>
                </h1>

                <p className="text-slate-400 text-lg mt-6 max-w-2xl">
                    Automate invoicing, track payments, manage receivables,
                    and gain complete financial visibility.
                </p>

                <div className="flex gap-4 mt-8">
                    <button className="px-6 py-3 bg-cyan-500 rounded-lg">
                        Request Demo
                    </button>

                    <button className="px-6 py-3 border border-slate-700 rounded-lg">
                        View Features
                    </button>
                </div>
            </div>
        </section>
    );
}