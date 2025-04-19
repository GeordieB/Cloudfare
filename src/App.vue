<script setup lang="ts">
import i18n from "./plugins/i18n.ts";
import { ref } from "vue";

const currentLanguage = ref("en");

function changeLanguage() {
  if (currentLanguage.value === "en") {
    i18n.global.locale = "fr";
    currentLanguage.value = "fr";
  } else {
    i18n.global.locale = "en";
    currentLanguage.value = "en";
  }
}
</script>

<template>
  <div class="navbar">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/mission">Mission</router-link>
    </nav>
  </div>
  <div class="navbar">
    <button @click="changeLanguage">
      {{ $t("homePage.changeLanguage") }}
    </button>
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
  justify-content: end;
}
</style>
