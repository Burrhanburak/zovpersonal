import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://zovpersonal.com'
  const locales = ['en', 'tr', 'de', 'nl', 'bg', 'hr', 'ro', 'sr']
  const currentDate = new Date()
  
  // Main pages configuration
  const mainPages = [
    { path: '', priority: 1.0, changeFrequency: 'daily' as const },
    { path: '/about', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/services', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/employer', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/job-seeker', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/business-process-in-germany', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/profession-process', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/national-visa-application-process', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/international-recruitment', priority: 0.7, changeFrequency: 'weekly' as const },
    { path: '/visa-pricing', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/terms-of-service', priority: 0.3, changeFrequency: 'yearly' as const }
  ]
  
  // Profession-specific pages
  const professionSlugs = [
    // Healthcare professions
    'doctor',
    'nurse', 
    'physiotherapist',
    'caregiver',
    'dentist',
    'pharmacist',
    'veterinarian',
    
    // Technical professions
    'engineer',
    'it-specialist',
    'electrician',
    'plumber',
    'mechanic',
    'welder',
    'painter',
    'carpenter',
    
    // Education & Social
    'teacher',
    'social-worker',
    'psychologist',
    
    // Service sector
    'waiter',
    'chef',
    'hotel-staff',
    'cleaner',
    'security-guard',
    'driver',
    'sales-assistant',
    
    // Construction
    'construction-worker',
    'crane-operator',
    'forklift-operator'
  ]
  
  // Business-specific pages  
  const businessSlugs = [
    'employee-integration',
    'visa-for-experienced-personal', 
    'accelerated-skilled-worker-procedure',
    'recruitment'
  ]
  
  const sitemap: MetadataRoute.Sitemap = []
  
  // Generate main pages for all locales
  locales.forEach(locale => {
    mainPages.forEach(page => {
      sitemap.push({
        url: `${baseUrl}/${locale}${page.path}`,
        lastModified: currentDate,
        changeFrequency: page.changeFrequency,
        priority: page.priority
      })
    })
    
    // Generate profession-specific pages
    professionSlugs.forEach(slug => {
      sitemap.push({
        url: `${baseUrl}/${locale}/profession-process/${slug}`,
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.6
      })
    })
    
    // Generate business-specific pages
    businessSlugs.forEach(slug => {
      sitemap.push({
        url: `${baseUrl}/${locale}/business-process-in-germany/${slug}`,
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.6
      })
    })
  })
  
  // Add root redirect (will redirect to /en based on geo-detection)
  sitemap.push({
    url: baseUrl,
    lastModified: currentDate,
    changeFrequency: 'daily',
    priority: 1.0
  })
  
  return sitemap
} 