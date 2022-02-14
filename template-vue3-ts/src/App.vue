<script setup>
import { ref } from 'vue'

import ReloadPrompt from '@/components/ReloadPrompt.vue'

const serviceTitle = 'Service'
const serviceDescription = 'Description du service'
const logoText = ['Ministère', 'de l’intérieur']

const quickLinks = [
  {
    label: 'Home',
    path: '/',
    icon: 'ri-home-2-line',
  },
  {
    label: 'À propos',
    path: '/a-propos',
    icon: 'ri-flag-line',
  },
]
const searchQuery = ref('')
</script>

<template>
  <DsfrHeader
    v-model="searchQuery"
    :service-title="serviceTitle"
    :service-description="serviceDescription"
    :logo-text="logoText"
    :quick-links="quickLinks"
    show-search
  />
  <div class="fr-container">
    <router-view />
  </div>
  <ReloadPrompt />
</template>
