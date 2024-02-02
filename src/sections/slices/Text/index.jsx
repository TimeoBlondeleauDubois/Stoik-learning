import TextDefault from './default'

const Text = ({ slice, ...otherProps }) => {
  switch (slice.variation) {
    case 'default':
      return <TextDefault slice={slice} {...otherProps} />
    default:
      return null
  }
}
    
export default Text