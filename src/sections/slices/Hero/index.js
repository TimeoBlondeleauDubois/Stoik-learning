import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import React from "react";
import styles from './styles.module.scss'

/**
 * @typedef {import("@prismicio/client").Content.HeroSlice} HeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSlice>} HeroProps
 * @param {HeroProps}
 */
const Hero = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className={styles.wrappercontainer}>
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <div className={styles.FirstContainer}>
              <div className={styles.title}>
              <PrismicRichText field={slice.primary.herotitle} />
              </div>
              <div className={styles.paragraph}>
                <PrismicRichText field={slice.primary.heroparagraph} />
              </div>
              <div className={styles.ThirdContainer}>
                <PrismicNextLink className={styles.linkbutton1} field={slice.primary.linkbutton1}>
                  <PrismicRichText field={slice.primary.textbutton1} />
                </PrismicNextLink>
                <PrismicNextLink className={styles.linkbutton2} field={slice.primary.linkbutton2}>
                  <PrismicRichText field={slice.primary.textbutton2} />
                </PrismicNextLink>
              </div>
            </div>
          </div>
          <div className={styles.SecondContainer}>
              <PrismicNextImage priority className={styles.picture1} field={slice.primary.picture1} />
              <div className={styles.picture2container}>
                <PrismicNextImage className={styles.picture2} field={slice.primary.picture2} />
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
