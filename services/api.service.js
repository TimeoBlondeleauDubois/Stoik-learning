import { createClient } from 'prismicio.js'

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

  async getHeader() {
    return await this.client.getSingle('header', { lang: this.lang })
  }

  async getFooter() {
    return await this.client.getSingle('footer', { lang: this.lang })
  }

  async getPage(documentType, uid, { lang }) {
    return this.client.getByUID(documentType, uid, { lang })
  }

  async getAllType({ type, lang, limit, option }) {
    return this.apiService.getAllByType(type, {
      lang: lang,
      limit,
      ...option,
    })
  }
}
