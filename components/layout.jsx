import Footer from './Footer'
import Header from './Header'
import DevTools from './DevTools'
import { useEffect, useState } from 'react'

export default function Layout({ children, header, footer }) {
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
      {/* <SEO title={title} description={description} image={image} /> */}
      <Header header={header} />
      <main>{children}</main>
      <Footer variation={'default'} footer={footer} />
      <Footer variation={'variant1'} footer={footer} />
      <Footer variation={'variant2'} footer={footer} />
    </>
  )
}
