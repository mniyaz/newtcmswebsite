"use client";

const claimsFlow = [
    {
        title: "Claim Submission",
        description:
            "User submits a claim request along with supporting documents and required details.",
    },
    {
        title: "Document Verification",
        description:
            "Uploaded documents are validated and reviewed for completeness and accuracy.",
    },
    {
        title: "Claim Assessment",
        description:
            "The system evaluates claim information and verifies eligibility based on predefined rules.",
    },
    {
        title: "Review & Approval",
        description:
            "Claims are reviewed by the responsible team and approved or rejected.",
    },
    {
        title: "Status Tracking",
        description:
            "Users can monitor claim progress and receive updates throughout the process.",
    },
    {
        title: "Settlement & Closure",
        description:
            "Approved claims are settled and the claim record is marked as completed.",
    },
];

export default function ClaimsWorkflow() {
    return (
        <section className="py-10">
            <div className="mx-auto">
                <div className="text-center mb-10">
                    <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
                        Claims Process
                    </span>

                    <h2 className="mt-5 text-4xl font-bold text-gray-900">
                        How Claims Work
                    </h2>

                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        A streamlined workflow from claim submission to final settlement.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {claimsFlow.map((step, index) => (
                        <div
                            key={index}
                            className="relative bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
                        >
                            <div className="w-12 h-12 rounded-xl bg-[#003b8f] text-white flex items-center justify-center font-bold text-lg mb-5">
                                {String(index + 1).padStart(2, "0")}
                            </div>

                            <h3 className="text-xl font-semibold mb-3">
                                {step.title}
                            </h3>

                            <p className="text-gray-600 leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}