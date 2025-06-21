import { getTranslations } from "next-intl/server";
import { ArrowRight, CheckCircle2, Clock, Users, FileText, Send } from "lucide-react";

interface PageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function ApplicationProcessPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations();

  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "Free consultation to assess your eligibility and create a personalized strategy for your visa application.",
      duration: "1-2 hours",
      icon: <Users className="w-8 h-8 text-blue-600" />,
      details: [
        "Eligibility assessment",
        "Document review",
        "Timeline planning",
        "Strategy development"
      ]
    },
    {
      step: "02", 
      title: "Document Preparation",
      description: "Comprehensive assistance in gathering, preparing, and authenticating all required documents.",
      duration: "2-4 weeks",
      icon: <FileText className="w-8 h-8 text-green-600" />,
      details: [
        "Document checklist creation",
        "Translation services",
        "Authentication assistance",
        "Quality review"
      ]
    },
    {
      step: "03",
      title: "Application Submission",
      description: "Professional submission of your application with thorough review and follow-up support.",
      duration: "1-2 days",
      icon: <Send className="w-8 h-8 text-purple-600" />,
      details: [
        "Final document review",
        "Application form completion",
        "Fee payment assistance",
        "Submission tracking"
      ]
    },
    {
      step: "04",
      title: "Follow-up & Support",
      description: "Ongoing support throughout the processing period until you receive your visa decision.",
      duration: "4-12 weeks",
      icon: <Clock className="w-8 h-8 text-orange-600" />,
      details: [
        "Application tracking",
        "Status updates",
        "Additional document requests",
        "Interview preparation (if needed)"
      ]
    }
  ];

  const timelines = [
    {
      country: "Germany",
      type: "Work Visa",
      processing: "4-8 weeks",
      complexity: "Medium"
    },
    {
      country: "Netherlands",
      type: "Highly Skilled Migrant",
      processing: "2-4 weeks",
      complexity: "Low"
    },
    {
      country: "Austria",
      type: "Red-White-Red Card",
      processing: "6-12 weeks",
      complexity: "High"
    },
    {
      country: "Belgium",
      type: "Type B Work Permit",
      processing: "3-6 weeks",
      complexity: "Medium"
    }
  ];

  return (
        <section className="relative mx-2.5 mt-2.5 rounded-t-2xl rounded-b-[36px] bg-gradient-to-b from-amber-50 via-background to-background py-32 lg:mx-4 dark:from-amber-950">
      <div className="container max-w-2xl mx-auto text-center">
        <h1 className="text-center text-4xl font-semibold tracking-tight lg:text-5xl">
          {t('nationalVisaProcess.hero.title')}
        </h1>
        <p className="mt-4 text-center leading-snug font-medium text-muted-foreground lg:mx-auto">
          {t('nationalVisaProcess.hero.description')}
        </p>
        
        <div className="mt-10 space-y-6 text-left md:mt-14 lg:mt-20">
          <div>
            <h3 className="text-xl font-semibold mb-3">{t('nationalVisaProcess.appointmentSystem.title')}</h3>
            <p className="mb-4">
              {t('nationalVisaProcess.appointmentSystem.description')}
            </p>
            <p className="mb-4">
              <strong>{t('nationalVisaProcess.appointmentSystem.ourService')}</strong> {t('nationalVisaProcess.appointmentSystem.serviceDescription')}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">{t('nationalVisaProcess.preparation.title')}</h3>
            <p className="mb-4">
              {t('nationalVisaProcess.preparation.description')}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">{t('nationalVisaProcess.application.title')}</h3>
            <p className="mb-4">
              {t('nationalVisaProcess.application.description1')}
            </p>
            <p>
              {t('nationalVisaProcess.application.description2')}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">{t('nationalVisaProcess.afterEvaluation.title')}</h3>
            <p>
              {t('nationalVisaProcess.afterEvaluation.description')}
            </p>
          </div>
        </div>
        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <strong>{t('nationalVisaProcess.note.label')}</strong> {t('nationalVisaProcess.note.text')}
          </p>
        </div>
        <div className="relative text-muted-foreground h-px w-full my-12">
          <div className="h-px w-full bg-[repeating-linear-gradient(90deg,transparent,transparent_4px,currentColor_4px,currentColor_10px)] [mask-image:linear-gradient(90deg,transparent,black_25%,black_75%,transparent)]"></div>
        </div>
        
        <div className="mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">{t('nationalVisaProcess.processingTimes.title')}</h2>
          
          <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-6 mb-8">
            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
              <div className="text-left">
                <h3 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">{t('nationalVisaProcess.processingTimes.importantInfo.title')}</h3>
                <p className="text-amber-700 dark:text-amber-300 text-sm leading-relaxed">
                  {t('nationalVisaProcess.processingTimes.importantInfo.description')}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6 text-left">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">{t('nationalVisaProcess.processingTimes.decisionAuthority.title')}</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {t('nationalVisaProcess.processingTimes.decisionAuthority.description')}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">{t('nationalVisaProcess.processingTimes.holidayEffect.title')}</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {t('nationalVisaProcess.processingTimes.holidayEffect.description')}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <Send className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">{t('nationalVisaProcess.processingTimes.applicationTracking.title')}</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {t('nationalVisaProcess.processingTimes.applicationTracking.description')}
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
