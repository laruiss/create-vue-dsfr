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

<script>
import ReloadPrompt from '@/components/ReloadPrompt.vue'

export default {
  name: 'App',

  components: {
    ReloadPrompt,
  },

  data () {
    return {
      serviceTitle: 'Service',
      serviceDescription: 'Description du service',
      logoText: ['Ministère', 'de l’intérieur'],
      quickLinks: [
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
      ],
      searchQuery: '',
    }
  },
}
</script>
