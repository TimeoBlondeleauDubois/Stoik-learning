import { PrismicNextImage } from '@prismicio/next'
import styles from './styles.module.scss'
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextLink } from "@prismicio/next";

const Hero404Default = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.section_hero404_default}
    >
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.LeftContainer}>
            <div className={styles.title}>
              <PrismicRichText field={slice.primary.title} />
            </div>
            <div className={styles.paragraph}>
              <PrismicRichText field={slice.primary.paragraph} />
            </div>
            <PrismicNextLink className={styles.button} field={slice.primary.btnlnk}>
              <>{slice.primary.btntxt}</>
            </PrismicNextLink>
          </div>
          <div className={styles.RightContainer}>
            <PrismicNextImage className={styles.picture} field={slice.primary.img} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero404Default
