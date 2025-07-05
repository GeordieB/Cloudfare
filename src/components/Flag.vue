<script setup lang="ts">
import i18n from '../plugins/i18n.ts';
import AnimatedComponent from './AnimatedComponent.vue';
import { useDisplayPort } from '../composables/useDisplayPort.ts';

const { mdAndUp } = useDisplayPort();

function getText() {
  if (i18n.global.locale === 'en') {
    return 'homePage.takeUpSpace';
  }
  return mdAndUp.value
    ? 'homePage.takeUpSpaceFull'
    : 'homePage.takeUpSpacePart1';
}
</script>

<template>
  <animated-component>
    <v-row
      no-gutters
      class="center"
    >
      <p
        class="dare-block"
        :style="{ 'font-size': mdAndUp ? '40px' : '30px' }"
      >
        {{ $t('homePage.dare') }}
      </p></v-row
    ></animated-component
  ><animated-component>
    <v-row
      no-gutters
      class="center"
    >
      <v-col class="d-flex justify-center">
        <span
          class="take-up-space-block text-pre-wrap mb-0"
          :style="{ 'font-size': mdAndUp ? '100px' : '45px' }"
        >
          {{ $t(getText()) }}
        </span></v-col
      ></v-row
    ></animated-component
  ><animated-component>
    <v-row
      v-if="i18n.global.locale === 'fr' && !mdAndUp"
      no-gutters
      class="center"
    >
      <v-col class="d-flex justify-center"
        ><span
          class="take-up-space-block text-pre-wrap"
          :style="{ 'font-size': mdAndUp ? '100px' : '45px' }"
        >
          {{ $t('homePage.takeUpSpacePart2') }}
        </span></v-col
      ></v-row
    ></animated-component
  >
  <animated-component>
    <div class="card pt-0">
      <a
        class="center"
        target="_blank"
      >
        <img
          class="flag"
          :width="mdAndUp ? '50%' : '80%'"
          src="../assets/flag.png"
          alt="Fat Flag"
        />
      </a></div
  ></animated-component>
</template>

<style scoped>
.flag {
  height: auto;
}

.dare-block {
  color: white;
  font-weight: 300;
  transform: skewX(-10deg);
}

.take-up-space-block {
  color: white;
  font-weight: 700;
  font-style: normal; /* Ensure no default italic is applied */
  transform: skewX(-10deg); /* Adjust the skew angle as needed */
  display: inline-flex;
  text-shadow: 5px 5px #0550cf;
}
</style>
