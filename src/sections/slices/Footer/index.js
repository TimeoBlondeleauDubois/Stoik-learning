import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import React from "react";
import styles from './styles.module.scss'

/**
 * @typedef {import("@prismicio/client").Content.FooterSlice} FooterSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FooterSlice>} FooterProps
 * @param {FooterProps}
 */
const Footer = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}>
        
      <div className={styles.title}>
        <PrismicRichText field={slice.primary.title} />
      </div>
      <div className={styles.description}>
      {slice.items.map((item, index) => (
          <div className={styles.LinkInContainer}>
            <PrismicNextLink key={index} field={item.link}>
              <PrismicRichText key={index} field={item.label} />
            </PrismicNextLink>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Footer;
