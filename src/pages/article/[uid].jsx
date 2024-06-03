import { PrismicImage, SliceZone } from '@prismicio/react'
import Layout from '@/components/layout'
import { ApiService } from '@/services/api.service'
import { PageService } from '@/services/page.service'
import { CustomService } from '@/services/custom.service'
import { components as componentsHeros } from '@/sections/heros'
import { components as componentsSlices } from '@/sections/slices'
import { components as componentsBruno } from '@/sections/bruno'
import { PrismicRichText } from '@prismicio/react'
import { getLangFromLocale } from '@/utils/get-lang-from-locale'
import styles from './styles.module.scss'

const Article = ({ page, header, footer, altPage, article }) => {
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

      <div className={styles.global_container}>
        <div className={styles.left_container}>
          <div className={styles.categorie_date_container}>
            <p className={styles.categorie_name}>{article.data.categorie.uid}</p>
            <p className={styles.point}>.</p>
            <p className={styles.date_de_creation}>{article.data.date_de_creation}</p>
          </div>
          <PrismicRichText className={styles.title} field={article.data.titlearticle} />
          <PrismicRichText className={styles.description} field={article.data.descriptionarticle} />
        </div>
        <div className={styles.right_container}>
          <PrismicImage className={styles.picture} field={article.data.picture} />
        </div>
      </div>
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
    pageService.getCategorie(params.uid),
    pageService.getArticle(params.uid),
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
