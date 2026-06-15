"use client";

import {
    ClipboardCheck,
    Route,
    Truck,
    FileText,
    BarChart3,
    Handshake,
    MapPin,
} from "lucide-react";

export default function SolutionOverview() {
const features = [
    {
        icon: ClipboardCheck,
        title: "Smart Booking & Shipment Intake",
        description:
            "Streamlines shipment creation with intelligent validation, automated data capture, and a centralized booking workflow for faster onboarding.",
        image: "/webpImages/smart.webp",
    },
    {
        icon: Route,
        title: "Distribution Planning",
        description:
            "Enables optimized route and dispatch planning with real-time visibility across pickup, transit, and last-mile delivery operations.",
        image: "/webpImages/plan.webp",
    },
    {
        icon: Truck,
        title: "End To End Visibility & Execution",
        description:
            "Ensures seamless execution across the supply chain by matching shipments with the most efficient carriers based on cost, capacity, and performance.",
        image: "/webpImages/endtoend.webp",
    },
    {
        icon: BarChart3,
        title: "Stakeholder Utilization Analytics",
        description:
            "Provides centralized digital documentation, operational insights, and performance analytics to eliminate manual reporting and improve decision-making.",
        image: "/webpImages/analytics.webp",
    },
    {
        icon: Handshake,
        title: "Vendor RFQ & Tracking",
        description:
            "Simplifies vendor coordination with RFQ automation while enabling live tracking of vehicle movement, ETAs, and delivery milestones.",
        image: "/webpImages/vendor.webp",
    },
];

    return (
        <section className="py-5">
            <div className="mx-auto">

                {/* HEADER */}
                <div className="md:text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Complete Transportation Management Platform
                    </h2>
                    <p className="mt-5 text-gray-500">
                        TCMS LightApp simplifies logistics with automation, visibility, and intelligence.
                    </p>
                </div>

                {/* FEATURE FLOW */}
                <div className="md:mt-10 mt-5 lg:space-y-24 space-y-10">

                    {features.map((item, i) => {
                        const Icon = item.icon;
                        const isReverse = i % 2 === 1;

                        return (
                            <div
                                key={i}
                                className={`grid lg:grid-cols-2 gap-10 items-center ${isReverse ? "md:flex-row-reverse" : ""
                                    }`}
                            >

                                {/* IMAGE */}
                                <div className={`relative group ${isReverse ? "md:order-2" : ""}`}>
                                    <div className="rounded-md overflow-hidden shadow-md border border-white/10">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full md:h-[380px] group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>

                                    {/* glow */}
                                    <div className="absolute -inset-4 bg-cyan-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition" />
                                </div>

                                {/* TEXT */}
                                <div className={`${isReverse ? "md:order-1" : ""}`}>
                                    <div className="flex items-center gap-3 mb-3">
                                        <Icon className="w-5 h-5 text-[#003b8f]" />
                                        <h3 className="text-2xl font-semibold">
                                            {item.title}
                                        </h3>
                                    </div>

                                    <p className="text-gray-500 text-base">
                                        {item.description}
                                    </p>

                                    {/* underline accent */}
                                    <div className="w-16 h-1 bg-[#003b8f] mt-5 rounded-full" />
                                </div>

                            </div>
                        );
                    })}

                </div>
            </div>
        </section>
    );
}