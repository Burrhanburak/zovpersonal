import { getTranslations } from "next-intl/server";

export default async function TestPage() {
  const t = await getTranslations();

  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-900">
          🔍 Translation Test Page (SERVER COMPONENT)
        </h1>
        
        {/* Ana Çeviriler */}
        <div className="mb-8 p-6 bg-blue-50 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-blue-900">Main Translations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <strong>Navigation Home:</strong><br />
              <span className="text-lg text-blue-700">{t('nav.home')}</span>
            </div>
            <div>
              <strong>Navigation Services:</strong><br />
              <span className="text-lg text-blue-700">{t('nav.services')}</span>
            </div>
            <div>
              <strong>Hero Title:</strong><br />
              <span className="text-lg text-blue-700">{t('hero.title')}</span>
            </div>
            <div>
              <strong>Hero CTA:</strong><br />
              <span className="text-lg text-blue-700">{t('hero.cta')}</span>
            </div>
          </div>
        </div>
        
        {/* Hizmetler */}
        <div className="mb-8 p-6 bg-green-50 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-green-900">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <strong>Services Title:</strong><br />
              <span className="text-lg text-green-700">{t('services.title')}</span>
            </div>
            <div>
              <strong>Work Visa:</strong><br />
              <span className="text-lg text-green-700">{t('services.workVisa.title')}</span>
            </div>
            <div>
              <strong>Skills Assessment:</strong><br />
              <span className="text-lg text-green-700">{t('services.skillsAssessment.title')}</span>
            </div>
            <div>
              <strong>Documentation:</strong><br />
              <span className="text-lg text-green-700">{t('services.documentation.title')}</span>
            </div>
          </div>
        </div>

        {/* Meslekler */}
        <div className="mb-8 p-6 bg-purple-50 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-purple-900">Professions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <strong>Healthcare:</strong><br />
              <span className="text-lg text-purple-700">{t('professions.healthcare.title')}</span><br />
              <small className="text-purple-600">{t('professions.healthcare.description')}</small>
            </div>
            <div>
              <strong>Engineering:</strong><br />
              <span className="text-lg text-purple-700">{t('professions.engineering.title')}</span><br />
              <small className="text-purple-600">{t('professions.engineering.description')}</small>
            </div>
          </div>
        </div>

        {/* Süreç */}
        <div className="mb-8 p-6 bg-orange-50 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-orange-900">Process Steps</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <strong>Step 1:</strong><br />
              <span className="text-lg text-orange-700">{t('process.step1.title')}</span><br />
              <small className="text-orange-600">{t('process.step1.description')}</small>
            </div>
            <div>
              <strong>Step 2:</strong><br />
              <span className="text-lg text-orange-700">{t('process.step2.title')}</span><br />
              <small className="text-orange-600">{t('process.step2.description')}</small>
            </div>
          </div>
        </div>

        {/* İstatistikler */}
        <div className="mb-8 p-6 bg-red-50 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-red-900">About Stats</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <span className="text-2xl font-bold text-red-700">{t('about.experience')}</span><br />
              <small className="text-red-600">Experience</small>
            </div>
            <div>
              <span className="text-2xl font-bold text-red-700">{t('about.clients')}</span><br />
              <small className="text-red-600">Clients</small>
            </div>
            <div>
              <span className="text-2xl font-bold text-red-700">{t('about.success')}</span><br />
              <small className="text-red-600">Success Rate</small>
            </div>
          </div>
        </div>

        {/* Test Links */}
        <div className="text-center bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Test Different Locales</h2>
          <div className="flex justify-center gap-4">
            <a href="/tr/test" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors">
              🇹🇷 Türkçe
            </a>
            <a href="/en/test" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
              🇺🇸 English
            </a>
            <a href="/de/test" className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition-colors">
              🇩🇪 Deutsch
            </a>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Click the buttons above to test translations in different languages
          </p>
        </div>
      </div>
    </div>
  );
}
