<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :location="!mdAndUp ? 'bottom' : 'left'"
      :temporary="!mdAndUp ? true : false"
      :disable-resize-watcher="true"
    >
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

    <v-main class="pt-0" style="margin-top: 88px">
      <v-container class="h-100">
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useDisplay } from "vuetify";

const { mdAndUp } = useDisplay();
const drawer = ref(false);
</script>
