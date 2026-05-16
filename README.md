# IMPADOC — Frontend Enterprise

Sitio web corporativo premium construido con **Next.js 15 App Router**, **React**, **TypeScript**, **Tailwind CSS v4** y **Framer Motion**.

## 🚀 Inicio rápido

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # Build de producción + exportación estática en /out
```

## 📁 Estructura

```
src/
├── app/
│   ├── layout.tsx              # Layout raíz (Navbar + Footer + WhatsApp)
│   ├── page.tsx                # HOME
│   ├── nosotros/page.tsx
│   ├── productos/
│   │   ├── page.tsx            # Catálogo con filtros
│   │   └── [slug]/page.tsx     # Ficha de producto
│   ├── asesoria-tecnica/page.tsx
│   ├── distribuidores/page.tsx
│   ├── industrial/page.tsx
│   ├── blog/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── contacto/page.tsx
│   ├── trabaja-con-nosotros/page.tsx
│   └── not-found.tsx
├── components/
│   ├── layout/  (Navbar, Footer)
│   └── ui/      (Button, Eyebrow, SectionHeader, ProductCard, ContactForm, WhatsAppFab)
└── data/
    └── site.ts  ← EDITAR AQUÍ: productos, sedes, blog, empresa
```

## ✏️ Editar contenido

**Todo el contenido en `src/data/site.ts`:**
- `COMPANY` — datos, WhatsApp, redes
- `OFFICES` — 4 sedes
- `PRODUCTS` — catálogo
- `BLOG_POSTS` — artículos

**Fichas de productos detalladas:** `src/app/productos/[slug]/page.tsx` → `productDetails`

**Cuerpo de artículos:** `src/app/blog/[slug]/page.tsx` → `postContent`

## 🖼️ Imágenes

Todas en `/public/images/`. Reemplaza el archivo y actualiza la referencia en `site.ts`.

## 🌐 Despliegue

```bash
# Vercel (recomendado)
npx vercel

# Estático (cualquier hosting)
npm run build  # genera /out
```

## 🎨 Sistema de diseño

- Azul: `#1B3F8B` · Azul deep: `#0D2558` · Rojo: `#C8102E`
- Display: **Syne** · Body: **Plus Jakarta Sans**
- Componentes: `<Button>`, `<Eyebrow>`, `<SectionHeader>`, `<ProductCard>`, `<ContactForm>`
