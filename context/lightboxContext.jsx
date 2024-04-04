import { createContext, useContext, useState } from 'react'

const LightboxContext = createContext(undefined)

export const LightboxProvider = ({ children }) => {
  const [isLightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxResource, setLightboxResource] = useState(null)

  const openLightbox = (resource) => {
    setLightboxOpen(true)
    setLightboxResource(resource)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    setLightboxResource(null)
  }

  const contextValue = {
    isLightboxOpen,
    openLightbox,
    closeLightbox,
    lightboxResource,
  }

  return (
    <LightboxContext.Provider value={contextValue}>
      {children}
    </LightboxContext.Provider>
  )
}

export const useLightbox = () => {
  const context = useContext(LightboxContext)
  if (context === undefined) {
    throw new Error(
      'useLightbox must be used within a LightboxProvider'
    )
  }
  return context
}
