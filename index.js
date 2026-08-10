#!/usr/bin/env node

// @ts-check
import path from 'path'
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'
import minimist from 'minimist'
import * as clack from '@clack/prompts'
import {
  yellow,
  green,
  blue,
  lightGreen,
  red,
  gray,
  lightBlue,
  magenta,
} from 'kolorist'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const cwd = process.cwd()

// Avoids autoconversion to number of the project name by defining that the args
// non associated with an option ( _ ) needs to be parsed as a string. See #4606
const argv = minimist(process.argv.slice(2), { string: ['_'] })

const FRAMEWORKS = [
  {
    name: 'Vue 3',
    color: lightGreen,
    variants: [
      {
        name: 'vue3-ts-simple',
        display: ' Vue3, TS, ESlint, VueDsfr, Autoimport',
        color: yellow
      },
      {
        name: 'vue3-ts-complet',
        display:  'Vue3, TS, ESLint, VueDsfr, Autoimport, Pinia, Vitest, Playwright',
        color: magenta
      },
    ],
  },
  {
    name: 'Nuxt 4',
    color: green,
    variants: [
      {
        name: 'nuxt4-ts-simple',
        display: ' Nuxt4, TS',
        color: lightBlue
      },
      {
        name: 'nuxt4-ts-complet',
        display: 'Nuxt4, TS, ESLint, A11y',
        color: blue
      },
    ],
  },
]

const TEMPLATES = FRAMEWORKS.map(
  (f) => (f.variants && f.variants.map((v) => v.name)) || [f.name]
).reduce((a, b) => a.concat(b), [])

const renameFiles = {
  _gitignore: '.gitignore'
}

async function init() {
  clack.intro(blue('create-vue-dsfr'))

  let targetDir = argv._[0]
  let template = argv.template || argv.t

  const defaultProjectName = !targetDir ? 'vue-dsfr-project' : targetDir

  // Question 1: projectName
  if (!targetDir) {
    const projectName = await clack.text({
      message: 'Nom du projet:',
      initialValue: defaultProjectName,
      validate: (value) => {
        if (!value) return 'Veuillez entrer un nom de projet'
      }
    })

    if (clack.isCancel(projectName)) {
      clack.cancel(red('Opération annulée'))
      return
    }

    targetDir = projectName.trim() || defaultProjectName
  }

  // Question 2: overwrite
  let overwrite = false
  if (fs.existsSync(targetDir) && !isEmpty(targetDir)) {
    const overwriteAnswer = await clack.confirm({
      message: (targetDir === '.'
        ? 'Répertoire courant'
        : `Le répertoire cible "${targetDir}"`) +
      ` n'est pas vide. Le supprimer et continuer ?`
    })

    if (clack.isCancel(overwriteAnswer)) {
      clack.cancel(red('Opération annulée'))
      return
    }

    if (overwriteAnswer === false) {
      clack.cancel(red('Opération annulée'))
      return
    }

    overwrite = overwriteAnswer
  }

  // Question 3: packageName
  let packageName
  if (!isValidPackageName(targetDir)) {
    packageName = await clack.text({
      message: 'Nom du package:',
      initialValue: toValidPackageName(targetDir),
      validate: (dir) => {
        if (!isValidPackageName(dir)) return 'Nom de package invalide'
      }
    })

    if (clack.isCancel(packageName)) {
      clack.cancel(red('Opération annulée'))
      return
    }
  }

  // Question 4: framework
  let framework
  if (!template || !TEMPLATES.includes(template)) {
    framework = await clack.select({
      message: typeof template === 'string' && !TEMPLATES.includes(template)
        ? `"${template}" n'est pas un gabarit valide. Veuillez choisir parmi la liste ci-dessous : `
        : 'Liste disponible :',
      options: FRAMEWORKS.map((fw) => ({
        value: fw,
        label: fw.color(fw.name)
      }))
    })

    if (clack.isCancel(framework)) {
      clack.cancel(red('Opération annulée'))
      return
    }
  }

  // Question 5: variant
  let variant
  if (framework && framework.variants) {
    variant = await clack.select({
      message: 'Faites votre choix :',
      options: framework.variants.map((v) => ({
        value: v.name,
        label: v.color(v.name) + gray(` ${v.display}`)
      }))
    })

    if (clack.isCancel(variant)) {
      clack.cancel(red('Opération annulée'))
      return
    }
  }

  const root = path.join(cwd, targetDir)

  if (overwrite) {
    emptyDir(root)
  } else if (!fs.existsSync(root)) {
    fs.mkdirSync(root)
  }

  // determine template
  template = variant || (framework && framework.name) || template

  console.log(`\nScaffolding project in ${root}...`)

  const templateDir = path.join(__dirname, `template-${template}`)

  const write = (file, content) => {
    const targetPath = renameFiles[file]
      ? path.join(root, renameFiles[file])
      : path.join(root, file)
    if (content) {
      fs.writeFileSync(targetPath, content)
    } else {
      copy(path.join(templateDir, file), targetPath)
    }
  }

  const files = fs.readdirSync(templateDir)
  for (const file of files.filter((f) => f !== 'package.json')) {
    write(file)
  }

  const pkg = JSON.parse(fs.readFileSync(path.join(templateDir, 'package.json'), 'utf-8'))

  pkg.name = packageName || targetDir

  write('package.json', JSON.stringify(pkg, null, 2))

  const pkgInfo = pkgFromUserAgent(process.env.npm_config_user_agent)
  const pkgManager = pkgInfo ? pkgInfo.name : 'npm'

  let nextSteps = ''
  if (root !== cwd) {
    nextSteps += `  cd ${path.relative(cwd, root)}\n`
  }
  switch (pkgManager) {
    case 'pnpm':
      nextSteps += '  pnpm i\n  pnpm dev'
      break
    case 'yarn':
      nextSteps += '  yarn\n  yarn dev'
      break
    default:
      nextSteps += `  ${pkgManager} install\n  ${pkgManager} run dev`
      break
  }

  clack.outro(lightGreen('Le projet est prêt !') + '\n\n' + gray('Prochaines étapes :') + '\n' + nextSteps)
}

