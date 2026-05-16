import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFab from "@/components/ui/WhatsAppFab";

export const metadata: Metadata = {
  title: { default: "IMPADOC — Materiales que Construyen Confianza", template: "%s | IMPADOC" },
  description: "Empresa colombiana con más de 58 años desarrollando sistemas de acabados, morteros y minerales para construcción. Certificación ICONTEC NTC 2775.",
  icons: {
    icon: [
      { url: "/images/logo-impadoc-color.svg", type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Manrope:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}
