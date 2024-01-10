import slicemachineConfig from './slicemachine.config.json' assert { type: 'json' }
import * as prismic from '@prismicio/client'

const nextConfig = async () => {
  const client = prismic.createClient(slicemachineConfig.repositoryName)
  const repository = await client.getRepository()

  const locales = repository.languages.map((lang) => lang.id)
  const defaultLocale = 'fr-fr'

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
        'redirect',
      ] /* FOR EXCLUDE ALL NOT PAGES */
      const allDocument = await Promise.all(
        locales.map((lang) => client.dangerouslyGetAll({ lang }))
      )

      return locales.flatMap((lang, i) => {
        return allDocument[i]
          .filter((page) => !excludes.includes(page.type))
          .map((page) => {
            const source =
              page.type === 'home' ? `/` : `/${page.uid}`
            const destination =
              page.type === 'home' ? '/' : `/${page.type}/${page.uid}`
            return {
              source: source,
              destination: destination,
            }
          })
      })
    },
    async redirects() {
      const allRedirect = await client.getAllByType('redirect', { lang: '*' })

      return allRedirect.flatMap((page) => {
        const { data } = page
        return data.redirect.map((r) => {
          return {
            source: r.source,
            destination: r.destination,
            statusCode: 301,
          }
        })
      })
    },
  }
}

export default nextConfig
