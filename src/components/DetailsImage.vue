<template>
  <v-sheet :width="xlAndUp ? '60%' : '100%'">
    <v-toolbar color="transparent" absolute>
      <v-btn
        class="ma-2"
        variant="text"
        icon="mdi-arrow-left"
        size="large"
        @click="$router.go(-1)"
      />
      <v-spacer></v-spacer>
      <CartButton />
    </v-toolbar>
    <v-carousel v-if="!lgAndUp" hide-delimiters>
      <v-carousel-item
        v-for="(img, i) in images"
        :key="i"
        :src="img.url"
        cover
      ></v-carousel-item>
    </v-carousel>
    <v-row v-else class="ma-0 h-100">
      <v-col v-for="(img, i) in images" :key="i" class="pa-0">
        <v-img :src="img.url" :min-height="'100%'" cover />
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script setup lang="ts">
import CartButton from "./CartButton.vue";
import { useDisplay } from "vuetify";
const { xlAndUp, lgAndUp } = useDisplay();

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
