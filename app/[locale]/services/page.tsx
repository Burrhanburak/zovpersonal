"use client";

import { getTranslations } from "next-intl/server";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { useState } from "react";

export default function ServicesPage() {
  const t = useTranslations();
  const locale = useLocale();
  const [activeTab, setActiveTab] = useState<'workVisa' | 'documentation' | 'skillsAssessment'>('workVisa');

  // Console log for debugging
  // console.log('🔍 Current activeTab:', activeTab);

  const handleTabChange = (tab: 'workVisa' | 'documentation' | 'skillsAssessment') => {
    // console.log('🖱️ Button clicked, changing tab from', activeTab, 'to', tab);
    setActiveTab(tab);
  };

  // Tab içerikleri
  const tabContent = {
    workVisa: {
      title: t('services.tabContent.workVisa.title'),
      description: t('services.tabContent.workVisa.description'),
      stat1: { number: t('services.tabContent.workVisa.stat1.number'), label: t('services.tabContent.workVisa.stat1.label') },
      stat2: { number: t('services.tabContent.workVisa.stat2.number'), label: t('services.tabContent.workVisa.stat2.label') },
      category: t('services.tabContent.workVisa.category')
    },
    documentation: {
      title: t('services.tabContent.documentation.title'),
      description: t('services.tabContent.documentation.description'),
      stat1: { number: t('services.tabContent.documentation.stat1.number'), label: t('services.tabContent.documentation.stat1.label') },
      stat2: { number: t('services.tabContent.documentation.stat2.number'), label: t('services.tabContent.documentation.stat2.label') },
      category: t('services.tabContent.documentation.category')
    },
    skillsAssessment: {
      title: t('services.tabContent.skillsAssessment.title'),
      description: t('services.tabContent.skillsAssessment.description'),
      stat1: { number: t('services.tabContent.skillsAssessment.stat1.number'), label: t('services.tabContent.skillsAssessment.stat1.label') },
      stat2: { number: t('services.tabContent.skillsAssessment.stat2.number'), label: t('services.tabContent.skillsAssessment.stat2.label') },
      category: t('services.tabContent.skillsAssessment.category')
    }
  } as const;

  // Debug: Check which locale-specific translation we're getting
  // console.log('🌐 ServicesPage - Main title:', t('services.title'));
  // console.log('🌐 ServicesPage - Work visa title:', t('services.workVisa.title'));

  const mainServices = [
    {
      title: t('services.workVisa.title'),
      description: t('services.workVisa.description'),
      icon: '📋',
      features: [
        'Complete application preparation',
        'Document review and verification',
        'Interview preparation',
        'Application tracking'
      ]
    },
    {
      title: t('services.skillsAssessment.title'),
      description: t('services.skillsAssessment.description'),
      icon: '🎯',
      features: [
        'Qualification evaluation',
        'Skills gap analysis',
        'Career pathway advice',
        'Job market insights'
      ]
    },
    {
      title: t('services.documentation.title'),
      description: t('services.documentation.description'),
      icon: '📄',
      features: [
        'Document translation',
        'Certificate authentication',
        'Apostille services',
        'Digital document management'
      ]
    },
    {
      title: t('services.consultation.title'),
      description: t('services.consultation.description'),
      icon: '👥',
      features: [
        'One-on-one consultation',
        'Personalized action plan',
        'Regular progress updates',
        'Expert guidance'
      ]
    }
  ];

  const countries = [
    { name: t('services.countries.countryNames.germany'), flag: '🇩🇪', popular: true },
    { name: t('services.countries.countryNames.netherlands'), flag: '🇳🇱', popular: true },
    { name: t('services.countries.countryNames.turkey'), flag: '🇹🇷', popular: true },
    { name: t('services.countries.countryNames.romania'), flag: '🇷🇴', popular: true },
    { name: t('services.countries.countryNames.bulgaria'), flag: '🇧🇬', popular: false },
    { name: t('services.countries.countryNames.croatia'), flag: '🇭🇷', popular: false },
    { name: t('services.countries.countryNames.serbia'), flag: '🇷🇸', popular: false },
 
  ];

  const visaTypes = [
    {
      title: 'EU Blue Card',
      description: 'For highly skilled professionals with university degrees',
      requirements: ['University degree', '€55,000+ salary', 'Job offer'],
      duration: '4 years',
      icon: '💙'
    },
    {
      title: 'Skilled Worker Visa',
      description: 'For professionals with vocational training',
      requirements: ['Recognized qualification', 'Job offer', 'Language skills'],
      duration: '4 years',
      icon: '🔧'
    },
    {
      title: 'IT Specialist Visa',
      description: 'For IT professionals with relevant experience',
      requirements: ['3+ years experience', '€4,140+ monthly salary', 'No formal degree required'],
      duration: '4 years',
      icon: '💻'
    },
    {
      title: 'Healthcare Professional Visa',
      description: 'For doctors, nurses, and healthcare workers',
      requirements: ['Medical qualification', 'Language proficiency', 'Recognition process'],
      duration: 'Variable',
      icon: '🏥'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="mx-2.5 mt-2.5 pt-10 lg:mx-4 bg-gradient-to-b from-cream via-muted/20 to-muted/80 rounded-t-[36px] rounded-b-2xl">
        <section className="py-16 lg:py-24 lg:pt-32 container mx-auto">
          <div className="container flex flex-col justify-between gap-8 md:gap-12 lg:flex-row lg:gap-16">
            <div className="flex-1 lg:max-w-2xl">
              <h1 className="text-2xl tracking-tight md:text-3xl lg:text-4xl xl:text-5xl">
                {t('services.title')}
              </h1>
              <p className="text-muted-foreground text-base mt-4 md:text-lg lg:text-xl">
                {t('services.subtitle')}
              </p>
              <div className="mt-6 flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                <Link href={`/${locale}/contact`}>
                  <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 h-10 px-6 py-2">
                    {t('nav.consultation')}
                  </button>
                </Link>
                <Link href={`/${locale}/about`}>
                  <button className="w-full sm:w-auto inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-semibold transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground px-4 py-2 h-10 gap-2 bg-gradient-to-r from-background to-transparent shadow-md">
                    <span className="truncate text-start">
                      {t('nav.about')}
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
            
            <div className="relative flex flex-1 flex-col justify-center space-y-4 lg:space-y-6 pt-8 lg:pt-0 lg:pl-8">
              {/* Decorative lines */}
              <div className="text-muted-foreground h-full w-px absolute top-0 left-0 hidden lg:block">
                <div className="h-full w-px bg-[repeating-linear-gradient(180deg,transparent,transparent_4px,currentColor_4px,currentColor_10px)] [mask-image:linear-gradient(180deg,transparent,black_25%,black_75%,transparent)]"></div>
              </div>
              <div className="text-muted-foreground h-px w-full absolute top-0 block lg:hidden">
                <div className="h-px w-full bg-[repeating-linear-gradient(90deg,transparent,transparent_4px,currentColor_4px,currentColor_10px)] [mask-image:linear-gradient(90deg,transparent,black_25%,black_75%,transparent)]"></div>
              </div>
              
              {/* Service items */}
              <div className="flex gap-3 lg:gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-dot text-primary mt-0.5 shrink-0">
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="1"></circle>
                </svg>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-sm lg:text-base">{t('services.workVisa.title')}</h3>
                  <p className="text-muted-foreground text-xs lg:text-sm mt-1 leading-relaxed">{t('services.workVisa.description')}</p>
                </div>
              </div>
              
              <div className="flex gap-3 lg:gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-blend text-primary mt-0.5 shrink-0">
                  <circle cx="9" cy="9" r="7"></circle>
                  <circle cx="15" cy="15" r="7"></circle>
                </svg>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-sm lg:text-base">{t('services.skillsAssessment.title')}</h3>
                  <p className="text-muted-foreground text-xs lg:text-sm mt-1 leading-relaxed">{t('services.skillsAssessment.description')}</p>
                </div>
              </div>
              
              <div className="flex gap-3 lg:gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-diamond text-primary mt-0.5 shrink-0">
                  <path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"></path>
                </svg>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-sm lg:text-base">{t('services.documentation.title')}</h3>
                  <p className="text-muted-foreground text-xs lg:text-sm mt-1 leading-relaxed">{t('services.documentation.description')}</p>
                </div>
              </div>
              
              <div className="flex gap-3 lg:gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chart-no-axes-column text-primary mt-0.5 shrink-0">
                  <line x1="18" x2="18" y1="20" y2="10"></line>
                  <line x1="12" x2="12" y1="20" y2="4"></line>
                  <line x1="6" x2="6" y1="20" y2="14"></line>
                </svg>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-sm lg:text-base">{t('services.consultation.title')}</h3>
                  <p className="text-muted-foreground text-xs lg:text-sm mt-1 leading-relaxed">{t('services.consultation.description')}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="mt-8 md:mt-12 lg:mt-16">
            <div className="container">
              <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full overflow-hidden rounded-2xl lg:rounded-3xl shadow-lg">
                <img 
                  alt="Vize danışmanlığı hizmetleri" 
                  className="w-full h-full object-cover object-center" 
                  src="/ise-alım.png" 
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Countries Section */}
        <section className="pb-16 lg:pb-24">
          <div className="container space-y-8 lg:space-y-12">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-xl tracking-tight md:text-2xl lg:text-3xl">
                {t('services.countries.title')}
              </h2>
              <p className="text-muted-foreground mt-2 md:mt-3 md:text-lg">
                {t('services.countries.subtitle')}
              </p>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 lg:gap-8">
                {countries.map((country, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl lg:text-4xl mb-2">{country.flag}</div>
                    <p className="text-sm lg:text-base text-muted-foreground font-medium">{country.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Service Features Tabs */}
      <section className="py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex-col grid grid-cols-1 gap-8 rounded-4xl border border-gray-200 p-4 lg:grid-cols-2 lg:p-8 xl:gap-20">
            <div className="flex flex-col-reverse justify-between gap-8 lg:flex-col">
              <div>
                <div className="flex animate-in flex-col gap-6 duration-300 fade-in">
                  <span className="text-xs text-gray-500 uppercase">
                    {(() => {
                      console.log('📝 Rendering category:', tabContent[activeTab].category);
                      return tabContent[activeTab].category;
                    })()}
                  </span>
                  <div className="flex flex-col gap-4">
                    <h2 className="text-3xl font-medium">
                      {(() => {
                        console.log('📝 Rendering title:', tabContent[activeTab].title);
                        return tabContent[activeTab].title;
                      })()}
                    </h2>
                    <p className="text-gray-600">
                      {(() => {
                        console.log('📝 Rendering description:', tabContent[activeTab].description);
                        return tabContent[activeTab].description;
                      })()}
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 text-gray-600 flex w-full max-w-full items-center justify-center h-12 rounded-full p-2 overflow-hidden">
                <button 
                  onClick={() => {
                    console.log('🔘 İş Vizesi button clicked');
                    handleTabChange('workVisa');
                  }}
                  className={`flex flex-1 items-center justify-center gap-1.5 border border-transparent text-xs md:text-sm font-medium whitespace-nowrap transition-all h-full rounded-full px-2 md:px-4 py-2 ${
                    activeTab === 'workVisa' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {t('services.tabButtons.workVisa')}
                  {activeTab === 'workVisa' && <span className="ml-1">✓</span>}
                </button>
                <button 
                  onClick={() => {
                    console.log('📄 Belge Hazırlama button clicked');
                    handleTabChange('documentation');
                  }}
                  className={`flex flex-1 items-center justify-center gap-1.5 border border-transparent text-xs md:text-sm font-medium whitespace-nowrap transition-all h-full rounded-full px-2 md:px-4 py-2 ${
                    activeTab === 'documentation' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {t('services.tabButtons.documentation')}
                  {activeTab === 'documentation' && <span className="ml-1">✓</span>}
                </button>
                <button 
                  onClick={() => {
                    console.log('🎯 Yetenek Değerlendirmesi button clicked');
                    handleTabChange('skillsAssessment');
                  }}
                  className={`flex flex-1 items-center justify-center gap-1.5 border border-transparent text-xs md:text-sm font-medium whitespace-nowrap transition-all h-full rounded-full px-2 md:px-4 py-2 ${
                    activeTab === 'skillsAssessment' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {t('services.tabButtons.skillsAssessment')}
                  {activeTab === 'skillsAssessment' && <span className="ml-1">✓</span>}
                </button>
              </div>
            </div>
            <div>
              <div className="flex-1 outline-none animate-in duration-300 fade-in">
                <div className="relative">
                  <img alt={tabContent[activeTab].category} className="h-[440px] w-full rounded-3xl object-cover lg:h-[540px]" src="/is-alim-onei.png" />
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-600/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 flex flex-col justify-center gap-8 p-6 text-white">
                    <div className="flex flex-col gap-1.5">
                      <p className="text-4xl font-medium lg:text-5xl">{tabContent[activeTab].stat1.number}</p>
                      <p className="font-medium">{tabContent[activeTab].stat1.label}</p>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <p className="text-4xl font-medium lg:text-5xl">{tabContent[activeTab].stat2.number}</p>
                      <p className="font-medium">{tabContent[activeTab].stat2.label}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

   
    


      {/* Visa Application Process */}
      <section className="py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-3xl flex-col justify-center gap-7 md:text-center">
            <h2 className="text-2xl md:text-4xl">{t('process.title')}</h2>
            <p className="text-sm text-muted-foreground md:text-base">
              {t('process.subtitle')}
            </p>
          </div>
          <div className="mx-auto mt-14 flex max-w-5xl flex-col gap-4 lg:px-16">
            
            {/* Step 1 */}
            <div className="flex flex-col items-center justify-between min-[960px]:flex-row min-[960px]:gap-10">
              <div className="flex gap-4 min-[960px]:max-w-md">
                <div className="flex flex-col items-center justify-between gap-1">
                  <span className="h-20 shrink-0"></span>
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full border bg-muted/50 font-mono text-lg">1</span>
                  <span className="h-20 w-[3px] shrink-0 bg-gradient-to-b from-transparent to-primary opacity-70"></span>
                </div>
                <div className="flex flex-col justify-center gap-5 px-0 min-[960px]:gap-6 min-[960px]:px-4 min-[960px]:py-4">
                  <h3 className="text-xl min-[960px]:text-2xl">{t('process.step1.title')}</h3>
                  <p className="text-sm text-muted-foreground min-[960px]:text-base">
                    {t('process.step1.description')}
                  </p>
                </div>
              </div>
              <img src="/ilk-basvuru.png" alt={t('process.step1.alt')} className="z-10 aspect-video w-full rounded-xl border object-cover min-[960px]:max-h-56 min-[960px]:w-auto" />
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center justify-between min-[960px]:flex-row min-[960px]:gap-10">
              <div className="flex gap-4 min-[960px]:max-w-md">
                <div className="relative flex flex-col items-center justify-between gap-1">
                  <span className="absolute -top-8 mx-auto h-8 w-[3px] shrink-0 bg-primary opacity-70"></span>
                  <span className="absolute -bottom-8 mx-auto h-8 w-[3px] shrink-0 bg-primary opacity-70"></span>
                  <span className="h-20 w-[3px] shrink-0 bg-primary opacity-70"></span>
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full border bg-muted/50 font-mono text-lg">2</span>
                  <span className="h-20 w-[3px] shrink-0 bg-primary opacity-70"></span>
                </div>
                <div className="flex flex-col justify-center gap-5 px-0 min-[960px]:gap-6 min-[960px]:px-4 min-[960px]:py-4">
                  <h3 className="text-xl min-[960px]:text-2xl">{t('process.step2.title')}</h3>
                  <p className="text-sm text-muted-foreground min-[960px]:text-base">
                    {t('process.step2.description')}
                  </p>
                </div>
              </div>
              <img src="/belge-hazırlama-kontrol.png" alt={t('process.step2.alt')} className="z-10 max-h-56 w-full rounded-xl border object-cover min-[960px]:aspect-video min-[960px]:w-auto" />
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center justify-between min-[960px]:flex-row min-[960px]:gap-10">
              <div className="flex gap-4 min-[960px]:max-w-md">
                <div className="flex flex-col items-center justify-between gap-1">
                  <span className="h-20 w-[3px] shrink-0 bg-gradient-to-t from-transparent to-primary opacity-70"></span>
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full border bg-muted/50 font-mono text-lg">3</span>
                  <span className="h-20 shrink-0"></span>
                </div>
                <div className="flex flex-col justify-center gap-5 px-0 min-[960px]:gap-6 min-[960px]:px-4 min-[960px]:py-4">
                  <h3 className="text-xl min-[960px]:text-2xl">{t('process.step3.title')}</h3>
                  <p className="text-sm text-muted-foreground min-[960px]:text-base">
                    {t('process.step3.description')}
                  </p>
                </div>
              </div>
              <img src="/takipi.png" alt={t('process.step3.alt')} className="z-10 max-h-56 w-full rounded-xl border object-cover min-[960px]:aspect-video min-[960px]:w-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="relative py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 flex flex-col space-y-8 md:space-y-14">
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold max-w-none md:max-w-md">
                {t('documents.title')}
              </h2>
            </div>
            
            <div className="relative">
              {/* Top border for all screen sizes */}
              <div className="absolute top-0 left-0 right-0 h-px bg-border"></div>
              
              {/* Grid container */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border">
                
                {/* Personal Documents */}
                <div className="relative px-4 md:px-6 lg:px-8 pt-8 md:pt-10 pb-8 md:pb-12">
                  {/* Icon container */}
                  <div className="relative -mt-12 md:-mt-14 mb-6 md:mb-8 flex">
                    <div className="flex aspect-square w-10 md:w-12 lg:w-16 items-center justify-center bg-white border border-border rounded-lg shadow-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="mb-3 md:mb-4 text-lg md:text-xl lg:text-2xl font-semibold leading-tight">
                      {t('documents.categories.personal.title')}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {t('documents.categories.personal.description')}
                    </p>
                  </div>
                </div>

                {/* Educational Documents */}
                <div className="relative px-4 md:px-6 lg:px-8 pt-8 md:pt-10 pb-8 md:pb-12">
                  <div className="relative -mt-12 md:-mt-14 mb-6 md:mb-8 flex">
                    <div className="flex aspect-square w-10 md:w-12 lg:w-16 items-center justify-center bg-white border border-border rounded-lg shadow-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8">
                        <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
                        <path d="M22 10v6"></path>
                        <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
                      </svg>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="mb-3 md:mb-4 text-lg md:text-xl lg:text-2xl font-semibold leading-tight">
                      {t('documents.categories.education.title')}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {t('documents.categories.education.description')}
                    </p>
                  </div>
                </div>

                {/* Professional Documents */}
                <div className="relative px-4 md:px-6 lg:px-8 pt-8 md:pt-10 pb-8 md:pb-12">
                  <div className="relative -mt-12 md:-mt-14 mb-6 md:mb-8 flex">
                    <div className="flex aspect-square w-10 md:w-12 lg:w-16 items-center justify-center bg-white border border-border rounded-lg shadow-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8">
                        <rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect>
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                      </svg>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="mb-3 md:mb-4 text-lg md:text-xl lg:text-2xl font-semibold leading-tight">
                      {t('documents.categories.professional.title')}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {t('documents.categories.professional.description')}
                    </p>
                  </div>
                </div>

                {/* Medical & Legal Documents */}
                <div className="relative px-4 md:px-6 lg:px-8 pt-8 md:pt-10 pb-8 md:pb-12">
                  <div className="relative -mt-12 md:-mt-14 mb-6 md:mb-8 flex">
                    <div className="flex aspect-square w-10 md:w-12 lg:w-16 items-center justify-center bg-white border border-border rounded-lg shadow-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8">
                        <path d="M20 13c0 5-3.5 7.5-8 10.5C7.5 20.5 4 18 4 13V6l8-3 8 3z"></path>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="mb-3 md:mb-4 text-lg md:text-xl lg:text-2xl font-semibold leading-tight">
                      {t('documents.categories.medical.title')}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {t('documents.categories.medical.description')}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Bottom border */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-border"></div>
            </div>
          </div>
          
          {/* Side borders for desktop */}
          <div className="absolute inset-y-0 left-4 right-4 hidden lg:block">
            <div className="relative h-full">
              <div className="absolute inset-y-0 left-0 w-px bg-border"></div>
              <div className="absolute inset-y-0 right-0 w-px bg-border"></div>
            </div>
          </div>
        </div>
      </section>

    
    </>
  );
}
