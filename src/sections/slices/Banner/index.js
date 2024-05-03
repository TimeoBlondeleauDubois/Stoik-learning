import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import React from "react";
import styles from './styles.module.scss';

/**
 * @typedef {import("@prismicio/client").Content.BannerSlice} BannerSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BannerSlice>} BannerProps
 * @param {BannerProps}
 */
const Banner = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <PrismicRichText field={slice.primary.text}/>
        </div>
        <div className={styles.text}>
        <PrismicNextLink field={slice.primary.link}>
          <PrismicRichText field={slice.primary.en_savoir_plus} />
        </PrismicNextLink>
        </div>
      </div>
    </section>
  );
};

export default Banner;