import { ApiService } from './api.service'

export class PageService {
  apiService
  lang = 'fr-fr'

  constructor(lang) {
    this.apiService = ApiService.getInstance()
    this.lang = lang
  }
  async getHome() {
    return await this.apiService.getPage('home', 'home', {
      lang: this.lang,
    })
  }
  async get404() {
    return await this.apiService.getPage('p404', '404', {
      lang: this.lang,
    })
  }
  async getLegals(uid) {
    return await this.apiService.getPage('legals', uid, {
      lang: this.lang,
    })
  }
}
