import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

interface WhatsAppStickyProps {
    phone: string; // Example: "919876543210"
    message?: string;
}

export function WhatsAppSticky({
    phone,
    message = "Hello! I'd like to know more.",
}: WhatsAppStickyProps) {
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    return (
        <Link
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl active:scale-95"
        >
            <FaWhatsapp className="h-8 w-8" />
        </Link>
    );
}