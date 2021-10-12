<template>
  <div
    class="container d-flex justify-center align-center"
    :class="{ newPos: this.switch === true }"
  >
    <h5 class="text" :style="this.switch ? 'color: rgb(10, 63, 81)' : ''">
      COMING NOVEMBER 2021
    </h5>
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
  width: 20%;
  position: absolute;
  top: 60%;
  left: 40%;
  background-color: rgba(201, 201, 184, 0.9);
  transform: translateY(30px);
  opacity: 0;
  transition: 1s;
  transition-delay: 0.5s;
}

.text {
  font-size: 16px;
  letter-spacing: 5px;
  color: transparent;
  font-weight: 300;
  transition: 1s;
  transition-delay: 1.25s;
}
::after {
  content: "";
  position: absolute;
  height: 91%;
  width: 98%;
  border: 1px solid rgb(10, 63, 81);
  top: 5%;
  left: 1%;
}

.newPos {
  transform: translateY(0px);
  opacity: 1;
}
</style>
