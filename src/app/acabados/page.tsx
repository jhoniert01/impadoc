import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button, Eyebrow, SectionHeader } from "@/components/ui";

export const metadata: Metadata = { title: "Sistemas de Acabados" };

const lines = [
  {
    id: "interiores",
    title: "Acabados para Interiores",
    description: "Sistema completo de estucos, masillas y rellenos para superficies de yeso, concreto y mampostería. Acabados lisos, texturizados y especiales para proyectos de alta exigencia.",
    image: "/images/banner-interiores.jpg",
    products: ["Estucolisto Plástico", "Estuco Tradicional", "Yeso PRO", "Proyectable IMPADOC", "Relleno Acrílico", "Masilla de Acabado"],
    features: ["Fraguado rápido y controlado", "Excelente adherencia a todos los sustratos", "Libre de eflorescencias", "Compatible con pinturas al agua y al disolvente"],
    href: "/productos?cat=interiores",
    color: "from-[#1B2C5E] to-[#2F4593]",
    tag: "Línea Principal",
  },
  {
    id: "exteriores",
    title: "Acabados para Exteriores",
    description: "Revestimientos y texturas de alto desempeño para fachadas. Formulados para resistir la intemperie, la humedad y los rayos UV en el clima colombiano.",
    image: "/images/banner-exteriores.jpg",
    products: ["Impatextura Acrílico", "Granitex", "Board Flex", "Estucobras", "Extuco Exterior", "Relleno Exterior"],
    features: ["Resistencia UV clase A", "Impermeabilidad certificada", "Variedad de texturas y colores", "Bajo mantenimiento a largo plazo"],
    href: "/productos?cat=exteriores",
    color: "from-[#0F1E45] to-[#1B2C5E]",
    tag: "Fachadas",
  },
  {
    id: "drywall",
    title: "Sistema Drywall",
    description: "Productos especializados para construcción en seco. Estucos, masillas y pegantes formulados para los requerimientos específicos de paneles de yeso y sistemas livianos.",
    image: "/images/drywall.jpg",
    products: ["EstucoPanel SR", "PegaPanel", "Masilla Drywall", "Estucolisto Plástico", "Capa Fina", "90 Minutos"],
    features: ["Sistema total en 4–5 horas", "Resistencia a la apertura de juntas", "Sin fisuras ni arrugas", "Compatibilidad con paneles de todos los fabricantes"],
    href: "/productos?cat=drywall",
    color: "from-[#2A2823] to-[#15130F]",
    tag: "Sistema en Seco",
  },
  {
    id: "pisos",
    title: "Instalación de Pisos",
    description: "Adhesivos y morteros de alta resistencia para porcelanato, cerámica, piscinas y grandes formatos. Soluciones certificadas para pisos residenciales, comerciales e industriales.",
    image: "/images/pegadoc-porcelanato.jpg",
    products: ["Pegadoc Porcelanato", "Pegadoc Cerámico", "Pegadoc Piscinas", "Pegantelisto", "Boquilla IMPADOC", "Mortero de Nivelación"],
    features: ["Tiempo abierto extendido", "Alta resistencia al deslizamiento inicial", "Apto para grandes formatos (60x60+)", "Certificado para zonas húmedas y piscinas"],
    href: "/productos?cat=pisos",
    color: "from-[#1A4A35] to-[#1B2C5E]",
    tag: "Pisos y Cerámicos",
  },
  {
    id: "impermeabilizantes",
    title: "Impermeabilizantes",
    description: "Sistemas de impermeabilización rígidos y flexibles para cubiertas, fachadas, tanques y estructuras hidráulicas. Protección duradera contra filtraciones y humedad.",
    image: "/images/aquablocker.jpg",
    products: ["Aquablocker Cementicio", "Aquarepel Acrílico", "Aquarepel Cubiertas", "Marmolina MG-60", "Pasta Capil", "Cristalizante"],
    features: ["Resiste presión hidrostática positiva y negativa", "Apto para agua potable (certificado)", "Aplicación en frío y caliente", "Sistema garantizado a 10 años"],
    href: "/productos?cat=impermeabilizantes",
    color: "from-[#E32118] to-[#0F1E45]",
    tag: "Impermeabilización",
  },
];

