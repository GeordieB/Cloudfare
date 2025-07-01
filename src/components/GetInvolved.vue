<script setup lang="ts">
import AnimatedComponent from './AnimatedComponent.vue';
import { ref } from 'vue';

const showDonateButton = ref(true);

function closeDonateButton() {
  showDonateButton.value = false;
}
</script>

<template>
  <animated-component
    ><div class="get-involved-div px-8 pt-8 text-white">
      <v-row no-gutters>
        <v-col
          lg="4"
          cols="12"
          offset-lg="2"
        >
          <p class="description mx-16">
            {{ $t('getInvolved.firstParagraph') }}
          </p>
          <br />
          <div class="mx-16 ml-16 pl-16 pb-8">
            <ul>
              <li>
                <p class="description mr-16">
                  {{ $t('getInvolved.firstBulletPoint') }}
                </p>
              </li>
              <li>
                <p class="description mr-16">
                  {{ $t('getInvolved.secondBulletPoint') }}
                </p>
              </li>
              <li>
                <p class="description mr-16">
                  {{ $t('getInvolved.thirdBulletPoint') }}
                </p>
              </li>
              <li>
                <p class="description mr-16">
                  {{ $t('getInvolved.fourthBulletPoint') }}
                </p>
              </li>
              <li>
                <p class="description mr-16">
                  {{ $t('getInvolved.fifthBulletPoint') }}
                </p>
              </li>
              <li>
                <p class="description mr-16">
                  {{ $t('getInvolved.sixthBulletPoint') }}
                </p>
              </li>
            </ul>
          </div>
        </v-col>
        <v-col
          lg="6"
          cols="12"
        >
          <v-row no-gutters
            ><v-col
              lg="6"
              cols="12"
            >
              <p class="description mx-16">
                {{ $t('getInvolved.secondParagraph') }}
              </p>
              <br />
              <p class="description mx-16 mb-16">
                {{ $t('getInvolved.thirdParagraph') }}
                <a href="#learning-block">{{
                  $t('getInvolved.thirdParagraphLink')
                }}</a
                >{{ $t('getInvolved.thirdParagraphAfterLink') }}
              </p></v-col
            ><animated-component
              ><v-col
                lg="6"
                cols="8"
                offset-lg="0"
                offset="4"
              >
                <iframe
                  id="kofiframe"
                  src="https://ko-fi.com/fatflag/?hidefeed=true&widget=true&embed=true&preview=true"
                  style="border: none; border-radius: 25px"
                  height="560"
                  title="fatflag"
                ></iframe></v-col></animated-component></v-row></v-col
      ></v-row>
      <v-spacer class="py-2" /></div
  ></animated-component>

  <v-icon
    v-if="showDonateButton"
    icon="close"
    class="mr-2 ko-fi-button-close"
    color="#ffca2e"
    size="18"
    @click="closeDonateButton"
  />
  <v-btn
    v-if="showDonateButton"
    href="https://ko-fi.com/fatflag"
    target="_blank"
    :text="$t('getInvolved.Donate')"
    class="ko-fi-button"
    rounded
    color="#ffca2e"
    slim
    position="fixed"
    tile
  >
    <template #prepend
      ><div class="d-flex align-center">
        <img
          src="https://ko-fi.com/img/cuplogo.svg"
          alt="ko-fi"
          width="24"
        /></div
    ></template>
  </v-btn>
</template>

<style scoped>
.ko-fi-button {
  top: 90%;
  right: 25px;
  z-index: 1000;
  color: black !important;
}
.ko-fi-button-close {
  top: 90%;
  right: 0;
  z-index: 1000;
  position: fixed;
}

a {
  color: #ffca2e !important;
}

h1 {
  font-size: 40px;
  transform: skewX(-10deg);
}

.get-involved-div {
  background-color: #4f372d;
  justify-items: center;
}

.description {
  font-size: 16px;
  font-weight: 300;
}
</style>
