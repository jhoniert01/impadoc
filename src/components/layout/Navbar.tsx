"use client";
import { useState, useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  X, ChevronDown, ArrowRight, Search, Phone, Mail,
  MessageCircle, FileText, MapPin, Briefcase, Sparkles
} from "lucide-react";
import { NAV_ITEMS, COMPANY, PRODUCTS } from "@/data/site";

/* ──────────────────────────────────────────────────────────
   Navbar — IMPADOC Brand System 2026
   • Cream glass header with proper logo proportions
   • Side-drawer mega menu, fully accessible
   • Real product search with live filtering
   • Pure CSS animations (no framer-motion dependency)
   ────────────────────────────────────────────────────────── */
export default function Navbar() {
  const [scrolled, setScrolled]       = useState(false);
  const [drawerOpen, setDrawerOpen]   = useState(false);
  const [megaOpen, setMegaOpen]       = useState<string | null>(null);
  const [searchOpen, setSearchOpen]   = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);
  const megaCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* ── Mega menu hover handlers with delay ── */
  const openMega = (label: string) => {
    if (megaCloseTimer.current) {
      clearTimeout(megaCloseTimer.current);
      megaCloseTimer.current = null;
    }
    setMegaOpen(label);
  };
  const scheduleMegaClose = () => {
    if (megaCloseTimer.current) clearTimeout(megaCloseTimer.current);
    megaCloseTimer.current = setTimeout(() => setMegaOpen(null), 220);
  };
  const cancelMegaClose = () => {
    if (megaCloseTimer.current) {
      clearTimeout(megaCloseTimer.current);
      megaCloseTimer.current = null;
    }
  };

  /* ── Scroll detection ── */
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 16);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  /* ── Lock body when drawer / search open ── */
  useEffect(() => {
    const lock = drawerOpen || searchOpen;
    document.body.style.overflow = lock ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen, searchOpen]);

  /* ── ESC closes overlays ── */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setDrawerOpen(false);
        setSearchOpen(false);
        setMegaOpen(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  /* ── Focus search input on open ── */
  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 80);
    }
  }, [searchOpen]);

  /* ── Search filtering ── */
  const searchResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return [];
    return PRODUCTS
      .filter(p =>
        p.name.toLowerCase().includes(q)        ||
        p.line.toLowerCase().includes(q)        ||
        p.category.toLowerCase().includes(q)    ||
        p.description.toLowerCase().includes(q) ||
        (p.tag || "").toLowerCase().includes(q)
      )
      .slice(0, 8);
  }, [searchQuery]);

  /* ── Header surface — adapts to scroll
       Uses opaque cream tones to match the official paper logo background ── */
  const headerStyle = scrolled
    ? {
        background: "#F2EDE0",
        borderColor: "rgba(15,30,69,0.10)",
        boxShadow: "0 8px 40px rgba(15,30,69,0.10)",
      }
    : {
        background: "#F2EDE0",
        borderColor: "rgba(15,30,69,0.06)",
        boxShadow: "0 2px 14px rgba(15,30,69,0.04)",
      };

  return (
    <>
      {/* ────────  STYLE — local animations  ──────── */}
      <style jsx>{`
        @keyframes navFadeDown {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes navFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes navSlideDown {
          from { opacity: 0; transform: translateY(-40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes navSlideLeft {
          from { transform: translateX(100%); }
          to   { transform: translateX(0); }
        }
        .anim-megapanel { animation: navFadeDown 0.22s cubic-bezier(.2,.7,.2,1) both; }
        .anim-backdrop  { animation: navFadeIn 0.22s ease both; }
        .anim-searchbox { animation: navSlideDown 0.28s cubic-bezier(.2,.7,.2,1) both; }
        .anim-drawer    { animation: navSlideLeft 0.36s cubic-bezier(.2,.7,.2,1) both; }
      `}</style>

      {/* ════════════════════════════════════════════
          HEADER
          ════════════════════════════════════════════ */}
      <header className="fixed top-0 left-0 right-0 z-50">
        {/* Top utility strip */}
        <div
          className="hidden lg:flex items-center justify-between px-8 py-2 text-[11px] mono uppercase tracking-[0.14em]"
          style={{
            background: "#0F1E45",
            color: "rgba(255,255,255,0.72)",
          }}
        >
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E32118] pulse-dot" />
              Cali · Valle del Cauca — Colombia
            </span>
            <span className="text-white/35">·</span>
            <span>ICONTEC NTC 2775 · +58 AÑOS DE OFICIO</span>
          </div>
          <div className="flex items-center gap-5">
            <a href={`tel:${COMPANY.whatsapp}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone size={11} /> {COMPANY.whatsapp.replace(/^57/, "+57 ")}
            </a>
            <span className="text-white/35">·</span>
            <a href="mailto:ventas@impadoc.com" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail size={11} /> ventas@impadoc.com
            </a>
          </div>
        </div>

        {/* Main nav bar */}
        <div
          className="border-b transition-all duration-300"
          style={headerStyle}
        >
          <div className="max-w-[1440px] mx-auto px-5 lg:px-8">
            <div className={`flex items-center justify-between gap-6 ${scrolled ? "py-3" : "py-4"} transition-all duration-300`}>
              {/* ── Logo ── */}
              <Link
                href="/"
                className="flex-shrink-0 flex items-center group"
                aria-label="IMPADOC — Inicio"
                onClick={() => setDrawerOpen(false)}
              >
                <Image
                  src="/images/logo-impadoc-paper.jpg"
                  alt="IMPADOC — Materiales que Construyen Confianza"
                  width={280}
                  height={70}
                  priority
                  className={`${scrolled ? "h-12" : "h-14"} w-auto transition-all duration-300 group-hover:opacity-95`}
                />
              </Link>

              {/* ── Desktop nav links ── */}
              <ul className="hidden xl:flex items-center gap-1 flex-1 justify-center">
                {NAV_ITEMS.map(item => (
                  <li
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => item.hasMega && openMega(item.label)}
                    onMouseLeave={() => item.hasMega && scheduleMegaClose()}
                  >
                    {item.hasMega ? (
                      <button
                        className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-[13.5px] font-semibold text-[#0F1E45]/85 hover:text-[#0F1E45] hover:bg-[#0F1E45]/[0.05] transition-all duration-200 whitespace-nowrap"
                        aria-expanded={megaOpen === item.label}
                      >
                        {item.label}
                        <ChevronDown
                          size={12}
                          className={`transition-transform duration-200 ${megaOpen === item.label ? "rotate-180" : ""}`}
                        />
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        className="flex items-center px-4 py-2.5 rounded-xl text-[13.5px] font-semibold text-[#0F1E45]/85 hover:text-[#0F1E45] hover:bg-[#0F1E45]/[0.05] transition-all duration-200 whitespace-nowrap"
                      >
                        {item.label}
                      </Link>
                    )}

                    {/* Mega panel */}
                    {item.hasMega && item.mega && megaOpen === item.label && (
                      <div
                        className="fixed left-0 right-0 top-[100%] anim-megapanel"
                        style={{ paddingTop: 0 }}
                        onMouseEnter={cancelMegaClose}
                        onMouseLeave={scheduleMegaClose}
                      >
                        {/* Invisible bridge — covers the gap between button and panel */}
                        <div className="absolute -top-3 left-0 right-0 h-3" />
                        <div className="max-w-[1320px] mx-auto px-6">
                          <div
                            className="rounded-b-3xl overflow-hidden"
                            style={{
                              background: "rgba(248,245,238,0.99)",
                              backdropFilter: "blur(24px)",
                              boxShadow: "0 32px 80px rgba(15,30,69,.18)",
                              border: "1px solid #E5E1D6",
                              borderTop: "none",
                            }}
                          >
                            <div className="grid grid-cols-[1.6fr_1fr_1fr_1fr] gap-8 p-10">
                              {/* Featured */}
                              <div
                                className="rounded-2xl p-8 flex flex-col justify-end min-h-[260px] relative overflow-hidden"
                                style={{ background: "linear-gradient(135deg, #0F1E45 0%, #1B2C5E 100%)" }}
                              >
                                <div
                                  className="absolute inset-0 opacity-30"
                                  style={{
                                    backgroundImage:
                                      "linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px)",
                                    backgroundSize: "32px 32px",
                                  }}
                                />
                                <div
                                  className="absolute -top-12 -right-12 w-44 h-44 rounded-full opacity-25"
                                  style={{ background: "radial-gradient(circle, #E32118, transparent 70%)" }}
                                />
                                <div className="relative z-10">
                                  <p className="mono text-[10px] tracking-[0.16em] uppercase text-white/45 mb-3">
                                    {item.mega.featured.label}
                                  </p>
                                  <h3 className="text-[20px] font-bold text-white leading-tight mb-5 font-display">
                                    {item.mega.featured.title}
                                  </h3>
                                  <Link
                                    href={item.mega.featured.href}
                                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#E32118] text-white text-[12.5px] font-bold hover:bg-[#FF2E25] transition-all hover:gap-3"
                                    onClick={() => setMegaOpen(null)}
                                  >
                                    Ver catálogo completo <ArrowRight size={13} />
                                  </Link>
                                </div>
                              </div>

                              {/* Columns */}
                              {item.mega.cols.map(col => (
                                <div key={col.title}>
                                  <h4 className="mono text-[10.5px] tracking-[0.14em] uppercase text-[#8E867B] mb-4 pb-3 border-b border-[#E5E1D6]">
                                    {col.title}
                                  </h4>
                                  <ul className="space-y-0">
                                    {col.items.map(ci => (
                                      <li key={ci.label}>
                                        <Link
                                          href={ci.href}
                                          onClick={() => setMegaOpen(null)}
                                          className="flex items-center gap-2 text-[13.5px] font-medium text-[#15130F] hover:text-[#1B2C5E] py-2 transition-colors group"
                                        >
                                          <span className="text-[#E32118] opacity-0 group-hover:opacity-100 transition-opacity text-[10px]">▸</span>
                                          <span className="group-hover:translate-x-1 transition-transform">{ci.label}</span>
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>

              {/* ── Right actions ── */}
              <div className="flex items-center gap-2">
                {/* Search */}
                <button
                  onClick={() => setSearchOpen(true)}
                  className="hidden sm:flex w-10 h-10 rounded-xl items-center justify-center text-[#0F1E45]/75 hover:text-[#0F1E45] hover:bg-[#0F1E45]/[0.06] transition-all"
                  aria-label="Buscar productos"
                >
                  <Search size={17} strokeWidth={2.2} />
                </button>

                {/* WhatsApp */}
                <a
                  href={`https://api.whatsapp.com/send?phone=${COMPANY.whatsapp}&text=${encodeURIComponent(COMPANY.whatsappMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden lg:flex items-center gap-2 px-3.5 py-2.5 text-[12.5px] font-bold rounded-xl transition-all hover:-translate-y-px"
                  style={{
                    background: "rgba(37,211,102,0.1)",
                    color: "#0F8542",
                    border: "1px solid rgba(37,211,102,0.25)",
                  }}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                  </svg>
                  WhatsApp
                </a>

                {/* Contact CTA */}
                <Link
                  href="/contacto"
                  className="hidden md:flex items-center gap-2 px-4 py-2.5 text-[13px] font-bold rounded-xl transition-all hover:-translate-y-px hover:shadow-blue"
                  style={{ background: "#1B2C5E", color: "#fff" }}
                >
                  Contáctenos
                  <ArrowRight size={13} />
                </Link>

                {/* Hamburger (drawer toggle) */}
                <button
                  className="w-11 h-11 rounded-xl flex items-center justify-center transition-all hover:bg-[#0F1E45]/[0.06] group"
                  onClick={() => setDrawerOpen(true)}
                  aria-label="Abrir menú"
                >
                  <div className="flex flex-col gap-[5px]">
                    <span className="w-5 h-[2px] bg-[#0F1E45] rounded-full transition-all group-hover:w-4" />
                    <span className="w-5 h-[2px] bg-[#0F1E45] rounded-full" />
                    <span className="w-5 h-[2px] bg-[#0F1E45] rounded-full transition-all group-hover:w-4 group-hover:ml-1" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ════════════════════════════════════════════
          SEARCH OVERLAY — full screen modern
          ════════════════════════════════════════════ */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-[200] anim-backdrop"
          style={{ background: "rgba(15,30,69,0.78)", backdropFilter: "blur(8px)" }}
          onClick={() => setSearchOpen(false)}
        >
          <div
            className="max-w-[760px] mx-auto mt-[12vh] px-5 anim-searchbox"
            onClick={e => e.stopPropagation()}
          >
            <div
              className="rounded-3xl overflow-hidden"
              style={{
                background: "#F8F5EE",
                boxShadow: "0 40px 100px rgba(15,30,69,.5)",
                border: "1px solid #E5E1D6",
              }}
            >
              {/* Input */}
              <div className="flex items-center gap-4 px-6 py-5 border-b border-[#E5E1D6]">
                <Search size={20} className="text-[#1B2C5E]" strokeWidth={2.2} />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Buscar productos, fichas técnicas, sistemas…"
                  className="flex-1 bg-transparent text-[#15130F] placeholder-[#8E867B] text-[16px] font-medium outline-none"
                />
                <button
                  onClick={() => { setSearchOpen(false); setSearchQuery(""); }}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-[#8E867B] hover:bg-[#0F1E45]/[0.06] hover:text-[#15130F] transition-colors"
                  aria-label="Cerrar búsqueda"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Results */}
              <div className="max-h-[60vh] overflow-y-auto">
                {!searchQuery.trim() && (
                  <div className="p-6">
                    <p className="mono text-[10.5px] tracking-[0.16em] uppercase text-[#8E867B] mb-4">
                      SUGERENCIAS POPULARES
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["Estucolisto", "Yeso PRO", "Drywall", "Granitex", "Impatextura", "Aquablocker", "Pegadoc"].map(s => (
                        <button
                          key={s}
                          onClick={() => setSearchQuery(s)}
                          className="px-3.5 py-1.5 text-[12.5px] font-medium rounded-lg bg-white border border-[#E5E1D6] text-[#15130F] hover:border-[#1B2C5E] hover:text-[#1B2C5E] transition-colors"
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                    <div className="mt-6 pt-6 border-t border-[#E5E1D6] grid grid-cols-2 gap-3">
                      {[
                        { icon: <FileText size={14} />, label: "Catálogo completo", href: "/productos" },
                        { icon: <MapPin   size={14} />, label: "Distribuidores",    href: "/distribuidores" },
                        { icon: <Briefcase size={14} />,label: "Asesoría técnica",  href: "/asesoria-tecnica" },
                        { icon: <Sparkles size={14} />, label: "Línea Industrial",   href: "/industrial" },
                      ].map(s => (
                        <Link
                          key={s.label}
                          href={s.href}
                          onClick={() => setSearchOpen(false)}
                          className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#E5E1D6] hover:border-[#1B2C5E] text-[#15130F] hover:text-[#1B2C5E] transition-colors group"
                        >
                          <span className="text-[#E32118]">{s.icon}</span>
                          <span className="text-[13px] font-semibold">{s.label}</span>
                          <ArrowRight size={12} className="ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {searchQuery.trim() && searchResults.length > 0 && (
                  <div className="p-4">
                    <p className="mono text-[10.5px] tracking-[0.16em] uppercase text-[#8E867B] px-3 pb-3">
                      {searchResults.length} RESULTADO{searchResults.length !== 1 ? "S" : ""}
                    </p>
                    <div className="space-y-1">
                      {searchResults.map(p => (
                        <Link
                          key={p.slug}
                          href={`/productos/${p.slug}`}
                          onClick={() => { setSearchOpen(false); setSearchQuery(""); }}
                          className="flex items-center gap-4 p-3 rounded-xl hover:bg-white border border-transparent hover:border-[#E5E1D6] transition-all group"
                        >
                          <div className="w-12 h-12 rounded-lg bg-white border border-[#E5E1D6] flex-shrink-0 overflow-hidden flex items-center justify-center">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={p.image} alt={p.name} className="w-full h-full object-contain p-1" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-[13.5px] font-bold text-[#15130F] truncate group-hover:text-[#1B2C5E]">
                              {p.name}
                            </p>
                            <p className="mono text-[10px] tracking-[0.08em] uppercase text-[#8E867B] truncate">
                              {p.line}
                            </p>
                          </div>
                          <ArrowRight size={14} className="text-[#1B2C5E] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all flex-shrink-0" />
                        </Link>
                      ))}
                    </div>
                    <Link
                      href={`/productos?q=${encodeURIComponent(searchQuery)}`}
                      onClick={() => { setSearchOpen(false); setSearchQuery(""); }}
                      className="flex items-center justify-center gap-2 mt-3 mx-3 p-3 rounded-xl bg-[#1B2C5E] text-white text-[12.5px] font-bold hover:bg-[#0F1E45] transition-colors"
                    >
                      Ver todos los productos <ArrowRight size={13} />
                    </Link>
                  </div>
                )}

                {searchQuery.trim() && searchResults.length === 0 && (
                  <div className="p-10 text-center">
                    <p className="text-[14px] text-[#8E867B] mb-3">
                      Sin resultados para <span className="font-semibold text-[#15130F]">“{searchQuery}”</span>
                    </p>
                    <Link
                      href="/productos"
                      onClick={() => { setSearchOpen(false); setSearchQuery(""); }}
                      className="inline-flex items-center gap-2 mono text-[10.5px] uppercase tracking-[0.14em] text-[#1B2C5E] hover:text-[#E32118] transition-colors"
                    >
                      Ver catálogo completo <ArrowRight size={11} />
                    </Link>
                  </div>
                )}
              </div>

              {/* Footer hint */}
              <div className="px-6 py-3 border-t border-[#E5E1D6] flex items-center justify-between mono text-[10px] tracking-[0.12em] uppercase text-[#8E867B]">
                <span>ESC PARA CERRAR</span>
                <span>↵ ABRIR RESULTADO</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ════════════════════════════════════════════
          SIDE DRAWER MENU — premium, full
          ════════════════════════════════════════════ */}
      {drawerOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-[180] anim-backdrop"
            style={{ background: "rgba(15,30,69,0.55)", backdropFilter: "blur(4px)" }}
            onClick={() => setDrawerOpen(false)}
          />

          {/* Drawer */}
          <aside
            className="fixed top-0 right-0 bottom-0 w-full md:w-[440px] z-[190] overflow-y-auto anim-drawer"
            style={{
              background: "linear-gradient(180deg, #0F1E45 0%, #15130F 100%)",
              boxShadow: "-32px 0 60px rgba(0,0,0,0.3)",
            }}
          >
            {/* Decorative grid */}
            <div className="absolute inset-0 opacity-25 pointer-events-none grid-tex-dark" />
            <div
              className="absolute top-0 left-0 right-0 h-1/3 opacity-40 pointer-events-none"
              style={{ background: "radial-gradient(ellipse at top right, rgba(227,33,24,0.25), transparent 70%)" }}
            />

            <div className="relative z-10 p-8 md:p-10">
              {/* Header */}
              <div className="flex items-center justify-between mb-12">
                <Image
                  src="/images/logo-impadoc-azul.jpg"
                  alt="IMPADOC"
                  width={240}
                  height={60}
                  className="h-12 w-auto rounded-md"
                />
                <button
                  onClick={() => setDrawerOpen(false)}
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-white transition-all hover:bg-white/10"
                  aria-label="Cerrar menú"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Small label */}
              <p className="mono text-[10.5px] tracking-[0.18em] uppercase text-white/40 mb-6">
                NAVEGACIÓN — VOL. 2026
              </p>

              {/* Nav list */}
              <nav className="mb-10">
                {NAV_ITEMS.map((item, i) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setDrawerOpen(false)}
                    className="group block py-4 border-b border-white/8 drawer-item"
                    style={{ animationDelay: `${i * 50 + 100}ms` }}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className="text-[26px] md:text-[28px] font-display font-bold text-white leading-none transition-colors group-hover:text-[#E32118]"
                        style={{ letterSpacing: "-0.03em" }}
                      >
                        {item.label}
                      </span>
                      <ArrowRight
                        size={18}
                        className="text-white/30 group-hover:text-[#E32118] group-hover:translate-x-1 transition-all"
                      />
                    </div>
                  </Link>
                ))}
                <Link
                  href="/trabaja-con-nosotros"
                  onClick={() => setDrawerOpen(false)}
                  className="group block py-4 border-b border-white/8 drawer-item"
                  style={{ animationDelay: `${NAV_ITEMS.length * 50 + 100}ms` }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[26px] md:text-[28px] font-display font-bold text-white leading-none transition-colors group-hover:text-[#E32118]" style={{ letterSpacing: "-0.03em" }}>
                      Trabaja con Nosotros
                    </span>
                    <ArrowRight size={18} className="text-white/30 group-hover:text-[#E32118] group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              </nav>

              {/* CTAs */}
              <div className="space-y-3 mb-10">
                <a
                  href={`https://api.whatsapp.com/send?phone=${COMPANY.whatsapp}&text=${encodeURIComponent(COMPANY.whatsappMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 w-full py-4 text-white font-bold rounded-xl text-[13.5px] transition-all hover:-translate-y-px"
                  style={{ background: "#25D366", boxShadow: "0 12px 30px rgba(37,211,102,0.3)" }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                  </svg>
                  Escribir por WhatsApp
                </a>
                <Link
                  href="/contacto"
                  onClick={() => setDrawerOpen(false)}
                  className="flex items-center justify-center gap-2.5 w-full py-4 font-bold rounded-xl text-[13.5px] transition-all hover:-translate-y-px"
                  style={{ background: "#E32118", color: "#fff", boxShadow: "0 12px 30px rgba(227,33,24,0.32)" }}
                >
                  <MessageCircle size={15} /> Contáctenos
                </Link>
              </div>

              {/* Contact info */}
              <div className="pt-8 border-t border-white/10 space-y-3">
                <p className="mono text-[10.5px] tracking-[0.18em] uppercase text-white/40 mb-4">
                  SEDE PRINCIPAL — CALI
                </p>
                <a href={`tel:${COMPANY.whatsapp}`} className="flex items-center gap-3 text-white/75 hover:text-white text-[13px] transition-colors">
                  <Phone size={12} className="text-[#E32118]" />
                  +57 321 638 33 38
                </a>
                <a href="mailto:ventas@impadoc.com" className="flex items-center gap-3 text-white/75 hover:text-white text-[13px] transition-colors">
                  <Mail size={12} className="text-[#E32118]" />
                  ventas@impadoc.com
                </a>
                <p className="flex items-center gap-3 text-white/55 text-[12px]">
                  <MapPin size={12} className="text-[#E32118]" />
                  Km 7 vía Cali – Jamundí · Zona Industrial El Cascajal
                </p>
              </div>

              {/* Social */}
              <div className="mt-8 flex items-center gap-3">
                {[
                  { href: COMPANY.linkedin,   icon: "in" },
                  { href: COMPANY.instagram,  icon: "ig" },
                  { href: COMPANY.facebook,   icon: "fb" },
                  { href: COMPANY.youtube,    icon: "yt" },
                ].map(s => (
                  <a
                    key={s.icon}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-white/65 hover:text-white border border-white/12 hover:border-[#E32118] hover:bg-[#E32118] transition-all mono text-[10px] uppercase font-bold"
                    aria-label={s.icon}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>

              <p className="mono text-[10px] tracking-[0.18em] uppercase text-white/30 mt-10 pt-6 border-t border-white/8">
                IMPADOC S.A.S · ICONTEC NTC 2775
                <br />
                V 2026 · 58 AÑOS DE OFICIO
              </p>
            </div>
          </aside>
        </>
      )}
    </>
  );
}
