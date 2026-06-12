import {
    MapPinned,
    ShieldCheck,
    Fuel,
    UserCog,
    BarChart3,
    MonitorSmartphone,
} from "lucide-react";

const highlights = [
    {
        title: "GPS Tracking",
        description:
            "Real-time vehicle location tracking with route history and live updates.",
        icon: MapPinned,
    },
    {
        title: "APAD Compliance",
        description:
            "Stay compliant with regulations through automated monitoring and reporting.",
        icon: ShieldCheck,
    },
    {
        title: "Fuel Monitoring",
        description:
            "Track fuel consumption, detect anomalies, and optimize operating costs.",
        icon: Fuel,
    },
    {
        title: "Driver Management",
        description:
            "Monitor driver performance, behavior, and safety metrics efficiently.",
        icon: UserCog,
    },
    {
        title: "Fleet Analytics",
        description:
            "Gain actionable insights with advanced reports and performance dashboards.",
        icon: BarChart3,
    },
    {
        title: "Customer Portal",
        description:
            "Provide customers with transparent access to tracking and service updates.",
        icon: MonitorSmartphone,
    },
];

export default function ProductHighlights() {
    return (
        <section className="bg-[#F8F9FA] py-15">
            <div className="mx-auto container px-6 md:px-10 lg:px-10 xl:px-0">
                {/* Header */}
                <div className="mx-auto max-w-3xl text-center">

                    <h2 className="text-2xl text-start md:text-center font-bold tracking-tight md:text-4xl">
                        Everything You Need To Manage Your Fleet
                    </h2>

                    <p className="mt-4 text-sm text-start md:text-center leading-relaxed text-[#434653] md:text-base">
                        Powerful tools designed to improve visibility, efficiency, safety,
                        and customer satisfaction across your operations.
                    </p>
                </div>

                {/* Cards */}
                <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {highlights.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.title}
                                className="group bg-[#003b8f] relative overflow-hidden rounded-lg p-4 md:p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/30 hover:shadow-[0_20px_50px_rgba(6,182,212,0.15)]"
                            >

                                {/* Icon */}
                                <div className="relative z-10 mb-6 inline-flex h-10 w-10 items-center justify-center rounded-md bg-white shadow-lg">
                                    <Icon className="h-7 w-7" />
                                </div>

                                {/* Content */}
                                <div className="relative z-10">
                                    <h3 className="text-xl font-semibold text-white">
                                        {item.title}
                                    </h3>

                                    <p className="mt-3 leading-relaxed text-slate-300">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Accent Line */}
                                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full" />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}