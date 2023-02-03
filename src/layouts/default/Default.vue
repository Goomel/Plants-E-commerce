<template>
  <v-app>
    <v-app-bar class="pt-6" flat>
      <template v-slot:append>
        <v-container class="w-100 ml-5">
          <v-row>
            <v-col class="d-flex align-center">
              <v-btn icon>
                <v-badge :content="0" color="green-darken-2">
                  <v-icon><img src="@/assets/icons/Cart.svg" /></v-icon>
                </v-badge>
              </v-btn>
            </v-col>
            <v-col>
              <v-btn icon>
                <v-icon><img src="@/assets/icons/Search.svg" /></v-icon>
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
