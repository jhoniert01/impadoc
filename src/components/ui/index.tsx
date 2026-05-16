import Link from "next/link";
import Image from "next/image";
import { ArrowRight, FileText } from "lucide-react";

// ─── Button ───────────────────────────────────────────────
interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "white" | "red" | "ghost-dark";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

const variantClasses = {
  primary: "bg-[#1B2C5E] text-white hover:bg-[#2F4593] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(27,44,94,0.25)]",
  outline: "bg-transparent text-[#15130F] border-[1.5px] border-[rgba(15,30,69,0.15)] hover:border-[#1B2C5E] hover:text-[#1B2C5E] hover:-translate-y-0.5",
  white: "bg-white text-[#1B2C5E] shadow-sm hover:-translate-y-0.5 hover:shadow-md",
  red: "bg-[#E32118] text-white hover:bg-[#FF2E25] hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(227,33,24,0.25)]",
  "ghost-dark": "bg-transparent text-white/70 border border-white/20 hover:text-white hover:border-white/40",
};

const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-7 py-4 text-[15px]",
};

export function Button({
  href, onClick, variant = "primary", size = "md", children, className = "", external,
}: ButtonProps) {
  const base = `inline-flex items-center gap-2 rounded-xl font-semibold tracking-[0.01em] transition-all duration-250 cursor-pointer ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  if (href) {
    if (external) return <a href={href} target="_blank" rel="noopener noreferrer" className={base}>{children}</a>;
    return <Link href={href} className={base}>{children}</Link>;
  }
  return <button onClick={onClick} className={base}>{children}</button>;
}

// ─── Eyebrow ──────────────────────────────────────────────
export function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`inline-flex items-center gap-2 font-display text-[11px] font-semibold tracking-[0.12em] uppercase mb-5 ${light ? "text-white/40" : "text-[#1B2C5E]"}`}>
      <span className="block w-5 h-0.5 bg-[#E32118] flex-shrink-0" />
      {children}
    </p>
  );
}

// ─── Section Header ───────────────────────────────────────
interface SectionHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  light?: boolean;
  center?: boolean;
  maxWidth?: string;
}
export function SectionHeader({ eyebrow, title, subtitle, light = false, center = false, maxWidth = "540px" }: SectionHeaderProps) {
  return (
    <div className={center ? "text-center" : ""}>
      <Eyebrow light={light}>{eyebrow}</Eyebrow>
      <h2 className={`font-display text-4xl lg:text-[52px] font-bold leading-[1.06] tracking-[-0.025em] ${light ? "text-white" : "text-[#15130F]"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-[17px] font-light leading-relaxed mt-4 ${light ? "text-white/45" : "text-[#8E867B]"}`} style={{ maxWidth }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

// ─── Product Card ─────────────────────────────────────────
const tagColors: Record<string, string> = {
  blue: "bg-[#1B2C5E] text-white",
  red: "bg-[#E32118] text-white",
  green: "bg-[#1A7A4A] text-white",
};

interface ProductCardProps {
  slug: string;
  name: string;
  line: string;
  category: string;
  tag: string;
  tagColor: string;
  image: string;
  description: string;
  featured?: boolean;
  isNew?: boolean;
}

export function ProductCard({ slug, name, line, tag, tagColor, image, description, featured }: ProductCardProps) {
  return (
    <Link
      href={`/productos/${slug}`}
      className={`group bg-white rounded-2xl overflow-hidden border border-[rgba(15,30,69,0.06)] flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(15,30,69,0.14)] hover:border-transparent card-border-top ${featured ? "col-span-2" : ""}`}
    >
      <div className={`overflow-hidden bg-[#F8F5EE] relative ${featured ? "aspect-[16/7]" : "aspect-[4/3]"}`}>
        <Image
          src={image}
          alt={name}
          fill
          className={`${featured ? "object-cover" : "object-contain p-4"} transition-transform duration-500 group-hover:scale-[1.06]`}
        />
        <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-[0.08em] uppercase ${tagColors[tagColor] || tagColors.blue}`}>
          {tag}
        </span>
      </div>
      <div className="p-5 pb-6 flex flex-col flex-1">
        <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#1B2C5E] mb-1.5">{line}</p>
        <h3 className="font-display text-[17px] font-bold text-[#15130F] leading-snug mb-2">{name}</h3>
        <p className="text-[13px] leading-relaxed text-[#8E867B] flex-1">{description}</p>
        <div className="flex items-center justify-between mt-5 pt-4 border-t border-[rgba(15,30,69,0.06)]">
          <span className="flex items-center gap-1.5 text-xs font-medium text-[#8E867B] hover:text-[#1B2C5E] transition-colors">
            <FileText size={12} /> Ficha técnica
          </span>
          <span className="flex items-center gap-1 text-sm font-semibold text-[#1B2C5E] group-hover:gap-2 transition-all duration-200">
            Solicitar <ArrowRight size={13} />
          </span>
        </div>
      </div>
    </Link>
  );
}

// ─── Stat ─────────────────────────────────────────────────
export function Stat({ number, suffix, label, light = false }: { number: string; suffix?: string; label: string; light?: boolean }) {
  return (
    <div>
      <div className={`font-display text-[36px] font-extrabold leading-none tracking-[-0.03em] ${light ? "text-white" : "text-[#15130F]"}`}>
        {number}<span className="text-[#E32118] text-[0.75em]">{suffix}</span>
      </div>
      <div className={`text-[12px] font-normal mt-1 tracking-[0.02em] ${light ? "text-white/40" : "text-[#8E867B]"}`}>{label}</div>
    </div>
  );
}

// ─── Contact Form ─────────────────────────────────────────
export function ContactForm() {
  return (
    <div className="bg-white border border-[rgba(15,30,69,0.06)] rounded-3xl p-10 shadow-sm">
      <h3 className="font-display text-xl font-bold text-[#15130F] mb-1.5">Solicitar información o cotización</h3>
      <p className="text-sm text-[#8E867B] mb-8">Te contactamos en menos de 24 horas hábiles.</p>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <FormField label="Nombre completo" type="text" placeholder="Tu nombre" />
          <FormField label="Empresa / Obra" type="text" placeholder="Empresa o proyecto" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <FormField label="Teléfono" type="tel" placeholder="+57 300 000 0000" />
          <FormField label="Ciudad" type="select" options={["Cali", "Bogotá", "Barranquilla", "Medellín / Antioquia", "Otra ciudad"]} />
        </div>
        <FormField label="Línea de interés" type="select" options={["Acabados para interiores", "Sistema Drywall", "Acabados para exteriores", "Impermeabilizantes", "Instalación de pisos", "Pigmentos funcionales", "Varias líneas / distribución"]} />
        <div>
          <label className="block text-[12px] font-semibold tracking-[0.04em] uppercase text-[#2A2823] mb-1.5">Mensaje (opcional)</label>
          <textarea
            rows={3}
            placeholder="Describe tu proyecto o consulta..."
            className="w-full px-4 py-3 text-sm bg-[#F8F5EE] border-[1.5px] border-[rgba(15,30,69,0.06)] rounded-lg outline-none focus:border-[#1B2C5E] focus:bg-white focus:shadow-[0_0_0_3px_rgba(27,44,94,0.1)] transition-all resize-y"
          />
        </div>
        <button className="w-full py-4 bg-[#1B2C5E] text-white font-semibold rounded-xl hover:bg-[#2F4593] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(27,44,94,0.25)] transition-all duration-250 flex items-center justify-center gap-2 mt-2">
          Enviar solicitud <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}

function FormField({ label, type, placeholder, options }: { label: string; type: string; placeholder?: string; options?: string[] }) {
  const base = "w-full px-4 py-2.5 text-sm bg-[#F8F5EE] border-[1.5px] border-[rgba(15,30,69,0.06)] rounded-lg outline-none focus:border-[#1B2C5E] focus:bg-white focus:shadow-[0_0_0_3px_rgba(27,44,94,0.1)] transition-all";
  return (
    <div>
      <label className="block text-[12px] font-semibold tracking-[0.04em] uppercase text-[#2A2823] mb-1.5">{label}</label>
      {type === "select" ? (
        <select className={`${base} appearance-none cursor-pointer`}>
          <option value="" disabled selected>Selecciona una opción</option>
          {options?.map((o) => <option key={o}>{o}</option>)}
        </select>
      ) : (
        <input type={type} placeholder={placeholder} className={base} />
      )}
    </div>
  );
}
