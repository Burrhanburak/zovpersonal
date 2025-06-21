
"use client";

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';

export default function PrivacyPolicyPage() {
  const t = useTranslations('privacyPolicy');
  const params = useParams();
  const locale = params?.locale as string || 'tr';

  return (
 <section className="relative mx-2.5 mt-2.5 rounded-t-2xl rounded-b-[36px] bg-gradient-to-b from-amber-50 via-background to-background py-32 lg:mx-4 dark:from-amber-950">      <div className="container max-w-4xl mx-auto px-6">
        <h1 className="text-center text-4xl font-semibold tracking-tight lg:text-5xl text-gray-900 dark:text-white mb-4">
          {t('title')}
        </h1>
        <p className="mt-4 text-center leading-snug font-medium text-muted-foreground lg:mx-auto">
          {t('subtitle')}
        </p>
        
        <div className="mt-10 flex justify-between gap-8 max-sm:flex-col md:mt-14 lg:mt-20 lg:gap-12">
          <div className="flex-1 space-y-8 text-left">
            
            {/* Giriş / Introduction */}
            <div className=" dark:bg-gray-800 rounded-lg p-6 shadow-sm border">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                {t('sections.intro.title')}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                {t('sections.intro.content')}
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {t('sections.intro.kvkk')}
              </p>
            </div>

            {/* Topladığımız Bilgiler / Data Collection */}
            <div className=" dark:bg-gray-800 rounded-lg p-6 shadow-sm border">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                {t('sections.dataCollection.title')}
              </h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">
                    {t('sections.dataCollection.identity.title')}
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                    {t.raw('sections.dataCollection.identity.items').map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">
                    {t('sections.dataCollection.visa.title')}
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                    {t.raw('sections.dataCollection.visa.items').map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">
                    {t('sections.dataCollection.technical.title')}
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                    {t.raw('sections.dataCollection.technical.items').map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Veri İşleme Amaçları / Processing Purposes */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                {t('sections.processing.title')}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                {t('sections.processing.description')}
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                {t.raw('sections.processing.purposes').map((purpose: string, index: number) => (
                  <li key={index}>{purpose}</li>
                ))}
              </ul>
            </div>

            {/* Veri Güvenliği / Data Security */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                {t('sections.security.title')}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                {t('sections.security.description')}
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                {t.raw('sections.security.measures').map((measure: string, index: number) => (
                  <li key={index}>{measure}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="relative text-muted-foreground h-px w-full my-12">
          <div className="h-px w-full bg-[repeating-linear-gradient(90deg,transparent,transparent_4px,currentColor_4px,currentColor_10px)] [mask-image:linear-gradient(90deg,transparent,black_25%,black_75%,transparent)]"></div>
        </div>
        
        {/* Veri Sahibi Hakları / Data Subject Rights */}
        <div className="mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              {t('sections.rights.title')}
            </h2>
            
            <div className="space-y-6">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {t('sections.rights.description')}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                    {t('sections.rights.list.info.title')}
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {t('sections.rights.list.info.description')}
                  </p>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                    {t('sections.rights.list.access.title')}
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {t('sections.rights.list.access.description')}
                  </p>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                    {t('sections.rights.list.rectification.title')}
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {t('sections.rights.list.rectification.description')}
                  </p>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                    {t('sections.rights.list.erasure.title')}
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {t('sections.rights.list.erasure.description')}
                  </p>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                    {t('sections.rights.list.objection.title')}
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {t('sections.rights.list.objection.description')}
                  </p>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                    {t('sections.rights.list.portability.title')}
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {t('sections.rights.list.portability.description')}
                  </p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <h3 className="font-medium text-blue-900 dark:text-blue-100 mb-2">
                  {t('sections.rights.howToUse.title')}
                </h3>
                <p className="text-sm text-blue-800 dark:text-blue-200 mb-2">
                  {t('sections.rights.howToUse.description')}
                </p>
                <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                  {t.raw('sections.rights.howToUse.channels').map((channel: string, index: number) => (
                    <li key={index}>• {channel}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-medium mb-3 text-gray-900 dark:text-white">
                  {t('sections.cookies.title')}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                  {t('sections.cookies.description')}
                </p>
                
                <h3 className="text-lg font-medium mb-3 text-gray-900 dark:text-white">
                  {t('sections.contact.title')}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  {t('sections.contact.description')}
                </p>
                
                {/* Main Company Info */}
                <div className="mb-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong className="text-gray-900 dark:text-white">{t('sections.contact.company')}</strong><br />
                    E-posta: <span className="font-medium">info@zovpersonal.com</span><br />
                    Web: <span className="font-medium">www.zovpersonal.com</span>
                  </p>
                </div>

                {/* Office Locations */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Turkey Office */}
                  <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-600">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-6 bg-gray-100 mr-3 rounded-sm relative overflow-hidden flex items-center justify-center">
                        <span className="text-xs">🇹🇷</span>
                      </div>
                      <h4 className="font-medium text-gray-900 dark:text-white">
                        {t('sections.contact.offices.turkey.title')}
                      </h4>
                    </div>
                    <div className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                      <p>
                        <span className="font-medium">
                          {t('sections.contact.offices.turkey.address')}:
                        </span><br />
                        {t('sections.contact.offices.turkey.location')}
                      </p>
                      <p>
                        <span className="font-medium">
                          {t('sections.contact.offices.turkey.phone')}:
                        </span><br />
                        +90 555 123 45 67
                      </p>
                      <p>
                        <span className="font-medium">E-mail:</span><br />
                        info@zovpersonal.com
                      </p>
                    </div>
                  </div>

                  {/* Germany Office */}
                  <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-600">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-6 mr-3 rounded-sm relative overflow-hidden flex items-center justify-center bg-gray-100">
                        <span className="text-xs">🇩🇪</span>
                      </div>
                      <h4 className="font-medium text-gray-900 dark:text-white">
                        {t('sections.contact.offices.germany.title')}
                      </h4>
                    </div>
                    <div className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                      <p>
                        <span className="font-medium">
                          {t('sections.contact.offices.germany.address')}:
                        </span><br />
                        {t('sections.contact.offices.germany.location')}
                      </p>
                      <p>
                        <span className="font-medium">
                          {t('sections.contact.offices.germany.phone')}:
                        </span><br />
                        +49 30 12345678
                      </p>
                      <p>
                        <span className="font-medium">E-mail:</span><br />
                        info@zovpersonal.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}