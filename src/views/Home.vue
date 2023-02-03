<template>
  <TopMenu />
  <div v-if="error">Error...</div>
  <div v-if="loading">Loading...</div>
  <div v-else>
    <h4 class="text-h4">Products:</h4>
    <v-list
      lines="one"
      v-for="product in products"
      :key="product.id"
      :title="product.name"
    >
      <v-list-item>
        {{ product.name }}
      </v-list-item>
    </v-list>
  </div>
</template>

<script lang="ts" setup>
import { useProductsStore } from "@/store/products";
import { storeToRefs } from "pinia";
import TopMenu from "@/components/TopMenu.vue";
const { products, error, loading } = storeToRefs(useProductsStore());
const { fetchProducts } = useProductsStore();

fetchProducts();
</script>
