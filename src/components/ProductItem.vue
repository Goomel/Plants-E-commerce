<template>
  <v-card
    :to="'/product/' + id"
    class="mb-8 mx-2 pb-5 flex-grow-1 flex-gap"
    :width="cardWidth"
    color="blue-grey-lighten-5"
  >
    <template v-slot:title>
      {{ plantName }}
    </template>
    <v-img :src="images[0].url" cover height="350" class="ma-3"></v-img>
  </v-card>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useDisplay } from "vuetify";
const { name } = useDisplay();

const cardWidth = computed(() => {
  switch (name.value) {
    case "xs":
      return "100%";
    case "sm":
      return "100%";
    case "md":
      return "45%";
    case "lg":
      return "30%";
    case "xl":
      return "30%";
    case "xxl":
      return "25%";
  }
  return undefined;
});

defineProps({
  plantName: { type: String, required: true },
  images: { type: Array<{ url: string }>, required: true },
  id: { type: String, required: true },
});
</script>
