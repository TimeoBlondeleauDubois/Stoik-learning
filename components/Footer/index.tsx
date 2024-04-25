import React from "react";
import { SliceZone } from '@prismicio/react'
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import styles from "./style.module.scss";
import { components as componentsSlices } from '@/sections/slices'

const Footer = ({ footer }) => {
  console.log(footer);
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.SecondContainer}>
            <div className={styles.stoiklogo}>
              <PrismicNextImage field={footer.data.stoiklogo} />
            </div>
            <div className={styles.SliceZone}>
              <SliceZone
                slices={footer.data.slices1}
                components={{
                  ...componentsSlices,
                }}
              />
            </div>
          </div>
          <div className={styles.LogoSection}>
            {footer.data.socials.map((item, index) => (
              <div className={styles.ContainerForMargin}>
                <PrismicNextLink key={index} field={item.socialslink}>
                  <div className={styles.LogoInSection}>
                    <PrismicNextImage key={index} field={item.socialslogo} />
                  </div>
                </PrismicNextLink>
              </div>
            ))}
          </div>
          <div className={styles.ThirdContainer}>
            <div className={styles.paragraph}>
              <PrismicRichText field={footer.data.paragraph} />
            </div>
            <div className={styles.logos}>
              <PrismicNextImage field={footer.data.logos} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
