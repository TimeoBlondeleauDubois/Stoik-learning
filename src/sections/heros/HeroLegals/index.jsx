import HeroLegalsDefault from './default'

const HeroLegals = ({ slice }) => {
  switch (slice.variation) {
    case 'default':
      return <HeroLegalsDefault slice={slice} />
    default:
      return null
  }
}
    
export default HeroLegals