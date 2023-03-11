<template>
  <TopMenu />
  <div v-if="error">Error...</div>
  <div v-if="loading">Loading...</div>
  <div v-else>
    <div v-if="filteredProducts.length" class="d-flex flex-wrap">
      <ProductItem
        v-for="product in filteredProducts"
        :key="product.id"
        :name="product.name"
        :images="product.images"
        :id="product.id"
      />
    </div>
    <div v-else>Current filters don't match any products...</div>
  </div>
</template>

<script lang="ts" setup>
import { useProductsStore } from "@/store/products";
import { storeToRefs } from "pinia";

import TopMenu from "@/components/TopMenu.vue";
import ProductItem from "@/components/ProductItem.vue";

const { filteredProducts, error, loading, currentProducts } = storeToRefs(
  useProductsStore()
);
const { fetchProducts } = useProductsStore();
fetchProducts(currentProducts.value);
</script>
