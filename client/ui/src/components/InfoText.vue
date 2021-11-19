<template>
  <div
    class="container d-flex justify-center align-center"
    :class="{ newPos: this.switch === true }"
  >
    <!-- <h5 class="text" :style="this.switch ? 'color: rgb(10, 63, 81)' : ''">
      COMING NOVEMBER 2021
    </h5> -->

    <div class="link">
      <v-btn
        class="btn"
        :style="this.switch ? 'color: rgb(10, 63, 81)' : ''"
        href="https://www.exploretock.com/freya"
        target="_blank"
        >MAKE A RESERVATION
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    switch: false,
  }),
  created() {
    setTimeout(() => (this.switch = true), 4500)
  },
}
</script>

<style lang="scss" scoped>
.container {
  // border: 1px solid red;
  height: 12vh;
  width: 300px;
  position: absolute;
  top: 60%;
  left: calc(50% - 150px);
  background-color: rgba(201, 201, 184, 0.9);
  transform: translateY(30px);
  opacity: 0;
  transition: 1s;
  transition-delay: 0.5s;
  z-index: 9999 !important;
}

.btn {
  background-color: rgb(10, 63, 81) !important;
  color: rgba(201, 201, 184, 0.9) !important;
  width: 100%;
  z-index: 9999 !important;
}
.link {
  text-decoration: none;
  width: 70%;
  z-index: 9999 !important;
  // color: ;
}

.text {
  font-size: 14px;
  letter-spacing: 3px;
  color: transparent;
  font-weight: 400;
  transition: 1s;
  transition-delay: 1.25s;
}
::after {
  content: "";
  position: absolute;
  height: 94%;
  width: 98%;
  border: 1px solid rgb(10, 63, 81);
  top: 3%;
  left: 1%;
}

.newPos {
  transform: translateY(0px);
  opacity: 1;
}
</style>
