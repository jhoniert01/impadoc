import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Video, FileText, Phone, Users, Zap, BookOpen, Play } from "lucide-react";
import Link from "next/link";
import { COMPANY, TUTORIAL_VIDEOS } from "@/data/site";

export const metadata: Metadata = { title: "Asesoría Técnica" };

function RedLine({ text, light }: { text:string; light?:boolean }) {
  return <p className={`eyebrow mb-5 ${light?"light":""}`}>{text}</p>;
}

export default function AsesoriaPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-[150px] lg:pt-[170px] pb-20 relative overflow-hidden" style={{ background:"#15130F" }}>
        <div className="grid-tex-dark absolute inset-0 opacity-40" />
        <div className="absolute inset-0 pointer-events-none" style={{ background:"radial-gradient(ellipse 60% 70% at 80% 40%, rgba(35,72,176,.45), transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-[50%] z-[2] hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-r from-[#15130F] via-[#15130F]/55 to-transparent z-10" />
          <Image src="/images/aplicacion-real.png" alt="Asesoría técnica IMPADOC" fill className="object-cover" />
        </div>
        <div className="relative z-10 max-w-[1320px] mx-auto px-6 lg:px-10">
          <RedLine text="ASESORÍA TÉCNICA" light />
          <h1 style={{ fontSize:"clamp(40px,6vw,76px)", fontWeight:800, letterSpacing:"-0.03em", lineHeight:1.04, color:"#fff", maxWidth:"640px", marginBottom:"24px" }}>
            Expertos técnicos<br />en <span style={{ color:"#5A78D6" }}>tu obra</span>
          </h1>
          <p style={{ fontSize:"18px", color:"rgba(255,255,255,.55)", maxWidth:"460px", lineHeight:1.6, marginBottom:"40px" }}>
            Nuestros ingenieros y técnicos especializados te acompañan en cada etapa del proceso constructivo, sin costo adicional.
          </p>
          <div className="flex gap-3 flex-wrap">
            <a href={`https://api.whatsapp.com/send?phone=${COMPANY.whatsapp}&text=${encodeURIComponent("Hola, necesito asesoría técnica para mi proyecto")}`}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-[13px] font-700 text-white transition-all hover:-translate-y-px"
              style={{ background:"#25D366" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>
              Solicitar por WhatsApp
            </a>
            <a href="#formulario" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-[13px] font-700 border border-white/22 text-white hover:bg-white/5 transition-all">
              Formulario
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24" style={{ background:"#F8F5EE" }}>
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-14 max-w-[640px] mx-auto">
            <div className="flex justify-center"><RedLine text="SERVICIOS TÉCNICOS" /></div>
            <h2 style={{ fontSize:"clamp(28px,3.6vw,46px)", fontWeight:700, letterSpacing:"-0.025em", lineHeight:1.06, color:"#15130F" }}>
              Todo el soporte que <em style={{ fontStyle:"normal", color:"#1B2C5E" }}>necesitas</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: <Users size={22} />,    title:"Visita técnica en obra", desc:"Nuestros asesores visitan tu proyecto para diagnosticar superficies, recomendar sistemas y supervisar la aplicación.", badge:"Gratuita" },
              { icon: <FileText size={22} />, title:"Fichas técnicas PDF",     desc:"Descarga directa de toda nuestra documentación técnica para licitaciones, permisos y especificaciones de obra.", badge:null },
              { icon: <Phone size={22} />,    title:"Asesoría telefónica",     desc:"Atención personalizada por teléfono, WhatsApp o videollamada para resolver dudas técnicas en tiempo real.", badge:"Inmediata" },
              { icon: <BookOpen size={22} />, title:"Capacitaciones",          desc:"Talleres prácticos gratuitos para maestros de obra, contratistas y distribuidores, presenciales o virtuales.", badge:"Gratis" },
              { icon: <Video size={22} />,    title:"Videos tutoriales",        desc:"Biblioteca completa de videos técnicos: preparación, mezcla, aplicación y acabado profesional por producto.", badge:null },
              { icon: <Zap size={22} />,      title:"Especificación técnica",  desc:"Desarrollo de especificaciones para proyectos de arquitectura e ingeniería. Fichas comparativas y dosificaciones.", badge:null },
            ].map(s=>(
              <div key={s.title} className="bg-[#F8F5EE] rounded-2xl p-7 border border-transparent hover:bg-white hover:border-[#D0DCF5] hover:shadow-hover hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#EBF0FC] flex items-center justify-center text-[#1B2C5E]">{s.icon}</div>
                  {s.badge && <span className="mono text-[9px] tracking-[0.1em] uppercase px-2.5 py-1 rounded-md bg-[#1A7A4A] text-white">{s.badge}</span>}
                </div>
                <h3 style={{ fontSize:"16px", fontWeight:700, color:"#15130F", marginBottom:"8px" }}>{s.title}</h3>
                <p style={{ fontSize:"13px", color:"#8E867B", lineHeight:1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Videos / Academy */}
      <section className="py-24" style={{ background:"#F8F5EE" }} id="videos">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between gap-8 mb-12 flex-wrap">
            <div className="flex flex-col gap-4 max-w-[640px]">
              <RedLine text="ACADEMIA TÉCNICA — VIDEOS" />
              <h2 style={{ fontSize:"clamp(28px,3.6vw,46px)", fontWeight:700, letterSpacing:"-0.025em", lineHeight:1.06, color:"#15130F" }}>
                Aprende a aplicar<br /><em style={{ fontStyle:"normal", color:"#1B2C5E" }}>como un experto</em>
              </h2>
              <p style={{ fontSize:"16px", color:"#8E867B", lineHeight:1.6 }}>
                Tutoriales profesionales paso a paso para sacarle el máximo provecho a cada producto IMPADOC.
              </p>
            </div>
            <a href={COMPANY.youtube} target="_blank" rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 mono text-[11px] tracking-[0.12em] uppercase text-[#8E867B] hover:text-[#E32118] transition-colors">
              CANAL DE YOUTUBE <ArrowRight size={13} />
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TUTORIAL_VIDEOS.map(v=>(
              <a key={v.id} href={`https://www.youtube.com/watch?v=${v.id}`} target="_blank" rel="noopener noreferrer"
                className="group block bg-white border border-[#E5E1D6] rounded-2xl overflow-hidden card-lift">
                <div className="aspect-video overflow-hidden relative bg-[#15130F]">
                  <img src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`} alt={v.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04] opacity-90" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#15130F]/60 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center transition-all group-hover:scale-110" style={{ background:"#E32118", boxShadow:"0 8px 28px rgba(227,33,24,.45)" }}>
                      <Play size={20} className="text-white ml-1" fill="currentColor" />
                    </div>
                  </div>
                  <span className="absolute bottom-3 right-3 mono text-[10px] font-700 tracking-[0.06em] px-2 py-0.5 rounded bg-[#15130F]/85 text-white">{v.duration}</span>
                </div>
                <div className="p-5">
                  <p className="mono text-[10px] tracking-[0.1em] uppercase text-[#E32118] mb-2">{v.category}</p>
                  <h3 style={{ fontSize:"15px", fontWeight:700, color:"#15130F", lineHeight:1.3 }}>{v.title}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24" style={{ background:"#F8F5EE" }} id="capacitaciones">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <RedLine text="CÓMO FUNCIONA" />
            <h2 style={{ fontSize:"clamp(28px,3.6vw,46px)", fontWeight:700, letterSpacing:"-0.025em", lineHeight:1.06, color:"#15130F" }}>
              Proceso de <em style={{ fontStyle:"normal", color:"#1B2C5E" }}>asesoría</em>
            </h2>
            <p style={{ fontSize:"16px", color:"#8E867B", lineHeight:1.6, marginTop:"20px", marginBottom:"40px" }}>
              En 3 pasos te conectamos con el asesor técnico correcto para tu proyecto.
            </p>
            <div className="space-y-6">
              {[
                { n:"01", title:"Solicita la asesoría",        desc:"Contáctanos por WhatsApp, teléfono o formulario. Cuéntanos sobre tu proyecto." },
                { n:"02", title:"Te asignamos un especialista", desc:"Según tu zona y tipo de proyecto, asignamos el asesor técnico más adecuado." },
                { n:"03", title:"Acompañamiento completo",      desc:"Visita en obra, recomendación de productos, fichas técnicas y seguimiento hasta la entrega." },
              ].map(p=>(
                <div key={p.n} className="flex gap-5">
                  <div className="mono text-4xl font-800 text-[#1B2C5E] opacity-25 leading-none flex-shrink-0 w-12">{p.n}</div>
                  <div className="pt-1">
                    <h4 style={{ fontSize:"16px", fontWeight:700, color:"#15130F", marginBottom:"4px" }}>{p.title}</h4>
                    <p style={{ fontSize:"13.5px", color:"#8E867B", lineHeight:1.6 }}>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl p-10 text-white" style={{ background:"#15130F" }}>
            <p style={{ fontSize:"19px", fontWeight:700, marginBottom:"8px" }}>¿Cuánto cuesta?</p>
            <p style={{ fontSize:"52px", fontWeight:800, color:"#5A78D6", marginBottom:"16px", letterSpacing:"-0.03em" }}>Gratis</p>
            <p style={{ fontSize:"14px", color:"rgba(255,255,255,.55)", lineHeight:1.6, marginBottom:"32px" }}>
              La asesoría técnica de IMPADOC es completamente gratuita para proyectos que utilicen nuestros productos. No importa el tamaño de la obra.
            </p>
            <a href={`https://api.whatsapp.com/send?phone=${COMPANY.whatsapp}&text=${encodeURIComponent("Hola, quiero solicitar una visita técnica a mi obra")}`}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-[13px] font-700 text-white transition-all hover:-translate-y-px"
              style={{ background:"#25D366" }}>
              Solicitar visita técnica <ArrowRight size={13} />
            </a>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-24" style={{ background:"#F8F5EE" }} id="formulario">
        <div className="max-w-[860px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <div className="flex justify-center"><RedLine text="SOLICITUD" /></div>
            <h2 style={{ fontSize:"clamp(28px,3.6vw,46px)", fontWeight:700, letterSpacing:"-0.025em", lineHeight:1.06, color:"#15130F" }}>
              Formulario de <em style={{ fontStyle:"normal", color:"#1B2C5E" }}>asesoría técnica</em>
            </h2>
          </div>
          <div className="bg-white border border-[#E5E1D6] rounded-3xl p-10">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <FF label="Nombre completo" type="text" ph="Tu nombre" />
                <FF label="Empresa / Obra" type="text" ph="Empresa o proyecto" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <FF label="Teléfono" type="tel" ph="+57 300 000 0000" />
                <FF label="Ciudad" type="select" opts={["Cali","Bogotá","Barranquilla","Medellín","Otra"]} />
              </div>
              <FF label="Tipo de proyecto" type="select" opts={["Obra residencial","Obra comercial","Obra industrial","Remodelación","Otro"]} />
              <div>
                <label className="mono block text-[10.5px] tracking-[0.08em] uppercase text-[#8E867B] mb-1.5">Describe tu proyecto</label>
                <textarea rows={4} placeholder="Cuéntanos sobre tu proyecto, superficies a trabajar, m² aproximados..." className="w-full px-3.5 py-2.5 text-[13px] rounded-xl border border-[#E5E1D6] outline-none resize-none transition-all focus:border-[#1B2C5E]" style={{ background:"#F8F5EE", color:"#15130F" }} />
              </div>
              <button className="w-full py-3.5 rounded-xl text-[13px] font-700 text-white flex items-center justify-center gap-2 transition-all hover:-translate-y-px" style={{ background:"#15130F" }}>
                Enviar solicitud <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function FF({ label, type, ph, opts }: { label:string; type:string; ph?:string; opts?:string[] }) {
  const base = "w-full px-3.5 py-2.5 text-[13px] rounded-xl border border-[#E5E1D6] outline-none transition-all focus:border-[#1B2C5E]";
  const style = { background:"#F8F5EE", color:"#15130F" };
  return (
    <div>
      <label className="mono block text-[10.5px] tracking-[0.08em] uppercase text-[#8E867B] mb-1.5">{label}</label>
      {type==="select"
        ? <select className={`${base} appearance-none cursor-pointer`} style={style}>
            <option value="" disabled>Seleccionar...</option>
            {opts?.map(o=><option key={o}>{o}</option>)}
          </select>
        : <input type={type} placeholder={ph} className={base} style={style} />
      }
    </div>
  );
}
