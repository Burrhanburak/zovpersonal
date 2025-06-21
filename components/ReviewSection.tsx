'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

interface ReviewCardProps {
  title: string;
  review: string;
  name: string;
  role: string;
  avatar: string;
  isSmall?: boolean;
}

function ReviewCard({ title, review, name, role, avatar, isSmall = false }: ReviewCardProps) {
  const paddingClass = isSmall ? 'p-4 md:p-6' : 'p-6 md:p-8';
  
  return (
    <div className={`bg-[rgb(248,250,242)] rounded-2xl ${paddingClass} flex flex-col gap-5 w-full`}>
      {/* Message Content */}
      <div className="flex flex-col gap-3">
        <h6 className="text-[rgb(28,39,6)] font-semibold text-lg leading-tight">
          {title}
        </h6>
        <p className="text-[rgb(28,39,6)] opacity-70 text-base leading-relaxed">
          {review}
        </p>
      </div>
      
      {/* Profile */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 relative rounded-full overflow-hidden flex-shrink-0">
          <Image
            src={avatar}
            alt={name}
            fill
            className="object-cover"
            sizes="48px"
          />
        </div>
        <div className="flex flex-col">
          <p className="text-[rgb(28,39,6)] font-medium text-sm">
            {name}
          </p>
          <p className="text-[rgb(28,39,6)] opacity-60 text-sm">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ReviewSection() {
  const t = useTranslations('reviews');

  const reviews = {
    column1: [
      {
        title: t('review1.title'),
        review: t('review1.content'),
        name: t('review1.name'),
        role: t('review1.role'),
        avatar: "https://framerusercontent.com/images/z5K0PA4gHxuzzgmGLYFZpztuAM.png",
        isSmall: true
      },
      {
        title: t('review2.title'),
        review: t('review2.content'),
        name: t('review2.name'),
        role: t('review2.role'),
        avatar: "https://framerusercontent.com/images/YHqjl0RWKMXQM7gofaCvBPwpMiE.jpeg",
        isSmall: false
      }
    ],
    column2: [
      {
        title: t('review3.title'),
        review: t('review3.content'),
        name: t('review3.name'),
        role: t('review3.role'),
        avatar: "https://framerusercontent.com/images/uhLxdzw0cHbUd8nzOIpTCTcpc.jpeg",
        isSmall: false
      },
      {
        title: t('review4.title'),
        review: t('review4.content'),
        name: t('review4.name'),
        role: t('review4.role'),
        avatar: "https://framerusercontent.com/images/0l9O8RcMcs3HuloNB6AJ9Vigos.png",
        isSmall: true
      }
    ],
    column3: [
      {
        title: t('review5.title'),
        review: t('review5.content'),
        name: t('review5.name'),
        role: t('review5.role'),
        avatar: "https://framerusercontent.com/images/LVR98AtSkDKkICTOKKhthjgQ.png",
        isSmall: true
      },
      {
        title: t('review6.title'),
        review: t('review6.content'),
        name: t('review6.name'),
        role: t('review6.role'),
        avatar: "https://framerusercontent.com/images/kKJfMEkulKZsfdg43ESPRDSmCk.jpeg",
        isSmall: false
      }
    ]
  };

  return (
    <section 
      className="bg-white flex items-center justify-center relative overflow-visible py-[100px] px-[30px] md:py-20 md:px-7.5 w-full"
      id="review-section"
    >
      <div className="flex flex-col items-center justify-center gap-[60px] max-w-[1200px] w-full overflow-hidden">
        <main className="flex flex-col items-center justify-start gap-[60px] w-full">
          {/* Title Section */}
          <div className="flex flex-col items-center justify-start gap-5 max-w-[470px] w-full">
            <h2 className="text-center font-bold text-[rgb(28,39,6)] text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight">
              {t('title')}
            </h2>
            <div className="text-center text-[rgb(28,39,6)] opacity-70 text-base md:text-lg leading-relaxed">
              <p>{t('subtitle.line1')}</p>
              <p>{t('subtitle.line2')}</p>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full">
            {/* Column 1 */}
            <div className="flex flex-col gap-6 w-full md:w-1/3">
              {reviews.column1.map((review, index) => (
                <ReviewCard
                  key={`col1-${index}`}
                  title={review.title}
                  review={review.review}
                  name={review.name}
                  role={review.role}
                  avatar={review.avatar}
                  isSmall={review.isSmall}
                />
              ))}
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-6 w-full md:w-1/3">
              {reviews.column2.map((review, index) => (
                <ReviewCard
                  key={`col2-${index}`}
                  title={review.title}
                  review={review.review}
                  name={review.name}
                  role={review.role}
                  avatar={review.avatar}
                  isSmall={review.isSmall}
                />
              ))}
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-6 w-full md:w-1/3">
              {reviews.column3.map((review, index) => (
                <ReviewCard
                  key={`col3-${index}`}
                  title={review.title}
                  review={review.review}
                  name={review.name}
                  role={review.role}
                  avatar={review.avatar}
                  isSmall={review.isSmall}
                />
              ))}
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
