<script setup>
import { ref } from 'vue'

definePageMeta({
  layout: 'basic',
})

const currentLanguage = ref('fr')
const languages = [
  {
    codeIso: 'fr',
    label: 'Français',
  },
  {
    codeIso: 'en',
    label: 'English',
  },
  {
    codeIso: 'de',
    label: 'Deutsch',
  },
  {
    codeIso: 'nl',
    label: 'Dutch',
  },
]

function changeLanguage(languageObject) {
  currentLanguage.value = languageObject.codeIso
}
</script>

<template>
  <div>
    <Html lang="fr">
      <Head>
        <Title>Accueil - Gabarit de démarrage VueDsfr</Title>
      </Head>
    </Html>

    <h1 class="fr-mt-4w">
      Accueil
    </h1>
    <VIcon name="ri-flag-line" />
    <DsfrLanguageSelector
      :languages="languages"
      :current-language="currentLanguage"
      @select="changeLanguage($event)"
    />
  </div>
</template>
