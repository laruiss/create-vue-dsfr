# Gabarit de démarrage de VueDsfr pour Nuxt 3

Nous vous recommandons de regarder la [documentation de Nuxt 3](https://nuxt.com/docs/getting-started/introduction)
et la [documentation de VueDsfr](https://vue-dsfr.netlify.app).

## Installation des dépendances

```bash
npm install
```

## Lancer nuxt en mode développement

Démarre le serveur sur `http://localhost:3000`·:

```bash
npm run dev
```

## Générer le code de production

Génère le code de production de l’application :

```bash
npm run build
```

Prévisualisation du code de prod (nécessite un build préalable) :

```bash
npm run preview
```

## Lancer les tests avec vitest

Vitest est déjà configuré pour vos tests.

Pour les lancer :

```bash
npm run test:unit
```

## Lancer les tests de bout-en-bout avec Cypress

Cypress est déjà configuré pour vos tests de bout-en-bout (end-to-end).

Pour les lancer avec l’interface :

```bash
npm run test:e2e
```

Pour les lancer sans l’interface (dans la CI) :

```bash
npm run test:e2e:ci
```

Regarder ensuite la [documentation de Nuxt concernant le déploiement](https://nuxt.com/docs/getting-started/deployment).
