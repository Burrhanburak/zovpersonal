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
  nl: {
    header: 'Contact via WhatsApp',
    helper: 'Klantenvertreter',
    placeholder: 'Typ uw bericht...',
    button: 'Verstuur via WhatsApp',
    defaultMessage: 'Hallo, ik wil informatie over uw visa consultatiediensten.'
  },
  bg: {
    header: 'Contact via WhatsApp',
    helper: 'Kundenvertreter',
    placeholder: 'Typ uw bericht...',
    button: 'Verstuur via WhatsApp',
    defaultMessage: 'Hallo, ik wil informatie over uw visa consultatiediensten.'
  },
  hr: {
    header: 'Contact via WhatsApp',
    helper: 'Kundenvertreter',
    placeholder: 'Tipite svoju poruku...',
    button: 'Pošalji preko WhatsApp',
    defaultMessage: 'Zdravo, želim informacije o vašim uslugama za vize.'
  },
  ro: {
    header: 'Contact via WhatsApp',
    helper: 'Kundenvertreter',
    placeholder: 'Tipite svoju poruku...',
    button: 'Pošalji preko WhatsApp',
    defaultMessage: 'Zdravo, želim informacije o vašim uslugama za vize.'
  },
  sr: {
    header: 'Contact via WhatsApp',
    helper: 'Kundenvertreter',
    placeholder: 'Tipite svoju poruku...',
    button: 'Pošalji preko WhatsApp',
    defaultMessage: 'Zdravo, želim informacije o vašim uslugama za vize.'
  }
} as const;

export type Locale = keyof typeof messages;

// Function to get current locale from URL
export function getLocale(): Locale {
  if (typeof window === 'undefined') return 'en'; // Default on server
  
  const pathname = window.location.pathname;
  const segments = pathname.split('/').filter(Boolean);
  
  if (segments.length > 0) {
    const firstSegment = segments[0] as string;
    if (firstSegment === 'en' || firstSegment === 'de' || firstSegment === 'tr' || firstSegment === 'nl' || firstSegment === 'bg' || firstSegment === 'hr' || firstSegment === 'ro') {
      return firstSegment as Locale;
    }
  }
  
  return 'en'; // Default locale
}