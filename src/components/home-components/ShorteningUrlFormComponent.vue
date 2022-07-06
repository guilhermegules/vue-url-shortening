<template>
  <section class="shortening-form">
    <form data-testid="shortening-form" @submit.prevent="shorteningUrl(url)">
      <input
        type="text"
        class="shortening-form__field"
        placeholder="Shorten a link here..."
        data-testid="shortening-input"
        v-model="url"
      />
      <ButtonComponent
        data-testid="shortening-button"
        text="Shorten It!"
        big
        withBackground
      />
    </form>

    <ShortenLinkCard
      v-for="link in links"
      :key="link.shortenUrl"
      :originalLink="link.originalUrl"
      :shortenLink="link.shortenUrl"
      :copied="link.copied"
    />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import type { Link } from "../../models/LinkModel";
import ButtonComponent from "../ButtonComponent.vue";
import ShortenLinkCard from "./ShortenLinkCard.vue";
import ShorteningUrlService from "../../services/ShorteningUrlService";

export default defineComponent({
  components: {
    ButtonComponent,
    ShortenLinkCard,
  },
  data() {
    return {
      url: "",
      links: new Array<Link>(),
    };
  },
  methods: {
    async shorteningUrl(url: string) {
      const shortenUrl = await ShorteningUrlService.shorteningUrl(url);

      this.links.push({
        originalUrl: this.url,
        shortenUrl: shortenUrl.result.short_link,
        copied: false,
      });
    },
  },
});
</script>

<style scoped>
.shortening-form {
  position: relative;
  padding: 30px 50px 0;
  background-color: var(--neutral-light-gray);
  margin: 0 -50px;
}

.shortening-form form {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100px;
  width: 100%;
  gap: 20px;
  padding: 0 30px;
  background-image: url(/images/bg-shorten-desktop.svg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: var(--primary-dark-violet);
  border-radius: 8px;
  position: absolute;
  width: calc(100% - 100px);
  top: -50px;
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
