<template>
  <nav class="nav">
    <div class="nav__links">
      <h2>Shortly</h2>

      <div class="nav__sub-links">
        <a href="">Features</a>
        <a href="">Pricing</a>
        <a href="">Resources</a>
      </div>

      <img
        class="nav__menu-hamburger"
        src="images/menu.svg"
        alt="menu icon"
        @click="showMenu()"
      />

      <div class="nav__menu-mobile" v-bind:class="{ 'fade-out': isVisible }">
        <div>
          <a href="">Features</a>
          <a href="">Pricing</a>
          <a href="">Resources</a>
        </div>

        <ButtonComponent text="Login" />
        <ButtonComponent withBackground rounded text="Sign Up" />
      </div>
    </div>

    <div class="nav__buttons">
      <ButtonComponent text="Login" />
      <ButtonComponent withBackground rounded text="Sign Up" />
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ButtonComponent from "./ButtonComponent.vue";

export default defineComponent({
  components: {
    ButtonComponent,
  },
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    showMenu() {
      this.isVisible = !this.isVisible;
    },
  },
});
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 30px 0;
}

.nav__menu-hamburger {
  display: none;
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

.nav__menu-mobile {
  display: none;
}

.fade-out {
  opacity: 0;
  transition: opacity 500ms linear;
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

@media screen and (max-width: 512px) {
  .nav__links {
    position: relative;
    width: 100%;
  }

  .nav__sub-links {
    display: none;
  }

  .nav__buttons {
    display: none;
  }

  .nav__menu-hamburger {
    display: block;
  }

  .nav__menu-mobile {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--primary-dark-violet);
    width: 100%;
    position: absolute;
    z-index: 2;
    color: var(--neutral-white);
    top: 65px;
    padding: 30px;
    border-radius: 15px;
    transition: opacity 500ms linear;
  }

  .nav__menu-mobile button {
    width: 100%;
  }

  .nav__menu-mobile div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 15px;
    padding-bottom: 15px;
    border-bottom: 1px solid var(--neutral-grayish-violet);
  }

  .nav__menu-mobile div a {
    color: var(--neutral-white);
    text-decoration: none;
    font-weight: bold;
  }
}
</style>
