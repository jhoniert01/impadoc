import type { Metadata } from "next";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { Button, Eyebrow, SectionHeader } from "@/components/ui";
import { OFFICES } from "@/data/site";

export const metadata: Metadata = { title: "Distribuidores y Puntos de Venta" };

export default function DistribuidoresPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-[calc(72px+80px)] pb-20 bg-[#0F1E45] relative overflow-hidden">
        <div className="absolute inset-0 grid-texture" />
        <div className="relative z-10 max-w-[1280px] mx-auto px-12">
          <Eyebrow light>Red de Distribución</Eyebrow>
          <h1 className="font-display text-[clamp(36px,5vw,68px)] font-extrabold leading-[1.05] tracking-[-0.03em] text-white max-w-[650px] mb-6">
            IMPADOC cerca de <span className="text-[#5C8FE8]">tu obra</span>
          </h1>
          <p className="text-lg font-light text-white/55 max-w-[480px] leading-relaxed">
            4 sedes logísticas, más de 300 puntos de venta y distribuidores autorizados en toda Colombia.
          </p>
        </div>
      </section>

      {/* Why distribute */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader eyebrow="Para Distribuidores" title={<>¿Por qué distribuir <em className="not-italic text-[#1B2C5E]">IMPADOC?</em></>} />
              <div className="mt-10 space-y-4">
                {[
                  { title: "Marca reconocida", desc: "+55 años de trayectoria y confianza en el mercado colombiano." },
                  { title: "Soporte técnico completo", desc: "Asesoría técnica, capacitaciones y material POP gratuito para tu ferretería." },
                  { title: "Condiciones especiales", desc: "Precios preferenciales, plazos de pago y bonificaciones por volumen." },
                  { title: "Línea completa de productos", desc: "Todo lo que una obra necesita, de una sola empresa certificada." },
                  { title: "Entrega garantizada", desc: "Red logística propia con cobertura en las principales ciudades del país." },
                ].map(b => (
                  <div key={b.title} className="flex gap-3 items-start">
                    <span className="w-2 h-2 rounded-full bg-[#1B2C5E] flex-shrink-0 mt-1.5" />
                    <div>
                      <span className="text-sm font-semibold text-[#15130F]">{b.title}: </span>
                      <span className="text-sm text-[#8E867B]">{b.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Button href="/contacto" variant="primary">Quiero ser distribuidor <ArrowRight size={14} /></Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              {[
                { n: "300+", label: "Puntos de venta" },
                { n: "4", label: "Sedes logísticas" },
                { n: "55+", label: "Años en el mercado" },
                { n: "100%", label: "Colombiana" },
              ].map(s => (
                <div key={s.label} className="bg-[#F8F5EE] rounded-2xl p-8 text-center">
                  <p className="font-display text-4xl font-extrabold text-[#1B2C5E] mb-2">{s.n}</p>
                  <p className="text-sm text-[#8E867B]">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Offices / Sedes */}
      <section className="py-20 bg-[#F8F5EE]" id="sedes">
        <div className="max-w-[1280px] mx-auto px-12">
          <div className="mb-12">
            <SectionHeader eyebrow="Nuestras Sedes" title={<>Cuatro ciudades, <em className="not-italic text-[#1B2C5E]">una sola calidad</em></>} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {OFFICES.map(o => (
              <div key={o.city} className="bg-white rounded-2xl p-7 border border-[rgba(15,30,69,0.06)] card-border-top hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-display font-bold text-[#15130F]">{o.city}</h3>
                  {o.badge && <span className="text-[9px] font-bold tracking-[0.08em] uppercase bg-[#1B2C5E] text-white px-2 py-0.5 rounded-full">{o.badge}</span>}
                </div>
                <p className="text-sm text-[#8E867B] leading-relaxed mb-5 whitespace-pre-line">{o.address}</p>
                <div className="h-px bg-[rgba(15,30,69,0.06)] mb-4" />
                <div className="space-y-2">
                  <a href={`tel:${o.tel}`} className="flex items-center gap-2 text-sm text-[#2A2823] hover:text-[#1B2C5E] transition-colors">
                    <Phone size={12} className="text-[#1B2C5E] opacity-60" />{o.phone}
                  </a>
                  {o.phonePbx && <a href={`tel:${o.telPbx}`} className="flex items-center gap-2 text-sm text-[#2A2823] hover:text-[#1B2C5E] transition-colors">
                    <Phone size={12} className="text-[#1B2C5E] opacity-60" />{o.phonePbx}
                  </a>}
                  <a href={`mailto:${o.email}`} className="flex items-center gap-2 text-sm text-[#2A2823] hover:text-[#1B2C5E] transition-colors">
                    <Mail size={12} className="text-[#1B2C5E] opacity-60" />{o.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
