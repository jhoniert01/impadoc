import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0D2558] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 grid-texture" />
      <div className="relative z-10 text-center px-6">
        <p className="font-display text-[120px] lg:text-[180px] font-extrabold text-white/5 leading-none select-none mb-0">404</p>
        <div className="-mt-8 lg:-mt-14">
          <h1 className="font-display text-3xl lg:text-5xl font-extrabold text-white mb-4">Página no encontrada</h1>
          <p className="text-white/50 text-lg mb-10 max-w-md mx-auto">
            La página que buscas no existe o fue movida. Explora nuestro sitio desde el inicio.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/" className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-[#1B3F8B] font-semibold rounded-xl hover:-translate-y-0.5 hover:shadow-lg transition-all text-sm">
              Ir al inicio <ArrowRight size={14} />
            </Link>
            <Link href="/productos" className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/20 text-white/70 font-semibold rounded-xl hover:text-white hover:border-white/40 transition-all text-sm">
              Ver productos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
