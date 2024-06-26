import { AllDocumentTypes } from '../prismicio-types'
import { ApiService } from './api.service'

export class CustomService {
  apiService: ApiService

  constructor(private readonly lang: string) {
    this.apiService = ApiService.getInstance()
    this.lang = lang
  }

  async getFooter(): Promise<AllDocumentTypes> {
    return await this.apiService.getSinglePage('footer', this.lang)
  }

  async getHeader(): Promise<AllDocumentTypes> {
    return await this.apiService.getSinglePage('header', this.lang)
  }

  async getCookie(): Promise<AllDocumentTypes> {
    return await this.apiService.getSinglePage('cookie', this.lang)
  }

  async getSocialMedia(): Promise<AllDocumentTypes> {
    return await this.apiService.getSinglePage('social_media', this.lang)
  }

  async getShareArticle(): Promise<AllDocumentTypes> {
    return await this.apiService.getSinglePage('share_article', this.lang)
  }

  async getLogoBank(): Promise<AllDocumentTypes> {
    return await this.apiService.getSinglePage('logo_bank', this.lang)
  }

  async getPageFromAltLang(
    type: AllDocumentTypes['type'],
    uid: string,
    lang: string
  ): Promise<AllDocumentTypes> {
    return this.apiService.getPageByUID(type, uid, lang, {
      graphQuery: `
        {
          ${type} {
            meta_title
          }
        }
      `,
    })
  }
}
