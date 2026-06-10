"use client";

import {
    Truck,
    Package,
    AlertTriangle,
    DollarSign,
    CheckCircle,
} from "lucide-react";

export default function DashboardPreview() {
    const stats = [
        {
            icon: Package,
            label: "Active Shipments",
            value: "1,248",
        },
        {
            icon: Truck,
            label: "Fleet Vehicles",
            value: "342",
        },
        {
            icon: CheckCircle,
            label: "Delivered Today",
            value: "186",
        },
        {
            icon: AlertTriangle,
            label: "Delayed Shipments",
            value: "12",
        },
        {
            icon: DollarSign,
            label: "Revenue",
            value: "$48.2K",
        },
    ];

    return (
        <section className="py-24 bg-[#0B1220] text-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Real-Time Dashboard Visibility
                    </h2>
                    <p className="text-gray-400 mt-3">
                        Monitor shipments, fleet, and performance metrics in real-time from a unified control center.
                    </p>
                </div>

                {/* Stats Row (TCMS style KPI strip) */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10">
                    {stats.map((item, i) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={i}
                                className="p-4 rounded-xl bg-white/5 border border-white/10"
                            >
                                <div className="flex items-center gap-2 text-gray-400 text-sm">
                                    <Icon className="w-4 h-4 text-cyan-400" />
                                    {item.label}
                                </div>

                                <div className="text-xl font-semibold mt-2">
                                    {item.value}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Dashboard Mock (main TCMS style focus area) */}
                <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6">

                    {/* Fake dashboard header */}
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h3 className="text-lg font-semibold">
                                Operations Overview
                            </h3>
                            <p className="text-gray-400 text-sm">
                                Live system snapshot
                            </p>
                        </div>

                        <div className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs">
                            LIVE
                        </div>
                    </div>

                    {/* Mock content grid (like TCMS dashboard panels) */}
                    <div className="grid md:grid-cols-3 gap-6">

                        <div className="h-40 rounded-xl bg-black/30 border border-white/10 flex items-center justify-center text-gray-500">
                            Shipment Map View
                        </div>

                        <div className="h-40 rounded-xl bg-black/30 border border-white/10 flex items-center justify-center text-gray-500">
                            Fleet Tracking Panel
                        </div>

                        <div className="h-40 rounded-xl bg-black/30 border border-white/10 flex items-center justify-center text-gray-500">
                            Performance Analytics
                        </div>

                    </div>

                    {/* Bottom status strip */}
                    <div className="mt-6 grid md:grid-cols-3 gap-4 text-sm text-gray-400">
                        <div>✔ Live tracking enabled</div>
                        <div>✔ Auto ETA calculation active</div>
                        <div>✔ Real-time alerts running</div>
                    </div>

                </div>
            </div>
        </section>
    );
}