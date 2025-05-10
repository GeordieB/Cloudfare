<script setup lang="ts">
import HelloWorld from '../components/HelloWorld.vue';
import Mission from '../components/Mission.vue';
</script>

<template>
  <v-spacer style="padding-bottom: 100px" />
  <hello-world id="home" />
  <v-spacer />
  <mission id="mission-block" />
</template>

<style scoped>
.v-spacer {
  padding-bottom: 200px;
}
</style>
