<template>
  <v-img
    height="350"
    cover
    :src="props.images[0].url"
    :alt="props.name"
    @mouseover="$emit('mouseOverImage')"
  />
</template>

<script setup lang="ts">
const props = defineProps({
  name: { type: String, required: true },
  images: { type: Array<{ url: string }>, required: true },
});
</script>
