import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Eyebrow, SectionHeader, ContactForm } from "@/components/ui";
import { OFFICES } from "@/data/site";

export const metadata: Metadata = { title: "Contacto" };

export default function ContactoPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-[calc(72px+64px)] pb-16 bg-[#F8F5EE]">
        <div className="max-w-[1280px] mx-auto px-12">
          <Eyebrow>Contacto</Eyebrow>
          <h1 className="font-display text-[clamp(32px,5vw,64px)] font-extrabold leading-[1.06] tracking-[-0.03em] text-[#15130F] mb-4">
            Hablemos sobre<br /><span className="text-[#1B2C5E]">tu proyecto</span>
          </h1>
          <p className="text-lg font-light text-[#8E867B] max-w-[500px]">
            Nuestro equipo de asesores técnicos está listo para ayudarte a encontrar la mejor solución para tu obra.
          </p>
        </div>
      </section>

      {/* Main */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-12 grid lg:grid-cols-[1fr_1.2fr] gap-16 items-start">
          <div>
            <SectionHeader
              eyebrow="Estamos listos"
              title={<>¿Cómo podemos <em className="not-italic text-[#1B2C5E]">ayudarte?</em></>}
            />
            <div className="mt-10 space-y-5">
              {[
                { icon: <Phone size={18} />, title: "Línea principal", info: "321 638 33 38", sub: "PBX (60 2) 555 2406", href: "tel:+573216383338" },
                { icon: <Mail size={18} />, title: "Correo electrónico", info: "ventas@impadoc.com", sub: "Respuesta en 24 horas hábiles", href: "mailto:ventas@impadoc.com" },
                { icon: <MapPin size={18} />, title: "Sede principal", info: "Km 7 vía Cali – Jamundí", sub: "Zona Industrial El Cascajal, Cali", href: "#sedes" },
                { icon: <Clock size={18} />, title: "Horario de atención", info: "Lunes a Viernes 7:00 am – 5:30 pm", sub: "Sábados 8:00 am – 12:00 pm", href: undefined },
              ].map(c => (
                <div key={c.title} className="flex gap-4 p-5 bg-[#F8F5EE] rounded-xl hover:bg-[#EBF0FC] transition-colors">
                  <div className="w-10 h-10 bg-[#EBF0FC] rounded-lg flex items-center justify-center text-[#1B2C5E] flex-shrink-0">{c.icon}</div>
                  <div>
                    <p className="text-[11px] font-bold tracking-[0.06em] uppercase text-[#8E867B] mb-0.5">{c.title}</p>
                    {c.href ? (
                      <a href={c.href} className="text-sm font-semibold text-[#15130F] hover:text-[#1B2C5E] transition-colors">{c.info}</a>
                    ) : (
                      <p className="text-sm font-semibold text-[#15130F]">{c.info}</p>
                    )}
                    <p className="text-xs text-[#8E867B] mt-0.5">{c.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Offices */}
      <section className="py-20 bg-[#F8F5EE]" id="sedes">
        <div className="max-w-[1280px] mx-auto px-12">
          <div className="mb-12">
            <SectionHeader eyebrow="Nuestras Sedes" title={<>4 sedes en <em className="not-italic text-[#1B2C5E]">toda Colombia</em></>} />
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
