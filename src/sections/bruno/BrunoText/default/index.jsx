import { PrismicRichText } from '@prismicio/react';
import styles from './styles.module.scss';

const BrunoTextDefault = ({ slice }) => {
  
  console.log(slice.primary);
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.section_brunotext_default}
    >
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.text}>
            <PrismicRichText field={slice.primary.title} />
            <PrismicRichText field={slice.primary.txt} />
          </div>
          <div className={styles.LastUpdate}>
            <PrismicRichText field={slice.primary.lastupdate} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrunoTextDefault;
