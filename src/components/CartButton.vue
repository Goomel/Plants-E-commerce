<template>
  <v-btn icon class="mr-2" @click="openCart">
    <v-badge :content="amountOfCartItems" color="green-darken-2">
      <v-icon icon="mdi-briefcase-outline" size="large"></v-icon>
    </v-badge>
  </v-btn>
</template>
<script setup lang="ts">
import { useCartStore } from "@/store/cart";
import { storeToRefs } from "pinia";
const { openCart } = useCartStore();
const { amountOfCartItems } = storeToRefs(useCartStore());
</script>
