<template>
  <v-dialog v-model="dialog" transition="dialog-bottom-transition">
    <template v-slot:activator="{ attrs }">
      <v-btn
        @click="dialog = !dialog"
        v-bind="attrs"
        icon="mdi-tune-vertical-variant"
      >
      </v-btn>
    </template>

    <v-card>
      <v-container>
        <div
          class="d-flex align-center justify-space-between"
          @click="resetFilters()"
        >
          <v-card-title class="font-weight-bold text-uppercase text-h5"
            >Filters</v-card-title
          >
          <v-btn rounded items-center class="pa-4 ma-0 d-flex"
            >Reset filters</v-btn
          >
        </div>

        <v-card-actions>
          <v-col>
            <v-row class="my-8 justify-space-between">
              <v-btn
                rounded
                items-center
                class="pa-4 ma-0 d-flex category-button"
                :class="{
                  'is-active-button': filters.category === 'indoor',
                }"
                @click="updateCategory('indoor')"
                >indoor</v-btn
              >
              <v-btn
                rounded
                class="pa-4 ma-0 d-flex category-button"
                :class="{
                  'is-active-button': filters.category === 'outdoor',
                }"
                @click="updateCategory('outdoor')"
                >outdoor</v-btn
              >
              <v-btn
                rounded
                class="pa-4 ma-0 d-flex category-button"
                :class="{
                  'is-active-button': filters.category === 'garden',
                }"
                @click="updateCategory('garden')"
                >garden</v-btn
              >
            </v-row>
            <v-row class="mt-6">
              <v-card-text class="font-weight-bold text-subtitle-1"
                >Price Range</v-card-text
              >
            </v-row>
            <v-row class="my-3">
              <v-range-slider
                color="green"
                v-model="filters.priceRange"
                step="1"
                thumb-label
                thumb-size="25"
                min="0"
                max="50"
              ></v-range-slider>
            </v-row>
            <v-row class="mt-10 align-center">
              <v-card-text class="font-weight-bold text-subtitle-1 flex-grow-0"
                >Size</v-card-text
              >
              <v-select
                :menu-props="{ location: 'top' }"
                v-model="filters.size"
                label="Size"
                :items="sizeItems"
                variant="solo"
                single-line
                class="flex-grow-0"
              ></v-select>
            </v-row>
          </v-col>
        </v-card-actions>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useProductsStore } from "@/store/products";

const { updateCategory, resetFilters } = useProductsStore();
const { filters } = storeToRefs(useProductsStore());

const dialog = ref(false);
const sizeItems: Array<string> = ["S", "M", "L", "ALL"];
</script>

<style>
.v-dialog .v-overlay__content {
  min-height: 65%;
  width: 100% !important;
  max-width: 100% !important;
  margin: 0 !important;
  bottom: 0;
}
.v-overlay__content
  .v-card.v-theme--light.v-card--density-default.v-card--variant-elevated {
  height: 100%;
  width: 100%;
  position: absolute;
}

.category-button {
  background-color: #eceff1;
  border: 1px solid #b0bec5;
}
.category-button:hover,
.is-active-button {
  background-color: #4caf50;
  border: 1px solid #4caf50;
  color: #fff;
  -webkit-box-shadow: 0px 5px 25px 0px rgba(165, 214, 167, 1);
  -moz-box-shadow: 0px 5px 25px 0px rgba(165, 214, 167, 1);
  box-shadow: 0px 5px 25px 0px rgba(165, 214, 167, 1);
}
</style>
