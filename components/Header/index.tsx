import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import React from "react";
import styles from "./style.module.scss";

const Header = ({ header }) => {
  return (
      <header className={styles.header}>
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <div className={styles.logo}>
              <PrismicNextLink field={header.logolink}>
                <PrismicNextImage field={header.data.logo} />
              </PrismicNextLink>
            </div>
            {header.data.lowtitle.map((item, index) => (
              <div className={styles.Link}>
                <PrismicNextLink key={index} field={item.lowtitlelink}>
                  <div className={styles.LowTitle}>
                    <PrismicRichText key={index} field={item.lowtitletitle} />
                  </div>
                </PrismicNextLink>
              </div>
            ))}
          </div>
          <div className={styles.SecondContainer}>
            <div className={styles.language}>
              <PrismicNextImage field={header.data.language} />
            </div>
              <div className={styles.ContainerButton}>
                <div className={styles.ButtonLabel}>
                  <PrismicRichText field={header.data.buttonlabel} />
                </div>
                <PrismicNextImage className={styles.ButtonArrow} field={header.data.buttonarrow} />   
                <div className={styles.BoxContainer}> 
                  <div className={styles.Box}>
                    {header.data.buttonchoice.map((item, index) => (
                      <PrismicNextLink key={index} field={item.linkbuttonchoice}>
                        <div className={styles.LinkLabelChoice}>
                          <PrismicRichText key={index} field={item.linklabelchoice} />
                        </div>
                      </PrismicNextLink>
                    ))}
                  </div>             
                </div>
              </div>
          </div>
        </div>
      </header>
    )
}

export default Header;