import { ApiService } from '/services/api.service'
import { CustomService } from '/services/custom.service'
import { PageService } from '/services/page.service'
import { getLangFromLocale } from '/utils/get-lang-from-locale'

import Layout from '/components/layout.jsx'
import SEO from '/components/SEO'

const Legals = ({ header, footer, page }) => {
  const data = page.data
  return (
    <Layout header={header} footer={footer} page={page.type}>
      <SEO
        title={data.meta_title}
        description={data.meta_description}
        image={data.meta_image}
      />
    </Layout>
  )
}

export default Legals

export async function getStaticProps({ locale, params, previewData }) {
  ApiService.setPreviewData({ previewData })
  const lang = getLangFromLocale(locale)
  const customService = new CustomService(lang)
  const pageService = new PageService(lang)
  const [header, footer, page] = await Promise.all([
    customService.getHeader(),
    customService.getFooter(),
    pageService.getLegals(params.uid),
  ])
  return {
    props: {
      header,
      footer,
      page,
    },
    revalidate: 180,
  }
}

export async function getStaticPaths() {
  const customService = new CustomService()
  const pages = await customService.getAllLegals({ lang: '*' })
  const paths = pages.map((page) => ({
    params: {
      uid: page.uid,
    },
    locale: page.lang,
  }))
  return { paths, fallback: false }
}
