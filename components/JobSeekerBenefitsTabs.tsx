"use client";
import { assetUrl } from '@/lib/assets';

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface TabData {
  id: string;
  image: string;
}

const tabsData: TabData[] = [
  {
    id: "opportunities",
    image: assetUrl("kafiyeli-personali.png")
  },
  {
    id: "support", 
    image: assetUrl("hızlandırılmıs-proredur.png")
  },
  {
    id: "process",
    image: assetUrl("takipi.png")
  }
];

export default function JobSeekerBenefitsTabs() {
  const [activeTab, setActiveTab] = useState("opportunities");
  const t = useTranslations("jobSeeker.benefits.tabs");
  const tabsT = useTranslations("jobSeeker.benefits.tabs");
  
  const currentTab = tabsData.find(tab => tab.id === activeTab) || tabsData[0];
  const currentTabData = t.raw(activeTab);

  return (
    <section className="py-32 mx-auto container">
      <div className="container">
        <div className="flex-col grid grid-cols-1 gap-8 rounded-2xl border border-border p-4 lg:grid-cols-2 lg:p-8 xl:gap-20">
          <div className="flex flex-col-reverse justify-between gap-8 lg:flex-col">
            <div>
              {/* Active Tab Content */}
              <div className="flex-1 outline-none flex animate-in flex-col gap-6 duration-300 fade-in">
                <span className="text-xs text-muted-foreground uppercase">{t("badge")}</span>
                <div className="flex flex-col gap-4">
                  <h2 className="text-3xl font-medium">
                    {currentTabData.title}<br />
                    <span className="text-muted-foreground">{currentTabData.subtitle}</span>
                  </h2>
                  <p className="text-muted-foreground">
                    {currentTabData.description}
                  </p>
                </div>
                
                {/* Benefits List */}
                <div className="flex flex-col gap-3 mt-6">
                  {currentTabData.benefits.map((benefit: string, index: number) => (
                    <div key={index}>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-auto w-4" aria-hidden="true">
                          <path d="m9 12 2 2 4-4"></path>
                          <path d="M21 12c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1"></path>
                          <path d="M3 12c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1"></path>
                        </svg>
                        {benefit}
                      </div>
                      <div className="bg-border shrink-0 h-px w-full mt-2"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Tab Buttons */}
            <div className="bg-muted text-muted-foreground inline-flex w-fit items-center justify-center mx-auto h-12 rounded-xl p-1.5 lg:mx-0">
              {tabsData.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex flex-1 items-center justify-center gap-1.5 border border-transparent text-sm font-medium whitespace-nowrap transition-colors disabled:pointer-events-none disabled:opacity-50 h-full rounded-lg px-4 py-2 ${
                    activeTab === tab.id
                      ? 'bg-background text-[rgb(28,39,6)] shadow-sm'
                      : 'text-muted-foreground hover:text-[rgb(28,39,6)]'
                  }`}
                >
                  {tabsT(`${tab.id}.label`)}
                </button>
              ))}
            </div>
          </div>
          
          {/* Image Section */}
          <div>
            <div className="flex-1 outline-none animate-in duration-300 fade-in">
              <div className="relative">
                <Image
                  src={currentTab.image}
                  alt={`${currentTabData.title} ${currentTabData.subtitle}`}
                  width={600}
                  height={440}
                  className="h-[440px] w-full rounded-3xl object-cover lg:h-[540px]"
                />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-[rgb(28,39,6)]/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <p className="text-xl font-medium md:text-2xl">{currentTabData.title}</p>
                  <p className="mt-1 text-sm text-white/85">{currentTabData.subtitle}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 