// ─── IMPADOC Site Data ────────────────────────────────────
export const COMPANY = {
  name: "IMPADOC",
  tagline: "Materiales que Construyen Confianza",
  description: "Empresa colombiana con más de 55 años desarrollando sistemas de acabados para la construcción. Certificación ICONTEC 2025.",
  founding: "1968",
  yearsExperience: 55,
  whatsapp: "573216383338",
  whatsappMsg: "Hola, quisiera información sobre productos IMPADOC",
  linkedin: "https://co.linkedin.com/company/impadoc",
  instagram: "https://www.instagram.com/impadoc/",
  facebook: "https://www.facebook.com/impadocsa",
  youtube: "https://www.youtube.com/@impadoc",
};

export const OFFICES = [
  {
    city: "Cali", badge: "Sede Principal",
    address: "Km 7 vía Cali – Jamundí\nZona Industrial El Cascajal",
    phone: "+57 321 638 33 38", phonePbx: "PBX (60 2) 555 2406",
    email: "ventas@impadoc.com", tel: "+573216383338", telPbx: "+6025552406",
    maps: "https://maps.google.com/?q=IMPADOC+Cali",
  },
  {
    city: "Bogotá", badge: null,
    address: "Km 0+750 Vía Chusacá – Silvania\nParque Industrial Tequendama IV, Lote 25",
    phone: "+57 317 428 7875", phonePbx: "PBX (60 1) 357 1800",
    email: "ventasbogota@impadoc.com", tel: "+573174287875", telPbx: "+6013571800",
    maps: "https://maps.google.com/?q=IMPADOC+Bogota",
  },
  {
    city: "Barranquilla", badge: null,
    address: "Calle 3 #51-107\nBarrio Barranquillita",
    phone: "+57 318 360 8351", phonePbx: null,
    email: "ventas@impadoc.com.co", tel: "+573183608351", telPbx: null,
    maps: "https://maps.google.com/?q=IMPADOC+Barranquilla",
  },
  {
    city: "Rionegro, Antioquia", badge: null,
    address: "Autopista MED-BOG, km 1\nVda. La Laja, Variante Belén",
    phone: "+57 317 381 1235", phonePbx: null,
    email: "haroldsaavedra@impadoc.com", tel: "+573173811235", telPbx: null,
    maps: "https://maps.google.com/?q=IMPADOC+Rionegro",
  },
];

export const PRODUCT_CATEGORIES = [
  { id: "interiores",         label: "Interiores",          color: "blue" },
  { id: "exteriores",         label: "Exteriores",          color: "blue" },
  { id: "acrilica",           label: "Línea Acrílica",      color: "blue" },
  { id: "drywall",            label: "Sistema Drywall",     color: "blue" },
  { id: "pisos",              label: "Pisos & Pegantes",    color: "blue" },
  { id: "impermeabilizantes", label: "Impermeabilizantes",  color: "red"  },
  { id: "industrial",         label: "Línea Industrial",    color: "gray" },
];

/* ── PRODUCT LINES ──────────────────────────────────────
 * Estructura oficial de IMPADOC (catalogo-de-productos).
 * Usado en la home como sección principal de "Acabados".
 * ─────────────────────────────────────────────────────── */
