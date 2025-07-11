'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Minus, Plus } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div 
      className={`bg-[#d5dec5] rounded-[20px] p-5 md:p-6 cursor-pointer transition-all duration-200 w-full max-w-[950px] hover:shadow-sm hover:scale-[1.005] ${
        isOpen ? 'ring-2 ring-[rgb(28,39,6)]/10' : 'shadow-sm hover:shadow-md'
      }`}
      onClick={onToggle}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onToggle();
        }
      }}
    >
      {/* Question */}
      <div className="flex items-center justify-between gap-4">
        <h5 className="text-[rgb(28,39,6)] flex-1 font-satoshi-medium text-lg md:text-xl leading-tight text-left">
          {question}
        </h5>
        
        {/* Icon */}
        <div className="w-[34px] h-[34px] bg-[rgb(28,39,6)] rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ease-out hover:scale-105">
          <div className={`transition-transform duration-200 ease-out ${isOpen ? 'rotate-0' : 'rotate-0'}`}>
            {isOpen ? (
              <Minus className="w-4 h-4 text-white transition-all duration-200" />
            ) : (
              <Plus className="w-4 h-4 text-white transition-all duration-200" />
            )}
          </div>
        </div>
      </div>
      
      {/* Answer */}
      <div 
        className={`overflow-hidden transition-all duration-300 ease-out ${
          isOpen 
            ? 'max-h-[500px] opacity-100 mt-4' 
            : 'max-h-0 opacity-0 mt-0'
        }`}
      >
        <div className="pt-4">
          <p className="text-[rgb(28,39,6)] opacity-70 text-base leading-relaxed text-left max-w-[700px] font-satoshi-medium">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const t = useTranslations('faq');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = t.raw('items') as { question: string; answer: string }[];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      className="bg-white flex items-center justify-center relative overflow-visible py-[100px] px-[30px] md:py-20 md:px-7.5 w-full"
      id="faq-section"
    >
      <div className="flex flex-col items-center justify-center gap-[60px] w-full max-w-[1200px]">
        {/* Title */}
        <div className="flex flex-col items-center justify-start gap-5 w-full max-w-[540px]">
          <h2 className="text-center font-bold text-[rgb(28,39,6)] text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight">
            {t('title')}
          </h2>
          <p className="text-center text-[rgb(28,39,6)] text-base md:text-lg leading-relaxed">
            {t('description')}
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="w-full max-w-[720px] flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
