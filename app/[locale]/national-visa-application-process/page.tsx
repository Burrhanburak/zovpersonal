import { getTranslations } from "next-intl/server";
import { ArrowRight, CheckCircle2, Clock, Users, TrendingUp, Globe, Zap, Target, BarChart3, Lightbulb } from "lucide-react";
import Link from "next/link";
import ContactSection from "@/components/ContactSection";

interface PageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function InternationalRecruitmentPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations();

  return (
    <>
      {/* Hero Section */}
      <section className="relative mx-2.5 mt-2.5 rounded-t-2xl rounded-b-[36px] bg-gradient-to-b from-blue-50 via-background to-background py-32 lg:mx-4 dark:from-blue-950">
        <div className="container max-w-6xl mx-auto text-center px-4">
          <div className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden text-foreground mb-6">
            <Globe className="w-3 h-3" />
            {t('internationalRecruitment.hero.title')}
          </div>
          
          <h1 className="text-4xl font-semibold tracking-tight lg:text-6xl mb-6">
            {t('internationalRecruitment.hero.title')}
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">
            {t('internationalRecruitment.hero.description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${locale}/contact`}
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-full text-lg font-medium transition-colors inline-flex items-center gap-2"
            >
              {t('internationalRecruitment.callToAction.primaryButton')}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href={`/${locale}/about`}
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 rounded-full text-lg font-medium transition-colors"
            >
              {t('internationalRecruitment.callToAction.secondaryButton')}
            </Link>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 bg-gradient-to-br from-background via-gray-50/50 to-background dark:from-background dark:via-gray-900/30 dark:to-background">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold mb-4 lg:text-4xl">
              {t('internationalRecruitment.vision.title')}
            </h2>
            <p className="text-lg text-muted-foreground mb-2">
              {t('internationalRecruitment.vision.subtitle')}
            </p>
            <p className="text-muted-foreground max-w-4xl mx-auto">
              {t('internationalRecruitment.vision.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.raw('internationalRecruitment.vision.features').map((feature: any, index: number) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-3 text-lg">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trends Section */}
      <section className="py-24">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold mb-4 lg:text-4xl">
              {t('internationalRecruitment.trends.title')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('internationalRecruitment.trends.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {t.raw('internationalRecruitment.trends.items').map((item: any, index: number) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 border shadow-lg">
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-4xl font-bold text-primary">
                    {item.percentage}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">
                      {item.trend}
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      {item.impact}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000"
                    style={{ width: item.percentage }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-background dark:from-gray-900 dark:to-background">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold mb-4 lg:text-4xl">
              {t('internationalRecruitment.methodology.title')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('internationalRecruitment.methodology.subtitle')}
            </p>
          </div>

          <div className="space-y-8">
            {t.raw('internationalRecruitment.methodology.steps').map((step: any, index: number) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                <div className="flex flex-col lg:flex-row items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {step.phase}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <h3 className="text-xl font-semibold mb-2 lg:mb-0">
                        {step.title}
                      </h3>
                      <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        {step.duration}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">
                      {step.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {step.tools.map((tool: string, toolIndex: number) => (
                        <span key={toolIndex} className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-xs px-3 py-1 rounded-full">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stats Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold mb-4 lg:text-4xl">
              {t('internationalRecruitment.success.title')}
            </h2>
            <p className="text-lg text-blue-100">
              {t('internationalRecruitment.success.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.raw('internationalRecruitment.success.stats').map((stat: any, index: number) => (
              <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-xl font-medium mb-1">
                  {stat.label}
                </div>
                <div className="text-blue-200 text-sm">
                  {stat.period}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6 lg:text-4xl">
            {t('internationalRecruitment.callToAction.title')}
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            {t('internationalRecruitment.callToAction.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${locale}/contact`}
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-full text-lg font-medium transition-colors inline-flex items-center gap-2"
            >
              {t('internationalRecruitment.callToAction.primaryButton')}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href={`/${locale}/about`}
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 rounded-full text-lg font-medium transition-colors"
            >
              {t('internationalRecruitment.callToAction.secondaryButton')}
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </>
  );
}
