import { ApiService } from './api.service'

export class CustomService {
  apiService
  lang = 'fr-fr'

  constructor(lang) {
    this.apiService = ApiService.getInstance()
    this.lang = lang
  }

  async getFooter() {
    return await this.apiService.getSinglePage('footer', { lang: this.lang })
  }

  async getHeader() {
    return await this.apiService.getSinglePage('header', { lang: this.lang })
  }

  async getAllLegals({ lang, limit = 25 }) {
    return this.apiService.getAllType('legals', { lang, limit })
  }
}
