import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import React from "react";
import styles from './styles.module.scss'

/**
 * @typedef {import("@prismicio/client").Content.FirstSectionSlice} FirstSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FirstSectionSlice>} FirstSectionProps
 * @param {FirstSectionProps}
 */
const FirstSection = ({ slice }) => {
return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
    <div className={styles.wrapper}>
      <div className={styles.first_container}>
        <div className={styles.title}>
          <PrismicRichText field={slice.primary.title} />
        </div>
        <div className={styles.paragraph}>
         <PrismicRichText field={slice.primary.paragraph} />
        </div>
      </div>
      <div className={styles.second_container}>
        <div className={styles.second_container_wrapper}>
          <PrismicNextLink field={slice.primary.linkbox1}>
            <div className={styles.flex}>
              <div className={styles.picture1box1}>
                <PrismicNextImage field={slice.primary.picture1box1} />
              </div>
              <div className={styles.container_picture2box1}>
                <PrismicNextImage className={styles.picture2box1} field={slice.primary.picture2box1} />
              </div>
            </div>
            <div className={styles.titlebox1}>
              <PrismicRichText field={slice.primary.titlebox1} />
            </div>
            <div className={styles.paragraphbox1}>
              <PrismicRichText field={slice.primary.paragraphbox1} />
            </div>
          </PrismicNextLink>
        </div>
        <div className={styles.third_container_wrapper}>
          <PrismicNextLink field={slice.primary.linkbox2}>
            <div className={styles.flex}>
              <div className={styles.picture1box2}>
                <PrismicNextImage field={slice.primary.picture1box2} />
              </div>
              <div className={styles.container_picture2box2}>
                <PrismicNextImage className={styles.picture2box2} field={slice.primary.picture2box2} />
              </div>
            </div>
            <div className={styles.titlebox2}>
              <PrismicRichText field={slice.primary.titlebox2} />
            </div>
            <div className={styles.paragraphbox2}>
              <PrismicRichText field={slice.primary.paragraphbox2} />
            </div>
          </PrismicNextLink>
        </div>
      </div>
    </div>
    </section>
  );
};

export default FirstSection;
