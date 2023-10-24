import FooterDefault from './default'
import FooterVariant1 from './variant1'
import FooterVariant2 from './variant2'
import FooterVariant4 from './variant4'

const Footer = ({ variation }) => {
  switch (variation) {
    case 'variant4':
      return <FooterVariant4 />
    case 'variant2':
      return <FooterVariant2 />
    case 'variant1':
      return <FooterVariant1 />
    default:
      return <FooterDefault />
  }
}

export default Footer
