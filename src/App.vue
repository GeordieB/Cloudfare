<script setup lang="ts">
import i18n from './plugins/i18n.ts';
import { ref } from 'vue';

const currentLanguage = ref('en');

function changeLanguage() {
  if (currentLanguage.value === 'en') {
    i18n.global.locale = 'fr';
    currentLanguage.value = 'fr';
  } else {
    i18n.global.locale = 'en';
    currentLanguage.value = 'en';
  }
}
</script>

<template>
  <div class="navbar">
    <img
      class="navbar-stripes justify-start"
      src="./assets/navbar-stripes.png"
      alt="stripes logo"
    />
    <nav class="justify-end">
      <a
        class="white-text pr-2"
        href="#home"
      >
        <v-icon
          size="18"
          icon="star"
        />
      </a>
      <span class="white-text pr-2">|</span>
      <a
        class="white-text pr-2"
        href="#mission-block"
      >
        {{ $t('app.navbarLinks.mission') }}
      </a>
      <span class="white-text pr-2">|</span>
      <a
        class="white-text pr-2"
        href="#design-block"
      >
        {{ $t('app.navbarLinks.design') }}
      </a>
      <span class="white-text pr-2">|</span>
      <a
        class="white-text pr-2"
        href="#resources-block"
      >
        {{ $t('app.navbarLinks.resources') }}
      </a>
      <span class="white-text pr-2">|</span>
      <a
        class="white-text pr-2"
        href="#downloads-block"
      >
        {{ $t('app.navbarLinks.downloads') }}
      </a>
      <v-btn
        variant="plain"
        color="#FFF"
        :ripple="false"
        @click="changeLanguage"
      >
        {{ $t('homePage.changeLanguage') }}
      </v-btn>
    </nav>
  </div>
  <router-view />
</template>

<style>
#app {
  display: block;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.65);
  overflow: hidden;
  position: sticky;
  top: 0;
}

.white-text {
  color: white;
}

.navbar-stripes {
  height: 36px;
  opacity: 0.65;
}
</style>
