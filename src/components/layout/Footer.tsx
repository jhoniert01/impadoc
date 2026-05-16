import Link from "next/link";
import Image from "next/image";
import { COMPANY } from "@/data/site";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="text-white relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0F1E45 0%, #15130F 100%)",
      }}
    >
      <style>{`
        .foot-social a {
          background: rgba(255,255,255,.06);
          border: 1px solid rgba(255,255,255,.10);
          color: rgba(255,255,255,.6);
          transition: all 0.22s;
        }
        .foot-social a:hover {
          background: #E32118;
          color: #fff;
          border-color: #E32118;
          transform: translateY(-2px);
        }
        .foot-link {
          color: rgba(255,255,255,.55);
          font-size: 13px;
          transition: color 0.22s;
        }
        .foot-link:hover { color: #fff; }
      `}</style>

      {/* Grid texture */}
      <div className="absolute inset-0 opacity-25 pointer-events-none grid-tex-dark" />

      {/* Decorative mountain mark */}
      <div className="absolute -right-32 -top-20 w-[420px] h-[420px] pointer-events-none opacity-[0.06]">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path d="M20 180 L80 30 L140 180 Z" fill="#fff" />
          <path d="M5 180 L42 60 L52 80 L30 180 Z" fill="#E32118" />
        </svg>
      </div>

      <div className="max-w-[1320px] mx-auto px-6 lg:px-10 pt-20 lg:pt-24 pb-6 relative z-10">
        {/* ── CTA strip ── */}
        <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-center pb-14 lg:pb-16 mb-14 lg:mb-16 border-b border-white/[0.08]">
          <div>
            <p className="mono text-[10.5px] tracking-[0.18em] uppercase text-[#E32118] mb-3">
              ¿LISTO PARA TU PRÓXIMO PROYECTO?
            </p>
            <h3
              className="font-display"
              style={{
                fontSize: "clamp(28px,3.5vw,42px)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                color: "#fff",
                lineHeight: 1.1,
              }}
            >
              Trabajemos juntos.<br />
              <em style={{ fontStyle: "italic", fontWeight: 600, color: "#E32118" }}>
                Asesoría técnica gratuita.
              </em>
            </h3>
          </div>
          <div className="flex gap-3 flex-wrap">
            <a
              href={`https://api.whatsapp.com/send?phone=${COMPANY.whatsapp}&text=${encodeURIComponent(COMPANY.whatsappMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3.5 rounded-xl text-[13.5px] font-bold text-white transition-all hover:-translate-y-0.5"
              style={{ background: "#25D366", boxShadow: "0 12px 28px rgba(37,211,102,.3)" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
              </svg>
              WhatsApp
            </a>
            <Link
              href="/contacto"
              className="flex items-center gap-2 px-5 py-3.5 rounded-xl text-[13.5px] font-bold text-white transition-all hover:-translate-y-0.5"
              style={{ background: "#E32118", boxShadow: "0 12px 28px rgba(227,33,24,.3)" }}
            >
              Contáctenos <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-12 lg:gap-16 pb-14 border-b border-white/[0.08]">
          {/* Brand */}
          <div>
            <Image
              src="/images/logo-impadoc-azul.jpg"
              alt="IMPADOC — Materiales que Construyen Confianza"
              width={260}
              height={66}
              className="h-13 w-auto mb-6 rounded-md"
              style={{ height: "52px" }}
            />
            <p
              style={{
                fontSize: "13.5px",
                color: "rgba(255,255,255,.55)",
                lineHeight: 1.7,
                marginBottom: "22px",
              }}
            >
              <strong style={{ color: "rgba(255,255,255,.92)", fontWeight: 700 }}>
                Materiales que Construyen Confianza.
              </strong>
              <br />
              Más de 58 años fabricando sistemas de acabados, morteros y minerales industriales en Colombia.
            </p>

            <div
              className="flex items-start gap-2.5 mb-6"
              style={{ fontSize: "12.5px", color: "rgba(255,255,255,.45)" }}
            >
              <MapPin size={13} className="text-[#E32118] flex-shrink-0 mt-0.5" />
              <span>
                Km 7 vía Cali – Jamundí
                <br />
                Zona Industrial El Cascajal, Cali
              </span>
            </div>

            <p className="mono text-[10px] tracking-[0.16em] uppercase text-white/30 mb-3">
              CERTIFICADOS POR
            </p>
            <div
              className="flex items-center gap-3 p-3 rounded-xl mb-6"
              style={{ background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.08)" }}
            >
              <Image src="/images/icontec.jpg" alt="ICONTEC" width={56} height={56} className="h-12 w-auto" />
              <div className="w-px h-10 bg-white/10" />
              <Image src="/images/sello-55.jpg" alt="58 años" width={88} height={44} className="h-11 w-auto" />
            </div>

            <div className="flex items-center gap-2 foot-social">
              {[
                {
                  href: COMPANY.facebook,
                  l: "Facebook",
                  i: (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  ),
                },
                {
                  href: COMPANY.instagram,
                  l: "Instagram",
                  i: (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <circle cx="12" cy="12" r="5" />
                      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                    </svg>
                  ),
                },
                {
                  href: COMPANY.linkedin,
                  l: "LinkedIn",
                  i: (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  ),
                },
                {
                  href: COMPANY.youtube,
                  l: "YouTube",
                  i: (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23 7s-.2-1.6-.9-2.3c-.8-.9-1.7-.9-2.1-1C17 3.4 12 3.4 12 3.4s-5 0-8 .3c-.4 0-1.3.1-2.1 1C1.2 5.4 1 7 1 7S.8 8.9.8 10.7v1.6c0 1.9.2 3.8.2 3.8s.2 1.6.9 2.3c.8.9 1.9.9 2.4 1C6 19.6 12 19.6 12 19.6s5 0 8-.3c.4 0 1.3-.1 2.1-1 .7-.7.9-2.3.9-2.3s.2-1.9.2-3.8v-1.6C23.2 8.9 23 7 23 7zM9.7 14.5V7.9l6.4 3.3-6.4 3.3z" />
                    </svg>
                  ),
                },
                {
                  href: `https://api.whatsapp.com/send?phone=${COMPANY.whatsapp}`,
                  l: "WhatsApp",
                  i: (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                    </svg>
                  ),
                },
              ].map(s => (
                <a
                  key={s.l}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.l}
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                >
                  {s.i}
                </a>
              ))}
            </div>
          </div>

          {/* Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {[
              {
                t: "Productos",
                links: [
                  { l: "Acabados Interiores",  h: "/productos?cat=interiores" },
                  { l: "Acabados Exteriores",  h: "/productos?cat=exteriores" },
                  { l: "Línea Acrílica",       h: "/productos?cat=acrilica" },
                  { l: "Sistema Drywall",      h: "/productos?cat=drywall" },
                  { l: "Pisos & Pegantes",     h: "/productos?cat=pisos" },
                  { l: "Impermeabilizantes",   h: "/productos?cat=impermeabilizantes" },
                  { l: "Línea Industrial",     h: "/industrial" },
                ],
              },
              {
                t: "Empresa",
                links: [
                  { l: "Quiénes somos",       h: "/nosotros" },
                  { l: "Misión y Visión",     h: "/nosotros#mision" },
                  { l: "Certificaciones",     h: "/nosotros#certificaciones" },
                  { l: "Unidad Industrial",   h: "/industrial" },
                  { l: "Trabaja con nosotros",h: "/trabaja-con-nosotros" },
                ],
              },
              {
                t: "Recursos",
                links: [
                  { l: "Asesoría Técnica",    h: "/asesoria-tecnica" },
                  { l: "Videos tutoriales",   h: "/asesoria-tecnica#videos" },
                  { l: "Fichas Técnicas",     h: "/productos" },
                  { l: "Blog Técnico",        h: "/blog" },
                  { l: "Puntos de Venta",     h: "/puntos-de-venta" },
                ],
              },
            ].map(col => (
              <div key={col.t}>
                <h4 className="mono text-[10px] tracking-[0.16em] uppercase mb-5 text-white/30 font-semibold">
                  {col.t}
                </h4>
                <ul className="space-y-2.5">
                  {col.links.map(l => (
                    <li key={l.l}>
                      <Link href={l.h} className="foot-link">
                        {l.l}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h4 className="mono text-[10px] tracking-[0.16em] uppercase mb-5 text-white/30 font-semibold">
                Contacto
              </h4>
              <div className="space-y-3">
                <a href="tel:+573216383338" className="foot-link flex items-start gap-2">
                  <Phone size={11} className="text-[#E32118] mt-1 flex-shrink-0" />
                  <span>
                    321 638 33 38
                    <br />
                    <span style={{ fontSize: "11px", color: "rgba(255,255,255,.3)" }}>
                      Celular Cali
                    </span>
                  </span>
                </a>
                <a href="tel:+6025552406" className="foot-link flex items-start gap-2">
                  <Phone size={11} className="text-[#E32118] mt-1 flex-shrink-0" />
                  <span>
                    PBX (60 2) 555 2406
                    <br />
                    <span style={{ fontSize: "11px", color: "rgba(255,255,255,.3)" }}>
                      Cali — Principal
                    </span>
                  </span>
                </a>
                <a href="mailto:ventas@impadoc.com" className="foot-link flex items-start gap-2">
                  <Mail size={11} className="text-[#E32118] mt-1 flex-shrink-0" />
                  <span>ventas@impadoc.com</span>
                </a>
                <Link
                  href="/contacto"
                  className="foot-link flex items-center gap-2 pt-2 border-t border-white/10 mt-3"
                >
                  Formulario de contacto <ArrowRight size={11} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="mono text-[10px] tracking-[0.12em] uppercase text-white/25">
            © {new Date().getFullYear()} IMPADOC S.A.S. · Cali, Colombia · TODOS LOS DERECHOS RESERVADOS
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="/contacto"
              className="mono text-[10px] tracking-[0.12em] uppercase text-white/25 hover:text-white/55 transition-colors"
            >
              POLÍTICA DE PRIVACIDAD
            </Link>
            <Link
              href="/contacto"
              className="mono text-[10px] tracking-[0.12em] uppercase text-white/25 hover:text-white/55 transition-colors"
            >
              TÉRMINOS
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
