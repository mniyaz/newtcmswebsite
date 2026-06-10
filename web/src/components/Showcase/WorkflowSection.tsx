"use client";

import {
    ClipboardList,
    PackageCheck,
    Route,
    Truck,
    FileText,
    MapPin,
    ShieldCheck,
    CreditCard,
    BarChart3,
} from "lucide-react";

export default function WorkflowSection() {
    const steps = [
        {
            icon: ClipboardList,
            title: "Booking Creation",
            desc: "Shipment request is created with pickup, delivery, cargo details, and priority.",
        },
        {
            icon: Route,
            title: "Transportation Planning",
            desc: "System plans optimized routes, schedules, and capacity allocation.",
        },
        {
            icon: Truck,
            title: "Carrier & Fleet Assignment",
            desc: "Best available carrier or vehicle is assigned based on cost and availability.",
        },
        {
            icon: FileText,
            title: "Digital Documentation",
            desc: "All shipment documents like invoices, e-way bills, and records are generated digitally.",
        },
        {
            icon: MapPin,
            title: "Dispatch & Tracking",
            desc: "Vehicle is dispatched and shipment is tracked in real-time with live updates.",
        },
        {
            icon: ShieldCheck,
            title: "Exception Monitoring",
            desc: "Delays, breakdowns, and route issues are detected and alerted instantly.",
        },
        {
            icon: PackageCheck,
            title: "Delivery Confirmation",
            desc: "Delivery is confirmed with customer acknowledgment and status update.",
        },
        {
            icon: CreditCard,
            title: "Proof of Delivery (POD)",
            desc: "Digital signature, images, and GPS proof are captured and stored securely.",
        },
        {
            icon: BarChart3,
            title: "Billing & Analytics",
            desc: "Freight billing, invoicing, and performance reports are generated automatically.",
        },
    ];

    return (
        <section className="md:py-10 py-5">
            <div className="mx-auto">

                {/* Header */}
                <div className="md:text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        End-to-End Transportation Workflow
                    </h2>
                    <p className="text-gray-500 mt-3">
                        From booking to delivery, TCMS LightApp manages the complete shipment lifecycle.
                    </p>
                </div>

                {/* Flow */}
                <div className="relative">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {steps.map((step, i) => {
                            const Icon = step.icon;

                            return (
                                <div
                                    key={i}
                                    className="relative p-4 md:p-6 rounded-xl bg-white border border-slate-200 shadow"
                                >
                                    {/* Step number */}
                                    <div className="absolute -top-3 -left-3 w-8 h-8 flex items-center justify-center rounded-full bg-[#003b8f] text-white text-sm font-bold">
                                        {i + 1}
                                    </div>

                                    {/* Icon */}
                                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white/10 mb-4">
                                        <Icon className="w-6 h-6 text-[#003b8f]" />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-lg font-semibold mb-2">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-gray-400 leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}