import Footer from './Footer'
import Header from './Header'
import DevTools from './DevTools'
import { useEffect, useState } from 'react'

export default function Layout({ children, header, footer }) {
  const [isEscape, setIsEscape] = useState(false)

  const handleKeyPress = (event) => {
    if (event.key === 'Escape') {
      setIsEscape(!isEscape)
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress)
    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  })

  return (
    <>
      {isEscape && <DevTools />}
      {/* <SEO title={title} description={description} image={image} /> */}
      <Header header={header} />
      <main>{children}</main>
      <Footer variation={'default'} footer={footer} />
    </>
  )
}
