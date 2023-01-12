#!/usr/bin/env node
// @ts-check

const path = require('path')
const { stat } = require('node:fs/promises')

const { green, red, yellow } = require('kolorist')
const { $fetch } = require('ohmyfetch')
const prompts = require('prompts')

const pkgPath = path.resolve(process.cwd(), 'package.json')

async function init() {
  const statPkgPath = await stat(pkgPath).catch(() => null)
  let pkg = { dependencies: {}, devDependencies: {} }
  if (statPkgPath && statPkgPath.isFile()) {
    pkg = require(pkgPath)
  }

  let targetDir = './public/icons'
  if (statPkgPath && statPkgPath.isFile()) {
    if ('nuxt' in pkg.dependencies || 'nuxt' in pkg.devDependencies) {
      targetDir = './client/public/icons'
    }
  }

  
  await prompts([
    {
      type: () => (statPkgPath && statPkgPath.isFile()) ? null : 'confirm',
      name: 'proceed',
      message: () => yellow('Ce répertoire ne semble pas être un projet NPM, êtes-vous sûr de vouloir continuer?')
    },
    {
      type: (_, { proceed } = {}) => {
        if (proceed === false) {
          throw new Error(red('✖') + ' Opération annulée')
        }
        return null
      },
      name: 'npmProjectChecker'
    },
    {
      type: 'text',
      name: 'getTargetDir',
      message: 'Emplacement des icônes :',
      initial: targetDir,
      onState: (state) =>
        (targetDir = state.value.trim() || targetDir)
    },
  ])
  getLatestDsfrRelease(targetDir, 'GouvernementFR', 'dsfr')
}

const dsfrTmpDir = './tmp' + Math.random().toString().substring(2, 10)

async function getLatestDsfrRelease(targetFolder = './public/icons', owner = 'GouvernementFR', repo = 'dsfr') {
  const releaseInfo = await $fetch(
    `https://api.github.com/repos/${owner}/${repo}/releases/latest`,
    {
      headers: { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0'}
    }
  )
  const asset = releaseInfo.assets[0]
  const assetName = asset.name
  const tmpDir = path.resolve(dsfrTmpDir)
  const statTmpDir = await stat(tmpDir).catch(() => null)
  if (!statTmpDir || !statTmpDir.isDirectory()) {
    await mkdir(tmpDir)
  }
  const assetPath = path.resolve(dsfrTmpDir, `${assetName}`)
  await downloadFile(asset.browser_download_url, assetPath)
  const statZipFile = await stat(assetPath)
  await extractIcons(assetPath, targetFolder)
  return new Promise((resolve, reject) => {
    console.log(yellow('⧖ Nettoyage en cours...'))
    rimraf(dsfrTmpDir, (err) => {
      if (err) {
        console.log(red('✖') + ' ' + err.message)
        reject(err)
      }
      console.log(green('✔ Nettoyage effectué'))
      resolve()
    })
  })
}

async function downloadFile(url, filepath) {
  const blob = await $fetch(
    url,
    {
      headers: { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0'},
      responseType: 'blob',
    }
  )
    
  return new Promise((resolve, reject) => {
    const filePath = fs.createWriteStream(filepath)
    filePath.on('error', (err) => {
      filePath.close();
      reject(err)
    })
    filePath.on('finish',() => {
      filePath.close();
      resolve()
    })
    blob.arrayBuffer().then(arrayBuffer => {
      filePath.write(Buffer.from(arrayBuffer))
      console.log(green('✔ Icones téléchargées'));
      resolve()
    })
  })
}

async function extractIcons (filepath, targetFolder) {
  targetFolder += targetFolder.endsWith('/') ? '' : '/'
  const zip = new AdmZip(filepath)
  console.log(yellow(`⧖ Extraction des icônes en cours (dans ${lightGray(targetFolder)})...`))
  zip
    .getEntries()
    .map(({entryName}) => entryName)
    .filter(entryName => entryName.includes('dist/icons/') && entryName.endsWith('.svg'))
    .forEach(entryName => {
      const target = path.dirname(targetFolder + entryName.replace(/.*dist\/icons\/(.*)/, '$1'))
      try {
        zip.extractEntryTo(entryName, target, /*maintainEntryPath*/ false, /*overwrite*/ true)
      } catch (e) {
        console.log(`${red('✖')} Erreur dans le dossier ${target}: ` + e.message)
      }
    })
    console.log(green(`✔ Icônes extraites dans ${yellow(targetFolder)}`))
}

init().catch((e) => {
  console.log(e.message)
})