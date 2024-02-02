import HeroLegalsDefault from './default'

const HeroLegals = ({ slice, ...otherProps }) => {
  switch (slice.variation) {
    case 'default':
      return <HeroLegalsDefault slice={slice} {...otherProps} />
    default:
      return null
  }
}
    
export default HeroLegals