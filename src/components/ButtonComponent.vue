<template>
  <button
    class="button"
    :class="{
      'button--rounded': rounded,
      'button--big': big,
      'button--with-background': withBackground,
    }"
  >
    {{ text }}
  </button>
</template>

<script lang="ts">
export default {
  props: {
    text: String,
    rounded: Boolean,
    big: Boolean,
    withBackground: Boolean,
  },
};
</script>

<style scoped>
.button {
  font-weight: bold;
  background: none;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  color: var(--neutral-grayish-violet);
  border-radius: 5px;
}

.button:hover {
  filter: opacity(0.5);
}

.button--rounded {
  border-radius: 30px;
}

.button--big {
  width: 120px;
  height: 40px;
}

.button--with-background {
  background-color: var(--primary-cyan);
  color: var(--neutral-white);
}
</style>
