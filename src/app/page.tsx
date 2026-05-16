import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, Shield, Globe, Users, Zap, CheckCircle,
  Download, Phone, Mail, Play, Award, Factory,
  HardHat, Wrench, Sparkles, Building2
} from "lucide-react";
import {
  PRODUCTS, OFFICES, BLOG_POSTS, COMPANY,
  TUTORIAL_VIDEOS, PRODUCT_LINES
} from "@/data/site";

export const metadata: Metadata = {
  title: "IMPADOC — Materiales que Construyen Confianza",
  description: "Más de 58 años fabricando sistemas de acabados, morteros y minerales para construcción. Norma ICONTEC NTC 2775.",
};

/* ════════════════════════════════════════════
   Shared primitives — Brand System 2026
   ════════════════════════════════════════════ */
function Eyebrow({ t, light }: { t: string; light?: boolean }) {
  return <p className={`eyebrow ${light ? "light" : ""}`}>{t}</p>;
}

function H2({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <h2
      className="font-display"
      style={{
        fontSize: "clamp(30px,3.8vw,52px)",
        fontWeight: 700,
        letterSpacing: "-0.035em",
        lineHeight: 1.04,
        color: light ? "#fff" : "#1B2C5E",
      }}
    >
      {children}
    </h2>
  );
}

function Btn({
  href, children, variant = "primary", ext,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "accent" | "ghost" | "light" | "dark-ghost" | "whatsapp";
  ext?: boolean;
}) {
  const v: Record<string, string> = {
    primary:      "bg-[#1B2C5E] text-white hover:bg-[#0F1E45] shadow-blue",
    accent:       "bg-[#E32118] text-white hover:bg-[#FF2E25] shadow-red",
    ghost:        "border border-[#1B2C5E]/20 text-[#1B2C5E] hover:border-[#1B2C5E] hover:bg-white",
    light:        "bg-white text-[#1B2C5E] hover:bg-[#F8F5EE]",
    "dark-ghost": "border border-white/25 text-white hover:border-white/50 hover:bg-white/[0.05]",
    whatsapp:     "bg-[#25D366] text-white hover:bg-[#1eb557] shadow-[0_12px_30px_rgba(37,211,102,.3)]",
  };
  const cls = `inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-[13.5px] font-bold transition-all duration-200 hover:-translate-y-px ${v[variant]}`;
  if (ext) return <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{children}</a>;
  return <Link href={href} className={cls}>{children}</Link>;
}

const tagCls: Record<string, string> = {
  blue:  "bg-[#1B2C5E] text-white",
  red:   "bg-[#E32118] text-white",
  green: "bg-[#1A7A4A] text-white",
};

const lineColorCls: Record<string, { ring: string; text: string; bg: string }> = {
  blue:  { ring: "ring-[#1B2C5E]/15",  text: "text-[#1B2C5E]",  bg: "bg-[#1B2C5E]"  },
  red:   { ring: "ring-[#E32118]/15",  text: "text-[#E32118]",  bg: "bg-[#E32118]"  },
  clay:  { ring: "ring-[#C25B3F]/15",  text: "text-[#C25B3F]",  bg: "bg-[#C25B3F]"  },
  moss:  { ring: "ring-[#4F5A3C]/15",  text: "text-[#4F5A3C]",  bg: "bg-[#4F5A3C]"  },
};

const ticker = [
  "ACABADOS INTERIORES",
  "SISTEMA DRYWALL",
  "IMPERMEABILIZANTES",
  "ACABADOS EXTERIORES",
  "LÍNEA ACRÍLICA",
  "INSTALACIÓN DE PISOS",
  "MINERALES INDUSTRIALES",
  "ASESORÍA TÉCNICA",
  "ICONTEC NTC 2775",
  "COBERTURA NACIONAL",
];

