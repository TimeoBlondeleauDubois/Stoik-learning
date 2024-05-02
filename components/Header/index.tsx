import React, { useState, useEffect } from "react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import styles from "./style.module.scss";

const Header = ({ header }) => {
  let i = 0;
  const toggleContainerMobile = () => {
    i = i + 1;
    const containerMobile = document.querySelector(`.${styles.ContainerMobile}`) as HTMLElement;
    containerMobile.style.display = containerMobile.style.display === 'flex' ? 'none' : 'flex';
    const logo = document.querySelector(`.${styles.logo}`) as HTMLElement;
    logo.style.display = containerMobile.style.display === 'none' ? 'flex' : 'none';

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

  const [isPath1Rotated, setIsPath1Rotated] = useState(false);
  const [isPath2Rotated, setIsPath2Rotated] = useState(false);
  const [moveX1, setMoveX1] = useState(0);
  const [moveY1, setMoveY1] = useState(0);
  const [moveX2, setMoveX2] = useState(0);
  const [moveY2, setMoveY2] = useState(0);

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

  const rotatePaths = () => {
    setIsPath1Rotated(!isPath1Rotated);
    setIsPath2Rotated(!isPath2Rotated);
  };

  const handleSvgClick = () => {
    if (isPath1Rotated) {
      setMoveY1(0);
      setMoveX1(0);
    } else {
      setMoveY1(6.5);
      setMoveX1(-1);
    }

    if (isPath2Rotated) {
      setMoveY2(0);
      setMoveX2(0);
    } else {
      setMoveY2(-4.5);
      setMoveX2(4);
    }

    rotatePaths();
  };

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
          <div className={styles.ButtonLogoMobile} onClick={() => { toggleContainerMobile(); rotatePaths(); handleSvgClick(); }}>
            <svg id="all" viewBox="0 0 23 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              id="path1"
              d="M6 6.8125H16"
              stroke="#3C1441"
              strokeWidth="1"
              strokeLinecap="square"
              strokeLinejoin="round"
              style={{ transform: `translate(${moveX1}px, ${moveY1}px) rotate(${ isPath1Rotated ? "-45deg" : "0" })`, transition: "transform 0.3s ease-in-out", }}/>
            <path
              id="path2"
              d="M6 0.8125H16"
              stroke="#3C1441"
              strokeWidth="1"
              strokeLinecap="square"
              strokeLinejoin="round"
              style={{ transform: `translate(${moveX2}px, ${moveY2}px) rotate(${ isPath2Rotated ? "45deg" : "0" })`, transition: "transform 0.3s ease-in-out", }}/>
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
