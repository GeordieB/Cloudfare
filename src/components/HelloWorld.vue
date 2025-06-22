<script setup lang="ts">
import { useDisplay } from 'vuetify/framework';
import { onBeforeUnmount, onMounted, ref } from 'vue';
import i18n from '../plugins/i18n.ts';
import AnimatedComponent from './AnimatedComponent.vue';
import Mission from './Mission.vue';

const display = useDisplay();
const useFullImg = ref(false);
onMounted(async () => {
  window.addEventListener('resize', () => handleResize());
  handleResize();
});

onBeforeUnmount(async () => {
  window.removeEventListener('resize', () => handleResize());
});
function handleResize() {
  useFullImg.value = !display.smAndDown.value;
}

function getText() {
  if (i18n.global.locale === 'en') {
    return 'homePage.takeUpSpace';
  }
  return useFullImg.value
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
        :style="{ 'font-size': useFullImg ? '40px' : '30px' }"
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
          class="take-up-space-block text-pre-wrap"
          :style="{ 'font-size': useFullImg ? '60px' : '40px' }"
        >
          {{ $t(getText()) }}
        </span></v-col
      ></v-row
    ></animated-component
  ><animated-component>
    <v-row
      v-if="i18n.global.locale === 'fr' && !useFullImg"
      no-gutters
      class="center"
    >
      <v-col class="d-flex justify-center"
        ><span
          class="take-up-space-block text-pre-wrap"
          :style="{ 'font-size': useFullImg ? '60px' : '40px' }"
        >
          {{ $t('homePage.takeUpSpacePart2') }}
        </span></v-col
      ></v-row
    ></animated-component
  >
  <animated-component>
    <div class="card">
      <a
        class="center"
        target="_blank"
      >
        <img
          class="flag"
          :width="useFullImg ? '50%' : '80%'"
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
  font-weight: 400;
  font-style: normal; /* Ensure no default italic is applied */
  transform: skewX(-10deg); /* Adjust the skew angle as needed */
  display: inline-flex;
  text-shadow: 5px 5px 5px #0550cf;
}
</style>