export const PRODUCT_LINES = [
  {
    id: "interiores",
    label: "Interiores",
    title: "Acabados Interiores",
    eyebrow: "LÍNEA 01",
    description: "Estucos, yesos y rellenos para muros interiores. Acabado fino, alta blancura y trabajabilidad superior.",
    image: "/images/banner-interiores.jpg",
    href: "/productos?cat=interiores",
    color: "blue" as const,
    featured: ["Yeso PRO", "Estucolisto", "Estucobras", "Estuco Tradicional"],
    count: 14,
  },
  {
    id: "exteriores",
    label: "Exteriores",
    title: "Acabados Exteriores",
    eyebrow: "LÍNEA 02",
    description: "Texturas, estucos y rellenos para fachadas. Resistencia a intemperie, UV y humedad ambiental.",
    image: "/images/banner-exteriores.jpg",
    href: "/productos?cat=exteriores",
    color: "blue" as const,
    featured: ["Impaextuco", "Impatextura", "Granitex", "RellenoListo Exterior"],
    count: 7,
  },
  {
    id: "acrilica",
    label: "Línea Acrílica",
    title: "Línea Acrílica",
    eyebrow: "LÍNEA 03",
    description: "Sistemas acrílicos de alta flexibilidad para texturas, impermeabilización y rellenos elásticos.",
    image: "/images/linea-acrilica-banner.jpg",
    href: "/productos?cat=acrilica",
    color: "clay" as const,
    featured: ["Impatextura Acrílico", "Aquablocker Acrílico", "Acrolán", "Estuco Acrílico"],
    count: 5,
  },
  {
    id: "drywall",
    label: "Sistema Drywall",
    title: "Sistema Drywall",
    eyebrow: "LÍNEA 04",
    description: "Estucos, masillas y adhesivos para paneles de yeso. Sistema completo de juntas y terminaciones.",
    image: "/images/drywall.jpg",
    href: "/productos?cat=drywall",
    color: "blue" as const,
    featured: ["Estucopanel SR", "Estucopanel TE", "PegaPanel", "Estucopanel Masilla"],
    count: 5,
  },
  {
    id: "pisos",
    label: "Pegantes & Pisos",
    title: "Instalación de Pisos",
    eyebrow: "LÍNEA 05",
    description: "Adhesivos cementicios y listos para cerámica, porcelanato, piscinas y grandes formatos.",
    image: "/images/pegadoc-banner.jpg",
    href: "/productos?cat=pisos",
    color: "blue" as const,
    featured: ["Pegadoc Cerámico", "Pegadoc Porcelanato", "Pegadoc Piscinas", "Boquillas"],
    count: 8,
  },
  {
    id: "impermeabilizantes",
    label: "Impermeabilizantes",
    title: "Impermeabilizantes",
    eyebrow: "LÍNEA 06",
    description: "Sistemas rígidos y elásticos para tanques, cubiertas, fachadas y zonas húmedas permanentes.",
    image: "/images/board-flex-banner.jpg",
    href: "/productos?cat=impermeabilizantes",
    color: "red" as const,
    featured: ["Aquablocker Cementicio", "Aquablocker Acrílico", "AquaRepel", "HidroLatex"],
    count: 4,
  },
  {
    id: "industrial",
    label: "Línea Industrial",
    title: "Línea Industrial · Minerales",
    eyebrow: "LÍNEA 07",
    description: "Carbonato de calcio, marmolina, talco, bentonita, caolín y barita micronizada para industria.",
    image: "/images/banner-pigmentos.jpg",
    href: "/industrial",
    color: "moss" as const,
    featured: ["Impacar", "Carex", "Marmolina", "Talco · Caolín · Bentonita"],
    count: 13,
  },
];