export default function AcabadosPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-[calc(72px+80px)] pb-20 bg-[#15130F] relative overflow-hidden">
        <div className="absolute inset-0 grid-texture" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_70%_50%,rgba(27,44,94,0.4),transparent)]" />
        <div className="relative z-10 max-w-[1280px] mx-auto px-12">
          <Eyebrow light>Líneas de Producto</Eyebrow>
          <h1 className="font-display text-[clamp(36px,6vw,76px)] font-extrabold leading-[1.04] tracking-[-0.03em] text-white max-w-[700px] mb-6">
            Sistemas de acabados<br /><span className="text-[#5C8FE8]">para cada superficie</span>
          </h1>
          <p className="text-lg font-light text-white/55 max-w-[480px] leading-relaxed mb-10">
            5 líneas de productos certificados ICONTEC, desarrollados para los requerimientos reales de la construcción en Colombia.
          </p>
          <div className="flex flex-wrap gap-3">
            {lines.map((l) => (
              <a key={l.id} href={`#${l.id}`}
                className="px-4 py-2 rounded-full text-sm font-medium border border-white/15 text-white/60 hover:bg-white/10 hover:text-white transition-all">
                {l.title.split(" ").slice(-1)[0] === "Pisos" ? "Pisos" : l.title.replace("Acabados para ", "").replace("Sistema ", "").replace("Instalación de ", "")}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Lines */}
      {lines.map((line, i) => (
        <section key={line.id} id={line.id} className={`py-24 ${i % 2 === 0 ? "bg-white" : "bg-[#F8F5EE]"}`}>
          <div className="max-w-[1280px] mx-auto px-12">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
              {/* Image side */}
              <div className={`${i % 2 !== 0 ? "lg:order-2" : ""}`}>
                <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-[0_20px_60px_rgba(15,30,69,0.14)]">
                  <Image src={line.image} alt={line.title} fill className="object-cover" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${line.color} opacity-20`} />
                  <div className="absolute top-6 left-6">
                    <span className="px-3 py-1.5 rounded-full text-[11px] font-bold tracking-[0.08em] uppercase bg-white/90 text-[#1B2C5E]">
                      {line.tag}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content side */}
              <div className={`${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                <Eyebrow>{line.tag}</Eyebrow>
                <h2 className="font-display text-[clamp(28px,4vw,48px)] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#15130F] mb-5">
                  {line.title}
                </h2>
                <p className="text-[16px] font-light text-[#8E867B] leading-relaxed mb-8">
                  {line.description}
                </p>

                {/* Features */}
                <div className="space-y-2.5 mb-8">
                  {line.features.map((f) => (
                    <div key={f} className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-[#1B2C5E] mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-[#2A2823]">{f}</span>
                    </div>
                  ))}
                </div>

                {/* Products list */}
                <div className="bg-[#F8F5EE] rounded-xl p-5 mb-8">
                  <p className="text-[11px] font-bold tracking-[0.08em] uppercase text-[#8E867B] mb-3">Productos en esta línea</p>
                  <div className="flex flex-wrap gap-2">
                    {line.products.map((p) => (
                      <span key={p} className="px-3 py-1 bg-white border border-[rgba(15,30,69,0.08)] rounded-lg text-sm text-[#2A2823] font-medium">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 flex-wrap">
                  <Button href={line.href} variant="primary">
                    Ver productos <ArrowRight size={14} />
                  </Button>
                  <Button href="/asesoria-tecnica" variant="outline">
                    Asesoría técnica
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA final */}
      <section className="py-20 bg-[#0F1E45]">
        <div className="max-w-[1280px] mx-auto px-12 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-display text-3xl font-extrabold text-white mb-3">
              ¿No sabes qué producto necesitas?
            </p>
            <p className="text-white/50 leading-relaxed">
              Nuestros asesores técnicos analizan tu proyecto y te recomiendan el sistema ideal, completamente sin costo.
            </p>
          </div>
          <div className="flex gap-4 lg:justify-end flex-wrap">
            <Button href="/asesoria-tecnica" variant="white" size="lg">
              Solicitar asesoría <ArrowRight size={15} />
            </Button>
            <Button href="/contacto" variant="ghost-dark" size="lg">
              Contactar asesor
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
