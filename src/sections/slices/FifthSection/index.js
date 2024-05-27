import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import styles from './styles.module.scss';
import React, { useState, useEffect } from "react";

/**
 * @typedef {import("@prismicio/client").Content.FifthSectionSlice} FifthSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FifthSectionSlice>} FifthSectionProps
 * @param {FifthSectionProps} props
 */
const FifthSection = ({ slice }) => {
  const [numLogos, setNumLogos] = useState(5);
  const [bgColor, setBgColor] = useState('#3C1441'); 
  const [textColor, setTextColor] = useState('#FFAAAA');

  useEffect(() => {
    if (slice && slice.items) {
      const numLogos = slice.items.length;
      setNumLogos(numLogos);
      if (typeof document !== 'undefined') {
        document.documentElement.style.setProperty('--nombredelogo', numLogos);
      }
    }
  }, [slice]);

  useEffect(() => {
    if (slice && slice.primary) {
      const colorMap = {
        'blue': '#1362DD',
        'purple': '#3C1441',
      };
      const selectedBgColor = colorMap[slice.primary.bgcolor] || '#3C1441';
      const selectedTextColor = selectedBgColor === '#1362DD' ? '#C8C8FF' : '#FFAAAA';

      setBgColor(selectedBgColor);
      setTextColor(selectedTextColor);

      if (typeof document !== 'undefined') {
        document.documentElement.style.setProperty('--color', selectedBgColor);
        document.documentElement.style.setProperty('--text-color', selectedTextColor);
      }
    }
  }, [slice]);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
    <div className={`${styles.wrapper} ${slice.variation === "nobutton" ? styles.nobutton : ""}`}>
      <div className={styles.container} style={{ backgroundColor: bgColor}}>
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
        <div className={styles.SecondSection} style={{ backgroundColor: bgColor }}>
          <div className={styles.SecondSectionWrapper}>
            <div className={styles.SecondSectionContainer}>
              {slice.items.map((item, index) => (
                <div key={index} className={styles.logocontainer}>
                  <PrismicNextImage priority key={index} className={styles.logo} field={item.logo} />
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
