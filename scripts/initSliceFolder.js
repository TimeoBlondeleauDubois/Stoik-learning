/*****************/
/*  CHECK ERROR  */
/*****************/

const fs = require('fs')
const path = require('path')

const sliceName = process.argv[2]

const sliceFolder = process.argv[3]

if (!sliceName) {
  console.error('Veuillez fournir un nom de slice.')
  process.exit(1)
}

if (!sliceFolder) {
  console.error('Veuillez fournir un nom de dossier.')
  process.exit(1)
}

const slicePathName = path.join(__dirname, `../src/slices/${sliceName}`)

if (!fs.existsSync(slicePathName)) {
  console.error(`Le dossier "${sliceName}" n'existe pas.`)
  process.exit(1)
}

const slicePathFolder = path.join(
  __dirname,
  `../src/slices/${sliceName}/${sliceFolder}`
)

if (fs.existsSync(slicePathFolder)) {
  console.error(`Le dossier "${sliceFolder}" existe déjà.`)
  process.exit(1)
}

/**************************/
/*  CREATE FOLDER & FILE  */
/**************************/

fs.mkdirSync(slicePathFolder)

const indexContent = `import styles from './styles.module.scss'

const ${sliceName}${
  sliceFolder.charAt(0).toUpperCase() + sliceFolder.slice(1)
} = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.section_${sliceName.toLowerCase()}_${sliceFolder.toLowerCase()}}
    >
      <div className={styles.wrapper}>
        <div className={styles.container}>
          ${sliceName.toUpperCase()} ${sliceFolder.toUpperCase()}
        </div>
      </div>
    </section>
  )
}

export default ${sliceName}${
  sliceFolder.charAt(0).toUpperCase() + sliceFolder.slice(1)
}`
fs.writeFileSync(path.join(slicePathFolder, 'index.jsx'), indexContent)

const stylesContent = `@import "@/styles/common/globals.scss";

.section_${sliceName.toLowerCase()}_${sliceFolder.toLowerCase()} {
  .wrapper {
    @include styleGrid();
  }
  .container {

  }
}
`
fs.writeFileSync(
  path.join(slicePathFolder, 'styles.module.scss'),
  stylesContent
)

console.log(
  `Dossier "${sliceFolder}" créé avec succès dans la slice ${sliceName}.`
)

/****************************/
/*  UPDATE INDEX.JS SWITCH  */
/****************************/

const sliceNameFiles = fs.readdirSync(slicePathName)

const allFolders = sliceNameFiles
  .filter((file) => fs.statSync(path.join(slicePathName, file)).isDirectory())
  .map((folder) => folder)

const switchContent = `${allFolders
  .map(
    (f) =>
      `import ${sliceName}${
        f.charAt(0).toUpperCase() + f.slice(1)
      } from './${f.toLowerCase()}'`
  )
  .join('\n')}
  
const ${sliceName} = ({ slice }) => {
  switch (slice.variation) {
    ${allFolders
      .map((f, i) => {
        const indent = '    '
        return `${i > 0 ? indent : ''}case '${f.toLowerCase()}':
      return <${sliceName}${
        f.charAt(0).toUpperCase() + f.slice(1)
      } slice={slice} />`
      })
      .join('\n')}
    default:
      return null
  }
}

export default ${sliceName}`

const switchPathIndexJS = path.join(slicePathName, 'index.js')
if (fs.existsSync(switchPathIndexJS)) {
  fs.unlinkSync(switchPathIndexJS)
}

const switchPathIndexJSX = path.join(slicePathName, 'index.jsx')
fs.writeFileSync(switchPathIndexJSX, switchContent)
