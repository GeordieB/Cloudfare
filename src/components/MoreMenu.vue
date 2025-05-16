<script setup lang="ts">
const emit = defineEmits<{ changeLanguage: [] }>();
</script>

<template>
  <v-menu class="pr-0">
    <template #activator="{ props }">
      <v-btn
        variant="plain"
        color="#FFF"
        :ripple="false"
        v-bind="props"
        ><v-icon icon="menu" /> </v-btn
    ></template>
    <v-list
      nav
      bg-color="rgba(0, 0, 0, 0.65)"
    >
      <v-list-item>
        <v-list-item-title
          ><a
            class="text-white"
            href="#home"
          >
            {{ $t('app.navbarLinks.home') }}
          </a></v-list-item-title
        >
      </v-list-item>
      <v-list-item>
        <v-list-item-title
          ><a
            class="text-white"
            href="#mission-block"
          >
            {{ $t('app.navbarLinks.mission') }}
          </a></v-list-item-title
        >
      </v-list-item>
      <v-list-item>
        <v-list-item-title class="text-white"
          ><a
            class="text-white"
            href="#design-block"
          >
            {{ $t('app.navbarLinks.design') }}
          </a></v-list-item-title
        >
      </v-list-item>
      <v-list-item>
        <v-list-item-title class="text-white"
          ><a
            class="text-white"
            href="#resources-block"
          >
            {{ $t('app.navbarLinks.resources') }}
          </a></v-list-item-title
        >
      </v-list-item>
      <v-list-item>
        <v-list-item-title class="text-white"
          ><a
            class="text-white"
            href="#downloads-block"
          >
            {{ $t('app.navbarLinks.downloads') }}
          </a></v-list-item-title
        >
      </v-list-item>
      <v-list-item>
        <v-list-item-title class="text-white"
          ><a
            class="text-white"
            @click="emit('changeLanguage')"
          >
            {{ $t('homePage.changeLanguage') }}
          </a></v-list-item-title
        >
      </v-list-item>
    </v-list></v-menu
  >
  <v-btn
    variant="plain"
    color="#FFF"
    :ripple="false"
    class="pl-0"
    @click="emit('changeLanguage')"
  >
    {{ $t('homePage.changeLanguage') }}
  </v-btn>
</template>
