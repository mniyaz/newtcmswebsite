import Link from "next/link";

export default function NotFound404() {
    return (
        <div className="h-screen bg-[#EEEEE8] flex items-center justify-center px-5 overflow-hidden">
            <div className="text-center flex flex-col items-center">

                {/* Image */}
                <img
                    src="/truchHub.png"
                    alt="Truck"
                    className="h-72 md:h-100"
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