<template>
  <Cart v-if="isCartActive" />
  <TopMenu />
  <Products />
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useCartStore } from "@/store/cart";
import TopMenu from "@/components/TopMenu.vue";
import Products from "@/components/Products.vue";
import Cart from "@/components/Cart.vue";

const { isCartActive } = storeToRefs(useCartStore());
</script>
