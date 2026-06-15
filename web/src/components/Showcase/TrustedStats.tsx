
import {
    Truck,
    Activity,
    Globe,
    ShieldCheck,
} from "lucide-react";

const stats = [
    {
        icon: Truck,
        value: "10,000+",
        label: "Daily Shipments",
    },
    {
        icon: Activity,
        value: "99.9%",
        label: "Tracking Accuracy",
    },
    {
        icon: Globe,
        value: "24/7",
        label: "Real-Time Visibility",
    },
    {
        icon: ShieldCheck,
        value: "100+",
        label: "Transport Partners",
    },
];

export default function TrustedStats() {
    return (
        <div className="relative overflow-hidden py-10">
            <div className="mx-auto">
                <div className="grid items-center gap-14 lg:grid-cols-2">

                    {/* Left Side */}
                    <div className="relative h-full">
                        <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-md h-full">
                            <img
                                src="/webpImages/LogisticsOperations.webp"
                                alt="TCMS Dashboard"
                                className="h-full w-full object-cover"
                            />
                        </div>

                        <div className="absolute lg:-bottom-6 bottom-0 lg:-right-6 right-0 rounded-lg bg-white p-3 md:p-5 shadow-md border border-slate-200">
                            <div className="flex items-center gap-3">
                                <Truck className="md:h-8 h-5 w-5 md:w-8 text-blue-600" />
                                <div>
                                    <h4 className="font-bold text-slate-900">
                                        Live Tracking
                                    </h4>
                                    <p className="md:text-sm text-xs text-slate-500">
                                        Updated Every Minute
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div>
                        <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
                            Trusted By Logistics Leaders
                        </span>

                        <h2 className="mt-6 text-3xl md:text-4xl font-bold text-slate-900">
                            Transportation Management Software for Modern Logistics Operations
                        </h2>

                        <p className="mt-4 text-slate-600">
                            TCMS LightApp manages thousands of shipments,
                            vehicle movements, and delivery operations every
                            day with complete real-time visibility.
                        </p>

                        <div className="md:mt-10 mt-5 grid gap-5 sm:grid-cols-2">
                            {stats.map((item) => (
                                <div
                                    key={item.label}
                                    className="group rounded-md border border-slate-200 bg-white/80 p-4 md:p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                                >
                                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50">
                                        <item.icon className="h-7 w-7 text-blue-600" />
                                    </div>

                                    <h3 className="md:text-3xl text-2xl font-bold text-slate-900">
                                        {item.value}
                                    </h3>

                                    <p className="mt-2 text-slate-500">
                                        {item.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}