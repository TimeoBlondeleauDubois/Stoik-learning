const fs = require('fs')
const path = require('path')

const slicemachineConfigPath = path.join(
  __dirname,
  `../slicemachine.config.json`
)

const slicemachineConfigFile = JSON.parse(
  fs.readFileSync(slicemachineConfigPath, 'utf-8')
)

slicemachineConfigFile.libraries.map((library) => {
  const libraryPath = path.join(__dirname, `../${library}`)
  const libraryFolders = fs.readdirSync(libraryPath)
  libraryFolders
    .filter((file) => fs.statSync(path.join(libraryPath, file)).isDirectory())
    .map((sliceName) => {
      const SliceMocksPath = path.join(
        __dirname,
        `../${library}/${sliceName}/mocks.json`
      )
      const mocks = JSON.parse(fs.readFileSync(SliceMocksPath, 'utf-8'))
      mocks.map((variant) => {
        const sliceVariation = variant.variation
        const SliceVariantPath = path.join(
          __dirname,
          `../${library}/${sliceName}/${sliceVariation}`
        )

        if (fs.existsSync(SliceVariantPath)) return

        fs.mkdirSync(SliceVariantPath)

        const indexContent = `import styles from './styles.module.scss'

const ${sliceName}${
          sliceVariation.charAt(0).toUpperCase() + sliceVariation.slice(1)
        } = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.section_${sliceName.toLowerCase()}_${sliceVariation.toLowerCase()}}
    >
      <div className={styles.wrapper}>
        <div className={styles.container}>
          ${sliceName.toUpperCase()} ${sliceVariation.toUpperCase()}
        </div>
      </div>
    </section>
  )
}

export default ${sliceName}${
          sliceVariation.charAt(0).toUpperCase() + sliceVariation.slice(1)
        }`

        fs.writeFileSync(path.join(SliceVariantPath, 'index.jsx'), indexContent)

        const stylesContent = `@import "@/styles/common/globals.scss";

.section_${sliceName.toLowerCase()}_${sliceVariation.toLowerCase()} {
  .wrapper {
    @include styleGrid();
  }
  .container {

  }
}
`
        fs.writeFileSync(
          path.join(SliceVariantPath, 'styles.module.scss'),
          stylesContent
        )

        console.log(
          `Dossier "${sliceVariation}" créé avec succès dans la slice ${sliceName}.`
        )
      })

      const SlicePath = path.join(__dirname, `../${library}/${sliceName}`)

      const sliceNameFiles = fs.readdirSync(SlicePath)
      const allFolders = sliceNameFiles
        .filter((file) => fs.statSync(path.join(SlicePath, file)).isDirectory())
        .map((folder) => folder)

      const switchContent = `${allFolders
        .map(
          (f) =>
            `import ${sliceName}${
              f.charAt(0).toUpperCase() + f.slice(1)
            } from './${f.toLowerCase()}'`
        )
        .join('\n')}

const ${sliceName} = ({ slice, ...otherProps }) => {
  switch (slice.variation) {
    ${allFolders
      .map((f, i) => {
        const indent = '    '
        return `${i > 0 ? indent : ''}case '${f.toLowerCase()}':
      return <${sliceName}${
        f.charAt(0).toUpperCase() + f.slice(1)
      } slice={slice} {...otherProps} />`
      })
      .join('\n')}
    default:
      return null
  }
}
    
export default ${sliceName}`

      const switchPathIndexJS = path.join(SlicePath, 'index.js')
      if (fs.existsSync(switchPathIndexJS)) {
        fs.unlinkSync(switchPathIndexJS)
      }

      const switchPathIndexJSX = path.join(SlicePath, 'index.jsx')
      fs.writeFileSync(switchPathIndexJSX, switchContent)
    })
})
