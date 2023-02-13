<template>
  <v-app>
    <v-app-bar class="pt-6" flat absolute>
      <template v-slot:append>
        <v-container class="w-100 ml-5">
          <v-row>
            <v-col class="d-flex align-center">
              <CartButton />
            </v-col>
            <v-col>
              <v-btn icon="mdi-magnify" size="large"></v-btn>
            </v-col>
          </v-row>
        </v-container>
      </template>
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
</script>
