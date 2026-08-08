# Instructions de codage IA pour create-vue-dsfr

## Vue d'ensemble du projet

create-vue-dsfr est un **outil CLI de scaffolding** pour créer des applications Vue.js ou Nuxt utilisant VueDsfr, la bibliothèque de composants du Système de Design Français (DSFR). Il fournit des templates prêts à l'emploi pour démarrer rapidement des projets.

**Nature du projet** : CLI interactif de création de projets (similaire à create-vite, create-nuxt, etc.)

## Pour les tâches demandées

Voir le fichier [`tasks.md`](tasks.md) pour les instructions spécifiques aux tâches.
Avant toute modification, identifier la skill pertinente dans `skills/` et lire son `SKILL.md` ainsi que son `tasks.md`.

## Architecture et structure des fichiers

### Fichiers principaux

- **`index.js`** : Point d'entrée CLI avec prompts interactifs (@clack/prompts)
- **`package.json`** : Manifeste du package npm, définit les binaires `create-vue-dsfr` et `cvd`
- **`update-icons.js`** : Utilitaire pour mettre à jour les icônes (binaires `vue-dsfr-icons` et `vue-dsfr-update-icons`)

### Templates

Le projet fournit 4 templates de démarrage :

1. **`template-vue3-ts-simple/`** : Template Vue 3 simple avec VueDsfr
   - Vite + Vue 3 + TypeScript
   - VueDsfr configuré
   - Configuration ESLint minimale
   - Pas de tests

2. **`template-vue3-ts-complet/`** : Template Vue 3 complet avec VueDsfr
   - Vite + Vue 3 + TypeScript
   - VueDsfr configuré
   - Tests Vitest + Playwright
   - Pinia pour le state management
   - Configuration ESLint avancée

3. **`template-nuxt3-ts-simple/`** : Template Nuxt simple avec VueDsfr
   - Nuxt 3 + TypeScript
   - Module VueDsfr configuré
   - Pas de tests

4. **`template-nuxt3-ts-complet/`** : Template Nuxt complet avec VueDsfr
   - Nuxt 3 + TypeScript
   - Module VueDsfr configuré
   - Tests Vitest + Cypress

### Structure générale des templates

Chaque template contient :

- Configuration de build (Vite ou Nuxt)
- Fichier `_gitignore` (renommé en `.gitignore` lors de la génération)
- Configuration TypeScript
- Configuration ESLint
- Point d'entrée de l'application
- Exemples de pages/vues
- README avec instructions de démarrage

## Workflow de développement

### Installation et test

```bash
npm install               # Installer les dépendances
npm link                  # Créer un lien local pour tester le CLI
create-vue-dsfr mon-app   # Tester la création d'un projet
cd mon-app && npm install # Tester le projet généré
```

### Test du CLI

```bash
# Test avec différents gestionnaires de packages
npm create vue-dsfr@latest mon-app
pnpm create vue-dsfr mon-app
yarn create vue-dsfr mon-app
```

### Modification des templates

Lors de la modification d'un template :

1. Modifier les fichiers dans `template-*/`
2. Tester la génération avec `npm link`
3. Vérifier que le projet généré fonctionne correctement
4. S'assurer que les dépendances dans `package.json` du template sont à jour

### Workflow GitHub : Issues et Pull Requests

- **Issues obligatoires** : Toute PR doit être liée à une issue GitHub
- **Création d'issue** : Utiliser `gh issue create` avec titre et description en français
- **Nommage des branches** : `{type}/{description-kebab-case}-{numéro-issue}`
  - Exemple : `feat/add-nuxt4-template-23`
- **Pull Requests** :
  - Titre reprenant le message de commit principal
  - Corps avec référence `closes #<numéro-issue>`
  - Branche cible : `develop`

### Qualité du code et commits

- **Commits** : Suivre les commits conventionnels (voir [`commit-message.md`](commit-message.md))
- **Gestionnaire de packages** : Utiliser npm (pas pnpm ni yarn) pour les dépendances du CLI
- **Node.js** : Version minimale 16.0.0 (définie dans `package.json`)
- **Pas de linting configuré** : Le projet CLI lui-même n'a pas de configuration ESLint (mais les templates en ont)

## 🛠️ Conventions Techniques

### Code du CLI (index.js)

- **Format** : CommonJS (Node.js classique avec `require`/`module.exports`)
- **Style** : JavaScript avec commentaires JSDoc pour la documentation
- **Prompts** : Utiliser @clack/prompts pour l'interface interactive
  - `clack.intro()` / `clack.outro()` pour l'encadrement
  - `clack.text()` pour les champs de saisie
  - `clack.confirm()` pour les confirmations
  - `clack.select()` pour les choix multiples
  - Toujours vérifier `isCancel()` et gérer l'annulation
- **Gestion de fichiers** : Utiliser les API Node.js natives (`fs`, `path`)
- **Couleurs** : Utiliser kolorist pour la colorisation du terminal

### Structure des templates

Les templates suivent les conventions de leurs frameworks respectifs :

**Templates Vue 3** :

- Vite comme bundler
- Composition API avec `<script setup>`
- TypeScript strict
- ESLint avec configuration @antfu

