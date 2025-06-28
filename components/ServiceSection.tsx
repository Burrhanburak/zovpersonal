'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { FileText, UserSearch, FileCheck, MessageSquareQuote } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-[rgb(248,250,242)] rounded-2xl p-6 flex flex-col gap-4 w-full h-full">
      <div className="w-[52px] h-[52px] relative flex-shrink-0 bg-white rounded-lg flex items-center justify-center">
        <Icon className="w-8 h-8 text-neutral-600" />
      </div>
      <div className="flex flex-col gap-2">
        <h5 className="text-left font-semibold text-[rgb(28,39,6)] text-lg">
          {title}
        </h5>
        <p className="text-[rgb(28,39,6)] opacity-70 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function ServiceSection() {
  const t = useTranslations('services');

  const services = [
    {
      icon: FileText,
      title: t('workVisa.title'),
      description: t('workVisa.description')
    },
    {
      icon: UserSearch,
      title: t('skillsAssessment.title'),
      description: t('skillsAssessment.description')
    },
    {
      icon: FileCheck,
      title: t('documentation.title'),
      description: t('documentation.description')
    },
    {
      icon: MessageSquareQuote,
      title: t('consultation.title'),
      description: t('consultation.description')
    }
  ];

  return (
    <section 
      className="bg-white flex items-center justify-center relative overflow-visible py-[100px] px-[30px] md:py-20 md:px-7.5 w-full"
      id="service-section"
    >
      <div className="flex flex-col items-center justify-center gap-[60px] max-w-[1200px] w-full overflow-hidden">
        <main className="flex flex-col items-center justify-start gap-[60px] w-full">
          {/* Title Section */}
          <div className="flex flex-col items-center justify-start gap-5 max-w-[540px] w-full">
            <h2 className="text-center font-bold text-[rgb(28,39,6)] text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight">
              {t('title')}
            </h2>
            <p className="text-center text-[rgb(28,39,6)] text-base md:text-lg leading-relaxed">
              {t('subtitle')}
            </p>
          </div>

          {/* Content Grid */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-[24px] w-full">
            {/* Column 1 */}
            <div className="flex flex-col gap-5 md:gap-5 w-full md:w-1/3">
              <ServiceCard
                icon={services[0].icon}
                title={services[0].title}
                description={services[0].description}
              />
              <ServiceCard
                icon={services[1].icon}
                title={services[1].title}
                description={services[1].description}
              />
            </div>

            {/* Column 2 - Center Image */}
            <div className="w-full md:w-1/3 h-[300px] md:h-[400px] lg:h-[500px] relative">
              <Image
                src="/hizmetlerimiz.png"
                alt="Service Center Image"
                fill
                className="object-cover rounded-2xl"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-5 md:gap-5 w-full md:w-1/3">
              <ServiceCard
                icon={services[2].icon}
                title={services[2].title}
                description={services[2].description}
              />
              <ServiceCard
                icon={services[3].icon}
                title={services[3].title}
                description={services[3].description}
              />
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
