import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { Tag } from "@/components/ui/tag";
import Image from "next/image";
import AboutSection from "@/components/AboutSection";
import ServiceSection from "@/components/ServiceSection";
import ApproachSection from "@/components/ApproachSection";
import ReviewSection from "@/components/ReviewSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import GeoDebugger from "@/components/GeoDebug";
import { AppleCardsCarouselDemo } from "@/components/Slidehome";
import FindingWork from "@/components/finding-work";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations();

  const services = [
    {
      title: t('services.workVisa.title'),
      description: t('services.workVisa.description'),
      icon: '📋',
    },
    {
      title: t('services.skillsAssessment.title'),
      description: t('services.skillsAssessment.description'),
      icon: '🎯',
    },
    {
      title: t('services.documentation.title'),
      description: t('services.documentation.description'),
      icon: '📄',
    },
    {
      title: t('services.consultation.title'),
      description: t('services.consultation.description'),
      icon: '👥',
    },
  ];

  const professions = [
    {
      title: t('professions.healthcare.title'),
      description: t('professions.healthcare.description'),
      icon: '🏥',
    },
    {
      title: t('professions.engineering.title'),
      description: t('professions.engineering.description'),
      icon: '💻',
    },
    {
      title: t('professions.skilled.title'),
      description: t('professions.skilled.description'),
      icon: '🔧',
    },
    {
      title: t('professions.education.title'),
      description: t('professions.education.description'),
      icon: '🎓',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-end" id="hero-section">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/zovpersonal.webp"
            alt="Background"
            width={1920}
            height={1080}
            sizes="100vw"
            priority
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Shadow Overlay */}
        <div 
          className="absolute inset-0 z-[1]"
          style={{
            background: 'linear-gradient(179.98deg, rgba(0,0,0,0.04) 0%, rgba(0,0,0,0.4) 80%)'
          }}
        ></div>

        {/* Main Container */}
        <div className="relative z-[3] w-full max-w-[1200px] mx-auto px-4 md:px-8 pb-16 pt-40">
          {/* Content Wrapper */}
          <div className="flex flex-col lg:flex-row items-center lg:items-end gap-8 lg:gap-[150px]">
            
            {/* Left Side */}
            <div className="flex-1 flex flex-col gap-3">
              {/* Tags */}
              <div className="flex flex-wrap gap-3 mb-3">
                <Link href={`/${locale}/job-seeker`}>
                <Tag size="lg" variant="glass">
                  {t('hero.tag1')}
                </Tag>
                </Link>
               
                <Link href={`/${locale}/employer`}>
                <Tag size="lg" variant="glass" className="">
                  {t('hero.tag2')}
                </Tag>
                </Link>
              </div>
              
              {/* Main Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {t('hero.title')}
              </h1>
              
              {/* Subtitle */}
              {t('hero.subtitle') && (
                <h2 className="text-lg md:text-xl text-gray-200 mt-4 font-medium">
                  {t('hero.subtitle')}
                </h2>
              )}
            </div>

            {/* Right Side */}
            <div className="flex flex-1 flex-col gap-8 max-w-[352px] lg:max-w-[330px] xl:max-w-[352px]">
              {/* Description */}
              <div className="flex flex-col justify-start">
                <p 
                  className="text-white text-base leading-relaxed"
                  style={{
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-word',
                    wordWrap: 'break-word'
                  }}
                >
                  {t('hero.longDescription')}
                </p>
              </div>
              
              {/* CTA Button */}
              <Link
                href={`/${locale}/contact`}
                className="bg-white text-[rgb(28,39,6)] px-8 py-4 rounded-[60px] text-base font-medium hover:bg-gray-100 transition-colors text-center inline-block w-fit"
              >
                {t('hero.cta')}
              </Link>
            </div>
          </div>
        </div>
      </section>

{/* <GeoDebugger/> */}
      {/* About Section */}
      <AboutSection />

    
      <AppleCardsCarouselDemo />
    

      {/* New Modern Services Section */}
      <ServiceSection />

      {/* New Modern Approach Section */}
      <ApproachSection />

      <FindingWork />

      <section className="py-10 container mx-auto max-w-5xl px-4">
      <section className="relative container max-w-5xl py-10 md:py-12 lg:py-15">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
            {t('professionProcess.about.title')}
          </h1>
          <p className="mt-4 max-w-2xl text-2xl text-muted-foreground md:text-3xl">
            {t('professionProcess.about.description')}
          </p>
        </div>
        <div className="absolute inset-0 z-[-1] -translate-y-1/2 blur-[100px] will-change-transform">
          <div className="absolute top-0 right-0 h-[400px] w-[800px] -translate-x-1/5 rounded-full bg-gradient-to-r from-blue-500/25 to-green-500/25"></div>
          <div className="absolute top-0 right-0 size-[400px] rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10"></div>
        </div>
      </section>
      
      <section className="container max-w-5xl border-y py-5">
        <h2 className="font-mono text-sm font-semibold tracking-widest text-accent-foreground">{t('professionProcess.about.statsTitle')}</h2>
        <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">15+</h3>
            <p className="mt-1 font-medium text-muted-foreground">{t('professionProcess.about.stats.experience')}</p>
          </div>
          <div>
            <h3 className="text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">2.5K</h3>
            <p className="mt-1 font-medium text-muted-foreground">{t('professionProcess.about.stats.healthPersonnel')}</p>
          </div>
          <div>
            <h3 className="text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">95%</h3>
            <p className="mt-1 font-medium text-muted-foreground">{t('professionProcess.about.stats.successRate')}</p>
          </div>
          <div>
            <h3 className="text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">150+</h3>
            <p className="mt-1 font-medium text-muted-foreground">{t('professionProcess.about.stats.partners')}</p>
          </div>
        </div>
      </section>
      
      <section className="container max-w-5xl py-10 md:py-12 lg:py-15">
        <div className="max-w-2xl space-y-5 md:space-y-8 lg:space-y-10">
          <p className="text-lg">
            {t('professionProcess.about.content.paragraph1')}
          </p>
          <h2 className="text-2xl font-medium tracking-tight md:text-3xl">
            {t('professionProcess.about.content.highlight')}
          </h2>
          <p className="text-lg">
            {t('professionProcess.about.content.paragraph2')}
          </p>
        </div>
      </section>
    </section>
      {/* Reviews Section */}
      {/* <ReviewSection /> */}

      {/* FAQ Section */}
      <FAQSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      {/* <Footer /> */}
    </>
  );
}
