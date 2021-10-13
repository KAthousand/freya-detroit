<template>
  <v-carousel
    hide-delimiter-background
    show-arrows-on-hover
    class="carousel"
    height="100%"
    :cycle="cycleStart"
  >
    <v-carousel-item eager>
      <v-img
        src="../assets/photos/artBackground.png"
        alt="background"
        eager
        gradient="to top right, rgba(10,63,81,.4), rgba(10,63,81,.7)"
        class="image"
        height="100%"
      ></v-img>
    </v-carousel-item>
    <v-carousel-item eager>
      <v-img
        src="../assets/photos/breadOven.png"
        alt="background"
        eager
        gradient="to top right, rgba(10,63,81,.4), rgba(10,63,81,.7)"
        class="image"
        height="100%"
      ></v-img>
    </v-carousel-item>
    <v-carousel-item eager>
      <div class="d-flex photo-container">
        <div class="photo-content left">
          <v-img
            src="../assets/photos/diningRoom.png"
            alt="background"
            eager
            gradient="to top right, rgba(10,63,81,.3), rgba(10,63,81,.5)"
            class="image"
            height="100%"
          ></v-img>
        </div>
        <div class="photo-content right">
          <v-img
            src="../assets/photos/lampMural.png"
            alt="background"
            eager
            gradient="to top right, rgba(10,63,81,.4), rgba(10,63,81,.7)"
            class="image"
            height="100%"
          ></v-img>
        </div>
      </div>
    </v-carousel-item>
    <v-carousel-item eager>
      <v-img
        src="../assets/photos/frontWindow.png"
        alt="background"
        eager
        gradient="to top right, rgba(10,63,81,.4), rgba(10,63,81,.7)"
        class="image"
        height="100%"
      ></v-img>
    </v-carousel-item>
    <v-carousel-item eager>
      <v-img
        src="../assets/photos/bread.png"
        alt="background"
        eager
        gradient="to top right, rgba(10,63,81,.4), rgba(10,63,81,.7)"
        class="image"
        height="100%"
      ></v-img>
    </v-carousel-item>
    <v-carousel-item eager>
      <v-img
        src="../assets/photos/waterPitchers.png"
        alt="background"
        eager
        gradient="to top right, rgba(10,63,81,.4), rgba(10,63,81,.7)"
        class="image"
        height="100%"
      ></v-img>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data: () => ({
    cycleStart: false,
  }),
  created() {
    setTimeout(() => (this.cycleStart = true), 2500)
  },
}
</script>

<style lang="scss" scoped>
.photo-container {
  // border: 2px solid purple;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: row;
  // background-color: #b1b1a1;
}

.photo-content {
  // border: 1px solid blue;
  width: 50%;
  border: 20px solid rgba(177, 177, 161, 0.25);
  display: flex;
  background: linear-gradient(
      to top,
      rgba(10, 63, 81, 0.33),
      rgba(10, 63, 81, 0.7)
    ),
    rgb(177, 177, 161);
}
.left {
  padding: 2% 1% 2% 4%;
}

.right {
  padding: 2% 4% 2% 1%;
}

.carousel {
  width: 100%;
}

@media (max-width: 600px) {
  .right {
    display: none;
  }
  .left {
    width: 100%;
    padding: 0;
  }
  .photo-content {
    border: none;
  }
}
</style>
