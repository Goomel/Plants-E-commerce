<template>
  <v-card class="w-100 mb-8" color="blue-grey-lighten-5" height="450">
    <template v-slot:title>
      {{ props.name }}
    </template>

    <Transition name="fade" class="ma-2">
      <component
        :is="activeComponent"
        :images="props.images"
        :name="props.name"
        @mouse-over-image="changeProductImage(SecondProductImg)"
        @mouse-leave-image="changeProductImage(FirstProductImg)"
      />
    </Transition>
  </v-card>
</template>

<script setup lang="ts">
import { shallowRef } from "vue";
import FirstProductImg from "./FirstProductImg.vue";
import SecondProductImg from "./SecondProductImg.vue";

const activeComponent = shallowRef(FirstProductImg);

const props = defineProps({
  name: { type: String, required: true },
  images: { type: Array<{ url: string }>, required: true },
});

const changeProductImage = (imageComponent: any) => {
  activeComponent.value = imageComponent;
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
