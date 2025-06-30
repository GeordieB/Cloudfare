<script setup lang="ts">
import AnimatedComponent from './AnimatedComponent.vue';
import KoFiButton from '@linusborg/vue-ko-fi-button';
</script>

<template>
  <animated-component
    ><div class="get-involved-div px-8 pt-8">
      <iframe
        id="kofiframe"
        src="https://ko-fi.com/fatflag/?hidefeed=true&widget=true&embed=true&preview=true"
        style="border: none; border-radius: 25px"
        height="560"
        title="fatflag"
      ></iframe>
      <v-spacer class="py-2" /></div
  ></animated-component>
  <ko-fi-button
    class="sticky-ko-fi-button"
    username="fatflag"
    color="#ffca2e"
    title="Donate"
  />
</template>

<style scoped>
.sticky-ko-fi-button {
  position: fixed;
  top: 90%;
  right: 0;
  z-index: 1000;
  border-radius: 5px;
}

:deep(a.kofi-button) {
  border-radius: 25px;
  min-width: 100px;
  color: black !important;
}

:deep(span.kofitext) {
  color: black !important;
}

a {
  color: #ffca2e !important;
}

h1 {
  font-size: 40px;
  transform: skewX(-10deg);
}

.get-involved-div {
  color: #201c37;
  background-color: #4f372d;
  justify-items: center;
}

.description {
  font-size: 16px;
  font-weight: 300;
}
</style>
