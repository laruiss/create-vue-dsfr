<template>
  <h1>Accueil</h1>

  <p>
    <span class="fr-icon-ancient-gate-fill"></span> <!-- Exemple icône DSFR -->
  </p>

  <p>
    <VIcon name="ri-flag-line" />  <!-- Exemple icône oh-vue-icon -->
  </p>

  <DsfrButton
    :icon="{ name: 'ri-close-line', color: 'green', animation: 'flash' }"
    secondary
  >
    Texte avec icône
    <code>@iconify/vue</code>
    <span style="color: green"> verte </span>
    avec animation 'flash'
  </DsfrButton>
</template>
