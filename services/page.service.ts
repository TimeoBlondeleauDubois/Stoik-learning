import { AllDocumentTypes } from '../prismicio-types'
import { ApiService } from './api.service'

export class PageService {
  apiService: ApiService

  constructor(private readonly lang: string) {
    this.apiService = ApiService.getInstance()
    this.lang = lang
  }

  async getHome(): Promise<AllDocumentTypes> {
    return await this.apiService.getSinglePage('home', this.lang)
  }

  async get404(): Promise<AllDocumentTypes> {
    return await this.apiService.getSinglePage('p404', this.lang)
  }

  async getLegals(uid: string): Promise<AllDocumentTypes> {
    return await this.apiService.getPageByUID('legals', uid, this.lang)
  }

  async getAllLegals(lang: string = this.lang): Promise<AllDocumentTypes[]> {
    return await this.apiService.getAllDocumentTypes('legals', lang)
  }

}
