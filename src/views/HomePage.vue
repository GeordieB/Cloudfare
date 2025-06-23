<script setup lang="ts">
import Flag from '../components/Flag.vue';
import Mission from '../components/Mission.vue';
import Design from '../components/Design.vue';
import { useDisplay } from 'vuetify/framework';
import { onBeforeUnmount, onMounted, ref } from 'vue';
import Learning from '../components/Learning.vue';
import AnimatedComponent from '../components/AnimatedComponent.vue';

const display = useDisplay();
const useFullSpace = ref(false);
onMounted(async () => {
  window.addEventListener('resize', () => handleResize());
  handleResize();
});

onBeforeUnmount(async () => {
  window.removeEventListener('resize', () => handleResize());
});

function handleResize() {
  useFullSpace.value = !display.smAndDown.value;
}
</script>

<template>
  <v-spacer
    id="home"
    style="padding-bottom: 100px"
  />
  <flag />
  <v-spacer id="mission-block" />
  <mission />
  <v-spacer />
  <animated-component>
    <v-row
      id="design-block"
      no-gutters
      class="center"
    >
      <v-col class="d-flex justify-center">
        <span
          class="title text-pre-wrap align-center"
          :style="{ 'font-size': useFullSpace ? '60px' : '40px' }"
        >
          {{ $t('design.title') }}
        </span></v-col
      ></v-row
    ></animated-component
  >
  <design />
  <v-spacer /><animated-component>
    <v-row
      id="learning-block"
      no-gutters
      class="center"
    >
      <v-col class="d-flex justify-center">
        <span
          class="title text-pre-wrap align-center"
          :style="{ 'font-size': useFullSpace ? '60px' : '40px' }"
        >
          {{ $t('learning.title') }}
        </span></v-col
      ></v-row
    ></animated-component
  >
  <learning />
  <v-spacer />
</template>

<!--suppress CssUnusedSymbol -->
<style scoped>
.v-spacer {
  padding-bottom: 200px;
}

.title {
  color: white;
  font-weight: 700;
  font-style: normal; /* Ensure no default italic is applied */
  transform: skewX(-10deg); /* Adjust the skew angle as needed */
  display: inline-flex;
  text-shadow: 5px 5px #0550cf;
  height: 200px;
}
</style>
