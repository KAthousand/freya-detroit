<template>
  <div
    class="d-flex flex-column justify-center align-center"
    :class="this.backgroundSwitch ? 'container' : 'transition-container'"
  >
    <div class="feather-container"><Feather /></div>
    <div class="letter-container"><Letters /></div>
  </div>
</template>

<script>
import Feather from "./Feather.vue"
import Letters from "./Letters.vue"
export default {
  components: { Feather, Letters },
  data: () => ({
    backgroundSwitch: true,
  }),
  mounted() {
    setTimeout(() => this.setBackgroundSwitch(), 6000)
  },
  methods: {
    setBackgroundSwitch() {
      this.backgroundSwitch = false
      this.$emit("finished")
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  width: 100%;
  padding-bottom: 15rem;
  background-color: #0a3f51;
  transition: 1s;
  z-index: 9999;
  position: absolute;

  &::after {
    content: "";
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 11, 17, 0.1),
      transparent 100%
    );
  }
}

.transition-container {
  height: 100vh;
  width: 100%;
  background-color: transparent;
  transition: 1s;
  padding-bottom: 15rem;
}

.feather-container {
  width: 13%;
  filter: blur(0.4px);
  opacity: 0.85;
  margin-bottom: 0.5rem;
}
.letter-container {
  width: 40%;
  height: 12%;
  opacity: 0.85;
}
</style>
