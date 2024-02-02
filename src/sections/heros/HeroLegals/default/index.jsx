import { PrismicRichText } from '@prismicio/react'
import styles from './styles.module.scss'

const HeroLegalsDefault = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.section_herolegals_default}
    >
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <PrismicRichText field={slice.primary.title} />
        </div>
      </div>
    </section>
  )
}

export default HeroLegalsDefault
