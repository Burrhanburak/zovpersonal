import { getTranslations } from "next-intl/server";
import { ArrowRight, CheckCircle2, Clock, Users, FileText, Send, Globe, TrendingUp } from "lucide-react";

interface PageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function InternationalRecruitmentPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations();

  return (
    <section className="relative mx-2.5 mt-2.5 rounded-t-2xl rounded-b-[36px] bg-gradient-to-b from-amber-50 via-background to-background py-32 lg:mx-4 dark:from-amber-950">
      <div className="container max-w-2xl mx-auto text-center">
        <h1 className="text-center text-4xl font-semibold tracking-tight lg:text-5xl">
          {t('internationalRecruitment.hero.title')}
        </h1>
        <p className="mt-4 text-center leading-snug font-medium text-muted-foreground lg:mx-auto">
          {t('internationalRecruitment.hero.description')}
        </p>
        
        <div className="mt-10 space-y-6 text-left md:mt-14 lg:mt-20">
          <div>
            <h3 className="text-xl font-semibold mb-3">{t('internationalRecruitment.vision.title')}</h3>
            <p className="mb-4">
              {t('internationalRecruitment.vision.description')}
            </p>
            <p className="mb-4">
              <strong>{t('internationalRecruitment.vision.subtitle')}</strong> {t('internationalRecruitment.vision.features.1.description')}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">{t('internationalRecruitment.methodology.title')}</h3>
            <p className="mb-4">
              {t('internationalRecruitment.methodology.subtitle')} - {t('internationalRecruitment.methodology.steps.0.description')}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">{t('internationalRecruitment.trends.title')}</h3>
            <p className="mb-4">
              {t('internationalRecruitment.trends.subtitle')} - {t('internationalRecruitment.trends.items.0.description')}
            </p>
            <p>
              {t('internationalRecruitment.trends.items.1.description')} {t('internationalRecruitment.trends.items.2.description')}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">{t('internationalRecruitment.success.title')}</h3>
            <p>
              {t('internationalRecruitment.success.subtitle')} - {t('internationalRecruitment.success.stats.0.label')}: {t('internationalRecruitment.success.stats.0.number')}
            </p>
          </div>
        </div>
        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <strong>{t('internationalRecruitment.callToAction.title')}</strong> {t('internationalRecruitment.callToAction.description')}
          </p>
        </div>
        <div className="relative text-muted-foreground h-px w-full my-12">
          <div className="h-px w-full bg-[repeating-linear-gradient(90deg,transparent,transparent_4px,currentColor_4px,currentColor_10px)] [mask-image:linear-gradient(90deg,transparent,black_25%,black_75%,transparent)]"></div>
        </div>
        
        <div className="mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">{t('internationalRecruitment.methodology.title')}</h2>
          
          <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-6 mb-8">
            <div className="flex items-start gap-4">
              <Globe className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
              <div className="text-left">
                <h3 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">{t('internationalRecruitment.vision.features.1.title')}</h3>
                <p className="text-amber-700 dark:text-amber-300 text-sm leading-relaxed">
                  {t('internationalRecruitment.vision.features.1.description')}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6 text-left">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">{t('internationalRecruitment.vision.features.2.title')}</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {t('internationalRecruitment.vision.features.2.description')}
                  </p>
                </div>
              </div>
            </div>



            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <TrendingUp className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">{t('internationalRecruitment.vision.features.3.title')}</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {t('internationalRecruitment.vision.features.3.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
