"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";


export default function TCMSContact() {
    const form = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);


    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (!form.current) return;

        setLoading(true);


        // Get form data
        const formData = new FormData(form.current);
        emailjs.sendForm(
            "service_p3hl8oh",
            "template_pyi1rrm",
            form.current,
            "nkhrEtfX2u3Si0NyV"
        )
            .then((response) => {
                form.current?.reset();

            })
            .catch((error) => {

                console.error("EmailJS Error:", error);

                alert("Failed to send request!");

            })
            .finally(() => {

                setLoading(false);

            });
    };

    return (
        <section id="demoBook" className="min-h-screen flex items-center justify-center bg-white lg:py-10 px-5 py-10">
            <div className="w-full max-w-6xl overflow-hidden rounded-lg md:rounded-3xl shadow-xl border border-gray-200 grid grid-cols-1 md:grid-cols-2 items-stretch">

                {/* Left Image Section */}
                <div className="hidden md:block relative">
                    <img
                        src="https://img.magnific.com/premium-photo/cargo-truck-driving-highway-hauling-goods-delivery-transportation-logistics-concept_1368762-2476.jpg?uid=R175611833&ga=GA1.1.149756539.1777702811&semt=ais_hybrid&w=740&q=80"
                        alt="TCMS System"
                        className="absolute inset-0 h-full w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                    <div className="relative h-full flex items-end p-10 text-white">
                        <div>
                            <h2 className="text-3xl font-bold">
                                Experience Smart TCMS
                            </h2>

                            <p className="mt-2 text-sm max-w-sm">
                                See how our intelligent transport management system improves tracking, control and operational efficiency.
                            </p>
                        </div>
                    </div>
                </div>


                {/* Form Section */}
                <div className="bg-white px-4 py-5 md:px-10 w-full">


                    <h1 className="md:text-4xl text-2xl font-bold text-slate-900">
                        Book Your TCMS Demo.
                    </h1>

                    <p className="text-gray-500 mt-2 text-sm">
                        Schedule a personalized demo and discover how TCMS can optimize your transport operations.
                    </p>


                    {/* Form */}
                    <form ref={form}
                        onSubmit={sendEmail}
                        className="mt-8 space-y-5">

                        <div className="grid lg:grid-cols-2 gap-4">

                            <div>
                                <label className="text-sm font-semibold">
                                    Full Name
                                </label>

                                <input
                                    name="name"
                                    required
                                    type="text"
                                    placeholder="Enter your Full Name..."
                                    className="mt-2 w-full rounded-xl border border-gray-400 px-4 py-3 text-sm outline-none focus:border-indigo-500"
                                />
                            </div>


                            <div>
                                <label className="text-sm font-semibold">
                                    Company Name
                                </label>

                                <input
                                    name="company"
                                    required
                                    type="text"
                                    placeholder="Enter your Company Name..."
                                    className="mt-2 w-full rounded-xl border border-gray-400 px-4 py-3 text-sm outline-none focus:border-indigo-500"
                                />
                            </div>

                        </div>

                        <div className="grid lg:grid-cols-2 gap-4">
                            <div>
                                <label className="text-sm font-semibold">
                                    Email Address
                                </label>

                                <input
                                    name="email"
                                    required
                                    type="email"
                                    placeholder="Enter your Email Address..."
                                    className="mt-2 w-full rounded-xl border border-gray-400 px-4 py-3 text-sm outline-none focus:border-indigo-500"
                                />
                            </div>


                            <div>
                                <label className="text-sm font-semibold">
                                    Phone Number
                                </label>

                                <input
                                    name="phone"
                                    required
                                    type="tel"
                                    placeholder="+91 (000)000-0000"
                                    className="mt-2 w-full rounded-xl border border-gray-400 px-4 py-3 text-sm outline-none focus:border-indigo-500"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="text-sm font-semibold">
                                Fleet Size
                            </label>

                            <input
                                name="fleet"
                                required
                                type="tel"
                                placeholder="Enter your Fleet Size..."
                                className="mt-2 w-full rounded-xl border border-gray-400 px-4 py-3 text-sm outline-none focus:border-indigo-500"
                            />
                        </div>


                        <div>
                            <label className="text-sm font-semibold">
                                TCMS Requirement
                            </label>

                            <textarea
                                name="requirement"
                                placeholder="Describe your TCMS requirement..."
                                rows={4}
                                className="mt-2 w-full rounded-xl border border-gray-400 px-4 py-3 text-sm outline-none resize-none focus:border-indigo-500"
                            />
                        </div>


                        <button
                            disabled={loading}
                            type="submit"
                            className="w-full rounded-full bg-[#003b8f] py-3 text-white font-medium hover:bg-[#003b8f] cursor-pointer transition flex items-center justify-center gap-2"
                        >
                            {loading
                                ? "Sending..."
                                : "Book Demo →"
                            }
                        </button>


                    </form>

                </div>

            </div>
        </section>
    );
}