<template>
  <main>
    <NavComponent />
    <HeaderComponent />
    <ShorteningUrlFormComponent />
    <InfoComponent />
    <FooterComponent />
  </main>
</template>

<script lang="ts">
import HeaderComponent from "../components/HeaderComponent.vue";
import NavComponent from "../components/NavComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import InfoComponent from "../components/home-components/InfoComponent.vue";
import ShorteningUrlFormComponent from "../components/home-components/ShorteningUrlFormComponent.vue";

export default {
  components: {
    HeaderComponent,
    NavComponent,
    FooterComponent,
    InfoComponent,
    ShorteningUrlFormComponent,
  },
};
</script>
