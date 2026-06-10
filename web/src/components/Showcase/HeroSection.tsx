"use client";

import { ArrowRight, PlayCircle } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-white">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50" />

            <div className="relative mx-auto max-w-7xl px-6 lg:px-12 py-24">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <div>
                        <span className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700">
                            Transportation Management Simplified
                        </span>

                        <h1 className="mt-8 text-5xl lg:text-7xl font-bold leading-tight text-slate-900">
                            Transform Transportation Operations With
                            <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                Complete End-To-End Visibility
                            </span>
                        </h1>

                        <p className="mt-8 text-lg leading-8 text-slate-600">
                            TCMS LightApp helps logistics teams automate transportation
                            workflows, track shipments in real-time, optimize resources,
                            reduce operational costs, and deliver exceptional customer
                            experiences through a unified transportation management platform.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <button className="group rounded-xl bg-indigo-600 px-8 py-4 font-semibold text-white transition hover:bg-indigo-700">
                                Request Demo
                                <ArrowRight className="ml-2 inline h-5 w-5 transition group-hover:translate-x-1" />
                            </button>

                            <button className="flex items-center gap-2 rounded-xl border border-slate-300 px-8 py-4 font-semibold text-slate-700 hover:bg-slate-50">
                                <PlayCircle size={22} />
                                Watch Platform Tour
                            </button>
                        </div>

                        {/* Trust */}
                        <div className="mt-12 flex items-center gap-4">
                            <div className="flex -space-x-3">
                                <img
                                    src="https://i.pravatar.cc/50?img=1"
                                    className="h-10 w-10 rounded-full border-2 border-white"
                                />
                                <img
                                    src="https://i.pravatar.cc/50?img=2"
                                    className="h-10 w-10 rounded-full border-2 border-white"
                                />
                                <img
                                    src="https://i.pravatar.cc/50?img=3"
                                    className="h-10 w-10 rounded-full border-2 border-white"
                                />
                                <img
                                    src="https://i.pravatar.cc/50?img=4"
                                    className="h-10 w-10 rounded-full border-2 border-white"
                                />
                            </div>

                            <p className="text-sm text-slate-500">
                                Trusted by logistics teams worldwide
                            </p>
                        </div>
                    </div>

                    {/* Right Dashboard */}
                    <div className="relative">

                        <div className="absolute -top-10 -left-10 h-48 w-48 rounded-full bg-indigo-300/20 blur-3xl" />
                        <div className="absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-purple-300/20 blur-3xl" />

                        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">

                            {/* Browser Bar */}
                            <div className="flex items-center gap-2 border-b bg-slate-50 px-6 py-4">
                                <div className="h-3 w-3 rounded-full bg-red-400" />
                                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                                <div className="h-3 w-3 rounded-full bg-green-400" />
                            </div>

                            <img
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978"
                                alt="Dashboard"
                                className="h-full w-full object-cover"
                            />
                        </div>

                        {/* Floating Cards */}

                        <div className="absolute top-8 -left-12 rounded-2xl bg-white p-5 shadow-xl border">
                            <p className="text-sm text-slate-500">
                                Active Shipments
                            </p>
                            <h3 className="text-3xl font-bold text-indigo-600">
                                3,892
                            </h3>
                        </div>

                        <div className="absolute bottom-10 -right-10 rounded-2xl bg-white p-5 shadow-xl border">
                            <p className="text-sm text-slate-500">
                                On-Time Delivery
                            </p>
                            <h3 className="text-3xl font-bold text-green-600">
                                95.8%
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}