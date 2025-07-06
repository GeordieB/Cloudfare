<script setup lang="ts">
import AnimatedComponent from './AnimatedComponent.vue';
import { useDisplayPort } from '../composables/useDisplayPort.ts';

const { mdAndUp } = useDisplayPort();
</script>

<template>
  <animated-component
    ><div class="downloads-div px-8 pt-8 text-white">
      <v-row no-gutters
        ><v-col cols="4"
          ><a
            download
            href="../../public/fat-flag.jpg"
            ><img
              :class="mdAndUp ? 'desktop-img' : 'mobile-img'"
              src="../../public/flag_download_button.png"
              title="fat-flag.jpg" /></a></v-col
        ><v-col
          cols="4"
          class="d-flex justify-center"
          ><a
            download
            href="../../public/fat-flag-vector.svg"
            ><img
              :class="mdAndUp ? 'desktop-img' : 'mobile-img'"
              src="../../public/flag_download_button.png"
              title="fat-flag-vector.svg" /></a></v-col
        ><v-col
          cols="4"
          class="d-flex justify-center"
          ><a
            download
            href="../../public/fat-flag-graphic-standards.pdf"
            ><img
              :class="mdAndUp ? 'desktop-img' : 'mobile-img'"
              src="../assets/standards_download_button.png"
              title="fat-flag-graphic-standards.pdf" /></a></v-col
      ></v-row>
      <v-row no-gutters
        ><v-col cols="4"
          ><span class="d-flex justify-center">{{
            $t('downloads.jpgDownload')
          }}</span></v-col
        ><v-col cols="4"
          ><span class="d-flex justify-center">{{
            $t('downloads.svgDownload')
          }}</span></v-col
        ><v-col cols="4"
          ><span class="d-flex justify-center text-no-wrap">{{
            $t('downloads.pdfDownload')
          }}</span></v-col
        ></v-row
      >
      <v-spacer class="py-2" /></div
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

.downloads-div {
  color: #201c37;
  background-color: #201c37;
}

.desktop-img {
  height: auto;
  width: 25%;
  display: flex;
  justify-self: center;
}

.mobile-img {
  height: auto;
  width: 100%;
  display: flex;
  justify-self: center;
}
</style>
