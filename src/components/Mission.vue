<template>
  <div class="mission-div px-8">
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
    <p class="description mx-16">
      {{ $t('mission.flagSection.description') }}
    </p>
  </div>
</template>

<style scoped>
h1 {
  font-size: 40px;
}

.mission-div {
  color: #201c37;
  background-color: #ffca2e;
}

.description {
  font-size: 16px;
  font-weight: 300;
}
</style>
