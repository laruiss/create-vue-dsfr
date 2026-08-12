# Création d'Issues GitHub en Français pour create-vue-dsfr

**Skill agnostique** : Ce document s'applique à tous les agents IA (Copilot, Claude, Codex, etc.)

## Quand utiliser cette skill

Cette skill doit être appliquée automatiquement lors de :

- Toute création d'issue GitHub pour le projet create-vue-dsfr
- Toute demande de création d'issue ou de bug report
- Toute demande de feature request

## Instructions obligatoires

### 1. Langue

**OBLIGATOIRE** : Toutes les issues doivent être rédigées **entièrement en français**.

Cela inclut :

- Le titre de l'issue
- La description complète
- Tous les labels
- Les templates utilisés
- Les commentaires initiaux

### 2. Ajout au projet GitHub

**OBLIGATOIRE** : Chaque issue créée doit être automatiquement ajoutée au projet GitHub #1 de ce dépôt.

- **Numéro du projet** : #1
- **Dépôt** : create-vue-dsfr (dépôt actuel)
- **Action** : Ajouter systématiquement l'issue à ce projet lors de sa création

### 3. Titre de l'issue

**OBLIGATOIRE** : Le titre de l'issue doit **toujours commencer par un verbe à l'infinitif**.

Exemples :
- ✅ `Corriger le bug d'affichage du bouton`

- ✅ `Ajouter le support de TypeScript 5`
- ✅ `Améliorer la documentation du composant Modal`
- ✅ `Refactoriser le système de navigation`
- ❌ `Bug d'affichage du bouton` (ne commence pas par un verbe)
- ❌ `Le composant Modal ne fonctionne pas` (ne commence pas par un verbe à l'infinitif)

### 4. Types et tags GitHub

Selon le type d'issue, appliquer les types et tags GitHub suivants :

#### Issues de type Feature ou Documentation

- **Type GitHub** : `feature`
- **Tag** : `enhancement`
- **Exemples** : Nouvelle fonctionnalité, amélioration existante, ajout de documentation

#### Issues de type Bug

- **Type GitHub** : `bug`
- **Tag** : `bug`
- **Exemples** : Comportement incorrect, erreur, problème à corriger

#### Issues de type CI, Refacto, ou Autres

- **Type GitHub** : `task`
- **Tags** : Utiliser **uniquement les tags existants** dans le dépôt parmi :
  - `refactoring` : Pour les refactorisations de code
  - `ci` : Pour les modifications d'intégration continue
  - `dependencies` : Pour les mises à jour de dépendances
  - `chore` : Pour les tâches de maintenance
  - `performance` : Pour les optimisations de performance
  - `tests` : Pour les améliorations des tests
  - Vérifier les tags existants avant d'en appliquer un

### 5. Structure de l'issue

Utiliser une structure claire et professionnelle en français :

```markdown
## Description

[Description claire et concise du problème ou de la demande]

## Contexte

[Informations contextuelles pertinentes]

## Étapes pour reproduire (si bug)

1. [Première étape]
2. [Deuxième étape]
3. [...]

## Comportement attendu

[Ce qui devrait se passer]

## Comportement actuel

[Ce qui se passe actuellement]

## Informations supplémentaires

- **Version** : [version concernée]
- **Navigateur** : [si pertinent]
- **Environnement** : [si pertinent]
```

### 6. Workflow de création

1. **Collecter les informations** : S'assurer d'avoir tous les détails nécessaires
2. **Déterminer le type d'issue** : Bug, feature/docs, ou task (ci/refacto/autre)
3. **Rédiger en français** : Créer le contenu de l'issue entièrement en français
4. **Formuler le titre** : S'assurer qu'il commence par un verbe à l'infinitif
5. **Appliquer le type et les tags GitHub** : Selon les règles définies ci-dessus
6. **Créer l'issue** : Utiliser les outils GitHub appropriés
7. **Ajouter au projet #1** : Ajouter immédiatement l'issue au projet #1 du dépôt
8. **Confirmer à l'utilisateur** : Indiquer les actions effectuées et leur statut

### 7. Gestion des erreurs

- Si l'ajout au projet #1 échoue : **Alerter l'utilisateur** car c'est obligatoire
- Si la création de l'issue échoue : Fournir des détails sur l'erreur en français

## Exemples

### Exemples de titres d'issue

#### ❌ Mauvais

- `Button component not working` (en anglais)
- `Le composant bouton ne fonctionne pas` (ne commence pas par un verbe à l'infinitif)
- `Bug d'affichage` (ne commence pas par un verbe à l'infinitif)

#### ✅ Bon

- `Corriger le bug d'affichage du composant bouton`
- `Ajouter le support des thèmes personnalisés`
- `Améliorer la documentation du composant Modal`
- `Refactoriser le système de routing`

### Exemples complets par type

#### Issue de type Bug

- **Titre** : `Corriger l'affichage du bouton sur mobile`
- **Type GitHub** : `bug`
- **Tag** : `bug`

#### Issue de type Feature

- **Titre** : `Ajouter un composant Carousel accessible`
- **Type GitHub** : `feature`
- **Tag** : `enhancement`

#### Issue de type Documentation

- **Titre** : `Améliorer la documentation des composants formulaires`
- **Type GitHub** : `feature`
- **Tag** : `enhancement`

#### Issue de type Refactorisation

- **Titre** : `Refactoriser le composant Header pour améliorer la maintenabilité`
- **Type GitHub** : `task`
- **Tag** : `refactoring`

#### Issue de type CI

- **Titre** : `Ajouter les tests E2E au pipeline CI`
- **Type GitHub** : `task`
- **Tag** : `ci`

### Exemple de description complète

❌ Mauvais : `The button doesn't work when clicked`

✅ Bon :

```markdown
## Description

Le bouton ne répond pas lorsqu'on clique dessus dans la vue d'accueil.

## Contexte

Cela se produit uniquement sur mobile Safari, les autres navigateurs fonctionnent correctement.

## Étapes pour reproduire

1. Ouvrir l'application sur Safari mobile
2. Naviguer vers la page d'accueil
3. Cliquer sur le bouton "Valider"

## Comportement attendu

Le bouton devrait déclencher l'événement @click et soumettre le formulaire.

## Comportement actuel

Rien ne se passe lors du clic.

## Informations supplémentaires

- **Version** : 1.2.3
- **Navigateur** : Safari 16.5 iOS
- **Environnement** : Production
```

## Notes importantes

- **Priorité à la langue française** : Même si l'utilisateur fait sa demande en anglais, l'issue doit être créée en français
- **Reformulation idiomatique** : Préférer une formulation naturelle en français plutôt qu'une traduction littérale
- **Clarté et professionnalisme** : Maintenir un ton professionnel et des explications claires
- **Projet GitHub** : L'ajout au projet #1 du dépôt est obligatoire