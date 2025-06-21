"use client";

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';

export default function TermsOfServicePage() {
  const t = useTranslations('termsOfService');
  const params = useParams();
  const locale = params?.locale as string || 'tr';

  return (
 <section className="relative mx-2.5 mt-2.5 rounded-t-2xl rounded-b-[36px] bg-gradient-to-b from-amber-50 via-background to-background py-32 lg:mx-4 dark:from-amber-950">
      <div className="container max-w-4xl mx-auto px-6">
        <h1 className="text-center text-4xl font-semibold tracking-tight lg:text-5xl text-gray-900 dark:text-white mb-4">
          {t('title')}
        </h1>
        <p className="mt-4 text-center leading-snug font-medium text-muted-foreground lg:mx-auto">
          {t('subtitle')}
        </p>
        
        <div className="mt-10 flex justify-between gap-8 max-sm:flex-col md:mt-14 lg:mt-20 lg:gap-12">
          <div className="flex-1 space-y-8 text-left">
            
            {/* Security Regulations */}
            <div className=" dark:bg-gray-800 rounded-lg p-6 shadow-sm border">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                {t('sections.securityRegulations.title')}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                {t('sections.securityRegulations.intro')}
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                {t('sections.securityRegulations.description')}
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-6">
                {t.raw('sections.securityRegulations.prohibitedItems').map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              
              <p className="text-sm text-gray-600 dark:text-gray-400 italic mb-4">
                {t('sections.securityRegulations.disclaimer')}
              </p>
              
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                {t.raw('sections.securityRegulations.additionalRules').map((rule: string, index: number) => (
                  <p key={index}>{rule}</p>
                ))}
              </div>
              
              <p className="mt-4 font-medium text-gray-900 dark:text-white">
                {t('sections.securityRegulations.footer')}
              </p>
            </div>
          </div>
        </div>
        
        <div className="relative text-muted-foreground h-px w-full my-12">
          <div className="h-px w-full bg-[repeating-linear-gradient(90deg,transparent,transparent_4px,currentColor_4px,currentColor_10px)] [mask-image:linear-gradient(90deg,transparent,black_25%,black_75%,transparent)]"></div>
        </div>
        
        {/* Data Protection */}
        <div className="mx-auto">
          <div className="dark:bg-gray-800 rounded-lg p-6 shadow-sm border">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              {t('sections.dataProtection.title')}
            </h2>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              {t('sections.dataProtection.intro')}
            </p>
            
            <div className="space-y-6">
              {/* Data Controller Information */}
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                  {t('sections.dataProtection.dataController.title')}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {t('sections.dataProtection.dataController.content')}
                </p>
              </div>
              
              {/* Processing Purposes */}
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                  {t('sections.dataProtection.processingPurposes.title')}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {t('sections.dataProtection.processingPurposes.content')}
                </p>
              </div>
              
              {/* Data Transfer */}
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                  {t('sections.dataProtection.dataTransfer.title')}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {t('sections.dataProtection.dataTransfer.content')}
                </p>
              </div>
              
              {/* Collection Method and Legal Basis */}
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                  {t('sections.dataProtection.collectionMethod.title')}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {t('sections.dataProtection.collectionMethod.content')}
                </p>
              </div>
              
              {/* Data Subject Rights */}
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                  {t('sections.dataProtection.dataSubjectRights.title')}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  {t('sections.dataProtection.dataSubjectRights.intro')}
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  {t.raw('sections.dataProtection.dataSubjectRights.rights').map((right: string, index: number) => (
                    <li key={index}>{right}</li>
                  ))}
                </ul>
                
                <p className="text-gray-700 dark:text-gray-300 mt-4 leading-relaxed">
                  {t('sections.dataProtection.dataSubjectRights.applicationProcess')}
                </p>
                
                <p className="text-gray-700 dark:text-gray-300 mt-2 leading-relaxed">
                  {t('sections.dataProtection.dataSubjectRights.fees')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}