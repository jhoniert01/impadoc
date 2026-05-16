import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { COMPANY, PRODUCTS } from "@/data/site";

export const metadata: Metadata = { title: "Línea Industrial — Minerales" };

function Eyebrow({ t, light }: { t:string; light?:boolean }) {
  return <p className={`eyebrow mb-5 ${light?"light":""}`}>{t}</p>;
}

const industrialProducts = PRODUCTS.filter(p => p.category === "industrial");

const industrialSectors = [
  "Pinturas y recubrimientos", "Plásticos", "Cauchos",
  "Nutrición animal", "Industria siderúrgica", "Automotriz",
  "Agroquímica", "Explotación petrolera", "Papel y cartón",
  "Jabón y detergentes", "Cosméticos industriales", "Construcción",
];

export default function IndustrialPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-[130px] pb-20 relative overflow-hidden" style={{ background:"#15130F" }}>
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage:"linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px)", backgroundSize:"64px 64px" }} />
        <div className="absolute inset-0" style={{ background:"radial-gradient(ellipse 65% 80% at 75% 50%, rgba(35,72,176,.35), transparent)" }} />

        {/* Hero image — CAREX bag instead of infographic */}
        <div className="absolute right-0 top-0 bottom-0 w-[50%] hidden lg:block z-[2]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#15130F] via-[#15130F]/60 to-transparent z-10" />
          <div className="w-full h-full flex items-center justify-center pr-10 pt-16">
            <Image
              src="/images/carex-saco.png"
              alt="Carbonato de Calcio CAREX — IMPADOC Industrial"
              width={480}
              height={520}
              className="object-contain max-h-[80vh] w-auto relative z-0"
            />
          </div>
        </div>

        <div className="relative z-10 max-w-[1320px] mx-auto px-6 lg:px-10">
          <Eyebrow t="UNIDAD INDUSTRIAL" light />
          <h1 style={{ fontSize:"clamp(40px,6vw,76px)", fontWeight:800, letterSpacing:"-0.03em", lineHeight:1.04, color:"#fff", maxWidth:"560px", marginBottom:"24px" }}>
            Industria mineral<br /><span style={{ color:"#5A78D6" }}>de precisión</span>
          </h1>
          <p style={{ fontSize:"18px", color:"rgba(255,255,255,.55)", maxWidth:"420px", lineHeight:1.6, marginBottom:"40px" }}>
            IMPADOC produce y comercializa carbonato de calcio y minerales industriales de alta pureza para múltiples sectores.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/contacto" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-[13px] font-700 text-[#15130F] bg-white hover:-translate-y-px transition-all">
              Contactar área industrial <ArrowRight size={13} />
            </Link>
            <a href={`https://api.whatsapp.com/send?phone=${COMPANY.whatsapp}&text=${encodeURIComponent("Hola, necesito información de la línea industrial IMPADOC")}`}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-[13px] font-700 text-white border border-white/22 hover:bg-white/5 transition-all">
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Industrial sectors */}
      <section className="py-20" style={{ background:"#F8F5EE" }}>
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-12 max-w-[640px] mx-auto">
            <Eyebrow t="SECTORES DE APLICACIÓN" />
            <h2 style={{ fontSize:"clamp(28px,3.6vw,44px)", fontWeight:700, letterSpacing:"-0.025em", lineHeight:1.06, color:"#15130F" }}>
              Pigmentos funcionales para<br /><em style={{ fontStyle:"normal", color:"#1B2C5E" }}>cada industria</em>
            </h2>
            <p style={{ fontSize:"16px", color:"#8E867B", lineHeight:1.6, marginTop:"16px" }}>
              Derivados del carbonato de calcio y la barita, nuestros minerales aportan materia sólida, opacidad, viscosidad y reducción de costos en formulaciones.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-16">
            {industrialSectors.map((s, i) => (
              <div key={i} className="bg-white border border-[#E5E1D6] rounded-xl px-4 py-3 flex items-center gap-3 card-lift">
                <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background:"#E32118" }} />
                <span style={{ fontSize:"13px", color:"#2A2823", fontWeight:500 }}>{s}</span>
              </div>
            ))}
          </div>

          {/* Benefits row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { n:"Materia sólida",           d:"Aporta carga y volumen a formulaciones" },
              { n:"Opacidad",                 d:"Mejora la cobertura en pinturas" },
              { n:"Reducción de costos",       d:"Sustituye parcialmente el TiO₂" },
              { n:"Mejora propiedades",        d:"Viscosidad, consistencia y adherencia" },
            ].map(b => (
              <div key={b.n} className="bg-white border border-[#E5E1D6] rounded-2xl p-5">
                <p style={{ fontSize:"15px", fontWeight:700, color:"#1B2C5E", marginBottom:"6px" }}>✓ {b.n}</p>
                <p style={{ fontSize:"13px", color:"#8E867B", lineHeight:1.55 }}>{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products grid */}
      <section className="py-24" style={{ background:"#F8F5EE" }}>
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between gap-8 mb-12 flex-wrap">
            <div className="flex flex-col gap-4">
              <Eyebrow t="LÍNEA INDUSTRIAL — CARBONATOS Y MINERALES" />
              <h2 style={{ fontSize:"clamp(28px,3.6vw,44px)", fontWeight:700, letterSpacing:"-0.025em", lineHeight:1.06, color:"#15130F" }}>
                Minerales y materiales<br /><em style={{ fontStyle:"normal", color:"#1B2C5E" }}>industriales</em>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {industrialProducts.map(p => (
              <div key={p.slug} className="bg-[#F8F5EE] border border-[#E5E1D6] rounded-2xl overflow-hidden card-lift flex flex-col">
                {/* Product image — CAREX sack */}
                <div className="bg-white flex items-center justify-center p-8" style={{ aspectRatio:"4/3" }}>
                  <Image
                    src="/images/carex-saco.png"
                    alt={p.name}
                    width={200}
                    height={220}
                    className="object-contain max-h-[180px] w-auto"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <p className="font-mono text-[10px] tracking-[0.09em] uppercase text-[#1B2C5E] mb-1">{p.line}</p>
                  <h3 style={{ fontSize:"16px", fontWeight:700, color:"#15130F", lineHeight:1.25, marginBottom:"8px" }}>{p.name}</h3>
                  <p style={{ fontSize:"13px", color:"#8E867B", lineHeight:1.55, flex:1, marginBottom:"16px" }} className="line-clamp-3">{p.description}</p>
                  <a
                    href={p.pdfUrl}
                    download
                    className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl text-[13px] font-700 text-white transition-all hover:-translate-y-px"
                    style={{ background:"#1B2C5E" }}
                  >
                    <Download size={14} /> Descargar ficha técnica
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 bg-[#F8F5EE] border border-[#E5E1D6] rounded-2xl text-center">
            <p style={{ fontSize:"15px", color:"#2A2823", marginBottom:"12px" }}>
              <strong>¿Necesitas un mineral que no aparece en el listado?</strong>
            </p>
            <p style={{ fontSize:"13px", color:"#8E867B", marginBottom:"20px" }}>
              También trabajamos con Barita, Caolín, Bentonita, Arena de peña, Talco y más.
            </p>
            <a href={`https://api.whatsapp.com/send?phone=${COMPANY.whatsapp}&text=${encodeURIComponent("Hola, necesito información de minerales industriales IMPADOC")}`}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-[13px] font-700 text-white transition-all hover:-translate-y-px"
              style={{ background:"#25D366" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>
              Solicitar por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
