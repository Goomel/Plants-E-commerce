<template>
  <v-card class="cart">
    <v-row>
      <v-col class="flex-grow-0 my-auto">
        <v-card-title>Your Cart</v-card-title>
      </v-col>
      <v-spacer></v-spacer>
      <v-col class="flex-grow-0 my-auto mr-3">
        <v-btn
          icon="mdi-close"
          flat
          size="medium"
          @click="closeCart"
          class="pa-1"
        />
      </v-col>
    </v-row>
    <v-list>
      <v-list-item
        v-for="(item, index) in productsInCart"
        :key="index"
        class="w-100 h-100"
      >
        <v-responsive height="200">
          <v-row no-gutters class="h-100">
            <v-col cols="5" class="h-100">
              <v-img
                :src="item.product.images[0].url"
                :alt="item.product.name"
                cover
              />
            </v-col>
            <v-col cols="5" class="px-2">
              <v-list-item-title class="font-weight-bold text-wrap">
                {{ item.product.name }}
              </v-list-item-title>
              <v-list-item-subtitle>{{
                `Price: ${item.product.price}`
              }}</v-list-item-subtitle>
              <v-list-item-subtitle>{{
                `Amount: ${item.quantity}`
              }}</v-list-item-subtitle>
            </v-col>
            <v-col cols="2">
              <v-list-item-action>
                <v-btn
                  icon="mdi-delete"
                  flat
                  @click="removeProduct(item.product.id)"
                />
              </v-list-item-action>
            </v-col>
          </v-row>
        </v-responsive>
      </v-list-item>

      <v-list-item v-if="productsInCart.length === 0"
        >Your cart is empty.</v-list-item
      >
    </v-list>

    <v-card-actions v-if="productsInCart.length > 0">
      <p><span class="font-weight-bold">Total: </span>{{ getTotal() }} $</p>
      <v-btn color="primary">Checkout</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useCartStore } from "@/store/cart";

const { productsInCart } = storeToRefs(useCartStore());
const { removeProduct, closeCart, getTotal } = useCartStore();
</script>
<style scoped>
.cart {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
}
.text-wrap {
  white-space: normal !important;
}
</style>
