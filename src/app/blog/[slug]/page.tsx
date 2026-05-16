import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, ArrowRight, Clock, Calendar } from "lucide-react";
import { Button, Eyebrow } from "@/components/ui";
import { BLOG_POSTS, COMPANY } from "@/data/site";

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Artículo no encontrado" };
  return { title: post.title, description: post.excerpt };
}

// Extended content per post
const postContent: Record<string, { body: string[] }> = {
  "nueva-linea-exteriores-2025": {
    body: [
      "IMPADOC presenta su catálogo renovado de acabados para exteriores 2025, diseñado para responder a las exigencias climáticas del territorio colombiano. La nueva línea incorpora formulaciones mejoradas en las familias de impatexturas, granitex y sistemas board flex.",
      "Las mejoras más importantes incluyen mayor resistencia a la radiación UV, formulaciones de baja emisión de VOC y mayor tiempo abierto de trabajo en temperaturas cálidas. Estos cambios fueron desarrollados tras más de 18 meses de pruebas en campo en diferentes regiones del país.",
      "El sistema Board Flex, completamente renovado para 2025, ahora cuenta con certificación de resistencia al impacto clase III y puede aplicarse sobre sustratos EIFS, EPS y drywall exterior sin necesidad de imprimación adicional en condiciones estándar.",
      "Para distribuidores y constructores, IMPADOC ofrece fichas técnicas actualizadas, muestras de producto y capacitaciones gratuitas para presentar la nueva línea. Contáctenos para coordinar una visita técnica o solicitar el nuevo catálogo 2025.",
    ],
  },
  "como-elegir-impermeabilizante": {
    body: [
      "La selección del sistema de impermeabilización correcto es una de las decisiones más críticas en cualquier proyecto de construcción. Un error en este punto puede derivar en filtraciones, daños estructurales y costosas reparaciones posteriores.",
      "Los impermeabilizantes se dividen principalmente en dos grandes familias: los sistemas rígidos (cementicios) y los sistemas flexibles (acrílicos o poliuretánicos). La elección entre uno y otro depende del tipo de estructura, la exposición al agua y si se esperan movimientos o dilataciones en el sustrato.",
      "Para estructuras rígidas como tanques, piscinas y muros de contención, los morteros cementicios como Aquablocker Cementicio de IMPADOC son la solución ideal. Resisten presión hidrostática tanto positiva como negativa y son aptos para contacto con agua potable.",
      "En cubiertas planas, terrazas y losas expuestas, los sistemas elastoméricos como Aquarepel de IMPADOC ofrecen la flexibilidad necesaria para absorber los movimientos térmicos sin fisurarse. Su alta elongación (>200%) garantiza una membrana continua e impermeable durante años.",
      "Antes de definir el sistema, es fundamental realizar un diagnóstico correcto de la superficie: tipo de sustrato, presencia de humedad ascendente, fisuras activas o pasivas, y accesibilidad para el mantenimiento futuro. El equipo técnico de IMPADOC puede asesorarle en esta evaluación sin ningún costo.",
    ],
  },
  "drywall-estucopanel-sr": {
    body: [
      "El sistema Drywall ha ganado una adopción masiva en Colombia por su rapidez de instalación, menor carga estructural y versatilidad arquitectónica. Sin embargo, el acabado final del sistema depende en gran medida de un correcto tratamiento de las juntas entre paneles.",
      "EstucoPanel SR de IMPADOC es el producto específicamente formulado para este proceso. Su base de yeso semirápido permite trabajar en ciclos cortos, completando el sistema de tres capas (primera, segunda y laca) en solo 4 a 5 horas en condiciones normales de temperatura y humedad.",
      "El proceso de aplicación correcto inicia con la limpieza del panel y la verificación del alineamiento de las juntas. La primera capa de EstucoPanel SR se aplica embebiendo la cinta de papel microperforada, asegurando el cubrimiento completo sin burbujas. Se deja secar completamente.",
      "La segunda capa, más delgada, cubre la cinta y nivela las irregularidades. Una vez seca, la tercera capa se aplica con llana ancha para obtener la superficie uniforme que recibirá la pintura. El lijado final debe hacerse con lija de grano 180 o superior para evitar marcas visibles bajo la iluminación rasante.",
      "IMPADOC ofrece capacitaciones gratuitas para instaladores y contratistas de Drywall. Contáctenos para conocer el calendario de talleres en su ciudad.",
    ],
  },
  "certificacion-icontec-2025": {
    body: [
      "IMPADOC renueva por un año más su certificación ICONTEC para sus líneas principales de productos, ratificando el compromiso de la empresa con la calidad en la fabricación de materiales de construcción colombianos.",
      "La certificación cubre las normas NTC 2775 para estucos y masillas, garantizando que cada lote producido cumple con los parámetros de resistencia mecánica, tiempo de fraguado, estabilidad dimensional y compatibilidad con sustratos constructivos típicos del mercado colombiano.",
      "Este proceso de certificación implica auditorías periódicas de ICONTEC en nuestra planta de producción en Cali, revisión de los sistemas de control de calidad y toma de muestras aleatorias en laboratorio. IMPADOC supera de forma consistente los umbrales mínimos establecidos por la norma.",
      "Para los profesionales de la construcción, la certificación ICONTEC vigente significa respaldo documental sólido para especificaciones técnicas, licitaciones públicas y garantías de obra. Nuestros productos cuentan con esta certificación desde hace más de dos décadas de forma ininterrumpida.",
    ],
  },
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const content = postContent[slug] || { body: [post.excerpt] };
  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      {/* Breadcrumb */}
      <div className="pt-[calc(72px+16px)] bg-[#F8F5EE]">
        <div className="max-w-[1280px] mx-auto px-12">
          <nav className="flex items-center gap-2 text-xs text-[#8E867B] py-4">
            <Link href="/" className="hover:text-[#1B2C5E] transition-colors">Inicio</Link>
            <ChevronRight size={12} />
            <Link href="/blog" className="hover:text-[#1B2C5E] transition-colors">Blog</Link>
            <ChevronRight size={12} />
            <span className="text-[#15130F] font-medium truncate max-w-[200px]">{post.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-[#F8F5EE] pb-0">
        <div className="max-w-[1280px] mx-auto px-12 pb-0">
          <div className="max-w-[760px]">
            <div className="flex items-center gap-3 mb-6 flex-wrap">
              <span className="px-3 py-1.5 rounded-full text-[11px] font-bold tracking-[0.08em] uppercase bg-[#EBF0FC] text-[#1B2C5E]">
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-[#8E867B]">
                <Calendar size={12} /> {post.date}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-[#8E867B]">
                <Clock size={12} /> {post.readTime} de lectura
              </span>
            </div>
            <h1 className="font-display text-[clamp(28px,4.5vw,52px)] font-extrabold leading-[1.1] tracking-[-0.025em] text-[#15130F] mb-0">
              {post.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Cover image */}
      <div className="bg-[#F8F5EE] py-10">
        <div className="max-w-[1280px] mx-auto px-12">
          <div className="rounded-3xl overflow-hidden aspect-[21/9] relative shadow-[0_8px_40px_rgba(15,30,69,0.12)]">
            <Image src={post.image} alt={post.title} fill className="object-cover" priority />
          </div>
        </div>
      </div>

      {/* Article */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-16">
            {/* Body */}
            <article>
              <p className="text-xl font-light text-[#2A2823] leading-[1.75] mb-8 border-l-4 border-[#1B2C5E] pl-6">
                {post.excerpt}
              </p>
              <div className="space-y-6">
                {content.body.map((paragraph, i) => (
                  <p key={i} className="text-[15px] leading-[1.85] text-[#2A2823]">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-[rgba(15,30,69,0.06)]">
                {["IMPADOC", "Construcción Colombia", post.category].map(tag => (
                  <span key={tag} className="px-3 py-1.5 bg-[#F8F5EE] text-[#2A2823] text-xs font-medium rounded-lg">#{tag.replace(/\s+/g, "")}</span>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-12 bg-[#EBF0FC] rounded-2xl p-8">
                <p className="font-display font-bold text-[#0F1E45] text-lg mb-2">¿Tienes preguntas técnicas?</p>
                <p className="text-sm text-[#2A2823] mb-5 leading-relaxed">Nuestro equipo técnico puede asesorarte sobre este tema y cualquier otro relacionado con la aplicación de nuestros productos.</p>
                <div className="flex gap-3 flex-wrap">
                  <Button
                    href={`https://api.whatsapp.com/send?phone=${COMPANY.whatsapp}&text=${encodeURIComponent(`Hola, leí el artículo "${post.title}" y tengo una consulta`)}`}
                    variant="primary"
                    size="sm"
                    external
                  >
                    Consultar por WhatsApp
                  </Button>
                  <Button href="/asesoria-tecnica" variant="outline" size="sm">
                    Asesoría técnica gratuita
                  </Button>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Related */}
              <div className="bg-[#F8F5EE] rounded-2xl p-6">
                <h3 className="font-display font-bold text-[#15130F] mb-4 text-sm uppercase tracking-[0.06em]">Artículos relacionados</h3>
                <div className="space-y-4">
                  {relatedPosts.map(rp => (
                    <Link key={rp.slug} href={`/blog/${rp.slug}`} className="group flex gap-3 items-start">
                      <div className="w-16 h-12 rounded-lg overflow-hidden relative flex-shrink-0 bg-[#EDECE8]">
                        <Image src={rp.image} alt={rp.title} fill className="object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[10px] font-bold tracking-[0.08em] uppercase text-[#1B2C5E] mb-0.5">{rp.category}</p>
                        <p className="text-[13px] font-semibold text-[#15130F] leading-snug group-hover:text-[#1B2C5E] transition-colors line-clamp-2">{rp.title}</p>
                      </div>
                    </Link>
                  ))}
                </div>
                <Link href="/blog" className="flex items-center gap-1.5 text-xs font-semibold text-[#1B2C5E] mt-5 hover:gap-2.5 transition-all">
                  Ver todo el blog <ArrowRight size={12} />
                </Link>
              </div>

              {/* Products CTA */}
              <div className="bg-[#0F1E45] rounded-2xl p-6">
                <Eyebrow light>Catálogo</Eyebrow>
                <h3 className="font-display font-bold text-white text-lg mb-2 leading-snug">Conoce todos nuestros productos</h3>
                <p className="text-xs text-white/45 mb-5 leading-relaxed">Más de 50 productos certificados ICONTEC para cada etapa de la construcción.</p>
                <Button href="/productos" variant="white" size="sm" className="w-full justify-center">
                  Ver catálogo <ArrowRight size={13} />
                </Button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
