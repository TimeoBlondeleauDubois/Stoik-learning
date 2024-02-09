import Hero404Default from './default'

const Hero404 = ({ slice, ...otherProps }) => {
  switch (slice.variation) {
    case 'default':
      return <Hero404Default slice={slice} {...otherProps} />
    default:
      return null
  }
}
    
export default Hero404