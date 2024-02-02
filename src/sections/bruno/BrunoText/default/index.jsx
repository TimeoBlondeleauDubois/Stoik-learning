import { PrismicRichText } from '@prismicio/react'
import styles from './styles.module.scss'

const BrunoTextDefault = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.section_brunotext_default}
    >
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <PrismicRichText field={slice.primary.txt} />
        </div>
      </div>
    </section>
  )
}

export default BrunoTextDefault
