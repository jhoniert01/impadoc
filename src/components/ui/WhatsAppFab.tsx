"use client";
import { COMPANY } from "@/data/site";

export default function WhatsAppFab() {
  const href = `https://api.whatsapp.com/send?phone=${COMPANY.whatsapp}&text=${encodeURIComponent(COMPANY.whatsappMsg)}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 lg:bottom-8 lg:right-8 z-40 group"
    >
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-[#0F1E45] text-white text-[12px] font-semibold whitespace-nowrap px-3.5 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
        ¿Necesitas asesoría?
        <span className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-b-[6px] border-l-[6px] border-transparent border-l-[#0F1E45]" />
      </span>
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping" style={{ animationDuration: "2.5s" }} />
      <span
        className="relative w-16 h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1"
        style={{ boxShadow: "0 14px 32px rgba(37,211,102,0.5)" }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
        </svg>
      </span>
    </a>
  );
}
