// app/[locale]/profession-process/[slug]/page.tsx
'use client';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Profession data mapping
const professionData = {
  doctor: {
    title: "Doktorlar için Almanya Süreci",
    titleEn: "Germany Process for Doctors",
    titleDe: "Deutschland Prozess für Ärzte",
    description: "Almanya'da doktor olarak çalışmak isteyen tıp mezunları için kapsamlı süreç rehberliği ve yönetimi sunuyoruz.",
    descriptionEn: "Comprehensive process guidance and management for medical graduates who want to work as doctors in Germany.",
    descriptionDe: "Umfassende Prozessberatung und -management für Medizinabsolventen, die als Ärzte in Deutschland arbeiten möchten.",
    image: "/doctor.png",
    author: "Dr. Busra Oz",
    authorEn: "Dr. Busra Oz",
    authorDe: "Dr. Busra Oz",
    date: "2 gün önce",
    dateEn: "2 days ago",
    dateDe: "vor 2 Tagen"
  },
  nurse: {
    title: "Hemşirelik Süreci",
    titleEn: "Nursing Process",
    titleDe: "Pflegeprozess",
    description: "Almanya'da hemşire olarak çalışmak isteyen profesyoneller için kapsamlı süreç rehberliği ve yönetimi sunuyoruz.",
    descriptionEn: "Comprehensive process guidance and management for professionals who want to work as nurses in Germany.",
    descriptionDe: "Umfassende Prozessberatung und -management für Fachkräfte, die als Krankenschwestern in Deutschland arbeiten möchten.",
    image: "/nurse.png",
    author: "Hemşire Ayşe Yılmaz",
    authorEn: "Nurse Ayşe Yılmaz",
    authorDe: "Krankenschwester Ayşe Yılmaz",
    date: "3 gün önce",
    dateEn: "3 days ago",
    dateDe: "vor 3 Tagen"
  },
  caregiver: {
    title: "Bakıcılar ve Yaşlı Bakım Uzmanları Süreci",
    titleEn: "Caregivers and Elderly Care Specialists Process",
    titleDe: "Prozess für Betreuer und Altenpflege-Spezialisten",
    description: "Yaşlı bakım sektöründe çalışmak isteyen profesyoneller için kapsamlı süreç danışmanlığı.",
    descriptionEn: "Comprehensive process consultancy for professionals who want to work in the elderly care sector.",
    descriptionDe: "Umfassende Prozessberatung für Fachkräfte, die im Altenpflegebereich arbeiten möchten.",
    image: "/hastabakıcı.png",
    author: "Bakım Uzmanı Fatma Demir",
    authorEn: "Care Specialist Fatma Demir",
    authorDe: "Pflegespezialistin Fatma Demir",
    date: "1 hafta önce",
    dateEn: "1 week ago",
    dateDe: "vor 1 Woche"
  },
  "health-technician": {
    title: "Sağlık Teknisyenleri ve Yardımcı Personel Süreci",
    titleEn: "Health Technicians and Support Staff Process",
    titleDe: "Prozess für Gesundheitstechniker und Hilfspersonal",
    description: "Tıbbi teknisyen, laboratuvar uzmanı ve diğer sağlık yardımcı personeli için Almanya süreçleri.",
    descriptionEn: "Germany processes for medical technicians, laboratory specialists and other health auxiliary personnel.",
    descriptionDe: "Deutschland-Prozesse für Medizintechniker, Laborspezialisten und anderes Gesundheitshilfspersonal.",
    image: "/saglıkteknik.webp",
    author: "Lab Uzmanı Ali Kaya",
    authorEn: "Lab Specialist Ali Kaya",
    authorDe: "Laborspezialist Ali Kaya",
    date: "5 gün önce",
    dateEn: "5 days ago",
    dateDe: "vor 5 Tagen"
  },
  therapist: {
    title: "Sağlık Uzmanları ve Terapistler Süreci",
    titleEn: "Health Specialists and Therapists Process",
    titleDe: "Prozess für Gesundheitsspezialisten und Therapeuten",
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
  },
  "health-expert": {
    title: "Sağlık Uzmanları ve Terapistler Süreci",
    titleEn: "Health Specialists and Therapists Process",
    titleDe: "Prozess für Gesundheitsspezialisten und Therapeuten",
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
  },
  // Yeni Meslek Kategorileri
  construction: {
    title: "İnşaat ve Yapı Sektörü Uzmanları Süreci",
    titleEn: "Construction and Building Industry Specialists Process",
    titleDe: "Prozess für Bau- und Bauwirtschaftsspezialisten",
    description: "İnşaat sektöründe çalışmak isteyen usta, tekniker ve mühendisler için kapsamlı süreç rehberliği.",
    descriptionEn: "Comprehensive process guidance for masters, technicians and engineers who want to work in the construction sector.",
    descriptionDe: "Umfassende Prozessberatung für Meister, Techniker und Ingenieure, die im Bausektor arbeiten möchten.",
    image: "/insaat.png",
    author: "İnş. Müh. Mehmet Çelik",
    authorEn: "Civil Eng. Mehmet Çelik",
    authorDe: "Bauingenieur Mehmet Çelik",
    date: "1 gün önce",
    dateEn: "1 day ago",
    dateDe: "vor 1 Tag"
  },
  hospitality: {
    title: "Otelcilik ve Turizm Sektörü Süreci",
    titleEn: "Hotel and Tourism Industry Process",
    titleDe: "Prozess für Hotel- und Tourismusbranche",
    description: "Otel, restoran ve turizm sektöründe çalışmak isteyen profesyoneller için süreç danışmanlığı.",
    descriptionEn: "Process consultancy for professionals who want to work in the hotel, restaurant and tourism sector.",
    descriptionDe: "Prozessberatung für Fachkräfte, die im Hotel-, Restaurant- und Tourismussektor arbeiten möchten.",
    image: "/ekip.png",
    author: "Otel Uzmanı Ayşen Yıldız",
    authorEn: "Hotel Specialist Ayşen Yıldız",
    authorDe: "Hotel-Spezialist Ayşen Yıldız",
    date: "3 gün önce",
    dateEn: "3 days ago",
    dateDe: "vor 3 Tagen"
  },
  logistics: {
    title: "Lojistik ve Ulaştırma Sektörü Süreci",
    titleEn: "Logistics and Transportation Industry Process",
    titleDe: "Prozess für Logistik- und Transportbranche",
    description: "Lojistik, kargo ve ulaştırma sektöründe çalışmak isteyen profesyoneller için süreçler.",
    descriptionEn: "Processes for professionals who want to work in logistics, cargo and transportation sector.",
    descriptionDe: "Verfahren für Fachkräfte, die im Logistik-, Fracht- und Transportsektor arbeiten möchten.",
    image: "/almanya.png",
    author: "Lojistik Uzmanı Kemal Arslan",
    authorEn: "Logistics Specialist Kemal Arslan",
    authorDe: "Logistik-Spezialist Kemal Arslan",
    date: "2 gün önce",
    dateEn: "2 days ago",
    dateDe: "vor 2 Tagen"
  },
  cleaning: {
    title: "Temizlik ve Bakım Hizmetleri Süreci",
    titleEn: "Cleaning and Maintenance Services Process",
    titleDe: "Prozess für Reinigungs- und Wartungsdienste",
    description: "Temizlik, bahçıvanlık ve bakım hizmetleri sektöründe çalışmak isteyenler için süreç rehberliği.",
    descriptionEn: "Process guidance for those who want to work in cleaning, gardening and maintenance services sector.",
    descriptionDe: "Prozessberatung für diejenigen, die im Bereich Reinigung, Gartenbau und Wartungsdienste arbeiten möchten.",
    image: "/zovpersonal.png",
    author: "Hizmet Uzmanı Emine Kaya",
    authorEn: "Service Specialist Emine Kaya",
    authorDe: "Service-Spezialist Emine Kaya",
    date: "4 gün önce",
    dateEn: "4 days ago",
    dateDe: "vor 4 Tagen"
  },
  office: {
    title: "Ofis İşleri ve İdari Personel Süreci",
    titleEn: "Office Work and Administrative Staff Process",
    titleDe: "Prozess für Büroarbeit und Verwaltungspersonal",
    description: "Büro işleri, muhasebe ve idari pozisyonlarda çalışmak isteyen profesyoneller için süreç danışmanlığı.",
    descriptionEn: "Process consultancy for professionals who want to work in office work, accounting and administrative positions.",
    descriptionDe: "Prozessberatung für Fachkräfte, die in Büroarbeit, Buchhaltung und Verwaltungspositionen arbeiten möchten.",
    image: "/is-alim-onei.png",
    author: "İdari Uzman Selma Öztürk",
    authorEn: "Administrative Specialist Selma Öztürk",
    authorDe: "Verwaltungsspezialist Selma Öztürk",
    date: "6 gün önce",
    dateEn: "6 days ago",
    dateDe: "vor 6 Tagen"
  },
  others: {
    title: "Diğer Meslek Grupları Süreci",
    titleEn: "Other Professional Groups Process",
    titleDe: "Prozess für Andere Berufsgruppen",
    description: "Listelenmemiş diğer meslek dallarında çalışmak isteyen profesyoneller için özel süreç danışmanlığı.",
    descriptionEn: "Special process consultancy for professionals who want to work in other unlisted professions.",
    descriptionDe: "Spezielle Prozessberatung für Fachkräfte, die in anderen nicht aufgeführten Berufen arbeiten möchten.",
    image: "/zovpersonaltwo.png",
    author: "Genel Uzman Ahmet Şahin",
    authorEn: "General Specialist Ahmet Şahin",
    authorDe: "Allgemeinspezialist Ahmet Şahin",
    date: "1 hafta önce",
    dateEn: "1 week ago",
    dateDe: "vor 1 Woche"
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
                  ? (isTurkish ? 'Hemşirelik Süreci Nedir?' : isGerman ? 'Was ist ein Pflegeprozess?' : 'What is a Nursing Process?')
                  : slug === 'doctor'
                  ? (isTurkish ? 'Hekim Süreci Nedir?' : isGerman ? 'Was ist ein Arztprozess?' : 'What is a Doctor Process?')
                  : slug === 'physiotherapist'
                  ? (isTurkish ? 'Fizyoterapist Süreci Nedir?' : isGerman ? 'Was ist ein Physiotherapeuten-Prozess?' : 'What is a Physiotherapist Process?')
                  : slug === 'healthtech'
                  ? (isTurkish ? 'Sağlık Teknisyeni Süreci Nedir?' : isGerman ? 'Was ist ein Gesundheitstechniker-Prozess?' : 'What is a Health Technician Process?')
                  : slug === 'construction'
                  ? (isTurkish ? 'İnşaat Sektörü Çalışma Süreci Nedir?' : isGerman ? 'Was ist ein Bausektor-Arbeitsprozess?' : 'What is a Construction Sector Work Process?')
                  : slug === 'caregiver'
                  ? (isTurkish ? 'Bakıcı Süreci Nedir?' : isGerman ? 'Was ist ein Betreuervorgang?' : 'What is a Caregiver Process?')
                  : slug === 'health-technician'
                  ? (isTurkish ? 'Sağlık Teknisyeni Süreci Nedir?' : isGerman ? 'Was ist ein Gesundheitstechniker-Prozess?' : 'What is a Health Technician Process?')
                  : (slug === 'therapist' || slug === 'health-expert')
                  ? (isTurkish ? 'Sağlık Uzmanı Süreci Nedir?' : isGerman ? 'Was ist ein Gesundheitsspezialist-Prozess?' : 'What is a Health Specialist Process?')
                  : slug === 'hospitality'
                  ? (isTurkish ? 'Otelcilik ve Turizm Süreci Nedir?' : isGerman ? 'Was ist ein Hotel- und Tourismus-Arbeitsprozess?' : 'What is a Hospitality and Tourism Work Process?')
                  : slug === 'logistics'
                  ? (isTurkish ? 'Lojistik ve Ulaştırma Süreci Nedir?' : isGerman ? 'Was ist ein Logistik- und Transport-Arbeitsprozess?' : 'What is a Logistics and Transportation Work Process?')
                  : slug === 'cleaning'
                  ? (isTurkish ? 'Temizlik ve Bakım Hizmetleri Süreci Nedir?' : isGerman ? 'Was ist ein Reinigungs- und Wartungsdienst-Arbeitsprozess?' : 'What is a Cleaning and Maintenance Services Work Process?')
                  : slug === 'office'
                  ? (isTurkish ? 'Ofis İşleri Çalışma Süreci Nedir?' : isGerman ? 'Was ist ein Büroarbeits-Arbeitsprozess?' : 'What is an Office Work Process?')
                  : slug === 'others'
                  ? (isTurkish ? 'Diğer Meslek Grupları Süreci Nedir?' : isGerman ? 'Was ist ein Arbeitsprozess für andere Berufsgruppen?' : 'What is a Work Process for Other Professional Groups?')
                  : (isTurkish ? 'Hizmet Detayları ve Süreç' : isGerman ? 'Service-Details und Prozess' : 'Service Details and Process')
                }
              </h2>
              
              {slug === 'nurse' ? (
                <>
                  <p className="text-base leading-relaxed mb-6">
                    {isTurkish 
                      ? 'Hemşirelik süreci, Almanya\'da çalışmak isteyen hemşirelik alanındaki profesyonellere yöneliktir. Nitelikli hemşirelik personeline olan talep Almanya\'da özellikle yüksektir, bu nedenle yabancı hemşirelik personelinin girişini ve istihdamını kolaylaştırmak için özel düzenlemeler ve basitleştirmeler getirilmiştir.'
                      : isGerman 
                      ? 'Das Pflegeprozess richtet sich an Fachkräfte im Pflegebereich, die in Deutschland arbeiten möchten. Die Nachfrage nach qualifiziertem Pflegepersonal ist in Deutschland besonders hoch, daher wurden spezielle Regelungen und Vereinfachungen eingeführt, um die Einreise und Beschäftigung ausländischer Pflegekräfte zu erleichtern.'
                      : 'The nursing process is aimed at professionals in the nursing field who want to work in Germany. The demand for qualified nursing staff is particularly high in Germany, therefore special regulations and simplifications have been introduced to facilitate the entry and employment of foreign nursing personnel.'
                    }
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-3 mt-8">
                    {isTurkish ? 'Hemşirelik Sürecinin Faydaları' : isGerman ? 'Vorteile des Pflegeprozesses' : 'Benefits of the Nursing Process'}
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
              ) : slug === 'doctor' ? (
                <>
                  <p className="text-base leading-relaxed mb-6">
                    {isTurkish 
                      ? 'Hekim süreci, Almanya\'da doktor olarak çalışmak isteyen tıp fakültesi mezunları için özel olarak tasarlanmıştır. Almanya\'da doktor açığı nedeniyle, yabancı hekimlerin girişini ve istihdamını kolaylaştıran özel düzenlemeler bulunmaktadır.'
                      : isGerman 
                      ? 'Das Arztprozess ist speziell für Medizinabsolventen gedacht, die als Ärzte in Deutschland arbeiten möchten. Aufgrund des Ärztemangels in Deutschland gibt es spezielle Regelungen, die die Einreise und Beschäftigung ausländischer Ärzte erleichtern.'
                      : 'The doctor process is specially designed for medical school graduates who want to work as doctors in Germany. Due to the shortage of doctors in Germany, there are special regulations that facilitate the entry and employment of foreign doctors.'
                    }
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-3 mt-8">
                    {isTurkish ? 'Hekim Sürecinin Faydaları' : isGerman ? 'Vorteile des Arztprozesses' : 'Benefits of the Doctor Process'}
                  </h3>
                  
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>
                      <strong>{isTurkish ? 'Yüksek talep:' : isGerman ? 'Hohe Nachfrage:' : 'High demand:'}</strong> {' '}
                      {isTurkish 
                        ? 'Almanya\'da doktor açığı nedeniyle, nitelikli hekimlere olan talep çok yüksektir.'
                        : isGerman 
                        ? 'Aufgrund des Ärztemangels in Deutschland ist die Nachfrage nach qualifizierten Ärzten sehr hoch.'
                        : 'Due to the shortage of doctors in Germany, the demand for qualified doctors is very high.'
                      }
                    </li>
                    <li>
                      <strong>{isTurkish ? 'Mükemmel çalışma koşulları:' : isGerman ? 'Ausgezeichnete Arbeitsbedingungen:' : 'Excellent working conditions:'}</strong> {' '}
                      {isTurkish 
                        ? 'Modern hastaneler, gelişmiş teknoloji ve yüksek standartlarda sağlık hizmetleri.'
                        : isGerman 
                        ? 'Moderne Krankenhäuser, fortschrittliche Technologie und hochwertige Gesundheitsdienste.'
                        : 'Modern hospitals, advanced technology and high-quality healthcare services.'
                      }
                    </li>
                    <li>
                      <strong>{isTurkish ? 'Sürekli eğitim fırsatları:' : isGerman ? 'Kontinuierliche Bildungsmöglichkeiten:' : 'Continuous education opportunities:'}</strong> {' '}
                      {isTurkish 
                        ? 'Almanya\'da tıp alanında sürekli gelişim ve uzmanlık eğitimi imkanları bulunmaktadır.'
                        : isGerman 
                        ? 'In Deutschland gibt es Möglichkeiten zur kontinuierlichen Entwicklung und Spezialisierung im medizinischen Bereich.'
                        : 'In Germany, there are opportunities for continuous development and specialization in the medical field.'
                      }
                    </li>
                  </ul>
                </>
              ) : slug === 'construction' ? (
                <>
                  <p className="text-base leading-relaxed mb-6">
                    {isTurkish 
                      ? 'İnşaat sektöründe çalışma süreci, Almanya\'da inşaat sektöründe çalışmak isteyen usta, tekniker, mimar ve mühendisler için özel olarak tasarlanmıştır. Almanya\'da inşaat sektöründe nitelikli işgücüne olan yüksek talep, yabancı uzmanların bu sektöre girişini kolaylaştıran özel düzenlemeleri beraberinde getirmiştir.'
                      : isGerman 
                      ? 'Das Bausektor-Arbeitsprozess ist speziell für Meister, Techniker, Architekten und Ingenieure gedacht, die in der deutschen Baubranche arbeiten möchten. Die hohe Nachfrage nach qualifizierten Arbeitskräften im deutschen Bausektor hat spezielle Regelungen mit sich gebracht, die den Eintritt ausländischer Experten in diesen Sektor erleichtern.'
                      : 'The construction sector work process is specially designed for masters, technicians, architects and engineers who want to work in the German construction sector. The high demand for qualified labor in the German construction sector has brought about special regulations that facilitate the entry of foreign experts into this sector.'
                    }
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-3 mt-8">
                    {isTurkish ? 'İnşaat Sektörü Çalışma Sürecinin Faydaları' : isGerman ? 'Vorteile des Bausektor-Arbeitsprozesses' : 'Benefits of the Construction Sector Work Process'}
                  </h3>
                  
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>
                      <strong>{isTurkish ? 'Geniş iş imkanları:' : isGerman ? 'Breite Arbeitsmöglichkeiten:' : 'Wide job opportunities:'}</strong> {' '}
                      {isTurkish 
                        ? 'İnşaat, yol yapımı, altyapı projeleri, konut ve ticari bina yapımı gibi çeşitli alanlarda iş fırsatları bulabilirsiniz.'
                        : isGerman 
                        ? 'Sie können Arbeitsmöglichkeiten in verschiedenen Bereichen wie Bau, Straßenbau, Infrastrukturprojekte, Wohn- und Gewerbebau finden.'
                        : 'You can find job opportunities in various fields such as construction, road construction, infrastructure projects, residential and commercial building construction.'
                      }
                    </li>
                    <li>
                      <strong>{isTurkish ? 'Yüksek maaş standartları:' : isGerman ? 'Hohe Gehaltsstandards:' : 'High salary standards:'}</strong> {' '}
                      {isTurkish 
                        ? 'Almanya\'da inşaat sektöründe çalışan profesyoneller rekabetçi maaşlar ve sosyal güvenceler alırlar.'
                        : isGerman 
                        ? 'Fachkräfte in der deutschen Baubranche erhalten wettbewerbsfähige Gehälter und Sozialleistungen.'
                        : 'Professionals working in the German construction sector receive competitive salaries and social benefits.'
                      }
                    </li>
                    <li>
                      <strong>{isTurkish ? 'Kariyer gelişimi:' : isGerman ? 'Berufliche Entwicklung:' : 'Career development:'}</strong> {' '}
                      {isTurkish 
                        ? 'Modern teknolojiler ve yenilikçi inşaat yöntemleri ile tanışarak profesyonel becerilerinizi geliştirebilirsiniz.'
                        : isGerman 
                        ? 'Sie können Ihre professionellen Fähigkeiten durch moderne Technologien und innovative Baumethoden weiterentwickeln.'
                        : 'You can develop your professional skills by becoming familiar with modern technologies and innovative construction methods.'
                      }
                    </li>
                  </ul>
                </>
              ) : slug === 'hospitality' ? (
                <>
                  <p className="text-base leading-relaxed mb-6">
                    {isTurkish 
                      ? 'Otelcilik ve turizm süreci, Almanya\'da otel, restoran, turizm ve misafirperverlik sektöründe çalışmak isteyen profesyoneller için özel olarak tasarlanmıştır. Almanya\'nın turizm ve hizmet sektöründeki gelişimi ile bu alandaki personel ihtiyacı sürekli artmaktadır.'
                      : isGerman 
                      ? 'Das Hotel- und Tourismus-Arbeitsprozess ist speziell für Fachkräfte gedacht, die im Hotel-, Restaurant-, Tourismus- und Gastgewerbesektor in Deutschland arbeiten möchten. Mit der Entwicklung des Tourismus- und Dienstleistungssektors in Deutschland steigt der Personalbedarf in diesem Bereich kontinuierlich.'
                      : 'The hospitality and tourism work process is specially designed for professionals who want to work in the hotel, restaurant, tourism and hospitality sector in Germany. With the development of the tourism and service sector in Germany, the personnel need in this field is constantly increasing.'
                    }
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-3 mt-8">
                    {isTurkish ? 'Otelcilik ve Turizm Sürecinin Faydaları' : isGerman ? 'Vorteile des Hotel- und Tourismus-Arbeitsprozesses' : 'Benefits of the Hospitality and Tourism Work Process'}
                  </h3>
                  
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>
                      <strong>{isTurkish ? 'Çeşitli kariyer fırsatları:' : isGerman ? 'Vielfältige Karrieremöglichkeiten:' : 'Diverse career opportunities:'}</strong> {' '}
                      {isTurkish 
                        ? 'Otel yönetimi, mutfak, servis, etkinlik organizasyonu ve turist rehberliği gibi farklı alanlarda çalışabilirsiniz.'
                        : isGerman 
                        ? 'Sie können in verschiedenen Bereichen wie Hotelmanagement, Küche, Service, Eventorganisation und Tourismusführung arbeiten.'
                        : 'You can work in different areas such as hotel management, kitchen, service, event organization and tourism guidance.'
                      }
                    </li>
                    <li>
                      <strong>{isTurkish ? 'Uluslararası deneyim:' : isGerman ? 'Internationale Erfahrung:' : 'International experience:'}</strong> {' '}
                      {isTurkish 
                        ? 'Dünya çapında misafirlerle çalışarak uluslararası deneyim kazanabilir ve dil becerilerinizi geliştirebilirsiniz.'
                        : isGerman 
                        ? 'Sie können internationale Erfahrungen sammeln und Ihre Sprachkenntnisse durch die Arbeit mit Gästen aus aller Welt verbessern.'
                        : 'You can gain international experience and improve your language skills by working with guests from around the world.'
                      }
                    </li>
                    <li>
                      <strong>{isTurkish ? 'Esnek çalışma ortamı:' : isGerman ? 'Flexibles Arbeitsumfeld:' : 'Flexible working environment:'}</strong> {' '}
                      {isTurkish 
                        ? 'Turizm sektörü mevsimsel ve esnek çalışma imkanları sunar, part-time veya tam-time seçenekleri mevcuttur.'
                        : isGerman 
                        ? 'Der Tourismussektor bietet saisonale und flexible Arbeitsmöglichkeiten, Part-time oder Vollzeit-Optionen sind verfügbar.'
                        : 'The tourism sector offers seasonal and flexible working opportunities, part-time or full-time options are available.'
                      }
                    </li>
                  </ul>
                </>
              ) : slug === 'logistics' ? (
                <>
                  <p className="text-base leading-relaxed mb-6">
                    {isTurkish 
                      ? 'Lojistik ve ulaştırma süreci, Almanya\'da lojistik, kargo, nakliye ve ulaştırma sektöründe çalışmak isteyen profesyoneller için özel olarak tasarlanmıştır. Almanya\'nın Avrupa\'nın lojistik merkezi konumunda olması, bu sektörde sürekli artan iş imkanları yaratmaktadır.'
                      : isGerman 
                      ? 'Das Logistik- und Transport-Arbeitsprozess ist speziell für Fachkräfte gedacht, die im Logistik-, Fracht-, Transport- und Speditionssektor in Deutschland arbeiten möchten. Deutschlands Position als Logistikzentrum Europas schafft kontinuierlich steigende Arbeitsmöglichkeiten in diesem Sektor.'
                      : 'The logistics and transportation work process is specially designed for professionals who want to work in the logistics, cargo, freight and transportation sector in Germany. Germany\'s position as the logistics center of Europe creates continuously increasing job opportunities in this sector.'
                    }
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-3 mt-8">
                    {isTurkish ? 'Lojistik ve Ulaştırma Sürecinin Faydaları' : isGerman ? 'Vorteile des Logistik- und Transport-Arbeitsprozesses' : 'Benefits of the Logistics and Transportation Work Process'}
                  </h3>
                  
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>
                      <strong>{isTurkish ? 'Stratejik lokasyon avantajı:' : isGerman ? 'Strategischer Standortvorteil:' : 'Strategic location advantage:'}</strong> {' '}
                      {isTurkish 
                        ? 'Almanya\'nın Avrupa\'nın merkezinde konumlanması, lojistik sektöründe büyük avantajlar sağlar.'
                        : isGerman 
                        ? 'Deutschlands Lage im Zentrum Europas bietet große Vorteile im Logistiksektor.'
                        : 'Germany\'s location in the center of Europe provides great advantages in the logistics sector.'
                      }
                    </li>
                    <li>
                      <strong>{isTurkish ? 'Modern altyapı:' : isGerman ? 'Moderne Infrastruktur:' : 'Modern infrastructure:'}</strong> {' '}
                      {isTurkish 
                        ? 'Gelişmiş otoyol ağı, limanlar, havaalanları ve demiryolu sistemi ile çalışma fırsatları.'
                        : isGerman 
                        ? 'Arbeitsmöglichkeiten mit entwickelten Autobahnnetzen, Häfen, Flughäfen und Eisenbahnsystemen.'
                        : 'Work opportunities with developed highway networks, ports, airports and railway systems.'
                      }
                    </li>
                    <li>
                      <strong>{isTurkish ? 'Teknoloji entegrasyonu:' : isGerman ? 'Technologieintegration:' : 'Technology integration:'}</strong> {' '}
                      {isTurkish 
                        ? 'Dijital lojistik çözümleri ve otomasyon sistemleri ile modern çalışma ortamı.'
                        : isGerman 
                        ? 'Modernes Arbeitsumfeld mit digitalen Logistiklösungen und Automatisierungssystemen.'
                        : 'Modern working environment with digital logistics solutions and automation systems.'
                      }
                    </li>
                  </ul>
                </>
              ) : slug === 'cleaning' ? (
                <>
                  <p className="text-base leading-relaxed mb-6">
                    {isTurkish 
                      ? 'Temizlik ve bakım hizmetleri süreci, Almanya\'da temizlik, bahçıvanlık, bakım ve destek hizmetleri sektöründe çalışmak isteyenler için özel olarak tasarlanmıştır. Bu sektör, Almanya\'da istikrarlı iş imkanları ve güvenli çalışma ortamı sunan önemli bir alan olarak öne çıkmaktadır.'
                      : isGerman 
                      ? 'Das Reinigungs- und Wartungsdienst-Arbeitsprozess ist speziell für diejenigen gedacht, die im Bereich Reinigung, Gartenbau, Wartung und Unterstützungsdienste in Deutschland arbeiten möchten. Dieser Sektor zeichnet sich als wichtiger Bereich aus, der stabile Arbeitsmöglichkeiten und ein sicheres Arbeitsumfeld in Deutschland bietet.'
                      : 'The cleaning and maintenance services work process is specially designed for those who want to work in the cleaning, gardening, maintenance and support services sector in Germany. This sector stands out as an important area that offers stable job opportunities and a safe working environment in Germany.'
                    }
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-3 mt-8">
                    {isTurkish ? 'Temizlik ve Bakım Hizmetleri Sürecinin Faydaları' : isGerman ? 'Vorteile des Reinigungs- und Wartungsdienst-Arbeitsprozesses' : 'Benefits of the Cleaning and Maintenance Services Work Process'}
                  </h3>
                  
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>
                      <strong>{isTurkish ? 'İstikrarlı istihdam:' : isGerman ? 'Stabile Beschäftigung:' : 'Stable employment:'}</strong> {' '}
                      {isTurkish 
                        ? 'Temizlik ve bakım hizmetlerine olan sürekli ihtiyaç, istikrarlı iş güvencesi sağlar.'
                        : isGerman 
                        ? 'Der kontinuierliche Bedarf an Reinigungs- und Wartungsdiensten bietet stabile Jobsicherheit.'
                        : 'The continuous need for cleaning and maintenance services provides stable job security.'
                      }
                    </li>
                    <li>
                      <strong>{isTurkish ? 'Çeşitli alan seçenekleri:' : isGerman ? 'Vielfältige Bereichsoptionen:' : 'Diverse field options:'}</strong> {' '}
                      {isTurkish 
                        ? 'Hastaneler, ofisler, okullar, oteller ve konutlar gibi farklı ortamlarda çalışma imkanı.'
                        : isGerman 
                        ? 'Arbeitsmöglichkeiten in verschiedenen Umgebungen wie Krankenhäusern, Büros, Schulen, Hotels und Wohnungen.'
                        : 'Work opportunities in different environments such as hospitals, offices, schools, hotels and residences.'
                      }
                    </li>
                    <li>
                      <strong>{isTurkish ? 'Sosyal güvenceler:' : isGerman ? 'Soziale Absicherung:' : 'Social security:'}</strong> {' '}
                      {isTurkish 
                        ? 'Tam zamanlı pozisyonlarda kapsamlı sosyal güvenceler ve yasal koruma altında çalışma.'
                        : isGerman 
                        ? 'Umfassende Sozialleistungen und Arbeit unter gesetzlichem Schutz bei Vollzeitpositionen.'
                        : 'Comprehensive social benefits and work under legal protection in full-time positions.'
                      }
                    </li>
                  </ul>
                </>
              ) : slug === 'office' ? (
                <>
                  <p className="text-base leading-relaxed mb-6">
                    {isTurkish 
                      ? 'Ofis işleri çalışma süreci, Almanya\'da büro çalışanı, muhasebeci, sekreter, idari personel ve yönetici pozisyonlarında çalışmak isteyen profesyoneller için özel olarak tasarlanmıştır. Almanya\'nın dijitalleşen iş dünyası, bu alanda yeni kariyer fırsatları yaratmaktadır.'
                      : isGerman 
                      ? 'Das Büroarbeits-Arbeitsprozess ist speziell für Fachkräfte gedacht, die in Deutschland als Büroangestellte, Buchhalter, Sekretäre, Verwaltungspersonal und Führungskräfte arbeiten möchten. Deutschlands sich digitalisierende Geschäftswelt schafft neue Karrieremöglichkeiten in diesem Bereich.'
                      : 'The office work process is specially designed for professionals who want to work in Germany as office workers, accountants, secretaries, administrative staff and managers. Germany\'s digitalizing business world creates new career opportunities in this field.'
                    }
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-3 mt-8">
                    {isTurkish ? 'Ofis İşleri Çalışma Sürecinin Faydaları' : isGerman ? 'Vorteile des Büroarbeits-Arbeitsprozesses' : 'Benefits of the Office Work Process'}
                  </h3>
                  
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>
                      <strong>{isTurkish ? 'Dijital dönüşüm fırsatları:' : isGerman ? 'Möglichkeiten der digitalen Transformation:' : 'Digital transformation opportunities:'}</strong> {' '}
                      {isTurkish 
                        ? 'Modern ofis teknolojileri ve dijital iş süreçleri ile tanışarak profesyonel becerilerinizi geliştirin.'
                        : isGerman 
                        ? 'Entwickeln Sie Ihre professionellen Fähigkeiten durch moderne Bürotechnologien und digitale Geschäftsprozesse.'
                        : 'Develop your professional skills by becoming familiar with modern office technologies and digital business processes.'
                      }
                    </li>
                    <li>
                      <strong>{isTurkish ? 'Karriyer ilerlemesi:' : isGerman ? 'Karrierefortschritt:' : 'Career advancement:'}</strong> {' '}
                      {isTurkish 
                        ? 'Almanya\'da şirket hiyerarşisinde yükselme ve yöneticilik pozisyonlarına ulaşma imkanları.'
                        : isGerman 
                        ? 'Möglichkeiten, in der Unternehmenshierarchie in Deutschland aufzusteigen und Führungspositionen zu erreichen.'
                        : 'Opportunities to advance in the corporate hierarchy in Germany and reach management positions.'
                      }
                    </li>
                    <li>
                      <strong>{isTurkish ? 'İş-yaşam dengesi:' : isGerman ? 'Work-Life-Balance:' : 'Work-life balance:'}</strong> {' '}
                      {isTurkish 
                        ? 'Almanya\'nın çalışan dostu politikaları ile sağlıklı iş-yaşam dengesine sahip olun.'
                        : isGerman 
                        ? 'Genießen Sie eine gesunde Work-Life-Balance durch Deutschlands arbeitnehmerfreundliche Richtlinien.'
                        : 'Enjoy a healthy work-life balance through Germany\'s employee-friendly policies.'
                      }
                    </li>
                  </ul>
                </>
              ) : (slug === 'therapist' || slug === 'health-expert') ? (
                <>
                  <p className="text-base leading-relaxed mb-6">
                    {isTurkish 
                      ? 'Terapist süreci, Almanya\'da fizyoterapist, psikolog, diyetisyen, konuşma terapisti ve diğer sağlık uzmanları olarak çalışmak isteyen profesyoneller için özel olarak tasarlanmıştır. Almanya\'da preventif sağlık hizmetlerinin önemi artarken, bu alandaki uzman ihtiyacı da sürekli artmaktadır.'
                      : isGerman 
                      ? 'Das Therapeutenprozess ist speziell für Fachkräfte gedacht, die in Deutschland als Physiotherapeuten, Psychologen, Ernährungsberater, Sprachtherapeuten und andere Gesundheitsspezialisten arbeiten möchten. Während die Bedeutung präventiver Gesundheitsdienste in Deutschland zunimmt, steigt auch der Bedarf an Experten in diesem Bereich kontinuierlich.'
                      : 'The therapist process is specially designed for professionals who want to work in Germany as physiotherapists, psychologists, dietitians, speech therapists and other health specialists. As the importance of preventive health services increases in Germany, the need for experts in this field also continues to increase.'
                    }
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-3 mt-8">
                    {isTurkish ? 'Terapist Sürecinin Faydaları' : isGerman ? 'Vorteile des Therapeutenprozesses' : 'Benefits of the Therapist Process'}
                  </h3>
                  
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>
                      <strong>{isTurkish ? 'Geniş uzmanlık alanları:' : isGerman ? 'Breite Spezialisierungsbereiche:' : 'Wide specialization areas:'}</strong> {' '}
                      {isTurkish 
                        ? 'Fizyoterapi, psikoloji, beslenme, konuşma terapisi ve çok daha fazlası alanda uzmanlaşabilirsiniz.'
                        : isGerman 
                        ? 'Sie können sich in Bereichen wie Physiotherapie, Psychologie, Ernährung, Sprachtherapie und vielen anderen spezialisieren.'
                        : 'You can specialize in areas such as physiotherapy, psychology, nutrition, speech therapy and much more.'
                      }
                    </li>
                    <li>
                      <strong>{isTurkish ? 'Yüksek profesyonel saygınlık:' : isGerman ? 'Hohes berufliches Ansehen:' : 'High professional prestige:'}</strong> {' '}
                      {isTurkish 
                        ? 'Almanya\'da sağlık uzmanları toplumda yüksek saygınlığa sahiptir ve değerli görülür.'
                        : isGerman 
                        ? 'Gesundheitsspezialisten genießen in Deutschland hohes gesellschaftliches Ansehen und werden geschätzt.'
                        : 'Health specialists enjoy high social prestige in Germany and are valued.'
                      }
                    </li>
                    <li>
                      <strong>{isTurkish ? 'Sürekli eğitim imkanları:' : isGerman ? 'Kontinuierliche Weiterbildungsmöglichkeiten:' : 'Continuous education opportunities:'}</strong> {' '}
                      {isTurkish 
                        ? 'En güncel terapi teknikleri ve yöntemleri ile kendinizi sürekli geliştirme fırsatı.'
                        : isGerman 
                        ? 'Möglichkeit zur kontinuierlichen Weiterentwicklung mit den neuesten Therapietechniken und -methoden.'
                        : 'Opportunity for continuous development with the latest therapy techniques and methods.'
                      }
                    </li>
                  </ul>
                </>
              ) : slug === 'health-technician' ? (
                <>
                  <p className="text-base leading-relaxed mb-6">
                    {isTurkish 
                      ? 'Sağlık teknisyeni süreci, Almanya\'da tıbbi teknisyen, laboratuvar uzmanı, radyoloji teknisyeni ve diğer sağlık destek personeli olarak çalışmak isteyen profesyoneller için özel olarak tasarlanmıştır. Almanya\'nın modern sağlık sisteminde teknisyen ve teknik personele olan talep sürekli artmaktadır.'
                      : isGerman 
                      ? 'Das Gesundheitstechnikerprozess ist speziell für Fachkräfte gedacht, die in Deutschland als Medizintechniker, Laborspezialisten, Radiologietechniker und andere Gesundheitsunterstützungspersonal arbeiten möchten. Die Nachfrage nach Technikern und technischem Personal im modernen Gesundheitssystem Deutschlands steigt kontinuierlich.'
                      : 'The health technician process is specially designed for professionals who want to work in Germany as medical technicians, laboratory specialists, radiology technicians and other health support personnel. The demand for technicians and technical personnel in Germany\'s modern health system is continuously increasing.'
                    }
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-3 mt-8">
                    {isTurkish ? 'Sağlık Teknisyeni Sürecinin Faydaları' : isGerman ? 'Vorteile des Gesundheitstechnikerprozesses' : 'Benefits of the Health Technician Process'}
                  </h3>
                  
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>
                      <strong>{isTurkish ? 'İleri teknoloji kullanımı:' : isGerman ? 'Nutzung fortschrittlicher Technologie:' : 'Use of advanced technology:'}</strong> {' '}
                      {isTurkish 
                        ? 'En son tıbbi cihazlar ve teknolojiler ile çalışarak profesyonel deneyiminizi geliştirin.'
                        : isGerman 
                        ? 'Entwickeln Sie Ihre berufliche Erfahrung durch die Arbeit mit den neuesten medizinischen Geräten und Technologien.'
                        : 'Develop your professional experience by working with the latest medical devices and technologies.'
                      }
                    </li>
                    <li>
                      <strong>{isTurkish ? 'Kritik rol:' : isGerman ? 'Kritische Rolle:' : 'Critical role:'}</strong> {' '}
                      {isTurkish 
                        ? 'Sağlık sisteminin vazgeçilmez parçası olarak hasta bakımında önemli rol oynayın.'
                        : isGerman 
                        ? 'Spielen Sie eine wichtige Rolle in der Patientenversorgung als unverzichtbarer Teil des Gesundheitssystems.'
                        : 'Play an important role in patient care as an indispensable part of the healthcare system.'
                      }
                    </li>
                    <li>
                      <strong>{isTurkish ? 'Uzmanlık gelişimi:' : isGerman ? 'Spezialisierungsentwicklung:' : 'Specialization development:'}</strong> {' '}
                      {isTurkish 
                        ? 'Laboratuvar, radyoloji, anestezi teknisyenliği gibi spesifik alanlarda uzmanlaşın.'
                        : isGerman 
                        ? 'Spezialisieren Sie sich in spezifischen Bereichen wie Labor, Radiologie, Anästhesietechnik.'
                        : 'Specialize in specific areas such as laboratory, radiology, anesthesia technology.'
                      }
                    </li>
                  </ul>
                </>
              ) : slug === 'caregiver' ? (
                <>
                  <p className="text-base leading-relaxed mb-6">
                    {isTurkish 
                      ? 'Bakıcı süreci, Almanya\'da yaşlı bakımı, hasta bakımı ve özel bakım hizmetleri alanında çalışmak isteyen profesyoneller için özel olarak tasarlanmıştır. Almanya\'nın yaşlanan nüfusu nedeniyle, nitelikli bakım personeline olan ihtiyaç her geçen gün artmaktadır.'
                      : isGerman 
                      ? 'Das Betreuervorgang ist speziell für Fachkräfte gedacht, die in Deutschland im Bereich Altenpflege, Krankenpflege und spezielle Betreuungsdienste arbeiten möchten. Aufgrund der alternden Bevölkerung Deutschlands steigt der Bedarf an qualifiziertem Pflegepersonal täglich.'
                      : 'The caregiver process is specially designed for professionals who want to work in Germany in elderly care, patient care and special care services. Due to Germany\'s aging population, the need for qualified care personnel is increasing every day.'
                    }
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-3 mt-8">
                    {isTurkish ? 'Bakıcı Sürecinin Faydaları' : isGerman ? 'Vorteile des Betreuervorgangs' : 'Benefits of the Caregiver Process'}
                  </h3>
                  
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>
                      <strong>{isTurkish ? 'Yüksek talep:' : isGerman ? 'Hohe Nachfrage:' : 'High demand:'}</strong> {' '}
                      {isTurkish 
                        ? 'Almanya\'da yaşlanan nüfus nedeniyle bakım personeline olan ihtiyaç sürekli artmaktadır.'
                        : isGerman 
                        ? 'Der Bedarf an Pflegepersonal in Deutschland steigt aufgrund der alternden Bevölkerung kontinuierlich.'
                        : 'The need for care personnel in Germany is continuously increasing due to the aging population.'
                      }
                    </li>
                    <li>
                      <strong>{isTurkish ? 'Anlamlı meslek:' : isGerman ? 'Sinnvoller Beruf:' : 'Meaningful profession:'}</strong> {' '}
                      {isTurkish 
                        ? 'İnsanlara yardım ederek topluma katkı sağlayan ve kişisel tatmin veren bir meslek.'
                        : isGerman 
                        ? 'Ein Beruf, der zur Gesellschaft beiträgt und persönliche Zufriedenheit bietet, indem er Menschen hilft.'
                        : 'A profession that contributes to society and provides personal satisfaction by helping people.'
                      }
                    </li>
                    <li>
                      <strong>{isTurkish ? 'Güvenli istihdam:' : isGerman ? 'Sichere Beschäftigung:' : 'Secure employment:'}</strong> {' '}
                      {isTurkish 
                        ? 'Sağlık sektörünün vazgeçilmez bir parçası olarak uzun vadeli iş güvencesi.'
                        : isGerman 
                        ? 'Langfristige Jobsicherheit als unverzichtbarer Teil des Gesundheitssektors.'
                        : 'Long-term job security as an indispensable part of the healthcare sector.'
                      }
                    </li>
                  </ul>
                </>
              ) : slug === 'others' ? (
                <>
                  <p className="text-base leading-relaxed mb-6">
                    {isTurkish 
                      ? 'Diğer meslek grupları danışmanlığı, yukarıda listelenmemiş özel meslek dallarında çalışmak isteyen profesyoneller için özel çözümler sunmaktadır. Her meslek grubunun kendine özgü gereksinimleri ve süreçleri bulunur, bu nedenle bireysel analiz ve özel danışmanlık hizmeti sağlanmaktadır.'
                      : isGerman 
                      ? 'Die Beratung für andere Berufsgruppen bietet maßgeschneiderte Lösungen für Fachkräfte, die in speziellen Berufen arbeiten möchten, die oben nicht aufgeführt sind. Jede Berufsgruppe hat ihre eigenen spezifischen Anforderungen und Prozesse, daher werden individuelle Analysen und spezielle Beratungsdienste angeboten.'
                      : 'Other professional groups consultancy offers customized solutions for professionals who want to work in special professions not listed above. Each professional group has its own specific requirements and processes, therefore individual analysis and special consultancy services are provided.'
                    }
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-3 mt-8">
                    {isTurkish ? 'Özel Danışmanlık Hizmetinin Faydaları' : isGerman ? 'Vorteile der Spezialberatung' : 'Benefits of Special Consultancy Service'}
                  </h3>
                  
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>
                      <strong>{isTurkish ? 'Bireysel değerlendirme:' : isGerman ? 'Individuelle Bewertung:' : 'Individual assessment:'}</strong> {' '}
                      {isTurkish 
                        ? 'Mesleki geçmişiniz ve hedeflerinize özel olarak tasarlanmış çözümler.'
                        : isGerman 
                        ? 'Maßgeschneiderte Lösungen für Ihren beruflichen Hintergrund und Ihre Ziele.'
                        : 'Customized solutions for your professional background and goals.'
                      }
                    </li>
                    <li>
                      <strong>{isTurkish ? 'Detaylı araştırma:' : isGerman ? 'Detaillierte Recherche:' : 'Detailed research:'}</strong> {' '}
                      {isTurkish 
                        ? 'Mesleğinize özel süreç gereklilikleri ve süreçler hakkında kapsamlı araştırma.'
                        : isGerman 
                        ? 'Umfassende Recherche zu berufsspezifischen Süreç-Anforderungen und Prozessen.'
                        : 'Comprehensive research on profession-specific process requirements and processes.'
                      }
                    </li>
                    <li>
                      <strong>{isTurkish ? 'Esnek çözümler:' : isGerman ? 'Flexible Lösungen:' : 'Flexible solutions:'}</strong> {' '}
                      {isTurkish 
                        ? 'Standart kategorilere uymayan meslekler için alternatif yollar ve stratejiler.'
                        : isGerman 
                        ? 'Alternative Wege und Strategien für Berufe, die nicht in Standardkategorien passen.'
                        : 'Alternative pathways and strategies for professions that don\'t fit standard categories.'
                      }
                    </li>
                  </ul>
                </>
              ) : (
                <>
                  <p className="text-base leading-relaxed mb-6">
                    {isTurkish 
                      ? 'Almanya\'da çalışmak isteyen profesyoneller için özel olarak tasarlanmış kapsamlı süreç danışmanlığı hizmetimiz ile hayalinizdeki kariyer hedeflerinize ulaşmanız için gereken tüm desteği sağlıyoruz.'
                      : isGerman 
                      ? 'Mit unserem umfassenden Süreç-Beratungsservice, der speziell für Fachkräfte entwickelt wurde, die in Deutschland arbeiten möchten, bieten wir Ihnen alle Unterstützung, die Sie benötigen, um Ihre Traumkarriereziele zu erreichen.'
                      : 'With our comprehensive process consultancy service specially designed for professionals who want to work in Germany, we provide all the support you need to achieve your dream career goals.'
                    }
                  </p>
                  
                  <blockquote className="border-l-4 border-blue-500 pl-4 italic my-6 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-r-lg">
                    {isTurkish 
                      ? '"Almanya\'da çalışmak, hem profesyonel gelişim hem de yaşam kalitesi açısından eşsiz fırsatlar sunar."'
                      : isGerman 
                      ? '"Die Arbeit in Deutschland bietet einzigartige Möglichkeiten sowohl für die berufliche Entwicklung als auch für die Lebensqualität."'
                      : '"Working in Germany offers unique opportunities for both professional development and quality of life."'
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
                        ? 'Hemşirelik süreci için genellikle B1 seviyesinde Almanca dil becerileri gereklidir.'
                        : isGerman 
                        ? 'Für das Pflegeprozess sind in der Regel Deutschkenntnisse auf B1-Niveau erforderlich.'
                        : 'For nursing process, German language skills at B1 level are usually required.'
                      )
                    : slug === 'doctor'
                    ? (isTurkish 
                        ? 'Doktor olarak çalışmak için tıp diploması, dil sertifikası (B2/C1) ve Almanya\'da tanınma süreci gereklidir.'
                        : isGerman 
                        ? 'Um als Arzt zu arbeiten, sind ein Medizinstudium, ein Sprachzertifikat (B2/C1) und ein Anerkennungsverfahren in Deutschland erforderlich.'
                        : 'To work as a doctor, a medical degree, language certificate (B2/C1) and recognition process in Germany are required.'
                      )
                    : slug === 'construction'
                    ? (isTurkish 
                        ? 'İnşaat sektöründe çalışmak için mesleki yeterlilik belgeleri ve B1 seviyesinde Almanca gereklidir.'
                        : isGerman 
                        ? 'Für die Arbeit im Bausektor sind Berufsqualifikationsnachweise und Deutschkenntnisse auf B1-Niveau erforderlich.'
                        : 'Professional qualification certificates and German language skills at B1 level are required to work in the construction sector.'
                      )
                    : slug === 'hospitality'
                    ? (isTurkish 
                        ? 'Otelcilik ve turizm sektöründe çalışmak için genellikle A2/B1 seviyesinde Almanca ve sektör deneyimi gereklidir.'
                        : isGerman 
                        ? 'Für die Arbeit im Hotel- und Tourismussektor sind in der Regel Deutschkenntnisse auf A2/B1-Niveau und Branchenerfahrung erforderlich.'
                        : 'To work in the hospitality and tourism sector, German language skills at A2/B1 level and industry experience are usually required.'
                      )
                    : slug === 'logistics'
                    ? (isTurkish 
                        ? 'Lojistik sektöründe çalışmak için sürücü belgesi, güvenlik sertifikaları ve A2/B1 seviyesinde Almanca gereklidir.'
                        : isGerman 
                        ? 'Für die Arbeit im Logistiksektor sind ein Führerschein, Sicherheitszertifikate und Deutschkenntnisse auf A2/B1-Niveau erforderlich.'
                        : 'To work in the logistics sector, a driver\'s license, security certificates and German language skills at A2/B1 level are required.'
                      )
                    : slug === 'cleaning'
                    ? (isTurkish 
                        ? 'Temizlik sektöründe çalışmak için genellikle A2 seviyesinde Almanca ve temel mesleki eğitim yeterlidir.'
                        : isGerman 
                        ? 'Für die Arbeit im Reinigungssektor reichen in der Regel Deutschkenntnisse auf A2-Niveau und eine grundlegende Berufsausbildung aus.'
                        : 'To work in the cleaning sector, German language skills at A2 level and basic professional training are usually sufficient.'
                      )
                    : slug === 'office'
                    ? (isTurkish 
                        ? 'Ofis işlerinde çalışmak için B1/B2 seviyesinde Almanca, bilgisayar becerileri ve ilgili eğitim gereklidir.'
                        : isGerman 
                        ? 'Für Büroarbeit sind Deutschkenntnisse auf B1/B2-Niveau, Computerkenntnisse und entsprechende Ausbildung erforderlich.'
                        : 'For office work, German language skills at B1/B2 level, computer skills and relevant education are required.'
                      )
                                         : (slug === 'therapist' || slug === 'health-expert')
                     ? (isTurkish 
                         ? 'Terapist olarak çalışmak için uzmanlık diploması, B2 seviyesinde Almanca ve mesleki tanınma süreci gereklidir.'
                         : isGerman 
                         ? 'Um als Therapeut zu arbeiten, sind ein Spezialistendiplom, Deutschkenntnisse auf B2-Niveau und ein berufliches Anerkennungsverfahren erforderlich.'
                         : 'To work as a therapist, a specialist diploma, German language skills at B2 level and professional recognition process are required.'
                       )
                    : slug === 'health-technician'
                    ? (isTurkish 
                        ? 'Sağlık teknisyeni olarak çalışmak için teknik eğitim belgesi, B1 seviyesinde Almanca ve laboratuvar deneyimi gereklidir.'
                        : isGerman 
                        ? 'Um als Gesundheitstechniker zu arbeiten, sind ein technisches Ausbildungszeugnis, Deutschkenntnisse auf B1-Niveau und Laborerfahrung erforderlich.'
                        : 'To work as a health technician, technical education certificate, German language skills at B1 level and laboratory experience are required.'
                      )
                    : slug === 'caregiver'
                    ? (isTurkish 
                        ? 'Bakıcı olarak çalışmak için mesleki yeterlilik belgesi ve B1 seviyesinde Almanca gereklidir.'
                        : isGerman 
                        ? 'Um als Betreuer zu arbeiten, sind eine Berufsqualifikation und Deutschkenntnisse auf B1-Niveau erforderlich.'
                        : 'To work as a caregiver, professional qualification certificate and German language skills at B1 level are required.'
                      )
                    : slug === 'others'
                    ? (isTurkish 
                        ? 'Diğer meslek grupları için gereksinimler mesleğe göre değişir. Özel analiz ve danışmanlık hizmeti alınması önerilir.'
                        : isGerman 
                        ? 'Die Anforderungen für andere Berufsgruppen variieren je nach Beruf. Eine spezielle Analyse und Beratung wird empfohlen.'
                        : 'Requirements for other professional groups vary by profession. Special analysis and consultancy service is recommended.'
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
                  ? (isTurkish ? 'Hemşirelik Süreci için Gereklilikler' : isGerman ? 'Anforderungen für das Pflegeprozess' : 'Requirements for Nursing Process')
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
              ) : slug === 'doctor' ? (
                <>
                  <p className="text-base leading-relaxed mb-6">
                    {isTurkish 
                      ? 'Almanya\'da doktor olarak çalışabilmek için aşağıdaki temel gereksinimlerin karşılanması gerekmektedir:'
                      : isGerman 
                      ? 'Um als Arzt in Deutschland arbeiten zu können, müssen folgende Grundvoraussetzungen erfüllt werden:'
                      : 'To work as a doctor in Germany, the following basic requirements must be met:'
                    }
                  </p>
                  
                  <div className="space-y-6">
                    <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-red-800 dark:text-red-200">
                        1. {isTurkish ? 'Tıp Diploması ve Tanınma' : isGerman ? 'Medizinstudium und Anerkennung' : 'Medical Degree and Recognition'}
                      </h4>
                      <p className="text-sm">
                        {isTurkish 
                          ? 'Kendi ülkenizde tıp fakültesi mezunu olmanız ve diplomanızın Almanya\'da tanınması gereklidir. Tanınma süreci için gerekli belgeler ve sınavlar bulunmaktadır.'
                          : isGerman 
                          ? 'Sie müssen Absolvent einer medizinischen Fakultät in Ihrem Heimatland sein und Ihr Diplom muss in Deutschland anerkannt werden. Es gibt erforderliche Dokumente und Prüfungen für den Anerkennungsprozess.'
                          : 'You must be a graduate of a medical faculty in your home country and your diploma must be recognized in Germany. There are required documents and exams for the recognition process.'
                        }
                      </p>
                    </div>
                    
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-blue-800 dark:text-blue-200">
                        2. {isTurkish ? 'Dil Yeterliliği' : isGerman ? 'Sprachkompetenz' : 'Language Proficiency'}
                      </h4>
                      <p className="text-sm">
                        {isTurkish 
                          ? 'Tıbbi Almanca dahil olmak üzere B2 veya C1 seviyesinde Almanca dil yeterliliği gereklidir. Hasta iletişimi için yüksek seviyede dil bilgisi şarttır.'
                          : isGerman 
                          ? 'Deutschkenntnisse auf B2- oder C1-Niveau, einschließlich medizinisches Deutsch, sind erforderlich. Hochqualifizierte Sprachkenntnisse sind für die Patientenkommunikation unerlässlich.'
                          : 'German language proficiency at B2 or C1 level, including medical German, is required. High-level language skills are essential for patient communication.'
                        }
                      </p>
                    </div>
                    
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-green-800 dark:text-green-200">
                        3. {isTurkish ? 'Mesleki Yeterlilik Sınavı' : isGerman ? 'Fachsprachprüfung' : 'Professional Language Examination'}
                      </h4>
                      <p className="text-sm">
                        {isTurkish 
                          ? 'Tıbbi dil yeterliliği sınavını geçmeniz ve hastalarla etkili iletişim kurabildiğinizi kanıtlamanız gerekmektedir.'
                          : isGerman 
                          ? 'Sie müssen die medizinische Sprachprüfung bestehen und nachweisen, dass Sie effektiv mit Patienten kommunizieren können.'
                          : 'You must pass the medical language examination and prove that you can communicate effectively with patients.'
                        }
                      </p>
                    </div>
                    
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-purple-800 dark:text-purple-200">
                        4. {isTurkish ? 'İş Teklifi veya Başvuru' : isGerman ? 'Stellenangebot oder Bewerbung' : 'Job Offer or Application'}
                      </h4>
                      <p className="text-sm">
                        {isTurkish 
                          ? 'Bir hastane, klinik veya tıbbi kuruluştan iş teklifi almanız veya asistanlık programına başvurmanız gerekebilir.'
                          : isGerman 
                          ? 'Sie müssen möglicherweise ein Stellenangebot von einem Krankenhaus, einer Klinik oder einer medizinischen Einrichtung erhalten oder sich für ein Assistenzprogramm bewerben.'
                          : 'You may need to receive a job offer from a hospital, clinic or medical institution or apply for a residency program.'
                        }
                      </p>
                    </div>
                  </div>
                </>
              ) : slug === 'construction' ? (
                <>
                  <p className="text-base leading-relaxed mb-6">
                    {isTurkish 
                      ? 'İnşaat sektöründe çalışabilmek için aşağıdaki temel gereksinimlerin karşılanması gerekmektedir:'
                      : isGerman 
                      ? 'Um im Bausektor arbeiten zu können, müssen folgende Grundvoraussetzungen erfüllt werden:'
                      : 'To work in the construction sector, the following basic requirements must be met:'
                    }
                  </p>
                  
                  <div className="space-y-6">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-blue-800 dark:text-blue-200">
                        1. {isTurkish ? 'Mesleki Yeterlilik ve Deneyim' : isGerman ? 'Berufsqualifikation und Erfahrung' : 'Professional Qualification and Experience'}
                      </h4>
                      <p className="text-sm">
                        {isTurkish 
                          ? 'İnşaat alanında mesleki eğitim veya en az 3 yıl deneyim gereklidir. Usta, tekniker, mimar veya mühendis olarak yeterlilik belgeleriniz Almanya\'da tanınmalıdır.'
                          : isGerman 
                          ? 'Eine Berufsausbildung im Baubereich oder mindestens 3 Jahre Erfahrung sind erforderlich. Ihre Qualifikationsnachweise als Meister, Techniker, Architekt oder Ingenieur müssen in Deutschland anerkannt werden.'
                          : 'Professional training in construction or at least 3 years of experience is required. Your qualification certificates as a master, technician, architect or engineer must be recognized in Germany.'
                        }
                      </p>
                    </div>
                    
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-green-800 dark:text-green-200">
                        2. {isTurkish ? 'İş Teklifi' : isGerman ? 'Stellenangebot' : 'Job Offer'}
                      </h4>
                      <p className="text-sm">
                        {isTurkish 
                          ? 'Almanya\'da bir inşaat şirketi, müteahhit firma veya kamu kurumundan somut bir iş teklifi olmalıdır. İş sözleşmesi pozisyon ve görevleri açık bir şekilde belirtmelidir.'
                          : isGerman 
                          ? 'Es muss ein konkretes Stellenangebot von einem Bauunternehmen, einer Baufirma oder einer öffentlichen Einrichtung in Deutschland vorliegen. Der Arbeitsvertrag muss Position und Aufgaben klar definieren.'
                          : 'There must be a concrete job offer from a construction company, contractor or public institution in Germany. The employment contract must clearly define the position and duties.'
                        }
                      </p>
                    </div>
                    
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-yellow-800 dark:text-yellow-200">
                        3. {isTurkish ? 'Dil Becerileri' : isGerman ? 'Sprachkenntnisse' : 'Language Skills'}
                      </h4>
                      <p className="text-sm">
                        {isTurkish 
                          ? 'İş güvenliği ve ekip çalışması için B1 seviyesinde Almanca gereklidir. Pozisyona göre B2 seviyesi istenebilir.'
                          : isGerman 
                          ? 'Für Arbeitssicherheit und Teamarbeit sind Deutschkenntnisse auf B1-Niveau erforderlich. Je nach Position kann B2-Niveau verlangt werden.'
                          : 'German language skills at B1 level are required for work safety and teamwork. B2 level may be required depending on the position.'
                        }
                      </p>
                    </div>
                    
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-purple-800 dark:text-purple-200">
                        4. {isTurkish ? 'İş Güvenliği Belgeleri' : isGerman ? 'Arbeitssicherheitszertifikate' : 'Work Safety Certificates'}
                      </h4>
                      <p className="text-sm">
                        {isTurkish 
                          ? 'İnşaat sahalarında çalışmak için gerekli iş güvenliği eğitimleri ve sertifikaları alınmalıdır. Bu sertifikalar Almanya\'da geçerli olmalıdır.'
                          : isGerman 
                          ? 'Erforderliche Arbeitssicherheitsschulungen und Zertifikate für die Arbeit auf Baustellen müssen erworben werden. Diese Zertifikate müssen in Deutschland gültig sein.'
                          : 'Required work safety training and certificates for working on construction sites must be obtained. These certificates must be valid in Germany.'
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
                        {slug === 'doctor' ? (
                          <>
                            <tr>
                              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                                {isTurkish ? 'Tıp Fakültesi Diploması' : isGerman ? 'Medizinstudium-Diplom' : 'Medical Faculty Diploma'}
                              </td>
                              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                                {isTurkish ? 'Zorunlu' : isGerman ? 'Erforderlich' : 'Required'}
                              </td>
                            </tr>
                            <tr className="bg-gray-50 dark:bg-gray-700">
                              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                                {isTurkish ? 'Dil Sertifikası (B2/C1)' : isGerman ? 'Sprachzertifikat (B2/C1)' : 'Language Certificate (B2/C1)'}
                              </td>
                              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                                {isTurkish ? 'Zorunlu' : isGerman ? 'Erforderlich' : 'Required'}
                              </td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                                {isTurkish ? 'Mesleki Dil Sınavı' : isGerman ? 'Fachsprachprüfung' : 'Professional Language Exam'}
                              </td>
                              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                                {isTurkish ? 'Zorunlu' : isGerman ? 'Erforderlich' : 'Required'}
                              </td>
                            </tr>
                            <tr className="bg-gray-50 dark:bg-gray-700">
                              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                                {isTurkish ? 'Tanınma Süreci Belgeleri' : isGerman ? 'Anerkennungsverfahren-Dokumente' : 'Recognition Process Documents'}
                              </td>
                              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                                {isTurkish ? 'Zorunlu' : isGerman ? 'Erforderlich' : 'Required'}
                              </td>
                            </tr>
                          </>
                        ) : slug === 'construction' ? (
                          <>
                            <tr>
                              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                                {isTurkish ? 'Mesleki Yeterlilik Belgesi' : isGerman ? 'Berufsqualifikationsnachweis' : 'Professional Qualification Certificate'}
                              </td>
                              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                                {isTurkish ? 'Zorunlu' : isGerman ? 'Erforderlich' : 'Required'}
                              </td>
                            </tr>
                            <tr className="bg-gray-50 dark:bg-gray-700">
                              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                                {isTurkish ? 'Dil Sertifikası (B1/B2)' : isGerman ? 'Sprachzertifikat (B1/B2)' : 'Language Certificate (B1/B2)'}
                              </td>
                              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                                {isTurkish ? 'Zorunlu' : isGerman ? 'Erforderlich' : 'Required'}
                              </td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                                {isTurkish ? 'İş Güvenliği Sertifikası' : isGerman ? 'Arbeitssicherheitszertifikat' : 'Work Safety Certificate'}
                              </td>
                              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                                {isTurkish ? 'Zorunlu' : isGerman ? 'Erforderlich' : 'Required'}
                              </td>
                            </tr>
                            <tr className="bg-gray-50 dark:bg-gray-700">
                              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                                {isTurkish ? 'Mesleki Deneyim Belgesi' : isGerman ? 'Berufserfahrungsnachweis' : 'Professional Experience Certificate'}
                              </td>
                              <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                                {isTurkish ? 'Önerilen (3+ yıl)' : isGerman ? 'Empfohlen (3+ Jahre)' : 'Recommended (3+ years)'}
                              </td>
                            </tr>
                          </>
                        ) : (
                          <>
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
                          </>
                        )}
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
                  {slug === 'construction' ? (
                    <>
                      <p className="text-base leading-relaxed mb-6">
                        {isTurkish 
                          ? 'İnşaat sektöründe 300\'den fazla usta, tekniker ve mühendisinin Almanya\'da başarılı kariyer kurmasına yardımcı olduk.'
                          : isGerman 
                          ? 'Wir haben über 300 Meister, Techniker und Ingenieure im Bausektor dabei unterstützt, eine erfolgreiche Karriere in Deutschland aufzubauen.'
                          : 'We have helped over 300 masters, technicians and engineers in the construction sector build successful careers in Germany.'
                        }
                      </p>
                      
                      <blockquote className="border-l-4 border-orange-500 pl-4 italic my-6 bg-orange-50 dark:bg-orange-900/20 p-4 rounded-r-lg">
                        {isTurkish 
                          ? '"ZOV Personal sayesinde inşaat sektöründe hayallerimi gerçekleştirdim. Almanya\'da bir inşaat firmasında proje müdürü olarak çalışıyorum."'
                          : isGerman 
                          ? '"Dank ZOV Personal habe ich meine Träume im Bausektor verwirklicht. Ich arbeite als Projektleiter in einem Bauunternehmen in Deutschland."'
                          : '"Thanks to ZOV Personal, I realized my dreams in the construction sector. I work as a project manager in a construction company in Germany."'
                        }
                      </blockquote>
                      
                      <div className="grid md:grid-cols-3 gap-4 my-6">
                        <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg text-center">
                          <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">92%</div>
                          <div className="text-sm text-gray-600 dark:text-gray-300">
                            {isTurkish ? 'Başarı oranı' : isGerman ? 'Erfolgsquote' : 'Success rate'}
                          </div>
                        </div>
                        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg text-center">
                          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">6-10</div>
                          <div className="text-sm text-gray-600 dark:text-gray-300">
                            {isTurkish ? 'Ortalama ay süre' : isGerman ? 'Durchschnittliche Dauer (Monate)' : 'Average months duration'}
                          </div>
                        </div>
                        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg text-center">
                          <div className="text-2xl font-bold text-green-600 dark:text-green-400">300+</div>
                          <div className="text-sm text-gray-600 dark:text-gray-300">
                            {isTurkish ? 'Başarılı yerleştirme' : isGerman ? 'Erfolgreiche Vermittlungen' : 'Successful placements'}
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-base leading-relaxed">
                        {isTurkish 
                          ? 'İnşaat sektöründeki profesyonellerin Almanya\'da başarılı olmalarını sağlamak bizim en büyük motivasyonumuz.'
                          : isGerman 
                          ? 'Den Erfolg von Fachkräften im Bausektor in Deutschland zu gewährleisten, ist unsere größte Motivation.'
                          : 'Ensuring the success of construction sector professionals in Germany is our greatest motivation.'
                        }
                      </p>
                    </>
                  ) : slug === 'doctor' ? (
                    <>
                      <p className="text-base leading-relaxed mb-6">
                        {isTurkish 
                          ? 'Şimdiye kadar 150\'den fazla doktorun Almanya\'da başarılı kariyer kurmasına yardımcı olduk.'
                          : isGerman 
                          ? 'Wir haben bisher über 150 Ärzten geholfen, eine erfolgreiche Karriere in Deutschland aufzubauen.'
                          : 'We have helped over 150 doctors build successful careers in Germany so far.'
                        }
                      </p>
                      
                      <blockquote className="border-l-4 border-red-500 pl-4 italic my-6 bg-red-50 dark:bg-red-900/20 p-4 rounded-r-lg">
                        {isTurkish 
                          ? '"ZOV Personal sayesinde Almanya\'da kardiyoloji uzmanı olarak çalışma hayalim gerçekleşti. Tanınma sürecinde her adımda yanımdaydılar."'
                          : isGerman 
                          ? '"Dank ZOV Personal wurde mein Traum, als Kardiologe in Deutschland zu arbeiten, wahr. Sie standen mir bei jedem Schritt des Anerkennungsprozesses zur Seite."'
                          : '"Thanks to ZOV Personal, my dream of working as a cardiologist in Germany came true. They were with me every step of the recognition process."'
                        }
                      </blockquote>
                      
                      <div className="grid md:grid-cols-3 gap-4 my-6">
                        <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg text-center">
                          <div className="text-2xl font-bold text-red-600 dark:text-red-400">98%</div>
                          <div className="text-sm text-gray-600 dark:text-gray-300">
                            {isTurkish ? 'Başarı oranı' : isGerman ? 'Erfolgsquote' : 'Success rate'}
                          </div>
                        </div>
                        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg text-center">
                          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">12-18</div>
                          <div className="text-sm text-gray-600 dark:text-gray-300">
                            {isTurkish ? 'Ortalama ay süre' : isGerman ? 'Durchschnittliche Dauer (Monate)' : 'Average months duration'}
                          </div>
                        </div>
                        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg text-center">
                          <div className="text-2xl font-bold text-green-600 dark:text-green-400">150+</div>
                          <div className="text-sm text-gray-600 dark:text-gray-300">
                            {isTurkish ? 'Başarılı yerleştirme' : isGerman ? 'Erfolgreiche Vermittlungen' : 'Successful placements'}
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-base leading-relaxed">
                        {isTurkish 
                          ? 'Doktorların Almanya\'da başarılı olmalarını sağlamak bizim en büyük gururumuz ve motivasyonumuz.'
                          : isGerman 
                          ? 'Den Erfolg von Ärzten in Deutschland zu gewährleisten, ist unser größter Stolz und unsere Motivation.'
                          : 'Ensuring the success of doctors in Germany is our greatest pride and motivation.'
                        }
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="text-base leading-relaxed mb-6">
                        {isTurkish 
                          ? 'Şimdiye kadar 500\'den fazla profesyonelin Almanya\'da kariyer kurmasına yardımcı olduk.'
                          : isGerman 
                          ? 'Wir haben bisher über 500 Fachkräften geholfen, eine Karriere in Deutschland aufzubauen.'
                          : 'We have helped over 500 professionals build careers in Germany so far.'
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
            

            

          </div>
        </div>
      </div>
    </section>
  );
}
