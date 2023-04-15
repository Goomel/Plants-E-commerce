<template>
  <Cart v-if="isCartActive" />
  <v-container
    class="pa-0 product__view d-flex"
    :class="lgAndUp ? 'align-center' : ''"
    fluid
  >
    <div v-if="error">Error</div>
    <Loader v-if="loading" class="product__view" />
    <v-sheet
      v-else-if="product"
      class="d-flex position-relative mx-auto"
      :class="xlAndUp ? 'flex-row' : 'flex-column'"
      :height="lgAndUp ? '75vh' : '100vh'"
      :width="lgAndUp ? '90%' : ''"
    >
      <v-toolbar color="transparent" absolute>
        <v-btn
          class="ma-2"
          variant="text"
          icon="mdi-arrow-left"
          size="large"
          @click="$router.go(-1)"
        />
        <v-spacer></v-spacer>
        <CartButton />
      </v-toolbar>
      <DetailsImage :images="product.images" />
      <DetailsDescription :product="product" />
    </v-sheet>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";
import { useDisplay } from "vuetify";
import { useProductsStore } from "@/store/products";
import { useCartStore } from "@/store/cart";
import DetailsImage from "@/components/DetailsImage.vue";
import DetailsDescription from "@/components/DetailsDescription.vue";
import Loader from "@/components/Loader.vue";
import Cart from "@/components/Cart.vue";
import CartButton from "@/components/CartButton.vue";

const { isCartActive } = storeToRefs(useCartStore());

const route = useRoute();
const id = ref(route.params.id);
const { lgAndUp, xlAndUp } = useDisplay();

const { product, error, loading } = storeToRefs(useProductsStore());
const { fetchProduct } = useProductsStore();

fetchProduct(id.value as string);
</script>
<style>
.product__view {
  min-height: 100vh;
}
</style>
