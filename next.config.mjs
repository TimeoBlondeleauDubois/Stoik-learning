import * as prismic from '@prismicio/client'

const nextConfig = async () => {
  const client = prismic.createClient('start-next')
  const repository = await client.getRepository()

  const locales = repository.languages.map((lang) => lang.id)
  const defaultLocale = locales[0]

  return {
    reactStrictMode: true,
    i18n: {
      defaultLocale: defaultLocale,
      locales: locales,
    },
    async rewrites() {
      const excludes = [
        'header',
        'footer',
        'p404',
      ] /* FOR EXCLUDE ALL NOT PAGES */
      const allDocument = await Promise.all(
        locales.map((lang) => client.dangerouslyGetAll({ lang }))
      )

      return locales.flatMap((lang, i) => {
        const langPath = lang === locales[0] ? '/' : `/${lang}/`
        return allDocument[i]
          .filter((page) => !excludes.includes(page.type))
          .map((page) => {
            const source =
              page.type === 'home' ? `${langPath}` : `${langPath}${page.uid}`
            const destination =
              page.type === 'home' ? '/' : `/${page.type}/${page.uid}`
            return {
              source: source,
              destination: destination,
            }
          })
      })
    },
  }
}

export default nextConfig
