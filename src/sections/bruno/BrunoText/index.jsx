import BrunoTextDefault from './default'

const BrunoText = ({ slice, ...otherProps }) => {
  switch (slice.variation) {
    case 'default':
      return <BrunoTextDefault slice={slice} {...otherProps} />
    default:
      return null
  }
}
    
export default BrunoText