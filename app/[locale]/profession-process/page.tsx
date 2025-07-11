'use client';

import { useLocale, useTranslations } from "next-intl";
import { ArrowRight, CheckCircle, Users, FileText, Briefcase, Globe, Hammer, UtensilsCrossed, Wrench, Car } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ProfessionPage() {
  const t = useTranslations();
  const [activeTab, setActiveTab] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentCarouselSlide, setCurrentCarouselSlide] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    // Set initial width
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Carousel data
  const carouselData = [
    {
      id: 1,
      image: "/doctor.png",
      icon1: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-stethoscope m-auto size-4" aria-hidden="true">
          <path d="M11 2v2"></path>
          <path d="M5 2v2"></path>
          <path d="M5 3a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H5Z"></path>
          <path d="M8 6v4a6 6 0 0 0 6 6v0a3 3 0 0 0 3-3v-5"></path>
          <circle cx="20" cy="10" r="2"></circle>
        </svg>
      ),
      icon2: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart m-auto size-4" aria-hidden="true">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z"></path>
        </svg>
      ),
      status: t('professionProcess.carousel.doctor.status'),
      title: t('professionProcess.carousel.doctor.title'),
      description: t('professionProcess.carousel.doctor.description')
    },
    {
      id: 2,
      image: "/nurse.png",
      icon1: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-check m-auto size-4" aria-hidden="true">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <polyline points="16,11 18,13 22,9"></polyline>
        </svg>
      ),
      icon2: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-plus m-auto size-4" aria-hidden="true">
          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
          <path d="M9 12h6"></path>
          <path d="M12 9v6"></path>
        </svg>
      ),
      status: t('professionProcess.carousel.nurse.status'),
      title: t('professionProcess.carousel.nurse.title'),
      description: t('professionProcess.carousel.nurse.description')
    },
    {
      id: 3,
      image: "/hastabakıcı.png",
      icon1: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-hand-helping m-auto size-4" aria-hidden="true">
          <path d="M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14"></path>
          <path d="m7 18 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"></path>
          <path d="m2 13 6 6"></path>
        </svg>
      ),
      icon2: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-home m-auto size-4" aria-hidden="true">
          <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
          <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        </svg>
      ),
      status: t('professionProcess.carousel.caregiver.status'),
      title: t('professionProcess.carousel.caregiver.title'),
      description: t('professionProcess.carousel.caregiver.description')
    },
    {
      id: 4,
      image: "/saglıkteknik.webp",
      icon1: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-activity m-auto size-4" aria-hidden="true">
          <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
        </svg>
      ),
      icon2: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-hospital m-auto size-4" aria-hidden="true">
          <path d="M12 6v4"></path>
          <path d="M14 14h-4"></path>
          <path d="M14 18h-4"></path>
          <path d="M14 8h-4"></path>
          <path d="M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2"></path>
          <path d="M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18"></path>
        </svg>
      ),
      status: t('professionProcess.carousel.healthTechnician.status'),
      title: t('professionProcess.carousel.healthTechnician.title'),
      description: t('professionProcess.carousel.healthTechnician.description')
    },
    {
      id: 5,
      image: "/fizyoterapist.png",
      icon1: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-brain m-auto size-4" aria-hidden="true">
          <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
          <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path>
          <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path>
          <path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path>
          <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path>
          <path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path>
          <path d="M19.938 10.5a4 4 0 0 1 .585.396"></path>
          <path d="M6 18a4 4 0 0 1-1.967-.516"></path>
          <path d="M19.967 17.484A4 4 0 0 1 18 18"></path>
        </svg>
      ),
      icon2: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap m-auto size-4" aria-hidden="true">
          <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
          <path d="M22 10v6"></path>
          <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
        </svg>
      ),
      status: t('professionProcess.carousel.healthExpert.status'),
      title: t('professionProcess.carousel.healthExpert.title'),
      description: t('professionProcess.carousel.healthExpert.description')
    },
    {
      id: 6,
      image: "/insaat.png",
      icon1: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-hard-hat m-auto size-4" aria-hidden="true">
          <path d="M2 18h20"></path>
          <path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"></path>
          <path d="M4 15v-3a6 6 0 0 1 6-6h0"></path>
          <path d="M14 6h0a6 6 0 0 1 6 6v3"></path>
        </svg>
      ),
      icon2: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-hammer m-auto size-4" aria-hidden="true">
          <path d="m15 12-8.5-8.5c-.83-.83-2.17-.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 0 0 3L12 15"></path>
          <path d="M17.64 15 22 10.64"></path>
          <path d="m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91"></path>
        </svg>
      ),
      status: t('professionProcess.carousel.construction.status'),
      title: t('professionProcess.carousel.construction.title'),
      description: t('professionProcess.carousel.construction.description')
    },
    {
      id: 7,
      image: "/elektrikci.png",
      icon1: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap m-auto size-4" aria-hidden="true">
          <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
        </svg>
      ),
      icon2: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wrench m-auto size-4" aria-hidden="true">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
        </svg>
      ),
      status: t('professionProcess.carousel.electrician.status'),
      title: t('professionProcess.carousel.electrician.title'),
      description: t('professionProcess.carousel.electrician.description')
    },
    {
      id: 8,
      image: "/garson.png",
      icon1: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-utensils m-auto size-4" aria-hidden="true">
          <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path>
          <path d="M7 2v20"></path>
          <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path>
        </svg>
      ),
      icon2: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chef-hat m-auto size-4" aria-hidden="true">
          <path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"></path>
          <path d="M6 17h12"></path>
        </svg>
      ),
      status: t('professionProcess.carousel.hospitality.status'),
      title: t('professionProcess.carousel.hospitality.title'),
      description: t('professionProcess.carousel.hospitality.description')
    },
    {
      id: 9,
      image: "/lojistik.png",
      icon1: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-truck m-auto size-4" aria-hidden="true">
          <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
          <path d="M15 18H9"></path>
          <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
          <circle cx="17" cy="18" r="2"></circle>
          <circle cx="7" cy="18" r="2"></circle>
        </svg>
      ),
      icon2: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-package m-auto size-4" aria-hidden="true">
          <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
          <path d="M12 22V12"></path>
          <path d="m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7"></path>
          <path d="m7.5 4.27 9 5.15"></path>
        </svg>
      ),
      status: t('professionProcess.carousel.logistics.status'),
      title: t('professionProcess.carousel.logistics.title'),
      description: t('professionProcess.carousel.logistics.description')
    },
    {
      id: 10,
      image: "/is-alim-onei.png",
      icon1: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart m-auto size-4" aria-hidden="true">
          <circle cx="8" cy="21" r="1"></circle>
          <circle cx="19" cy="21" r="1"></circle>
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
        </svg>
      ),
      icon2: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-handshake m-auto size-4" aria-hidden="true">
          <path d="m11 17 2 2a1 1 0 1 0 3-3"></path>
          <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path>
          <path d="m21 3 1 11h-2"></path>
          <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path>
          <path d="M3 4h8"></path>
        </svg>
      ),
      status: t('professionProcess.carousel.service.status'),
      title: t('professionProcess.carousel.service.title'),
      description: t('professionProcess.carousel.service.description')
    }
  ];

  const nextSlide = () => {
    setCurrentCarouselSlide((prev) => {
      const maxSlides = windowWidth >= 1024 ? carouselData.length - 3 : 
                       windowWidth >= 768 ? carouselData.length - 2 : 
                       carouselData.length - 1;
      return prev >= maxSlides ? prev : prev + 1;
    });
  };

  const prevSlide = () => {
    setCurrentCarouselSlide((prev) => prev > 0 ? prev - 1 : prev);
  };

  const goToSlide = (index: number) => {
    setCurrentCarouselSlide(index);
  };

  const getTranslateX = () => {
    if (windowWidth >= 1024) {
      // Desktop: show 3 items, translate by 33.333% per slide
      return -(currentCarouselSlide * (100 / 3));
    } else if (windowWidth >= 768) {
      // Tablet: show 2 items, translate by 50% per slide
      return -(currentCarouselSlide * 50);
    } else {
      // Mobile: show 1 item, translate by 100% per slide
      return -(currentCarouselSlide * 100);
    }
  };

  const getMaxSlides = () => {
    return windowWidth >= 1024 ? carouselData.length - 3 : 
           windowWidth >= 768 ? carouselData.length - 2 : 
           carouselData.length - 1;
  };

  const tabs = [
    {
      id: 'job-search',
      title: t('professionProcess.process.tabs.jobSearch'),
      content: {
        title: t('professionProcess.process.content.jobSearch.title'),
        subtitle: t('professionProcess.process.content.jobSearch.subtitle'),
        description: t('professionProcess.process.content.jobSearch.description'),
        detail: t('professionProcess.process.content.jobSearch.detail'),
        footer: t('professionProcess.process.content.jobSearch.footer'),
        icon: <Briefcase className="w-24 h-24 text-blue-600" />,
        bgColor: 'from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20'
      }
    },
    {
      id: 'visa-application',
      title: t('professionProcess.process.tabs.visaApplication'),
      content: {
        title: t('professionProcess.process.content.visaApplication.title'),
        subtitle: t('professionProcess.process.content.visaApplication.subtitle'),
        description: t('professionProcess.process.content.visaApplication.description'),
        detail: t('professionProcess.process.content.visaApplication.detail'),
        footer: t('professionProcess.process.content.visaApplication.footer'),
        icon: <CheckCircle className="w-24 h-24 text-green-600" />,
        bgColor: 'from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20'
      }
    },
    {
      id: 'company-agreements',
      title: t('professionProcess.process.tabs.companyAgreements'),
      content: {
        title: t('professionProcess.process.content.companyAgreements.title'),
        subtitle: t('professionProcess.process.content.companyAgreements.subtitle'),
        description: t('professionProcess.process.content.companyAgreements.description'),
        detail: t('professionProcess.process.content.companyAgreements.detail'),
        footer: t('professionProcess.process.content.companyAgreements.footer'),
        icon: <Globe className="w-24 h-24 text-purple-600" />,
        bgColor: 'from-purple-50 to-violet-100 dark:from-purple-900/20 dark:to-violet-900/20'
      }
    }
  ];

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };
  

