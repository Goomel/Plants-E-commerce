<template>
  <div v-if="error">Error...</div>
  <Loader v-if="loading" />
  <div v-else>
    <div
      v-if="filteredProducts.length"
      class="d-flex flex-wrap justify-space-around"
    >
      <ProductItem
        v-for="product in filteredProducts"
        :key="product.id"
        :plantName="product.name"
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

import ProductItem from "@/components/ProductItem.vue";
import Loader from "@/components/Loader.vue";

const { filteredProducts, error, loading, currentProducts } = storeToRefs(
  useProductsStore()
);
const { fetchProducts } = useProductsStore();
fetchProducts(currentProducts.value);
</script>
