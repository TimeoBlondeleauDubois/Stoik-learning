import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import React from "react";
import styles from './styles.module.scss';

/**
 * @typedef {import("@prismicio/client").Content.FifthSectionSlice} FifthSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FifthSectionSlice>} FifthSectionProps
 * @param {FifthSectionProps}
 */
const FifthSection = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.FirstSection}>
          <div className={styles.title}>
            <PrismicRichText field={slice.primary.title} />
          </div>
          <div className={styles.paragraph}>
            <PrismicRichText field={slice.primary.paragraph} />
          </div>
          <PrismicNextLink className={styles.button} field={slice.primary.buttonlink}>
            <PrismicRichText field={slice.primary.buttonlabel} />
          </PrismicNextLink>
        </div>
        <div className={styles.SecondSection}>
          <div className={styles.SecondSectionWrapper}>
            <div className={styles.SecondSectionContainer}>
              {slice.items.map((item, index) => (
                <div key={index} className={styles.logocontainer}>
                  <PrismicNextImage key={index} className={styles.logo} field={item.logo} />
                </div>
              ))}
              {slice.items.map((item, index) => (
                <div key={index} className={styles.logocontainer}>
                  <PrismicNextImage key={index} className={styles.logo} field={item.logo} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default FifthSection;
