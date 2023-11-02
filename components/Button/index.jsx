import { useEffect, useRef } from "react";
import styles from "./styles.module.scss";

export const Button = ({
  size,
  width,
  style,
  // outline,
  leftIcon,
  rightIcon,
  buttonText,
  url,
  state,
}) => {
  const buttonRef = useRef();

  useEffect(() => {
    // big - medium - small - [medium]
    switch (size) {
      case "big":
        buttonRef.current.classList.add(styles.big);
        break;
      case "medium":
        buttonRef.current.classList.add(styles.medium);
        break;
      case "small":
        buttonRef.current.classList.add(styles.small);
        break;
      default:
        buttonRef.current.classList.add(styles.medium);
        break;
    }
    // default - full - [default]
    switch (width) {
      case "default":
        buttonRef.current.classList.add(styles.default_width);
        break;
      case "full":
        buttonRef.current.classList.add(styles.full_width);
        break;
      default:
        buttonRef.current.classList.add(styles.default_width);
        break;
    }
    // primary - secondary - tertiary - [primary]
    switch (style) {
      case "primary":
        buttonRef.current.classList.add(styles.primary);
        break;
      case "secondary":
        buttonRef.current.classList.add(styles.secondary);
        break;
      case "tertiary":
        buttonRef.current.classList.add(styles.tertiary);
        break;
      default:
        buttonRef.current.classList.add(styles.primary);
        break;
    }
    // disable - valid - error - load - []
    switch (state) {
      case "disable":
        buttonRef.current.classList.add(styles.style_disable);
        break;
      case "valid":
        buttonRef.current.classList.add(styles.style_valid);
        break;
      case "error":
        buttonRef.current.classList.add(styles.style_error);
        break;
      case "load":
        buttonRef.current.classList.add(styles.style_load);
        break;
    }
  }, []);

  return (
    <>
      <a ref={buttonRef} href={url} className={`${styles.button}`}>
        {leftIcon && <div></div>}
        {buttonText && <span>{buttonText}</span>}
        {rightIcon && (
          <svg
            className={styles.arrow}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className={styles.fill1}
              d="M10.3774 16.1226L16.4999 10.0001L10.3774 3.87766"
            />
            <path className={styles.fill2} d="M15.9292 10L4 10" />
          </svg>
        )}
      </a>
    </>
  );
};
