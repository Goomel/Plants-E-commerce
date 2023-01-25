<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      :location="!mdAndUp ? 'bottom' : 'left'"
      :temporary="!mdAndUp ? true : false"
    >
      <slot name="nav"></slot>
    </v-navigation-drawer>

    <v-app-bar class="pt-6" flat>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <template v-slot:append>
        <v-container class="w-100 ml-5">
          <v-row>
            <v-col class="mr-2">
              <v-btn icon>
                <img src="@/assets/icons/Cart.svg" />
              </v-btn>
            </v-col>
            <v-col>
              <v-btn icon>
                <img src="@/assets/icons/Search.svg" />
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </template>
    </v-app-bar>

    <v-main>
      <v-slot name="main"></v-slot>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useDisplay } from "vuetify";

const { mdAndUp } = useDisplay();
const drawer = ref(false);
</script>
