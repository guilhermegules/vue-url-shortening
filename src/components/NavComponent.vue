<template>
  <nav class="nav">
    <div class="nav__links">
      <h2>Shortly</h2>

      <div class="nav__sub-links">
        <a href="">Features</a>
        <a href="">Pricing</a>
        <a href="">Resources</a>
      </div>
    </div>

    <div class="nav__buttons">
      <ButtonComponent text="Login" />
      <ButtonComponent withBackground rounded text="Sign Up" />
    </div>
  </nav>
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
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 30px 0;
}

.nav__links {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
}

.nav__sub-links {
  width: 80%;
  display: flex;
  justify-content: space-around;
}

.nav__sub-links a {
  color: var(--neutral-grayish-violet);
  text-decoration: none;
}

.nav__sub-links a:hover {
  filter: opacity(0.5);
}

.nav__buttons > button:first-of-type {
  margin-right: 15px;
}
</style>
