<template>
  <header class="header">
    <div class="header__info">
      <h1>More than just shorter links</h1>
      <h3>
        Build your brand's recognition and get detailed insights on how links
        are performing.
      </h3>
      <ButtonComponent text="Get Started" big rounded withBackground />
    </div>
    <img src="/images/illustration-working.svg" alt="Men working on computer" />
  </header>
</template>

<script lang="ts">
import ButtonComponent from "./ButtonComponent.vue";

export default {
  components: {
    ButtonComponent,
  },
};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  height: 700px;
  background-color: var(--neutral-white);
}

.header__info {
  max-width: 55%;
}

.header__info h1 {
  color: var(--neutral-dark-violet);
  font-size: 70px;
  line-height: 90px;
}

.header__info h3 {
  color: var(--neutral-grayish-violet);
  margin-bottom: 20px;
}
</style>
