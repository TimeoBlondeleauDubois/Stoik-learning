import Layout from '@/components/layout'

import { ApiService } from '@/services/api.service'
import { PageService } from '@/services/page.service'
import { getLangFromLocale } from '@/utils/get-lang-from-locale'

export default function Home() {
  return <Layout />
}

export async function getStaticProps({ locale, previewData }) {
  const lang = getLangFromLocale(locale)

  ApiService.setPreviewData({ previewData })
  const pageService = new PageService(lang)

  const [page] = await Promise.all([pageService.getHome()])

  return {
    props: {
      page,
    },
  }
}
