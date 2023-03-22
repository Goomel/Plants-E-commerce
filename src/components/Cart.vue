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
      <v-list-item v-for="(item, index) in productsInCart" :key="index">
        <v-row no-gutters>
          <v-col>
            <v-img
              :src="item.product.images[0].url"
              :alt="item.product.name"
              cover
            />
          </v-col>
          <v-col cols="4" class="mx-2">
            <v-list-item-title class="font-weight-bold">
              <p>
                {{ item.product.name }}
              </p>
            </v-list-item-title>
            <v-list-item-subtitle>{{
              `Price: ${item.product.price}`
            }}</v-list-item-subtitle>
            <v-list-item-subtitle>{{
              `Amount: ${item.quantity}`
            }}</v-list-item-subtitle>
          </v-col>
          <v-col>
            <v-list-item-action>
              <v-btn @click="removeProduct()">Remove</v-btn>
            </v-list-item-action>
          </v-col>
        </v-row>
      </v-list-item>
      <v-list-item v-if="productsInCart.length === 0"
        >Your cart is empty.</v-list-item
      >
    </v-list>

    <v-card-actions>
      <p>Total: {{ getTotal() }} $</p>
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
</style>
