import { ArrowCTA, Load, Valid, Error } from "../../assets/icons";

import styles from "./styles.module.scss";

export const Button = ({
  isBtn,
  state,
  stl,
  sz,
  txt,
  lnk,
  icn,
  drk,
  wdth,
  bgc,
}) => {
  // Default values
  sz = sz || "big";
  stl = stl || 1;
  icn = icn || false;
  state = state || "default";
  bgc = bgc || "";
  drk = drk || false;
  wdth = wdth || false;
  isBtn = isBtn || false;

  // Change icon with the state
  let StateIcon;
  switch (state) {
    case "disable":
      icn = false;
      break;
    case "valid":
      StateIcon = Valid;
      break;
    case "error":
      StateIcon = Error;
      break;
    case "load":
      icn = false;
      StateIcon = Load;
      break;
    default:
      StateIcon = null;
      state = "default";
      break;
  }

  // Add Tag A or BUTTON
  let CustomBtn;
  isBtn ? (CustomBtn = `button`) : (CustomBtn = `a`);

  return (
    <>
      <div
        className={`${styles.btn_wrppr} ${
          state ? styles[`state_${state}`] : ""
        }${drk ? " " + styles.mode_dark : ""}${
          wdth ? " " + styles.full_width : ""
        }`}
      >
        <CustomBtn
          className={`
            ${styles.btn}
            ${styles[`size_${sz}`]}
            ${styles[`style_${stl}`]}
          `}
          href={lnk}
        >
          <div className={styles.container}>
            <>
              {StateIcon && (
                <span className={styles.stticn}>
                  <StateIcon />
                </span>
              )}
              {state != "load" && <span className={styles.btntxt}>{txt}</span>}
              {icn && (
                <span className={styles.btnicn}>
                  <ArrowCTA />
                </span>
              )}
            </>
            {/* {load ? (
              <span className={styles.btnload}>
                <Load />
              </span>
            ) : (
              <>
                {StateIcon && (
                  <span>
                    <StateIcon />
                  </span>
                )}
                <span className={styles.btntxt}>{txt}</span>
                {icn && (
                  <span className={styles.btnicn}>
                    <ButtonIcon />
                  </span>
                )}
              </>
            )} */}
          </div>
        </CustomBtn>
      </div>
      <style jsx>
        {`
          a,
          button {
            background-color: ${bgc} !important;
          }
        `}
      </style>
    </>
  );
};
