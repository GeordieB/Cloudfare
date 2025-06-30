<script setup lang="ts">
import AnimatedComponent from './AnimatedComponent.vue';
</script>

<template>
  <animated-component
    ><div class="get-involved-div px-8 pt-8">
      <iframe
        id="kofiframe"
        src="https://ko-fi.com/fatflag/?hidefeed=true&widget=true&embed=true&preview=true"
        style="
          border: none;
          padding: 0px;
          background: #f9f9f9;
          border-radius: 25px;
        "
        height="560"
        title="fatflag"
      ></iframe>
      <v-spacer class="py-2" /></div
  ></animated-component>
</template>

<style scoped>
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
