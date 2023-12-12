<script setup lang="ts">
definePageMeta({
  layout: 'default',
})

useHead({ title: 'Page d’accueil - Gabarit de démarrage VueDsfr' })
</script>

<template>
  <div class="fr-container">
    <h1 class="fr-mt-3w fr-mt-md-5w fr-mb-5w">
      Bienvenue
    </h1>
    <p>
      <span class="fr-icon-ancient-gate-fill" /> <!-- Icône DSFR -->
    </p>
    <p>
      <VIcon name="ri-flag-line" />  <!-- Icône OhVueIcon-->
    </p>
  </div>
</template>
