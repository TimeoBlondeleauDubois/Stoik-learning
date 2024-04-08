import Layout from '@/components/layout'
import { Button } from '@/components/Button'
import { Input } from '@/components/Form'
import Logo from '@/components/Logo'

import { ApiService } from '@/services/api.service'
import { CustomService } from '@/services/custom.service'
import { getLangFromLocale } from '@/utils/get-lang-from-locale'

export default function uikit({ logo }) {
  return (
    <Layout>
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

      <div>
        <Logo
          bank={logo}
          width={120}
          height={120}
          gap={120}
          animation={'slider'}
          fullScreen={false}
        />
        <Logo
          bank={logo}
          width={120}
          height={120}
          gap={120}
          animation={'fade-in'}
          fullScreen={false}
        />
        <Logo
          bank={logo}
          width={120}
          height={120}
          gap={120}
          animation={'static'}
          fullScreen={false}
        />
      </div>

      <style jsx>{`
        .flexContainer {
          margin: 40px;
        }
      `}</style>

      <Input
        label={'This is a text !'}
        type={'text'}
        id={'unique-name'}
        placeholder={'Type something here'}
        helpText={'A little text to help you'}
      />
      <Input
        label={'This is a email !'}
        type={'email'}
        id={'unique-name'}
        placeholder={'Type something here'}
        helpText={'A little text to help you'}
      />
      <Input
        label={'This is a number !'}
        type={'number'}
        id={'unique-name'}
        placeholder={'Type something here'}
        helpText={'A little text to help you'}
      />
      <Input
        label={'This is a password !'}
        type={'password'}
        id={'unique-name'}
        placeholder={'Type something here'}
        helpText={'A little text to help you'}
      />
      <Input
        label={'This is a search !'}
        type={'search'}
        id={'unique-name'}
        placeholder={'Type something here'}
        helpText={'A little text to help you'}
      />
    </Layout>
  )
}

export async function getStaticProps({ locale, previewData }) {
  const lang = getLangFromLocale(locale)

  ApiService.setPreviewData({ previewData })
  const customService = new CustomService(lang)
  const [logo] = await Promise.all([customService.getLogoBank()])

  return {
    props: {
      logo,
    },
  }
}
