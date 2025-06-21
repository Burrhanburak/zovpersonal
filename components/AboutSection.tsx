'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
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

  const stats = [
    {
      number: t('stats.experience.number'),
      label: t('stats.experience.label')
    },
    {
      number: t('stats.clients.number'),
      label: t('stats.clients.label')
    }
  ];

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
        className="bg-[#d5dec5] rounded-[20px] sm:rounded-[30px] flex flex-col lg:flex-row items-start justify-center gap-6 lg:gap-[10px] min-h-[400px] sm:min-h-[500px] lg:h-[692px] overflow-hidden p-6 sm:p-12 lg:p-[70px] relative w-full max-w-[1200px] will-change-transform"
        style={{
          alignContent: 'flex-start',
          flexWrap: 'nowrap'
        }}
      >
        
        {/* Left Side - Stats */}
        <div 
          className="flex items-center justify-center relative overflow-visible flex-row gap-0"
          style={{
            width: 'min-content',
            minWidth: 'fit-content'
          }}
        >
          {/* Experience Card - Responsive */}
          <div className="flex flex-col items-center justify-center w-[180px] sm:w-[220px] lg:w-[260px] h-[180px] sm:h-[220px] lg:h-[260px] aspect-square relative overflow-visible p-0 gap-2.5 flex-none">
            <div 
              className="w-[180px] sm:w-[220px] lg:w-[260px] h-[180px] sm:h-[220px] lg:h-[260px] rounded-full flex flex-row items-center justify-center gap-2.5 p-0 relative aspect-square flex-none"
              style={{ backgroundColor: '#1c2706' }}
            >
              <div className="flex flex-col items-center justify-start flex-shrink-0">
                <div className="flex flex-col justify-start flex-shrink-0">
                  <h1 
                    className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white text-center"
                    style={{ color: 'rgb(255, 255, 255)' }}
                  >
                    {stats[0].number}
                  </h1>
                </div>
                <div className="flex flex-col justify-start flex-shrink-0">
                  <h6 
                    className="text-xs sm:text-sm font-medium text-white text-center px-1"
                    style={{ color: 'rgb(255, 255, 255)' }}
                  >
                    {stats[0].label}
                  </h6>
                </div>
              </div>
            </div>
          </div>
          
          {/* Clients Card - Responsive */}
          <div className="flex flex-col items-center justify-center w-[140px] sm:w-[165px] lg:w-[190px] h-[140px] sm:h-[165px] lg:h-[190px] aspect-square relative overflow-visible p-0 gap-2.5 flex-none">
            <div 
              className="w-[140px] sm:w-[165px] lg:w-[190px] h-[140px] sm:h-[165px] lg:h-[190px] rounded-full flex flex-row items-center justify-center gap-2.5 p-0 relative aspect-square flex-none"
              style={{ backgroundColor: '#1c2706' }}
            >
              <div className="flex flex-col items-center justify-start flex-shrink-0">
                <div className="flex flex-col justify-start flex-shrink-0">
                  <h3 
                    className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-bold text-white text-center"
                    style={{ color: 'rgb(255, 255, 255)' }}
                  >
                    {stats[1].number}
                  </h3>
                </div>
                <div className="flex flex-col justify-start flex-shrink-0">
                  <h6 
                    className="text-xs sm:text-sm font-medium text-white text-center px-1"
                    style={{ color: 'rgb(255, 255, 255)' }}
                  >
                    {stats[1].label}
                  </h6>
                </div>
              </div>
            </div>
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
