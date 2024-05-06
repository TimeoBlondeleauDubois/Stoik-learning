import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import React from "react";
import styles from './styles.module.scss'

/**
 * @typedef {import("@prismicio/client").Content.ThirdSectionSlice} ThirdSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ThirdSectionSlice>} ThirdSectionProps
 * @param {ThirdSectionProps}
 */
const ThirdSection = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.title}>
            <PrismicRichText field={slice.primary.title} />
          </div>
          <div className={styles.paragraph}>
            <PrismicRichText field={slice.primary.paragraph} />
          </div>
          <div className={styles.LogoContainer}>
            {slice.items.map((item, index) => (
            <div className={styles.logo} key={index}>
              <PrismicNextImage field={item.logo} />
            </div>
            ))}
          </div>
          <div className={styles.button}>
            <PrismicNextLink field={slice.primary.buttonlink}>
              <PrismicRichText field={slice.primary.buttonlabel} />
            </PrismicNextLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
