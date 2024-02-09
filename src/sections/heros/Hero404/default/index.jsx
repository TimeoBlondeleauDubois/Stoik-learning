import { PrismicNextImage } from '@prismicio/next'
import styles from './styles.module.scss'
import { PrismicRichText } from '@prismicio/react'
import { Button } from '@/components/Button'

const Hero404Default = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.section_hero404_default}
    >
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.container_img}>
            <PrismicNextImage field={slice.primary.img} />
          </div>
          <PrismicRichText field={slice.primary.title} />
          <Button
            txt={slice.primary.btntxt}
            lnk={slice.primary.btnlnk}
            stl={'1'}
          />
        </div>
      </div>
    </section>
  )
}

export default Hero404Default
