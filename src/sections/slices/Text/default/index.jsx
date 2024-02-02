import styles from './styles.module.scss'

const TextDefault = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.section_text_default}
    >
      <div className={styles.wrapper}>
        <div className={styles.container}>
          TEXT DEFAULT
        </div>
      </div>
    </section>
  )
}

export default TextDefault