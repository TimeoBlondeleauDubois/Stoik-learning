import { SliceZone } from '@prismicio/react'

import Layout from '@/components/layout'

import { ApiService } from '@/services/api.service'
import { PageService } from '@/services/page.service'
import { CustomService } from '@/services/custom.service'
import { components as componentsHeros } from '@/sections/heros'
import { components as componentsSlices } from '@/sections/slices'
import { components as componentsBruno } from '@/sections/bruno'
import { getLangFromLocale } from '@/utils/get-lang-from-locale'

const Article = ({ page, header, footer, altPage, categorie, article }) => {
  console.log('categorie data:', categorie);
  console.log('article data:', article);
  const { data } = page
  return (
    <Layout
      seo={{
        title: data.meta_title,
        description: data.meta_description,
        image: data.meta_image,
        altPage: altPage,
        currentPath: page.url,
        page: { uid: page.uid, type: page.type },
      }}
      header={header}
      footer={footer}
      currentPage={{ type: page.type }}
      altLang={page.alternate_languages}
    >
      <SliceZone
        slices={data.slices}
        components={{
          ...componentsHeros,
          ...componentsSlices,
          ...componentsBruno,
        }}
      />
    </Layout>
  )
}

export default Article

export async function getStaticProps({ locale, params, previewData }) {
  ApiService.setPreviewData({ previewData })
  const lang = getLangFromLocale(locale)
  const pageService = new PageService(lang)
  const customService = new CustomService(lang)
  const [page, header, footer, categorie, article] = await Promise.all([
    pageService.getArticle(params.uid),
    customService.getHeader(),
    customService.getFooter(),
    pageService.getAllCategories(),
    pageService.getAllArticle(),
  ])

  const altPage = await Promise.all(
    page.alternate_languages.map((al) =>
      customService.getPageFromAltLang(al.type, al.uid, al.lang)
    )
  )

  return {
    props: {
      page,
      header,
      footer,
      altPage,
      categorie,
      article,
    },
  }
}

export async function getStaticPaths() {
  const pageService = new PageService()
  const pages = await pageService.getAllArticle('*')
  const paths = pages.map((page) => ({
    params: {
      uid: page.uid,
    },
    locale: page.lang,
  }))
  return { paths, fallback: false }
}
