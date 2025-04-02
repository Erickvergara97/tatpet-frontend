import type { Metadata } from 'next';
import { Fredoka } from 'next/font/google';
import '../styles/globals.css';
import Footer from '@/components/Footer';
import { ThemeModeScript } from 'flowbite-react';
import Navbar from '@/components/Navbar/Navbar';

const fredoka = Fredoka({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Tatpet Boutique',
  description: 'Page for Tatpet Boutique',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark:dark">
      <head>
        <ThemeModeScript />
      </head>
      <body
        className={`${fredoka.className} antialiased flex flex-col min-h-screen`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