const router = useRouter();
const locale = useLocale(); // Bu otomatik olarak aktif dil döner: 'tr', 'en', 'de'
  return (
    <>
       
    <section className="relative mx-2.5 mt-2.5 rounded-t-2xl rounded-b-[36px] bg-gradient-to-b from-amber-50 via-background to-background py-10 lg:mx-4 dark:from-amber-950">
      {/* <div className="container max-w-2xl mx-auto text-center">
        <h1 className="text-center text-4xl font-semibold tracking-tight lg:text-5xl">
          Almanya Sağlık Sektörü İş Vizesi
        </h1>
        <p className="mt-4 text-center leading-snug font-medium text-muted-foreground lg:mx-auto">
          Almanya'da sağlık sektöründe çalışmak için ulusal vize başvuru süreciniz. Doktor, hemşire, bakıcı ve diğer sağlık personeli için profesyonel rehberlik.
        </p>
        
    
        
        <div className="relative text-muted-foreground h-px w-full my-12">
          <div className="h-px w-full bg-[repeating-linear-gradient(90deg,transparent,transparent_4px,currentColor_4px,currentColor_10px)] [mask-image:linear-gradient(90deg,transparent,black_25%,black_75%,transparent)]"></div>
        </div>
        
        <div className="mx-auto text-center">
          <h2 className="text-xl sm:text-2xl font-semibold mb-6">Diğer Meslekler</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-3 shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center gap-2">
                <Hammer className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600" />
                <h3 className="font-medium text-xs sm:text-sm">İnşaatçı</h3>
                <p className="text-xs text-muted-foreground leading-tight">İnşaat ve yapı sektörü</p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg p-3 shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center gap-2">
                <UtensilsCrossed className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
                <h3 className="font-medium text-xs sm:text-sm">Garson</h3>
                <p className="text-xs text-muted-foreground leading-tight">Restoran ve otel sektörü</p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg p-3 shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center gap-2">
                <Wrench className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                <h3 className="font-medium text-xs sm:text-sm">Tesisatçı</h3>
                <p className="text-xs text-muted-foreground leading-tight">Teknik ve bakım hizmetleri</p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg p-3 shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center gap-2">
                <Car className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
                <h3 className="font-medium text-xs sm:text-sm">Şoför</h3>
                <p className="text-xs text-muted-foreground leading-tight">Lojistik ve ulaşım sektörü</p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg p-3 shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center gap-2">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-teal-600" />
                <h3 className="font-medium text-xs sm:text-sm">Temizlikçi</h3>
                <p className="text-xs text-muted-foreground leading-tight">Temizlik ve hijyen hizmetleri</p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg p-3 shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center gap-2">
                <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-600" />
                <h3 className="font-medium text-xs sm:text-sm">Ofis Personeli</h3>
                <p className="text-xs text-muted-foreground leading-tight">Büro ve yönetim işleri</p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg p-3 shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center gap-2">
                <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-red-600" />
                <h3 className="font-medium text-xs sm:text-sm">Muhasebeci</h3>
                <p className="text-xs text-muted-foreground leading-tight">Mali müşavirlik ve finans</p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg p-3 shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center gap-2">
                <div className="text-lg sm:text-xl">👨‍🍳</div>
                <h3 className="font-medium text-xs sm:text-sm">Aşçı</h3>
                <p className="text-xs text-muted-foreground leading-tight">Mutfak ve yemek hizmetleri</p>
              </div>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Yukarıdaki meslekler ve daha fazlası için ulusal vize başvuru süreçlerinde profesyonel destek sunuyoruz. 
            <span className="font-medium text-foreground"> Her meslek grubuna özel evrak hazırlığı ve süreç yönetimi.</span>
          </p>
        </div>
      </div> */}
       <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex w-full flex-col items-center justify-center gap-4">
              <h2 className="mx-auto max-w-[21.875rem] text-center text-4xl leading-none font-medium md:max-w-[28.125rem] md:text-5xl lg:max-w-[35rem] lg:text-6xl">{t('professionProcess.hero.title')}</h2>
            </div>
            <div className="relative w-full" role="region" aria-roledescription="carousel" data-slot="carousel">
              <div className="overflow-hidden" data-slot="carousel-content">
                <div 
                  className="flex -ml-8 pt-16 transition-transform duration-500 ease-in-out" 
                  style={{transform: `translate3d(${getTranslateX()}%, 0px, 0px)`}}
                >
                  {carouselData.map((item, index) => (
                    <div key={item.id} role="group" aria-roledescription="slide" data-slot="carousel-item" className="min-w-0 shrink-0 grow-0 basis-full pl-8 md:basis-1/2 lg:basis-1/3">
                      <div className="p-1">
                        <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl py-6 border-0 shadow-none">
                          <div data-slot="card-content" className="flex flex-col p-0">
                            <div style={{backgroundImage: `url("${item.image}")`}} className="relative flex aspect-[0.935802469] w-full flex-col items-center justify-between overflow-hidden rounded-2xl bg-cover bg-center bg-no-repeat p-7">
                              <div className="flex size-full flex-1"></div>
                              <div className="h-12 w-full">
                                <div className="mx-auto mb-8 flex w-full max-w-[15rem] items-center gap-4 rounded-full bg-primary px-3 py-2.5 shadow-xl">
                                  <div className="shrink-0">
                                    <div className="flex -space-x-2">
                                      <div className="flex size-7 rounded-full border border-black bg-white">
                                        {item.icon1}
                                      </div>
                                      <div className="flex size-7 rounded-full border border-black bg-white">
                                        {item.icon2}
                                      </div>
                                    </div>
                                  </div>
                                  <div className="text-sm font-medium text-white">{item.status}</div>
                                </div>
                              </div>
                            </div>
                            <div className="flex w-full flex-col gap-1 pt-6">
                              <h3 className="text-xl font-medium text-foreground">{item.title}</h3>
                              <p className="text-sm">{item.description}</p>
                              <div className="mt-3">
                                <Button 
                                  size="sm" 
                                  variant="secondary" 
                                  className="text-xs h-7 px-3"
                                  onClick={() => {
                                    const slugMap: { [key: number]: string } = {
                                      1: '/profession-process/doctor',
                                      2: '/profession-process/nurse',
                                      3: '/profession-process/caregiver',
                                      4: '/profession-process/health-technician',
                                      5: '/profession-process/health-expert',
                                      6: '/profession-process/construction-worker',
                                      7: '/profession-process/electrician',
                                      8: '/profession-process/chef',
                                      9: '/profession-process/driver',
                                      10: '/profession-process/sales-assistant',
                                    };

                                    router.push(`/${locale}${slugMap[item.id] || '/profession-process'}`);
                                  }}
                                >
                                  {item.id === 1 ? t('professionProcess.carousel.doctor.button') :
                                   item.id === 2 ? t('professionProcess.carousel.nurse.button') :
                                   item.id === 3 ? t('professionProcess.carousel.caregiver.button') :
                                   item.id === 4 ? t('professionProcess.carousel.healthTechnician.button') :
                                   item.id === 5 ? t('professionProcess.carousel.healthExpert.button') :
                                   item.id === 6 ? t('professionProcess.carousel.construction.button') :
                                   item.id === 7 ? t('professionProcess.carousel.electrician.button') :
                                   item.id === 8 ? t('professionProcess.carousel.hospitality.button') :
                                   item.id === 9 ? t('professionProcess.carousel.logistics.button') :
                                   t('professionProcess.carousel.service.button')}
                                  <ArrowRight className="w-3 h-3 ml-1" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-4 flex items-center justify-center gap-4">
                <button 
                  onClick={prevSlide}
                  data-slot="carousel-previous" 
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 rounded-full top-1/2 -left-12 static size-12 translate-y-0"
                  disabled={currentCarouselSlide === 0}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left" aria-hidden="true">
                    <path d="m12 19-7-7 7-7"></path>
                    <path d="M19 12H5"></path>
                  </svg>
                  <span className="sr-only">{t('professionProcess.navigation.previousSlide')}</span>
                </button>
                <button 
                  onClick={nextSlide}
                  data-slot="carousel-next" 
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 rounded-full top-1/2 -right-12 static size-12 translate-y-0"
                  disabled={currentCarouselSlide >= getMaxSlides()}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right" aria-hidden="true">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                  <span className="sr-only">{t('professionProcess.navigation.nextSlide')}</span>
                </button>
              </div>
            </div>
          </div>
        </section>
    </section>

    {/* Diğer Meslekler Section */}
    <section className="py-18 container mx-auto px-4">
      <div className="relative container">
        <h2 className="mb-8 max-w-xl text-2xl font-semibold text-balance lg:text-4xl">{t('professionProcess.otherProfessions.title')}</h2>
        <div className="z-30 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col gap-10 rounded-lg border bg-background p-8">
            <div>
              <Hammer className="w-6 h-6 text-orange-600" />
              <h3 className="mt-6 mb-2 font-medium">{t('professionProcess.otherProfessions.construction.title')}</h3>
              <p className="text-sm text-muted-foreground">{t('professionProcess.otherProfessions.construction.description')}</p>
            </div>
            {/* <Link href={`/${locale}/profession-process/construction`} className="flex items-center gap-2 text-sm font-medium">
              {t('professionProcess.otherProfessions.learnMore')}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right w-4">
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </Link> */}
          </div>
          
          <div className="flex flex-col gap-10 rounded-lg border bg-background p-8">
            <div>
              <UtensilsCrossed className="w-6 h-6 text-green-600" />
              <h3 className="mt-6 mb-2 font-medium">{t('professionProcess.otherProfessions.hospitality.title')}</h3>
              <p className="text-sm text-muted-foreground">{t('professionProcess.otherProfessions.hospitality.description')}</p>
            </div>
            {/* <Link href={`/${locale}/profession-process/hospitality`} className="flex items-center gap-2 text-sm font-medium">
              {t('professionProcess.otherProfessions.learnMore')}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right w-4">
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </Link> */}
          </div>
          
          <div className="flex flex-col gap-10 rounded-lg border bg-background p-8">
            <div>
              <Car className="w-6 h-6 text-purple-600" />
              <h3 className="mt-6 mb-2 font-medium">{t('professionProcess.otherProfessions.logistics.title')}</h3>
              <p className="text-sm text-muted-foreground">{t('professionProcess.otherProfessions.logistics.description')}</p>
            </div>
            {/* <Link href={`/${locale}/profession-process/logistics`} className="flex items-center gap-2 text-sm font-medium">
              {t('professionProcess.otherProfessions.learnMore')}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right w-4">
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </Link> */}
          </div>
          
          <div className="flex flex-col gap-10 rounded-lg border bg-background p-8">
            <div>
              <Users className="w-6 h-6 text-teal-600" />
              <h3 className="mt-6 mb-2 font-medium">{t('professionProcess.otherProfessions.cleaning.title')}</h3>
              <p className="text-sm text-muted-foreground">{t('professionProcess.otherProfessions.cleaning.description')}</p>
            </div>
            {/* <Link href={`/${locale}/profession-process/cleaning`} className="flex items-center gap-2 text-sm font-medium">
              {t('professionProcess.otherProfessions.learnMore')}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right w-4">
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </Link> */}
          </div>
          
          <div className="flex flex-col gap-10 rounded-lg border bg-background p-8">
            <div>
              <Briefcase className="w-6 h-6 text-indigo-600" />
              <h3 className="mt-6 mb-2 font-medium">{t('professionProcess.otherProfessions.office.title')}</h3>
              <p className="text-sm text-muted-foreground">{t('professionProcess.otherProfessions.office.description')}</p>
            </div>
            {/* <Link href={`/${locale}/profession-process/office`} className="flex items-center gap-2 text-sm font-medium">
              {t('professionProcess.otherProfessions.learnMore')}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right w-4">
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </Link> */}
          </div>
          
          <div className="flex flex-col gap-10 rounded-lg border bg-background p-8">
            <div>
              <FileText className="w-6 h-6 text-red-600" />
              <h3 className="mt-6 mb-2 font-medium">{t('professionProcess.otherProfessions.others.title')}</h3>
              <p className="text-sm text-muted-foreground">{t('professionProcess.otherProfessions.others.description')}</p>
            </div>
            {/* <Link href={`/${locale}/profession-process/others`} className="flex items-center gap-2 text-sm font-medium">
              {t('professionProcess.otherProfessions.learnMore')}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right w-4">
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </Link> */}
          </div>
        </div>
      </div>
    </section>

  


    {/* Süreç Detayları */}
    <section className="overflow-hidden py-20 px-4 ">
      <div className="container mx-auto max-w-5xl">
        <div className="relative [&>div[data-slot=carousel-content]]:overflow-visible" role="region" aria-roledescription="carousel" data-slot="carousel">
          <div className="flex items-center justify-center">
            <div dir="ltr" data-orientation="horizontal" data-slot="tabs" className="flex-col gap-2 mb-8 flex justify-center px-4 sm:px-0">
              <div role="tablist" aria-orientation="horizontal" data-slot="tabs-list" className="text-muted-foreground inline-flex w-full sm:w-fit items-center justify-center rounded-lg p-[3px] relative h-auto gap-2 sm:gap-6 bg-background overflow-x-auto" tabIndex={0} data-orientation="horizontal" style={{outline: 'none'}}>
                {tabs.map((tab, index) => (
                  <button 
                    key={tab.id}
                    type="button" 
                    role="tab" 
                    aria-selected={activeTab === index}
                    aria-controls={`radix-content-${tab.id}`}
                    data-state={activeTab === index ? 'active' : 'inactive'}
                    id={`radix-trigger-${tab.id}`}
                    data-slot="tabs-trigger" 
                    className={`${activeTab === index ? 'data-[state=active]:bg-background dark:data-[state=active]:text-foreground data-[state=active]:shadow-sm' : ''} focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 sm:flex-none items-center justify-center gap-1.5 rounded-md border border-transparent px-1 sm:px-2 py-1 font-medium whitespace-nowrap focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 text-xs sm:text-base transition-all duration-700 ease-out hover:bg-accent/50 min-w-0 flex-shrink-0`}
                    tabIndex={-1} 
                    data-orientation="horizontal"
                    onClick={() => handleTabClick(index)}
                  >
                    <span className="truncate text-center leading-tight">
                      {tab.title}
                    </span>
                  </button>
                ))}
                <div 
                  className="absolute bottom-0 h-0.5 bg-primary transition-all duration-700 ease-out" 
                  style={{
                    width: `${100 / tabs.length}%`, 
                    left: `${(activeTab * 100) / tabs.length}%`
                  }}
                ></div>
              </div>
            </div>
          </div>
          <div className="overflow-hidden" data-slot="carousel-content">
            <div className="flex -ml-4 max-w-4xl" style={{transform: `translate3d(-${activeTab * 100}%, 0px, 0px)`}}>
              {tabs.map((tab, index) => (
                <div key={tab.id} role="group" aria-roledescription="slide" data-slot="carousel-item" className="min-w-0 shrink-0 grow-0 basis-full pl-4 w-fit max-w-4xl">
                  <div className="grid h-full max-w-4xl gap-10 rounded-xl border border-border p-6 shadow-sm select-none sm:p-10 md:max-h-[450px] md:grid-cols-2 lg:gap-20">
                    <div className="flex flex-col justify-between gap-4">
                      <div>
                        <h2 className="text-2xl font-medium sm:text-4xl">
                          <span className="bg-gradient-to-b from-foreground/20 to-muted-foreground bg-clip-text text-transparent">{tab.content.title}</span><br/>
                          {tab.content.subtitle}
                        </h2>
                        <div className="mt-4 text-sm text-muted-foreground sm:mt-6">
                          {tab.content.description}<br/><br/>
                          {tab.content.detail}
                        </div>
                      </div>
                      <p className="mt-4 text-xs text-muted-foreground sm:mt-6">
                        {tab.content.footer}
                      </p>
                    </div>
                    <div className="rounded-xl border border-border p-2">
                      <div className={`h-full w-full rounded-xl bg-gradient-to-br ${tab.content.bgColor} flex items-center justify-center`}>
                        {tab.content.icon}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* İstatistikler */}
   

    {/* Hakkımızda */}
    <section className="py-10 container mx-auto max-w-5xl px-4">
      <section className="relative container max-w-5xl py-10 md:py-12 lg:py-15">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
            {t('professionProcess.about.title')}
          </h1>
          <p className="mt-4 max-w-2xl text-2xl text-muted-foreground md:text-3xl">
            {t('professionProcess.about.description')}
          </p>
        </div>
        <div className="absolute inset-0 z-[-1] -translate-y-1/2 blur-[100px] will-change-transform">
          <div className="absolute top-0 right-0 h-[400px] w-[800px] -translate-x-1/5 rounded-full bg-gradient-to-r from-blue-500/25 to-green-500/25"></div>
          <div className="absolute top-0 right-0 size-[400px] rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10"></div>
        </div>
      </section>
      
      <section className="container max-w-5xl border-y py-5">
        <h2 className="font-mono text-sm font-semibold tracking-widest text-accent-foreground">{t('professionProcess.about.statsTitle')}</h2>
        <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">15+</h3>
            <p className="mt-1 font-medium text-muted-foreground">{t('professionProcess.about.stats.experience')}</p>
          </div>
          <div>
            <h3 className="text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">2.5K</h3>
            <p className="mt-1 font-medium text-muted-foreground">{t('professionProcess.about.stats.healthPersonnel')}</p>
          </div>
          <div>
            <h3 className="text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">95%</h3>
            <p className="mt-1 font-medium text-muted-foreground">{t('professionProcess.about.stats.successRate')}</p>
          </div>
          <div>
            <h3 className="text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">150+</h3>
            <p className="mt-1 font-medium text-muted-foreground">{t('professionProcess.about.stats.partners')}</p>
          </div>
        </div>
      </section>
      
      <section className="container max-w-5xl py-10 md:py-12 lg:py-15">
        <div className="max-w-2xl space-y-5 md:space-y-8 lg:space-y-10">
          <p className="text-lg">
            {t('professionProcess.about.content.paragraph1')}
          </p>
          <h2 className="text-2xl font-medium tracking-tight md:text-3xl">
            {t('professionProcess.about.content.highlight')}
          </h2>
          <p className="text-lg">
            {t('professionProcess.about.content.paragraph2')}
          </p>
        </div>
      </section>
    </section>
    </>
  );
}
