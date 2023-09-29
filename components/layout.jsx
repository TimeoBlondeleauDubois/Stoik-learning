import Footer from './Footer'
import Header from './Header'
import DevTools from './DevTools'

export default function Layout({ children, header, footer }) {
  return (
    <>
      <DevTools />
      {/* <SEO title={title} description={description} image={image} /> */}
      <Header header={header} />
      <main>{children}</main>
      <Footer variation={'default'} footer={footer} />
    </>
  )
}
