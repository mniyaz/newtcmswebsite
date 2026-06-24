import {
    MapPinned,
    ShieldCheck,
    Fuel,
    UserCog,
    BarChart3,
    MonitorSmartphone,
} from "lucide-react";
import Link from "next/link";
const highlights = [
    {
        title: "GPS Tracking",
        description:
            "See every lorry moving on a live map. Know exactly where they are, which route they took, and how fast they drove — without calling anyone.",
        icon: MapPinned,
        link: "/platform/gps"

    },
    {
        title: "APAD Compliance",
        description:
            "APAD and JPJ paperwork done for you. We remind you before permits expire so you never pay a fine again.",
        icon: ShieldCheck,
        link: "/compliance"
    },
    {
        title: "Fuel Monitoring",
        description:
            "Someone stealing your diesel? We catch it instantly. See which trips waste fuel and which drivers are costing you money.",
        icon: Fuel,
        link: "/fleet/#fuel"
    },
    {
        title: "Driver Management",
        description:
            "Know which drivers are speeding, braking hard, or sitting idle. Keep good drivers. Fix bad habits before they cost you.",
        icon: UserCog,
        link: "/fleet"
    },
    {
        title: "Fleet Analytics",
        description:
            "Simple reports that show you: which lorry makes money, which one doesn't, and what to do about it.",
        icon: BarChart3,
        link: "/fleet"
    },
    {
        title: "Customer Portal",
        description:
            "Give your customer a link. They track their own shipment. No more 'Where is my cargo?' calls to your office.",
        icon: MonitorSmartphone,
        link: "/crm"
    },
];

export default function ProductHighlights() {
    return (
        <section className="bg-[#F8F9FA] py-15">
            <div className="mx-auto container px-6 md:px-10 lg:px-10 xl:px-0">
                {/* Header */}
                <div className="mx-auto max-w-3xl text-center">

                    <h2 className="text-2xl text-start md:text-center font-bold tracking-tight md:text-4xl md:max-w-3xl">
                        Everything You Need To Manage Your Fleet
                    </h2>

                    <p className="mt-4 text-sm text-start md:text-center leading-relaxed text-[#434653] md:text-base md:max-w-3xl">
                        Powerful tools designed to improve visibility, efficiency, safety,
                        and customer satisfaction across your operations.
                    </p>
                </div>

                {/* Cards */}
                <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {highlights.map((item) => {
                        const Icon = item.icon;

                        return (
                            <Link
                                key={item.title}
                                href={item.link}
                                className="group bg-[#003b8f] cursor-pointer relative overflow-hidden rounded-lg p-4 md:p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/30 hover:shadow-[0_20px_50px_rgba(6,182,212,0.15)]"
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
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}