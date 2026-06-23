'use client'
import Link from "next/link";
import Lottie from "lottie-react";
import loadingAnimation from "../../assets/Car loading.json";
export default function ComingSoonPage() {
    return (
        <div className="h-screen bg-[#EEEEE8] flex items-center justify-center px-5 overflow-hidden">
            <div className="text-center flex flex-col items-center">

                {/* Image */}
                <Lottie
                    animationData={loadingAnimation}
                    loop={true}
                    className="w-[500px] h-[300px]"
                />

                {/* Coming Soon Text */}
                <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
                    Coming Soon
                </h1>

                <p className="mt-4 text-gray-600 text-base max-w-md">
                    We are working hard to bring something amazing.
                    Stay tuned — our new page will be live soon.
                </p>

                {/* Optional button */}
                <Link
                    href="/"
                    className="mt-8 px-8 py-3 rounded-full bg-black text-white hover:bg-gray-800 transition"
                >
                    Go Home
                </Link>

            </div>
        </div>
    );
}