<template>
  <v-app-bar app>
    <v-spacer />
    <v-toolbar-title> {{ title }}</v-toolbar-title>
    <v-spacer />
  </v-app-bar>
</template>
<script>
export default {
  props: ['title'],
};
</script>