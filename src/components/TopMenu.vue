<template>
  <div>
    <v-toolbar class="d-flex" color="transparent">
      <v-btn
        :variant="
          props.currentProducts === ProductsToShow.All ? 'text' : 'plain'
        "
        :class="{
          'font-weight-black': props.currentProducts === ProductsToShow.All,
        }"
        class="text-capitalize"
        @click="props.changeProducts(ProductsToShow.All)"
        >All</v-btn
      >
      <v-btn
        :variant="
          props.currentProducts === ProductsToShow.Popular ? 'text' : 'plain'
        "
        :class="{
          'font-weight-black': props.currentProducts === ProductsToShow.Popular,
        }"
        class="text-capitalize"
        @click="props.changeProducts(ProductsToShow.Popular)"
        >Popular</v-btn
      >
      <v-btn
        :variant="
          props.currentProducts === ProductsToShow.New ? 'text' : 'plain'
        "
        :class="{
          'font-weight-black': props.currentProducts === ProductsToShow.New,
        }"
        class="text-capitalize"
        @click="props.changeProducts(ProductsToShow.New)"
        >New</v-btn
      >
      <v-spacer></v-spacer>
      <FilteringModal />
    </v-toolbar>
  </div>
</template>

<script setup lang="ts">
import { ProductsToShow } from "@/types";
import FilteringModal from "./FilteringModal.vue";

const props = defineProps({
  currentProducts: { required: true },
  changeProducts: { type: Function, required: true },
});
</script>
