<script setup>
const query = ref('')

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
    path: '/apropos',
    icon: 'ri-flag-line',
  },
]

const goFetch = () => {
  console.log('Fetching with query:', query.value)
}
</script>

<template>
  <DsfrHeader
    v-model="query"
    :service-title="serviceTitle"
    :service-description="serviceDescription"
    :logo-text="logoText"
    :quick-links="quickLinks"
    show-search
    @search="goFetch()"
  />
  <div class="fr-container">
    <slot />
  </div>
</template>
