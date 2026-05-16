import type { Metadata } from "next";
import Image from "next/image";
import { Shield, Globe, Zap, Users, Award, Building, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = { title: "Nosotros — IMPADOC" };

function Eyebrow({ t, light }: { t:string; light?:boolean }) {
  return <p className={`eyebrow mb-5 ${light?"light":""}`}>{t}</p>;
}

export default function NosotrosPage() {
  return (
    <>
      {/* Hero — dark, full */}
      <section className="pt-[130px] pb-24 relative overflow-hidden" style={{ background:"#15130F" }}>
        <div className="absolute inset-0 opacity-25" style={{ backgroundImage:"linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)", backgroundSize:"64px 64px" }} />
        <div className="absolute inset-0" style={{ background:"radial-gradient(ellipse 65% 80% at 75% 40%, rgba(27,58,140,.45), transparent)" }} />
        <div className="relative z-10 max-w-[1320px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Eyebrow t="NUESTRA EMPRESA" light />
            <h1 style={{ fontSize:"clamp(44px,6.5vw,84px)", fontWeight:800, letterSpacing:"-0.03em", lineHeight:1.02, color:"#fff", marginBottom:"24px" }}>
              Construyendo<br />Colombia<br /><span style={{ color:"#5A78D6" }}>desde 1968</span>
            </h1>
            <p style={{ fontSize:"18px", color:"rgba(255,255,255,.55)", lineHeight:1.6, maxWidth:"440px", marginBottom:"32px" }}>
              IMPADOC es una empresa colombiana líder en sistemas de acabados para la construcción, con más de 55 años de experiencia y presencia nacional.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { n:"1968", l:"Año de fundación" },
                { n:"55+",  l:"Años de experiencia" },
                { n:"4",    l:"Sedes en Colombia" },
                { n:"300+", l:"Puntos de distribución" },
              ].map(s => (
                <div key={s.l} className="p-5 rounded-xl border border-white/10" style={{ background:"rgba(255,255,255,.05)" }}>
                  <p style={{ fontSize:"32px", fontWeight:800, color:"#fff", letterSpacing:"-0.03em", lineHeight:1 }}>{s.n}</p>
                  <p className="font-mono text-[10px] tracking-[0.1em] uppercase text-white/40 mt-1">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div
              className="relative rounded-3xl overflow-hidden"
              style={{ aspectRatio:"4/3", boxShadow:"0 20px 60px rgba(0,0,0,0.4)" }}
            >
              <Image src="/images/planta-aerea.jpg" alt="Planta IMPADOC Cali" fill className="object-cover" />
              <div className="absolute inset-0" style={{ background:"linear-gradient(180deg, transparent 50%, rgba(15,19,15,.45) 100%)" }} />
              <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 px-4 py-3 rounded-xl" style={{ background:"rgba(248,245,238,.94)", backdropFilter:"blur(10px)" }}>
                <div className="w-10 h-10 rounded-lg bg-[#1B2C5E] flex items-center justify-center text-white">
                  <Building size={16} />
                </div>
                <div>
                  <p className="mono text-[9.5px] tracking-[0.14em] uppercase text-[#8E867B]">PLANTA PRINCIPAL</p>
                  <p style={{ fontSize:"14px", fontWeight:700, color:"#1B2C5E", letterSpacing:"-0.015em" }}>Cali · Valle del Cauca</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision — BIGGER */}
      <section className="py-24" style={{ background:"#F8F5EE" }} id="mision">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <Eyebrow t="QUIÉNES SOMOS" />
            <h2 style={{ fontSize:"clamp(28px,3.8vw,48px)", fontWeight:700, letterSpacing:"-0.025em", lineHeight:1.06, color:"#15130F", marginBottom:"20px" }}>
              Precisión industrial al<br /><em style={{ fontStyle:"normal", color:"#1B2C5E" }}>servicio de Colombia</em>
            </h2>
            <p style={{ fontSize:"17px", color:"#2A2823", lineHeight:1.65, marginBottom:"32px" }}>
              Fabricantes de materiales de construcción especializados en sistemas de acabados, con procesos productivos de primer nivel y un equipo técnico altamente capacitado.
            </p>

            {/* Mission — Big card */}
            <div className="rounded-2xl p-7 mb-5 border border-[#D0DCF5]" style={{ background:"#EBF0FC" }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#1B2C5E] flex items-center justify-center">
                  <Shield size={18} className="text-white" />
                </div>
                <h3 style={{ fontSize:"20px", fontWeight:700, color:"#15130F" }}>Misión</h3>
              </div>
              <p style={{ fontSize:"16px", color:"#2A2823", lineHeight:1.7 }}>
                Desarrollar y suministrar sistemas de acabados para la construcción de alta calidad, aportando valor a las obras a través de productos innovadores y asesoría técnica especializada.
              </p>
            </div>

            {/* Vision — Big card */}
            <div className="rounded-2xl p-7 border border-[#D0DCF5]" style={{ background:"#EBF0FC" }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#1B2C5E] flex items-center justify-center">
                  <Globe size={18} className="text-white" />
                </div>
                <h3 style={{ fontSize:"20px", fontWeight:700, color:"#15130F" }}>Visión</h3>
              </div>
              <p style={{ fontSize:"16px", color:"#2A2823", lineHeight:1.7 }}>
                Ser la empresa de materiales de construcción más reconocida de Colombia por la calidad de sus productos, la solidez de su servicio técnico y su compromiso con la construcción sostenible.
              </p>
            </div>
          </div>

          {/* Right — team photo + stats */}
          <div>
            <div
              className="relative rounded-3xl overflow-hidden mb-6"
              style={{ aspectRatio:"4/3", boxShadow:"0 20px 60px -10px rgba(15,30,69,.18)" }}
            >
              <Image src="/images/equipo.png" alt="Equipo IMPADOC" fill className="object-cover object-top" />
              <div className="absolute inset-0" style={{ background:"linear-gradient(180deg, transparent 55%, rgba(15,19,15,.55) 100%)" }} />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="mono text-[10px] tracking-[0.16em] uppercase text-white/75 mb-1">NUESTRO EQUIPO</p>
                <p style={{ fontSize:"17px", fontWeight:700, color:"#fff", letterSpacing:"-0.02em" }}>
                  200+ colaboradores comprometidos
                </p>
              </div>
            </div>
            <div className="space-y-3">
              {[
                "Certificación ICONTEC permanente en todos nuestros productos",
                "4 sedes logísticas en Colombia — Cali, Bogotá, Barranquilla y Rionegro",
                "Más de 300 puntos de venta autorizados a nivel nacional",
                "Asesoría técnica especializada sin costo para obras que usen IMPADOC",
              ].map(v => (
                <div key={v} className="flex items-start gap-3">
                  <CheckCircle size={15} className="text-[#E32118] flex-shrink-0 mt-0.5" />
                  <span style={{ fontSize:"14px", color:"#2A2823" }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24" style={{ background:"#F8F5EE" }}>
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-14 max-w-[640px] mx-auto">
            <Eyebrow t="NUESTROS VALORES" />
            <h2 style={{ fontSize:"clamp(28px,3.6vw,46px)", fontWeight:700, letterSpacing:"-0.025em", lineHeight:1.06, color:"#15130F" }}>
              Los principios que nos <em style={{ fontStyle:"normal", color:"#1B2C5E" }}>definen</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon:<Shield size={22}/>,   t:"Calidad",          d:"Certificación ICONTEC permanente y procesos de control rigurosos en cada lote." },
              { icon:<Users size={22}/>,    t:"Servicio",         d:"Acompañamiento técnico personalizado desde la selección hasta la aplicación final." },
              { icon:<Zap size={22}/>,      t:"Innovación",       d:"I+D continuo para formular productos que superen las expectativas del mercado." },
              { icon:<Globe size={22}/>,    t:"Responsabilidad",  d:"Prácticas sostenibles y minimización del impacto ambiental en nuestra producción." },
              { icon:<Award size={22}/>,    t:"Integridad",       d:"Transparencia y ética en todas nuestras relaciones comerciales." },
              { icon:<Building size={22}/>, t:"Trabajo en Equipo",d:"Equipo humano comprometido con el crecimiento de la empresa y nuestros clientes." },
            ].map(v => (
              <div key={v.t} className="bg-white rounded-2xl p-7 border border-[#E5E1D6] card-lift">
                <div className="w-12 h-12 rounded-xl bg-[#EBF0FC] flex items-center justify-center text-[#1B2C5E] mb-5">{v.icon}</div>
                <h3 style={{ fontSize:"17px", fontWeight:700, color:"#15130F", marginBottom:"8px" }}>{v.t}</h3>
                <p style={{ fontSize:"14px", color:"#8E867B", lineHeight:1.6 }}>{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24" style={{ background:"#F8F5EE" }} id="certificaciones">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Eyebrow t="CERTIFICACIONES" />
            <h2 style={{ fontSize:"clamp(28px,3.6vw,46px)", fontWeight:700, letterSpacing:"-0.025em", lineHeight:1.06, color:"#15130F", marginBottom:"20px" }}>
              Calidad <em style={{ fontStyle:"normal", color:"#1B2C5E" }}>comprobada</em>
            </h2>
            <p style={{ fontSize:"16px", color:"#8E867B", lineHeight:1.6, marginBottom:"32px" }}>
              Nuestros productos cumplen con las normas técnicas más exigentes del sector de la construcción en Colombia.
            </p>
            <div className="flex items-center gap-6 mb-10">
              <Image src="/images/icontec.jpg" alt="ICONTEC" width={80} height={80} className="h-20 w-auto" />
              <Image src="/images/sello-55.jpg" alt="55 años" width={110} height={56} className="h-14 w-auto" />
            </div>
            <div className="space-y-3">
              {["NTC 2775 — Estucos y masillas para construcción","NTC 4076 — Morteros para mampostería","Sistema de Gestión de Calidad"].map(c => (
                <div key={c} className="flex items-center gap-3 text-[14px] text-[#2A2823]">
                  <span className="w-2 h-2 rounded-full bg-[#1B2C5E] flex-shrink-0" />{c}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl p-10 text-white" style={{ background:"#15130F" }}>
            <p style={{ fontSize:"52px", fontWeight:800, color:"#5A78D6", letterSpacing:"-0.03em", lineHeight:1 }}>55<span style={{ color:"#E32118" }}>+</span></p>
            <p style={{ fontSize:"22px", fontWeight:700, marginBottom:"16px" }}>Años de Certificación Continua</p>
            <p style={{ fontSize:"15px", color:"rgba(255,255,255,.55)", lineHeight:1.6, marginBottom:"32px" }}>
              Desde nuestra fundación en 1968, IMPADOC ha mantenido los más altos estándares de calidad, renovando sus certificaciones año tras año.
            </p>
            <Link href="/contacto" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-[13px] font-700 text-[#15130F] bg-white hover:-translate-y-px transition-all">
              Solicitar fichas técnicas <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
