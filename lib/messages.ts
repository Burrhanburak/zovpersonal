export const messages = {
  tr: {
    header: 'WhatsApp ile İletişim',
    helper: 'Müşteri Temsilcisi',
    placeholder: 'Mesajınızı yazın...',
    button: 'WhatsApp ile Gönder',
    defaultMessage: 'Merhaba, işe alım hizmetleri hakkında bilgi almak istiyorum.'
  },
  en: {
    header: 'Contact via WhatsApp',
    helper: 'Customer Representative',
    placeholder: 'Type your message...',
    button: 'Send via WhatsApp',
    defaultMessage: 'Hello, I would like to get information about your recruitment services.'
  },
  de: {
    header: 'Kontakt über WhatsApp',
    helper: 'Kundenvertreter',
    placeholder: 'Schreiben Sie Ihre Nachricht ein...',
    button: 'Über WhatsApp senden',
    defaultMessage: 'Hallo, ich möchte Informationen über Ihre Personalvermittlungsdienstleistungen erhalten.'
  },
  nl: {
    header: 'Contact via WhatsApp',
    helper: 'Klantenvertreter',
    placeholder: 'Typ uw bericht...',
    button: 'Verstuur via WhatsApp',
    defaultMessage: 'Hallo, ik wil informatie over uw wervingsdiensten.'
  },
  bg: {
    header: 'Свържете се чрез WhatsApp',
    helper: 'Представител на клиенти',
    placeholder: 'Напишете съобщението си...',
    button: 'Изпрати чрез WhatsApp',
    defaultMessage: 'Здравейте, бих искал да получа информация за вашите услуги по набиране на персонал.'
  },
  hr: {
    header: 'Kontakt preko WhatsApp',
    helper: 'Predstavnik za klijente',
    placeholder: 'Napišite svoju poruku...',
    button: 'Pošalji preko WhatsApp',
    defaultMessage: 'Zdravo, želim informacije o vašim uslugama zapošljavanja.'
  },
  ro: {
    header: 'Contact prin WhatsApp',
    helper: 'Reprezentant clienți',
    placeholder: 'Scrieți mesajul dvs...',
    button: 'Trimite prin WhatsApp',
    defaultMessage: 'Salut, aș dori să obțin informații despre serviciile dvs. de recrutare.'
  },
  sr: {
    header: 'Kontakt preko WhatsApp',
    helper: 'Predstavnik za klijente',
    placeholder: 'Napišite svoju poruku...',
    button: 'Pošalji preko WhatsApp',
    defaultMessage: 'Zdravo, želim informacije o vašim uslugama zapošljavanja.'
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