import { useEffect, useRef } from "react";
import styles from "./styles.module.scss";

export const Input = ({
  type,
  id,
  state,
  leftIcon,
  rightIcon,
  label,
  placeholder,
  helpText,
}) => {
  const fieldContainer = useRef();
  const focusClass = styles.style_focus;

  // N'assigne pas le type sur l'input au chargement
  switch (type) {
    case "text":
      return (
        <>
          <div ref={fieldContainer} className={`${styles.container_field}`}>
            {label && <label htmlFor="">{label}</label>}
            <div className={styles.container_input}>
              <input
                type="text"
                name={id}
                id={id}
                placeholder={placeholder}
                onFocus={() => fieldContainer.current.classList.add(focusClass)}
                onBlur={() =>
                  fieldContainer.current.classList.remove(focusClass)
                }
              />
            </div>
            {helpText && <p className={styles.help_text}>{helpText}</p>}
          </div>
        </>
      );
    case "email":
      return (
        <>
          <div ref={fieldContainer} className={`${styles.container_field}`}>
            {label && <label htmlFor="">{label}</label>}
            <div className={styles.container_input}>
              <svg
                className={styles.icon_email}
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className={styles.fill1}
                  d="M10.4257 8.03502L13.5155 5.94016C13.9962 5.61513 14.2835 5.07273 14.2835 4.49262C14.2835 3.52576 13.5004 2.74268 12.5342 2.74268H3.70019C2.73401 2.74268 1.95093 3.52576 1.95093 4.49193C1.95093 5.07205 2.23824 5.61445 2.71893 5.94016L5.80876 8.03502C7.20281 8.97993 9.03161 8.97993 10.4257 8.03502Z"
                />
                <path
                  className={styles.fill2}
                  d="M1.94189 4.49219V10.9715C1.94189 12.1077 2.86281 13.0286 3.99904 13.0286H12.2276C13.3638 13.0286 14.2848 12.1077 14.2848 10.9715V4.49287"
                />
              </svg>
              <input
                type="email"
                name={id}
                id={id}
                placeholder={placeholder}
                onFocus={() => fieldContainer.current.classList.add(focusClass)}
                onBlur={() =>
                  fieldContainer.current.classList.remove(focusClass)
                }
              />
            </div>
            {helpText && <p className={styles.help_text}>{helpText}</p>}
          </div>
        </>
      );
    case "number":
      return (
        <>
          <div ref={fieldContainer} className={`${styles.container_field}`}>
            {label && <label htmlFor="">{label}</label>}
            <div className={styles.container_input}>
              <input
                type="number"
                name={id}
                id={id}
                placeholder={placeholder}
                onFocus={() => fieldContainer.current.classList.add(focusClass)}
                onBlur={() =>
                  fieldContainer.current.classList.remove(focusClass)
                }
              />
            </div>
            {helpText && <p className={styles.help_text}>{helpText}</p>}
          </div>
        </>
      );
    case "password":
      return (
        <>
          <div ref={fieldContainer} className={`${styles.container_field}`}>
            {label && <label htmlFor="">{label}</label>}
            <div className={styles.container_input}>
              <svg
                className={styles.icon_password}
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_3971_1961)">
                  <path d="M6.00005 9.49973C5.57905 9.49973 5.15755 9.41073 4.74805 9.25223" />
                  <path d="M10.441 6.23389C9.495 7.98339 7.7475 9.49989 6 9.49989" />
                  <path d="M9.53955 4.46045C9.88505 4.86495 10.1921 5.30595 10.4411 5.76645C10.5196 5.91195 10.5196 6.08845 10.4411 6.23395" />
                  <path d="M2.5 9.5L9.5 2.5" />
                  <path d="M4.88654 7.11355C4.27154 6.49855 4.27154 5.50105 4.88654 4.88605C5.50154 4.27105 6.49904 4.27105 7.11404 4.88605" />
                  <path d="M8.52187 3.478C7.74837 2.8795 6.87388 2.5 5.99988 2.5C4.25238 2.5 2.50487 4.0165 1.55888 5.7665C1.48037 5.912 1.48037 6.0885 1.55888 6.234C2.03187 7.1085 2.70487 7.9245 3.47787 8.5225" />
                </g>
              </svg>
              <input
                type="password"
                name={id}
                id={id}
                placeholder={placeholder}
                onFocus={() => fieldContainer.current.classList.add(focusClass)}
                onBlur={() =>
                  fieldContainer.current.classList.remove(focusClass)
                }
              />
            </div>
            {helpText && <p className={styles.help_text}>{helpText}</p>}
          </div>
        </>
      );
    case "search":
      return (
        <>
          <div ref={fieldContainer} className={`${styles.container_field}`}>
            {label && <label htmlFor="">{label}</label>}
            <div className={styles.container_search}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.5">
                  <path
                    d="M7.10509 12.4323C10.0472 12.4323 12.4323 10.0472 12.4323 7.10509C12.4323 4.16292 10.0472 1.77783 7.10509 1.77783C4.16292 1.77783 1.77783 4.16292 1.77783 7.10509C1.77783 10.0472 4.16292 12.4323 7.10509 12.4323Z"
                    stroke="#101010"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.873 10.8726L14.2227 14.2222"
                    stroke="#101010"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
              <input
                type="password"
                name={id}
                id={id}
                placeholder={placeholder}
                onFocus={() => fieldContainer.current.classList.add(focusClass)}
                onBlur={() =>
                  fieldContainer.current.classList.remove(focusClass)
                }
              />
            </div>
            {helpText && <p className={styles.help_text}>{helpText}</p>}
          </div>
        </>
      );
    default:
      return (
        <>
          <div ref={fieldContainer} className={`${styles.container_field}`}>
            {label && <label htmlFor="">{label}</label>}
            <div className={styles.container_input}>
              <input
                type="text"
                name={id}
                id={id}
                placeholder={placeholder}
                onFocus={() => fieldContainer.current.classList.add(focusClass)}
                onBlur={() =>
                  fieldContainer.current.classList.remove(focusClass)
                }
              />
            </div>
            {helpText && <p className={styles.help_text}>{helpText}</p>}
          </div>
        </>
      );
  }

  // return (
  //   <>
  //     <div ref={fieldContainer} className={`${styles.container_field}`}>
  //       {label && <label htmlFor="">{label}</label>}
  //       <div className={styles.container_input}>
  //         {leftIcon && <img src="" alt="" />}
  //         <input
  //           type={type}
  //           name=""
  //           id=""
  //           placeholder={placeholder}
  //           onFocus={() => fieldContainer.current.classList.add(focusClass)}
  //           onBlur={() => fieldContainer.current.classList.remove(focusClass)}
  //         />
  //         {rightIcon && <img src="" alt="" />}
  //       </div>
  //       {helpText && <p className={styles.help_text}>{helpText}</p>}
  //     </div>
  //   </>
  // );
};
