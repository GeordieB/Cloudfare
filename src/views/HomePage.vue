<script setup lang="ts">
import HelloWorld from '../components/HelloWorld.vue';
import Mission from '../components/Mission.vue';
</script>

<template>
  <v-spacer style="padding-bottom: 100px" />
  <hello-world />
  <v-spacer />
  <mission id="mission-block" />
  <v-spacer />
</template>

<style scoped>
.v-spacer {
  padding-bottom: 200px;
}
</style>
