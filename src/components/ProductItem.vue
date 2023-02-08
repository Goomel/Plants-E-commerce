<template>
  <v-card
    :to="'/product/' + id"
    class="w-100 mb-8 pb-5"
    color="blue-grey-lighten-5"
  >
    <template v-slot:title>
      {{ name }}
    </template>
    <v-img :src="images[0].url" cover height="350" class="ma-3"></v-img>
  </v-card>
</template>

<script setup lang="ts">
defineProps({
  name: { type: String, required: true },
  images: { type: Array<{ url: string }>, required: true },
  id: { type: String, required: true },
});
</script>
