<script setup lang="ts">
import { VIconOffline } from '@gouvminint/vue-dsfr'

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
      <VIconOffline
        name="ri:flag-line"
        class="vicon"
        style="font-size: 1.2rem; vertical-align: -0.2em;"
      />  <!-- Icône iconify -->
    </p>
  </div>
</template>
