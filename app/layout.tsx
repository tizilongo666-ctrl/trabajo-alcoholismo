import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Alcoholismo en la Adolescencia | Informe Preventivo y Recursos',
  description: 'Informe de salud pública, factores de riesgo, consecuencias y recursos de ayuda oficiales (SEDRONAR).',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-white text-slate-900 font-sans antialiased selection:bg-rose-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
