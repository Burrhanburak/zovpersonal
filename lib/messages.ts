export const messages = {
  tr: {
    header: 'WhatsApp ile İletişim',
    helper: 'Müşteri Temsilcisi',
    placeholder: 'Mesajınızı yazın...',
    button: 'WhatsApp ile Gönder',
    defaultMessage: 'Merhaba, vize danışmanlığı hizmetleriniz hakkında bilgi almak istiyorum.'
  },
  en: {
    header: 'Contact via WhatsApp',
    helper: 'Customer Representative',
    placeholder: 'Type your message...',
    button: 'Send via WhatsApp',
    defaultMessage: 'Hello, I would like to get information about your visa consultancy services.'
  },
  de: {
    header: 'Kontakt über WhatsApp',
    helper: 'Kundenvertreter',
    placeholder: 'Schreiben Sie Ihre Nachricht ein...',
    button: 'Über WhatsApp senden',
    defaultMessage: 'Hallo, ich möchte Informationen über Ihre Visa-Beratungsdienstleistungen erhalten.'
  },
} as const;

export type Locale = keyof typeof messages;

// Function to get current locale from URL
export function getLocale(): Locale {
  if (typeof window === 'undefined') return 'tr'; // Default on server
  
  const pathname = window.location.pathname;
  const segments = pathname.split('/').filter(Boolean);
  
  if (segments.length > 0) {
    const firstSegment = segments[0] as string;
    if (firstSegment === 'en' || firstSegment === 'de' || firstSegment === 'tr') {
      return firstSegment as Locale;
    }
  }
  
  return 'tr'; // Default locale
}