'use client';

import { useTranslations } from 'next-intl';
import React, { useState } from 'react'
import { ArrowRight, CheckCircle, Users, FileText, Briefcase, Globe, Hammer, UtensilsCrossed, Wrench, Car } from "lucide-react";



const findingWork = () => {
    const t = useTranslations();
    const [activeTab, setActiveTab] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentCarouselSlide, setCurrentCarouselSlide] = useState(0);

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
      
    
  return (
    <div>
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
    </div>
  )
}

export default findingWork