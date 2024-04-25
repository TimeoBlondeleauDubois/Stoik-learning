import Layout from '@/components/layout'
import { ApiService } from '@/services/api.service'
import { PageService } from '@/services/page.service'
import { CustomService } from '@/services/custom.service'
import { getLangFromLocale } from '@/utils/get-lang-from-locale'

export default function Home({ page, header, footer }) { 
  return (<Layout header={header} footer={footer}></Layout>)
}

export async function getStaticProps({ locale, previewData }) {
  const lang = getLangFromLocale(locale)

  ApiService.setPreviewData({ previewData })
  const pageService = new PageService(lang)
  const customService = new CustomService(lang)

  const [page, header, footer] = await Promise.all([pageService.getHome(), customService.getHeader(), customService.getFooter()])


  return {
    props: {
      page,
      header,
      footer,
    },
  }
}
