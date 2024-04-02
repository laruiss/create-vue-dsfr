<script setup lang="ts">
const serviceTitle = 'Service'
const serviceDescription = 'Description du service'
const logoText = ['Ministère', 'de l’Intérieur', 'et des Outre-Mer']

const quickLinks = [
  {
    label: 'Accueil',
    to: '/',
    icon: 'ri-home-2-line',
  },
  {
    label: 'À propos',
    to: '/apropos',
    icon: 'ri-flag-line',
  },
]

const skipLinks = [
  {
    id: 'content',
    text: 'Accéder au contenu',
  },
  {
    id: 'footer',
    text: 'Accéder au pied de page',
  },
]
</script>

<template>
  <DsfrSkipLinks :links="skipLinks" />
  <DsfrHeader
    :service-title="serviceTitle"
    :service-description="serviceDescription"
    :logo-text="logoText"
    :quick-links="quickLinks"
  />
  <main
    id="content"
    role="main"
    class="fr-container"
    tabindex="0"
  >
    <slot />
  </main>
  <DsfrFooter
    id="footer"
    tabindex="0"
  />
</template>
