import React, { useState, useEffect } from "react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import styles from "./style.module.scss";

const Header = ({ currentPage, header }) => {
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
    if (!isHeaderVisible) {
      headerElement.classList.add(styles.fixedHeader);
      document.body.style.marginTop = `${headerElement.offsetHeight}px`;
    } else {
      headerElement.classList.remove(styles.fixedHeader);
      document.body.style.marginTop = '0';
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
    const homepageMargin = 0;
  
    if (isHeaderVisible) {
      headerElement.classList.remove(styles.fixedHeader);
      headerElement.style.marginTop = '';
    } else {
      headerElement.classList.add(styles.fixedHeader);
      if (currentPage === 'homepage') {
        headerElement.classList.add(styles.homepage);
        headerElement.style.marginTop = `${homepageMargin}px`;
      } else {
        headerElement.classList.remove(styles.homepage);
        headerElement.style.marginTop = '';
      }
    }
  }, [isHeaderVisible, currentPage]);

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
  
    let headerClassName = styles.header; 
    
    if (currentPage === 'homepage') {
      headerClassName += ` ${styles['homepage']}`;
    } else if (currentPage === '') {
      headerClassName += ` ${styles['']}`;
    }
  

  return (
    <header className={`${styles.header} ${headerClassName}`}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <PrismicNextLink field={header.logolink}>
            <svg  width="58" height="18" viewBox="0 0 58 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_6463_9449)">
                <path className={styles.SvgPurple} d="M40.5606 1.8319C40.5592 2.31062 40.3662 2.77046 40.0218 3.11029C39.6762 3.45146 39.2076 3.64565 38.7189 3.65105C37.7264 3.66453 36.8636 2.78395 36.8771 1.82381C36.892 0.824554 37.7143 0.000610352 38.7229 0.000610352C39.7329 0.00195887 40.5606 0.829948 40.5606 1.8319Z" fill="#320A37"/>
                <path className={styles.SvgPurple} d="M44.9104 1.84279C44.9631 2.7018 44.107 3.66464 43.0363 3.65385C41.9642 3.64306 41.2094 2.69371 41.2323 1.81313C41.258 0.807133 42.0573 -0.0046742 43.0673 0.00341689C44.2137 0.0101595 44.982 1.04043 44.9104 1.84279Z" fill="#320A37"/>
                <path className={styles.SvgPurple} d="M52.4806 10.4899C53.4177 11.7157 54.3305 12.9105 55.2433 14.1067C56.1547 15.3041 57.089 16.8064 57.9951 17.9971H53.5865L50.0286 13.0885L49.1172 13.9745V17.9971H45.5269V1.69086H49.1388L49.1226 9.04971L49.1982 9.08073L53.2773 4.84639H57.9991L52.4806 10.4899Z" fill="#320A37"/>
                <path className={styles.SvgPurple} d="M13.3311 4.70969V1.69171H16.9349V4.68677H22.8382C22.8449 5.71973 22.8382 6.91182 22.8382 7.95153H16.9417C16.9417 7.95153 16.9417 8.46666 16.9417 8.5651C16.9417 10.0754 16.9417 11.5858 16.9417 13.0961C16.9403 13.2997 16.9592 13.5034 16.9984 13.7043C17.1563 14.4635 17.8922 14.9112 18.7091 14.7615C19.2546 14.6631 19.634 14.3529 19.8001 13.8365C19.8919 13.5506 19.9068 13.2377 19.9473 12.937C19.9541 12.8278 19.9541 12.7185 19.9473 12.6093L23.358 12.9599C23.4418 13.3685 23.3742 13.7542 23.3202 14.1291C23.1717 15.158 22.7477 16.0602 21.9673 16.7803C21.334 17.3682 20.5374 17.7552 19.68 17.8914C18.4067 18.1005 17.1523 18.0047 15.9614 17.4882C14.4828 16.8477 13.6578 15.6961 13.4013 14.1412C13.35 13.7933 13.327 13.4427 13.3311 13.0907C13.3243 11.6141 13.3311 10.1388 13.3311 8.66085V7.96771H11.4083V4.70969H13.3311Z" fill="#320A37"/>
                <path className={styles.SvgPurple} d="M0.00938978 13.4533C0.016141 13.4155 3.14062 12.8033 3.14062 12.8033C3.17843 12.9112 3.21758 13.0136 3.25134 13.1175C3.36881 13.4978 3.5619 13.8524 3.8198 14.1585C4.40985 14.8247 5.18085 15.0094 6.03286 14.9474C6.28535 14.9299 6.5338 14.884 6.77549 14.8112C6.94968 14.7573 7.11306 14.6737 7.25888 14.5644C7.75983 14.1922 7.74227 13.5504 7.20487 13.2375C6.90512 13.0689 6.58106 12.9489 6.24484 12.8815C5.66019 12.7588 5.06338 12.7048 4.47737 12.5956C3.597 12.4324 2.77335 12.1277 2.06042 11.5734C1.17601 10.883 0.734474 9.966 0.691266 8.86291C0.630505 7.2339 1.40285 6.06878 2.84627 5.36216C4.33559 4.62992 5.90053 4.53552 7.46142 5.12617C8.9467 5.68985 9.90537 6.77676 10.405 8.26147C10.4077 8.29384 10.4063 8.32485 10.4009 8.35722L7.56404 9.2823C7.48572 9.13127 7.42091 9.00046 7.35205 8.8737C7.1063 8.40981 6.69313 8.0565 6.19219 7.88254C5.69259 7.70858 5.14439 7.72881 4.65965 7.93783C4.52328 7.99581 4.4004 8.08212 4.29913 8.18865C4.24107 8.24934 4.19652 8.31946 4.16816 8.39767C4.14116 8.47589 4.13035 8.55815 4.13845 8.64041C4.14656 8.72267 4.17221 8.80223 4.21272 8.8737C4.25458 8.94652 4.31129 9.00855 4.3788 9.05575C4.56648 9.1879 4.77712 9.2796 5.00126 9.32815C5.44955 9.4212 5.90728 9.47244 6.36232 9.53312C7.17382 9.64235 7.96776 9.81766 8.71715 10.1534C9.32072 10.4272 9.85947 10.7859 10.2821 11.2997C10.7263 11.8431 10.9896 12.508 11.0369 13.2038C11.1382 14.4309 10.806 15.5205 9.93643 16.424C9.30991 17.0659 8.51192 17.5204 7.6356 17.7335C5.90998 18.1812 4.23567 18.0895 2.66398 17.2089C1.25702 16.4227 0.411764 15.205 0.0120903 13.6717C0.00398878 13.6394 -6.19702e-05 13.611 -0.00141222 13.5706C-0.00276247 13.5247 0.00398878 13.4924 0.00938978 13.4533Z" fill="#320A37"/>
                <path className={styles.SvgPurple} d="M42.6828 4.88489V18.0006H39.1086V4.88489H42.6828Z" fill="#320A37"/>
                <path className={styles.SvgPurple} fill-rule="evenodd" clip-rule="evenodd" d="M25.7519 6.95643C24.6515 8.24427 24.1735 9.75056 24.1816 11.4187C24.1816 11.4807 24.1802 11.5427 24.1789 11.6061C24.1762 11.7477 24.1721 11.8907 24.1856 12.0309C24.2099 12.3141 24.2505 12.5946 24.3085 12.8724C24.796 15.1109 26.08 16.7089 28.2607 17.5423C29.6488 18.0723 31.0827 18.1275 32.5329 17.7877C34.3301 17.367 35.7208 16.3745 36.585 14.763C37.7138 12.6526 37.7314 10.4734 36.7241 8.31034C36.0017 6.76224 34.7851 5.70501 33.1567 5.14402C31.6552 4.62619 30.1362 4.62215 28.6172 5.08739C27.4978 5.42182 26.5013 6.07046 25.7519 6.95643ZM33.343 9.67909C33.6441 10.1942 33.7994 10.7795 33.7927 11.3755C33.7859 11.7477 33.7387 12.0902 33.6455 12.4085C33.5078 12.8886 33.2647 13.3106 32.9029 13.6869C32.8975 13.6923 32.8907 13.699 32.8853 13.7058C31.9293 14.6848 30.2051 14.8601 29.0317 14.0051C28.8089 13.8433 28.6064 13.6451 28.4322 13.4077C28.3012 13.227 28.1851 13.0248 28.0906 12.7996C28.0852 12.7874 28.0811 12.7766 28.0757 12.7658C27.7841 12.0565 27.699 11.3539 27.8421 10.6824C27.9474 10.1915 28.1756 9.7155 28.5361 9.26779C29.7406 7.77498 32.1049 7.89095 33.204 9.46332C33.2526 9.5348 33.2998 9.60627 33.343 9.67909Z" fill="#320A37"/>
              </g>
              <defs>
                <clipPath id="clip0_6463_9449">
                  <rect width="58" height="18" fill="#320A37"/>
                </clipPath>
              </defs>
            </svg>
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
            <svg className={styles.SvgPurple2} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className={styles.SvgPurple2} d="M3 12H8M3 12C3 16.9706 7.02944 21 12 21M3 12C3 7.02944 7.02944 3 12 3M8 12H16M8 12C8 16.9706 9.79086 21 12 21M8 12C8 7.02944 9.79086 3 12 3M16 12H21M16 12C16 7.02944 14.2091 3 12 3M16 12C16 16.9706 14.2091 21 12 21M21 12C21 7.02944 16.9706 3 12 3M21 12C21 16.9706 16.9706 21 12 21" stroke="#320A37" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>
            </svg>
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
