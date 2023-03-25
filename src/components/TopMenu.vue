<template>
  <v-toolbar color="transparent">
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
    <!-- Filtering for mobile screens -->
    <FilteringModal v-if="mdAndDown" />
  </v-toolbar>
  <!-- Filtering for desktop -->
  <Filtering v-if="lgAndUp" />
</template>

<script setup lang="ts">
import { useProductsStore } from "@/store/products";
import { storeToRefs } from "pinia";
import { TypeOfProducts } from "@/types";
import { useDisplay } from "vuetify";
import FilteringModal from "./FilteringModal.vue";
import Filtering from "./Filtering.vue";

const { currentProducts } = storeToRefs(useProductsStore());
const { updateCurrentProducts } = useProductsStore();
const { lgAndUp, mdAndDown } = useDisplay();
</script>
