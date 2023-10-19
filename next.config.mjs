import slicemachineConfig from './slicemachine.config.json' assert { type: 'json' }
import * as prismic from '@prismicio/client'

const nextConfig = async () => {
  const client = prismic.createClient(slicemachineConfig.repositoryName)
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
        /* TODO après recherche getAllByTag si on valide l'utilisation des tags | Ex: tag : 'page' | moins lourds, mieux en perf, plus besoin d'exclude | tag autre possible comme 'rewrite', pour plus de conprehension */
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
