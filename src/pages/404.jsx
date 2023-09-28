import { ApiService } from '/services/api.service'
import { CustomService } from '/services/custom.service'
import { PageService } from '/services/page.service'
import { getLangFromLocale } from '/utils/get-lang-from-locale'

import Layout from '/components/layout.jsx'
import SEO from '/components/SEO'

import styles from '@/styles/pages/404.module.scss'

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
  const customService = new CustomService(lang)
  const pageService = new PageService(lang)
  const [header, footer, page] = await Promise.all([
    customService.getHeader(),
    customService.getFooter(),
    pageService.get404(),
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
