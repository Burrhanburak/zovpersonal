import { getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const t = await getTranslations('about');
  const { locale } = await params;

  return (
    <main className="">
      <div className="relative mx-2.5 mt-2.5 lg:mx-4 bg-gradient-to-b from-cream-light via-background to-cream-dark/80 rounded-t-[36px] rounded-b-2xl">
        <div className="py-28 lg:py-32 lg:pt-44 ">
          {/* Hero Section */}
          <section className="container mx-auto max-w-5xl px-4">
            <div className="container flex  max-w-5xl flex-col justify-between gap-8 md:gap-20 lg:flex-row lg:items-center lg:gap-24 xl:gap-24">
              <div className="flex-[1.5]">
                <h1 className="text-3xl tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                  {t('hero.title')}
                </h1>
                <p className="text-muted-foreground mt-5 text-2xl md:text-3xl lg:text-4xl">
                  {t('hero.subtitle')}
                </p>
                <p className="text-muted-foreground mt-8 hidden max-w-lg space-y-6 text-lg text-balance md:block lg:mt-12">
                  {t('hero.description1')}
                  <br /><br />
                  {t('hero.description2')}
                </p>
              </div>
              <div className="relative flex flex-1 flex-col justify-center gap-3 pt-10 lg:ps-10 lg:pt-0">
                <div className="text-muted-foreground h-full w-px absolute top-0 left-0 max-lg:hidden">
                  <div className="h-full w-px bg-[repeating-linear-gradient(180deg,transparent,transparent_4px,currentColor_4px,currentColor_10px)] [mask-image:linear-gradient(180deg,transparent,black_25%,black_75%,transparent)]"></div>
                </div>
                <div className="text-muted-foreground h-px w-full absolute top-0 lg:hidden">
                  <div className="h-px w-full bg-[repeating-linear-gradient(90deg,transparent,transparent_4px,currentColor_4px,currentColor_10px)] [mask-image:linear-gradient(90deg,transparent,black_25%,black_75%,transparent)]"></div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="font-display text-4xl tracking-wide md:text-5xl">
                    {t('stats.experience.number')}
                  </div>
                  <div className="text-muted-foreground">
                    {t('stats.experience.label')}
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="font-display text-4xl tracking-wide md:text-5xl">
                    {t('stats.clients.number')}
                  </div>
                  <div className="text-muted-foreground">
                    {t('stats.clients.label')}
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="font-display text-4xl tracking-wide md:text-5xl">
                    {t('stats.visas.number')}
                  </div>
                  <div className="text-muted-foreground">
                    {t('stats.visas.label')}
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="font-display text-4xl tracking-wide md:text-5xl">
                    {t('stats.countries.number')}
                  </div>
                  <div className="text-muted-foreground">
                    {t('stats.countries.label')}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Content Sections */}
          <section className="container mx-auto  px-4  mt-10 flex max-w-5xl flex-col-reverse gap-8 md:mt-14 md:gap-14 lg:mt-20 lg:flex-row lg:items-end">
            <div className="flex flex-col gap-8 lg:gap-16 xl:gap-20">
              <div className="flex flex-col gap-6 xl:-translate-x-10">
                <div className="relative aspect-[2/1.5] overflow-hidden rounded-2xl">
                  <Image 
                    alt={t('images.teamWork')} 
                    loading="lazy" 
                    fill
                    className="object-cover" 
                    src="/yapboz.png" 
                  />
                </div>
            
              </div>
              <div className="flex-1 space-y-4 text-lg md:space-y-6">
                <h2 className="text-primary text-4xl">{t('team.title')}</h2>
                <div className="text-muted-foreground max-w-xl space-y-6">
                  <p>{t('team.description1')}</p>
                  <p>{t('team.description2')}</p>
                  <p>{t('team.description3')}</p>
                </div>
                <div className="mt-8">
                  <Link href={`/${locale}/contact`}>
                    <Button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 h-10 rounded-lg px-8">
                      {t('team.cta')}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-8 lg:gap-16 xl:gap-20">
              <div className="flex-1 space-y-4 text-lg md:space-y-6">
                <div className="text-muted-foreground max-w-xl space-y-6">
                  <p>{t('company.description1')}</p>
                  <p>{t('company.description2')}</p>
                </div>
              </div>
              <div className="flex-col gap-6 hidden lg:flex xl:translate-x-10">
                <div className="relative aspect-[2/1.5] overflow-hidden rounded-2xl">
                  <Image 
                    alt={t('images.consulting')} 
                    loading="lazy" 
                    fill
                    className="object-cover" 
                    src="/ekip.png" 
                  />
                </div>
                {/* <div className="relative aspect-[2/1.5] overflow-hidden rounded-2xl">
                  <Image 
                    alt={t('images.success')} 
                    loading="lazy" 
                    fill
                    className="object-cover" 
                    src="/zovpersonal.webp" 
                  />
                </div> */}
              </div>
            </div>
          </section>

          {/* Partners Section */}
          <div className="pt-28 lg:pt-32 mx-auto max-w-5xl px-4">
            <div className="text-muted-foreground relative h-px w-full container max-w-5xl scale-x-115">
              <div className="h-px w-full bg-[repeating-linear-gradient(90deg,transparent,transparent_4px,currentColor_4px,currentColor_10px)] [mask-image:linear-gradient(90deg,transparent,black_25%,black_75%,transparent)]"></div>
            </div>
            {/* <section className="container max-w-5xl py-12">
              <h2 className="text-primary text-4xl font-medium tracking-wide">
                {t('partners.title')}
              </h2>
              <div className="mt-8 grid grid-cols-2 gap-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                <div className="">
                  <Image 
                    alt={t('partners.partner1.name')} 
                    loading="lazy" 
                    width={120} 
                    height={120} 
                    className="object-cover rounded-lg" 
                    src="/vize-uzmani.png" 
                  />
                  <h3 className="mt-3 font-semibold">{t('partners.partner1.name')}</h3>
                  <p className="text-muted-foreground">{t('partners.partner1.role')}</p>
                </div>
                <div className="">
                  <Image 
                    alt={t('partners.partner2.name')} 
                    loading="lazy" 
                    width={120} 
                    height={120} 
                    className="object-cover rounded-lg" 
                    src="/hukuk-danısmanıi.png" 
                  />
                  <h3 className="mt-3 font-semibold">{t('partners.partner2.name')}</h3>
                  <p className="text-muted-foreground">{t('partners.partner2.role')}</p>
                </div>
         
                <div className="">
                  <Image 
                    alt={t('partners.partner4.name')} 
                    loading="lazy" 
                    width={120} 
                    height={120} 
                    className="object-cover rounded-lg" 
                    src="/müsteri-iliskilerii.png" 
                  />
                  <h3 className="mt-3 font-semibold">{t('partners.partner4.name')}</h3>
                  <p className="text-muted-foreground">{t('partners.partner4.role')}</p>
                </div>
                <div className="">
                  <Image 
                    alt={t('partners.partner5.name')} 
                    loading="lazy" 
                    width={120} 
                    height={120} 
                    className="object-cover rounded-lg" 
                    src="/operasyon-muıdur.png" 
                  />
                  <h3 className="mt-3 font-semibold">{t('partners.partner5.name')}</h3>
                  <p className="text-muted-foreground">{t('partners.partner5.role')}</p>
                </div>
              </div>
            </section> */}
          </div>
        </div>
      </div>
    </main>
  );
}
