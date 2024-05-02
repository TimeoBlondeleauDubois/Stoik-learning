import React, { useState, useEffect } from "react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import styles from "./style.module.scss";

const Header = ({ header }) => {
  let i = 0;
  const toggleContainerMobile = () => {
    i = i + 1;
    let x = 0;
    let y = 0;
    const containerMobile = document.querySelector(`.${styles.ContainerMobile}`) as HTMLElement;
    containerMobile.style.display = containerMobile.style.display === 'flex' ? 'none' : 'flex';
    const logo = document.querySelector(`.${styles.logo}`) as HTMLElement;
    logo.style.display = containerMobile.style.display === 'none' ? 'flex' : 'none';
  
    const ButtonLogo = document.querySelector(`.${styles.ButtonLogoMobile}`) as HTMLElement;
    if (ButtonLogo) {
      if (i % 2 === 0) {
        x = x - 15;
        ButtonLogo.style.marginRight = containerMobile.style.marginRight === 'none' ? 'none' : `${x}px`; 
      }
      else {
        y = y + 1.5;
        ButtonLogo.style.marginRight = containerMobile.style.marginRight === 'none' ? 'none' : `${y}px`; 
      }
    }  

    const body = document.querySelector('body');
    if (body) {
      body.style.overflowY = containerMobile.style.display === 'flex' ? 'hidden' : 'auto';
    }
  };

  const toggleBoxMobile = () => {
    const BoxMobile = document.querySelector(`.${styles.BoxMobile}`) as HTMLElement;
    BoxMobile.style.display = BoxMobile.style.display === 'flex' ? 'none' : 'flex';
    const ButtonArrow2 = document.querySelector(`.${styles.ButtonArrow2}`) as HTMLElement;
    ButtonArrow2.style.transform = BoxMobile.style.display === 'none' ? 'rotate(0deg)' : 'rotate(180deg)';
  };

  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsHeaderVisible(currentScrollY === 0 || currentScrollY < 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const headerElement = document.querySelector(`.${styles.header}`) as HTMLElement;
    if (isHeaderVisible) {
      headerElement.classList.remove(styles.fixedHeader);
    } else {
      headerElement.classList.add(styles.fixedHeader);
    }
  }, [isHeaderVisible]);

  return (
    <header className={`${styles.header}`}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <PrismicNextLink field={header.logolink}>
              <PrismicNextImage field={header.data.logo} />
            </PrismicNextLink>
          </div>
          {header.data.lowtitle.map((item, index) => (
            <div className={styles.Link} key={index}>
              <PrismicNextLink key={index} field={item.lowtitlelink}>
                <div className={styles.LowTitle} key={index}>
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
            <PrismicNextImage
              className={styles.ButtonArrow}
              field={header.data.buttonarrow}
            />
            <div className={styles.BoxContainer}>
              <div className={styles.Box}>
                {header.data.buttonchoice.map((item, index) => (
                  <PrismicNextLink key={index} field={item.linkbuttonchoice}>
                    <div className={styles.LinkLabelChoice} key={index}>
                      <PrismicRichText
                        key={index}
                        field={item.linklabelchoice}
                      />
                    </div>
                  </PrismicNextLink>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.ButtonLogoMobile} onClick={toggleContainerMobile}>
            <svg id="all" width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path id="path1" d="M1 6.8125H15M1" stroke="#3C1441" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>
              <path id="path2" d="M1 0.8125H15" stroke="#3C1441" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>
            </svg>
          </div>
          <div className={styles.ContainerMobile}>
            <div className={styles.Mobile}>
              <div>
                <PrismicNextLink field={header.logolink}>
                  <PrismicNextImage className={styles.LogoMobile} field={header.data.logo} />
                </PrismicNextLink>
              </div>
              {header.data.lowtitle.map((item, index) => (
                <div className={styles.LinkMobile} key={index}>
                  <PrismicNextLink key={index} field={item.lowtitlelink}>
                    <div className={styles.LowTitleMobile} key={index}>
                      <PrismicRichText
                        key={index}
                        field={item.lowtitletitle}
                        />
                    </div>
                  </PrismicNextLink>
                </div>
              ))}
              <div className={styles.ContainerButton2} onClick={toggleBoxMobile}>
                <div className={styles.ButtonLabel2}>
                  <PrismicRichText field={header.data.buttonlabel} />
                  <PrismicNextImage className={styles.ButtonArrow2} field={header.data.buttonarrow}/>
                </div>
                <div className={styles.BoxContainerMobile}>
                  <div className={styles.BoxMobile}>
                    {header.data.buttonchoice.map((item, index) => (
                      <div className={styles.linklink} key={index}>
                        <PrismicNextLink key={index} field={item.linkbuttonchoice}>
                          <div className={styles.LinkLabelChoiceMobile} key={index}>
                            <PrismicRichText
                              key={index}
                              field={item.linklabelchoice}
                              />
                          </div>
                        </PrismicNextLink>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