function copy(src, dest) {
  const stat = fs.statSync(src)
  if (stat.isDirectory()) {
    copyDir(src, dest)
  } else {
    fs.copyFileSync(src, dest)
  }
}

function isValidPackageName(projectName) {
  return /^(?:@[a-z0-9-*~][a-z0-9-*._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/.test(
    projectName
  )
}

function toValidPackageName(projectName) {
  return projectName
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/^[._]/, '')
    .replace(/[^a-z0-9-~]+/g, '-')
}

function copyDir(srcDir, destDir) {
  fs.mkdirSync(destDir, { recursive: true })
  for (const file of fs.readdirSync(srcDir)) {
    const srcFile = path.resolve(srcDir, file)
    const destFile = path.resolve(destDir, file)
    copy(srcFile, destFile)
  }
}

function isEmpty(path) {
  return fs.readdirSync(path).length === 0
}

function emptyDir(dir) {
  if (!fs.existsSync(dir)) {
    return
  }
  for (const file of fs.readdirSync(dir)) {
    const abs = path.resolve(dir, file)
    if (fs.lstatSync(abs).isDirectory()) {
      emptyDir(abs)
      fs.rmdirSync(abs)
    } else {
      fs.unlinkSync(abs)
    }
  }
}

/**
 * @param {string | undefined} userAgent process.env.npm_config_user_agent
 * @returns object | undefined
 */
function pkgFromUserAgent(userAgent) {
  if (!userAgent) return undefined
  const pkgSpec = userAgent.split(' ')[0]
  const pkgSpecArr = pkgSpec.split('/')
  return {
    name: pkgSpecArr[0],
    version: pkgSpecArr[1]
  }
}

init().catch((e) => {
  console.error(e)
})
