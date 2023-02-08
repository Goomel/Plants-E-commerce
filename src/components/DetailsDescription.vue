<template>
  <v-card>
    <v-card-item>
      <v-card-title class="font-weight-bold text-h5 my-3">{{
        product.name
      }}</v-card-title>
      <v-card-subtitle class="text-h6 mb-2"
        >{{ product.price }}$</v-card-subtitle
      >
    </v-card-item>
    <v-card-text> {{ product.description }}</v-card-text>
    <v-card-actions class="d-flex flex-column align-start">
      <v-btn-group border class="mb-5">
        <v-btn @click="changeQuantity(-1)">
          <v-icon>mdi-minus</v-icon>
        </v-btn>
        <div class="d-flex align-center mx-2">
          {{ quantity }}
        </div>
        <v-btn @click="changeQuantity(1)" class="ml-0">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-btn-group>
      <v-btn
        block
        prepend-icon="mdi-briefcase-outline"
        variant="flat"
        color="black"
        size="large"
        class="py-4"
        >Add to cart</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from "vue";
defineProps({
  product: { type: Object, required: true },
});

const quantity = ref(0);
const changeQuantity = (value: number) => {
  if (quantity.value === 0 && value < 0) {
    return;
  }
  quantity.value += value;
};
</script>
