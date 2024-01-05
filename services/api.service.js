import { createClient } from '../src/prismicio'

export class ApiService {
  static #instance
  client
  lang = 'fr-fr'

  static getInstance({ previewData } = {}) {
    if (!this.#instance) {
      this.#instance = new ApiService()
      this.#instance.client = createClient({ previewData })
    } else if (previewData) {
      this.#instance.client = createClient({ previewData })
    }
    return this.#instance
  }

  static setPreviewData({ previewData }) {
    this.getInstance({ previewData })
  }

  async getPage(documentType, uid, { lang }) {
    return this.client.getByUID(documentType, uid, { lang })
  }

  async getSinglePage(documentType, { lang }) {
    return this.client.getSingle(documentType, { lang })
  }

  async getAllType(documentType, { lang, limit, option }) {
    return this.client.getAllByType(documentType, {
      lang,
      limit,
      ...option,
    })
  }
}
