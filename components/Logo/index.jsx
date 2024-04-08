import { useEffect, useRef, useState } from 'react'
import { PrismicNextImage } from '@prismicio/next'

import styles from './style.module.scss'

const Logo = ({ bank, width, height, gap, animation, fullScreen }) => {
  if (!bank) return null

  width = width || 120 // Waiting for a value in px
  height = height || 120 // Waiting for a value in px
  gap = gap || 120 // Waiting for a value in px
  animation = animation || 'fade-in' // Can be : "slider", "fade-in", "static"
  fullScreen = fullScreen || false // Can be : true, false

  const { data } = bank

  /**
   * Slider animation
   */
  const logoLength = data.grp.length
  const animationDuration = data.grp.length * 3

  /**
   * Fade-in animation
   */

  const maxItemPerStep = Math.round(1208 / (width + gap)) // 1208 is the max width of the container
  const step = Math.ceil(logoLength / maxItemPerStep) // Number of steps
  const stepLength = Math.ceil(logoLength / step) // Number of items per step

  const fade = useRef(null)
  const [activeStep, setActiveStep] = useState(0)

  const fadeAnimationInfiniteLoop = (duration) => {
    let i = 0
    const interval = setInterval(() => {
      if (i === step) {
        i = 0
      }
      setActiveStep(i)
      i++
    }, duration)
    return () => clearInterval(interval)
  }

  useEffect(() => {
    if (fade.current) {
      fadeAnimationInfiniteLoop(animationDuration * 200)
    }
  }, [fade])

  return (
    <div
      className={`${styles.container_logo} ${!fullScreen ? styles.wrapper : ''}`}
    >
      {animation === 'static' && (
        <div className={styles.static}>
          {data.grp.map((item, index) => (
            <div key={index} className={styles.logo}>
              <PrismicNextImage field={item.logo} />
            </div>
          ))}
        </div>
      )}
      {animation === 'slider' && (
        <div className={styles.slider}>
          {data.grp.map((item, index) => (
            <div key={index} className={styles.logo}>
              <PrismicNextImage field={item.logo} />
            </div>
          ))}
          {data.grp.map((item, index) => (
            <div key={index} className={styles.logo}>
              <PrismicNextImage field={item.logo} />
            </div>
          ))}
        </div>
      )}
      {animation === 'fade-in' && (
        <div className={styles.fade} ref={fade}>
          <div
            className={`${styles.step} ${activeStep === 0 ? styles.active : ''}`}
          >
            {data.grp.slice(0, stepLength).map((item, index) => (
              <div key={index} className={styles.logo}>
                <PrismicNextImage field={item.logo} />
              </div>
            ))}
          </div>
          {step > 1 && (
            <div
              className={`${styles.step} ${activeStep === 1 ? styles.active : ''}`}
            >
              {data.grp.slice(stepLength, stepLength * 2).map((item, index) => (
                <div key={index} className={styles.logo}>
                  <PrismicNextImage field={item.logo} />
                </div>
              ))}
            </div>
          )}
          {step > 2 && (
            <div
              className={`${styles.step} ${activeStep === 2 ? styles.active : ''}`}
            >
              {data.grp
                .slice(stepLength * 2, stepLength * 3)
                .map((item, index) => (
                  <div key={index} className={styles.logo}>
                    <PrismicNextImage field={item.logo} />
                  </div>
                ))}
            </div>
          )}
          {step > 3 && (
            <div
              className={`${styles.step} ${activeStep === 3 ? styles.active : ''}`}
            >
              {data.grp
                .slice(stepLength * 3, stepLength * 4)
                .map((item, index) => (
                  <div key={index} className={styles.logo}>
                    <PrismicNextImage field={item.logo} />
                  </div>
                ))}
            </div>
          )}
        </div>
      )}

      <style jsx>{`
        .${styles.container_logo} {
          .${styles.slider}, .${styles.static} {
            gap: ${gap}px;
            .${styles.logo} {
              width: ${width}px;
              height: ${height}px;
            }
          }
        }
        .${styles.slider} {
          animation: slider ${animationDuration}s linear infinite;
        }
        .${styles.fade} {
          height: ${height}px;
          .${styles.step} {
            gap: ${gap}px;
            .${styles.logo} {
              width: ${width}px;
              height: ${height}px;
            }
          }
        }
        @keyframes slider {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${(width + gap) * logoLength}px);
          }
        }
      `}</style>
    </div>
  )
}
export default Logo
