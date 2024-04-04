import { SliceZone } from '@prismicio/react'

import { ApiService } from '@/services/api.service'
import { PageService } from '@/services/page.service'
import { CustomService } from '@/services/custom.service'

import Layout from '@/components/layout'
import { components as componentsHeros } from '@/sections/heros'
import { components as componentsSlices } from '@/sections/slices'
import { components as componentsBruno } from '@/sections/bruno'
import { getLangFromLocale } from '@/utils/get-lang-from-locale'

const Legals = ({ page, header }) => {
  const { data } = page
  return (
    <Layout
      seo={{
        title: data.meta_title,
        description: data.meta_description,
        image: data.meta_image,
      }}
      header={header}
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

export default Legals

export async function getStaticProps({ locale, params, previewData }) {
  ApiService.setPreviewData({ previewData })
  const lang = getLangFromLocale(locale)
  const pageService = new PageService(lang)
  const customService = new CustomService(lang)
  const [page, header] = await Promise.all([
    pageService.getLegals(params.uid),
    customService.getHeader(),
  ])
  return {
    props: {
      page,
      header,
    },
  }
}

export async function getStaticPaths() {
  const pageService = new PageService()
  const pages = await pageService.getAllLegals('*')
  const paths = pages.map((page) => ({
    params: {
      uid: page.uid,
    },
    locale: page.lang,
  }))
  return { paths, fallback: false }
}
