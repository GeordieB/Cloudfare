<script setup lang="ts">
import AnimatedComponent from './AnimatedComponent.vue';
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
  <animated-component
    ><div class="learning-div px-8">
      <h1
        class="pt-8 ml-16 font-weight-regular text-white d-flex justify-center"
      >
        {{ $t('learning.header') }}
      </h1>
      <v-spacer class="py-2" />
      <v-row no-gutters
        ><v-col
          lg="4"
          cols="9"
          offset-lg="3"
        >
          <p class="description mx-16 text-white pb-8 pl-3">
            {{ $t('learning.firstParagraph') }}
            <a
              href="https://ccdi.ca/"
              target="_blank"
              >{{ $t('learning.firstParagraphLinkText') }}</a
            >
            {{ $t('learning.firstParagraphAfterLink') }}
          </p> </v-col
        ><v-col
          lg="4"
          cols="3"
        >
          <a
            target="_blank"
            href="https://ccdi.ca/media/4112/educational-resources-on-unlearning-fatphobia-en.pdf"
          >
            <img
              class="resource-img"
              :width="useFullSpace ? '25%' : '100%'"
              src="../assets/resources.png"
              alt="Resources"
            /> </a></v-col
      ></v-row>
      <v-row no-gutters
        ><v-col
          cols="12"
          lg="4"
          offset-lg="3"
        >
          <p class="description mx-16 text-white pb-8 pl-3">
            {{ $t('learning.secondParagraph') }}
          </p></v-col
        ></v-row
      >
      <v-row no-gutters
        ><v-col cols="4">
          <a
            class="d-flex justify-end"
            target="_blank"
            href="https://naafa.org/"
          >
            <img
              class="naafa-img"
              src="../assets/NAAFA_logo.png"
              alt="NAAFA Logo"
            /> </a></v-col
        ><v-col cols="4">
          <a
            class="d-flex justify-center"
            target="_blank"
            href="https://equilibre.ca/"
          >
            <img
              class="equilibre-img"
              src="../assets/equilibre_logo.png"
              alt="Equilibre Logo"
            /> </a></v-col
        ><v-col cols="4">
          <a
            class="d-flex justify-start"
            target="_blank"
            href="https://grossophobie.ca/"
          >
            <img
              class="grossophobie-img"
              src="../assets/grossophobie_logo.png"
              alt="Grossophobie Logo"
            /> </a></v-col
      ></v-row></div
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

.learning-div {
  color: #201c37;
  background-color: #0550cf;
}

.description {
  font-size: 16px;
  font-weight: 300;
}

.resource-img {
  height: auto;
}

.naafa-img {
  padding-top: 10px;
  height: auto;
  width: 55%;
}

.equilibre-img {
  height: auto;
  width: 60%;
}

.grossophobie-img {
  padding-top: 12px;
  height: auto;
  width: 70%;
}
</style>
