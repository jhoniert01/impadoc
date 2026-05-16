import type { Metadata } from "next";
import { Users, Zap, Globe, Shield, ArrowRight } from "lucide-react";
import { Button, Eyebrow, SectionHeader } from "@/components/ui";

export const metadata: Metadata = { title: "Trabaja con Nosotros" };

export default function TrabajaPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-[calc(72px+80px)] pb-24 bg-[#0F1E45] relative overflow-hidden">
        <div className="absolute inset-0 grid-texture" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_80%_50%,rgba(37,80,170,0.5),transparent)]" />
        <div className="relative z-10 max-w-[1280px] mx-auto px-12">
          <Eyebrow light>Trabaja con Nosotros</Eyebrow>
          <h1 className="font-display text-[clamp(36px,5.5vw,72px)] font-extrabold leading-[1.04] tracking-[-0.03em] text-white max-w-[620px] mb-6">
            Únete al equipo<br /><span className="text-[#5C8FE8]">IMPADOC</span>
          </h1>
          <p className="text-lg font-light text-white/55 max-w-[460px] leading-relaxed">
            Somos un equipo de más de 200 personas comprometidas con construir el mejor Colombia posible. Buscamos personas apasionadas, con talento y ganas de crecer.
          </p>
        </div>
      </section>

      {/* Why join */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-12">
          <div className="text-center mb-14 max-w-[600px] mx-auto">
            <SectionHeader eyebrow="¿Por qué IMPADOC?" title={<>Beneficios de ser parte <em className="not-italic text-[#1B2C5E]">del equipo</em></>} center />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: <Shield size={22} />, title: "Estabilidad laboral", desc: "+55 años en el mercado. Empresa sólida con proyecciones de crecimiento." },
              { icon: <Zap size={22} />, title: "Desarrollo profesional", desc: "Capacitaciones continuas, acceso a formación técnica y plan de carrera." },
              { icon: <Users size={22} />, title: "Ambiente de trabajo", desc: "Equipo humano comprometido, respetuoso y orientado a resultados." },
              { icon: <Globe size={22} />, title: "Cobertura nacional", desc: "Oportunidades en nuestras 4 sedes y en proyectos en todo el país." },
            ].map(v => (
              <div key={v.title} className="bg-[#F8F5EE] rounded-2xl p-6 border border-transparent hover:bg-white hover:border-[#C8D8F5] hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="w-11 h-11 bg-[#EBF0FC] rounded-xl flex items-center justify-center text-[#1B2C5E] mb-4">{v.icon}</div>
                <h3 className="font-display font-bold text-[#15130F] mb-2">{v.title}</h3>
                <p className="text-sm text-[#8E867B] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-24 bg-[#F8F5EE]">
        <div className="max-w-[860px] mx-auto px-12">
          <div className="text-center mb-12">
            <SectionHeader eyebrow="Aplica ahora" title={<>Envía tu <em className="not-italic text-[#1B2C5E]">hoja de vida</em></>} center />
          </div>
          <div className="bg-white rounded-3xl p-10 shadow-sm border border-[rgba(15,30,69,0.06)]">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Field label="Nombre completo" type="text" placeholder="Tu nombre" />
                <Field label="Cargo al que aplicas" type="text" placeholder="Ej: Asesor técnico" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Field label="Correo electrónico" type="email" placeholder="tu@email.com" />
                <Field label="Teléfono" type="tel" placeholder="+57 300 000 0000" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Field label="Ciudad" type="select" options={["Cali", "Bogotá", "Barranquilla", "Rionegro / Antioquia", "Otra ciudad"]} />
                <Field label="Área de interés" type="select" options={["Ventas y comercial", "Técnico / Ingeniería", "Producción", "Logística", "Administración", "Otra"]} />
              </div>
              <div>
                <label className="block text-[12px] font-semibold tracking-[0.04em] uppercase text-[#2A2823] mb-1.5">Carta de presentación (opcional)</label>
                <textarea rows={4} placeholder="Cuéntanos sobre ti, tu experiencia y por qué quieres unirte a IMPADOC..." className="w-full px-4 py-3 text-sm bg-[#F8F5EE] border-[1.5px] border-[rgba(15,30,69,0.06)] rounded-lg outline-none focus:border-[#1B2C5E] focus:bg-white focus:shadow-[0_0_0_3px_rgba(27,44,94,0.1)] transition-all resize-y" />
              </div>
              <div>
                <label className="block text-[12px] font-semibold tracking-[0.04em] uppercase text-[#2A2823] mb-1.5">Adjuntar hoja de vida</label>
                <div className="border-2 border-dashed border-[rgba(15,30,69,0.12)] rounded-xl p-8 text-center hover:border-[#1B2C5E] transition-colors cursor-pointer">
                  <p className="text-sm text-[#8E867B]">Arrastra tu archivo aquí o <span className="text-[#1B2C5E] font-medium">haz clic para seleccionar</span></p>
                  <p className="text-xs text-[#8E867B] mt-1">PDF, DOC · Máximo 5MB</p>
                </div>
              </div>
              <button className="w-full py-4 bg-[#1B2C5E] text-white font-semibold rounded-xl hover:bg-[#2F4593] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(27,44,94,0.25)] transition-all flex items-center justify-center gap-2 mt-2">
                Enviar aplicación <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, type, placeholder, options }: { label: string; type: string; placeholder?: string; options?: string[] }) {
  const base = "w-full px-4 py-2.5 text-sm bg-[#F8F5EE] border-[1.5px] border-[rgba(15,30,69,0.06)] rounded-lg outline-none focus:border-[#1B2C5E] focus:bg-white transition-all";
  return (
    <div>
      <label className="block text-[12px] font-semibold tracking-[0.04em] uppercase text-[#2A2823] mb-1.5">{label}</label>
      {type === "select" ? (
        <select className={`${base} appearance-none cursor-pointer`}>
          <option value="" disabled>Selecciona</option>
          {options?.map(o => <option key={o}>{o}</option>)}
        </select>
      ) : (
        <input type={type} placeholder={placeholder} className={base} />
      )}
    </div>
  );
}
