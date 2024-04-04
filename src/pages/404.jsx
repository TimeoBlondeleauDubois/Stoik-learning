import { SliceZone } from '@prismicio/react'

import Layout from '/components/layout.jsx'
import SEO from '/components/SEO'

import { ApiService } from '/services/api.service'
import { PageService } from '/services/page.service'
import { CustomService } from '/services/custom.service'
import { getLangFromLocale } from '/utils/get-lang-from-locale'
import { components as componentsHeros } from '@/sections/heros'
import { components as componentsSlices } from '@/sections/slices'
import { components as componentsBruno } from '@/sections/bruno'

const p404 = ({ header, footer, page, altPage }) => {
  const data = page.data

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

export default p404

export async function getStaticProps({ locale, previewData }) {
  ApiService.setPreviewData({ previewData })
  const lang = getLangFromLocale(locale)
  const customService = new CustomService(lang)
  const pageService = new PageService(lang)
  const [page, header, footer] = await Promise.all([
    pageService.get404(),
    customService.getHeader(),
    customService.getFooter(),
  ])

  const altPage = await Promise.all(
    page.alternate_languages.map((al) =>
      customService.getPageFromAltLang(al.type, al.uid, al.lang)
    )
  )

  return {
    props: {
      header,
      footer,
      page,
      altPage,
    },
  }
}
