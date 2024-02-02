import TextDefault from './default'

const Text = ({ slice }) => {
  switch (slice.variation) {
    case 'default':
      return <TextDefault slice={slice} />
    default:
      return null
  }
}
    
export default Text