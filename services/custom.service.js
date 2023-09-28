import { ApiService } from './api.service'

export class CustomService {
  apiService
  lang = 'fr-fr'

  constructor(lang) {
    this.apiService = ApiService.getInstance()
    this.lang = lang
  }

  async getFooter() {
    return await this.apiService.getFooter({ lang: this.lang })
  }
  async getHeader() {
    return await this.apiService.getHeader({
      lang: this.lang,
      headerType: 'header',
    })
  }
}
