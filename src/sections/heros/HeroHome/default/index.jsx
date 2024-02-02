import styles from './styles.module.scss'

const HeroHomeDefault = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.section_herohome_default}
    >
      <div className={styles.wrapper}>
        <div className={styles.container}>
          HEROHOME DEFAULT
        </div>
      </div>
    </section>
  )
}

export default HeroHomeDefault