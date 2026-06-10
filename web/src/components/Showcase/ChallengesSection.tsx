"use client";

import {
    AlertTriangle,
    Truck,
    Clock,
    FileText,
    Users,
    BarChart3,
} from "lucide-react";

const challenges = [
    {
        icon: Truck,
        title: "Manual Shipment Booking",
        description:
            "Time-consuming booking processes increase operational delays.",
    },
    {
        icon: AlertTriangle,
        title: "Limited Visibility",
        description: "Lack of real-time tracking creates uncertainty.",
    },
    {
        icon: Clock,
        title: "Delivery Delays",
        description: "Poor planning and route inefficiencies impact service.",
    },
    {
        icon: Users,
        title: "Communication Gaps",
        description: "Disconnected teams slow down operations.",
    },
    {
        icon: FileText,
        title: "Paper-Based Processes",
        description: "Manual documents increase errors and compliance risks.",
    },
    {
        icon: BarChart3,
        title: "No Performance Insights",
        description: "Difficult to improve operations without analytics.",
    },
];

export default function ChallengesSection() {
    return (
        <section className="relative md:py-10 ">


            <div className="relative mx-auto">
                {/* HEADER */}
                <div className="md:text-center max-w-3xl mx-auto">
                    <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
                        Transportation Challenges
                    </span>

                    <h2 className="mt-6 text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                        Logistics Operations Face
                        <span className="text-indigo-600"> Growing Complexity</span>
                    </h2>

                    <p className="mt-5 text-slate-600">
                        Traditional transportation management methods create inefficiencies
                        that increase costs and reduce visibility across operations.
                    </p>
                </div>

                {/* GRID */}
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-10">
                    {challenges.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.title}
                                className="group relative p-4 md:p-8 rounded-lg bg-white border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                            >
                                {/* subtle gradient border effect */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/0 via-indigo-500/0 to-indigo-500/0 group-hover:from-indigo-500/10 group-hover:via-indigo-500/5 group-hover:to-transparent transition" />

                                {/* icon badge */}
                                <div className="relative flex items-center justify-center w-14 h-14 rounded-xl bg-[#003b8f1a] border border-indigo-100 group-hover:bg-[#003b8f] transition">
                                    <Icon className="w-6 h-6 text-[#003b8f] group-hover:text-white transition" />
                                </div>

                                {/* title */}
                                <h3 className="mt-6 text-xl font-semibold text-slate-900 group-hover:text-indigo-700 transition">
                                    {item.title}
                                </h3>

                                {/* description */}
                                <p className="mt-3 text-slate-600 leading-relaxed">
                                    {item.description}
                                </p>

                                {/* index badge */}
                                <div className="absolute top-5 right-5 text-xs font-semibold text-slate-300 group-hover:text-indigo-300 transition">
                                    {String(index + 1).padStart(2, "0")}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}