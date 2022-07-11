<template>
  <div class="card">
    <p class="card__original-link">{{ originalLink }}</p>
    <div>
      <p class="card__shorten-link">{{ shortenLink }}</p>
      <ButtonComponent
        :text="isCopied ? 'Copied!' : 'Copy'"
        :withDarkBackground="isCopied"
        withBackground
        @click="copy"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import ButtonComponent from "../../components/ButtonComponent.vue";

export default defineComponent({
  props: {
    originalLink: String,
    shortenLink: String,
    copied: Boolean,
  },
  beforeCreate() {
    this.isCopied = this.copied;
  },
  data() {
    return {
      isCopied: false,
    };
  },
  components: {
    ButtonComponent,
  },
  methods: {
    copy() {
      this.isCopied = true;

      navigator.clipboard.writeText(this.shortenLink ?? "");

      setTimeout(() => {
        this.isCopied = false;
      }, 1000);
    },
  },
});
</script>

<style scoped>
.card {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--neutral-white);
  border-radius: 5px;
  margin-top: 45px;
  padding: 15px;
}

.card div {
  display: flex;
  align-items: center;
  gap: 15px;
}

.card__shorten-link {
  color: var(--primary-cyan);
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.card__original-link {
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
