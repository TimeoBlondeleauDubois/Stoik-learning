import FooterDefault from './default'
import FooterVariant1 from './variant1'

const Footer = ({ variation }) => {
  switch (variation) {
    case 'variant1':
      return <FooterVariant1 />
    default:
      return <FooterDefault />
  }
}

export default Footer
