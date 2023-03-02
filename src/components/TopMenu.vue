<template>
  <div>
    <v-toolbar class="d-flex" color="transparent">
      <v-btn
        :variant="currentProducts === TypeOfProducts.All ? 'text' : 'plain'"
        :class="{
          'font-weight-black': currentProducts === TypeOfProducts.All,
        }"
        class="text-capitalize"
        @click="updateCurrentProducts(TypeOfProducts.All)"
        >All</v-btn
      >
      <v-btn
        :variant="currentProducts === TypeOfProducts.Popular ? 'text' : 'plain'"
        :class="{
          'font-weight-black': currentProducts === TypeOfProducts.Popular,
        }"
        class="text-capitalize"
        @click="updateCurrentProducts(TypeOfProducts.Popular)"
        >Popular</v-btn
      >
      <v-btn
        :variant="currentProducts === TypeOfProducts.New ? 'text' : 'plain'"
        :class="{
          'font-weight-black': currentProducts === TypeOfProducts.New,
        }"
        class="text-capitalize"
        @click="updateCurrentProducts(TypeOfProducts.New)"
        >New</v-btn
      >
      <v-spacer></v-spacer>
      <FilteringModal />
    </v-toolbar>
  </div>
</template>

<script setup lang="ts">
import FilteringModal from "./FilteringModal.vue";
import { useProductsStore } from "@/store/products";
import { storeToRefs } from "pinia";
import { TypeOfProducts } from "@/types";

const { currentProducts } = storeToRefs(useProductsStore());
const { updateCurrentProducts } = useProductsStore();
</script>
