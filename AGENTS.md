# Guide des consignes IA pour create-vue-dsfr

Ce document est le **point d'entrée central** pour tous les agents IA (Copilot, Claude, Codex, etc.) travaillant sur create-vue-dsfr.

## Vue d'ensemble

create-vue-dsfr utilise un système hiérarchique de consignes IA :
- **`.agents/`** : consignes communes agnostiques à tous les agents
- **`agent-instructions/`** : workflows réutilisables (commit, branch, issue, PR)
- **Adaptateurs spécifiques** : `.github/` (Copilot), `.claude/` (Claude), `.codex/` (Codex)

## Chargement des consignes

### Étape 1 : Identifier le type de tâche

Déterminer quelle catégorie correspond à la requête de l'utilisateur :

| Type de tâche | Skill à charger |
|---------------|----------------|
| Implémenter du code, refactoring, bugfix | `code-implementation` |
| Écrire des tests, améliorer la couverture | `test-writing` |
| Rédiger de la documentation, README, guides | `documentation` |
| Créer un commit, vérifier les conventions | `commit-conventions` |

### Étape 2 : Charger le skill approprié

1. Lire `.agents/skills/<nom-du-skill>/SKILL.md`
2. Suivre les références vers les fichiers associés :
   - `.agents/instructions.md` (règles de codage communes)
   - `.agents/commit-message.md` (conventions de commit)
   - `.agents/tasks.md` (attentes par type de tâche)
   - `tasks.md` du skill (tâches spécifiques)

### Étape 3 : Appliquer les adaptateurs (si nécessaire)

Consulter l'adaptateur spécifique à votre agent pour les capacités étendues :
- **Copilot** : `.github/copilot-instructions.md` et `.github/prompts/*.prompt.md`
- **Claude** : `.claude/commands/*.md`
- **Codex** : `.codex/skills/*.md` et `.codex/commands/*.md`

## Workflows communs disponibles

Les workflows suivants sont accessibles via `agent-instructions/` :

| Workflow | Description | Commande |
|----------|-------------|----------|
| `commit-staged.md` | Créer un commit Conventional Commits avec gitmoji | `/commit-staged` |
| `create-branch.md` | Créer une branche depuis une issue GitHub | `/create-branch <issue-id>` |
| `create-issue.md` | Créer une issue GitHub depuis les changements staged | `/create-issue` |
| `create-pr.md` | Créer une Pull Request vers develop | `/create-pr [base-branch]` |

**Usage** : les commandes custom des adaptateurs (ex: `.github/prompts/commit-staged.prompt.md`) renvoient vers ces workflows communs.

## Priorités des skills

Certains skills ont priorité sur d'autres selon le contexte :

1. **commit-conventions** : priorité absolue pour toute opération de commit ou PR
2. **code-implementation** : priorité pour l'implémentation de code
3. **test-writing** : priorité lors de l'écriture de tests
4. **documentation** : priorité pour la documentation

## Projet GitHub

- **Projet #1** : "Assistant de création d'applications VueDsfr"
- **Repository** : `laruiss/create-vue-dsfr`
- **Branche principale de développement** : `develop`
- **Workflow** : toutes les PR ciblent `develop`

## Conventions de commit

create-vue-dsfr utilise **Conventional Commits** avec **gitmoji** :

```
<type>: <gitmoji> <description>

## Pourquoi les changements ont été faits :
- raison 1
- raison 2

## Quelles modifications ont été apportées :
- modification 1
- modification 2
```

**Types principaux** :
- `feat` : nouvelle fonctionnalité
- `fix` : correction de bug
- `docs` : documentation
- `refactor` : refactoring sans changement de comportement
- `test` : ajout ou modification de tests
- `chore` : maintenance, dépendances

Voir `.agents/commit-message.md` pour la référence complète.

## Structure du projet

create-vue-dsfr est un **outil CLI** pour créer des applications Vue.js avec VueDsfr :
- `index.js` : point d'entrée CLI avec prompts interactifs (@clack/prompts)
- `template-vue3-ts-simple/` : template Vue 3 simple
- `template-vue3-ts-complet/` : template Vue 3 complet avec tests
- `template-nuxt3-ts-simple/` : template Nuxt simple
- `template-nuxt3-ts-complet/` : template Nuxt complet avec tests

## Aide et référence

- **Gouvernance des consignes** : `.agents/README.md`
- **Instructions de codage** : `.agents/instructions.md`
- **Conventions de commit** : `.agents/commit-message.md`
- **Skills disponibles** : `.agents/skills/*/SKILL.md`
- **Workflows communs** : `agent-instructions/*.md`

## Pour les nouveaux contributeurs

1. Lire ce fichier en entier
2. Consulter `.agents/README.md` pour comprendre la gouvernance
3. Charger le skill approprié selon la tâche
4. Utiliser les workflows communs pour les opérations Git/GitHub
