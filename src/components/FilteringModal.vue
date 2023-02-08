<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" transition="dialog-bottom-transition">
      <template v-slot:activator="{ attrs }">
        <v-btn
          @click="dialog = !dialog"
          v-bind="attrs"
          icon="mdi-tune-vertical-variant"
        >
        </v-btn>
      </template>

      <v-card class="h-100"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
        modi.</v-card
      >
    </v-dialog>
  </v-row>
</template>

<script setup lang="ts">
import { ref } from "vue";
const dialog = ref(false);
</script>
<style>
.v-dialog .v-overlay__content {
  height: 70%;
  width: 100% !important;
  max-width: 100% !important;
  left: 0;
  margin: 0 !important;
  bottom: 0;
}
</style>
