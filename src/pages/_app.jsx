import '@/styles/common/reset.scss'
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import { repositoryName } from '../prismicio'

import Link from 'next/link'

import { LightboxProvider } from '../../context/lightboxContext'

export default function App({ Component, pageProps }) {
  return (
    <LightboxProvider>
      <PrismicProvider internalLinkComponent={(props) => <Link {...props} />}>
        <PrismicPreview repositoryName={repositoryName}>
          <Component {...pageProps} />
        </PrismicPreview>
      </PrismicProvider>
    </LightboxProvider>
  )
}
