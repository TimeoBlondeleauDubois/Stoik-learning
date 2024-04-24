import Layout from '@/components/layout'

import { ApiService } from '@/services/api.service'
import { PageService } from '@/services/page.service'
import { CustomService } from '@/services/custom.service'
import { getLangFromLocale } from '@/utils/get-lang-from-locale'

export default function Home( { page, header }) { 
  return (<Layout header={header}></Layout>)
}

export async function getStaticProps({ locale, previewData }) {
  const lang = getLangFromLocale(locale)

  ApiService.setPreviewData({ previewData })
  const pageService = new PageService(lang)
  const customService = new CustomService(lang)

  const [page, header] = await Promise.all([pageService.getHome(), customService.getHeader()])


  return {
    props: {
      page,
      header,
    },
  }
}
