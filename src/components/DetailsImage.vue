<template>
  <v-sheet relative>
    <v-toolbar color="transparent" absolute>
      <v-btn
        class="ma-2"
        variant="text"
        icon="mdi-arrow-left"
        size="large"
        @click="$router.go(-1)"
      />
      <v-spacer></v-spacer>
      <v-badge :content="0" color="green-darken-2" class="ma-2 mr-9">
        <v-icon icon="mdi-briefcase-outline" size="large" />
      </v-badge>
    </v-toolbar>
    <v-carousel hide-delimiters>
      <v-carousel-item
        v-for="(img, i) in images"
        :key="i"
        :src="img.url"
        cover
      ></v-carousel-item>
    </v-carousel>
  </v-sheet>
</template>

<script setup lang="ts">
defineProps({
  images: { type: Array<{ url: string }>, required: true },
});
</script>

<style>
.v-toolbar.v-toolbar--absolute.bg-transparent {
  z-index: 999;
  width: 100%;
}
</style>
