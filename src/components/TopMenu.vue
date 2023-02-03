<template>
  <div>
    <v-toolbar class="d-flex" color="transparent">
      <v-btn
        :variant="
          currentProductsToShow === ProductsToShow.All ? 'text' : 'plain'
        "
        :class="{
          'font-weight-black': currentProductsToShow === ProductsToShow.All,
        }"
        class="text-capitalize"
        @click="changeCurrentProducts(ProductsToShow.All)"
        >All</v-btn
      >
      <v-btn
        :variant="
          currentProductsToShow === ProductsToShow.Popular ? 'text' : 'plain'
        "
        :class="{
          'font-weight-black': currentProductsToShow === ProductsToShow.Popular,
        }"
        class="text-capitalize"
        @click="changeCurrentProducts(ProductsToShow.Popular)"
        >Popular</v-btn
      >
      <v-btn
        :variant="
          currentProductsToShow === ProductsToShow.New ? 'text' : 'plain'
        "
        :class="{
          'font-weight-black': currentProductsToShow === ProductsToShow.New,
        }"
        class="text-capitalize"
        @click="changeCurrentProducts(ProductsToShow.New)"
        >New</v-btn
      >
      <v-spacer></v-spacer>
      <FilteringModal />
    </v-toolbar>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";
import { ProductsToShow } from "@/types";
import FilteringModal from "./FilteringModal.vue";

const currentProductsToShow: Ref<ProductsToShow> = ref(ProductsToShow.All);
const changeCurrentProducts = (typeOfProducts: ProductsToShow) => {
  currentProductsToShow.value = typeOfProducts;
};
</script>
