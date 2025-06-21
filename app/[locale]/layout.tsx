import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import GeoDebug from '../../components/GeoDebug';
import WhatsAppWidget from '../../components/WhatsAppWidget';
import LenisScrollProvider from '../providers/lenis-provider';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Satoshi font setup with local font file
const satoshi = localFont({
  src: [
    {
      path: '../../public/fonts/vQyevYAyHtARFwPqUzQGpnDs.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-satoshi',
  fallback: ['Inter', 'system-ui', 'sans-serif'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "ZovPersonal - International Work Visa Consulting",
  description: "Expert guidance for obtaining work visas to Germany, EU countries, and beyond. Professional consultation services for individuals and businesses.",
  keywords: "work visa, immigration, Germany visa, EU visa, visa consulting, international work, zovpersonal",
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  // Validate locale
  const validLocales = ['en', 'tr', 'de'];
  if (!validLocales.includes(locale)) {
    notFound();
  }

  // Get messages for the current locale
  const messages = await getMessages();

  console.log('🌐 Layout - Current locale:', locale);
  console.log('🌐 Layout - Messages keys:', Object.keys(messages).slice(0, 5));

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Satoshi:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${satoshi.variable} font-satoshi antialiased`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <LenisScrollProvider>
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-grow">
                {children}
              </main>
              <Footer />
              <WhatsAppWidget />
              {/* <GeoDebug /> */}
            </div>
          </LenisScrollProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
