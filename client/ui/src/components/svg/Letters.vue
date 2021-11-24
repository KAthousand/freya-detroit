<template>
  <div class="letters d-flex">
    <div
      v-for="(letter, index) in letters"
      :key="index"
      class="letters-container"
      :style="'animation-delay: ' + (index + 30) * 125 + 'ms'"
    >
      <v-img
        :src="letter"
        class="letter"
        height="70"
        width="45"
        max-width="110"
        contain
      ></v-img>
    </div>
  </div>
</template>

<script>
import letterF from "../../assets/svgs/letter_f.svg"
import letterR from "../../assets/svgs/letter_r.svg"
import letterE from "../../assets/svgs/letter_e.svg"
import letterY from "../../assets/svgs/letter_y.svg"
import letterA from "../../assets/svgs/letter_a.svg"

export default {
  data: () => ({
    letters: [letterF, letterR, letterE, letterY, letterA],
  }),
}
</script>

<style>
.letters {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.letters-container {
  /* border: 1px solid purple; */
  transform: scale(0.45);
  display: block;
  animation: name-animation 0.75s forwards;
  opacity: 0;
  margin: 0 -2px;
}

.letters-container:nth-child(3) {
  margin: 0 -5px;
}

.letter {
  filter: blur(0.4px);
}

@keyframes name-animation {
  0% {
    transform: translateY(10px);
    opacity: 0;
  }
  50% {
    transform: translateY(-8px);
  }

  100% {
    transform: translateY(0);
    opacity: 100;
  }
}

@media (max-width: 600px) {
  .letter {
    filter: blur(0px) !important;
  }
}

@media screen and (max-height: 400px) and (max-width: 850px) {
  .letter {
    filter: blur(0px) !important;
    height: 40px !important;
    width: 30px !important;
  }
}
</style>
