import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import React from "react";
import styles from './styles.module.scss'

/**
 * @typedef {import("@prismicio/client").Content.FourthSectionSlice} FourthSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FourthSectionSlice>} FourthSectionProps
 * @param {FourthSectionProps}
 */
const FourthSection = ({ slice }) => {
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
          <div className={styles.BoxContainer}>
            {slice.items.map((item, index) => (
              <div className={styles.Box} key={index}>
                <PrismicNextLink field={item.linkbox}>
                  <div className={styles.BoxIconContainer}>
                    <div className={styles.icon1}>
                      <PrismicNextImage field={item.icon1} />
                    </div>
                    <div className={styles.icon2}>
                      <PrismicNextImage className={styles.rotate} field={item.icon2} />
                    </div>
                  </div>
                  <div className={styles.BoxTitle}>
                    <PrismicRichText field={item.titlebox} />
                  </div>
                  <div className={styles.BoxParagraph}>
                    <PrismicRichText field={item.paragraphbox} />
                  </div>
                </PrismicNextLink>
              </div>
              ))}
          </div>
          <PrismicNextLink className={styles.button} field={slice.primary.buttonlink}>
            <PrismicRichText  field={slice.primary.buttonlabel} />
          </PrismicNextLink>
        </div>
      </div>
    </section>
  );
};

export default FourthSection;
