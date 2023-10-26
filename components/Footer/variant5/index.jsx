import { useEffect, useState } from 'react'
import styles from './style.module.scss'

const FooterVariant5 = () => {
  const [isDesktop, setIsDesktop] = useState(true)
  const [width, setWidth] = useState(0);
    const handleResize = () => setWidth(window.innerWidth);
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    if(width < 700) {
      setIsDesktop(false)
    }
    else {
      setIsDesktop(true)
    }
  }, [width])
  return (
    <footer className={styles.footer_v5}>
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <div className={styles.container_main}>
            <a className={styles.container_logo}>
              <img
                src="https://media.licdn.com/dms/image/C4E0BAQE7uOT_mjt9Cg/company-logo_200_200/0/1614069854120?e=1700697600&v=beta&t=iufCKw6QMW3_AZI0UkynYem9bSYrfK97pniP0AaxwmE"
                alt=""
              />
            </a>
            <p className={styles.baseline}>Baseline de la marque sur maximum 2 lignes</p>
            <ul>
                <li>
                  <a href="" className={`${styles.button} ${styles.button_primary}`}>Button text</a>
                </li>
                <li>
                  <a href="" className={`${styles.button} ${styles.button_secondary}`}>Button text</a>
                </li>
            </ul>
            <div className={styles.container_notes}>
              <div className={styles.note}>
                <div className={styles.stars}>
                  <svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                    <path className={styles.fill_path} d="M7.51489 0.549819L9.20969 5.06155H12.5218H12.5107C12.9538 5.0394 13.3304 5.39387 13.3415 5.84803C13.3415 6.08065 13.2418 6.31328 13.0646 6.47943L10.1845 8.4844L11.7796 12.1554C11.9568 12.5985 11.7464 13.0969 11.3033 13.2853C11.0485 13.3849 10.7605 13.3628 10.5279 13.2299L6.67302 11.0477L2.81816 13.2188V13.2077C2.39723 13.4403 1.86552 13.2963 1.62183 12.8865C1.47782 12.6428 1.46675 12.3658 1.56644 12.1111L3.16155 8.44009L0.281487 6.42405C-0.0619052 6.12496 -0.0951365 5.60434 0.203947 5.27202C0.359028 5.08371 0.591648 4.98401 0.835346 4.99509H4.14742L5.85331 0.483356H5.8522C6.06267 0.0513457 6.59437 -0.125889 7.02638 0.0956551C7.18146 0.173195 7.31439 0.306122 7.40301 0.472279L7.51489 0.549819Z" />
                  </svg>
                  <svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                    <path className={styles.fill_path} d="M7.51489 0.549819L9.20969 5.06155H12.5218H12.5107C12.9538 5.0394 13.3304 5.39387 13.3415 5.84803C13.3415 6.08065 13.2418 6.31328 13.0646 6.47943L10.1845 8.4844L11.7796 12.1554C11.9568 12.5985 11.7464 13.0969 11.3033 13.2853C11.0485 13.3849 10.7605 13.3628 10.5279 13.2299L6.67302 11.0477L2.81816 13.2188V13.2077C2.39723 13.4403 1.86552 13.2963 1.62183 12.8865C1.47782 12.6428 1.46675 12.3658 1.56644 12.1111L3.16155 8.44009L0.281487 6.42405C-0.0619052 6.12496 -0.0951365 5.60434 0.203947 5.27202C0.359028 5.08371 0.591648 4.98401 0.835346 4.99509H4.14742L5.85331 0.483356H5.8522C6.06267 0.0513457 6.59437 -0.125889 7.02638 0.0956551C7.18146 0.173195 7.31439 0.306122 7.40301 0.472279L7.51489 0.549819Z" />
                  </svg>
                  <svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                    <path className={styles.fill_path} d="M7.51489 0.549819L9.20969 5.06155H12.5218H12.5107C12.9538 5.0394 13.3304 5.39387 13.3415 5.84803C13.3415 6.08065 13.2418 6.31328 13.0646 6.47943L10.1845 8.4844L11.7796 12.1554C11.9568 12.5985 11.7464 13.0969 11.3033 13.2853C11.0485 13.3849 10.7605 13.3628 10.5279 13.2299L6.67302 11.0477L2.81816 13.2188V13.2077C2.39723 13.4403 1.86552 13.2963 1.62183 12.8865C1.47782 12.6428 1.46675 12.3658 1.56644 12.1111L3.16155 8.44009L0.281487 6.42405C-0.0619052 6.12496 -0.0951365 5.60434 0.203947 5.27202C0.359028 5.08371 0.591648 4.98401 0.835346 4.99509H4.14742L5.85331 0.483356H5.8522C6.06267 0.0513457 6.59437 -0.125889 7.02638 0.0956551C7.18146 0.173195 7.31439 0.306122 7.40301 0.472279L7.51489 0.549819Z" />
                  </svg>
                  <svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                    <path className={styles.fill_path} d="M7.51489 0.549819L9.20969 5.06155H12.5218H12.5107C12.9538 5.0394 13.3304 5.39387 13.3415 5.84803C13.3415 6.08065 13.2418 6.31328 13.0646 6.47943L10.1845 8.4844L11.7796 12.1554C11.9568 12.5985 11.7464 13.0969 11.3033 13.2853C11.0485 13.3849 10.7605 13.3628 10.5279 13.2299L6.67302 11.0477L2.81816 13.2188V13.2077C2.39723 13.4403 1.86552 13.2963 1.62183 12.8865C1.47782 12.6428 1.46675 12.3658 1.56644 12.1111L3.16155 8.44009L0.281487 6.42405C-0.0619052 6.12496 -0.0951365 5.60434 0.203947 5.27202C0.359028 5.08371 0.591648 4.98401 0.835346 4.99509H4.14742L5.85331 0.483356H5.8522C6.06267 0.0513457 6.59437 -0.125889 7.02638 0.0956551C7.18146 0.173195 7.31439 0.306122 7.40301 0.472279L7.51489 0.549819Z" />
                  </svg>
                  <svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                    <path className={styles.fill_path} d="M7.51489 0.549819L9.20969 5.06155H12.5218H12.5107C12.9538 5.0394 13.3304 5.39387 13.3415 5.84803C13.3415 6.08065 13.2418 6.31328 13.0646 6.47943L10.1845 8.4844L11.7796 12.1554C11.9568 12.5985 11.7464 13.0969 11.3033 13.2853C11.0485 13.3849 10.7605 13.3628 10.5279 13.2299L6.67302 11.0477L2.81816 13.2188V13.2077C2.39723 13.4403 1.86552 13.2963 1.62183 12.8865C1.47782 12.6428 1.46675 12.3658 1.56644 12.1111L3.16155 8.44009L0.281487 6.42405C-0.0619052 6.12496 -0.0951365 5.60434 0.203947 5.27202C0.359028 5.08371 0.591648 4.98401 0.835346 4.99509H4.14742L5.85331 0.483356H5.8522C6.06267 0.0513457 6.59437 -0.125889 7.02638 0.0956551C7.18146 0.173195 7.31439 0.306122 7.40301 0.472279L7.51489 0.549819Z" />
                  </svg>
                </div>
                <p className={styles.note_label}>Note sur site</p>
              </div>
              <div className={styles.note}>
                <div className={styles.stars}>
                  <svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                    <path className={styles.fill_path} d="M7.51489 0.549819L9.20969 5.06155H12.5218H12.5107C12.9538 5.0394 13.3304 5.39387 13.3415 5.84803C13.3415 6.08065 13.2418 6.31328 13.0646 6.47943L10.1845 8.4844L11.7796 12.1554C11.9568 12.5985 11.7464 13.0969 11.3033 13.2853C11.0485 13.3849 10.7605 13.3628 10.5279 13.2299L6.67302 11.0477L2.81816 13.2188V13.2077C2.39723 13.4403 1.86552 13.2963 1.62183 12.8865C1.47782 12.6428 1.46675 12.3658 1.56644 12.1111L3.16155 8.44009L0.281487 6.42405C-0.0619052 6.12496 -0.0951365 5.60434 0.203947 5.27202C0.359028 5.08371 0.591648 4.98401 0.835346 4.99509H4.14742L5.85331 0.483356H5.8522C6.06267 0.0513457 6.59437 -0.125889 7.02638 0.0956551C7.18146 0.173195 7.31439 0.306122 7.40301 0.472279L7.51489 0.549819Z" />
                  </svg>
                  <svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                    <path className={styles.fill_path} d="M7.51489 0.549819L9.20969 5.06155H12.5218H12.5107C12.9538 5.0394 13.3304 5.39387 13.3415 5.84803C13.3415 6.08065 13.2418 6.31328 13.0646 6.47943L10.1845 8.4844L11.7796 12.1554C11.9568 12.5985 11.7464 13.0969 11.3033 13.2853C11.0485 13.3849 10.7605 13.3628 10.5279 13.2299L6.67302 11.0477L2.81816 13.2188V13.2077C2.39723 13.4403 1.86552 13.2963 1.62183 12.8865C1.47782 12.6428 1.46675 12.3658 1.56644 12.1111L3.16155 8.44009L0.281487 6.42405C-0.0619052 6.12496 -0.0951365 5.60434 0.203947 5.27202C0.359028 5.08371 0.591648 4.98401 0.835346 4.99509H4.14742L5.85331 0.483356H5.8522C6.06267 0.0513457 6.59437 -0.125889 7.02638 0.0956551C7.18146 0.173195 7.31439 0.306122 7.40301 0.472279L7.51489 0.549819Z" />
                  </svg>
                  <svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                    <path className={styles.fill_path} d="M7.51489 0.549819L9.20969 5.06155H12.5218H12.5107C12.9538 5.0394 13.3304 5.39387 13.3415 5.84803C13.3415 6.08065 13.2418 6.31328 13.0646 6.47943L10.1845 8.4844L11.7796 12.1554C11.9568 12.5985 11.7464 13.0969 11.3033 13.2853C11.0485 13.3849 10.7605 13.3628 10.5279 13.2299L6.67302 11.0477L2.81816 13.2188V13.2077C2.39723 13.4403 1.86552 13.2963 1.62183 12.8865C1.47782 12.6428 1.46675 12.3658 1.56644 12.1111L3.16155 8.44009L0.281487 6.42405C-0.0619052 6.12496 -0.0951365 5.60434 0.203947 5.27202C0.359028 5.08371 0.591648 4.98401 0.835346 4.99509H4.14742L5.85331 0.483356H5.8522C6.06267 0.0513457 6.59437 -0.125889 7.02638 0.0956551C7.18146 0.173195 7.31439 0.306122 7.40301 0.472279L7.51489 0.549819Z" />
                  </svg>
                  <svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                    <path className={styles.fill_path} d="M7.51489 0.549819L9.20969 5.06155H12.5218H12.5107C12.9538 5.0394 13.3304 5.39387 13.3415 5.84803C13.3415 6.08065 13.2418 6.31328 13.0646 6.47943L10.1845 8.4844L11.7796 12.1554C11.9568 12.5985 11.7464 13.0969 11.3033 13.2853C11.0485 13.3849 10.7605 13.3628 10.5279 13.2299L6.67302 11.0477L2.81816 13.2188V13.2077C2.39723 13.4403 1.86552 13.2963 1.62183 12.8865C1.47782 12.6428 1.46675 12.3658 1.56644 12.1111L3.16155 8.44009L0.281487 6.42405C-0.0619052 6.12496 -0.0951365 5.60434 0.203947 5.27202C0.359028 5.08371 0.591648 4.98401 0.835346 4.99509H4.14742L5.85331 0.483356H5.8522C6.06267 0.0513457 6.59437 -0.125889 7.02638 0.0956551C7.18146 0.173195 7.31439 0.306122 7.40301 0.472279L7.51489 0.549819Z" />
                  </svg>
                  <svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                    <path className={styles.fill_path} d="M7.51489 0.549819L9.20969 5.06155H12.5218H12.5107C12.9538 5.0394 13.3304 5.39387 13.3415 5.84803C13.3415 6.08065 13.2418 6.31328 13.0646 6.47943L10.1845 8.4844L11.7796 12.1554C11.9568 12.5985 11.7464 13.0969 11.3033 13.2853C11.0485 13.3849 10.7605 13.3628 10.5279 13.2299L6.67302 11.0477L2.81816 13.2188V13.2077C2.39723 13.4403 1.86552 13.2963 1.62183 12.8865C1.47782 12.6428 1.46675 12.3658 1.56644 12.1111L3.16155 8.44009L0.281487 6.42405C-0.0619052 6.12496 -0.0951365 5.60434 0.203947 5.27202C0.359028 5.08371 0.591648 4.98401 0.835346 4.99509H4.14742L5.85331 0.483356H5.8522C6.06267 0.0513457 6.59437 -0.125889 7.02638 0.0956551C7.18146 0.173195 7.31439 0.306122 7.40301 0.472279L7.51489 0.549819Z" />
                  </svg>
                </div>
                <p className={styles.note_label}>Note sur site</p>
              </div>
            </div>
          </div>
          <div className={styles.container_lists}>
            <div className={styles.container_list}>
              <div className={styles.list}>
                <details open={isDesktop}>
                  <summary className={styles.container_title}>
                    <h3>Titre</h3>
                    <div className={styles.container_arrow}>
                      <svg
                        viewBox="0 0 10 7"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          className={styles.fill_path}
                          d="M5 6.5L-5.24203e-08 1.69924L1.25099 0.5L5 4.09962L8.749 0.500006L10 1.69924L5 6.5Z"
                          ></path>
                      </svg>
                    </div>
                  </summary>
                  <ul>
                    <li>
                      <a href="">Lien numéro 1</a>
                    </li>
                    <li>
                      <a href="">Lien numéro 2</a>
                    </li>
                    <li>
                      <a href="">Lien numéro 3</a>
                    </li>
                    <li>
                      <a href="">Lien numéro 4</a>
                    </li>
                  </ul>
                </details>
              </div>
              <div className={styles.list}>
                <details open={isDesktop}>
                  <summary className={styles.container_title}>
                    <h3>Titre</h3>
                    <div className={styles.container_arrow}>
                      <svg
                        viewBox="0 0 10 7"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          className={styles.fill_path}
                          d="M5 6.5L-5.24203e-08 1.69924L1.25099 0.5L5 4.09962L8.749 0.500006L10 1.69924L5 6.5Z"
                          ></path>
                      </svg>
                    </div>
                  </summary>
                  <ul>
                    <li>
                      <a href="">Lien numéro 1</a>
                    </li>
                    <li>
                      <a href="">Lien numéro 2</a>
                    </li>
                    <li>
                      <a href="">Lien numéro 3</a>
                    </li>
                    <li>
                      <a href="">Lien numéro 4</a>
                    </li>
                  </ul>
                </details>
              </div>
              <div className={styles.list}>
                <details open={isDesktop}>
                  <summary className={styles.container_title}>
                    <h3>Titre</h3>
                    <div className={styles.container_arrow}>
                      <svg
                        viewBox="0 0 10 7"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          className={styles.fill_path}
                          d="M5 6.5L-5.24203e-08 1.69924L1.25099 0.5L5 4.09962L8.749 0.500006L10 1.69924L5 6.5Z"
                          ></path>
                      </svg>
                    </div>
                  </summary>
                  <ul>
                    <li>
                      <a href="">Lien numéro 1</a>
                    </li>
                    <li>
                      <a href="">Lien numéro 2</a>
                    </li>
                    <li>
                      <a href="">Lien numéro 3</a>
                    </li>
                    <li>
                      <a href="">Lien numéro 4</a>
                    </li>
                  </ul>
                </details>
              </div>
              <div className={styles.list}>
                <details open={isDesktop}>
                  <summary className={styles.container_title}>
                    <h3>Titre</h3>
                    <div className={styles.container_arrow}>
                      <svg
                        viewBox="0 0 10 7"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          className={styles.fill_path}
                          d="M5 6.5L-5.24203e-08 1.69924L1.25099 0.5L5 4.09962L8.749 0.500006L10 1.69924L5 6.5Z"
                          ></path>
                      </svg>
                    </div>
                  </summary>
                  <ul>
                    <li>
                      <a href="">Lien numéro 1</a>
                    </li>
                    <li>
                      <a href="">Lien numéro 2</a>
                    </li>
                    <li>
                      <a href="">Lien numéro 3</a>
                    </li>
                    <li>
                      <a href="">Lien numéro 4</a>
                    </li>
                  </ul>
                </details>
              </div>
            </div>
            <div className={styles.container_list}>
              <div className={styles.list}>
                <details open={isDesktop}>
                  <summary className={styles.container_title}>
                    <h3>Titre</h3>
                    <div className={styles.container_arrow}>
                      <svg
                        viewBox="0 0 10 7"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          className={styles.fill_path}
                          d="M5 6.5L-5.24203e-08 1.69924L1.25099 0.5L5 4.09962L8.749 0.500006L10 1.69924L5 6.5Z"
                          ></path>
                      </svg>
                    </div>
                  </summary>
                  <ul>
                    <li>
                      <a href="">Lien numéro 1</a>
                    </li>
                    <li>
                      <a href="">Lien numéro 2</a>
                    </li>
                    <li>
                      <a href="">Lien numéro 3</a>
                    </li>
                    <li>
                      <a href="">Lien numéro 4</a>
                    </li>
                  </ul>
                </details>
              </div>
              <div className={styles.list}>
                <details open={isDesktop}>
                  <summary className={styles.container_title}>
                    <h3>Titre</h3>
                    <div className={styles.container_arrow}>
                      <svg
                        viewBox="0 0 10 7"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          className={styles.fill_path}
                          d="M5 6.5L-5.24203e-08 1.69924L1.25099 0.5L5 4.09962L8.749 0.500006L10 1.69924L5 6.5Z"
                          ></path>
                      </svg>
                    </div>
                  </summary>
                  <ul>
                    <li>
                      <a href="">Lien numéro 1</a>
                    </li>
                    <li>
                      <a href="">Lien numéro 2</a>
                    </li>
                    <li>
                      <a href="">Lien numéro 3</a>
                    </li>
                    <li>
                      <a href="">Lien numéro 4</a>
                    </li>
                  </ul>
                </details>
              </div>
              <div className={styles.list}>
                <details open={isDesktop}>
                  <summary className={styles.container_title}>
                    <h3>Titre</h3>
                    <div className={styles.container_arrow}>
                      <svg
                        viewBox="0 0 10 7"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          className={styles.fill_path}
                          d="M5 6.5L-5.24203e-08 1.69924L1.25099 0.5L5 4.09962L8.749 0.500006L10 1.69924L5 6.5Z"
                          ></path>
                      </svg>
                    </div>
                  </summary>
                  <ul>
                    <li>
                      <a href="">Lien numéro 1</a>
                    </li>
                    <li>
                      <a href="">Lien numéro 2</a>
                    </li>
                    <li>
                      <a href="">Lien numéro 3</a>
                    </li>
                    <li>
                      <a href="">Lien numéro 4</a>
                    </li>
                  </ul>
                </details>
              </div>
              <div className={styles.list}>
                <details open={isDesktop}>
                  <summary className={styles.container_title}>
                    <h3>Titre</h3>
                    <div className={styles.container_arrow}>
                      <svg
                        viewBox="0 0 10 7"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          className={styles.fill_path}
                          d="M5 6.5L-5.24203e-08 1.69924L1.25099 0.5L5 4.09962L8.749 0.500006L10 1.69924L5 6.5Z"
                          ></path>
                      </svg>
                    </div>
                  </summary>
                  <ul>
                    <li>
                      <a href="">Lien numéro 1</a>
                    </li>
                    <li>
                      <a href="">Lien numéro 2</a>
                    </li>
                    <li>
                      <a href="">Lien numéro 3</a>
                    </li>
                    <li>
                      <a href="">Lien numéro 4</a>
                    </li>
                  </ul>
                </details>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.copyright}>
            ©2023 Bruno. Tous droits réservés.
          </div>
          <div className={styles.container_legals}>
            <a href="">Mentions Légales</a>
            <a href="">
              Made by <span>Bruno</span>
            </a>
          </div>
          <div className={styles.container_actions}>
            <div className={styles.wrapper_responsive}>
              <div className={styles.container_follow}>
                <div className={styles.title}>Nous joindre</div>
                <div className={styles.container_el}>
                  <a href="" className={styles.el}>
                    <svg
                      viewBox="0 0 14 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        className={styles.fill_1}
                        d="M0 1.94684C0 1.3933 0.463425 0.943985 1.03469 0.943985H12.9654C13.5369 0.943985 14.0001 1.3933 14.0001 1.94684V13.9413C14.0001 14.495 13.5369 14.944 12.9654 14.944H1.03469C0.463479 14.944 0 14.4951 0 13.9415V1.94668V1.94684Z"
                      />
                      <path
                        className={styles.fill_2}
                        d="M4.25368 12.6609V6.35811H2.1587V12.6609H4.2539H4.25368ZM3.20663 5.49771C3.93704 5.49771 4.39177 5.01372 4.39177 4.40888C4.3781 3.79025 3.93704 3.31978 3.22052 3.31978C2.50351 3.31978 2.03522 3.79025 2.03522 4.40883C2.03522 5.01367 2.48978 5.49765 3.1929 5.49765H3.20647L3.20663 5.49771ZM5.41328 12.6609H7.5081V9.14154C7.5081 8.95341 7.52177 8.76479 7.57712 8.63043C7.72849 8.2539 8.07319 7.86415 8.65206 7.86415C9.40993 7.86415 9.71328 8.44208 9.71328 9.28947V12.6609H11.808V9.04709C11.808 7.11121 10.7747 6.21034 9.39636 6.21034C8.26635 6.21034 7.77006 6.84193 7.49432 7.2721H7.50827V6.35832H5.41339C5.44074 6.94961 5.41323 12.6612 5.41323 12.6612L5.41328 12.6609Z"
                      />
                    </svg>
                  </a>
                  <a href="" className={styles.el}>
                    <svg
                      viewBox="0 0 14 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_2409_15610)">
                        <path
                          className={styles.fill_1}
                          d="M4.40303 13.326C9.68629 13.326 12.5755 8.94747 12.5755 5.15053C12.5755 5.02619 12.573 4.90241 12.5674 4.77914C13.1296 4.37221 13.6147 3.86836 14.0002 3.29122C13.4855 3.52011 12.9317 3.67417 12.3507 3.74363C12.9437 3.38791 13.399 2.82515 13.6138 2.15435C13.0499 2.48896 12.4331 2.72483 11.7898 2.85182C11.2657 2.2933 10.5195 1.94398 9.6932 1.94398C8.10699 1.94398 6.8207 3.23078 6.8207 4.81695C6.8207 5.04246 6.84594 5.26174 6.89522 5.47213C4.50797 5.35197 2.39112 4.20858 0.97442 2.47001C0.719258 2.90851 0.585047 3.40688 0.585493 3.91422C0.585493 4.91111 1.09257 5.79114 1.8637 6.30601C1.40757 6.29207 0.961442 6.16882 0.562843 5.94662C0.562416 5.95869 0.562416 5.97044 0.562416 5.98333C0.562416 7.37487 1.55249 8.53672 2.86678 8.79999C2.61994 8.86724 2.36523 8.90124 2.10939 8.90109C1.92463 8.90109 1.74456 8.8829 1.56956 8.8493C1.93524 9.99098 2.9956 10.8218 4.25278 10.845C3.26968 11.6158 2.03128 12.0749 0.685314 12.0749C0.456349 12.0751 0.22757 12.0618 0.000167847 12.0351C1.27138 12.8502 2.78082 13.3258 4.40317 13.3258"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2409_15610">
                          <rect
                            width="14"
                            height="14"
                            className={styles.fill_2}
                            transform="translate(0.000167847 0.943985)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                  <a href="" className={styles.el}>
                    <svg
                      viewBox="0 0 14 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_2409_15607)">
                        <path
                          d="M4.66807 7.94398C4.66807 6.65537 5.71242 5.61046 7.00104 5.61046C8.28967 5.61046 9.33458 6.65537 9.33458 7.94398C9.33458 9.2326 8.28967 10.2775 7.00104 10.2775C5.71242 10.2775 4.66807 9.2326 4.66807 7.94398ZM3.4066 7.94398C3.4066 9.92918 5.01583 11.5384 7.00104 11.5384C8.98625 11.5384 10.5955 9.92918 10.5955 7.94398C10.5955 5.95878 8.98625 4.34957 7.00104 4.34957C5.01583 4.34957 3.4066 5.95878 3.4066 7.94398ZM9.89777 4.20705C9.8977 4.37319 9.94691 4.53561 10.0392 4.67378C10.1314 4.81196 10.2625 4.91968 10.416 4.98332C10.5695 5.04695 10.7384 5.06366 10.9013 5.03131C11.0643 4.99896 11.214 4.91902 11.3315 4.80159C11.449 4.68416 11.5291 4.53452 11.5616 4.37159C11.5941 4.20866 11.5775 4.03976 11.514 3.88624C11.4505 3.73273 11.3428 3.60149 11.2047 3.50914C11.0666 3.41678 10.9042 3.36745 10.7381 3.36738H10.7378C10.5151 3.36749 10.3015 3.45598 10.144 3.61341C9.98654 3.77085 9.89796 3.98436 9.89777 4.20705V4.20705ZM4.17302 13.6418C3.49055 13.6107 3.1196 13.4971 2.87309 13.401C2.54627 13.2738 2.31309 13.1222 2.06792 12.8774C1.82275 12.6326 1.67099 12.3996 1.54431 12.0728C1.44822 11.8264 1.33454 11.4554 1.30351 10.7729C1.26958 10.035 1.2628 9.81338 1.2628 7.94404C1.2628 6.0747 1.27014 5.85367 1.30351 5.1152C1.33459 4.43273 1.44911 4.0624 1.54431 3.81527C1.67155 3.48846 1.82308 3.25527 2.06792 3.0101C2.31275 2.76494 2.54571 2.61318 2.87309 2.4865C3.11949 2.39041 3.49055 2.27673 4.17302 2.2457C4.91089 2.21177 5.13253 2.20499 7.00104 2.20499C8.86955 2.20499 9.09142 2.21233 9.8299 2.2457C10.5124 2.27678 10.8827 2.39131 11.1298 2.4865C11.4567 2.61318 11.6898 2.76527 11.935 3.0101C12.1802 3.25494 12.3314 3.48846 12.4586 3.81527C12.5547 4.06167 12.6684 4.43273 12.6994 5.1152C12.7333 5.85367 12.7401 6.0747 12.7401 7.94404C12.7401 9.81338 12.7333 10.0344 12.6994 10.7729C12.6683 11.4554 12.5541 11.8263 12.4586 12.0728C12.3314 12.3996 12.1798 12.6328 11.935 12.8774C11.6902 13.122 11.4567 13.2738 11.1298 13.401C10.8834 13.4971 10.5124 13.6108 9.8299 13.6418C9.09204 13.6758 8.87039 13.6825 7.00104 13.6825C5.13169 13.6825 4.91066 13.6758 4.17302 13.6418V13.6418ZM4.11506 0.986377C3.36987 1.02031 2.86066 1.13847 2.41596 1.31151C1.95541 1.49021 1.56554 1.72994 1.17594 2.11892C0.786348 2.5079 0.547227 2.89838 0.36853 3.35893C0.195489 3.8039 0.0773279 4.31283 0.0433917 5.05802C0.0088955 5.80439 0.000999451 6.04301 0.000999451 7.94398C0.000999451 9.84496 0.0088955 10.0836 0.0433917 10.8299C0.0773279 11.5752 0.195489 12.0841 0.36853 12.529C0.547227 12.9893 0.786404 13.3802 1.17594 13.769C1.56548 14.1579 1.95541 14.3973 2.41596 14.5765C2.8615 14.7495 3.36987 14.8677 4.11506 14.9016C4.86183 14.9355 5.10005 14.944 7.00104 14.944C8.90203 14.944 9.14065 14.9361 9.88702 14.9016C10.6323 14.8677 11.1411 14.7495 11.5861 14.5765C12.0464 14.3973 12.4365 14.158 12.8261 13.769C13.2157 13.3801 13.4544 12.9893 13.6336 12.529C13.8066 12.0841 13.9253 11.5751 13.9587 10.8299C13.9926 10.083 14.0005 9.84496 14.0005 7.94398C14.0005 6.04301 13.9926 5.80439 13.9587 5.05802C13.9248 4.31278 13.8066 3.80362 13.6336 3.35893C13.4544 2.89866 13.2151 2.50851 12.8261 2.11892C12.4372 1.72933 12.0464 1.49021 11.5867 1.31151C11.1411 1.13847 10.6322 1.01975 9.88758 0.986377C9.14121 0.952441 8.90259 0.943985 7.0016 0.943985C5.10061 0.943985 4.86183 0.951881 4.11506 0.986377Z"
                          className={styles.fill_1}
                        />
                        <path
                          d="M4.66807 7.94398C4.66807 6.65537 5.71242 5.61046 7.00104 5.61046C8.28967 5.61046 9.33458 6.65537 9.33458 7.94398C9.33458 9.2326 8.28967 10.2775 7.00104 10.2775C5.71242 10.2775 4.66807 9.2326 4.66807 7.94398ZM3.4066 7.94398C3.4066 9.92918 5.01583 11.5384 7.00104 11.5384C8.98625 11.5384 10.5955 9.92918 10.5955 7.94398C10.5955 5.95878 8.98625 4.34957 7.00104 4.34957C5.01583 4.34957 3.4066 5.95878 3.4066 7.94398ZM9.89777 4.20705C9.8977 4.37319 9.94691 4.53561 10.0392 4.67378C10.1314 4.81196 10.2625 4.91968 10.416 4.98332C10.5695 5.04695 10.7384 5.06366 10.9013 5.03131C11.0643 4.99896 11.214 4.91902 11.3315 4.80159C11.449 4.68416 11.5291 4.53452 11.5616 4.37159C11.5941 4.20866 11.5775 4.03976 11.514 3.88624C11.4505 3.73273 11.3428 3.60149 11.2047 3.50914C11.0666 3.41678 10.9042 3.36745 10.7381 3.36738H10.7378C10.5151 3.36749 10.3015 3.45598 10.144 3.61341C9.98654 3.77085 9.89796 3.98436 9.89777 4.20705V4.20705ZM4.17302 13.6418C3.49055 13.6107 3.1196 13.4971 2.87309 13.401C2.54627 13.2738 2.31309 13.1222 2.06792 12.8774C1.82275 12.6326 1.67099 12.3996 1.54431 12.0728C1.44822 11.8264 1.33454 11.4554 1.30351 10.7729C1.26958 10.035 1.2628 9.81338 1.2628 7.94404C1.2628 6.0747 1.27014 5.85367 1.30351 5.1152C1.33459 4.43273 1.44911 4.0624 1.54431 3.81527C1.67155 3.48846 1.82308 3.25527 2.06792 3.0101C2.31275 2.76494 2.54571 2.61318 2.87309 2.4865C3.11949 2.39041 3.49055 2.27673 4.17302 2.2457C4.91089 2.21177 5.13253 2.20499 7.00104 2.20499C8.86955 2.20499 9.09142 2.21233 9.8299 2.2457C10.5124 2.27678 10.8827 2.39131 11.1298 2.4865C11.4567 2.61318 11.6898 2.76527 11.935 3.0101C12.1802 3.25494 12.3314 3.48846 12.4586 3.81527C12.5547 4.06167 12.6684 4.43273 12.6994 5.1152C12.7333 5.85367 12.7401 6.0747 12.7401 7.94404C12.7401 9.81338 12.7333 10.0344 12.6994 10.7729C12.6683 11.4554 12.5541 11.8263 12.4586 12.0728C12.3314 12.3996 12.1798 12.6328 11.935 12.8774C11.6902 13.122 11.4567 13.2738 11.1298 13.401C10.8834 13.4971 10.5124 13.6108 9.8299 13.6418C9.09204 13.6758 8.87039 13.6825 7.00104 13.6825C5.13169 13.6825 4.91066 13.6758 4.17302 13.6418V13.6418ZM4.11506 0.986377C3.36987 1.02031 2.86066 1.13847 2.41596 1.31151C1.95541 1.49021 1.56554 1.72994 1.17594 2.11892C0.786348 2.5079 0.547227 2.89838 0.36853 3.35893C0.195489 3.8039 0.0773279 4.31283 0.0433917 5.05802C0.0088955 5.80439 0.000999451 6.04301 0.000999451 7.94398C0.000999451 9.84496 0.0088955 10.0836 0.0433917 10.8299C0.0773279 11.5752 0.195489 12.0841 0.36853 12.529C0.547227 12.9893 0.786404 13.3802 1.17594 13.769C1.56548 14.1579 1.95541 14.3973 2.41596 14.5765C2.8615 14.7495 3.36987 14.8677 4.11506 14.9016C4.86183 14.9355 5.10005 14.944 7.00104 14.944C8.90203 14.944 9.14065 14.9361 9.88702 14.9016C10.6323 14.8677 11.1411 14.7495 11.5861 14.5765C12.0464 14.3973 12.4365 14.158 12.8261 13.769C13.2157 13.3801 13.4544 12.9893 13.6336 12.529C13.8066 12.0841 13.9253 11.5751 13.9587 10.8299C13.9926 10.083 14.0005 9.84496 14.0005 7.94398C14.0005 6.04301 13.9926 5.80439 13.9587 5.05802C13.9248 4.31278 13.8066 3.80362 13.6336 3.35893C13.4544 2.89866 13.2151 2.50851 12.8261 2.11892C12.4372 1.72933 12.0464 1.49021 11.5867 1.31151C11.1411 1.13847 10.6322 1.01975 9.88758 0.986377C9.14121 0.952441 8.90259 0.943985 7.0016 0.943985C5.10061 0.943985 4.86183 0.951881 4.11506 0.986377Z"
                          className={styles.fill_1}
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2409_15607">
                          <rect
                            width="14.0001"
                            height="14"
                            className={styles.fill_2}
                            transform="translate(8.39233e-05 0.943985)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </div>
              </div>
              <details>
                <summary>
                  <div className={styles.title}>Anglais</div>
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 0.945633L4.81156 4.86528V4.86528C4.91548 4.97231 5.0841 4.97243 5.18818 4.86556C5.18827 4.86547 5.18836 4.86537 5.18845 4.86528L9 0.945633" />
                  </svg>
                </summary>
                <div className={styles.dropdown}>
                  <ul>
                    <li>
                      <a href="">Lang 1</a>
                    </li>
                    <li>
                      <a href="">Lang 2</a>
                    </li>
                    <li>
                      <a href="">Lang 3</a>
                    </li>
                  </ul>
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterVariant5
