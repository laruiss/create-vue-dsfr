const path = require('path')
const { mkdir, stat } = require('node:fs/promises')
const fs = require('node:fs')

const AdmZip = require('adm-zip')
const { green, yellow } = require('kolorist')
const { $fetch } = require('ohmyfetch')
const rimraf = require('rimraf')

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
  extractIcons(assetPath, targetFolder)
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
  zip
    .getEntries()
    .map(({entryName}) => entryName)
    .filter(entryName => entryName.includes('dist/icons/'))
    .forEach(entryName => {
      const target = targetFolder + entryName.replace(/.*dist\/icons\/(.*)/, '$1')
      try {
        zip.extractEntryTo(entryName, target, /*maintainEntryPath*/ true, /*overwrite*/ true)
      } catch (e) {
        console.log(e.message + ` (${target})`)
      }
    })
    console.log(green(`✔ Icônes extraites dans ${yellow(targetFolder)}`))
}

module.exports = {
  extractIcons,
  downloadFile,
  getLatestDsfrRelease,
}