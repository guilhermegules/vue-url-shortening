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
@import "../assets/fade-in.css";

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  height: 700px;
  background-color: var(--neutral-white);
  animation: fade-in-down 1s;
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

@media screen and (max-width: 512px) {
  .header {
    flex-direction: column-reverse;
    justify-content: space-around;
  }

  .header__info {
    max-width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    padding-bottom: 40px;
  }

  .header__info button {
    width: 200px;
  }

  .header__info h1 {
    font-size: 40px;
    line-height: 50px;
  }

  .header img {
    width: 100%;
  }
}
</style>
