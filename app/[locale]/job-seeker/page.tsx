import { getTranslations } from "next-intl/server";
import Link from "next/link";
import Image from "next/image";
import { Tag } from "@/components/ui/tag";
import ContactSection from "@/components/ContactSection";
import JobSeekerBenefitsTabs from "@/components/JobSeekerBenefitsTabs";

export default async function JobSeekerPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations();

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center" id="job-seeker-hero">
        <div className="absolute inset-0 rounded-2xl">
          <Image
            src="/is-arayan-twos.png"
            alt="Job Seeker Background"
            width={1920}
            height={1080}
            sizes="100vw"
            priority
            className="w-full h-full object-cover rounded-2xl"          />
        </div>
        
        <div 
          className="absolute inset-0 z-[1] rounded-2xl"
          style={{
            background: 'linear-gradient(179.98deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.8) 80%)'
          }}
        ></div>

        <div className="relative z-[3] w-full max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="flex flex-col items-center text-center gap-8">
            
            <div className="flex gap-3 mb-4">
              <Tag>{t("jobSeeker.hero.tag1")}</Tag>
              <Tag>{t("jobSeeker.hero.tag2")}</Tag>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-4xl">
              {t("jobSeeker.hero.title")}
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl leading-relaxed">
              {t("jobSeeker.hero.description")}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link
                href={`/${locale}/contact`}
                className="bg-white text-[rgb(28,39,6)] px-8 py-4 rounded-[60px] text-lg font-medium hover:bg-gray-100 transition-colors text-center"
              >
                {t("jobSeeker.hero.startJourney")}
              </Link>
              <Link
                href={`/${locale}/services`}
                className="border-2 border-white text-white px-8 py-4 rounded-[60px] text-lg font-medium hover:bg-white hover:text-[rgb(28,39,6)] transition-colors text-center"
              >
                {t("jobSeeker.hero.viewServices")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <JobSeekerBenefitsTabs />

      {/* Services Section */}
      <section className="py-32 container mx-auto">
        <div className="container overflow-hidden">
          <div className="mb-20 flex flex-col items-center gap-6 text-center">
            <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden text-foreground">
              {t("jobSeeker.services.badge")}
            </span>
            <h1 className="text-4xl font-semibold lg:text-5xl">
              {t("jobSeeker.services.title")}
            </h1>
          </div>
          <div className="relative mx-auto max-w-5xl">
            <img src="/iş-alımı.png" alt="Job seeker services" className="aspect-video max-h-[500px] w-full rounded-xl object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            <div className="absolute -top-28 -right-28 -z-10 aspect-video h-72 w-96 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)] [background-size:12px_12px] opacity-40 sm:bg-[radial-gradient(hsl(var(--muted-foreground))_1px,transparent_1px)]"></div>
            <div className="absolute -top-28 -left-28 -z-10 aspect-video h-72 w-96 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)] [background-size:12px_12px] opacity-40 sm:bg-[radial-gradient(hsl(var(--muted-foreground))_1px,transparent_1px)]"></div>
          </div>
          <div className="mx-auto mt-10 flex max-w-5xl flex-col md:flex-row">
            {t.raw("jobSeeker.services.items").map((service: any, index: number) => (
              <div key={index} className="flex grow basis-0 flex-col rounded-md bg-background p-4">
                <div className="mb-6 flex size-10 items-center justify-center rounded-full bg-background drop-shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-auto w-5" aria-hidden="true">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                  </svg>
                </div>
                <h3 className="mb-2 font-semibold">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
                {index < t.raw("jobSeeker.services.items").length - 1 && (
                  <div className="bg-border shrink-0 mx-6 hidden h-auto w-[2px] bg-gradient-to-b from-muted via-transparent to-muted md:block"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50 rounded-2xl  my-10 mx-3  ">
        <div className="max-w-[1200px] mx-auto  md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t("jobSeeker.process.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("jobSeeker.process.description")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.raw("jobSeeker.process.steps").map((step: any, index: number) => (
              <div key={index} className="text-center relative">
                <div className="text-6xl font-bold text-gray-200 mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
                {index < t.raw("jobSeeker.process.steps").length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full">
                    <div className="border-t-2 border-dashed border-gray-300"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[rgb(28,39,6)] text-white p-10 rounded-2xl m-3">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t("jobSeeker.stats.title")}
            </h2>
            <p className="text-xl opacity-90">
              {t("jobSeeker.stats.description")}
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {t.raw("jobSeeker.stats.items").map((stat: any, index: number) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-xl opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </>
  );
} 