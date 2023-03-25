<template>
  <v-card flat>
    <v-container>
      <v-row>
        <v-col single-line cols="2" class="d-flex align-center">
          <v-select
            :menu-props="{ location: 'bottom' }"
            v-model="filters.category"
            label="Category"
            :items="categoryItems"
            variant="solo"
            clearable
          ></v-select>
        </v-col>
        <v-col single-line cols="2" class="d-flex align-center">
          <v-select
            :menu-props="{ location: 'bottom' }"
            v-model="filters.size"
            label="Size"
            :items="sizeItems"
            variant="solo"
            single-line
            clearable
          ></v-select>
        </v-col>
        <v-col cols="5">
          <v-card-text class="font-weight-bold text-subtitle-1"
            >Price Range</v-card-text
          >
          <v-range-slider
            color="green"
            v-model="filters.priceRange"
            step="1"
            thumb-label
            thumb-size="25"
            min="0"
            max="50"
          ></v-range-slider>
        </v-col>
        <v-col cols="3" class="d-flex align-center justify-center">
          <v-btn
            rounded
            items-center
            class="pa-4 ma-0 d-flex"
            @click="resetFilters()"
            >Reset filters</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useProductsStore } from "@/store/products";

const { resetFilters } = useProductsStore();
const { filters } = storeToRefs(useProductsStore());

const sizeItems: Array<string> = ["S", "M", "L"];
const categoryItems: Array<string> = ["indoor", "outdoor", "garden"];
</script>

<style scoped></style>
