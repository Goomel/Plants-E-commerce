<template>
  <TopMenu
    :currentProducts="currentProductsToShow"
    :changeProducts="changeCurrentProducts"
  />
  <div v-if="error">Error...</div>
  <div v-if="loading">Loading...</div>
  <div v-else class="d-flex flex-wrap">
    <ProductItem
      v-for="product in products"
      :key="product.id"
      :name="product.name"
      :images="product.images"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import type { Ref } from "vue/";
import { useProductsStore } from "@/store/products";
import { storeToRefs } from "pinia";
import { ProductsToShow } from "@/types";

import TopMenu from "@/components/TopMenu.vue";
import ProductItem from "@/components/ProductItem.vue";

const { products, error, loading } = storeToRefs(useProductsStore());
const { fetchProducts } = useProductsStore();

const currentProductsToShow: Ref<ProductsToShow> = ref(ProductsToShow.All);
fetchProducts(currentProductsToShow.value);

const changeCurrentProducts = (typeOfProducts: ProductsToShow) => {
  currentProductsToShow.value = typeOfProducts;
  fetchProducts(currentProductsToShow.value);
};
</script>
