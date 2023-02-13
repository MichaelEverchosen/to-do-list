<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <RouterView />
  </div>
</template>

<script>
import { RouterView } from "vue-router";
import HeaderComponent from "@/components/HeaderComponent.vue";

export default {
  components: {
    HeaderComponent,
  },
};
</script>

<style scoped>
</style>
