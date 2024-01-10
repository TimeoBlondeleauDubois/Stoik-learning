import slicemachineConfig from '../../slicemachine.config.json' assert { type: 'json' }
import * as prismic from '@prismicio/client'

const generateSitemap = ({ rewrites }) => {
  const baseUrl = 'https://WEBSITE.com'

  const sitemapItems = rewrites.map(({ source }) => {
    const url = `${baseUrl}${source}`
    return `
        <url>
          <loc>${url}</loc>
        </url>
      `
  })

  return `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${sitemapItems.join('\n')}
      </urlset>
    `
}

const Sitemap = () => null

export async function getServerSideProps({ res }) {
  /* PRISMIC */
  const excludes = [
    'header',
    'footer',
    'p404',
    'redirect',
  ] /* FOR EXCLUDE ALL NOT PAGES */

  const client = prismic.createClient(slicemachineConfig.repositoryName)
  const repository = await client.getRepository()

  const locales = repository.languages.map((lang) => lang.id)

  const allDocument = await Promise.all(
    locales.map((lang) => client.dangerouslyGetAll({ lang }))
  )

  const rewrites = locales.flatMap((lang, i) => {
    const langPath = lang === locales[0] ? '/' : `/${lang}/`
    return allDocument[i]
      .filter((page) => !excludes.includes(page.type))
      .map((page) => {
        const category = page.data.category?.uid
          ? `${page.data.category.uid}/`
          : ''
        const source =
          page.type === 'home'
            ? `${langPath}`
            : `${langPath}${category}${page.uid}`
        return {
          source: source,
        }
      })
  })
  /* END PRISMIC */

  const sitemapXml = generateSitemap({ rewrites })

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemapXml)
  res.end()
}

export default Sitemap
