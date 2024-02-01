import BrunoTextDefault from './default'

const BrunoText = ({ slice }) => {
  switch (slice.variation) {
    case 'default':
      return <BrunoTextDefault slice={slice} />
    default:
      return null
  }
}
    
export default BrunoText