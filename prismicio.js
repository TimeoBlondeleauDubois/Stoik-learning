import * as prismic from '@prismicio/client'
import * as prismicNext from '@prismicio/next'
import sm from './slicemachine.config.json'

/**
 * The project's Prismic repository name.
 */
export const repositoryName = prismic.getRepositoryName(sm.apiEndpoint)

const routes = [
  {
    type: 'home',
    path: '/',
    lang: 'fr-fr',
  },
  {
    type: 'home',
    path: '/:lang',
  },
  // {
  //   type: 'p404',
  //   path: '/404',
  // },
  // {
  //   type: 'legals',
  //   path: '/legals/:uid',
  // },
]

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param config {prismicNext.CreateClientConfig} - Configuration for the Prismic client.
 */
export const createClient = (config = {}) => {
  const client = prismic.createClient(sm.apiEndpoint, {
    routes,
    ...config,
  })

  prismicNext.enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  })

  return client
}
