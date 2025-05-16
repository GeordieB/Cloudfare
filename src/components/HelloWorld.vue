<script setup lang="ts">
import { useDisplay } from 'vuetify/framework';
import { onBeforeUnmount, onMounted, ref } from 'vue';

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
</script>

<template>
  <v-row
    id="home"
    no-gutters
    class="center"
  >
    <p class="dare-block">{{ $t('homePage.dare') }}</p></v-row
  >
  <v-row
    no-gutters
    class="center"
  >
    <v-col
      sm="6"
      lg="12"
    >
      <p class="take-up-space-block">
        {{ $t('homePage.takeUpSpace') }}
      </p></v-col
    ></v-row
  >

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
    </a>
  </div>
</template>

<style scoped>
.flag {
  height: auto;
}

.dare-block {
  color: white;
  font-size: 40px;
  font-weight: 300;
  transform: skewX(-10deg);
}

.take-up-space-block {
  color: white;
  font-size: 60px;
  font-weight: 400;
  transform: skewX(-10deg);
  text-shadow: 5px 5px 5px #0550cf;
  text-align: center;
}
</style>
