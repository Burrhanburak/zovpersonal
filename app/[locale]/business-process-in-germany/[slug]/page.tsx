
'use client';
import React from 'react'
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useTranslations, useLocale } from "next-intl";

const BusinessProcessSlugPage = () => {
    const params = useParams();
    const { slug, locale } = params;
    const t = useTranslations();
    
    // Geçerli slug'ları tanımla
    const validSlugs = [
        'employee-integration',
        'visa-for-experienced-personal', 
        'accelerated-skilled-worker-procedure',
        'recruitment'
    ];
    
    // Eğer slug geçerli değilse 404 döndür
    if (!validSlugs.includes(slug as string)) {
        notFound();
    }
    
    // Slug'a göre content key'lerini belirle
    const getContentKeys = (slug: string) => {
        switch(slug) {
            case 'employee-integration':
                return {
                    title: t('businessProcess.slugPages.employeeIntegration.title'),
                    subtitle: t('businessProcess.slugPages.employeeIntegration.subtitle'),
                    description: t('businessProcess.slugPages.employeeIntegration.description'),
                    section1Title: t('businessProcess.slugPages.employeeIntegration.section1.title'),
                    section1Content: t('businessProcess.slugPages.employeeIntegration.section1.content'),
                    section2Title: t('businessProcess.slugPages.employeeIntegration.section2.title'),
                    section2Content: t('businessProcess.slugPages.employeeIntegration.section2.content'),
                    benefits: t('businessProcess.slugPages.employeeIntegration.benefits'),
                };
            case 'visa-for-experienced-personal':
                return {
                    title: t('businessProcess.slugPages.experiencedVisa.title'),
                    subtitle: t('businessProcess.slugPages.experiencedVisa.subtitle'),
                    description: t('businessProcess.slugPages.experiencedVisa.description'),
                    section1Title: t('businessProcess.slugPages.experiencedVisa.section1.title'),
                    section1Content: t('businessProcess.slugPages.experiencedVisa.section1.content'),
                    section2Title: t('businessProcess.slugPages.experiencedVisa.section2.title'),
                    section2Content: t('businessProcess.slugPages.experiencedVisa.section2.content'),
                    benefits: t('businessProcess.slugPages.experiencedVisa.benefits'),
                };
            case 'accelerated-skilled-worker-procedure':
                return {
                    title: t('businessProcess.slugPages.acceleratedProcedure.title'),
                    subtitle: t('businessProcess.slugPages.acceleratedProcedure.subtitle'),
                    description: t('businessProcess.slugPages.acceleratedProcedure.description'),
                    section1Title: t('businessProcess.slugPages.acceleratedProcedure.section1.title'),
                    section1Content: t('businessProcess.slugPages.acceleratedProcedure.section1.content'),
                    section2Title: t('businessProcess.slugPages.acceleratedProcedure.section2.title'),
                    section2Content: t('businessProcess.slugPages.acceleratedProcedure.section2.content'),
                    benefits: t('businessProcess.slugPages.acceleratedProcedure.benefits'),
                };
            case 'recruitment':
                return {
                    title: t('businessProcess.slugPages.recruitment.title'),
                    subtitle: t('businessProcess.slugPages.recruitment.subtitle'),
                    description: t('businessProcess.slugPages.recruitment.description'),
                    section1Title: t('businessProcess.slugPages.recruitment.section1.title'),
                    section1Content: t('businessProcess.slugPages.recruitment.section1.content'),
                    section2Title: t('businessProcess.slugPages.recruitment.section2.title'),
                    section2Content: t('businessProcess.slugPages.recruitment.section2.content'),
                    benefits: t('businessProcess.slugPages.recruitment.benefits'),
                };
            default:
                return null;
        }
    };
    
    const content = getContentKeys(slug as string);
    
    if (!content) {
        notFound();
    }

    return (
        <div>
            <section className="relative mx-2.5 mt-2.5 rounded-t-2xl rounded-b-[36px] bg-gradient-to-b from-amber-50 via-background to-background py-32 lg:mx-4 dark:from-amber-950">
                <div className="container max-w-4xl mx-auto px-6">
                    <h1 className="text-center text-4xl font-semibold tracking-tight lg:text-5xl text-gray-900 dark:text-white mb-4">
                        {content.title}
                    </h1>
                    <p className="mt-4 text-center leading-snug font-medium text-muted-foreground lg:mx-auto">
                        {content.subtitle}
                    </p>
                    
                    <div className="mt-10 flex justify-between gap-8 max-sm:flex-col md:mt-14 lg:mt-20 lg:gap-12">
                        <div className="flex-1 space-y-8 text-left">
                            
                            {/* Ana İçerik */}
                            <div className="dark:bg-gray-800 rounded-lg p-6 shadow-sm border">
                                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                                    {content.section1Title}
                                </h2>
                                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                                    {content.description}
                                </p>
                                
                                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                                    {content.section1Content}
                                </p>
                                
                                <div className="mt-6 grid gap-4 md:grid-cols-2">
                                    <div className="bg-primary/5 rounded-lg p-4">
                                        <h4 className="font-semibold text-primary mb-2">
                                            {t('businessProcess.common.advantagesTitle')}
                                        </h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            {content.benefits}
                                        </p>
                                    </div>
                                    <div className="bg-secondary/5 rounded-lg p-4">
                                        <h4 className="font-semibold text-secondary-foreground mb-2">
                                            {t('businessProcess.common.processTitle')}
                                        </h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            {t('businessProcess.common.processDescription')}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="relative text-muted-foreground h-px w-full my-12">
                        <div className="h-px w-full bg-[repeating-linear-gradient(90deg,transparent,transparent_4px,currentColor_4px,currentColor_10px)] [mask-image:linear-gradient(90deg,transparent,black_25%,black_75%,transparent)]"></div>
                    </div>
                    
                    <div className="mx-auto">
                        <div className="dark:bg-gray-800 rounded-lg p-6 shadow-sm border">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                                {content.section2Title}
                            </h2>
                            
                            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                                {content.section2Content}
                            </p>
                            
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                                        {t('businessProcess.common.step1Title')}
                                    </h3>
                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                        {t('businessProcess.common.step1Description')}
                                    </p>
                                </div>
                                
                                <div>
                                    <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                                        {t('businessProcess.common.step2Title')}
                                    </h3>
                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                        {t('businessProcess.common.step2Description')}
                                    </p>
                                </div>
                                
                                <div>
                                    <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                                        {t('businessProcess.common.step3Title')}
                                    </h3>
                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                        {t('businessProcess.common.step3Description')}
                                    </p>
                                </div>
                                
                                <div>
                                    <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                                        {t('businessProcess.common.step4Title')}
                                    </h3>
                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                        {t('businessProcess.common.step4Description')}
                                    </p>
                                </div>
                            </div>
                            
                            {/* CTA Section */}
                            <div className="mt-8 p-6 bg-primary/10 rounded-lg border border-primary/20">
                                <h3 className="text-lg font-semibold mb-3 text-primary">
                                    {t('businessProcess.common.ctaTitle')}
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300 mb-4">
                                    {t('businessProcess.common.ctaDescription')}
                                </p>
                                <div className="flex gap-4 flex-wrap">
                                    <Link href={`/${locale}/contact`}>
                                        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 h-10 px-6 py-2">
                                            {t('businessProcess.common.contactButton')}
                                        </button>
                                    </Link>
                                    <Link href={`/${locale}/business-process-in-germany`}>
                                        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-semibold transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground px-4 py-2 h-10 gap-2">
                                            {t('businessProcess.common.backButton')}
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BusinessProcessSlugPage