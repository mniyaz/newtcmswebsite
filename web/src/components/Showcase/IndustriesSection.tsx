"use client";

import { useState } from "react";

export default function IndustriesSection() {
const industries = [
    {
        title: "Manufacturing Logistics",
        desc: "Optimize manufacturing supply chains with transportation management software, shipment planning, warehouse coordination, and real-time delivery visibility.",
        image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
    },
    {
        title: "Retail & E-Commerce Logistics",
        desc: "Accelerate order fulfillment with inventory synchronization, last-mile delivery tracking, route optimization, and logistics automation.",
        image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80"
    },
    {
        title: "Distribution Networks",
        desc: "Manage complex distribution operations through centralized shipment planning, freight visibility, and intelligent transportation workflows.",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    },
    {
        title: "3PL & Logistics Providers",
        desc: "Deliver superior third-party logistics services with multi-client management, carrier coordination, shipment tracking, and operational analytics.",
        image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=1200&q=80",
    },
    {
        title: "Transportation Companies",
        desc: "Improve fleet utilization with GPS tracking, route optimization, transport planning, fuel management, and real-time logistics insights.",
        image: "https://images.unsplash.com/photo-1501700493788-fa1a4fc9fe62?auto=format&fit=crop&w=1200&q=80",
    },
    {
        title: "Freight & Carrier Operations",
        desc: "Streamline freight management with digital documentation, carrier allocation, shipment execution, and end-to-end transportation visibility.",
        image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80",
    },
    {
        title: "Supply Chain & Warehousing",
        desc: "Enhance warehouse efficiency through inventory visibility, dock scheduling, transportation planning, and integrated supply chain management.",
        image: "https://images.unsplash.com/photo-1601598851547-4302969d0614?auto=format&fit=crop&w=1200&q=80",
    },
];

    const [active, setActive] = useState(0);

    return (
        <section className="md:pt-10 pt-5">
            <div className="mx-auto">

                {/* Header */}
                <div className="md:text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Industries Powered by TCMS Transportation Management Software
                    </h2>
                    <p className="text-gray-500 mt-3">
                            From manufacturing and retail to freight, warehousing, and third-party logistics,
    TCMS helps organizations optimize transportation operations, improve supply chain
    visibility, and deliver exceptional customer experiences.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-10 items-start">

                    {/* LEFT: GRID */}
                    <div className="grid lg:grid-cols-2 gap-4">
                        {industries.map((item, i) => (
                            <div
                                key={i}
                                onMouseEnter={() => setActive(i)}
                                className={`cursor-pointer rounded-xl p-5 border transition-all duration-300
                                ${active === i
                                        ? " bg-[#003b8f] text-white scale-[1.02]"
                                        : "border-slate-200 bg-white hover:border-white/30"
                                    }`}
                            >
                                <h3 className="font-semibold text-sm md:text-base">
                                    {item.title}
                                </h3>
                            </div>
                        ))}
                    </div>

                    {/* RIGHT: PREVIEW PANEL */}
                    <div className="relative rounded-lg overflow-hidden border border-white/10 h-[30vh] md:h-[420px]">

                        <img
                            src={industries[active].image}
                            alt={industries[active].title}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}