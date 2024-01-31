import * as prismic from '@prismicio/client'
import { CreateClientConfig } from '@prismicio/next'
import { createClient } from '../src/prismicio'
import { AllDocumentTypes } from '../prismicio-types'

export class ApiService {
  static instance: ApiService
  public client: prismic.Client<AllDocumentTypes>

  constructor(client: prismic.Client<AllDocumentTypes>) {
    this.client = client
  }

  static getInstance({ previewData }: CreateClientConfig = {}) {
    if (!this.instance || previewData) {
      const c = createClient({ previewData })
      this.instance = new ApiService(c)
    }
    return this.instance
  }

  static setPreviewData({ previewData }: CreateClientConfig) {
    const c = createClient({ previewData })
    this.instance = new ApiService(c)
  }

  async getSinglePage(
    documentType: AllDocumentTypes['type'],
    lang: string,
    option?: object
  ): Promise<AllDocumentTypes> {
    return this.client.getSingle(documentType, { lang, ...option })
  }

  async getPageByUID(
    documentType: AllDocumentTypes['type'],
    uid: string,
    lang: string,
    option?: object
  ): Promise<AllDocumentTypes> {
    return this.client.getByUID(documentType, uid, { lang, ...option })
  }

  async getAllDocumentTypes(
    documentType: AllDocumentTypes['type'],
    lang: string,
    limit?: number,
    option?: object
  ): Promise<AllDocumentTypes[]> {
    return this.client.getAllByType(documentType, {
      lang,
      limit,
      ...option,
    })
  }
}
