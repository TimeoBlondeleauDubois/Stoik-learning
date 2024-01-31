import { ApiService } from '/services/api.service'
import { PageService } from '/services/page.service'
import { getLangFromLocale } from '/utils/get-lang-from-locale'

import Layout from '/components/layout.jsx'
import SEO from '/components/SEO'

const p404 = ({ header, footer, page }) => {
  const data = page.data

  return (
    <Layout header={header} footer={footer} page={page.uid}>
      <SEO
        title={data.meta_title}
        description={data.meta_description}
        image={data.meta_image}
      />
    </Layout>
  )
}

export default p404

export async function getStaticProps({ locale, previewData }) {
  ApiService.setPreviewData({ previewData })
  const lang = getLangFromLocale(locale)
  const pageService = new PageService(lang)
  const [page] = await Promise.all([pageService.get404()])
  return {
    props: {
      page,
    },
  }
}