export default function HomePage() {
  return (
    <>
      {/* ════════════════════════════════════════════
          HERO — full-bleed cinematic, premium
          ════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden pt-[150px] lg:pt-[170px] pb-0"
        style={{ background: "#F8F5EE" }}
      >
        <div className="grid-tex absolute inset-0 opacity-50 pointer-events-none" />

        {/* Decorative side mountain mark */}
        <div className="absolute -right-24 -top-24 w-[520px] h-[520px] pointer-events-none opacity-[0.04]">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <path d="M20 180 L80 30 L140 180 Z" fill="#1B2C5E" />
            <path d="M5 180 L42 60 L52 80 L30 180 Z" fill="#E32118" />
          </svg>
        </div>

        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 relative z-10">
          {/* Meta line */}
          <div className="flex items-center justify-between mb-8 lg:mb-10 mono text-[10.5px] text-[#8E867B] uppercase tracking-[0.18em] flex-wrap gap-3">
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E32118] pulse-dot" />
              <span className="text-[#15130F] font-medium">VOL · 2026 · LÍNEA ESTRELLA</span>
            </div>
            <span>CALI · COL — ICONTEC NTC 2775</span>
          </div>

          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-14 items-end">
            {/* Left: Title + CTAs */}
            <div className="pb-8 lg:pb-16">
              <h1
                className="font-display"
                style={{
                  fontSize: "clamp(48px,7.2vw,98px)",
                  fontWeight: 700,
                  letterSpacing: "-0.045em",
                  lineHeight: 0.96,
                  color: "#1B2C5E",
                }}
              >
                Materiales
                <br />
                que{" "}
                <em
                  style={{
                    fontStyle: "italic",
                    fontWeight: 600,
                    color: "transparent",
                    WebkitTextStroke: "1.5px #1B2C5E",
                  }}
                >
                  construyen
                </em>
                <br />
                <span style={{ color: "#E32118" }}>confianza.</span>
              </h1>

              <p
                className="mt-7 font-sans-body"
                style={{
                  fontSize: "17px",
                  lineHeight: 1.6,
                  color: "#2A2823",
                  maxWidth: "500px",
                  fontWeight: 400,
                }}
              >
                Sistemas completos de estuco, drywall e impermeabilización fabricados en Cali bajo norma ICONTEC NTC 2775. Asesoría técnica en obra sin costo.
              </p>

              <div className="flex gap-3 flex-wrap mt-8">
                <Btn href="/productos" variant="accent">
                  Explorar catálogo <ArrowRight size={14} />
                </Btn>
                <Btn href="/asesoria-tecnica" variant="ghost">
                  Asesoría técnica
                </Btn>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-4 gap-4 mt-12 pt-8 border-t border-[#15130F]/10 max-w-[560px]">
                {[
                  { v: "58+",   l: "AÑOS DE\nOFICIO" },
                  { v: "300+",  l: "DISTRIBUIDORES\nNACIONALES" },
                  { v: "4",     l: "SEDES\nLOGÍSTICAS" },
                  { v: "NTC\n2775", l: "ICONTEC\n2025" },
                ].map(s => (
                  <div key={s.l}>
                    <p
                      className="font-display"
                      style={{
                        fontSize: "26px",
                        fontWeight: 700,
                        letterSpacing: "-0.04em",
                        color: "#1B2C5E",
                        lineHeight: 1,
                        whiteSpace: "pre-line",
                      }}
                    >
                      {s.v}
                    </p>
                    <p
                      className="mono mt-1.5 text-[9.5px] tracking-[0.12em] uppercase text-[#8E867B] leading-tight"
                      style={{ whiteSpace: "pre-line" }}
                    >
                      {s.l}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Architectural hero image — large, dominant */}
            <div className="relative">
              <div
                className="relative w-full rounded-[28px] overflow-hidden"
                style={{
                  aspectRatio: "3/4",
                  minHeight: "560px",
                  background: "#E7E1D2",
                  boxShadow: "0 40px 100px -10px rgba(15,30,69,.28), 0 16px 40px -6px rgba(15,30,69,.18)",
                }}
              >
                <Image
                  src="/images/fachada-impatextura.jpg"
                  alt="Fachada arquitectónica con sistema IMPADOC"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <div className="absolute inset-0 img-overlay pointer-events-none" />

                {/* Top label */}
                <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                  <span
                    className="mono text-[10px] tracking-[0.14em] uppercase px-3 py-1.5 rounded-md text-white"
                    style={{ background: "rgba(15,30,69,0.7)", backdropFilter: "blur(8px)" }}
                  >
                    SISTEMA · 01 / IMPATEXTURA
                  </span>
                  <span
                    className="mono text-[10px] tracking-[0.14em] uppercase px-3 py-1.5 rounded-md text-white"
                    style={{ background: "rgba(227,33,24,0.85)", backdropFilter: "blur(8px)" }}
                  >
                    FACHADA · PREMIUM
                  </span>
                </div>

                {/* Bottom info card */}
                <div
                  className="absolute left-5 right-5 bottom-5 rounded-2xl p-5 flex items-center gap-5"
                  style={{
                    background: "rgba(248,245,238,0.94)",
                    backdropFilter: "blur(14px)",
                    border: "1px solid rgba(255,255,255,0.5)",
                  }}
                >
                  <div className="flex-1">
                    <p className="mono text-[9.5px] tracking-[0.16em] uppercase text-[#8E867B] mb-1.5">
                      ACABADO · ALTO DESEMPEÑO
                    </p>
                    <p
                      className="font-display"
                      style={{
                        fontSize: "17px",
                        fontWeight: 700,
                        color: "#1B2C5E",
                        letterSpacing: "-0.025em",
                        lineHeight: 1.15,
                      }}
                    >
                      Impatextura Acrílico
                    </p>
                  </div>
                  <Link
                    href="/productos/impatextura-acrilico"
                    className="w-11 h-11 rounded-full bg-[#E32118] text-white flex items-center justify-center hover:bg-[#FF2E25] transition-colors flex-shrink-0"
                    aria-label="Ver producto"
                  >
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              {/* Floating badge */}
              <div
                className="hidden lg:flex absolute -left-6 top-1/3 -translate-y-1/2 flex-col items-center gap-2 rounded-2xl px-4 py-5"
                style={{
                  background: "#1B2C5E",
                  boxShadow: "0 18px 40px rgba(15,30,69,.3)",
                  transform: "rotate(-4deg)",
                }}
              >
                <Award size={20} className="text-[#E32118]" />
                <p
                  className="font-display text-white text-center leading-tight"
                  style={{ fontSize: "20px", fontWeight: 700, letterSpacing: "-0.02em" }}
                >
                  58<br />años
                </p>
                <p className="mono text-[8.5px] tracking-[0.18em] uppercase text-white/60">
                  DE OFICIO
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Ticker — Brand System 06 (diagonal application pattern) */}
        <div
          className="mt-16 lg:mt-20 py-5 overflow-hidden relative"
          style={{ background: "#0F1E45" }}
        >
          <div className="flex gap-12 ticker-anim w-max">
            {[...ticker, ...ticker, ...ticker].map((t, i) => (
              <span
                key={i}
                className="flex items-center gap-4 mono text-[11px] tracking-[0.18em] uppercase text-white/55 whitespace-nowrap"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#E32118]" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          ACABADOS — Líneas de producto (estructura oficial)
          ════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28" style={{ background: "#F8F5EE" }} id="productos">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between gap-8 mb-12 lg:mb-16 flex-wrap">
            <div className="flex flex-col gap-5 max-w-[720px]">
              <Eyebrow t="CATÁLOGO DE PRODUCTOS · 2026" />
              <H2>
                Sistemas de acabado<br />
                <em
                  style={{
                    fontStyle: "italic",
                    fontWeight: 600,
                    color: "transparent",
                    WebkitTextStroke: "1.2px #1B2C5E",
                  }}
                >
                  para construcción
                </em>
              </H2>
              <p style={{ fontSize: "16px", color: "#2A2823", lineHeight: 1.65, maxWidth: "580px" }}>
                Siete líneas de producto certificadas ICONTEC. De interiores artesanales a impermeabilización industrial — un sistema completo para cada superficie.
              </p>
            </div>
            <Link
              href="/productos"
              className="hidden md:flex items-center gap-2 mono text-[11px] tracking-[0.16em] uppercase text-[#8E867B] hover:text-[#1B2C5E] transition-colors link-under"
            >
              VER TODOS LOS PRODUCTOS <ArrowRight size={13} />
            </Link>
          </div>

          {/* Lines grid — hero card + 6 supporting cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {/* Featured line (Interiores) — spans 2 cols, 2 rows on lg */}
            {(() => {
              const featured = PRODUCT_LINES[0];
              return (
                <Link
                  href={featured.href}
                  className="group relative overflow-hidden rounded-3xl lg:row-span-2 lg:col-span-2 bg-white card-lift border border-[#E5E1D6]"
                >
                  <div className="absolute inset-0">
                    <Image
                      src={featured.image}
                      alt={featured.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(15,30,69,0.15) 0%, rgba(15,30,69,0.45) 60%, rgba(15,30,69,0.85) 100%)",
                      }}
                    />
                  </div>
                  <div className="relative aspect-[16/12] lg:aspect-[16/20] flex flex-col justify-between p-6 lg:p-10">
                    <div className="flex items-start justify-between">
                      <span
                        className="mono text-[10px] tracking-[0.18em] uppercase px-3 py-1.5 rounded-md text-white"
                        style={{ background: "rgba(227,33,24,0.9)" }}
                      >
                        LÍNEA ESTRELLA
                      </span>
                      <span className="mono text-[10px] tracking-[0.16em] uppercase text-white/65">
                        {featured.eyebrow}
                      </span>
                    </div>
                    <div>
                      <p className="mono text-[10.5px] tracking-[0.16em] uppercase text-white/65 mb-3">
                        {featured.count} PRODUCTOS · ICONTEC
                      </p>
                      <h3
                        className="font-display text-white mb-4"
                        style={{
                          fontSize: "clamp(28px,3vw,40px)",
                          fontWeight: 700,
                          letterSpacing: "-0.03em",
                          lineHeight: 1.05,
                        }}
                      >
                        {featured.title}
                      </h3>
                      <p
                        className="text-white/80 mb-6"
                        style={{
                          fontSize: "15px",
                          lineHeight: 1.6,
                          maxWidth: "440px",
                        }}
                      >
                        {featured.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {featured.featured.map(f => (
                          <span
                            key={f}
                            className="px-3 py-1.5 rounded-lg text-[12px] font-semibold text-white"
                            style={{
                              background: "rgba(255,255,255,0.13)",
                              backdropFilter: "blur(6px)",
                              border: "1px solid rgba(255,255,255,0.18)",
                            }}
                          >
                            {f}
                          </span>
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-2 mono text-[11px] tracking-[0.18em] uppercase text-white font-semibold group-hover:gap-3 transition-all">
                        EXPLORAR LÍNEA
                        <span className="w-8 h-8 rounded-full bg-[#E32118] flex items-center justify-center">
                          <ArrowRight size={13} />
                        </span>
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })()}

            {/* Supporting lines */}
            {PRODUCT_LINES.slice(1).map(line => {
              const c = lineColorCls[line.color] || lineColorCls.blue;
              return (
                <Link
                  key={line.id}
                  href={line.href}
                  className="group relative overflow-hidden rounded-3xl bg-white card-lift border border-[#E5E1D6]"
                >
                  <div className="aspect-[4/3] overflow-hidden relative bg-[#E7E1D2]">
                    <Image
                      src={line.image}
                      alt={line.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E45]/55 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span
                        className={`mono text-[9.5px] tracking-[0.18em] uppercase px-2.5 py-1 rounded-md text-white ${c.bg}`}
                      >
                        {line.eyebrow}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-white text-[#1B2C5E] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                      <ArrowRight size={14} />
                    </div>
                  </div>
                  <div className="p-5 lg:p-6">
                    <p className={`mono text-[10px] tracking-[0.14em] uppercase mb-1.5 ${c.text}`}>
                      {line.count} PRODUCTOS
                    </p>
                    <h3
                      className="font-display mb-2"
                      style={{
                        fontSize: "19px",
                        fontWeight: 700,
                        color: "#1B2C5E",
                        letterSpacing: "-0.025em",
                        lineHeight: 1.15,
                      }}
                    >
                      {line.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "13px",
                        color: "#8E867B",
                        lineHeight: 1.55,
                      }}
                      className="line-clamp-2 mb-4"
                    >
                      {line.description}
                    </p>
                    <div className="pt-3 border-t border-[#E5E1D6] flex items-center justify-between">
                      <span className="mono text-[10px] tracking-[0.12em] uppercase text-[#8E867B]">
                        Ver línea
                      </span>
                      <ArrowRight size={12} className={`${c.text} group-hover:translate-x-1 transition-transform`} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          PRODUCTOS ESTRELLA
          ════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28" style={{ background: "#EFEAE0" }}>
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between gap-8 mb-12 flex-wrap">
            <div className="flex flex-col gap-5 max-w-[680px]">
              <Eyebrow t="PRODUCTOS DESTACADOS" />
              <H2>
                Línea estrella<br />
                <em style={{ fontStyle: "italic", fontWeight: 600, color: "#E32118" }}>
                  acabados 2026
                </em>
              </H2>
            </div>
            <Link
              href="/productos"
              className="hidden md:flex items-center gap-2 mono text-[11px] tracking-[0.16em] uppercase text-[#8E867B] hover:text-[#1B2C5E] transition-colors link-under"
            >
              VER CATÁLOGO COMPLETO <ArrowRight size={13} />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {PRODUCTS.slice(0, 8).map(p => (
              <article
                key={p.slug}
                className="group bg-[#F8F5EE] border border-[#E5E1D6] rounded-2xl overflow-hidden card-lift flex flex-col"
              >
                <Link
                  href={`/productos/${p.slug}`}
                  className="block bg-white overflow-hidden relative border-b border-[#E5E1D6]"
                  style={{ aspectRatio: "1/1" }}
                >
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-contain p-5 transition-transform duration-500 group-hover:scale-[1.06]"
                  />
                  <span
                    className={`absolute top-3 left-3 px-2 py-1 rounded-md text-[9px] font-extrabold tracking-[0.1em] uppercase ${
                      tagCls[p.tagColor] || tagCls.blue
                    }`}
                  >
                    {p.tag}
                  </span>
                </Link>
                <div className="p-4 lg:p-5 flex flex-col flex-1">
                  <p className="mono text-[9.5px] tracking-[0.14em] uppercase text-[#8E867B] mb-1.5">
                    {p.line}
                  </p>
                  <Link href={`/productos/${p.slug}`}>
                    <h3
                      className="font-display hover:text-[#E32118] transition-colors"
                      style={{
                        fontSize: "15px",
                        fontWeight: 700,
                        color: "#1B2C5E",
                        lineHeight: 1.2,
                        marginBottom: "6px",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {p.name}
                    </h3>
                  </Link>
                  <p
                    style={{ fontSize: "12.5px", color: "#8E867B", lineHeight: 1.55, flex: 1 }}
                    className="line-clamp-2"
                  >
                    {p.description}
                  </p>
                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-[#E5E1D6]">
                    <a
                      href={p.pdfUrl}
                      download
                      className="flex items-center gap-1.5 mono text-[10px] tracking-[0.1em] uppercase text-[#8E867B] hover:text-[#E32118] transition-colors"
                    >
                      <Download size={11} /> FICHA
                    </a>
                    <Link
                      href={`/productos/${p.slug}`}
                      className="mono text-[10px] tracking-[0.1em] uppercase text-[#1B2C5E] font-semibold flex items-center gap-1.5 group-hover:gap-2.5 transition-all"
                    >
                      Ver <ArrowRight size={11} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          ESENCIA — Brand System principles
          ════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 relative overflow-hidden" style={{ background: "#1B2C5E" }}>
        <div className="grid-tex-dark absolute inset-0 opacity-60 pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 70% at 20% 50%, rgba(227,33,24,.18), transparent 70%)",
          }}
        />

        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 relative z-10">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">
            <div>
              <Eyebrow t="LA ESENCIA DE IMPADOC" light />
              <H2 light>
                Somos el material<br />
                entre el plano<br />
                <em style={{ fontStyle: "italic", fontWeight: 600, color: "#E32118" }}>
                  y la obra construida.
                </em>
              </H2>
              <p
                className="mt-7 max-w-[460px]"
                style={{ fontSize: "16px", color: "rgba(255,255,255,0.7)", lineHeight: 1.7 }}
              >
                Desde 1968 desarrollamos sistemas de acabados, morteros y minerales industriales. Hablamos del oficio que se requiere para usarlos bien. Riguroso, técnico, paciente.
              </p>
              <div className="flex gap-3 flex-wrap mt-8">
                <Btn href="/nosotros" variant="light">
                  Conocer la empresa <ArrowRight size={13} />
                </Btn>
                <Btn href="/asesoria-tecnica" variant="dark-ghost">
                  Asesoría técnica
                </Btn>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                {
                  n: "01",
                  t: "Oficio",
                  d: "El diseño se construye como una pared: capa sobre capa, sin atajos. Cada decisión tiene fundamento técnico.",
                  icon: <HardHat size={20} />,
                },
                {
                  n: "02",
                  t: "Aplomo",
                  d: "Tono sereno, equilibrado, sin estridencias. La marca no grita; se sostiene en su propio peso.",
                  icon: <Building2 size={20} />,
                },
                {
                  n: "03",
                  t: "Materia",
                  d: "Texturas honestas: yeso, cemento, arcilla y arena. El sistema cromático nace del muro, no de la pantalla.",
                  icon: <Factory size={20} />,
                },
                {
                  n: "04",
                  t: "Precisión",
                  d: "Retículas, datos y fichas. Lo decorativo está al servicio de lo medible — un milímetro, un kilo, una hora de secado.",
                  icon: <Wrench size={20} />,
                },
              ].map(p => (
                <div
                  key={p.n}
                  className="p-6 rounded-2xl transition-all hover:bg-white/[0.04]"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#E32118] text-white flex items-center justify-center">
                      {p.icon}
                    </div>
                    <span className="mono text-[10px] tracking-[0.18em] uppercase text-[#E32118] font-semibold">
                      {p.n} · PRINCIPIO
                    </span>
                  </div>
                  <h4
                    className="font-display text-white mb-2"
                    style={{ fontSize: "22px", fontWeight: 700, letterSpacing: "-0.025em" }}
                  >
                    {p.t}
                  </h4>
                  <p
                    style={{ fontSize: "13.5px", color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}
                  >
                    {p.d}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          ABOUT — plant + team
          ════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28" style={{ background: "#F8F5EE" }} id="nosotros">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div
              className="rounded-3xl overflow-hidden"
              style={{
                aspectRatio: "4/3",
                boxShadow: "0 30px 60px -10px rgba(15,30,69,.25)",
              }}
            >
              <Image
                src="/images/planta-aerea.jpg"
                alt="Planta IMPADOC Cali"
                fill
                className="object-cover"
              />
            </div>
            <div
              className="absolute -bottom-6 -right-6 hidden lg:flex items-center gap-4 px-5 py-4 rounded-2xl border border-[#E5E1D6]"
              style={{
                background: "rgba(248,245,238,.96)",
                backdropFilter: "blur(12px)",
                boxShadow: "0 18px 40px rgba(15,30,69,.12)",
              }}
            >
              <div className="w-12 h-12 rounded-xl bg-[#1B2C5E] flex items-center justify-center text-white">
                <Users size={18} />
              </div>
              <div>
                <p
                  className="font-display"
                  style={{ fontSize: "20px", fontWeight: 700, color: "#1B2C5E", lineHeight: 1 }}
                >
                  200<span style={{ color: "#E32118" }}>+</span>
                </p>
                <p className="mono text-[10px] tracking-[0.14em] uppercase text-[#8E867B] mt-1">
                  COLABORADORES
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <Eyebrow t="NUESTRA EMPRESA" />
            <H2>
              Más de 58 años<br />
              construyendo{" "}
              <em style={{ fontStyle: "italic", fontWeight: 600, color: "#E32118" }}>Colombia</em>
            </H2>
            <p
              className="mt-6"
              style={{
                fontSize: "16px",
                color: "#2A2823",
                lineHeight: 1.7,
                maxWidth: "480px",
              }}
            >
              IMPADOC es una empresa colombiana líder en sistemas de acabados para la construcción. Fabricamos con estándares internacionales desde nuestra planta principal en Cali, Valle del Cauca.
            </p>
            <div className="mt-8 space-y-3">
              {[
                "Certificación ICONTEC NTC 2775 permanente en todos los productos",
                "4 sedes logísticas — Cali, Bogotá, Barranquilla y Rionegro",
                "Más de 300 puntos de venta autorizados a nivel nacional",
                "Asesoría técnica especializada sin costo en obra",
              ].map(v => (
                <div key={v} className="flex items-start gap-3">
                  <CheckCircle size={15} className="text-[#E32118] flex-shrink-0 mt-0.5" />
                  <span style={{ fontSize: "14px", color: "#2A2823", lineHeight: 1.55 }}>{v}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-3 flex-wrap mt-10">
              <Btn href="/nosotros" variant="primary">
                Conocer más <ArrowRight size={13} />
              </Btn>
              <Btn href="/trabaja-con-nosotros" variant="ghost">
                Trabaja con nosotros
              </Btn>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          CERTIFICATIONS
          ════════════════════════════════════════════ */}
      <section className="py-16 lg:py-20" style={{ background: "#EFEAE0" }}>
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-10 lg:mb-12">
            <div className="flex justify-center">
              <Eyebrow t="CERTIFICACIONES Y RESPALDO" />
            </div>
            <div className="mt-5">
              <H2>
                Calidad{" "}
                <em style={{ fontStyle: "italic", fontWeight: 600, color: "#E32118" }}>
                  comprobada
                </em>
              </H2>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { img: "/images/icontec.jpg",  t: "ICONTEC 2025",      s: "Norma técnica NTC 2775" },
              { img: "/images/sello-55.jpg", t: "58+ años",          s: "Empresa colombiana 1968" },
            ].map((c, i) => (
              <div
                key={i}
                className="bg-[#F8F5EE] border border-[#E5E1D6] rounded-2xl p-5 lg:p-6 flex items-center gap-4 card-lift"
              >
                <div className="flex-shrink-0">
                  <Image src={c.img} alt={c.t} width={80} height={80} className="h-14 lg:h-16 w-auto" />
                </div>
                <div>
                  <p
                    className="font-display"
                    style={{
                      fontSize: "14px",
                      fontWeight: 700,
                      color: "#1B2C5E",
                      lineHeight: 1.25,
                      marginBottom: "4px",
                      letterSpacing: "-0.015em",
                    }}
                  >
                    {c.t}
                  </p>
                  <p className="mono text-[9.5px] tracking-[0.12em] uppercase text-[#8E867B]">
                    {c.s}
                  </p>
                </div>
              </div>
            ))}
            {[
              { icon: <Shield size={22} />, t: "100% Colombiano",   s: "Fabricación nacional" },
              { icon: <Globe size={22} />,  t: "Cobertura Nacional", s: "4 sedes + 300 puntos" },
            ].map((c, i) => (
              <div
                key={i}
                className="bg-[#F8F5EE] border border-[#E5E1D6] rounded-2xl p-5 lg:p-6 flex items-center gap-4 card-lift"
              >
                <div className="w-14 h-14 rounded-xl bg-[#1B2C5E] flex items-center justify-center text-[#E32118] flex-shrink-0">
                  {c.icon}
                </div>
                <div>
                  <p
                    className="font-display"
                    style={{
                      fontSize: "14px",
                      fontWeight: 700,
                      color: "#1B2C5E",
                      lineHeight: 1.25,
                      marginBottom: "4px",
                      letterSpacing: "-0.015em",
                    }}
                  >
                    {c.t}
                  </p>
                  <p className="mono text-[9.5px] tracking-[0.12em] uppercase text-[#8E867B]">
                    {c.s}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          VIDEOS — YouTube tutorials
          ════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28" style={{ background: "#F8F5EE" }} id="videos">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between gap-8 mb-12 flex-wrap">
            <div className="flex flex-col gap-5 max-w-[640px]">
              <Eyebrow t="ACADEMIA TÉCNICA" />
              <H2>
                Videos y{" "}
                <em style={{ fontStyle: "italic", fontWeight: 600, color: "#E32118" }}>
                  tutoriales
                </em>
              </H2>
              <p style={{ fontSize: "16px", color: "#2A2823", lineHeight: 1.65 }}>
                Aprende a aplicar correctamente nuestros productos con la guía de nuestros expertos técnicos.
              </p>
            </div>
            <a
              href={COMPANY.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 mono text-[11px] tracking-[0.16em] uppercase text-[#8E867B] hover:text-[#E32118] transition-colors link-under"
            >
              VER CANAL DE YOUTUBE <ArrowRight size={13} />
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TUTORIAL_VIDEOS.map(v => (
              <a
                key={v.id}
                href={`https://www.youtube.com/watch?v=${v.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-[#EFEAE0] border border-[#E5E1D6] rounded-2xl overflow-hidden card-lift"
              >
                <div className="aspect-video overflow-hidden relative bg-[#1B2C5E]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`}
                    alt={v.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04] opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E45]/70 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center transition-all group-hover:scale-110"
                      style={{
                        background: "#E32118",
                        boxShadow: "0 8px 28px rgba(227,33,24,.5)",
                      }}
                    >
                      <Play size={22} className="text-white ml-1" fill="currentColor" />
                    </div>
                  </div>
                  <span className="absolute bottom-3 right-3 mono text-[10px] font-bold tracking-[0.06em] px-2 py-0.5 rounded bg-[#0F1E45]/90 text-white">
                    {v.duration}
                  </span>
                </div>
                <div className="p-5">
                  <p className="mono text-[10px] tracking-[0.14em] uppercase text-[#E32118] mb-2">
                    {v.category}
                  </p>
                  <h3
                    className="font-display"
                    style={{
                      fontSize: "15px",
                      fontWeight: 700,
                      color: "#1B2C5E",
                      lineHeight: 1.3,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {v.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          ADVISORY CTA — dark
          ════════════════════════════════════════════ */}
      <section
        className="py-20 lg:py-28 relative overflow-hidden"
        style={{ background: "#0F1E45" }}
        id="asesoria"
      >
        <div className="grid-tex-dark absolute inset-0 opacity-50 pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 60% 70% at 80% 50%, rgba(227,33,24,.18), transparent 70%)",
          }}
        />
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 relative z-10 grid lg:grid-cols-[1fr_360px] gap-12 lg:gap-20 items-center">
          <div>
            <Eyebrow t="ASESORÍA TÉCNICA" light />
            <H2 light>
              Expertos técnicos<br />
              <em style={{ fontStyle: "italic", fontWeight: 600, color: "#E32118" }}>
                en tu obra
              </em>
            </H2>
            <p
              className="mt-6 mb-8"
              style={{
                fontSize: "16px",
                color: "rgba(255,255,255,.65)",
                lineHeight: 1.7,
                maxWidth: "500px",
              }}
            >
              Nuestros ingenieros y técnicos especializados te acompañan en cada etapa del proceso constructivo, sin costo adicional.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { t: "Visita técnica en obra",    d: "Asesoría presencial gratuita" },
                { t: "Fichas técnicas PDF",       d: "Descarga directa desde el sitio" },
                { t: "Capacitaciones gratis",     d: "Para aplicadores y distribuidores" },
                { t: "Soporte en línea",          d: "WhatsApp, teléfono y video" },
              ].map(f => (
                <div
                  key={f.t}
                  className="flex gap-3 p-4 rounded-xl border border-white/10"
                  style={{ background: "rgba(255,255,255,.04)" }}
                >
                  <Shield size={14} className="text-[#E32118] flex-shrink-0 mt-1" />
                  <div>
                    <h5
                      className="font-display"
                      style={{
                        fontSize: "13.5px",
                        fontWeight: 700,
                        color: "rgba(255,255,255,.94)",
                        marginBottom: "3px",
                        letterSpacing: "-0.015em",
                      }}
                    >
                      {f.t}
                    </h5>
                    <p style={{ fontSize: "12px", color: "rgba(255,255,255,.5)", lineHeight: 1.5 }}>
                      {f.d}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="rounded-3xl p-8 lg:p-9 text-center border border-white/12"
            style={{ background: "rgba(255,255,255,.05)", backdropFilter: "blur(8px)" }}
          >
            <div className="w-14 h-14 rounded-2xl bg-[#E32118] flex items-center justify-center mx-auto mb-5">
              <Sparkles size={22} className="text-white" />
            </div>
            <p
              className="font-display"
              style={{
                fontSize: "20px",
                fontWeight: 700,
                color: "#fff",
                marginBottom: "8px",
                letterSpacing: "-0.025em",
              }}
            >
              ¿Tienes un proyecto?
            </p>
            <p
              className="mb-7"
              style={{ fontSize: "13.5px", color: "rgba(255,255,255,.55)", lineHeight: 1.55 }}
            >
              Solicita asesoría sin costo y recibe respuesta en menos de 24 horas.
            </p>
            <a
              href={`https://api.whatsapp.com/send?phone=${COMPANY.whatsapp}&text=${encodeURIComponent("Hola, necesito asesoría técnica para mi proyecto")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 w-full px-5 py-3.5 rounded-xl font-bold text-[13.5px] text-white mb-3 transition-all hover:-translate-y-px"
              style={{ background: "#25D366", boxShadow: "0 12px 30px rgba(37,211,102,.3)" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
              </svg>
              Escríbenos por WhatsApp
            </a>
            <Link
              href="/asesoria-tecnica"
              className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl text-[13px] font-semibold border border-white/20 text-white/75 hover:text-white hover:border-white/40 transition-colors"
            >
              Formulario de solicitud
            </Link>
            <p className="mono text-[10px] tracking-[0.14em] uppercase text-white/30 mt-5">
              Respuesta &lt; 24 HORAS
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          LOCATIONS
          ════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28" style={{ background: "#F8F5EE" }} id="sedes">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between gap-8 mb-12 flex-wrap">
            <div className="flex flex-col gap-5">
              <Eyebrow t="PRESENCIA NACIONAL" />
              <H2>
                Cuatro sedes,<br />
                <em style={{ fontStyle: "italic", fontWeight: 600, color: "#E32118" }}>
                  toda Colombia
                </em>
              </H2>
            </div>
            <Link
              href="/distribuidores"
              className="hidden md:flex items-center gap-2 mono text-[11px] tracking-[0.16em] uppercase text-[#8E867B] hover:text-[#1B2C5E] transition-colors link-under"
            >
              VER DISTRIBUIDORES <ArrowRight size={13} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {OFFICES.map(o => (
              <div
                key={o.city}
                className="bg-[#EFEAE0] border border-[#E5E1D6] rounded-2xl p-6 card-lift"
              >
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  <h3
                    className="font-display"
                    style={{
                      fontSize: "17px",
                      fontWeight: 700,
                      color: "#1B2C5E",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {o.city}
                  </h3>
                  {o.badge && (
                    <span className="mono text-[9px] tracking-[0.12em] uppercase bg-[#E32118] text-white px-2 py-0.5 rounded-md font-bold">
                      {o.badge}
                    </span>
                  )}
                </div>
                <p
                  style={{
                    fontSize: "12.5px",
                    color: "#8E867B",
                    lineHeight: 1.6,
                    whiteSpace: "pre-line",
                    marginBottom: "16px",
                  }}
                >
                  {o.address}
                </p>
                <div className="h-px mb-4 bg-[#E5E1D6]" />
                <div className="space-y-2">
                  <a
                    href={`tel:${o.tel}`}
                    className="flex items-center gap-2 text-[12.5px] text-[#15130F] hover:text-[#E32118] transition-colors"
                  >
                    <Phone size={11} className="text-[#1B2C5E]" /> {o.phone}
                  </a>
                  <a
                    href={`mailto:${o.email}`}
                    className="flex items-center gap-2 text-[12.5px] text-[#15130F] hover:text-[#E32118] transition-colors"
                  >
                    <Mail size={11} className="text-[#1B2C5E]" /> {o.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          BLOG
          ════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28" style={{ background: "#EFEAE0" }}>
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
            <div className="flex flex-col gap-5">
              <Eyebrow t="BLOG TÉCNICO" />
              <H2>
                Novedades y<br />
                <em style={{ fontStyle: "italic", fontWeight: 600, color: "#E32118" }}>
                  guías técnicas
                </em>
              </H2>
            </div>
            <Link
              href="/blog"
              className="hidden md:flex items-center gap-2 mono text-[11px] tracking-[0.16em] uppercase text-[#8E867B] hover:text-[#1B2C5E] transition-colors link-under"
            >
              VER TODOS <ArrowRight size={13} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[1.7fr_1fr_1fr] gap-5">
            {BLOG_POSTS.slice(0, 3).map((p, i) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group bg-[#F8F5EE] border border-[#E5E1D6] rounded-2xl overflow-hidden card-lift flex flex-col"
              >
                <div
                  className={`overflow-hidden relative ${i === 0 ? "aspect-video" : "aspect-[3/2]"}`}
                >
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E45]/45 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md text-[9.5px] font-bold tracking-[0.1em] uppercase bg-[#F8F5EE] text-[#1B2C5E]">
                      {p.category}
                    </span>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3
                    className="font-display"
                    style={{
                      fontSize: i === 0 ? "18px" : "15px",
                      fontWeight: 700,
                      color: "#1B2C5E",
                      lineHeight: 1.25,
                      marginBottom: "8px",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {p.title}
                  </h3>
                  {i === 0 && (
                    <p
                      style={{
                        fontSize: "13.5px",
                        color: "#8E867B",
                        lineHeight: 1.6,
                        marginBottom: "12px",
                        flex: 1,
                      }}
                      className="line-clamp-2"
                    >
                      {p.excerpt}
                    </p>
                  )}
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#E5E1D6]">
                    <span className="mono text-[10px] tracking-[0.12em] uppercase text-[#8E867B]">
                      {p.date} · {p.readTime}
                    </span>
                    <ArrowRight
                      size={12}
                      className="text-[#E32118] group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
