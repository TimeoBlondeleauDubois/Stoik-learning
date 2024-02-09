import HeroHomeDefault from './default'

const HeroHome = ({ slice, ...otherProps }) => {
  switch (slice.variation) {
    case 'default':
      return <HeroHomeDefault slice={slice} {...otherProps} />
    default:
      return null
  }
}
    
export default HeroHome