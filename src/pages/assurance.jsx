import { SliceZone } from '@prismicio/react'

import Layout from '@/components/layout'

import { ApiService } from '@/services/api.service'
import { PageService } from '@/services/page.service'
import { CustomService } from '@/services/custom.service'
import { components as componentsHeros } from '@/sections/heros'
import { components as componentsSlices } from '@/sections/slices'
import { components as componentsBruno } from '@/sections/bruno'
import { getLangFromLocale } from '@/utils/get-lang-from-locale'


export default function Assurance({ page, header, footer }) { 
  const { data } = page 
  return (<Layout header={header} footer={footer} currentPage="assurance">
    <SliceZone
    slices={data.slices}
    components={{
      ...componentsHeros,
      ...componentsSlices,
      ...componentsBruno,
    }}
  /></Layout>)
}

export async function getStaticProps({ locale, previewData }) {
  const lang = getLangFromLocale(locale)

  ApiService.setPreviewData({ previewData })
  const pageService = new PageService(lang)
  const customService = new CustomService(lang)

  const [page, header, footer] = await Promise.all([pageService.getAssurance(), customService.getHeader(), customService.getFooter()])

  return {
    props: {
      page,
      header,
      footer,
    },
  }
}
