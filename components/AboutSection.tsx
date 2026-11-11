'use client';
import { assetUrl } from '@/lib/assets';

import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Heart, Shield, TrendingUp } from 'lucide-react';

interface FeatureItemProps {
  Icon: React.ComponentType<{ className?: string }>;
  title: string;
}

function FeatureItem({ Icon, title }: FeatureItemProps) {
  return (
    <div className="flex flex-row items-center justify-start gap-2 sm:gap-3 py-2 sm:py-3.5 px-0 w-full sm:w-min relative overflow-visible">
      <div className="w-6 h-6 sm:w-8 sm:h-8 relative flex-shrink-0 flex items-center justify-center">
        <Icon className="w-full h-full text-[rgb(28,39,6)]" />
      </div>
      <h5 className="text-sm sm:text-base font-semibold text-[rgb(28,39,6)] sm:whitespace-nowrap flex-shrink-0">
        {title}
      </h5>
    </div>
  );
}

export default function AboutSection() {
  const t = useTranslations('about');

  const features = [
    {
      Icon: Heart,
      title: t('features.compassion')
    },
    {
      Icon: Shield,
      title: t('features.integrity')
    },
    {
      Icon: TrendingUp,
      title: t('features.mindGrowth')
    }
  ];

  return (
    <section 
      className="w-full flex items-center justify-center relative overflow-visible py-16 sm:py-20 lg:py-[100px] px-4 sm:px-6 lg:px-[30px]"
      style={{ 
        backgroundColor: '#ffffff'
      }}
      id="about-section"
    >
      <div 
        className="bg-[#d5dec5] rounded-[20px] sm:rounded-[30px] flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-[40px] min-h-[400px] sm:min-h-[500px] lg:h-[920px] overflow-hidden p-6 sm:p-12 lg:p-[70px] relative w-full will-change-transform"
        style={{
          alignContent: 'flex-start',
          flexWrap: 'nowrap'
        }}
      >
        
        {/* Left Side - Experience Image */}
        <div className="relative w-full max-w-[420px] aspect-[4/3] lg:aspect-square rounded-[24px] overflow-hidden flex-shrink-0">
          <Image
            src={assetUrl("experience-team.jpg")}
            alt={t('images.teamWork')}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 420px"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1c2706]/90 to-transparent p-5 sm:p-6">
            <p className="text-white text-sm sm:text-base font-medium">
              {t('experienceHighlight')}
            </p>
          </div>
        </div>

        {/* Right Side - Content */}
        <div 
          className="flex flex-col items-start justify-start overflow-visible relative max-w-[595px] w-full lg:w-auto lg:flex-1"
          style={{
            gap: '20px'
          }}
        >
          {/* Description */}
          <div className="flex flex-col justify-start w-full">
            <h3 
              className="text-xl sm:text-2xl lg:text-3xl font-bold leading-relaxed text-center lg:text-left"
              style={{ 
                color: 'rgb(28, 39, 6)'
              }}
            >
              {t('description')}
            </h3>
          </div>

          {/* Features */}
          <ul className="flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-between w-full list-none m-0 p-0 overflow-visible relative h-min flex-none gap-3 sm:gap-4">
            {features.map((feature, index) => (
              <React.Fragment key={index}>
                <li className="flex items-center justify-start w-full sm:w-auto flex-shrink-0">
                  <FeatureItem
                    Icon={feature.Icon}
                    title={feature.title}
                  />
                </li>
                {index < features.length - 1 && (
                  <li 
                    className="w-full h-px sm:w-px sm:h-12 flex-none overflow-hidden relative block"
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.12)' }}
                  ></li>
                )}
              </React.Fragment>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
