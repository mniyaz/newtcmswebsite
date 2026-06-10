"use client";

import { useState } from "react";

export default function IndustriesSection() {
    const industries = [
        {
            title: "Manufacturing",
            desc: "Optimize production workflows with real-time logistics coordination.",
            image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
        },
        {
            title: "Retail & E-Commerce",
            desc: "Fast fulfillment, inventory sync, and seamless last-mile delivery.",
            image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=1200&q=80",
        },
        {
            title: "Distribution",
            desc: "Streamlined distribution networks with smart routing systems.",
            image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
        },
        {
            title: "3PL / Logistics Providers",
            desc: "Unified control tower for multi-client logistics operations.",
            image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=1200&q=80",
        },
        {
            title: "Transportation Companies",
            desc: "Fleet tracking, route optimization, and fuel efficiency insights.",
            image: "https://images.unsplash.com/photo-1501700493788-fa1a4fc9fe62?auto=format&fit=crop&w=1200&q=80",
        },
        {
            title: "Freight Operators",
            desc: "Digital freight management with end-to-end visibility.",
            image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80",
        },
        {
            title: "Supply Chain & Warehousing",
            desc: "Smart warehouse automation and inventory intelligence.",
            image: "https://images.unsplash.com/photo-1601598851547-4302969d0614?auto=format&fit=crop&w=1200&q=80"
        },
    ];

    const [active, setActive] = useState(0);

    return (
        <section className="pt-10">
            <div className="mx-auto">

                {/* Header */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Industries We Serve
                    </h2>
                    <p className="text-gray-500 mt-3">
                        A unified logistics ecosystem built for every stage of the supply chain.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10 items-start">

                    {/* LEFT: GRID */}
                    <div className="grid grid-cols-2 gap-4">
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
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 h-[420px]">

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