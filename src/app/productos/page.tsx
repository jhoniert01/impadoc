"use client";
import { useState, useMemo, useEffect, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import {
  ArrowRight, Download, FileText, SlidersHorizontal,
  Search, X, Grid3x3, LayoutGrid
} from "lucide-react";
import { PRODUCTS, PRODUCT_CATEGORIES, PRODUCT_LINES } from "@/data/site";

const tagCls: Record<string, string> = {
  blue:  "bg-[#1B2C5E] text-white",
  red:   "bg-[#E32118] text-white",
  green: "bg-[#1A7A4A] text-white",
};

/* ── Map products to refined "official" categories ── */
function refinedCategory(p: { slug: string; category: string; line: string; tag: string }) {
  const slug = p.slug;
  const line = (p.line || "").toLowerCase();
  const tag  = (p.tag  || "").toLowerCase();
  if (slug.includes("estucopanel") || slug.includes("pegapanel") || line.includes("drywall") || tag.includes("drywall"))
    return "drywall";
  if (slug.includes("acrilico") || slug.includes("acrolan") || slug.includes("aquablocker-acrilico") || slug.includes("hidrolatex"))
    return "acrilica";
  if (slug.includes("pegadoc") || slug.includes("pegantelisto") || slug.includes("impaboquilla") || line.includes("pisos") || tag.includes("pisos") || tag.includes("piscinas"))
    return "pisos";
  return p.category;
}

function ProductsContent() {
  const sp = useSearchParams();
  const router = useRouter();
  const initialCat = sp.get("cat") || "all";
  const initialQ   = sp.get("q") || "";

  const [activeFilter, setActiveFilter] = useState(initialCat);
  const [query, setQuery]               = useState(initialQ);

  useEffect(() => {
    const params = new URLSearchParams();
    if (activeFilter !== "all") params.set("cat", activeFilter);
    if (query.trim()) params.set("q", query.trim());
    const str = params.toString();
    router.replace(str ? `/productos?${str}` : "/productos", { scroll: false });
  }, [activeFilter, query, router]);

  const filtered = useMemo(() => {
    let arr = PRODUCTS.map(p => ({ ...p, _cat: refinedCategory(p) }));
    if (activeFilter !== "all") arr = arr.filter(p => p._cat === activeFilter);
    if (query.trim()) {
      const q = query.toLowerCase();
      arr = arr.filter(
        p =>
          p.name.toLowerCase().includes(q) ||
          p.line.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tag.toLowerCase().includes(q)
      );
    }
    return arr;
  }, [activeFilter, query]);

  const categoryCounts = useMemo(() => {
    const c: Record<string, number> = { all: PRODUCTS.length };
    PRODUCTS.forEach(p => {
      const cat = refinedCategory(p);
      c[cat] = (c[cat] || 0) + 1;
    });
    return c;
  }, []);

  const currentLine = PRODUCT_LINES.find(l => l.id === activeFilter);

  return (
    <>
      {/* ════════════════════════════════════════════
          HEADER
          ════════════════════════════════════════════ */}
      <section
        className="pt-[150px] lg:pt-[170px] pb-16 lg:pb-20 relative overflow-hidden"
        style={{ background: "#F8F5EE" }}
      >
        <div className="grid-tex absolute inset-0 opacity-40 pointer-events-none" />

        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 relative z-10">
          <div className="flex flex-wrap items-center gap-2 mono text-[10.5px] tracking-[0.16em] uppercase text-[#8E867B] mb-6">
            <Link href="/" className="hover:text-[#1B2C5E] transition-colors">INICIO</Link>
            <span>·</span>
            <span className="text-[#15130F]">CATÁLOGO DE PRODUCTOS</span>
            {currentLine && (
              <>
                <span>·</span>
                <span className="text-[#E32118]">{currentLine.label.toUpperCase()}</span>
              </>
            )}
          </div>

          <div className="grid lg:grid-cols-[1.4fr_0.6fr] gap-12 items-end">
            <div>
              <h1
                className="font-display"
                style={{
                  fontSize: "clamp(42px,6vw,84px)",
                  fontWeight: 700,
                  letterSpacing: "-0.04em",
                  lineHeight: 1.02,
                  color: "#1B2C5E",
                }}
              >
                {currentLine ? currentLine.title : "Catálogo"}<br />
                <em style={{ fontStyle: "italic", fontWeight: 600, color: "#E32118" }}>
                  {currentLine ? "línea 2026" : "completo"}
                </em>
              </h1>
              <p
                className="mt-6 max-w-[540px]"
                style={{ fontSize: "17px", color: "#2A2823", lineHeight: 1.65 }}
              >
                {currentLine
                  ? currentLine.description
                  : `Más de ${PRODUCTS.length} productos certificados ICONTEC NTC 2775. Fichas técnicas y especificaciones disponibles para descarga directa.`}
              </p>
            </div>

            {/* Search */}
            <div
              className="rounded-2xl p-2 flex items-center gap-2 border border-[#E5E1D6]"
              style={{ background: "#FFFFFF", boxShadow: "0 4px 14px rgba(15,30,69,.06)" }}
            >
              <Search size={16} className="text-[#1B2C5E] ml-3" strokeWidth={2.2} />
              <input
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Buscar producto, sistema o aplicación…"
                className="flex-1 bg-transparent text-[#15130F] placeholder-[#8E867B] text-[14px] py-2.5 outline-none"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-[#8E867B] hover:bg-[#EFEAE0] transition-colors"
                  aria-label="Limpiar búsqueda"
                >
                  <X size={15} />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          FILTERS BAR
          ════════════════════════════════════════════ */}
      <section
        className="py-6 sticky top-[112px] lg:top-[112px] z-30 border-y border-[#E5E1D6]"
        style={{
          background: "rgba(248,245,238,0.92)",
          backdropFilter: "saturate(180%) blur(20px)",
        }}
      >
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 overflow-x-auto pb-1 -mb-1 scrollbar-hide">
            <span className="flex items-center gap-1.5 mono text-[10.5px] tracking-[0.14em] uppercase text-[#8E867B] mr-2 flex-shrink-0">
              <SlidersHorizontal size={13} /> FILTRAR:
            </span>
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-4 py-2 rounded-full text-[12.5px] font-semibold border transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
                activeFilter === "all"
                  ? "bg-[#1B2C5E] text-white border-[#1B2C5E]"
                  : "bg-white text-[#15130F] border-[#E5E1D6] hover:border-[#1B2C5E]"
              }`}
            >
              Todos <span className="opacity-70 ml-1">({categoryCounts.all})</span>
            </button>
            {PRODUCT_CATEGORIES.map(cat => {
              const count = categoryCounts[cat.id] || 0;
              if (count === 0) return null;
              const active = activeFilter === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`px-4 py-2 rounded-full text-[12.5px] font-semibold border transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
                    active
                      ? cat.color === "red"
                        ? "bg-[#E32118] text-white border-[#E32118]"
                        : "bg-[#1B2C5E] text-white border-[#1B2C5E]"
                      : "bg-white text-[#15130F] border-[#E5E1D6] hover:border-[#1B2C5E]"
                  }`}
                >
                  {cat.label} <span className="opacity-70 ml-1">({count})</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          GRID
          ════════════════════════════════════════════ */}
      <section className="py-14 lg:py-20" style={{ background: "#F8F5EE" }}>
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between mb-8">
            <p className="mono text-[11px] tracking-[0.14em] uppercase text-[#8E867B]">
              {filtered.length} {filtered.length === 1 ? "PRODUCTO" : "PRODUCTOS"}
              {activeFilter !== "all" && (
                <span className="text-[#15130F]"> · {PRODUCT_CATEGORIES.find(c => c.id === activeFilter)?.label}</span>
              )}
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5">
            {filtered.map(p => (
              <article
                key={p.slug}
                className="group bg-white border border-[#E5E1D6] rounded-2xl overflow-hidden card-lift flex flex-col"
              >
                <Link
                  href={`/productos/${p.slug}`}
                  className="block overflow-hidden relative border-b border-[#E5E1D6]"
                  style={{ aspectRatio: "1/1", background: "#EFEAE0" }}
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
                        lineHeight: 1.25,
                        marginBottom: "6px",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {p.name}
                    </h3>
                  </Link>
                  <p
                    style={{ fontSize: "12.5px", color: "#8E867B", lineHeight: 1.55, flex: 1, marginBottom: "14px" }}
                    className="line-clamp-2"
                  >
                    {p.description}
                  </p>
                  <div className="flex items-center gap-2 pt-3 border-t border-[#E5E1D6]">
                    <a
                      href={p.pdfUrl}
                      download
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-[11px] font-bold text-white transition-all hover:-translate-y-px flex-1 justify-center"
                      style={{ background: "#E32118" }}
                    >
                      <Download size={12} /> FICHA
                    </a>
                    <Link
                      href={`/productos/${p.slug}`}
                      className="inline-flex items-center gap-1 px-3 py-2 rounded-lg text-[11px] font-bold border border-[#E5E1D6] text-[#1B2C5E] hover:bg-[#1B2C5E] hover:text-white hover:border-[#1B2C5E] transition-all"
                    >
                      Ver <ArrowRight size={11} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p
                className="font-display mb-3"
                style={{ fontSize: "22px", fontWeight: 700, color: "#1B2C5E", letterSpacing: "-0.025em" }}
              >
                Sin resultados
              </p>
              <p className="text-[14px] text-[#8E867B] mb-6">
                No encontramos productos con los filtros actuales.
              </p>
              <button
                onClick={() => { setActiveFilter("all"); setQuery(""); }}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#1B2C5E] text-white text-[13px] font-bold hover:bg-[#0F1E45] transition-colors"
              >
                Limpiar filtros <ArrowRight size={13} />
              </button>
            </div>
          )}
        </div>
      </section>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </>
  );
}

export default function ProductosPage() {
  return (
    <Suspense fallback={<div className="pt-[180px] text-center text-[#8E867B]">Cargando catálogo…</div>}>
      <ProductsContent />
    </Suspense>
  );
}
