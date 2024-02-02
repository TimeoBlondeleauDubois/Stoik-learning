import Head from 'next/head'

const SEO = ({ seo }) => {
  if (!seo) return

  const { title, description, image } = seo
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
        <meta property="og:image" content={image} />
        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={image} />
        {/* <!-- Favicon --> */}
      </Head>
    </>
  )
}

export default SEO
