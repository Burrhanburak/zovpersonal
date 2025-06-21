"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { useTranslations } from "next-intl";
import Image from "next/image";

export function AppleCardsCarouselDemo() {
  const t = useTranslations("whyChooseUs");
  
  const cards = data.map((card, index) => (
    <Card key={card.src} card={{
      ...card,
      title: t(`slides.${card.translationKey}.title`),
      category: t("category"),
      content: <DummyContent 
        title={t(`slides.${card.translationKey}.title`)}
        description={t(`slides.${card.translationKey}.description`)}
        imageSrc={card.src}
      />
    }} index={index} />
  ));

  return (
    <div className="w-full h-full py-12 md:py-20 relative z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center md:text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-neutral-800 dark:text-neutral-200 mb-3 md:mb-6 font-['Satoshi',system-ui,sans-serif] text-left md:text-center">
            {t("title")}
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-neutral-500 dark:text-neutral-400 mb-2 md:mb-4 max-w-4xl mx-auto font-['Satoshi',system-ui,sans-serif] text-left md:text-center">
            {t("subtitle")}
          </p>
          <p className="text-sm md:text-base lg:text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto font-['Satoshi',system-ui,sans-serif] text-left md:text-center">
            {t("description")}
          </p>
        </div>
      </div>
      
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = ({ title, description, imageSrc }: { title: string; description: string; imageSrc: string }) => {
  return (
    <>
      {[...new Array(2).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-4 md:p-8 lg:p-14 rounded-2xl md:rounded-3xl mb-3 md:mb-4"
          >
            <div className="flex flex-col gap-4 md:gap-6">
              <div className="text-left">
                <h3 className="font-bold text-neutral-700 dark:text-neutral-200 text-lg md:text-xl lg:text-2xl mb-2 md:mb-3 font-['Satoshi',system-ui,sans-serif]">
                  {title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base lg:text-lg font-['Satoshi',system-ui,sans-serif] leading-relaxed">
                  {description}
                </p>
              </div>
              <div className="w-full">
                <Image
                  src={imageSrc}
                  alt={title}
                  height={300}
                  width={400}
                  className="w-full h-48 md:h-64 lg:h-80 object-cover rounded-xl md:rounded-2xl"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    translationKey: "healthcareRecruitment",
    src: "/saglıkteknik.webp",
  },
  {
    translationKey: "livingInGermany",
    src: "/zovpersonaltwo.png",
  },
  {
    translationKey: "experiencedProfessionalsVisa",
    src: "/doctor.png",
  },
  {
    translationKey: "vocationalTrainingVisa",
    src: "/nurse.png",
  },
  {
    translationKey: "qualificationRecognitionVisa",
    src: "/hastabakıcı.png",
  },
];
