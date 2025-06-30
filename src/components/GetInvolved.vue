<script setup lang="ts">
import AnimatedComponent from './AnimatedComponent.vue';
</script>

<template>
  <animated-component
    ><div class="get-involved-div px-8">
      <h1 class="pt-8 ml-16 font-weight-regular text-white">
        {{ $t('getInvolved.header') }}
      </h1>
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
}

.description {
  font-size: 16px;
  font-weight: 300;
}
</style>
