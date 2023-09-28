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

  async getHeader({ lang }) {
    return await this.client.getSingle('header', { lang: lang })
  }

  async getFooter({ lang }) {
    return await this.client.getSingle('footer', { lang: lang })
  }

  async getPage(documentType, uid, { lang }) {
    return this.client.getByUID(documentType, uid, { lang })
  }
  async getAllLegals({ lang, limit = 25 }) {
    return await this.client.getAllByType('legals', {
      lang,
      limit,
    })
  }
  async getAllType({ type, lang, limit, option }) {
    return this.apiService.getAllByType(type, {
      lang: lang,
      limit,
      ...option,
    })
  }
}
