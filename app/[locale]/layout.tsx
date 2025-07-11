import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { headers } from 'next/headers';
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

// Helper function to get page type from pathname
function getPageType(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length <= 1) return 'home';
  return segments[1]; // Gets the page name after locale
}

// Helper function to get slug from pathname
function getSlugFromPath(pathname: string): string | null {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length > 2) {
    return segments[2]; // Gets the slug after page type
  }
  return null;
}

// Helper function to get language code
function getLanguageCode(locale: string): string {
  const languageMap: { [key: string]: string } = {
    'en': 'en-US',
    'tr': 'tr-TR',
    'de': 'de-DE',
    'nl': 'nl-NL',
    'bg': 'bg-BG',
    'hr': 'hr-HR',
    'ro': 'ro-RO',
    'sr': 'sr-RS'
  };
  return languageMap[locale] || 'en-US';
}

// Generate page-specific schema
function generatePageSchema(pageType: string, locale: string, messages: any, pathname: string) {
  const baseUrl = `https://zovpersonal.com`;
  const fullUrl = `${baseUrl}${pathname}`;
  const metadata = messages?.metadata;
  const nav = messages?.nav;
  const about = messages?.about;
  const services = messages?.services;
  const contact = messages?.contact;
  const slug = getSlugFromPath(pathname);
  
  let pageSchema: any = {};
  
  switch (pageType) {
         case 'home':
       pageSchema = {
         "@context": "https://schema.org",
         "@type": "WebSite",
         "name": metadata?.title || "ZovPersonal - International Future-Oriented Personnel Placement (ZOV)",
         "url": fullUrl,
         "description": metadata?.description || "Connecting qualified professionals with international employers.",
         "inLanguage": getLanguageCode(locale),
         "alternateName": "ZovPersonal",
         "potentialAction": {
           "@type": "SearchAction",
           "target": {
             "@type": "EntryPoint",
             "urlTemplate": `${baseUrl}/${locale}/services?q={search_term_string}`
           },
           "query-input": "required name=search_term_string"
         },
         "sameAs": [
           "https://instagram.com/zovpersonal",
           "https://facebook.com/zovpersonal"
         ]
       };
       break;
      
    case 'about':
      pageSchema = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": about?.hero?.title || nav?.about || "About",
        "url": fullUrl,
        "description": about?.hero?.subtitle || about?.description || "Learn more about ZovPersonal",
        "inLanguage": getLanguageCode(locale),
        "mainEntity": {
          "@type": "Organization",
          "name": "ZovPersonal",
          "description": about?.hero?.subtitle || about?.description,
          "foundingDate": "2019",
          "numberOfEmployees": "15+"
        }
      };
      break;
      
         case 'services':
       pageSchema = {
         "@context": "https://schema.org",
         "@type": "Service",
         "name": services?.title || nav?.services || "Services",
         "url": fullUrl,
         "description": services?.subtitle || "Professional recruitment and placement services",
         "inLanguage": getLanguageCode(locale),
         "provider": {
           "@type": "Organization",
           "name": "ZovPersonal",
           "url": `${baseUrl}/${locale}`
         },
         "serviceType": "Recruitment Services",
         "offers": [
           {
             "@type": "Offer",
             "name": services?.workVisa?.title || "Work Visa Assistance",
             "description": services?.workVisa?.description || "International recruitment services"
           },
           {
             "@type": "Offer",
             "name": services?.skillsAssessment?.title || "Skills Assessment",
             "description": services?.skillsAssessment?.description || "Professional qualification assessment"
           },
           {
             "@type": "Offer",
             "name": services?.documentation?.title || "Documentation Services",
             "description": services?.documentation?.description || "Document preparation and verification"
           }
         ],
         "areaServed": [
           {
             "@type": "Country",
             "name": "Germany"
           },
           {
             "@type": "Country", 
             "name": "Netherlands"
           },
           {
             "@type": "Country",
             "name": "Belgium"
           },
           {
             "@type": "Country",
             "name": "Austria"
           },
           {
             "@type": "Country",
             "name": "Switzerland"
           },
           {
             "@type": "Country",
             "name": "Luxembourg"
           }
         ]
       };
       break;
      
    case 'contact':
      pageSchema = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": contact?.title || nav?.contact || "Contact",
        "url": fullUrl,
        "description": contact?.subtitle || "Get in touch with ZovPersonal",
        "inLanguage": getLanguageCode(locale),
        "mainEntity": {
          "@type": "Organization",
          "name": "ZovPersonal",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+4915757295545",
            "contactType": "customer service",
            "availableLanguage": ["en", "tr", "de", "nl", "bg", "hr", "ro", "sr"]
          }
        }
      };
      break;
      
    case 'employer':
      pageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": nav?.employer || "Employer Services",
        "url": fullUrl,
        "description": "Recruitment services for employers seeking international talent",
        "inLanguage": getLanguageCode(locale),
        "mainEntity": {
          "@type": "Service",
          "name": "Employer Recruitment Services",
          "serviceType": "Recruitment",
          "provider": {
            "@type": "Organization",
            "name": "ZovPersonal"
          }
        }
      };
      break;
      
    case 'job-seeker':
      pageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": nav?.jobSeeker || "Job Seeker Services",
        "url": fullUrl,
        "description": "International job placement services for qualified professionals",
        "inLanguage": getLanguageCode(locale),
        "mainEntity": {
          "@type": "Service",
          "name": "Job Placement Services",
          "serviceType": "Job Placement",
          "provider": {
            "@type": "Organization",
            "name": "ZovPersonal"
          }
        }
      };
      break;
      
         case 'business-process-in-germany':
       if (slug) {
         // Dynamic schema for business-specific pages
         const businessName = slug.charAt(0).toUpperCase() + slug.slice(1).replace('-', ' ');
         pageSchema = {
           "@context": "https://schema.org",
           "@type": "WebPage",
           "name": `${businessName} - Business Process in Germany`,
           "url": fullUrl,
           "description": `Understanding ${businessName} business processes and requirements in Germany`,
           "inLanguage": getLanguageCode(locale),
           "mainEntity": {
             "@type": "Article",
             "name": `${businessName} Business Process in Germany`,
             "author": {
               "@type": "Organization",
               "name": "ZovPersonal"
             },
             "about": {
               "@type": "Thing",
               "name": businessName
             }
           }
         };
       } else {
         // General business process page
         pageSchema = {
           "@context": "https://schema.org",
           "@type": "WebPage",
           "name": "Business Process in Germany",
           "url": fullUrl,
           "description": "Understanding business processes and requirements in Germany",
           "inLanguage": getLanguageCode(locale),
           "mainEntity": {
             "@type": "Article",
             "name": "Business Process in Germany",
             "author": {
               "@type": "Organization",
               "name": "ZovPersonal"
             }
           }
         };
       }
       break;
      
         case 'profession-process':
       if (slug) {
         // Dynamic schema for profession-specific pages
         const professionName = slug.charAt(0).toUpperCase() + slug.slice(1).replace('-', ' ');
         
         // Create profession-specific schema based on common professions
         let professionSchema: any = {
           "@type": "Occupation",
           "name": professionName
         };
         
         // Add specific details for known professions
         switch (slug) {
           case 'doctor':
           case 'physician':
             professionSchema = {
               "@type": "Occupation",
               "name": "Doctor",
               "occupationLocation": {
                 "@type": "Country",
                 "name": "Germany"
               },
               "qualifications": "Medical degree, German language proficiency, professional recognition",
               "responsibilities": "Patient care, medical diagnosis, treatment planning"
             };
             break;
           case 'nurse':
           case 'nursing':
             professionSchema = {
               "@type": "Occupation",
               "name": "Nurse",
               "occupationLocation": {
                 "@type": "Country",
                 "name": "Germany"
               },
               "qualifications": "Nursing degree, German language proficiency, professional recognition",
               "responsibilities": "Patient care, medication administration, health monitoring"
             };
             break;
           case 'physiotherapist':
           case 'physical-therapist':
             professionSchema = {
               "@type": "Occupation",
               "name": "Physiotherapist",
               "occupationLocation": {
                 "@type": "Country",
                 "name": "Germany"
               },
               "qualifications": "Physiotherapy degree, German language proficiency, professional recognition",
               "responsibilities": "Physical rehabilitation, movement therapy, patient assessment"
             };
             break;
           case 'caregiver':
           case 'care-worker':
             professionSchema = {
               "@type": "Occupation",
               "name": "Caregiver",
               "occupationLocation": {
                 "@type": "Country",
                 "name": "Germany"
               },
               "qualifications": "Care training, German language proficiency, professional certification",
               "responsibilities": "Elderly care, daily living assistance, health monitoring"
             };
             break;
           case 'engineer':
           case 'engineering':
             professionSchema = {
               "@type": "Occupation",
               "name": "Engineer",
               "occupationLocation": {
                 "@type": "Country",
                 "name": "Germany"
               },
               "qualifications": "Engineering degree, German language proficiency, professional recognition",
               "responsibilities": "Technical design, project management, problem solving"
             };
             break;
           case 'it-specialist':
           case 'software-developer':
             professionSchema = {
               "@type": "Occupation",
               "name": "IT Specialist",
               "occupationLocation": {
                 "@type": "Country",
                 "name": "Germany"
               },
               "qualifications": "IT degree or certification, German language proficiency, technical skills",
               "responsibilities": "Software development, system administration, technical support"
             };
             break;
           case 'waiter':
           case 'server':
             professionSchema = {
               "@type": "Occupation",
               "name": "Waiter",
               "occupationLocation": {
                 "@type": "Country",
                 "name": "Germany"
               },
               "qualifications": "Service training, German language proficiency, hospitality certification",
               "responsibilities": "Customer service, order taking, food service, restaurant operations"
             };
             break;
           case 'chef':
           case 'cook':
             professionSchema = {
               "@type": "Occupation",
               "name": "Chef",
               "occupationLocation": {
                 "@type": "Country",
                 "name": "Germany"
               },
               "qualifications": "Culinary training, German language proficiency, food safety certification",
               "responsibilities": "Food preparation, menu planning, kitchen management, food safety"
             };
             break;
           case 'hotel-staff':
           case 'hotel-receptionist':
             professionSchema = {
               "@type": "Occupation",
               "name": "Hotel Staff",
               "occupationLocation": {
                 "@type": "Country",
                 "name": "Germany"
               },
               "qualifications": "Hospitality training, German language proficiency, customer service skills",
               "responsibilities": "Guest services, front desk operations, reservation management"
             };
             break;
           case 'cleaner':
           case 'cleaning-staff':
             professionSchema = {
               "@type": "Occupation",
               "name": "Cleaner",
               "occupationLocation": {
                 "@type": "Country",
                 "name": "Germany"
               },
               "qualifications": "Basic training, German language proficiency, hygiene certification",
               "responsibilities": "Cleaning services, sanitation, maintenance, waste management"
             };
             break;
           case 'construction-worker':
           case 'builder':
             professionSchema = {
               "@type": "Occupation",
               "name": "Construction Worker",
               "occupationLocation": {
                 "@type": "Country",
                 "name": "Germany"
               },
               "qualifications": "Construction training, German language proficiency, safety certification",
               "responsibilities": "Building construction, site work, heavy machinery operation"
             };
             break;
           case 'electrician':
             professionSchema = {
               "@type": "Occupation",
               "name": "Electrician",
               "occupationLocation": {
                 "@type": "Country",
                 "name": "Germany"
               },
               "qualifications": "Electrical training, German language proficiency, electrical certification",
               "responsibilities": "Electrical installation, maintenance, wiring, safety inspections"
             };
             break;
           case 'plumber':
             professionSchema = {
               "@type": "Occupation",
               "name": "Plumber",
               "occupationLocation": {
                 "@type": "Country",
                 "name": "Germany"
               },
               "qualifications": "Plumbing training, German language proficiency, plumbing certification",
               "responsibilities": "Pipe installation, plumbing repairs, water systems, heating systems"
             };
             break;
           case 'mechanic':
           case 'auto-mechanic':
             professionSchema = {
               "@type": "Occupation",
               "name": "Mechanic",
               "occupationLocation": {
                 "@type": "Country",
                 "name": "Germany"
               },
               "qualifications": "Automotive training, German language proficiency, technical certification",
               "responsibilities": "Vehicle repair, maintenance, diagnostics, parts replacement"
             };
             break;
           case 'security-guard':
           case 'security-officer':
             professionSchema = {
               "@type": "Occupation",
               "name": "Security Guard",
               "occupationLocation": {
                 "@type": "Country",
                 "name": "Germany"
               },
               "qualifications": "Security training, German language proficiency, security license",
               "responsibilities": "Property protection, surveillance, access control, emergency response"
             };
             break;
           case 'driver':
           case 'truck-driver':
             professionSchema = {
               "@type": "Occupation",
               "name": "Driver",
               "occupationLocation": {
                 "@type": "Country",
                 "name": "Germany"
               },
               "qualifications": "Driving license, German language proficiency, professional driving certification",
               "responsibilities": "Transportation services, vehicle operation, route planning, cargo delivery"
             };
             break;
           case 'welder':
             professionSchema = {
               "@type": "Occupation",
               "name": "Welder",
               "occupationLocation": {
                 "@type": "Country",
                 "name": "Germany"
               },
               "qualifications": "Welding certification, German language proficiency, safety training",
               "responsibilities": "Metal welding, fabrication, repair work, quality control"
             };
             break;
           case 'painter':
           case 'house-painter':
             professionSchema = {
               "@type": "Occupation",
               "name": "Painter",
               "occupationLocation": {
                 "@type": "Country",
                 "name": "Germany"
               },
               "qualifications": "Painting training, German language proficiency, trade certification",
               "responsibilities": "Surface preparation, painting, coating application, finishing work"
             };
             break;
           case 'carpenter':
           case 'woodworker':
             professionSchema = {
               "@type": "Occupation",
               "name": "Carpenter",
               "occupationLocation": {
                 "@type": "Country",
                 "name": "Germany"
               },
               "qualifications": "Carpentry training, German language proficiency, woodworking certification",
               "responsibilities": "Wood construction, furniture making, repair work, custom installations"
             };
             break;
         }
         
         pageSchema = {
           "@context": "https://schema.org",
           "@type": "WebPage",
           "name": `${professionName} - Profession Process`,
           "url": fullUrl,
           "description": `Professional qualification and recognition processes for ${professionName}`,
           "inLanguage": getLanguageCode(locale),
           "mainEntity": {
             "@type": "Article",
             "name": `${professionName} Process`,
             "author": {
               "@type": "Organization",
               "name": "ZovPersonal"
             },
             "about": professionSchema
           }
         };
       } else {
         // General profession process page
         pageSchema = {
           "@context": "https://schema.org",
           "@type": "WebPage",
           "name": "Profession Process",
           "url": fullUrl,
           "description": "Professional qualification and recognition processes",
           "inLanguage": getLanguageCode(locale),
           "mainEntity": {
             "@type": "Article",
             "name": "Profession Process",
             "author": {
               "@type": "Organization",
               "name": "ZovPersonal"
             }
           }
         };
       }
       break;
      
    case 'national-visa-application-process':
      pageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "National Visa Application Process",
        "url": fullUrl,
        "description": "Complete guide to national visa application processes",
        "inLanguage": getLanguageCode(locale),
        "mainEntity": {
          "@type": "Article",
          "name": "National Visa Application Process",
          "author": {
            "@type": "Organization",
            "name": "ZovPersonal"
          }
        }
      };
      break;
      
    case 'international-recruitment':
      pageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "International Recruitment",
        "url": fullUrl,
        "description": "International recruitment services and processes",
        "inLanguage": getLanguageCode(locale),
        "mainEntity": {
          "@type": "Service",
          "name": "International Recruitment",
          "serviceType": "International Recruitment",
          "provider": {
            "@type": "Organization",
            "name": "ZovPersonal"
          }
        }
      };
      break;
      
    case 'visa-pricing':
      pageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Visa Pricing",
        "url": fullUrl,
        "description": "Visa application pricing and service costs",
        "inLanguage": getLanguageCode(locale),
        "mainEntity": {
          "@type": "Article",
          "name": "Visa Pricing",
          "author": {
            "@type": "Organization",
            "name": "ZovPersonal"
          }
        }
      };
      break;
      
    case 'privacy-policy':
      pageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Privacy Policy",
        "url": fullUrl,
        "description": "Privacy policy and data protection information",
        "inLanguage": getLanguageCode(locale),
        "mainEntity": {
          "@type": "Article",
          "name": "Privacy Policy",
          "author": {
            "@type": "Organization",
            "name": "ZovPersonal"
          }
        }
      };
      break;
      
    case 'terms-of-service':
      pageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Terms of Service",
        "url": fullUrl,
        "description": "Terms of service and conditions",
        "inLanguage": getLanguageCode(locale),
        "mainEntity": {
          "@type": "Article",
          "name": "Terms of Service",
          "author": {
            "@type": "Organization",
            "name": "ZovPersonal"
          }
        }
      };
      break;
      
    default:
      pageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": metadata?.title || "ZovPersonal",
        "url": fullUrl,
        "description": metadata?.description || "International recruitment services",
        "inLanguage": getLanguageCode(locale)
      };
  }
  
  return pageSchema;
}

