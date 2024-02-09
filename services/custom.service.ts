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
}
