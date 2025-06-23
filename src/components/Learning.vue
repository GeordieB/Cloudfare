<script setup lang="ts">
import AnimatedComponent from './AnimatedComponent.vue';
</script>

<template>
  <animated-component
    ><div class="learning-div px-8">
      <h1 class="pt-8 ml-16 font-weight-regular text-white">
        {{ $t('learning.header') }}
      </h1>
      <v-spacer class="py-2" />
      <v-row no-gutters
        ><v-col cols="6">
          <p class="description mx-16 text-white pb-8">
            {{ $t('learning.firstParagraph') }}
            <a
              href="https://ccdi.ca/"
              target="_blank"
              >{{ $t('learning.firstParagraphLinkText') }}</a
            >
            {{ $t('learning.firstParagraphAfterLink') }}
          </p> </v-col
        ><v-col cols="6">
          <a
            target="_blank"
            href="https://ccdi.ca/media/4112/educational-resources-on-unlearning-fatphobia-en.pdf"
          >
            <img
              class="resource-img"
              src="../assets/resources.png"
              alt="Resources"
            /> </a></v-col
      ></v-row>
      <v-row no-gutters
        ><v-col cols="12">
          <p class="description mx-16 text-white pb-8">
            {{ $t('learning.secondParagraph') }}
          </p></v-col
        ></v-row
      >
      <v-row no-gutters
        ><v-col cols="4">
          <a
            class="d-flex justify-center"
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
            class="d-flex justify-center"
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
  width: 25%;
}

.naafa-img {
  height: auto;
  width: 60%;
}

.equilibre-img {
  height: auto;
  width: 60%;
}

.grossophobie-img {
  height: auto;
  width: 60%;
}
</style>