// Generate dynamic breadcrumb list
function generateBreadcrumbList(pageType: string, locale: string, messages: any, pathname: string) {
  const baseUrl = `https://zovpersonal.com`;
  const nav = messages?.nav;
  const slug = getSlugFromPath(pathname);
  
  const breadcrumbItems = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": nav?.home || "Home",
      "item": `${baseUrl}/${locale}`
    }
  ];
  
  // Add page-specific breadcrumb
  if (pageType !== 'home') {
    let pageName = '';
    switch (pageType) {
      case 'about':
        pageName = nav?.about || 'About';
        break;
      case 'services':
        pageName = nav?.services || 'Services';
        break;
      case 'contact':
        pageName = nav?.contact || 'Contact';
        break;
      case 'employer':
        pageName = nav?.employer || 'Employer';
        break;
      case 'job-seeker':
        pageName = nav?.jobSeeker || 'Job Seeker';
        break;
      case 'business-process-in-germany':
        pageName = 'Business Process in Germany';
        break;
      case 'profession-process':
        pageName = 'Profession Process';
        break;
      case 'national-visa-application-process':
        pageName = 'National Visa Application Process';
        break;
      case 'international-recruitment':
        pageName = 'International Recruitment';
        break;
      case 'visa-pricing':
        pageName = 'Visa Pricing';
        break;
      case 'privacy-policy':
        pageName = 'Privacy Policy';
        break;
      case 'terms-of-service':
        pageName = 'Terms of Service';
        break;
      default:
        pageName = pageType.charAt(0).toUpperCase() + pageType.slice(1);
    }
    
    breadcrumbItems.push({
      "@type": "ListItem",
      "position": 2,
      "name": pageName,
      "item": `${baseUrl}/${locale}/${pageType}`
    });
    
    // Add slug-specific breadcrumb for detailed pages
    if (slug) {
      const slugName = slug.charAt(0).toUpperCase() + slug.slice(1).replace('-', ' ');
      breadcrumbItems.push({
        "@type": "ListItem",
        "position": 3,
        "name": slugName,
        "item": `${baseUrl}${pathname}`
      });
    }
  }
  
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems
  };
}

