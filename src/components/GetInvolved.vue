<script setup lang="ts">
import AnimatedComponent from './AnimatedComponent.vue';
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
  <v-btn
    href="https://ko-fi.com/fatflag"
    target="_blank"
    :text="$t('getInvolved.Donate')"
    class="ko-fi-button"
    rounded
    color="#ffca2e"
    slim
    position="fixed"
    tile
  >
    <template #prepend
      ><div class="d-flex align-center">
        <img
          src="https://ko-fi.com/img/cuplogo.svg"
          alt="ko-fi"
          width="24"
        /></div
    ></template>
  </v-btn>
</template>

<style scoped>
.ko-fi-button {
  top: 90%;
  right: 20px;
  z-index: 1000;
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
