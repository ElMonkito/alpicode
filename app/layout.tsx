import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://alpicode.ch'),
  title: 'AlpiCode - Création de sites web premium | Agence web Suisse',
  description: 'AlpiCode, agence web suisse spécialisée dans la création de sites internet premium. Design moderne, performance optimale et précision helvétique pour votre présence digitale.',
  keywords: 'agence web suisse, création site internet, développement web, design web, site vitrine, e-commerce, Genève, Suisse',
  authors: [{ name: 'AlpiCode' }],
  openGraph: {
    title: 'AlpiCode - Votre présence digitale, au sommet',
    description: 'Création de sites web premium avec précision suisse et excellence digitale',
    url: 'https://alpicode.ch',
    siteName: 'AlpiCode',
    locale: 'fr_CH',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
