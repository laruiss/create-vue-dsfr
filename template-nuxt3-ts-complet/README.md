# Gabarit de démarrage de VueDsfr pour Nuxt 3

Nous vous recommandons de regarder la [documentation de Nuxt 3](https://nuxt.com/docs/getting-started/introduction)
et la [documentation de VueDsfr](https://vue-dsfr.netlify.app).

## Installation des dépendances

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Lancer nuxt en mode développement

Démarre le serveur sur `http://localhost:3000`·:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Générer le code de production

Génère le code de production de l’application :

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Prévisualisation du code de prod (nécessite un build préalable) :

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

## Lancer les tests avec vitest

Vitest est déjà configuré pour vos tests.

Pour les lancer :

```bash
npm run test:unit
```

## Lancer les tests de bout-en-bout avec Cypress

Playwright est déjà configuré pour vos tests de bout-en-bout (end-to-end).

Pour les lancer avec l’interface :

```bash
npm run test:e2e
```

Regarder ensuite la [documentation de Nuxt concernant le déploiement](https://nuxt.com/docs/getting-started/deployment).
