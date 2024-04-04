import Head from 'next/head'
import { useRouter } from 'next/router'

const SEO = ({ seo }) => {
  if (!seo) return

  const router = useRouter()
  const { locale, asPath } = router
  const { title, description, image, altPage, currentPath, page } = seo

  const rootPath = 'https://www.callbruno.com' // Replace with client's domain

  const canonical = `${rootPath}${currentPath}`.split(/[?#]/)[0]

  const isOriginalFolder = asPath.indexOf(`/${page.type}/${page.uid}`) > -1

  return (
    <>
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {image && <meta property="og:image" content={image.url} />}
        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        {image && <meta property="twitter:image" content={image.url} />}
        {/* <!-- SEO Optimizations --> */}
        {isOriginalFolder && <meta name="robots" content="noindex" />}
        <link rel="canonical" href={canonical} />
        {/* <!-- Favicon --> */}
      </Head>
    </>
  )
}

export default SEO
