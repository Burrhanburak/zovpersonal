import { LocalePrefix } from "next-intl/routing";

export const locales = ['en', 'tr', 'de'] as const;
export type Locale = typeof locales;



