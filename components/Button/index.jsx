import { ArrowCTA, Load, Valid, Error } from "../../assets/icons";
import styles from "./styles.module.scss";

// pas de valeur de default & override bacjground-color & border-color
export const Button = ({
  txt,
  lnk,
  sz,
  stl,
  icn,
  anm,
  stt,
  load,
  bgc,
  drk,
  wdth,
  isBtn,
}) => {
  // Default values
  sz = sz || "big";
  stl = stl || "1";
  icn = icn || false;
  anm = anm || 1;
  stt = stt || "def";
  load = false;
  bgc = bgc || "";
  drk = false;
  wdth = wdth || false;
  isBtn = isBtn || false;

  // Change icon with the state
  let Icon;
  switch (stt) {
    case "disable":
      icn = false;
      break;
    case "valid":
      icn = true;
      Icon = Valid;
      break;
    case "error":
      icn = true;
      Icon = Error;
      break;
    default:
      Icon = ArrowCTA;
      stt = "default";
      break;
  }

  // Add default style on load state
  if (load) {
    stt = "default";
  }

  // Add Tag A or BUTTON
  let CustomBtn;
  isBtn ? (CustomBtn = `button`) : (CustomBtn = `a`);

  return (
    <>
      <div
        className={`
          ${styles.btn_wrppr}
          ${stt ? styles[`state_${stt}`] : ""}
          ${drk && styles.mode_dark}
          ${wdth && styles.full_width}
        `}
      >
        <CustomBtn
          className={`
            ${styles.btn}
            ${styles[`size_${sz}`]}
            ${styles[`style_${stl}`]}
            ${anm ? styles[`anim_${anm}`] : ""}
          `}
          href={lnk}
        >
          <div className={styles.container}>
            {load ? (
              <span className={styles.btnload}>
                <Load />
              </span>
            ) : (
              <>
                <span className={styles.btntxt}>{txt}</span>
                {icn && <span className={styles.btnicn}>{<Icon />}</span>}
              </>
            )}
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
