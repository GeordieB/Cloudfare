<script setup lang="ts">
import AnimatedComponent from './AnimatedComponent.vue';
</script>

<template>
  <animated-component
    ><div class="learning-div px-8 pt-8">
      <p class="description mx-16"></p></div
  ></animated-component>
</template>

<style scoped>
h1 {
  font-size: 40px;
  transform: skewX(-10deg);
}

.learning-div {
  color: #201c37;
  background-color: #0550cf;
}

.description {
  font-size: 16px;
  font-weight: 300;
}

/*.description-yellow {
  font-weight: 500;
  color: #ffca2e;
}

.description-white {
  font-weight: 500;
  color: #ffffff;
}

.description-coral {
  font-weight: 500;
  color: #ef734f;
  background-color: #fcbaa7;
}

.description-blue {
  font-weight: 500;
  color: #0550cf;
}

.description-brown {
  font-weight: 500;
  color: #4f372d;
}*/

a {
  color: #0550cf;
}
</style>