// Generate organization schema
function generateOrganizationSchema(locale: string, messages: any) {
  const baseUrl = `https://zovpersonal.com`;
  const metadata = messages?.metadata;
  
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ZovPersonal",
    "url": `${baseUrl}/${locale}`,
    "logo": `${baseUrl}/logo.svg`,
    "description": metadata?.description || "International recruitment and employer partnership services",
    "foundingDate": "2019",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Brückstraße 59",
      "addressLocality": "Emden",
      "postalCode": "26725",
      "addressCountry": "DE"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+4915757295545",
      "contactType": "customer service",
      "availableLanguage": ["en", "tr", "de", "nl", "bg", "hr", "ro", "sr"]
    },
    "sameAs": [
      "https://instagram.com/zovpersonal",
      "https://facebook.com/zovpersonal"
    ]
  };
}

// Generate hreflang alternates
function generateHreflangAlternates(pathname: string) {
  const baseUrl = `https://zovpersonal.com`;
  const locales = [
    { code: 'en', hreflang: 'en' },
    { code: 'tr', hreflang: 'tr' },
    { code: 'de', hreflang: 'de' },
    { code: 'nl', hreflang: 'nl' },
    { code: 'bg', hreflang: 'bg' },
    { code: 'hr', hreflang: 'hr' },
    { code: 'ro', hreflang: 'ro' },
    { code: 'sr', hreflang: 'sr' }
  ];
  
  // Remove current locale from pathname to get the page path
  const pathSegments = pathname.split('/').filter(Boolean);
  const pagePath = pathSegments.length > 1 ? '/' + pathSegments.slice(1).join('/') : '';
  
  return locales.map(locale => ({
    hreflang: locale.hreflang,
    href: `${baseUrl}/${locale.code}${pagePath}`
  }));
}

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
        metadataBase: new URL('https://zovpersonal.com'),
        alternates: {
          canonical: `https://zovpersonal.com/${locale}`,
          languages: {
            'en': '/en',
            'tr': '/tr',
            'de': '/de',
            'nl': '/nl',
            'bg': '/bg',
            'hr': '/hr',
            'ro': '/ro',
            'sr': '/sr',
            'x-default': '/en'
          }
        },
        icons: {
          icon: [
            {
              url: "/logo.svg", 
              href: "/logo.svg", 
            },
          ],
          apple: [
            {
              url: "/logo.svg",
              sizes: "180x180",
              type: "image/svg+xml",
            },
          ],
        },
        manifest: '/manifest.webmanifest',
        openGraph: {
          title: metadata.title,
          description: metadata.description,
          url: `https://zovpersonal.com/${locale}`,
          siteName: 'ZovPersonal',
          locale: locale,
          type: 'website',
          images: [
            {
              url: "/zovpersonal.webp",
              width: 1920,
              height: 1080,
              alt: "ZovPersonal - International Personnel Placement",
            },
            {
              url: "/logo.svg",
              width: 800,
              height: 600,
              alt: "ZovPersonal Logo",
            },
          ],
        },
        twitter: {
          card: 'summary_large_image',
          title: metadata.title,
          description: metadata.description,
          images: ["/zovpersonal.webp"],
          creator: '@zovpersonal',
          site: '@zovpersonal'
        },
        robots: {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
        verification: {
          google: 'your-google-verification-code', // Replace with actual verification code
          yandex: 'your-yandex-verification-code', // Replace with actual verification code
        }
      };
    }
  } catch (error) {
    console.error("Error loading metadata for locale:", locale, error);
  }
  
  // Fallback to English metadata
  return {
    title: "ZovPersonal - International Future-Oriented Personnel Placement (ZOV)",
    description: "Connecting qualified professionals with international employers. Future-oriented recruitment services for sustainable success in Germany, EU countries, and beyond.",
    keywords: "international recruitment, employer partnership, job placement, Germany jobs, EU employment, recruitment agency, zovpersonal",
  };
}

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

  // Get current pathname
  const headersList = await headers();
  const pathname = headersList.get('x-pathname') || '/';
  
  // Get page type from pathname
  const pageType = getPageType(pathname);
  
  // Get messages for the current locale
  const messages = await getMessages();
  
  console.log('🌐 Layout - Current locale:', locale);
  console.log('🌐 Layout - Current page type:', pageType);
  console.log('🌐 Layout - Current pathname:', pathname);

  // Generate schemas based on page type
  const pageSchema = generatePageSchema(pageType, locale, messages, pathname);
  const breadcrumbList = generateBreadcrumbList(pageType, locale, messages, pathname);
  const organizationSchema = generateOrganizationSchema(locale, messages);
  
  // Generate FAQ schema for home page
  const faqData = messages?.faq as any;
  const faqSchema = faqData && pageType === 'home' ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": Object.keys(faqData).map((key, index) => ({
      "@type": "Question",
      "name": faqData[key]?.question || `Question ${index + 1}`,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faqData[key]?.answer || `Answer ${index + 1}`
      }
    }))
  } : null;
  
  // Generate hreflang alternates
  const hreflangAlternates = generateHreflangAlternates(pathname);

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Satoshi:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        
        {/* Hreflang alternates */}
        {hreflangAlternates.map((alternate) => (
          <link
            key={alternate.hreflang}
            rel="alternate"
            hrefLang={alternate.hreflang}
            href={alternate.href}
          />
        ))}
        <link
          rel="alternate"
          hrefLang="x-default"
          href={`https://zovpersonal.com/en${pathname.replace(/^\/[a-z]{2}/, '')}`}
        />
        
        {/* Dynamic JSON-LD Schema */}
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} 
        />
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }} 
        />
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} 
        />
        {faqSchema && (
          <script 
            type="application/ld+json" 
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} 
          />
        )}
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
