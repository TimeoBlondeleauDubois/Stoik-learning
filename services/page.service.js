import { ApiService } from './api.service'

export class PageService {
  apiService
  lang = 'fr-fr'

  constructor(lang) {
    this.apiService = ApiService.getInstance()
    this.lang = lang
  }

  async getHeader() {
    return this.apiService.getHeader()
  }

  async getFooter() {
    return this.apiService.getFooter()
  }

  async getHome() {
    return this.apiService.getPage('home', 'home', { lang: this.lang })
  }
}
