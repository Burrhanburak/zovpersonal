// app/[locale]/profession-process/[slug]/page.tsx
'use client';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Profession data mapping
const professionData = {
  doctor: {
    title: "Doktorlar için Almanya Ulusal Vizesi",
    titleEn: "Germany National Visa for Doctors",
    titleDe: "Deutschland Nationales Visum für Ärzte",
    description: "Almanya'da doktor olarak çalışmak isteyen tıp mezunları için kapsamlı vize rehberliği ve süreç yönetimi sunuyoruz.",
    descriptionEn: "Comprehensive visa guidance and process management for medical graduates who want to work as doctors in Germany.",
    descriptionDe: "Umfassende Visa-Beratung und Prozessmanagement für Medizinabsolventen, die als Ärzte in Deutschland arbeiten möchten.",
    image: "/doctor.png",
    author: "Dr. Mehmet Öz",
    authorEn: "Dr. Mehmet Öz",
    authorDe: "Dr. Mehmet Öz",
    date: "2 gün önce",
    dateEn: "2 days ago",
    dateDe: "vor 2 Tagen"
  },
  nurse: {
    title: "Hemşirelik Vizesi",
    titleEn: "Nursing Visa",
    titleDe: "Pflegevisa",
    description: "Almanya'da hemşire olarak çalışmak isteyen profesyoneller için kapsamlı vize rehberliği ve süreç yönetimi sunuyoruz.",
    descriptionEn: "Comprehensive visa guidance and process management for professionals who want to work as nurses in Germany.",
    descriptionDe: "Umfassende Visa-Beratung und Prozessmanagement für Fachkräfte, die als Krankenschwestern in Deutschland arbeiten möchten.",
    image: "/nurse.png",
    author: "Hemşire Ayşe Yılmaz",
    authorEn: "Nurse Ayşe Yılmaz",
    authorDe: "Krankenschwester Ayşe Yılmaz",
    date: "3 gün önce",
    dateEn: "3 days ago",
    dateDe: "vor 3 Tagen"
  },
  caregiver: {
    title: "Bakıcılar ve Yaşlı Bakım Uzmanları",
    titleEn: "Caregivers and Elderly Care Specialists",
    titleDe: "Betreuer und Altenpflege-Spezialisten",
    description: "Yaşlı bakım sektöründe çalışmak isteyen profesyoneller için kapsamlı vize danışmanlığı.",
    descriptionEn: "Comprehensive visa consultancy for professionals who want to work in the elderly care sector.",
    descriptionDe: "Umfassende Visa-Beratung für Fachkräfte, die im Altenpflegebereich arbeiten möchten.",
    image: "/hastabakıcı.png",
    author: "Bakım Uzmanı Fatma Demir",
    authorEn: "Care Specialist Fatma Demir",
    authorDe: "Pflegespezialistin Fatma Demir",
    date: "1 hafta önce",
    dateEn: "1 week ago",
    dateDe: "vor 1 Woche"
  },
  "health-technician": {
    title: "Sağlık Teknisyenleri ve Yardımcı Personel",
    titleEn: "Health Technicians and Support Staff",
    titleDe: "Gesundheitstechniker und Hilfspersonal",
    description: "Tıbbi teknisyen, laboratuvar uzmanı ve diğer sağlık yardımcı personeli için Almanya vize süreçleri.",
    descriptionEn: "Germany visa processes for medical technicians, laboratory specialists and other health auxiliary personnel.",
    descriptionDe: "Deutschland-Visaverfahren für Medizintechniker, Laborspezialisten und anderes Gesundheitshilfspersonal.",
    image: "/saglıkteknik.webp",
    author: "Lab Uzmanı Ali Kaya",
    authorEn: "Lab Specialist Ali Kaya",
    authorDe: "Laborspezialist Ali Kaya",
    date: "5 gün önce",
    dateEn: "5 days ago",
    dateDe: "vor 5 Tagen"
  },
  therapist: {
    title: "Sağlık Uzmanları ve Terapistler",
    titleEn: "Health Specialists and Therapists",
    titleDe: "Gesundheitsspezialisten und Therapeuten",
    description: "Fizyoterapist, psikolog, diyetisyen ve diğer sağlık uzmanları için Almanya'da çalışma fırsatları.",
    descriptionEn: "Work opportunities in Germany for physiotherapists, psychologists, dietitians and other health specialists.",
    descriptionDe: "Arbeitsmöglichkeiten in Deutschland für Physiotherapeuten, Psychologen, Ernährungsberater und andere Gesundheitsspezialisten.",
    image: "/fizyoterapist.png",
    author: "Fizyoterapist Zehra Şen",
    authorEn: "Physiotherapist Zehra Şen",
    authorDe: "Physiotherapeutin Zehra Şen",
    date: "4 gün önce",
    dateEn: "4 days ago",
    dateDe: "vor 4 Tagen"
  }
};

