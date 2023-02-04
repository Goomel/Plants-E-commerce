<template>
  <v-img
    height="350"
    cover
    :src="props.images[1].url"
    :alt="props.name"
    @mouseleave="$emit('mouseLeaveImage')"
  />
</template>

<script setup lang="ts">
const props = defineProps({
  name: { type: String, required: true },
  images: { type: Array<{ url: string }>, required: true },
});
</script>
