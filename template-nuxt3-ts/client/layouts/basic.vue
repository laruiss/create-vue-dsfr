<script setup lang="ts">
const serviceTitle = 'Service'
const serviceDescription = 'Description du service'
const logoText = ['Ministère', 'de l’intérieur']

const quickLinks = [
  {
    label: 'Home',
    to: '/',
    icon: 'ri-home-2-line',
  },
  {
    label: 'À propos',
    to: '/apropos',
    icon: 'ri-flag-line',
  },
]

</script>

<template>
  <DsfrHeader
    v-model="query"
    :service-title="serviceTitle"
    :service-description="serviceDescription"
    :logo-text="logoText"
    :quick-links="quickLinks"
  />
  <div class="fr-container">
    <slot />
  </div>
</template>
