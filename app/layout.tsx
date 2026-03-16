import type { Metadata } from 'next';
import './globals.css';
import { Inter, Montserrat } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'Base Cero Inspecciones | Inspección de viviendas en Córdoba',
  description:
    'Inspección preventiva de viviendas en Córdoba Capital y zonas aledañas. Diagnóstico técnico profesional con herramientas de inspección avanzada.',
  keywords: [
    'inspección de viviendas',
    'inspección preventiva',
    'humedad',
    'cámara termográfica',
    'Córdoba Capital',
    'inspección de casas',
    'inspección de departamentos',
  ],
  metadataBase: new URL('https://inspeccionesdeviviendas.com.ar'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Base Cero Inspecciones',
    description:
      'Antes de comprar o alquilar, sabé realmente en qué estado está la vivienda.',
    url: 'https://inspeccionesdeviviendas.com.ar',
    siteName: 'Base Cero Inspecciones',
    locale: 'es_AR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${montserrat.variable} bg-white text-slate-800 antialiased`}>
        {children}
      </body>
    </html>
  );
}