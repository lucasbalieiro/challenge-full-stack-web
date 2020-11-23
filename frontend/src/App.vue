<template>
  <v-app id="inspire">
    <AppBar :title="$route.name" />

    <SideBar />

    <v-main>
      <router-view :key="$route.fullPath" />
    </v-main>

    <Footer />
  </v-app>
</template>

<script>
import AppBar from "@/components/AppBar.vue";
import SideBar from "@/components/SideBar.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    AppBar,
    SideBar,
    Footer,
  },
};
</script>
