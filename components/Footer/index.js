import FooterDefault from './default'
import FooterVariant1 from './variant1'
import FooterVariant2 from './variant2'
import FooterVariant3 from './variant3'
import FooterVariant4 from './variant4'
import FooterVariant5 from './variant5'

const Footer = ({ variation }) => {
  switch (variation) {
    case 'variant5':
      return <FooterVariant5 />
    case 'variant4':
      return <FooterVariant4 />
    case 'variant3':
      return <FooterVariant3 />
    case 'variant2':
      return <FooterVariant2 />
    case 'variant1':
      return <FooterVariant1 />
    default:
      return <FooterDefault />
  }
}

export default Footer
