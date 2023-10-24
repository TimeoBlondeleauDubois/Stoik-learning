import FooterDefault from './default'
import FooterVariant1 from './variant1'
import FooterVariant2 from './variant2'

const Footer = ({ variation }) => {
  switch (variation) {
    case 'variant2':
      return <FooterVariant2 />
    case 'variant1':
      return <FooterVariant1 />
    default:
      return <FooterDefault />
  }
}

export default Footer
