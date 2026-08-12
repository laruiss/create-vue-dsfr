<script setup lang="ts">
import { DsfrFooter, DsfrHeader, DsfrSkipLinks } from "@gouvminint/vue-dsfr"

const serviceTitle = 'Service'
const serviceDescription = 'Description du service'
const logoText = ['Ministère', 'de l’Intérieur', 'et des Outre-Mer']

const quickLinks = [
  {
    label: 'Accueil',
    to: '/',
    icon: {
      name: 'ri-home-2-line',
      ssr: true,
    },
  },
  {
    label: 'À propos',
    to: '/a-propos',
    icon: {
      name: 'ri-flag-line',
      ssr: true,
    },
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
  <div>
    <DsfrSkipLinks :links="skipLinks"/>
    <DsfrHeader
        :service-title="serviceTitle"
        :service-description="serviceDescription"
        :logo-text="logoText"
        :quick-links="quickLinks"
    />
    <main id="content" role="main" class="fr-container" tabindex="0">
      <slot/>
    </main>
    <DsfrFooter id="footer" tabindex="0"/>
  </div>
</template>
