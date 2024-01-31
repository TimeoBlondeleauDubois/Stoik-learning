/*************************/
/*  CREATE ARRAY PAGES  */
/*************************/
const fs = require('fs')
const path = require('path')

const unwantedIds = ['home', '404', 'p404']

const customtypesPath = path.join(__dirname, `../customtypes`)

const customtypesFiles = fs.readdirSync(customtypesPath)

const customtypesFolders = customtypesFiles
  .filter((file) => fs.statSync(path.join(customtypesPath, file)).isDirectory())
  .map((folder) => folder)

const customtypesFoldersPage = customtypesFolders.filter((folder) => {
  const customtypesPathTempo = path.join(
    __dirname,
    `../customtypes/${folder}/index.json`
  )
  const custometypesContent = JSON.parse(
    fs.readFileSync(customtypesPathTempo, 'utf-8')
  )
  return (
    custometypesContent['format'] === 'page' &&
    !unwantedIds.includes(custometypesContent['id'])
  )
})

// On parcourt les customtypes format "page"
customtypesFoldersPage.map((folder) => {
  const pageType = folder
  const pageName = pageType
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')

  const pageTypePath = path.join(__dirname, `../src/pages/${pageType}`)

  if (fs.existsSync(pageTypePath)) return

  fs.mkdirSync(pageTypePath)

  const indexContent = `import { SliceZone } from '@prismicio/react'

import { ApiService } from '@/services/api.service'
import { PageService } from '@/services/page.service'
import { CustomService } from '@/services/custom.service'

import Layout from '@/components/layout'
import { components } from '../../slices'
import { getLangFromLocale } from '@/utils/get-lang-from-locale'

import styles from './styles.module.scss'

const ${pageName} = ({ page, header }) => {
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
      <section className={styles.section_hero}>
        <div className={styles.wrapper}>
          <div className={styles.container}>
            SECTION HERO ${pageName.toUpperCase()}
          </div>
        </div>
      </section>
      <SliceZone slices={data.slices} components={components} />
    </Layout>
  )
}

export default ${pageName}

export async function getStaticProps({ locale, params, previewData }) {
  ApiService.setPreviewData({ previewData })
  const lang = getLangFromLocale(locale)
  const pageService = new PageService(lang)
  const customService = new CustomService(lang)
  const [page, header] = await Promise.all([
    pageService.get${pageName}(params.uid),
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
  const pages = await pageService.getAll${pageName}({ lang: '*' })
  const paths = pages.map((page) => ({
    params: {
      uid: page.uid,
    },
    locale: page.lang,
  }))
  return { paths, fallback: false }
}
`

  fs.writeFileSync(path.join(pageTypePath, '[uid].jsx'), indexContent)

  const stylesContent = `@import "@/styles/common/globals.scss";

.section_hero {
  .wrapper {
    @include styleGrid();
  }
  .container {

  }
}
`
  fs.writeFileSync(path.join(pageTypePath, 'styles.module.scss'), stylesContent)

  console.log(`Dossier "${pageType}" créé avec succès dans le dossier pages.`)

  /*************************/
  /*  UPDATE TYPE SERVICE  */
  /*************************/

  const pageService = path.join(__dirname, `../services/page.service.ts`)

  const pageServiceContent = fs.readFileSync(pageService, 'utf-8')

  const pageServiceContentNew =
    pageServiceContent.slice(0, -2) +
    `
  async get${pageName}(uid: string): Promise<AllDocumentTypes> {
    return await this.apiService.getPageByUID('${pageType}', uid, this.lang)
  }

  async getAll${pageName}(): Promise<AllDocumentTypes[]> {
    return await this.apiService.getAllDocumentTypes('${pageType}', this.lang)
  }

}
`

  fs.writeFileSync(pageService, pageServiceContentNew)

  /***********************/
  /*  UPDATE PRISMIC IO  */
  /***********************/

  const prismicioPath = path.join(__dirname, `../src/prismicio.js`)

  const prismicioContent = fs.readFileSync(prismicioPath, 'utf-8')

  const insertHere = prismicioContent.indexOf('},\n]')

  if (insertHere === -1) {
    console.error('IndexOf non trouvée dans le fichier existant.')
    process.exit(1)
  }

  const prismicioContentNew =
    prismicioContent.slice(0, insertHere) +
    `},\n  {
    type: '${pageType}',
    path: '/:lang?/:uid',\n  ` +
    prismicioContent.slice(insertHere)

  fs.writeFileSync(prismicioPath, prismicioContentNew)
})
