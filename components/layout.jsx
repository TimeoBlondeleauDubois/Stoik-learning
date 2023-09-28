import { SliceZone } from '@prismicio/react'
// import { components } from '../slices'
import Footer from './Footer'
import Header from './Header'
export default function Layout({ children, header, footer }) {
  return (
    <>
      {/* <SliceZone slices={seo} components={components} /> */}
      <Header header={header} />
      <main>{children}</main>
      <Footer variation={'default'} footer={footer} />
    </>
  )
}
