<template>
  <div class="card">
    <span class="card__image-container">
      <img :src="icon" :alt="title" />
    </span>
    <h3 class="card__title">{{ title }}</h3>
    <p class="card__text">
      {{ text }}
    </p>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    title: String,
    text: String,
    icon: String,
  },
};
</script>

<style scoped>
.card {
  width: 100%;
  height: 300px;
  position: relative;
  background-color: var(--neutral-white);
  padding: 80px 20px 30px 20px;
  text-align: left;
  border-radius: 8px;
}

.card__image-container {
  width: 80px;
  background-color: var(--primary-dark-violet);
  position: absolute;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  top: -30px;
}

.card__image-container img {
  width: 40px;
  height: 40px;
}

.card__title {
  margin-bottom: 15px;
  color: var(--primary-dark-violet);
}

.card__text {
  color: var(--neutral-grayish-violet);
}

@media screen and (max-width: 512px) {
  .card__image-container {
    left: 120px;
  }
}
</style>
