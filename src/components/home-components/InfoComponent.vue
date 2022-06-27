<template>
  <section class="info">
    <h2 class="info__title">Advanced Statistics</h2>
    <p class="info__text">
      Track how your links are performing across the web with our advanced
      statistics dash board
    </p>

    <div class="info__cards">
      <InfoCard
        title="Brand Recognition"
        text="Boost your brand recognition with each click. Generic links help instil
      confidence in your content."
        icon="/images/icon-brand-recognition.svg"
      />
      <InfoCard
        title="Detailed Records"
        text="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
        icon="/images/icon-detailed-records.svg"
      />
      <InfoCard
        title="Fully Customizable"
        text="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
        icon="/images/icon-fully-customizable.svg"
      />
    </div>

    <div class="info__boost">
      <h2>Boost your links today</h2>
      <ButtonComponent text="Get Started" rounded withBackground big />
    </div>
  </section>
</template>

<script lang="ts">
import InfoCard from "./InfoCardComponent.vue";
import ButtonComponent from "../ButtonComponent.vue";

export default {
  components: {
    InfoCard,
    ButtonComponent,
  },
};
</script>

<style scoped>
.info {
  text-align: center;
  padding: 200px 50px 0;
  background-color: var(--neutral-light-gray);
  margin: 0 -50px;
}

.info__title {
  color: var(--primary-dark-violet);
}

.info__text {
  color: var(--neutral-grayish-violet);
  margin-bottom: 50px;
}

.info__cards {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.info__boost {
  padding: 30px 50px;
  margin: 100px -50px 0;
  background-image: url(/images/bg-shorten-desktop.svg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: var(--primary-dark-violet);
}

.info__boost h2 {
  color: var(--neutral-white);
  margin-bottom: 20px;
}
</style>
