import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'

import { CustomService } from '@/services/custom.service'
import { getLangFromLocale } from '@/utils/get-lang-from-locale'
import { Button } from '../Button'

import styles from './style.module.scss'
import { PrismicText } from '@prismicio/react'

export default function Cookie() {
  const [isOpen, setIsOpen] = useState(false)

  const closeCookie = () => {
    setIsOpen(false)
  }

  const acceptCookie = () => {
    closeCookie()
    Cookies.set('cookie_accepted', 'true', { expires: 365 })
  }

  useEffect(() => {
    setIsOpen(!Cookies.get('cookie_accepted'))
  }, [])

  const router = useRouter()
  const { locale } = router

  const [dataCookie, setDataCookie] = useState(null)

  const callCustomService = async () => {
    const customService = new CustomService(getLangFromLocale(locale))
    setDataCookie(await customService.getCookie())
  }

  useEffect(() => {
    callCustomService()
  }, [])

  if (!dataCookie) return null

  return (
    <div className={`${styles.cookie} ${isOpen ? styles.open : ''}`}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.close} onClick={closeCookie}>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
          </div>
          <div className={styles.title}>
            <PrismicText field={dataCookie.data.title} />
          </div>
          <div className={styles.text}>
            <PrismicText field={dataCookie.data.txt} />
          </div>
          <div className={styles.container_btn}>
            <Button
              txt={dataCookie.data.btntxt}
              stl={'1'}
              fnctnClck={acceptCookie}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
