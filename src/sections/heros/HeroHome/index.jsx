import HeroHomeDefault from './default'

const HeroHome = ({ slice }) => {
  switch (slice.variation) {
    case 'default':
      return <HeroHomeDefault slice={slice} />
    default:
      return null
  }
}
    
export default HeroHome