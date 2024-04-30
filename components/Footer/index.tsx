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
            <PrismicNextLink field={footer.data.stoiklink}>
                <PrismicNextImage field={footer.data.stoiklogo} />
              </PrismicNextLink>
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
          <div className={styles.stoiklogoMobile}>
            <PrismicNextLink field={footer.data.stoiklink}>
              <PrismicNextImage className={styles.StoikPicture} field={footer.data.stoiklogo} />
            </PrismicNextLink>
          </div>
          <div className={styles.LogoSection}>
            {footer.data.socials.map((item) => (
              <div key={item.id} className={styles.ContainerForMargin}>
                <PrismicNextLink field={item.socialslink}>
                  <div className={styles.LogoInSection}>
                    <PrismicNextImage field={item.socialslogo} />
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
