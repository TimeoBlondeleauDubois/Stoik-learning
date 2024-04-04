import { useEffect, useState } from 'react'
import { GoogleTagManager } from '@next/third-parties/google'

import DevTools from './DevTools'
import SEO from './SEO'
import Header from './Header'
import Footer from './Footer'
import Cookie from './Cookie'

export default function Layout({ children, currentPage, seo, header, footer }) {
  const [isDevTools, setIsDevTools] = useState(false)

  const handleMotion = (event) => {
    const { accelerationIncludingGravity } = event

    const totalAcceleration = Math.sqrt(
      accelerationIncludingGravity.x ** 2 +
        accelerationIncludingGravity.y ** 2 +
        accelerationIncludingGravity.z ** 2
    )

    const shakeThreshold = 25

    if (totalAcceleration > shakeThreshold) {
      setIsDevTools(!isDevTools)
    }
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Escape') {
      setIsDevTools(!isDevTools)
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress)
    window.addEventListener('devicemotion', handleMotion)
    return () => {
      document.removeEventListener('keydown', handleKeyPress)
      window.removeEventListener('devicemotion', handleMotion)
    }
  })

  return (
    <>
      {isDevTools && <DevTools />}
      {/* <GoogleTagManager gtmId="GTM-ID" /> // Replace GTM-ID with client's GTM ID */}
      <SEO seo={seo} />
      <Cookie />
      <Header header={header} />
      <main>{children}</main>
      <Footer variation={'default'} footer={footer} />
    </>
  )
}
