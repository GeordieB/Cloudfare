<script setup lang="ts">
import AnimatedComponent from './AnimatedComponent.vue';
import { useDisplayPort } from '../composables/useDisplayPort.ts';
const { mdAndUp } = useDisplayPort();
</script>

<template>
  <animated-component>
    <div class="mission-div px-8">
      <v-row no-gutters
        ><v-col
          cols="2"
          class="d-flex align-center"
          :class="mdAndUp ? 'justify-end' : ''"
        >
          <img
            src="../assets/fist_logo.png"
            alt="fist-logo"
            :class="
              mdAndUp ? 'fist-logo-desktop' : 'fist-logo-mobile'
            " /></v-col
        ><v-col>
          <h1 class="pt-8 ml-16 font-weight-regular">
            {{ $t('mission.whatSection.title') }}
          </h1>
          <v-spacer class="py-2" />
          <p class="description mx-16">
            {{ $t('mission.whatSection.description') }}
          </p>
          <h1 class="pt-8 ml-16 font-weight-regular">
            {{ $t('mission.flagSection.title') }}
          </h1>
          <v-spacer class="py-2" />
          <p class="description mx-16 pb-4">
            {{ $t('mission.flagSection.firstParagraph') }}
          </p>
          <p class="description mx-16 pb-8">
            {{ $t('mission.flagSection.secondParagraphBeforeLink') }}
            <a
              href="https://www.instagram.com/sterling_azure/"
              target="_blank"
              >{{ $t('mission.flagSection.linkText') }}</a
            >{{ $t('mission.flagSection.secondParagraphAfterLink') }}
          </p></v-col
        ></v-row
      >
    </div></animated-component
  >
</template>

<style scoped>
h1 {
  font-size: 40px;
  transform: skewX(-10deg);
}

.mission-div {
  color: #201c37;
  background-color: #ffca2e;
}

.description {
  font-size: 16px;
  font-weight: 300;
}

a {
  color: #0550cf;
}

.fist-logo-desktop {
  height: auto;
  width: 90%;
}

.fist-logo-mobile {
  height: auto;
  width: 170%;
}
</style>
