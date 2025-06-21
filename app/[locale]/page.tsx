import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { Tag } from "@/components/ui/tag";
import Image from "next/image";
import AboutSection from "@/components/AboutSection";
import { AppleCardsCarouselDemo } from "@/components/sliderSection";
import ServiceSection from "@/components/ServiceSection";
import ApproachSection from "@/components/ApproachSection";
import ReviewSection from "@/components/ReviewSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";


export default async function Home({ params }: { params: { locale: string } }) {
  const { locale } = params;
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
                <Tag>
                  {t('hero.tag1')}
                </Tag>
                <Tag>
                  {t('hero.tag2')}
                </Tag>
              </div>
              
              {/* Main Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {t('hero.title')}
              </h1>
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

      {/* About Section */}
      <AboutSection />

      <AppleCardsCarouselDemo />

      {/* New Modern Services Section */}
      <ServiceSection />

      {/* New Modern Approach Section */}
      <ApproachSection />

      {/* Reviews Section */}
      <ReviewSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      {/* <Footer /> */}
    </>
  );
}
