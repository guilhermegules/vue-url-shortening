<template>
  <div class="card">
    <p class="card__original-link">{{ originalLink }}</p>
    <div>
      <p class="card__shorten-link">{{ shortenLink }}</p>
      <ButtonComponent
        :text="copied ? 'Copied!' : 'Copy'"
        :withDarkBackground="copied"
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
  },
  data() {
    return {
      copied: false,
    };
  },
  components: {
    ButtonComponent,
  },
  methods: {
    copy() {
      console.log("Copied");
      this.copied = true;
    },
  },
});
</script>

<style scoped>
.card {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0;
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