export default function Page() {
  const params = useParams();
  const { slug, locale } = params;
  
  // Get profession data based on slug
  const profession = professionData[slug as keyof typeof professionData];
  
  // If profession not found, show 404
  if (!profession) {
    notFound();
  }
  
  const isTurkish = locale === 'tr';
  const isGerman = locale === 'de';
  
  const title = isTurkish ? profession.title : isGerman ? profession.titleDe : profession.titleEn;
  const description = isTurkish ? profession.description : isGerman ? profession.descriptionDe : profession.descriptionEn;
  const author = isTurkish ? profession.author : isGerman ? profession.authorDe : profession.authorEn;
  const date = isTurkish ? profession.date : isGerman ? profession.dateDe : profession.dateEn;
  
  return (
    <section className="py-32 container mx-auto px-4 sm:px-6 lg:px-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="breadcrumb" data-slot="breadcrumb">
          <ol data-slot="breadcrumb-list" className="text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5">
            <li data-slot="breadcrumb-item" className="inline-flex items-center gap-1.5">
              <Link data-slot="breadcrumb-link" className="hover:text-foreground transition-colors" href={`/${locale}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-house h-4 w-4" aria-hidden="true">
                  <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                  <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                </svg>
              </Link>
            </li>
            <li data-slot="breadcrumb-separator" role="presentation" aria-hidden="true" className="[&>svg]:size-3.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right" aria-hidden="true">
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </li>
            <li data-slot="breadcrumb-item" className="inline-flex items-center gap-1.5">
              <Link data-slot="breadcrumb-link" className="hover:text-foreground transition-colors" href={`/${locale}/profession-process`}>
                {isTurkish ? 'Meslek Süreçleri' : isGerman ? 'Berufsprozesse' : 'Profession Processes'}
              </Link>
            </li>
            <li data-slot="breadcrumb-separator" role="presentation" aria-hidden="true" className="[&>svg]:size-3.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right" aria-hidden="true">
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </li>
            <li data-slot="breadcrumb-item" className="inline-flex items-center gap-1.5">
              <span data-slot="breadcrumb-page" role="link" aria-disabled="true" aria-current="page" className="text-foreground font-normal">
                {title}
              </span>
            </li>
          </ol>
        </nav>
        
        <h1 className="mb-7 mt-9 max-w-3xl text-4xl font-bold md:mb-10 md:text-7xl">
          {title}
        </h1>
        
        <div className="flex items-center gap-3 text-sm md:text-base">
          <span data-slot="avatar" className="relative flex size-8 shrink-0 overflow-hidden rounded-full h-8 w-8 border">
            <div className="aspect-square size-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
              {author.split(' ').map(n => n[0]).join('').slice(0, 2)}
            </div>
          </span>
          <span>
            <a href="#" className="font-medium">{author}</a>
            <span className="text-muted-foreground ml-1">
              {isTurkish ? 'tarihinde' : isGerman ? 'am' : 'on'} {date}
            </span>
          </span>
        </div>
        
        <div className="relative mt-12 grid max-w-7xl gap-14 lg:mt-14 lg:grid lg:grid-cols-12 lg:gap-6">
          <div className="order-2 lg:order-none lg:col-span-8">
            <div>
              <img src={profession.image} alt={title} className="mb-8 mt-0 aspect-video w-full rounded-lg border object-cover" />
              <p className="text-muted-foreground text-sm">
                {description}
              </p>
            </div>
            
            <section id="section1" className="prose dark:prose-invert my-8">
              <h2 className="text-2xl font-bold mb-4">
                {slug === 'nurse' 
                  ? (isTurkish ? 'Hemşirelik Vizesi Nedir?' : isGerman ? 'Was ist ein Pflegevisa?' : 'What is a Nursing Visa?')
                  : (isTurkish ? 'Hizmet Detayları ve Süreç' : isGerman ? 'Service-Details und Prozess' : 'Service Details and Process')
                }
              </h2>
              
              {slug === 'nurse' ? (
                <>
                  <p className="text-base leading-relaxed mb-6">
                    {isTurkish 
                      ? 'Hemşirelik vizesi, Almanya\'da çalışmak isteyen hemşirelik alanındaki profesyonellere yöneliktir. Nitelikli hemşirelik personeline olan talep Almanya\'da özellikle yüksektir, bu nedenle yabancı hemşirelik personelinin girişini ve istihdamını kolaylaştırmak için özel düzenlemeler ve basitleştirmeler getirilmiştir.'
                      : isGerman 
                      ? 'Das Pflegevisa richtet sich an Fachkräfte im Pflegebereich, die in Deutschland arbeiten möchten. Die Nachfrage nach qualifiziertem Pflegepersonal ist in Deutschland besonders hoch, daher wurden spezielle Regelungen und Vereinfachungen eingeführt, um die Einreise und Beschäftigung ausländischer Pflegekräfte zu erleichtern.'
                      : 'The nursing visa is aimed at professionals in the nursing field who want to work in Germany. The demand for qualified nursing staff is particularly high in Germany, therefore special regulations and simplifications have been introduced to facilitate the entry and employment of foreign nursing personnel.'
                    }
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-3 mt-8">
                    {isTurkish ? 'Hemşirelik Vizesinin Faydaları' : isGerman ? 'Vorteile des Pflegevisas' : 'Benefits of the Nursing Visa'}
                  </h3>
                  
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>
                      <strong>{isTurkish ? 'Basitleştirilmiş tanıma süreci:' : isGerman ? 'Vereinfachtes Anerkennungsverfahren:' : 'Simplified recognition process:'}</strong> {' '}
                      {isTurkish 
                        ? 'Hemşireler, yabancı mesleki yeterliliklerinin tanınması konusunda özel destek alırlar.'
                        : isGerman 
                        ? 'Pflegekräfte erhalten spezielle Unterstützung bei der Anerkennung ausländischer Berufsqualifikationen.'
                        : 'Nurses receive special support in recognizing foreign professional qualifications.'
                      }
                    </li>
                    <li>
                      <strong>{isTurkish ? 'İşgücü piyasasına daha hızlı erişim:' : isGerman ? 'Schnellerer Zugang zum Arbeitsmarkt:' : 'Faster access to the labor market:'}</strong> {' '}
                      {isTurkish 
                        ? 'Hemşireler, tam tanınma için gerekli nitelikleri edinene kadar, özellikle staj veya hemşire yardımcısı olarak tanınma aşamasında Almanya\'da çalışabilirler.'
                        : isGerman 
                        ? 'Pflegekräfte können während der Anerkennungsphase in Deutschland arbeiten, insbesondere als Praktikanten oder Pflegehilfskräfte, bis sie die erforderlichen Qualifikationen für die vollständige Anerkennung erwerben.'
                        : 'Nurses can work in Germany during the recognition phase, especially as interns or nursing assistants, until they acquire the necessary qualifications for full recognition.'
                      }
                    </li>
                    <li>
                      <strong>{isTurkish ? 'Yüksek talep:' : isGerman ? 'Hohe Nachfrage:' : 'High demand:'}</strong> {' '}
                      {isTurkish 
                        ? 'Almanya\'da hemşirelik personeline olan talep yüksektir, bu da yeterliliklerin başarılı bir şekilde tanınmasının ardından uzun vadeli istihdam şansını artırır.'
                        : isGerman 
                        ? 'Die Nachfrage nach Pflegepersonal in Deutschland ist hoch, was die Chancen auf eine langfristige Beschäftigung nach erfolgreicher Anerkennung der Qualifikationen erhöht.'
                        : 'The demand for nursing staff in Germany is high, which increases the chances of long-term employment after successful recognition of qualifications.'
                      }
                    </li>
                  </ul>
                </>
              ) : (
                <>
                  <p className="text-base leading-relaxed mb-6">
                    {isTurkish 
                      ? 'Almanya\'da sağlık sektöründe çalışmak isteyen profesyoneller için özel olarak tasarlanmış kapsamlı vize danışmanlığı hizmetimiz ile hayalinizdeki kariyer hedeflerinize ulaşmanız için gereken tüm desteği sağlıyoruz.'
                      : isGerman 
                      ? 'Mit unserem umfassenden Visa-Beratungsservice, der speziell für Fachkräfte entwickelt wurde, die im Gesundheitswesen in Deutschland arbeiten möchten, bieten wir Ihnen alle Unterstützung, die Sie benötigen, um Ihre Traumkarriereziele zu erreichen.'
                      : 'With our comprehensive visa consultancy service specially designed for professionals who want to work in the health sector in Germany, we provide all the support you need to achieve your dream career goals.'
                    }
                  </p>
                  
                  <blockquote className="border-l-4 border-blue-500 pl-4 italic my-6 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-r-lg">
                    {isTurkish 
                      ? '"Almanya\'da sağlık sektöründe çalışmak, hem profesyonel gelişim hem de yaşam kalitesi açısından eşsiz fırsatlar sunar."'
                      : isGerman 
                      ? '"Die Arbeit im Gesundheitswesen in Deutschland bietet einzigartige Möglichkeiten sowohl für die berufliche Entwicklung als auch für die Lebensqualität."'
                      : '"Working in the healthcare sector in Germany offers unique opportunities for both professional development and quality of life."'
                    }
                  </blockquote>
                  
                  <p className="text-base leading-relaxed mb-6">
                    {isTurkish 
                      ? 'Uzman ekibimiz, başvuru sürecinin her aşamasında yanınızda olacak ve başarılı bir şekilde Almanya\'ya yerleşmenizi sağlayacaktır.'
                      : isGerman 
                      ? 'Unser Expertenteam wird Sie in jeder Phase des Bewerbungsprozesses begleiten und für eine erfolgreiche Niederlassung in Deutschland sorgen.'
                      : 'Our expert team will be with you at every stage of the application process and ensure that you settle in Germany successfully.'
                    }
                  </p>
                </>
              )}
              
              <div data-slot="alert" role="alert" className="relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current bg-card text-card-foreground my-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lightbulb h-4 w-4" aria-hidden="true">
                  <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
                  <path d="M9 18h6"></path>
                  <path d="M10 22h4"></path>
                </svg>
                <div data-slot="alert-title" className="col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight">
                  {isTurkish ? 'Önemli Bilgi!' : isGerman ? 'Wichtige Information!' : 'Important Information!'}
                </div>
                <div data-slot="alert-description" className="text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed">
                  {slug === 'nurse' 
                    ? (isTurkish 
                        ? 'Hemşirelik vizesi için genellikle B1 seviyesinde Almanca dil becerileri gereklidir.'
                        : isGerman 
                        ? 'Für das Pflegevisa sind in der Regel Deutschkenntnisse auf B1-Niveau erforderlich.'
                        : 'For nursing visa, German language skills at B1 level are usually required.'
                      )
                    : (isTurkish 
                        ? 'Tüm belgeler resmi çeviri ile birlikte hazırlanmalı ve apostil işlemi tamamlanmalıdır.'
                        : isGerman 
                        ? 'Alle Dokumente müssen mit offizieller Übersetzung vorbereitet und das Apostille-Verfahren abgeschlossen werden.'
                        : 'All documents must be prepared with official translation and apostille process must be completed.'
                      )
                  }
                </div>
              </div>
            </section>
            
            <section id="section2" className="prose dark:prose-invert mb-8">
              <h2 className="text-2xl font-bold mb-4">
                {slug === 'nurse' 
                  ? (isTurkish ? 'Hemşirelik Vizesi için Gereklilikler' : isGerman ? 'Anforderungen für das Pflegevisa' : 'Requirements for Nursing Visa')
                  : (isTurkish ? 'Gerekli Belgeler ve Süreç Adımları' : isGerman ? 'Erforderliche Dokumente und Prozessschritte' : 'Required Documents and Process Steps')
                }
              </h2>
              
              {slug === 'nurse' ? (
                <>
                  <p className="text-base leading-relaxed mb-6">
                    {isTurkish 
                      ? 'Hemşirelik vizesi alabilmek için bazı şartların karşılanması gerekmektedir:'
                      : isGerman 
                      ? 'Um ein Pflegevisa zu erhalten, müssen bestimmte Voraussetzungen erfüllt werden:'
                      : 'To obtain a nursing visa, certain conditions must be met:'
                    }
                  </p>
                  
                  <div className="space-y-6">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-blue-800 dark:text-blue-200">
                        1. {isTurkish ? 'Tanınan Mesleki Yeterlilik' : isGerman ? 'Anerkannte Berufsqualifikation' : 'Recognized Professional Qualification'}
                      </h4>
                      <p className="text-sm">
                        {isTurkish 
                          ? 'Başvuran, kendi ülkesinde hemşire olarak eğitimini tamamlamış olmalıdır. Bu yeterlilik Almanya\'da tanınmalıdır. Eğitim henüz tam olarak tanınmamışsa, tanınmayı elde etmek için yeterlilik önlemleri Almanya\'da tamamlanabilir.'
                          : isGerman 
                          ? 'Der Antragsteller muss seine Ausbildung als Krankenschwester/Krankenpfleger in seinem Heimatland abgeschlossen haben. Diese Qualifikation muss in Deutschland anerkannt werden. Falls die Ausbildung noch nicht vollständig anerkannt ist, können Qualifizierungsmaßnahmen zur Erlangung der Anerkennung in Deutschland abgeschlossen werden.'
                          : 'The applicant must have completed their nursing education in their home country. This qualification must be recognized in Germany. If the education is not yet fully recognized, qualification measures to obtain recognition can be completed in Germany.'
                        }
                      </p>
                    </div>
                    
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-green-800 dark:text-green-200">
                        2. {isTurkish ? 'İş Teklifi' : isGerman ? 'Stellenangebot' : 'Job Offer'}
                      </h4>
                      <p className="text-sm">
                        {isTurkish 
                          ? 'Bir bakım evi, hastane veya benzeri bir tesiste belirli bir iş teklifi mevcut olmalıdır. İstihdam sözleşmesi hemşirelikteki görevi teyit etmelidir.'
                          : isGerman 
                          ? 'Es muss ein konkretes Stellenangebot in einem Pflegeheim, Krankenhaus oder einer ähnlichen Einrichtung vorliegen. Der Arbeitsvertrag muss die Tätigkeit in der Pflege bestätigen.'
                          : 'There must be a specific job offer at a nursing home, hospital or similar facility. The employment contract must confirm the nursing role.'
                        }
                      </p>
                    </div>
                    
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-yellow-800 dark:text-yellow-200">
                        3. {isTurkish ? 'Dil Becerileri' : isGerman ? 'Sprachkenntnisse' : 'Language Skills'}
                      </h4>
                      <p className="text-sm">
                        {isTurkish 
                          ? 'Almanca bilgisi zorunludur. Günlük hemşirelik uygulamalarında başarılı iletişimi sağlamak için genellikle Ortak Avrupa Dil Referans Çerçevesi\'nin (CEFR) B1 seviyesi gereklidir.'
                          : isGerman 
                          ? 'Deutschkenntnisse sind erforderlich. Für eine erfolgreiche Kommunikation in der täglichen Pflegepraxis ist in der Regel das Niveau B1 des Gemeinsamen Europäischen Referenzrahmens (GER) erforderlich.'
                          : 'German language knowledge is required. For successful communication in daily nursing practice, level B1 of the Common European Framework of Reference (CEFR) is usually required.'
                        }
                      </p>
                    </div>
                    
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-purple-800 dark:text-purple-200">
                        4. {isTurkish ? 'Finansal Güvenlik' : isGerman ? 'Finanzielle Sicherheit' : 'Financial Security'}
                      </h4>
                      <p className="text-sm">
                        {isTurkish 
                          ? 'İşveren, bakıcıya Alman işgücü piyasasının gereksinimlerini karşılayan uygun bir maaş ödendiğini kanıtlamalıdır. Bakıcının geliriyle kendini geçindirebilmesi beklenir.'
                          : isGerman 
                          ? 'Der Arbeitgeber muss nachweisen, dass der Pflegekraft ein angemessenes Gehalt gezahlt wird, das den Anforderungen des deutschen Arbeitsmarktes entspricht. Es wird erwartet, dass sich die Pflegekraft mit ihrem Einkommen selbst versorgen kann.'
                          : 'The employer must prove that the caregiver is paid an appropriate salary that meets the requirements of the German labor market. The caregiver is expected to be able to support themselves with their income.'
                        }
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <p className="text-base leading-relaxed mb-6">
                    {isTurkish 
                      ? 'Başvuru sürecinde ihtiyaç duyacağınız belgeler ve takip edilmesi gereken adımlar aşağıda detaylandırılmıştır.'
                      : isGerman 
                      ? 'Die Dokumente, die Sie während des Bewerbungsprozesses benötigen, und die zu befolgenden Schritte sind unten detailliert aufgeführt.'
                      : 'The documents you will need during the application process and the steps to be followed are detailed below.'
                    }
                  </p>
                  
                  <div className="overflow-x-auto my-6">
                    <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
                      <thead>
                        <tr className="bg-gray-100 dark:bg-gray-800">
                          <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">
                            {isTurkish ? 'Belge Türü' : isGerman ? 'Dokumententyp' : 'Document Type'}
                          </th>
                          <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">
                            {isTurkish ? 'Gereklilik' : isGerman ? 'Anforderung' : 'Requirement'}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                            {isTurkish ? 'Diploma ve Transkript' : isGerman ? 'Diplom und Transkript' : 'Diploma and Transcript'}
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                            {isTurkish ? 'Zorunlu' : isGerman ? 'Erforderlich' : 'Required'}
                          </td>
                        </tr>
                        <tr className="bg-gray-50 dark:bg-gray-700">
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                            {isTurkish ? 'Dil Sertifikası' : isGerman ? 'Sprachzertifikat' : 'Language Certificate'}
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                            {isTurkish ? 'Zorunlu (B2/C1)' : isGerman ? 'Erforderlich (B2/C1)' : 'Required (B2/C1)'}
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                            {isTurkish ? 'Mesleki Deneyim' : isGerman ? 'Berufserfahrung' : 'Professional Experience'}
                          </td>
                          <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                            {isTurkish ? 'Önerilen' : isGerman ? 'Empfohlen' : 'Recommended'}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </>
              )}
              
              <p className="text-base leading-relaxed">
                {isTurkish 
                  ? 'Tüm süreç ortalama 6-12 ay sürmektedir ve uzman ekibimiz her aşamada size rehberlik etmektedir.'
                  : isGerman 
                  ? 'Der gesamte Prozess dauert durchschnittlich 6-12 Monate und unser Expertenteam begleitet Sie in jeder Phase.'
                  : 'The entire process takes an average of 6-12 months and our expert team guides you at every stage.'
                }
              </p>
            </section>
            
            <section id="section3" className="prose dark:prose-invert mb-8">
              <h2 className="text-2xl font-bold mb-4">
                {slug === 'nurse' 
                  ? (isTurkish ? 'Hemşirelik Vizesi Hakkında Sık Sorulan Sorular' : isGerman ? 'Häufig gestellte Fragen zum Pflegevisa' : 'Frequently Asked Questions About Nursing Visa')
                  : (isTurkish ? 'Başarı Hikayeleri ve İstatistikler' : isGerman ? 'Erfolgsgeschichten und Statistiken' : 'Success Stories and Statistics')
                }
              </h2>
              
              {slug === 'nurse' ? (
                <>
                  <div className="space-y-6">
                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                      <h4 className="font-semibold mb-3 text-lg">
                        {isTurkish 
                          ? 'Almanya\'da hemşire olarak çalışmak için hangi dil becerilerine ihtiyacım var?' 
                          : isGerman 
                          ? 'Welche Sprachkenntnisse benötige ich, um als Krankenschwester in Deutschland zu arbeiten?' 
                          : 'What language skills do I need to work as a nurse in Germany?'
                        }
                      </h4>
                      <p className="text-base leading-relaxed">
                        {isTurkish 
                          ? 'Genellikle, günlük hemşirelik uygulamalarında başarılı iletişimi sağlamak için B1 seviyesinde Almanca dil becerileri gereklidir. Gerekli dil seviyesine ulaşmak için ek dil kursları almak gerekebilir.'
                          : isGerman 
                          ? 'In der Regel sind Deutschkenntnisse auf B1-Niveau erforderlich, um eine erfolgreiche Kommunikation in der täglichen Pflegepraxis zu gewährleisten. Möglicherweise müssen zusätzliche Sprachkurse belegt werden, um das erforderliche Sprachniveau zu erreichen.'
                          : 'Generally, German language skills at B1 level are required to ensure successful communication in daily nursing practice. Additional language courses may need to be taken to reach the required language level.'
                        }
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                      <h4 className="font-semibold mb-3 text-lg">
                        {isTurkish 
                          ? 'Niteliğim tam olarak tanınmazsa ne olur?' 
                          : isGerman 
                          ? 'Was passiert, wenn meine Qualifikation nicht vollständig anerkannt wird?' 
                          : 'What happens if my qualification is not fully recognized?'
                        }
                      </h4>
                      <p className="text-base leading-relaxed">
                        {isTurkish 
                          ? 'Niteliğiniz tam olarak tanınmazsa, Almanya\'da bir uyum eğitim kursunu tamamlayabilirsiniz. Bu süre zarfında, başvuran bir hemşire yardımcısı olarak çalışabilir ve gerekli eğitime katılabilir.'
                          : isGerman 
                          ? 'Falls Ihre Qualifikation nicht vollständig anerkannt wird, können Sie einen Anpassungslehrgang in Deutschland absolvieren. Während dieser Zeit kann der Antragsteller als Pflegehilfskraft arbeiten und an der erforderlichen Ausbildung teilnehmen.'
                          : 'If your qualification is not fully recognized, you can complete an adaptation course in Germany. During this time, the applicant can work as a nursing assistant and participate in the required training.'
                        }
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                      <h4 className="font-semibold mb-3 text-lg">
                        {isTurkish 
                          ? 'Ailem benimle Almanya\'ya gelebilir mi?' 
                          : isGerman 
                          ? 'Kann meine Familie mit mir nach Deutschland kommen?' 
                          : 'Can my family come to Germany with me?'
                        }
                      </h4>
                      <p className="text-base leading-relaxed">
                        {isTurkish 
                          ? 'Belirli koşullar altında, hemşirenin eşi ve küçük çocukları da ona katılabilir. Buna yeterli mali kaynakların ve uygun konutun kanıtı da dahildir.'
                          : isGerman 
                          ? 'Unter bestimmten Bedingungen können der Ehepartner und minderjährige Kinder der Pflegekraft ebenfalls nach Deutschland kommen. Dazu gehört auch der Nachweis ausreichender finanzieller Mittel und einer angemessenen Unterkunft.'
                          : 'Under certain conditions, the nurse\'s spouse and minor children can also join them. This includes proof of sufficient financial resources and appropriate accommodation.'
                        }
                      </p>
                    </div>
                    
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                      <h4 className="font-semibold mb-3 text-lg text-blue-800 dark:text-blue-200">
                        {isTurkish 
                          ? 'Hemşirelik Vizesi Başvuru Süreci' 
                          : isGerman 
                          ? 'Bewerbungsprozess für das Pflegevisa' 
                          : 'Nursing Visa Application Process'
                        }
                      </h4>
                      <ol className="list-decimal pl-6 space-y-2">
                        <li>
                          <strong>{isTurkish ? 'İş teklifi alma:' : isGerman ? 'Stellenangebot erhalten:' : 'Getting a job offer:'}</strong> {' '}
                          {isTurkish 
                            ? 'Öncelikle Almanya\'daki bir huzurevi, hastane veya diğer bakım tesisi ile bir iş sözleşmesi imzalanması gerekmektedir.'
                            : isGerman 
                            ? 'Zunächst muss ein Arbeitsvertrag mit einem Pflegeheim, Krankenhaus oder einer anderen Pflegeeinrichtung in Deutschland unterzeichnet werden.'
                            : 'First, an employment contract must be signed with a nursing home, hospital or other care facility in Germany.'
                          }
                        </li>
                        <li>
                          <strong>{isTurkish ? 'Niteliklerin tanınması:' : isGerman ? 'Anerkennung der Qualifikationen:' : 'Recognition of qualifications:'}</strong> {' '}
                          {isTurkish 
                            ? 'Başvuru sahibi, hemşirelik yeterliliğinin tanındığına veya tanınma için daha fazla eğitim gerektiğine dair kanıt sunmalıdır.'
                            : isGerman 
                            ? 'Der Antragsteller muss Nachweise erbringen, dass seine Pflegequalifikation anerkannt ist oder dass weitere Ausbildung für die Anerkennung erforderlich ist.'
                            : 'The applicant must provide evidence that their nursing qualification is recognized or that further training is required for recognition.'
                          }
                        </li>
                        <li>
                          <strong>{isTurkish ? 'Vize başvurusu:' : isGerman ? 'Visa-Antrag:' : 'Visa application:'}</strong> {' '}
                          {isTurkish 
                            ? 'Vize başvurusu, başvuranın ülkesindeki Alman büyükelçiliğine veya konsolosluğuna sunulmalıdır.'
                            : isGerman 
                            ? 'Der Visa-Antrag muss bei der deutschen Botschaft oder dem Konsulat im Land des Antragstellers eingereicht werden.'
                            : 'The visa application must be submitted to the German embassy or consulate in the applicant\'s country.'
                          }
                        </li>
                      </ol>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <p className="text-base leading-relaxed mb-6">
                    {isTurkish 
                      ? 'Şimdiye kadar 500\'den fazla sağlık profesyonelinin Almanya\'da kariyer kurmasına yardımcı olduk.'
                      : isGerman 
                      ? 'Wir haben bisher mehr als 500 Gesundheitsfachkräften geholfen, eine Karriere in Deutschland aufzubauen.'
                      : 'We have helped more than 500 healthcare professionals build careers in Germany so far.'
                    }
                  </p>
                  
                  <blockquote className="border-l-4 border-green-500 pl-4 italic my-6 bg-green-50 dark:bg-green-900/20 p-4 rounded-r-lg">
                    {isTurkish 
                      ? '"ZOV Personal ile çalışmak, Almanya\'ya yerleşme sürecimde en doğru kararlardan biriydi. Profesyonel yaklaşımları sayesinde her şey çok daha kolay oldu."'
                      : isGerman 
                      ? '"Die Zusammenarbeit mit ZOV Personal war eine der besten Entscheidungen in meinem Prozess der Niederlassung in Deutschland. Dank ihres professionellen Ansatzes wurde alles viel einfacher."'
                      : '"Working with ZOV Personal was one of the best decisions in my process of settling in Germany. Everything became much easier thanks to their professional approach."'
                    }
                  </blockquote>
                  
                  <div className="grid md:grid-cols-3 gap-4 my-6">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">95%</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        {isTurkish ? 'Başarı oranı' : isGerman ? 'Erfolgsquote' : 'Success rate'}
                      </div>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-green-600 dark:text-green-400">8</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        {isTurkish ? 'Ortalama ay süre' : isGerman ? 'Durchschnittliche Dauer (Monate)' : 'Average months duration'}
                      </div>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">500+</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        {isTurkish ? 'Başarılı yerleştirme' : isGerman ? 'Erfolgreiche Vermittlungen' : 'Successful placements'}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-base leading-relaxed">
                    {isTurkish 
                      ? 'Müşteri memnuniyeti bizim için öncelik ve her zaman en iyi hizmeti sunmaya odaklanıyoruz.'
                      : isGerman 
                      ? 'Kundenzufriedenheit ist unsere Priorität und wir konzentrieren uns immer darauf, den besten Service zu bieten.'
                      : 'Customer satisfaction is our priority and we always focus on providing the best service.'
                    }
                  </p>
                </>
              )}
            </section>
        
          </div>
          <div className="order-1 flex h-fit flex-col text-sm lg:sticky lg:top-8 lg:order-none lg:col-span-3 lg:col-start-10 lg:text-xs">
            <div className="order-3 lg:order-none">
              <span className="text-xs font-medium">
                {isTurkish ? 'BU SAYFADA' : isGerman ? 'AUF DIESER SEITE' : 'ON THIS PAGE'}
              </span>
              <nav className="mt-2 lg:mt-4">
                <ul className="space-y-2">
                  <li>
                    <a href="#section1" className="block py-2 transition-colors duration-200 text-muted-foreground lg:text-primary hover:text-primary">
                      {slug === 'nurse' 
                        ? (isTurkish ? 'Hemşirelik Vizesi Nedir?' : isGerman ? 'Was ist ein Pflegevisa?' : 'What is a Nursing Visa?')
                        : (isTurkish ? 'Hizmet Detayları ve Süreç' : isGerman ? 'Service-Details und Prozess' : 'Service Details and Process')
                      }
                    </a>
                  </li>
                  <li>
                    <a href="#section2" className="block py-2 transition-colors duration-200 text-muted-foreground hover:text-primary">
                      {slug === 'nurse' 
                        ? (isTurkish ? 'Hemşirelik Vizesi için Gereklilikler' : isGerman ? 'Anforderungen für das Pflegevisa' : 'Requirements for Nursing Visa')
                        : (isTurkish ? 'Gerekli Belgeler ve Süreç Adımları' : isGerman ? 'Erforderliche Dokumente und Prozessschritte' : 'Required Documents and Process Steps')
                      }
                    </a>
                  </li>
                  <li>
                    <a href="#section3" className="block py-2 transition-colors duration-200 text-muted-foreground hover:text-primary">
                      {slug === 'nurse' 
                        ? (isTurkish ? 'Sık Sorulan Sorular' : isGerman ? 'Häufig gestellte Fragen' : 'Frequently Asked Questions')
                        : (isTurkish ? 'Başarı Hikayeleri ve İstatistikler' : isGerman ? 'Erfolgsgeschichten und Statistiken' : 'Success Stories and Statistics')
                      }
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            
            <div data-orientation="horizontal" role="none" data-slot="separator-root" className="bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px order-2 mb-11 mt-8 lg:hidden"></div>
            
            <div className="order-1 flex flex-col gap-2 lg:order-none lg:mt-9">
              <p className="text-muted-foreground font-medium">
                {isTurkish ? 'Bu makaleyi paylaş:' : isGerman ? 'Diesen Artikel teilen:' : 'Share this article:'}
              </p>
              <ul className="flex gap-2">
                <li>
                  <button data-slot="button" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80 size-9 group rounded-full">
                    <a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook fill-muted-foreground text-muted-foreground group-hover:fill-primary group-hover:text-primary h-4 w-4 transition-colors" aria-hidden="true">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                  </button>
                </li>
                <li>
                  <button data-slot="button" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80 size-9 group rounded-full">
                    <a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin fill-muted-foreground text-muted-foreground group-hover:fill-primary group-hover:text-primary h-4 w-4 transition-colors" aria-hidden="true">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect width="4" height="12" x="2" y="9"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                  </button>
                </li>
                <li>
                  <button data-slot="button" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80 size-9 group rounded-full">
                    <a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter fill-muted-foreground text-muted-foreground group-hover:fill-primary group-hover:text-primary h-4 w-4 transition-colors" aria-hidden="true">
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                    </a>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
