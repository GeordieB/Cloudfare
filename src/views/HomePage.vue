<script setup lang="ts">
import HelloWorld from '../components/HelloWorld.vue';
import Mission from '../components/Mission.vue';
import Design from '../components/Design.vue';
import { useDisplay } from 'vuetify/framework';
import { onBeforeUnmount, onMounted, ref } from 'vue';

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
  <hello-world />
  <v-spacer />
  <mission id="mission-block" />
  <v-spacer />
  <v-row
    no-gutters
    class="center"
  >
    <v-col class="d-flex justify-center">
      <span
        class="design-block text-pre-wrap align-center"
        :style="{ 'font-size': useFullSpace ? '60px' : '40px' }"
      >
        {{ $t('design.title') }}
      </span></v-col
    ></v-row
  >
  <design id="design-block" />
  <v-spacer />
</template>

<style scoped>
.v-spacer {
  padding-bottom: 200px;
}

.design-block {
  color: white;
  font-weight: 400;
  font-style: normal; /* Ensure no default italic is applied */
  transform: skewX(-10deg); /* Adjust the skew angle as needed */
  display: inline-flex;
  text-shadow: 5px 5px 5px #0550cf;
  height: 200px;
}
</style>
