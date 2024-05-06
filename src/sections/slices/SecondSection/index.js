import React from 'react';
import styles from './styles.module.scss'
import { PrismicRichText } from '@prismicio/react';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';

/**
 * @typedef {import("@prismicio/client").Content.SecondSectionSlice} SecondSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SecondSectionSlice>} SecondSectionProps
 * @param {SecondSectionProps}
 */
const SecondSection = ({ slice }) => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.TopContainer}>
            <div className={styles.WrapperTopContainer}>
              <div className={styles.title}>
                <PrismicRichText field={slice.primary.title} />
              </div>
              <div className={styles.paragraph}>
                <PrismicRichText field={slice.primary.paragraph} />
              </div>
              <PrismicNextLink className={styles.Button} field={slice.primary.button_link}>
                <PrismicRichText field={slice.primary.buttonlabel} />
              </PrismicNextLink>
            </div>
            <PrismicNextImage className={styles.picture} field={slice.primary.picture} />
          </div>
          <div className={styles.BottomContainer}>
            <div className={styles.FirstContainer}>
              <div className={styles.FCPictureContainer}>
                <PrismicNextImage className={styles.FCPicture} field={slice.primary.logo1} />
              </div>
              <div>
                <div className={styles.FCTitle}>
                  <PrismicRichText field={slice.primary.smalltitle1} />
                </div>
                <div className={styles.FCParagraph}>
                  <PrismicRichText field={slice.primary.smallparagraph1} />
                </div>
              </div>
            </div>
            <div className={styles.SecondContainer}>
              <div className={styles.SCPictureContainer}>
                <PrismicNextImage className={styles.SCPicture} field={slice.primary.logo2} />
              </div>
              <div>
                <div className={styles.SCTitle}>
                  <PrismicRichText field={slice.primary.smalltitle2} />
                </div>
                <div className={styles.SCParagraph}>
                  <PrismicRichText field={slice.primary.smallparagraph2} />
                </div>
              </div>
            </div>
            <div className={styles.ThirdContainer}>
              <div className={styles.TCPictureContainer}>
                <PrismicNextImage className={styles.TCPicture} field={slice.primary.logo3}/>
              </div>
              <div>
                <div className={styles.TCTitle}>
                  <PrismicRichText field={slice.primary.smalltittle3} />
                </div>
                <div className={styles.TCParagraph}>
                  <PrismicRichText field={slice.primary.smallparagraph3} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
