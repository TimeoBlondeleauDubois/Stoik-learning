import React, { useEffect, useState } from 'react'

import styles from './styles.module.scss'

import { useLightbox } from '../../context/lightboxContext'

const Lightbox = ({}) => {
  const { closeLightbox } = useLightbox()

  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <div className={`${styles.lightbox} ${loaded ? styles.loaded : ''}`}>
      <div className={styles.wrapper}>
        <div className={styles.container}></div>
      </div>
      <div className={styles.background} onClick={closeLightbox}></div>
    </div>
  )
}

export default Lightbox
