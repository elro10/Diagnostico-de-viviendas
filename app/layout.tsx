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
  metadataBase: new URL('https://inspeccionesdeviviendas.com.ar'),
  title: 'Base Cero Inspecciones | Inspección de viviendas en Córdoba',
  description:
    'Inspección preventiva de viviendas en Córdoba Capital y zonas aledañas. Detectamos humedad, fugas, fallas visibles y otros problemas antes de comprar o alquilar una propiedad.',
  keywords: [
    'inspección de viviendas Córdoba',
    'inspección preventiva de viviendas',
    'revisión casa antes de comprar',
    'inspección técnica vivienda Córdoba',
    'detectar humedad vivienda Córdoba',
    'inspección de departamentos Córdoba',
    'diagnóstico de vivienda Córdoba',
  ],
  alternates: {
    canonical: 'https://inspeccionesdeviviendas.com.ar',
  },
  openGraph: {
    title: 'Base Cero Inspecciones | Inspección de viviendas en Córdoba',
    description:
      'Antes de comprar o alquilar, sabé realmente en qué estado está la vivienda.',
    url: 'https://inspeccionesdeviviendas.com.ar',
    siteName: 'Base Cero Inspecciones',
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Base Cero Inspecciones',
    description:
      'Inspección preventiva de viviendas en Córdoba Capital y zonas aledañas.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR">
      <body className={`${inter.variable} ${montserrat.variable} bg-white text-slate-800 antialiased`}>
        {children}
      </body>
    </html>
  );
}