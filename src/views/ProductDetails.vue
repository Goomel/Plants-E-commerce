<template>
  <v-container class="pa-0 product__view">
    <div v-if="error">Error</div>
    <Loader v-if="loading" class="product__view" />
    <template v-else-if="product">
      <DetailsImage :images="product.images" />
      <DetailsDescription :product="product" />
    </template>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";
import { useProductsStore } from "@/store/products";
import DetailsImage from "@/components/DetailsImage.vue";
import DetailsDescription from "@/components/DetailsDescription.vue";
import Loader from "@/components/Loader.vue";

const route = useRoute();
const id = ref(route.params.id);

const { product, error, loading } = storeToRefs(useProductsStore());
const { fetchProduct } = useProductsStore();

fetchProduct(id.value as string);
</script>
<style>
.product__view {
  min-height: 100vh;
}
</style>
