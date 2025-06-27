import { LocalePrefix } from "next-intl/routing";

export const locales = ['en', 'tr', 'de', 'nl', 'bg', 'hr', 'ro', 'sr'] as const;
export type Locale = typeof locales;