// Real PDF filenames from ft.zip — mapped to each product slug
// Images: actualizadas con fotos reales del paquete oficial (mayo 2026)
export const PRODUCTS = [
  // ── INTERIORES ─────────────────────────────────────────
  { slug:"yeso-escayola",           name:"Yeso Escayola",                    line:"Acabados Interiores", category:"interiores",   tag:"Interiores", tagColor:"blue",  image:"/images/yeso-pro.jpg",            description:"Yeso de alta pureza para molduras, figuras decorativas y acabados artísticos de precisión.",                    pdfUrl:"/fichas/EMV-031 Yeso Escayola.pdf",                 pdfSize:"0.8 MB" },
  { slug:"yeso-estucador-dp",       name:"Yeso Estucador DP",                line:"Acabados Interiores", category:"interiores",   tag:"Interiores", tagColor:"blue",  image:"/images/yeso-pro.jpg",            description:"Yeso de primera calidad para estucar paredes interiores. Alta blancura y acabado fino.",                         pdfUrl:"/fichas/EMV-013 Yeso Estucador D.P.pdf",            pdfSize:"0.9 MB" },
  { slug:"yeso-pro",                name:"Yeso PRO",                         line:"Acabados Interiores", category:"interiores",   tag:"Interiores", tagColor:"blue",  image:"/images/yeso-pro.jpg",            description:"Yeso profesional de alta resistencia para interiores. Fraguado controlado y acabado impecable.",                pdfUrl:"/fichas/EMV-027 Yeso Pro.pdf",                      pdfSize:"1.0 MB" },
  { slug:"estucolisto",             name:"Estucolisto",                      line:"Acabados Interiores", category:"interiores",   tag:"Interiores", tagColor:"blue",  image:"/images/estucolisto.jpg",         description:"Estuco en polvo listo para preparar. Excelente adherencia en superficies de yeso y concreto.",                 pdfUrl:"/fichas/EMV-015 Estucolisto.pdf",                   pdfSize:"1.0 MB" },
  { slug:"estuco-tradicional",      name:"Estuco Tradicional",               line:"Acabados Interiores", category:"interiores",   tag:"Interiores", tagColor:"blue",  image:"/images/estuco-tradicional.jpg",  description:"Estuco a la cal de alta calidad para interiores y exteriores. Acabado fino y durable.",                         pdfUrl:"/fichas/EMV-039 Estuco Tradicional.pdf",            pdfSize:"1.0 MB" },
  { slug:"estucobras",              name:"Estucobras",                       line:"Acabados Interiores", category:"interiores",   tag:"Interiores", tagColor:"blue",  image:"/images/estucobras.jpg",          description:"El estuco perfecto para grandes obras. Alta productividad y excelente acabado en grandes superficies.",         pdfUrl:"/fichas/EMV-006 Estucobras.pdf",                    pdfSize:"1.1 MB" },
  { slug:"estuco-capa-fina",        name:"Estuco Capa Fina",                 line:"Acabados Interiores", category:"interiores",   tag:"Interiores", tagColor:"blue",  image:"/images/estuco-capa-fina.jpg",    description:"Estuco de terminación para capa muy fina. Ideal para corrección de imperfecciones superficiales.",             pdfUrl:"/fichas/EMV-033 Estucolisto Capa Fina.pdf",         pdfSize:"0.9 MB" },
  { slug:"estuco-trio-blanco",      name:"EstucoTrío Blanco",                line:"Acabados Interiores", category:"interiores",   tag:"Interiores", tagColor:"blue",  image:"/images/estucolisto-plastico.jpg",description:"Sistema triple acción para interiores. Rellena, estucariza y termina en un solo proceso.",                     pdfUrl:"/fichas/Estuco 3 en 1.pdf",                         pdfSize:"1.0 MB" },
  { slug:"estucolisto-proyectable", name:"Estucolisto Proyectable",          line:"Acabados Interiores", category:"interiores",   tag:"Interiores", tagColor:"blue",  image:"/images/estucolisto-proyectable.jpg",description:"Estuco diseñado para aplicación con equipos de proyección mecánica. Alta productividad en obras grandes.",     pdfUrl:"/fichas/EMV-015 Estucolisto.pdf",                   pdfSize:"1.0 MB" },
  { slug:"estucopanel-sr",          name:"Estucopanel SR",                   line:"Sistema Drywall",     category:"interiores",   tag:"Drywall",    tagColor:"blue",  image:"/images/estucopanel-sr.jpg",      description:"Estuco de yeso para juntas de panel drywall. Secado rápido — sistema total en 4-5 horas.",                    pdfUrl:"/fichas/EMV-017 Estucopanel en polvo SR.pdf",       pdfSize:"1.1 MB" },
  { slug:"estucopanel-te",          name:"Estucopanel Tiempo Extendido",     line:"Sistema Drywall",     category:"interiores",   tag:"Drywall",    tagColor:"blue",  image:"/images/estucopanel-te.jpg",      description:"Estuco para juntas de drywall con mayor tiempo de trabajo. Ideal para proyectos de gran área.",               pdfUrl:"/fichas/EMV-016 E-panel Tiempo Ext..pdf",           pdfSize:"1.0 MB" },
  { slug:"pegapanel",               name:"PegaPanel",                        line:"Sistema Drywall",     category:"interiores",   tag:"Drywall",    tagColor:"blue",  image:"/images/pegapanel.jpg",           description:"Adhesivo especializado para instalación de paneles de drywall. Alta adherencia y resistencia.",               pdfUrl:"/fichas/EMV-032 PegaPanel.pdf",                     pdfSize:"0.9 MB" },
  { slug:"rellenolisto-int-fino",   name:"RellenoListo Interior Fino",       line:"Acabados Interiores", category:"interiores",   tag:"Interiores", tagColor:"blue",  image:"/images/rellenolisto-interior.jpg",description:"Relleno fino para corrección de imperfecciones en superficies interiores antes del estuco final.",            pdfUrl:"/fichas/EMV-024 Relleno Inter Gris.pdf",            pdfSize:"1.0 MB" },
  { slug:"rellenolisto-int-grueso", name:"RellenoListo Interior Grueso",     line:"Acabados Interiores", category:"interiores",   tag:"Interiores", tagColor:"blue",  image:"/images/rellenolisto-interior.jpg",description:"Relleno de capa gruesa para nivelación de superficies con irregularidades pronunciadas.",                    pdfUrl:"/fichas/EMV-024 Relleno Inter Gris.pdf",            pdfSize:"1.0 MB" },
  { slug:"estucopanel-masilla-sr",  name:"Estucopanel Masilla SR",           line:"Sistema Drywall",     category:"interiores",   tag:"Drywall",    tagColor:"blue",  image:"/images/estucopanel-masilla.jpg", description:"Masilla de secado rápido para el terminado de juntas de paneles drywall.",                                    pdfUrl:"/fichas/EMV-030 Estuco panel masilla.pdf",          pdfSize:"0.9 MB" },
  { slug:"estucolisto-plastico",    name:"Estucolisto Plástico",             line:"Acabados Interiores", category:"interiores",   tag:"Interiores", tagColor:"blue",  image:"/images/estucolisto-plastico.jpg",description:"Estuco plástico listo para usar. Acabado liso y brillante de alta calidad para interiores.",                  pdfUrl:"/fichas/EMV-038 Estucolisto plástico.pdf",          pdfSize:"1.0 MB" },

  // ── EXTERIORES ────────────────────────────────────────
  { slug:"impaextuco",              name:"Impaextuco",                       line:"Acabados Exteriores", category:"exteriores",   tag:"Exteriores", tagColor:"blue",  image:"/images/impaextuco.jpg",          description:"Estuco para exteriores de alta resistencia a la intemperie y humedad ambiental.",                              pdfUrl:"/fichas/EMV-011 Impaextuco.pdf",                    pdfSize:"1.1 MB" },
  { slug:"rellenolisto-ext-fino",   name:"RellenoListo Exterior Fino",       line:"Acabados Exteriores", category:"exteriores",   tag:"Exteriores", tagColor:"blue",  image:"/images/rellenolisto-exterior.jpg",description:"Relleno fino para corrección de imperfecciones en fachadas y superficies exteriores.",                       pdfUrl:"/fichas/EMV-020 Rellenolisto Exteriores.pdf",       pdfSize:"1.0 MB" },
  { slug:"rellenolisto-ext-grueso", name:"RellenoListo Exterior Grueso",     line:"Acabados Exteriores", category:"exteriores",   tag:"Exteriores", tagColor:"blue",  image:"/images/rellenolisto-exterior.jpg",description:"Relleno de capa gruesa para nivelación de fachadas con grandes irregularidades.",                            pdfUrl:"/fichas/EMV-020 Rellenolisto Exteriores.pdf",       pdfSize:"1.0 MB" },
  { slug:"impatextura",             name:"Impatextura",                      line:"Acabados Exteriores", category:"exteriores",   tag:"Exteriores", tagColor:"blue",  image:"/images/impatextura.jpg",         description:"Textura de base cementicia para fachadas. Resistente a rayos UV e intemperie.",                               pdfUrl:"/fichas/EMV-007 Impatextura.pdf",                   pdfSize:"1.2 MB" },
  { slug:"impatextura-acrilico",    name:"Impatextura Acrílico",             line:"Acabados Exteriores", category:"exteriores",   tag:"Exteriores", tagColor:"blue",  image:"/images/impatextura-acrilico.jpg",description:"Textura acrílica para fachadas con alta resistencia a intemperie, hongos y rayos UV.",                       pdfUrl:"/fichas/EMV-022 Impatextura Acrílico.pdf",          pdfSize:"1.3 MB" },
  { slug:"estucolisto-xtra-blanco", name:"Estucolisto Xtra Blanco",          line:"Acabados Exteriores", category:"exteriores",   tag:"Exteriores", tagColor:"blue",  image:"/images/estucolisto-xtra-blanco.jpg",description:"Estuco blanco de alta blancura para exteriores. Excelente resistencia a la lluvia.",                       pdfUrl:"/fichas/EMV-041 Estucolisto Xtra Blanco.pdf",       pdfSize:"0.9 MB" },
  { slug:"granitex",                name:"Granitex",                         line:"Acabados Exteriores", category:"exteriores",   tag:"Exteriores", tagColor:"blue",  image:"/images/granitex.jpg",            description:"Revestimiento texturizado tipo granito para fachadas arquitectónicas. Alta durabilidad y estética premium.",  pdfUrl:"/fichas/EMV-050 Granitex.pdf",                      pdfSize:"1.2 MB" },

  // ── VERSÁTILES (Interior y Exterior) ─────────────────
  { slug:"morterolisto",            name:"Morterolisto",                     line:"Interior y Exterior", category:"versatil",     tag:"Versátil",   tagColor:"blue",  image:"/images/morterolisto.jpg",        description:"Mortero listo para uso en interiores y exteriores. Excelente adherencia en cualquier sustrato.",             pdfUrl:"/fichas/EMV-012 Morterolisto.pdf",                  pdfSize:"1.0 MB" },
  { slug:"panetelisto",             name:"PaneteListo",                      line:"Interior y Exterior", category:"versatil",     tag:"Versátil",   tagColor:"blue",  image:"/images/panetelisto.jpg",         description:"Panete listo para revestir muros. Acabado uniforme y aplicación rápida en obras de gran tamaño.",           pdfUrl:"/fichas/EMV-012 Morterolisto.pdf",                  pdfSize:"1.0 MB" },
  { slug:"impaboquilla-blanca",     name:"Impaboquilla Blanca",              line:"Interior y Exterior", category:"versatil",     tag:"Versátil",   tagColor:"blue",  image:"/images/impaboquilla.jpg",        description:"Boquilla de terminación blanca para juntas de pisos y paredes. Interior y exterior.",                       pdfUrl:"/fichas/EMV-037 Impaboquilla.pdf",                  pdfSize:"0.9 MB" },
  { slug:"impaboquilla-beige",      name:"Impaboquilla Beige",               line:"Interior y Exterior", category:"versatil",     tag:"Versátil",   tagColor:"blue",  image:"/images/impaboquilla.jpg",        description:"Boquilla de terminación color beige para juntas de pisos y cerámicos.",                                      pdfUrl:"/fichas/EMV-037 Impaboquilla.pdf",                  pdfSize:"0.9 MB" },
  { slug:"boquilla-piscinas",       name:"Boquilla Piscinas",                line:"Instalación de Pisos", category:"versatil",    tag:"Piscinas",   tagColor:"blue",  image:"/images/boquilla-piscinas.jpg",   description:"Boquilla especializada para sellado de juntas en piscinas y zonas de agua permanente.",                    pdfUrl:"/fichas/EMV-037 Impaboquilla.pdf",                  pdfSize:"0.9 MB" },
  { slug:"hidrolatex",              name:"HidroLatex",                       line:"Interior y Exterior", category:"versatil",     tag:"Versátil",   tagColor:"blue",  image:"/images/aquarepel.jpg",           description:"Aditivo hidrófugo para morteros. Reduce la absorción de agua y mejora la durabilidad.",                     pdfUrl:"/fichas/EMV-045 AquaRepel (v01) (003).pdf",         pdfSize:"1.0 MB" },
  { slug:"pegadoc-ceramico-plus",   name:"Pegadoc Cerámico PLUS Gris",       line:"Instalación de Pisos", category:"versatil",   tag:"Pisos",      tagColor:"blue",  image:"/images/pegadoc-ceramico.jpg",    description:"Adhesivo cementicio gris para cerámica en interiores y exteriores. Alta adherencia.",                       pdfUrl:"/fichas/EMV-025 Pegadoc Cerámico Plus.pdf",         pdfSize:"1.2 MB" },
  { slug:"pegadoc-porcelanato-plus",name:"Pegadoc Porcelanato PLUS Gris",    line:"Instalación de Pisos", category:"versatil",   tag:"Pisos",      tagColor:"blue",  image:"/images/pegadoc-porcelanato.jpg", description:"Adhesivo de alto desempeño para porcelanato y grandes formatos. Agarre especial anti-deslizamiento.",      pdfUrl:"/fichas/EMV-026 Pegadoc Porcelanato Plus.pdf",      pdfSize:"1.4 MB" },
  { slug:"pegantelisto-ceramico",   name:"Pegante Listo Cerámico Gris",      line:"Instalación de Pisos", category:"versatil",   tag:"Pisos",      tagColor:"blue",  image:"/images/pegantelisto-ceramico.jpg", description:"Adhesivo listo para cerámica en presentación de pasta. Fácil aplicación.",                                pdfUrl:"/fichas/EMV-035 Pegantelisto Cerámico.pdf",         pdfSize:"1.0 MB" },
  { slug:"pegantelisto-porcelanato",name:"Pegante Listo Porcelanato Gris",   line:"Instalación de Pisos", category:"versatil",   tag:"Pisos",      tagColor:"blue",  image:"/images/pegantelisto-porcelanato.jpg", description:"Adhesivo listo en pasta para porcelanato. Sin necesidad de agua, listo para usar.",                    pdfUrl:"/fichas/EMV-036 Pegante Listo Porcelanato.pdf",     pdfSize:"1.0 MB" },
  { slug:"pegadoc-piscinas",        name:"Pegadoc Piscinas",                 line:"Instalación de Pisos", category:"versatil",   tag:"Piscinas",   tagColor:"blue",  image:"/images/pegadoc-piscinas.jpg",    description:"Adhesivo certificado para piscinas, jacuzzis y zonas de agua permanente.",                                   pdfUrl:"/fichas/EMV-046 Pegadoc Piscinas.pdf",              pdfSize:"1.2 MB" },
  { slug:"estuco-relleno-acrilico", name:"Estuco RellenoListo Acrílico",     line:"Línea Acrílica",     category:"versatil",     tag:"Acrílico",   tagColor:"blue",  image:"/images/relleno-acrilico.jpg",    description:"Relleno acrílico flexible para interiores y exteriores. Excelente adhesión y resistencia a fisuras.",       pdfUrl:"/fichas/Estuco Relleno 3 en 1.pdf",                 pdfSize:"1.0 MB" },
  { slug:"board-flex-juntas",       name:"Board Flex Juntas",                line:"Interior y Exterior", category:"versatil",     tag:"Nuevo",      tagColor:"green", image:"/images/board-flex.jpg",          description:"Sistema flexible para sellado de juntas en fachadas. Resistencia a movimientos y dilataciones.",            pdfUrl:"/fichas/EMV-051 Board Flex Juntas.pdf",             pdfSize:"1.1 MB" },
  { slug:"mgb40",                   name:"MGB-40",                           line:"Mortero Especial",    category:"versatil",     tag:"Versátil",   tagColor:"blue",  image:"/images/mgb40.jpg",               description:"Mortero técnico de alta resistencia para reparaciones estructurales y aplicaciones especiales.",            pdfUrl:"/fichas/EMV-012 Morterolisto.pdf",                  pdfSize:"1.0 MB" },

  // ── IMPERMEABILIZANTES ────────────────────────────────
  { slug:"aquablocker-cementicio",  name:"Aquablocker Cementicio",                 line:"Impermeabilizantes",  category:"impermeabilizantes", tag:"Impermeab.", tagColor:"red", image:"/images/aquablocker.jpg",           description:"Mortero de impermeabilización rígido para tanques, piscinas y estructuras hidráulicas.",            pdfUrl:"/fichas/EMV-052 Aqua Blocker Cementicio.pdf",       pdfSize:"1.1 MB" },
  { slug:"aquablocker-acrilico",    name:"Aquablocker Impermeabilizante Acrílico", line:"Impermeabilizantes",  category:"impermeabilizantes", tag:"Impermeab.", tagColor:"red", image:"/images/aquablocker-acrilico-banner.jpg", description:"Impermeabilizante acrílico elástico para cubiertas y terrazas expuestas al sol.",             pdfUrl:"/fichas/EMV-054 Aquablocker acrilico (v00).pdf",    pdfSize:"1.2 MB" },
  { slug:"aquarepel",               name:"AquaRepel",                              line:"Impermeabilizantes",  category:"impermeabilizantes", tag:"Impermeab.", tagColor:"red", image:"/images/aquarepel.jpg",             description:"Protector hidrófugo transparente para fachadas y muros. No modifica el aspecto original.",        pdfUrl:"/fichas/EMV-045 AquaRepel (v01) (003).pdf",         pdfSize:"1.0 MB" },
  { slug:"acrolan",                 name:"Acrolán",                                line:"Aditivos Especiales", category:"impermeabilizantes", tag:"Aditivo",    tagColor:"red", image:"/images/acrolan.jpg",               description:"Aditivo acrílico de adherencia para morteros y estucos. Mejora la flexibilidad y durabilidad.",  pdfUrl:"/fichas/EMV-048 Acrolán 50.pdf",                    pdfSize:"0.9 MB" },

  // ── LÍNEA INDUSTRIAL ─────────────────────────────────
  { slug:"impacar-2",               name:"Impacar 2",                        line:"Carbonato de Calcio",  category:"industrial",  tag:"Industrial", tagColor:"blue",  image:"/images/impacar-5.jpg",            description:"Carbonato de calcio precipitado fino. Malla 2 micras para industria plástica y caucho de alta precisión.",  pdfUrl:"/fichas/EMV-001 Impacar-2.pdf",                     pdfSize:"1.0 MB" },
  { slug:"impacar-5",               name:"Impacar 5",                        line:"Carbonato de Calcio",  category:"industrial",  tag:"Industrial", tagColor:"blue",  image:"/images/impacar-5.jpg",            description:"Carbonato de calcio de malla 5 micras. Para pinturas, plásticos y formulaciones industriales.",            pdfUrl:"/fichas/EMV-018 Impacar-5.pdf",                     pdfSize:"1.0 MB" },
  { slug:"impacar-5mc",             name:"Impacar 5MC",                      line:"Carbonato de Calcio",  category:"industrial",  tag:"Industrial", tagColor:"blue",  image:"/images/impacar-5.jpg",            description:"Carbonato de calcio 5 micras recubierto con ácido esteárico. Hidrofóbico para plásticos.",                pdfUrl:"/fichas/EMV-021 Impacar-5MC.pdf",                   pdfSize:"1.0 MB" },
  { slug:"impacar-24",              name:"Impacar 24",                       line:"Carbonato de Calcio",  category:"industrial",  tag:"Industrial", tagColor:"blue",  image:"/images/impacar-24.jpg",           description:"Carbonato de calcio malla 24 micras para aplicaciones de construcción y manufactura.",                    pdfUrl:"/fichas/EMV-023 Impacar-24.pdf",                    pdfSize:"1.0 MB" },
  { slug:"carex-45",                name:"Carex 45",                         line:"Carbonato de Calcio",  category:"industrial",  tag:"Industrial", tagColor:"blue",  image:"/images/carex-45.jpg",             description:"Carbonato de calcio malla 45 micras. Para caucho, plástico, pinturas y formulaciones industriales.",       pdfUrl:"/fichas/EMV-002 Carex-45.pdf",                      pdfSize:"1.1 MB" },
  { slug:"carex-38",                name:"Carex 38",                         line:"Carbonato de Calcio",  category:"industrial",  tag:"Industrial", tagColor:"blue",  image:"/images/carex-38.jpg",             description:"Carbonato de calcio precipitado malla 38 micras. Alta pureza para industria del caucho y plásticos.",     pdfUrl:"/fichas/EMV-003 Carex-38.pdf",                      pdfSize:"1.1 MB" },
  { slug:"carcal-75c",              name:"Carcal 75C",                       line:"Carbonato de Calcio",  category:"industrial",  tag:"Industrial", tagColor:"blue",  image:"/images/carex-45.jpg",             description:"Carbonato de calcio molido malla 75 micras recubierto. Para pinturas y aplicaciones especiales.",         pdfUrl:"/fichas/EMV-004 Carcal-75C.pdf",                    pdfSize:"1.0 MB" },
  { slug:"marmolina-mz30",          name:"Marmolina MZ-30",                  line:"Carbonato de Calcio",  category:"industrial",  tag:"Industrial", tagColor:"blue",  image:"/images/marmolina.jpg",            description:"Marmolina molida malla 30 para morteros decorativos, texturas y aplicaciones artísticas.",                pdfUrl:"/fichas/EMV-055 Marmolina MZ-30.pdf",               pdfSize:"1.0 MB" },
  { slug:"marmolina-mg60",          name:"Marmolina MG-60",                  line:"Carbonato de Calcio",  category:"industrial",  tag:"Industrial", tagColor:"blue",  image:"/images/marmolina.jpg",            description:"Marmolina de malla 60 micras para aplicaciones industriales, pinturas y texturas.",                       pdfUrl:"/fichas/EMV-009 Marmolina MG-60.pdf",               pdfSize:"1.0 MB" },
  { slug:"talco-impatal-45",        name:"Talco Impatal 45",                 line:"Otros Minerales",      category:"industrial",  tag:"Industrial", tagColor:"blue",  image:"/images/talco-impatal.png",        description:"Talco micronizado malla 45 para plásticos, caucho, pinturas y cosméticos industriales.",                  pdfUrl:"/fichas/EMV-014 Talco Impatal-45.pdf",              pdfSize:"1.0 MB" },
  { slug:"bentonita",               name:"Bentonita",                        line:"Otros Minerales",      category:"industrial",  tag:"Industrial", tagColor:"blue",  image:"/images/talco-impatal.png",        description:"Bentonita sódica para perforaciones, tratamiento de agua y aplicaciones industriales.",                   pdfUrl:"/fichas/EMV-019 Bentonita (03).pdf",                pdfSize:"1.0 MB" },
  { slug:"caolin",                  name:"Caolín",                           line:"Otros Minerales",      category:"industrial",  tag:"Industrial", tagColor:"blue",  image:"/images/talco-impatal.png",        description:"Caolín micronizado para cerámica, pinturas, papel y formulaciones industriales.",                         pdfUrl:"/fichas/EMV-047 Caolín 200.pdf",                    pdfSize:"1.0 MB" },
  { slug:"barita",                  name:"Barita",                           line:"Otros Minerales",      category:"industrial",  tag:"Industrial", tagColor:"blue",  image:"/images/talco-impatal.png",        description:"Sulfato de bario micronizado para pinturas anticorrosivas, caucho y fluidos de perforación.",             pdfUrl:"/fichas/EMV-058 Barita micronizado 284.pdf",        pdfSize:"1.0 MB" },
];

