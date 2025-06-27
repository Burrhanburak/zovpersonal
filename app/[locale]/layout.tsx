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

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  
  try {
    const messages = await getMessages({ locale });
    const metadata = (messages as any)?.metadata;
    
    if (metadata) {
      return {
        title: metadata.title,
        description: metadata.description,
        keywords: metadata.keywords,
        icons: {
          icon: [
              {
                  url: "/logo.svg", 
                  href: "/logo.svg", 
              },
          ],
      },
      openGraph: {
        images: [
          {
            url: "/logo.svg",
          },
        ],
      },
      };
    }
  } catch (error) {
    console.error("Error loading metadata for locale:", locale, error);
  }
  
  // Fallback to English metadata
  return {
    title: "ZovPersonal - International Future-Oriented Recruitment Agency",
    description: "Connecting qualified professionals with international employers. Future-oriented recruitment services for sustainable success in Germany, EU countries, and beyond.",
    keywords: "international recruitment, employer partnership, job placement, Germany jobs, EU employment, recruitment agency, zovpersonal",
  };
}

// Dynamic schema function will be created below



export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  // Validate locale
  const validLocales = ['en', 'tr', 'de', 'nl', 'bg', 'hr', 'ro', 'sr'];
  if (!validLocales.includes(locale)) {
    notFound();
  }

  // Get messages for the current locale
  const messages = await getMessages();
  const metadata = (messages as any)?.metadata;
  const nav = (messages as any)?.nav;

  console.log('🌐 Layout - Current locale:', locale);
  console.log('🌐 Layout - Messages keys:', Object.keys(messages).slice(0, 5));

  // Create dynamic schema based on locale
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": metadata?.title || "ZovPersonal - International Future-Oriented Recruitment Agency",
    "url": `https://zovpersonal.com/${locale}`,
    "description": metadata?.description || "Connecting qualified professionals with international employers. Future-oriented recruitment services for sustainable success in Germany, EU countries, and beyond.",
    "keywords": metadata?.keywords || "international recruitment, employer partnership, job placement, Germany jobs, EU employment, recruitment agency, zovpersonal",
    "inLanguage": locale === 'en' ? 'en-US' : 
                  locale === 'tr' ? 'tr-TR' :
                  locale === 'de' ? 'de-DE' :
                  locale === 'nl' ? 'nl-NL' :
                  locale === 'bg' ? 'bg-BG' :
                  locale === 'hr' ? 'hr-HR' :
                  locale === 'ro' ? 'ro-RO' :
                  locale === 'sr' ? 'sr-RS' : 'en-US',
    "alternateName": "ZovPersonal",
    "sameAs": [
      "https://instagram.com/zovpersonal",
      "https://linkedin.com/company/zovpersonal",
      "https://twitter.com/zovpersonal"
    ]
  };

  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": nav?.home || "Home",
        "item": `https://zovpersonal.com/${locale}`
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": nav?.services || "Services",
        "item": `https://zovpersonal.com/${locale}/services`
      }
    ]
  };

  // Organization schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ZovPersonal",
    "url": `https://zovpersonal.com/${locale}`,
    "logo": "https://zovpersonal.com/logo.svg",
    "description": metadata?.description || "International recruitment and employer partnership services",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Brückstraße 59",
      "addressLocality": "Emden",
      "postalCode": "26725",
      "addressCountry": "DE"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+49 30 12345678",
      "contactType": "customer service",
      "availableLanguage": ["en", "tr", "de", "nl", "bg", "hr", "ro", "sr"]
    },
    "sameAs": [
      "https://instagram.com/zovpersonal",
      "https://linkedin.com/company/zovpersonal",
      "https://twitter.com/zovpersonal"
    ]
  };

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Satoshi:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        
        {/* Dynamic JSON-LD Schema */}
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} 
        />
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }} 
        />
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} 
        />
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
