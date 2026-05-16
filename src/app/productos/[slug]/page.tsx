import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Download, FileText, CheckCircle, Phone, ChevronRight } from "lucide-react";
import { PRODUCTS, COMPANY } from "@/data/site";

interface Params { slug: string }
export async function generateStaticParams() {
  return PRODUCTS.map(p => ({ slug: p.slug }));
}
export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const p = PRODUCTS.find(x => x.slug === slug);
  return { title: p ? `${p.name}` : "Producto" };
}

const tagCls: Record<string, string> = {
  blue:  "bg-[#1B2C5E] text-white",
  red:   "bg-[#E32118] text-white",
  green: "bg-[#1A7A4A] text-white",
};

export default async function ProductPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const product = PRODUCTS.find(p => p.slug === slug);
  if (!product) notFound();

  const related = PRODUCTS.filter(p => p.category === product.category && p.slug !== product.slug).slice(0, 3);

  return (
    <>
      {/* Breadcrumb */}
      <div className="pt-[140px] lg:pt-[160px] pb-6" style={{ background: "#F8F5EE" }}>
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 flex items-center gap-2 mono text-[11px] tracking-[0.14em] uppercase text-[#8E867B] flex-wrap">
          <Link href="/" className="hover:text-[#1B2C5E] transition-colors">INICIO</Link>
          <ChevronRight size={11} />
          <Link href="/productos" className="hover:text-[#1B2C5E] transition-colors">PRODUCTOS</Link>
          <ChevronRight size={11} />
          <Link href={`/productos?cat=${product.category}`} className="hover:text-[#1B2C5E] transition-colors">{product.line}</Link>
          <ChevronRight size={11} />
          <span className="text-[#15130F]">{product.name}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="py-12 lg:py-16" style={{ background: "#F8F5EE" }}>
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-start">
          {/* Image */}
          <div
            className="bg-white border border-[#E5E1D6] rounded-3xl p-10 lg:p-14 flex items-center justify-center"
            style={{ aspectRatio: "1/1", boxShadow: "0 20px 50px -10px rgba(15,30,69,.1)" }}
          >
            <Image src={product.image} alt={product.name} width={500} height={500} className="max-w-full max-h-full w-auto h-auto object-contain" />
          </div>

          {/* Info */}
          <div>
            <span className={`mono inline-block px-2.5 py-1 rounded-md text-[10px] font-bold tracking-[0.12em] uppercase mb-5 ${tagCls[product.tagColor] || tagCls.blue}`}>
              {product.tag}
            </span>
            <p className="mono text-[11px] tracking-[0.16em] uppercase text-[#E32118] mb-3 font-semibold">{product.line}</p>
            <h1
              className="font-display"
              style={{
                fontSize: "clamp(34px,4.5vw,60px)",
                fontWeight: 700,
                letterSpacing: "-0.035em",
                lineHeight: 1.02,
                color: "#1B2C5E",
                marginBottom: "20px",
              }}
            >
              IMPADOC<br />
              <em style={{ fontStyle: "italic", fontWeight: 600, color: "#E32118" }}>
                {product.name}
              </em>
            </h1>
            <p style={{ fontSize: "17px", color: "#2A2823", lineHeight: 1.65, marginBottom: "32px" }}>
              {product.description}
            </p>

            {/* Features */}
            <div className="space-y-3 mb-8">
              {[
                "Certificado ICONTEC NTC 2775 — Norma técnica colombiana",
                "Fácil aplicación con herramientas tradicionales",
                "Excelente adherencia a superficies preparadas",
                "Apto para uso profesional e industrial",
              ].map(f => (
                <div key={f} className="flex items-start gap-3">
                  <CheckCircle size={15} className="text-[#E32118] flex-shrink-0 mt-0.5" />
                  <span style={{ fontSize: "14px", color: "#2A2823", lineHeight: 1.55 }}>{f}</span>
                </div>
              ))}
            </div>

            {/* PDF DOWNLOAD */}
            <div className="bg-white border border-[#E5E1D6] rounded-2xl p-5 mb-5">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white"
                    style={{ background: "#E32118" }}
                  >
                    <FileText size={20} />
                  </div>
                  <div>
                    <p
                      className="font-display"
                      style={{ fontSize: "15px", fontWeight: 700, color: "#1B2C5E", letterSpacing: "-0.02em" }}
                    >
                      Ficha técnica oficial
                    </p>
                    <p className="mono text-[10px] tracking-[0.14em] uppercase text-[#8E867B] mt-0.5">
                      PDF · {product.pdfSize}
                    </p>
                  </div>
                </div>
                <a
                  href={product.pdfUrl}
                  download
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-[13px] font-bold text-white transition-all hover:-translate-y-px flex-shrink-0"
                  style={{ background: "#1B2C5E" }}
                >
                  <Download size={14} /> Descargar
                </a>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex gap-3 flex-wrap">
              <a
                href={`https://api.whatsapp.com/send?phone=${COMPANY.whatsapp}&text=${encodeURIComponent(`Hola, quisiera información sobre ${product.name}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-[13px] font-bold text-white transition-all hover:-translate-y-px"
                style={{ background: "#25D366", boxShadow: "0 12px 30px rgba(37,211,102,.3)" }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
                Cotizar por WhatsApp
              </a>
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-[13px] font-bold border border-[#1B2C5E]/20 text-[#1B2C5E] hover:border-[#1B2C5E] hover:bg-white transition-colors"
              >
                <Phone size={14} /> Contactar un asesor
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs / Details */}
      <section className="py-20" style={{ background: "#EFEAE0" }}>
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12">
          {/* Aplicaciones */}
          <div>
            <p className="mono text-[11px] tracking-[0.18em] uppercase text-[#E32118] mb-3 font-semibold">— APLICACIONES</p>
            <h3
              className="font-display"
              style={{ fontSize: "28px", fontWeight: 700, color: "#1B2C5E", marginBottom: "24px", letterSpacing: "-0.03em" }}
            >
              ¿Dónde se usa este producto?
            </h3>
            <div className="space-y-3">
              {[
                "Construcción residencial y comercial",
                "Obras industriales y proyectos especiales",
                "Renovaciones y remodelaciones",
                "Sistemas certificados ICONTEC",
              ].map((a, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-4 rounded-xl border border-[#E5E1D6]"
                  style={{ background: "#F8F5EE" }}
                >
                  <div className="mono text-[#1B2C5E] opacity-50 font-bold text-sm w-6 flex-shrink-0">
                    0{i + 1}
                  </div>
                  <span style={{ fontSize: "14px", color: "#2A2823", lineHeight: 1.55 }}>{a}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Beneficios */}
          <div>
            <p className="mono text-[11px] tracking-[0.18em] uppercase text-[#E32118] mb-3 font-semibold">— BENEFICIOS</p>
            <h3
              className="font-display"
              style={{ fontSize: "28px", fontWeight: 700, color: "#1B2C5E", marginBottom: "24px", letterSpacing: "-0.03em" }}
            >
              ¿Por qué elegirlo?
            </h3>
            <div className="space-y-3">
              {[
                "Calidad certificada con respaldo de IMPADOC — 58+ años",
                "Fórmula desarrollada para el clima colombiano",
                "Asesoría técnica especializada incluida",
                "Disponible en toda la red de distribuidores nacionales",
              ].map((b, i) => (
                <div
                  key={i}
                  className="flex gap-3 p-4 rounded-xl border border-[#E5E1D6]"
                  style={{ background: "#F8F5EE" }}
                >
                  <CheckCircle size={16} className="text-[#1B2C5E] flex-shrink-0 mt-0.5" />
                  <span style={{ fontSize: "14px", color: "#2A2823", lineHeight: 1.55 }}>{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-20" style={{ background: "#F8F5EE" }}>
          <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
            <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
              <div>
                <p className="mono text-[11px] tracking-[0.18em] uppercase text-[#E32118] mb-3 font-semibold">— PRODUCTOS RELACIONADOS</p>
                <h2
                  className="font-display"
                  style={{
                    fontSize: "clamp(28px,3.5vw,42px)",
                    fontWeight: 700,
                    color: "#1B2C5E",
                    letterSpacing: "-0.035em",
                  }}
                >
                  También te puede{" "}
                  <em style={{ fontStyle: "italic", fontWeight: 600, color: "#E32118" }}>interesar</em>
                </h2>
              </div>
              <Link
                href={`/productos?cat=${product.category}`}
                className="mono text-[11px] tracking-[0.16em] uppercase text-[#8E867B] hover:text-[#1B2C5E] transition-colors flex items-center gap-2"
              >
                VER MÁS DE ESTA LÍNEA <ArrowRight size={13} />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {related.map(r => (
                <Link
                  key={r.slug}
                  href={`/productos/${r.slug}`}
                  className="group bg-white border border-[#E5E1D6] rounded-2xl overflow-hidden card-lift flex flex-col"
                >
                  <div className="bg-[#EFEAE0] aspect-[4/3] relative overflow-hidden">
                    <Image
                      src={r.image}
                      alt={r.name}
                      fill
                      className="object-contain p-5 transition-transform duration-500 group-hover:scale-[1.06]"
                    />
                  </div>
                  <div className="p-5">
                    <p className="mono text-[10px] tracking-[0.14em] uppercase text-[#E32118] mb-1.5 font-semibold">
                      {r.line}
                    </p>
                    <h3
                      className="font-display"
                      style={{
                        fontSize: "15px",
                        fontWeight: 700,
                        color: "#1B2C5E",
                        marginBottom: "6px",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      IMPADOC {r.name}
                    </h3>
                    <p
                      style={{ fontSize: "12.5px", color: "#8E867B", lineHeight: 1.55 }}
                      className="line-clamp-2"
                    >
                      {r.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
