import Header from './Header'
import DevTools from './DevTools'
import { useEffect, useState } from 'react'

import { Button } from './Button'

export default function Layout({ children, header, footer }) {
  const [isDevTools, setIsDevTools] = useState(false)

  const handleMotion = (event) => {
    const { accelerationIncludingGravity } = event

    const totalAcceleration = Math.sqrt(
      accelerationIncludingGravity.x ** 2 +
        accelerationIncludingGravity.y ** 2 +
        accelerationIncludingGravity.z ** 2
    )

    const shakeThreshold = 25

    if (totalAcceleration > shakeThreshold) {
      setIsDevTools(!isDevTools)
    }
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Escape') {
      setIsDevTools(!isDevTools)
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress)
    window.addEventListener('devicemotion', handleMotion)
    return () => {
      document.removeEventListener('keydown', handleKeyPress)
      window.removeEventListener('devicemotion', handleMotion)
    }
  })

  return (
    <>
      {isDevTools && <DevTools />}
      {/* <SEO title={title} description={description} image={image} /> */}
      <Header header={header} />
      <main>{children}</main>
      {/* <Footer variation={"default"} footer={footer} />
      <Footer variation={"variant1"} footer={footer} />
      <Footer variation={"variant2"} footer={footer} />
      <Footer variation={"variant3"} footer={footer} />
      <Footer variation={"variant4"} footer={footer} />
      <Footer variation={"variant5"} footer={footer} /> */}
      {/* <Input
        label={"This is a text !"}
        type={"text"}
        id={"unique-name"}
        placeholder={"Type something here"}
        helpText={"A little text to help you"}
      />
      <Input
        label={"This is a email !"}
        type={"email"}
        id={"unique-name"}
        placeholder={"Type something here"}
        helpText={"A little text to help you"}
      />
      <Input
        label={"This is a number !"}
        type={"number"}
        id={"unique-name"}
        placeholder={"Type something here"}
        helpText={"A little text to help you"}
      />
      <Input
        label={"This is a password !"}
        type={"password"}
        id={"unique-name"}
        placeholder={"Type something here"}
        helpText={"A little text to help you"}
      />
      <Input
        label={"This is a search !"}
        type={"search"}
        id={"unique-name"}
        placeholder={"Type something here"}
        helpText={"A little text to help you"}
      /> */}
      <div>
        <div className="flexContainer">
          <Button sz={'small'} stl={'1'} txt={'button'} />
          <br />
          <Button sz={'medium'} stl={'1'} txt={'button'} />
          <br />
          <Button sz={'big'} stl={'1'} txt={'button'} />
          <br />
          <Button sz={'medium'} stl={'1'} txt={'button'} anm={'0'} />
          <br />
          <Button sz={'medium'} stl={'1'} txt={'button'} anm={'1'} />
          <br />
          <Button sz={'medium'} stl={'1'} txt={'button'} anm={'2'} />
          <br />
          <Button sz={'medium'} stl={'1'} txt={'button'} anm={'3'} />
          <br />
          <Button sz={'medium'} stl={'1'} txt={'button'} anm={'4'} />
          <br />
          <Button sz={'medium'} stl={'1'} txt={'button'} anm={'5'} />
          <br />
          <Button sz={'medium'} stl={'1'} txt={'button'} stts={'disable'} />
          <br />
          <Button sz={'small'} stl={'1'} txt={'button'} stts={'load'} />
          <br />
          <Button sz={'medium'} stl={'1'} txt={'button'} stts={'load'} />
          <br />
          <Button sz={'big'} stl={'1'} txt={'button'} stts={'load'} />
          <br />
          <Button sz={'big'} stl={'1'} txt={'button'} stts={'valid'} />
          <br />
          <Button sz={'big'} stl={'1'} txt={'button'} stts={'error'} />
        </div>
      </div>

      <style jsx>{`
        .flexContainer {
          margin: 40px;
        }
      `}</style>
    </>
  )
}
