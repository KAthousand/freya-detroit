<template>
  <div
    class="container d-flex justify-center align-center"
    :style="hidden ? 'background-color: transparent; z-index: 1' : ''"
  >
    <div class="content d-flex justify-center-align-center">
      <div class="feather-container">
        <div
          :class="{
            'cover cover-switch': coverSwitch === true,
            cover: coverSwitch === false,
            hidden: hidden === true,
          }"
        ></div>
        <img :src="image" alt="feather" class="feather" contain />
      </div>
      <transition-group
        name="logo"
        :appear="true"
        enter-class="logo-enter"
        enter-to-class="logo-enter-to"
        enter-active-class="logo-enter-active"
        class="group"
      >
        <template name="logo" v-for="(letter, idx) in letters">
          <v-img
            :key="letter.value"
            :src="letter.src"
            alt="letter"
            height="100%"
            :class="{
              first: idx === 0,
              last: idx === letters.length - 1,
            }"
            class="image"
            :style="{ transitionDelay: 2 + 0.2 * idx + 's' }"
            contain
            eager
          ></v-img>
        </template>
      </transition-group>
    </div>
  </div>
</template>

<script>
import letterF from "../assets/letters/letter_f.png"
import letterR from "../assets/letters/letter_r.png"
import letterE from "../assets/letters/letter_e.png"
import letterY from "../assets/letters/letter_y.png"
import letterA from "../assets/letters/letter_a.png"
import Feather from "../assets/feather.png"

export default {
  components: {
    Feather,
  },
  data: () => ({
    letters: [
      { src: letterF, value: 1 },
      { src: letterR, value: 2 },
      { src: letterE, value: 3 },
      { src: letterY, value: 4 },
      { src: letterA, value: 5 },
    ],
    image: Feather,
    coverSwitch: false,
    hidden: false,
  }),
  created() {
    setTimeout(() => (this.coverSwitch = true), 1000)
    setTimeout(() => (this.hidden = true), 3500)
  },
}
</script>

<style lang="scss" scoped>
.feather-container {
  position: absolute;
  width: 110%;
  left: -5%;
  bottom: 125px;
  z-index: 3;
  .hidden {
    display: none;
  }

  .cover {
    position: absolute;
    bottom: 2px;
    height: 100%;
    width: 100%;
    background-color: rgb(10, 63, 81);
    transform: translateX(0);
  }

  .cover-switch {
    transform: translateX(280px);
    background-color: rgb(10, 63, 81);
    transition: 1s cubic-bezier(0.26, 0.61, 0.83, 0.67);
  }
  .feather {
    width: 100%;
  }
}

.container {
  background-color: rgb(10, 63, 81);
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 2;
  transition: 2s;
  .content {
    height: 18%;
    position: relative;
  }

  .group {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .logo-enter {
    opacity: 0;
    transform: translateY(0px);
  }

  .logo-enter-to {
    opacity: 1;
    transform: translateY(0px);
  }

  .logo-enter-active {
    transition: 1s;
  }

  .image {
    width: 40px;
    height: 50% !important;
    transition: 1s ease-in;
    z-index: 2;
  }

  .first {
    width: 60px;
  }

  .last {
    width: 60px;
  }
}
</style>
