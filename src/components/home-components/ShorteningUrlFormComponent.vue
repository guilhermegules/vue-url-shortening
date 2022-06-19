<template>
  <section class="shortening-form">
    <form @submit.prevent="shorteningUrl(url)">
      <input
        type="text"
        class="shortening-form__field"
        placeholder="Shorten a link here..."
        v-model="url"
      />
      <ButtonComponent text="Shorten It!" big withBackground />
    </form>

    <p>{{ url }} {{ shortenUrl }}</p>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import ButtonComponent from "../ButtonComponent.vue";
import ShorteningUrlService from "../../services/ShorteningUrlService";

export default defineComponent({
  components: {
    ButtonComponent,
  },
  data() {
    return {
      url: "",
      shortenUrl: "",
    };
  },
  methods: {
    shorteningUrl(url: string) {
      ShorteningUrlService.shorteningUrl(url).then((shortenUrlResponse) => {
        this.shortenUrl = shortenUrlResponse.result.short_link;
      });
    },
  },
});
</script>

<style scoped>
.shortening-form {
  width: 100%;
  height: 100px;
  background-image: url(/images/bg-shorten-desktop.svg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: var(--primary-dark-violet);
  border-radius: 8px;
  margin-bottom: 30px;
}

.shortening-form form {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 100%;
  gap: 20px;
  padding: 0 30px;
}

.shortening-form__field {
  height: 40px;
  width: 100%;
  padding: 20px;
  border-radius: 5px;
  border: none;
}

.shortening-form__field:focus {
  outline: 2px solid var(--primary-cyan);
}
</style>
