"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { useTranslations } from "next-intl";

export function AppleCardsCarouselDemo() {
  const t = useTranslations();
  
  const cards = data(t).map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <div className="container overflow-hidden">
        <div className="mb-20 flex flex-col items-center gap-6 text-center">
          <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden text-foreground">
            {t("home.carousel.badge")}
          </span>
          <h2 className="text-4xl font-semibold lg:text-5xl text-neutral-800 dark:text-neutral-200">
            {t("home.carousel.title")}
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto">
            {t("home.carousel.description")}
          </p>
        </div>
      </div>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = ({ t, contentKey }: { t: any, contentKey: string }) => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          {t(`home.carousel.content.${contentKey}.highlight`)}
        </span>{" "}
        {t(`home.carousel.content.${contentKey}.description`)}
      </p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-neutral-700 p-6 rounded-2xl">
          <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-3">
            {t(`home.carousel.content.${contentKey}.features.0.title`)}
          </h4>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {t(`home.carousel.content.${contentKey}.features.0.description`)}
          </p>
        </div>
        <div className="bg-white dark:bg-neutral-700 p-6 rounded-2xl">
          <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-3">
            {t(`home.carousel.content.${contentKey}.features.1.title`)}
          </h4>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {t(`home.carousel.content.${contentKey}.features.1.description`)}
          </p>
        </div>
      </div>
    </div>
  );
};

const data = (t: any) => [
  {
    category: t("home.carousel.cards.healthcare.category"),
    title: t("home.carousel.cards.healthcare.title"),
    src: "/hemsire-two.png",
    content: <DummyContent t={t} contentKey="healthcare" />,
  },
  {
    category: t("home.carousel.cards.recruitment.category"),
    title: t("home.carousel.cards.recruitment.title"),
    src: "/is-alim-onei.png",
    content: <DummyContent t={t} contentKey="recruitment" />,
  },
  {
    category: t("home.carousel.cards.construction.category"),
    title: t("home.carousel.cards.construction.title"),
    src: "/insaat.png",
    content: <DummyContent t={t} contentKey="construction" />,
  },
  {
    category: t("home.carousel.cards.visaprocess.category"),
    title: t("home.carousel.cards.visaprocess.title"),
    src: "/belge-hazırlama-kontrol.png",
    content: <DummyContent t={t} contentKey="visaprocess" />,
  },
  {
    category: t("home.carousel.cards.partnership.category"),
    title: t("home.carousel.cards.partnership.title"),
    src: "/is-veren-two.png",
    content: <DummyContent t={t} contentKey="partnership" />,
  },

  {
    category: t("home.carousel.cards.support.category"),
    title: t("home.carousel.cards.support.title"),
    src: "/müsteri-iliskilerii.png",
    content: <DummyContent t={t} contentKey="support" />,
  },


];