**Templates Nuxt** :

- Nuxt 3 avec auto-imports
- TypeScript strict
- Module VueDsfr configuré

### Gestion des dépendances

- **CLI** : Utiliser npm pour installer/mettre à jour les dépendances du CLI
- **Templates** : Les templates définissent leurs propres dépendances
- **Versions** : Garder les dépendances à jour dans les templates
- **Package managers** : Les templates doivent supporter npm, pnpm et yarn

## 🎯 Objectif

Ces instructions guident les agents IA (par exemple Copilot, Claude, Codex) pour générer un code cohérent avec les conventions du projet.
Le projet est un **outil CLI de scaffolding** utilisant **Node.js**, **@clack/prompts**, et fournissant des **templates Vue 3 et Nuxt**.

---

## 📝 Langue et Communication

Il s'agit d'un projet dédié aux sites officiels français. **Tout le contenu généré pour le projet doit être en français**.

Les instructions destinées aux agents IA peuvent être rédigées en anglais lorsqu'elles décrivent un workflow ou une commande. Cette exception ne s'applique pas aux contenus que l'agent produit ensuite pour le dépôt, GitHub ou les utilisateurs.

**Seules exceptions (en anglais)** :

- **Instructions IA et workflows internes** : fichiers de consignes, skills et commandes custom destinés aux agents
- **Noms de branches** : en anglais au format `type/description-kebab-case-numéro-issue` (ex: `feat/add-new-feature-1337`)
- **Noms de variables et fonctions** : camelCase/PascalCase (conventions dev internationales)
- **Noms de fichiers** : kebab-case en anglais (ex: `button-group.vue`)
- **Noms de classes CSS** : conventions DSFR (ex: `fr-btn`, `fr-header`)

**Toujours en français** :

- ✅ Messages de commit
- ✅ Commentaires dans le code
- ✅ Strings/labels/messages d'erreur visibles aux utilisateurs
- ✅ Documentation VitePress et JSDoc
- ✅ Documentation projet hors instructions IA
- ✅ Titres et descriptions d'issues GitHub
- ✅ Titres et descriptions de Pull Requests
- ✅ Discussions GitHub

---

## 🇫🇷 Typographie Française (règle globale)

**Ces règles s'appliquent partout** : code, commentaires, strings, documentation, commits.

### Ponctuation double

Appliquer une **espace insécable** avant les ponctuations doubles `:`, `;`, `!`, `?`

- ✅ `error : le champ est obligatoire` (espace insécable avant `:`)
- ❌ `error: le champ est obligatoire` (pas d'espace)

### Apostrophes

Utiliser la **curly apostrophe française** `’` (U+2019) dans les textes rédigés, jamais l'apostrophe ASCII `'`.

- ✅ `l’utilisateur`
- ❌ `l'utilisateur`
- Les identifiants, chaînes techniques, commandes, exemples de code et noms de fichiers peuvent conserver l'apostrophe ASCII si c'est nécessaire.

### Points de suspension

Utiliser `…` (U+2026) au lieu de `...`

- ✅ `"Chargement…"`
- ❌ `"Chargement..."`

### Espace fine insécable

Avant `!`, `;`, `?` (espaces fines insécables U+202F) **dans les textes affichés**

- Tipiquement appliqué dans les messages d'erreur, labels, et documentation
- Dans le code source (commentaires), l'espace insécable normale suffit

### Guillemets

Utiliser les **guillemets français** « » (U+00AB U+00BB) avec espaces :

- ✅ `« Validez avant de continuer »`
- ❌ `"Direct sans espace"`

---

## 🧱 Règles générales

- Le CLI (`index.js`) utilise **CommonJS** (Node.js classique)
- Les templates utilisent **ESM** (`import` / `export`)
- Code modulaire et lisible
- Noms de variables et fonctions clairs et en anglais
- Commentaires en français pour expliquer la logique métier

---

## 📋 Modifications des templates

Lors de la modification d'un template :

1. **Tester localement** : Générer un projet avec le template modifié et vérifier qu'il fonctionne
2. **Vérifier les dépendances** : S'assurer que toutes les dépendances nécessaires sont dans le `package.json` du template
3. **Documenter** : Mettre à jour le README du template si nécessaire
4. **Compatibilité** : Vérifier que le template fonctionne avec npm, pnpm et yarn

## 🧭 Documentation & commentaires

- Ajouter des commentaires clairs dans `index.js` pour expliquer la logique du CLI
- Les README des templates doivent être en français
- Expliquer le _pourquoi_ plus que le _comment_ dans les commentaires

## 🧠 Style et lisibilité

- Préférer la clarté au code complexe
- Éviter les raccourcis obscurs
- Nommer les fonctions selon leur intention

## Montée de version de dépendances

**Dépendances du CLI** :

- Vérifier les notes de version pour les breaking changes
- Tester localement la génération de projets après mise à jour
- Utiliser `npm update` ou modifier manuellement `package.json`

**Dépendances des templates** :

- Mettre à jour les `package.json` dans chaque template
- Tester que chaque template généré fonctionne correctement
- Vérifier la compatibilité avec VueDsfr
- S'assurer que les versions de Vue/Nuxt sont compatibles entre elles