export const NAV_ITEMS = [
  { label: "Inicio",          href: "/"},
  { label: "Productos",       href: "/productos",
    hasMega: true,
    mega: {
      featured: { title: "Catálogo completo de acabados para construcción", label: "Líneas 2025", href: "/productos" },
      cols: [
        { title: "Interiores", items: [
          { label: "Yeso PRO",              href: "/productos/yeso-pro" },
          { label: "Estucolisto",           href: "/productos/estucolisto" },
          { label: "Estucobras",            href: "/productos/estucobras" },
          { label: "Estucopanel SR",        href: "/productos/estucopanel-sr" },
          { label: "Estucolisto Plástico",  href: "/productos/estucolisto-plastico" },
        ]},
        { title: "Exteriores", items: [
          { label: "Impaextuco",            href: "/productos/impaextuco" },
          { label: "Impatextura Acrílico",  href: "/productos/impatextura-acrilico" },
          { label: "Granitex",              href: "/productos/granitex" },
          { label: "RellenoListo Exterior", href: "/productos/rellenolisto-ext-fino" },
        ]},
        { title: "Pisos e Impermeab.", items: [
          { label: "Pegadoc Porcelanato",   href: "/productos/pegadoc-porcelanato-plus" },
          { label: "Pegadoc Piscinas",      href: "/productos/pegadoc-piscinas" },
          { label: "Aquablocker",           href: "/productos/aquablocker-cementicio" },
          { label: "AquaRepel",             href: "/productos/aquarepel" },
        ]},
      ],
    },
  },
  { label: "Acabados",        href: "/acabados" },
  { label: "Industrial",      href: "/industrial" },
  { label: "Nosotros",        href: "/nosotros" },
  { label: "Asesoría Técnica",href: "/asesoria-tecnica" },
  { label: "Distribuidores",  href: "/distribuidores" },
  { label: "Blog",            href: "/blog" },
];

