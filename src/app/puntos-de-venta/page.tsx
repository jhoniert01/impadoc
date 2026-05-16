import type { Metadata } from "next";
import { MapPin, Phone, Search, ArrowRight } from "lucide-react";
import { Button, Eyebrow, SectionHeader } from "@/components/ui";

export const metadata: Metadata = { title: "Puntos de Venta" };

const cities = [
  {
    region: "Valle del Cauca",
    stores: [
      { name: "IMPADOC Cali — Sede Principal", address: "Km 7 vía Cali–Jamundí, Zona Industrial El Cascajal", phone: "321 638 33 38", type: "Sede" },
      { name: "Ferretería Construmax", address: "Calle 5 #38-25, Cali", phone: "316 000 0001", type: "Distribuidor" },
      { name: "Materiales El Constructor", address: "Av. 6N #23-12, Cali", phone: "316 000 0002", type: "Distribuidor" },
      { name: "Ferretería La Economía", address: "Carrera 1 #12-34, Buenaventura", phone: "316 000 0003", type: "Distribuidor" },
    ],
  },
  {
    region: "Bogotá y Cundinamarca",
    stores: [
      { name: "IMPADOC Bogotá", address: "Km 0+750 Vía Chusacá–Silvania, Parque Industrial Tequendama IV Lote 25", phone: "317 428 7875", type: "Sede" },
      { name: "Construfacil Bogotá Norte", address: "Calle 170 #15-45, Bogotá", phone: "316 000 0004", type: "Distribuidor" },
      { name: "Ferretería Central Bogotá", address: "Carrera 30 #6-02, Bogotá", phone: "316 000 0005", type: "Distribuidor" },
      { name: "Materiales & Acabados Soacha", address: "Calle 3 #7-88, Soacha", phone: "316 000 0006", type: "Distribuidor" },
    ],
  },
  {
    region: "Antioquia",
    stores: [
      { name: "IMPADOC Rionegro", address: "Autopista MED-BOG km 1, Vda. La Laja, Variante Belén", phone: "317 381 1235", type: "Sede" },
      { name: "Ferretería El Paisa", address: "Carrera 45 #12-67, Medellín", phone: "316 000 0007", type: "Distribuidor" },
      { name: "Construhogar Envigado", address: "Calle 36Sur #43-20, Envigado", phone: "316 000 0008", type: "Distribuidor" },
    ],
  },
  {
    region: "Costa Atlántica",
    stores: [
      { name: "IMPADOC Barranquilla", address: "Calle 3 #51-107, Barrio Barranquillita", phone: "318 360 8351", type: "Sede" },
      { name: "Ferretería El Costeño", address: "Carrera 44 #75-34, Barranquilla", phone: "316 000 0009", type: "Distribuidor" },
      { name: "Materiales Caribe", address: "Calle 30 #20-15, Cartagena", phone: "316 000 0010", type: "Distribuidor" },
    ],
  },
];

export default function PuntosVentaPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-[calc(72px+80px)] pb-20 bg-[#0F1E45] relative overflow-hidden">
        <div className="absolute inset-0 grid-texture" />
        <div className="relative z-10 max-w-[1280px] mx-auto px-12">
          <Eyebrow light>Puntos de Venta</Eyebrow>
          <h1 className="font-display text-[clamp(36px,5vw,68px)] font-extrabold leading-[1.05] tracking-[-0.03em] text-white max-w-[650px] mb-6">
            IMPADOC disponible en <span className="text-[#5C8FE8]">toda Colombia</span>
          </h1>
          <p className="text-lg font-light text-white/55 max-w-[500px] leading-relaxed mb-10">
            Encuentre nuestros productos en más de 300 ferreterías y distribuidores autorizados en las principales ciudades del país.
          </p>

          {/* Search bar (visual — integrar con mapa en producción) */}
          <div className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-xl p-2 max-w-[480px]">
            <Search size={18} className="text-white/40 ml-2 flex-shrink-0" />
            <input
              type="text"
              placeholder="Buscar por ciudad o zona..."
              className="flex-1 bg-transparent text-white placeholder-white/30 text-sm outline-none py-1"
            />
            <button className="px-4 py-2 bg-[#1B2C5E] text-white text-sm font-semibold rounded-lg flex-shrink-0 hover:bg-[#2F4593] transition-colors">
              Buscar
            </button>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <div className="bg-[#1B2C5E] py-8">
        <div className="max-w-[1280px] mx-auto px-12 flex flex-wrap justify-between gap-6">
          {[
            { n: "300+", l: "Puntos de venta" },
            { n: "4", l: "Sedes propias" },
            { n: "32", l: "Departamentos cubiertos" },
            { n: "1000+", l: "Obras abastecidas / año" },
          ].map(s => (
            <div key={s.l} className="text-center">
              <p className="font-display text-3xl font-extrabold text-white">{s.n}</p>
              <p className="text-sm text-white/55 mt-0.5">{s.l}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stores by region */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-12">
          <div className="mb-12">
            <SectionHeader eyebrow="Directorio" title={<>Puntos de venta por <em className="not-italic text-[#1B2C5E]">región</em></>}
              subtitle="Sedes propias IMPADOC y distribuidores autorizados en toda Colombia." />
          </div>

          <div className="space-y-12">
            {cities.map((region) => (
              <div key={region.region}>
                <h3 className="font-display text-xl font-bold text-[#15130F] mb-5 flex items-center gap-3">
                  <MapPin size={18} className="text-[#1B2C5E]" />
                  {region.region}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {region.stores.map((store) => (
                    <div key={store.name}
                      className={`rounded-2xl p-5 border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md card-border-top ${
                        store.type === "Sede"
                          ? "bg-[#EBF0FC] border-[#C8D8F5]"
                          : "bg-[#F8F5EE] border-[rgba(15,30,69,0.06)]"
                      }`}>
                      <div className="flex items-start justify-between mb-3">
                        <span className={`text-[10px] font-bold tracking-[0.08em] uppercase px-2 py-0.5 rounded-full ${
                          store.type === "Sede"
                            ? "bg-[#1B2C5E] text-white"
                            : "bg-[#15130F]/10 text-[#2A2823]"
                        }`}>
                          {store.type}
                        </span>
                      </div>
                      <h4 className="font-display text-sm font-bold text-[#15130F] leading-snug mb-2">{store.name}</h4>
                      <p className="text-xs text-[#8E867B] leading-relaxed mb-3">{store.address}</p>
                      <a href={`tel:${store.phone.replace(/\s/g, "")}`}
                        className="flex items-center gap-1.5 text-xs font-semibold text-[#1B2C5E] hover:text-[#2F4593] transition-colors">
                        <Phone size={11} /> {store.phone}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="mt-12 p-6 bg-[#F8F5EE] rounded-2xl border border-[rgba(15,30,69,0.06)]">
            <p className="text-sm text-[#8E867B] text-center">
              <strong className="text-[#15130F]">¿No encuentras un punto de venta cerca?</strong>
              {" "}Contáctanos y te indicamos el distribuidor más cercano a tu zona.
            </p>
            <div className="flex justify-center gap-3 mt-4">
              <Button href="/contacto" variant="primary" size="sm">Contactar <ArrowRight size={13} /></Button>
              <Button href="/distribuidores" variant="outline" size="sm">Ser distribuidor</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
