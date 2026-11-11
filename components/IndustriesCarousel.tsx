"use client";
import { assetUrl } from '@/lib/assets';

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslations } from 'next-intl';

const IndustriesCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const t = useTranslations('home.carousel');

  const cardKeys = ['healthcare', 'construction', 'recruitment', 'partnership', 'visaprocess', 'support'];

  const industries = cardKeys.map(key => ({
    id: key,
    image: {
      healthcare: assetUrl("doctor-two.png"),
      construction: assetUrl("insaat.png"),
      recruitment: assetUrl("is-alim-onei.png"),
      partnership: assetUrl("ekip.png"),
      visaprocess: assetUrl("belge-hazırlama-kontrol.png"),
      support: assetUrl("müsteri-iliskilerii.png"),
    }[key] || assetUrl("zovpersonal.png"),
    title: t(`cards.${key}.title`),
    description: t(`content.${key}.description`),
    highlight: t(`content.${key}.highlight`),
    category: t(`cards.${key}.category`),
  }));
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === industries.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? industries.length - 1 : prev - 1));
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <section className="overflow-hidden py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="relative" role="region" aria-roledescription="carousel" data-slot="carousel">
          <div className="grid gap-8 md:gap-4 lg:grid-cols-2 [&>div[data-slot=carousel-content]]:overflow-visible [&>div[data-slot=carousel-content]]:[clip-path:inset(-100vw_-100vw_-100vw_0)]">
            <div>
              <h2 className="text-4xl font-semibold md:text-6xl">
                {t('title').split(' ').slice(0, -1).join(' ')} <br /> 
                <span className="text-primary/40">{t('title').split(' ').slice(-1).join(' ')}</span>
              </h2>
              <p className="mt-8 text-xl text-muted-foreground">{t('description')}</p>
              
              <div className="mt-8 hidden items-center gap-4 md:flex">
                <button 
                  data-slot="carousel-previous" 
                  onClick={prevSlide}
                  className="inline-flex items-center justify-center size-11 rounded-xl border border-[rgb(28,39,6)]/15 bg-background text-[rgb(28,39,6)] shadow-xs hover:bg-[rgb(28,39,6)]/5 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left" aria-hidden="true"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
                  <span className="sr-only">Previous slide</span>
                </button>
                <button 
                  data-slot="carousel-next" 
                  onClick={nextSlide}
                  className="inline-flex items-center justify-center size-11 rounded-xl border border-[rgb(28,39,6)]/15 bg-background text-[rgb(28,39,6)] shadow-xs hover:bg-[rgb(28,39,6)]/5 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  <span className="sr-only">Next slide</span>
                </button>
              </div>
            </div>
            <div className="overflow-hidden" data-slot="carousel-content">
              <div 
                className="flex -ml-4 max-w-[400px] select-none transition-transform duration-500 ease-in-out" 
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {industries.map((industry) => (
                  <div key={industry.id} role="group" aria-roledescription="slide" data-slot="carousel-item" className="min-w-0 shrink-0 grow-0 basis-full pl-4 w-fit">
                    <div className="relative aspect-4/5 max-h-[500px] rounded-2xl">
                      <div className="absolute inset-0 rounded-2xl bg-linear-to-b from-primary to-transparent to-40%"></div>
                      <Image 
                        src={industry.image}
                        alt={industry.title}
                        width={400}
                        height={500}
                        className="size-full rounded-2xl bg-cover object-cover"
                      />
                      <div className="absolute inset-0 p-8">
                        <p className="text-sm font-semibold text-background/50">
                          <span className="mr-1 text-background">{industry.category}.</span>
                          {industry.highlight}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 flex items-center lg:ml-[50%]">
            {industries.map((industry, index) => (
                <span 
                    key={industry.id}
                    onClick={() => setCurrentSlide(index)}
                    className={`flex cursor-pointer items-center justify-center overflow-hidden rounded-full bg-muted-foreground/15 text-xs font-semibold whitespace-nowrap transition-all duration-300 ${currentSlide === index ? 'w-40 h-8' : 'size-4 m-4'}`}
                >
                    <span className={`inline-block transition-all duration-300 ${currentSlide === index ? 'translate-x-0 opacity-100' : 'translate-x-6 opacity-0'}`}>
                        {industry.title}
                    </span>
                </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesCarousel; 