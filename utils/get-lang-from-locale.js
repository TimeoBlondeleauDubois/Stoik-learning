export function getLangFromLocale(locale) {
  return !locale || locale === 'default' ? 'fr-fr' : locale
}
