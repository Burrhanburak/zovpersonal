"use client";
import { assetUrl } from '@/lib/assets';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { cn } from '@/lib/utils';

type Tab = 'efficiency' | 'quality' | 'support';

export default function EmployerBenefitsTabs() {
  const t = useTranslations();
  const [activeTab, setActiveTab] = useState<Tab>('efficiency');

  const tabs: { id: Tab; label: string }[] = [
    { id: 'efficiency', label: t('employer.benefits.tabs.efficiency.label') },
    { id: 'quality', label: t('employer.benefits.tabs.quality.label') },
    { id: 'support', label: t('employer.benefits.tabs.support.label') },
  ];

  const tabContent = {
    efficiency: {
      title: t('employer.benefits.tabs.efficiency.title'),
      subtitle: t('employer.benefits.tabs.efficiency.subtitle'),
      description: t('employer.benefits.tabs.efficiency.description'),
      stats: t.raw('employer.benefits.tabs.efficiency.stats'),
      image: assetUrl('is-veren-two.png'),
      overlayStats: [
        { value: '30%', label: t('employer.benefits.tabs.efficiency.overlayStats.stat1.label') },
        { value: '2x', label: t('employer.benefits.tabs.efficiency.overlayStats.stat2.label') },
      ],
    },
    quality: {
      title: t('employer.benefits.tabs.quality.title'),
      subtitle: t('employer.benefits.tabs.quality.subtitle'),
      description: t('employer.benefits.tabs.quality.description'),
      stats: t.raw('employer.benefits.tabs.quality.stats'),
      image: assetUrl('hizmet.png'),
      overlayStats: [
        { value: '98%', label: t('employer.benefits.tabs.quality.overlayStats.stat1.label') },
        { value: '5K+', label: t('employer.benefits.tabs.quality.overlayStats.stat2.label') },
      ],
    },
    support: {
      title: t('employer.benefits.tabs.support.title'),
      subtitle: t('employer.benefits.tabs.support.subtitle'),
      description: t('employer.benefits.tabs.support.description'),
      stats: t.raw('employer.benefits.tabs.support.stats'),
      image: assetUrl('takipi.png'),
      overlayStats: [
        { value: '24/7', label: t('employer.benefits.tabs.support.overlayStats.stat1.label') },
        { value: '100%', label: t('employer.benefits.tabs.support.overlayStats.stat2.label') },
      ],
    },
  };

  const currentContent = tabContent[activeTab];

  return (
    <section className="py-32 mx-auto container">
      <div className="container">
        <div className="flex-col grid grid-cols-1 gap-8 rounded-2xl border border-border p-4 lg:grid-cols-2 lg:p-8 xl:gap-20">
          <div className="flex flex-col-reverse justify-between gap-8 lg:flex-col">
            <div>
              {/* Active Tab Content */}
              <div className="flex-1 outline-none flex animate-in flex-col gap-6 duration-300 fade-in">
                <span className="text-xs text-muted-foreground uppercase">{t('employer.benefits.badge')}</span>
                <div className="flex flex-col gap-4">
                  <h2 className="text-3xl font-medium">
                    {currentContent.title}<br />
                    <span className="text-muted-foreground">{currentContent.subtitle}</span>
                  </h2>
                  <p className="text-muted-foreground">
                    {currentContent.description}
                  </p>
                </div>

                {/* Services List */}
                <div className="flex flex-col gap-3 mt-6">
                  {currentContent.stats.map((service: string, index: number) => (
                    <div key={index}>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-auto w-4" aria-hidden="true">
                          <path d="m9 12 2 2 4-4"></path>
                          <path d="M21 12c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1"></path>
                          <path d="M3 12c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1"></path>
                        </svg>
                        {service}
                      </div>
                      <div className="bg-border shrink-0 h-px w-full mt-2"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tab Buttons */}
            <div className="bg-muted text-muted-foreground inline-flex w-fit items-center justify-center mx-auto h-12 rounded-xl p-1.5 lg:mx-0">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "inline-flex flex-1 items-center justify-center gap-1.5 border border-transparent text-sm font-medium whitespace-nowrap transition-colors disabled:pointer-events-none disabled:opacity-50 h-full rounded-lg px-4 py-2",
                    activeTab === tab.id
                      ? "bg-background text-[rgb(28,39,6)] shadow-sm"
                      : "text-muted-foreground hover:text-[rgb(28,39,6)]"
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div>
            <div className="flex-1 outline-none animate-in duration-300 fade-in">
              <div className="relative">
                <Image
                  src={currentContent.image}
                  alt={currentContent.title}
                  width={600}
                  height={540}
                  className="h-[440px] w-full rounded-3xl object-cover lg:h-[540px]"
                />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-[rgb(28,39,6)]/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <p className="text-xl font-medium md:text-2xl">{currentContent.title}</p>
                  <p className="mt-1 text-sm text-white/85">{currentContent.subtitle}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 