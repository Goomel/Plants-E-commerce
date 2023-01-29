<template>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, ad, dolore
    vitae ut quia, facilis facere numquam earum reiciendis ipsa libero quis
    tempora minima minus? Ad molestiae omnis reiciendis, consequuntur non
    mollitia, sit molestias nihil nostrum ea magnam voluptatum corporis. Modi
    culpa at aliquid ipsam saepe explicabo minima distinctio eius rem quam!
    Possimus, impedit inventore quis tenetur ab rerum iusto nostrum eum fugit
    illo aliquam qui saepe fuga quos cumque, unde sint ratione laborum eos
    consequuntur quibusdam assumenda optio maxime enim? Rerum nulla eos libero
    nostrum voluptatem sapiente ipsam iste ipsum. Recusandae quisquam aut
    dignissimos animi! Cumque voluptates mollitia dolorum!
  </p>
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
const { products, error, loading } = storeToRefs(useProductsStore());
const { fetchProducts } = useProductsStore();

fetchProducts();
</script>
