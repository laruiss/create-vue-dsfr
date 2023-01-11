const path = require('path')
const { stat } = require('node:fs/promises')

const { red, yellow } = require('kolorist')
const prompts = require('prompts')

const { getLatestDsfrRelease } = require('./fetch-dsfr.js')

const pkgPath = path.resolve('./package.json')

async function init() {
  const statPkgPath = await stat(pkgPath).catch(() => null)
  
  const res = await prompts([
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
    }
  ])
  getLatestDsfrRelease('GouvernementFR', 'dsfr', './public/icons/')
}

init().catch((e) => {
  console.log(e.message)
})