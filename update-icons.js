#!/usr/bin/env node
// @ts-check

const path = require('path')
const { stat } = require('node:fs/promises')

const { red, yellow } = require('kolorist')
const prompts = require('prompts')

const { getLatestDsfrRelease } = require('./fetch-dsfr.js')

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

init().catch((e) => {
  console.log(e.message)
})