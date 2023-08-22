import { ApiService } from '../../services/api.service'
import { getLangFromLocale } from '../../utils/get-lang-from-locale'
import { PageService } from '../../services/page.service'
import Footer from '../../components/Footer'

export default function Home() {
  return (
    <>
      <Footer variation={'default'} />
    </>
  )
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
