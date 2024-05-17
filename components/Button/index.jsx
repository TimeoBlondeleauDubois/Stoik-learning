import { PrismicNextLink } from '@prismicio/next'
/*test*/
import ArrowCTA from '@/assets/icons/ArrowCTA'
import Load from '@/assets/icons/Load'

import styles from './styles.module.scss'

const Encapsulation = ({ clssNm, nClck, lnk, children }) => {
  return (
    <>
      {!lnk && (
        <div className={clssNm} onClick={() => nClck()}>
          {children}
        </div>
      )}
      {lnk && (
        <PrismicNextLink className={clssNm} field={lnk}>
          {children}
        </PrismicNextLink>
      )}
    </>
  )
}

export const Button = ({
  txt,
  lnk,
  sz,
  stl,
  chck,
  arrw,
  anm,
  fllwdth,
  fnctnClck,
  stts,
}) => {
  if (!txt) return null
  sz = sz || 'big'
  stl = stl || 1
  chck = chck || false
  arrw = arrw || true
  fllwdth = fllwdth || false
  anm = anm || null
  stts = stts || null

  lnk = lnk && lnk.link_type === 'Any' ? false : lnk

  const handleClick = () => {
    if (fnctnClck) fnctnClck()
  }

  const arwB = anm === '4' || anm === '5' ? true : false

  return (
    <Encapsulation
      clssNm={`${styles.btn} ${styles[`size_${sz}`]} ${
        styles[`style_${stl}`]
      } ${fllwdth ? styles.fullwidth : ''} ${
        anm ? styles[`anim_${anm}`] : ''
      } ${stts ? styles[`style_${stts}`] : ''}`}
      nClck={handleClick}
      lnk={lnk}
    >
      <div className={styles.container}>
        {arwB && (
          <span className={styles.btnicn}>
            <ArrowCTA content={styles.content} />
          </span>
        )}
        <span className={styles.btntxt}>{txt}</span>
        {arrw && (
          <span className={styles.btnicn}>
            <ArrowCTA content={styles.content} />
          </span>
        )}
      </div>
      {anm && anm === '1' && (
        <div className={styles.btnanm} aria-hidden="true">
          <div className={`${styles.btntxt} ${styles.btnanm_el}`}>
            {[...Array(4)].map((_, i) => (
              <span key={i}>{txt}</span>
            ))}
          </div>
        </div>
      )}
      {stts === 'load' && (
        <div className={styles.container_load}>
          <Load />
        </div>
      )}
    </Encapsulation>
  )
}
