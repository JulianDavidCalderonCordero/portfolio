import { getRelativeLocaleUrl } from 'astro:i18n';

const translations = {
  en: () => import('../i18n/locales/en/common.json').then(m => m.default),
  es: () => import('../i18n/locales/es/common.json').then(m => m.default),
};

let currentTranslations: Record<string, any> = {};

export async function loadTranslations(locale: string) {
  if (!currentTranslations[locale]) {
    currentTranslations[locale] = await translations[locale as keyof typeof translations]();
  }
  return currentTranslations[locale];
}

export function t(key: string, locale: string = 'en'): string {
  const keys = key.split('.');
  let value: any = currentTranslations[locale];

  for (const k of keys) {
    value = value?.[k];
  }

  return value || key;
}

export { getRelativeLocaleUrl };
