'use client'
import React from 'react'
import { useLocale, useTranslations } from "next-intl";
import { ArrowRight, CheckCircle, Users, FileText, Briefcase, Globe, Hammer, UtensilsCrossed, Wrench, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from 'next/image';

const BusinessProcessInGermany = () => {
  const t = useTranslations();
 
const router = useRouter();
const locale = useLocale(); // Bu otomatik olarak aktif dil döner: 'tr', 'en', 'de'
  return (  
    <div className=''>
      {/* Architecture Section */}
      <section className="relative mx-2.5 mt-2.5 rounded-t-2xl rounded-b-[36px] bg-gradient-to-b from-amber-50 via-background to-background py-32 lg:mx-4 dark:from-amber-950">

      <div className="container  mx-auto px-4">
      <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full overflow-hidden rounded-2xl lg:rounded-3xl shadow-lg">
                <img 
                  alt="Vize danışmanlığı hizmetleri" 
                  className="w-full h-full object-cover object-center" 
                  src="/almanya-yapboz.png" 
                />
              </div>
           <div className="mt-10 flex justify-between gap-8 max-sm:flex-col md:mt-14 lg:mt-20 lg:gap-12">
          <div className="flex-1 space-y-8 text-left">
            {/* Security Regulations */}
            <div className=" dark:bg-gray-800 rounded-lg p-8 shadow-sm ">

              <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">
              Almanya'ya Giriş Rehberi
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  1. Hazırlık ve Bilgi Toplama
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  ZOV Personal olarak, Almanya'ya girmeden önce gereklilikler ve gerekli adımlar hakkında kapsamlı danışmanlık sağlıyoruz. Uzman ekibimiz, vize seçeneklerine ve ilgili ön koşullara dair detaylı bilgi sunar ve kişiselleştirilmiş rehberlik hizmeti verir.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  2. Doğru Vize Seçimi ve Başvuru Süreci
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Mesleki yeterliliklerinize ve planlanan faaliyetinize göre en uygun vizeyi belirliyoruz. ZOV Personal'ın deneyimli danışmanları, aşağıdaki vize türleri konusunda uzman rehberlik sağlar:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4 ml-4">
                    <li><strong>AB Mavi Kart:</strong> Üniversite mezunu ve belirli bir asgari ücrete sahip, yüksek nitelikli profesyoneller için</li>
                    <li><strong>Kalifiye İşçi Vizesi:</strong> Almanya'da eğitimi tanınmış kalifiye uzmanlar için</li>
                    <li><strong>İş Arama Vizesi:</strong> Almanya'ya gelip yerel olarak iş aramak isteyen vasıflı işçiler için</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  3. Belge Hazırlama ve Değerlendirme
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  ZOV Personal'ın dokümantasyon uzmanları, vize başvurunuz için gerekli tüm belgelerin eksiksiz hazırlanmasını sağlar:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4 ml-4">
                    <li>Geçerli pasaport kontrolü ve gereklilik analizi</li>
                    <li>Vize başvuru formunun profesyonel hazırlanması</li>
                    <li>Biyometrik fotoğraf standartlarına uygunluk kontrolü</li>
                    <li>Mesleki yeterliliklerin belgelendirilmesi ve çevirisi</li>
                    <li>İş teklifi ve sözleşme düzenlemeleri</li>
                    <li>Mali durumun belgelendirilmesi</li>
                    <li>Sağlık sigortası koordinasyonu</li>
                    <li>Gerekli dil seviyesi sertifikasyonu</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  4. İşveren Ortaklığı ve İş Bulma Desteği
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  ZOV Personal'ın geniş işveren ağı sayesinde, Almanya'daki güvenilir şirketlerle doğrudan bağlantı kuruyoruz. İşveren ortaklık programımız kapsamında:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4 ml-4">
                    <li>Niteliklerinize uygun iş pozisyonları bulma</li>
                    <li>İş sözleşmesi müzakereleri</li>
                    <li>İşveren ile vize süreci koordinasyonu</li>
                    <li>Çalışma izni prosedürlerinin yönetimi</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  5. Elçilik İşlemleri ve Randevu Yönetimi
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  ZOV Personal, Alman elçiliği ve konsolosluklarındaki tüm işlemlerinizi koordine eder. Size en yakın yetkili makamı belirleyerek randevu süreçlerini yönetir ve başvuru sürecinizi takip ederiz.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  6. Almanya'ya Varış ve Entegrasyon Desteği
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Vize onayından sonra Almanya'ya varışınızda da yanınızdayız:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4 ml-4">
                    <li>İkamet kayıt işlemlerinin tamamlanması</li>
                    <li>Oturma izni başvuru sürecinin yönetimi</li>
                    <li>Banka hesabı açma desteği</li>
                    <li>Sağlık sigortası düzenlemeleri</li>
                    <li>Konut bulma yardımı</li>
                    <li>İlk iş günü adaptasyon desteği</li>
                  </ul>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mt-6">
                  <h4 className="text-lg font-semibold mb-3 text-blue-900 dark:text-blue-100">
                  ZOV Personal Avantajı
                  </h4>
                  <p className="text-blue-800 dark:text-blue-200 leading-relaxed">
                  Kapsamlı hazırlık süreciyle Almanya'daki başarılı başlangıcınızın önünde hiçbir engel kalmaz. ZOV Personal'ın deneyimli ekibi, vize başvurunuzdan işe başlamanıza kadar her adımda profesyonel destek sağlar. İşveren ortaklık ağımız ve uzman danışmanlığımızla Almanya'daki profesyonel hayatınıza güvenle adım atın.
                  </p>
                </div>

                <div className="text-center mt-8">
                  <p className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                  Almanya yolculuğunuza başlamaya hazır mısınız?
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                  ZOV Personal ile vize sürecinizi başlatmak ve Almanya'daki kariyerinizi planlamak için hemen iletişime geçin!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </div>

        </section>
      <section className="py-22 container mx-auto px-4">
      <div className="container ">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-xs text-muted-foreground md:text-sm">{t('professionProcess.architectureSection.subtitle')}</div>
          <h2 className="mt-4 mb-8 text-4xl font-semibold text-pretty md:text-6xl">{t('professionProcess.architectureSection.title')}</h2>
          <p className="text-base text-muted-foreground md:text-lg">{t('professionProcess.architectureSection.description')}</p>
        </div>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          <Link href={`/${locale}/business-process-in-germany/employee-integration`} className="group relative isolate h-80 overflow-hidden rounded-2xl border border-border transition-transform duration-300 hover:-translate-y-0.5 lg:col-span-2">
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#1c2708] to-transparent"></div>
            <img src="/yapboz.png" alt="placeholder" className="absolute inset-0 -z-20 size-full rounded-2xl object-cover grayscale-100 transition-all duration-300 group-hover:grayscale-50" />
            <div className="flex h-full flex-col justify-between p-10">
              <span className="flex size-12 items-center justify-center rounded-xl border border-background/20 bg-background/15 backdrop-blur-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-building2 lucide-building-2 size-5 text-background" aria-hidden="true">
                  <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
                  <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
                  <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
                  <path d="M10 6h4"></path>
                  <path d="M10 10h4"></path>
                  <path d="M10 14h4"></path>
                  <path d="M10 18h4"></path>
                </svg>
              </span>
              <div>
                <h3 className="font-medium text-background">{t('professionProcess.architectureSection.cards.integration.title')}</h3>
                <p className="mt-2 text-background/70">{t('professionProcess.architectureSection.cards.integration.description')}</p>
                <Button variant="secondary" size="sm" className="mt-3 text-xs">
                  <span className="flex items-center gap-1">
                    {t('professionProcess.architectureSection.learnMore')}
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </Button>
              </div>
            </div>
          </Link>
          <Link href={`/${locale}/business-process-in-germany/visa-for-experienced-personal`} className="group relative isolate h-80 overflow-hidden rounded-2xl border border-border transition-transform duration-300 hover:-translate-y-0.5">
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#1c2708] to-transparent"></div>
            <img src="/kafiyeli-personali.png" alt="placeholder" className="absolute inset-0 -z-20 size-full rounded-2xl object-cover grayscale-100 transition-all duration-300 group-hover:grayscale-50" />
            <div className="flex h-full flex-col justify-between p-10">
              <span className="flex size-12 items-center justify-center rounded-xl border border-background/20 bg-background/15 backdrop-blur-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-landmark size-5 text-background" aria-hidden="true">
                  <line x1="3" x2="21" y1="22" y2="22"></line>
                  <line x1="6" x2="6" y1="18" y2="11"></line>
                  <line x1="10" x2="10" y1="18" y2="11"></line>
                  <line x1="14" x2="14" y1="18" y2="11"></line>
                  <line x1="18" x2="18" y1="18" y2="11"></line>
                  <polygon points="12 2 20 7 4 7"></polygon>
                </svg>
              </span>
              <div>
                <h3 className="font-medium text-background">{t('professionProcess.architectureSection.cards.experiencedVisa.title')}</h3>
                <p className="mt-2 text-background/70">{t('professionProcess.architectureSection.cards.experiencedVisa.description')}</p>
                <Button variant="secondary" size="sm" className="mt-3 text-xs">
                  <span className="flex items-center gap-1">
                    {t('professionProcess.architectureSection.learnMore')}
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </Button>
              </div>
            </div>
          </Link>
          <Link href={`/${locale}/business-process-in-germany/accelerated-skilled-worker-procedure`} className="group relative isolate h-80 overflow-hidden rounded-2xl border border-border transition-transform duration-300 hover:-translate-y-0.5">
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#1c2708] to-transparent"></div>
            <img src="/hızlandırılmıs-proredur.png" alt="placeholder" className="absolute inset-0 -z-20 size-full rounded-2xl object-cover grayscale-100 transition-all duration-300 group-hover:grayscale-50" />
            <div className="flex h-full flex-col justify-between p-10">
              <span className="flex size-12 items-center justify-center rounded-xl border border-background/20 bg-background/15 backdrop-blur-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layout-grid size-5 text-background" aria-hidden="true">
                  <rect width="7" height="7" x="3" y="3" rx="1"></rect>
                  <rect width="7" height="7" x="14" y="3" rx="1"></rect>
                  <rect width="7" height="7" x="14" y="14" rx="1"></rect>
                  <rect width="7" height="7" x="3" y="14" rx="1"></rect>
                </svg>
              </span>
              <div>
                <h3 className="font-medium text-background">{t('professionProcess.architectureSection.cards.acceleratedProcedures.title')}</h3>
                <p className="mt-2 text-background/70">{t('professionProcess.architectureSection.cards.acceleratedProcedures.description')}</p>
                <Button variant="secondary" size="sm" className="mt-3 text-xs">
                  <span className="flex items-center gap-1">
                    {t('professionProcess.architectureSection.learnMore')}
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </Button>
              </div>
            </div>
          </Link>
          <Link href={`/${locale}/business-process-in-germany/recruitment`} className="group relative isolate h-80 overflow-hidden rounded-2xl border border-border transition-transform duration-300 hover:-translate-y-0.5 lg:col-span-2">
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#1c2708] to-transparent"></div>
            <img src="/iş-alımı.png" alt="placeholder" className="absolute inset-0 -z-20 size-full rounded-2xl object-cover grayscale-100 transition-all duration-300 group-hover:grayscale-50" />
            <div className="flex h-full flex-col justify-between p-10">
              <span className="flex size-12 items-center justify-center rounded-xl border border-background/20 bg-background/15 backdrop-blur-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-compass size-5 text-background" aria-hidden="true">
                  <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path>
                  <circle cx="12" cy="12" r="10"></circle>
                </svg>
              </span>
              <div>
                <h3 className="font-medium text-background">{t('professionProcess.architectureSection.cards.recruitment.title')}</h3>
                <p className="mt-2 text-background/70">{t('professionProcess.architectureSection.cards.recruitment.description')}</p>
                <Button variant="secondary" size="sm" className="mt-3 text-xs">
                  <span className="flex items-center gap-1">
                    {t('professionProcess.architectureSection.learnMore')}
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </Button>
                              </div>
              </div>
            </Link>
       
        </div>
      </div>
    </section>
    </div>
  )
}

export default BusinessProcessInGermany