<template>
  <v-app>
    <!-- <Cart v-if="isCartActive" /> -->
    <v-app-bar class="pt-6 w-100" flat absolute>
      <v-container class="w-100">
        <Search v-if="isSearchActive" />
        <v-row v-else class="d-flex justify-end">
          <v-col class="flex-grow-0">
            <CartButton />
          </v-col>
          <v-col class="flex-grow-0">
            <v-btn
              icon="mdi-magnify"
              size="large"
              @click="isSearchActive = !isSearchActive"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>

    <v-main class="pt-0" style="margin-top: 88px">
      <v-container class="h-100">
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>
<script setup lang="ts">
import CartButton from "@/components/CartButton.vue";
import Search from "@/components/Search.vue";

import { storeToRefs } from "pinia";
import { useProductsStore } from "@/store/products";

const { isSearchActive } = storeToRefs(useProductsStore());
</script>