export const BLOG_POSTS = [
  { slug:"nueva-linea-exteriores-2025", category:"Novedades 2026",  title:"Nueva línea de acabados exteriores: más durabilidad, mejor desempeño", excerpt:"IMPADOC presenta su catálogo renovado para exteriores, con formulaciones mejoradas.", date:"Mayo 2026",   readTime:"5 min", image:"/images/banner-exteriores.jpg" },
  { slug:"como-elegir-impermeabilizante", category:"Guía técnica",  title:"Cómo elegir el impermeabilizante correcto para tu proyecto",            excerpt:"Desde cubiertas planas hasta estructuras hidráulicas.",                                date:"Abril 2026",  readTime:"4 min", image:"/images/aquablocker.jpg" },
  { slug:"drywall-estucopanel-sr",       category:"Tutorial",       title:"Sistema Drywall con Estucopanel SR: instalación paso a paso",           excerpt:"Proceso completo para tratamiento de juntas en paneles de yeso.",                       date:"Marzo 2026",  readTime:"6 min", image:"/images/drywall.jpg" },
  { slug:"certificacion-icontec-2025",   category:"Empresa",        title:"IMPADOC renueva certificación ICONTEC para 2026",                       excerpt:"Mantenemos los más altos estándares de calidad en Colombia.",                          date:"Febrero 2026",readTime:"3 min", image:"/images/banner-interiores.jpg" },
];

export const TUTORIAL_VIDEOS = [
  { id:"GFI-82d07KY", title:"Sistema de Acabados para Interiores",             category:"Interiores",  duration:"4:12" },
  { id:"-uhGlP4uSjI", title:"Sistema de Acabados para Exteriores",             category:"Exteriores",  duration:"3:45" },
  { id:"SrnAbkQWt-8", title:"Sistema de Acabados para Drywall",                category:"Drywall",     duration:"5:08" },
  { id:"SqUwLMY4780", title:"Pegadoc: Adhesivo para Cerámica y Porcelanato",   category:"Pisos",       duration:"4:32" },
  { id:"9qTiMt1MWI8", title:"Estucobras — El Estuco perfecto para Grandes Obras", category:"Exteriores", duration:"3:56" },
];
