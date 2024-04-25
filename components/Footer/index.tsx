import React from "react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import styles from "./style.module.scss";

const Footer = ({ footer }) => {
  return (
    <footer className={styles.footer}>
      <PrismicNextImage field={footer.data.stoiklogo} />
      {footer.data.socials.map((item, index) => (
        <PrismicNextLink key={index} field={item.socialslink}>
          <PrismicNextImage key={index} field={item.socialslogo} />
        </PrismicNextLink>
      ))}
      <PrismicRichText field={footer.data.paragraph} />
      <PrismicNextImage field={footer.data.logos} />
    </footer>
  );
};

export default Footer;
