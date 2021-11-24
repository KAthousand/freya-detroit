<template>
  <div class="dash-nav-container" :class="open ? 'tall-dash-nav' : ''">
    <v-navigation-drawer
      absolute
      temporary
      right
      v-model="open"
      class="nav-drawer"
    >
      <div class="tabs-container">
        <div class="logo"><div class="feather"></div></div>
        <v-btn
          text
          v-for="(anchor, index) in anchors"
          :key="index"
          class="nav-menu"
          :class="{ active: activeSection == index }"
          @click="handleClick(index)"
          @touchstart="handleTouch(index)"
        >
          <h3>{{ anchor }}</h3>
        </v-btn>
        <v-btn
          class="nav-menu reservation"
          text
          href="https://www.exploretock.com/freya"
          target="_blank"
          ><h3>Reserve a Table</h3></v-btn
        >
      </div>
      <v-btn icon @click.stop="handleNavClick($event)" class="dash-nav-btn"
        ><v-icon class="close-icon" color="secondary">mdi-close</v-icon></v-btn
      >
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  props: {
    anchors: {
      type: Array,
      default: () => [],
    },
    activeSection: {
      type: Number,
      default: null,
    },
    open: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({}),
  methods: {
    handleClick(value) {
      this.$emit("route-click", value)
      this.$emit("nav-click")
    },
    handleNavClick(value) {
      this.$emit("nav-click")
    },
    handleTouch(value) {
      this.$emit("route-touch", value)
    },
  },
}
</script>

<style lang="scss" scoped>
.dash-nav-container {
  display: none;
  height: 100%;
  width: 100%;

  .nav-drawer {
    background-color: var(--primary);
    width: 100% !important;
    display: flex;
    justify-content: center;
  }
}

.logo {
  position: absolute;
  top: 20%;
  left: 5%;
  height: 5%;
  width: 90%;
  background: url("../assets/logoW.png") no-repeat center;
  background-size: contain;

  .feather {
    position: absolute;
    bottom: 110%;
    left: 5%;
    height: 120%;
    width: 90%;
    background: url("../assets/feather.png") no-repeat center;
    background-size: contain;
  }
}

.tabs-container {
  height: 100%;
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.active {
  transition: 0.25s ease-in-out;
  position: relative;
  h3 {
    color: var(--light) !important;
  }
}

.active h3:before {
  content: "";
  background-color: var(--light);
  position: absolute;
  height: 5px;
  width: 100% !important;
  z-index: 5;
  bottom: -10px;
}

.nav-menu {
  font-size: 1.6rem !important;
  letter-spacing: 2px;
  color: var(--primary-light) !important;
  transition: 0.25s ease-in-out;
  text-align: left !important;
  margin-bottom: 2rem;

  &:hover {
    color: var(--light);
  }
}

.reservation {
  color: var(--secondary) !important;
  border: 1px solid var(--secondary);
}

@media (max-width: 600px) {
  .dash-nav-container {
    position: absolute;
    display: flex !important;
    justify-content: center;
    align-items: center;
    transition: 0.25s;
  }

  .tall-dash-nav {
    height: 100vh;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 99999;
  }

  .dash-nav-btn {
    display: block;
    position: absolute;
    top: 3rem;
    right: 3rem;
    z-index: 99;
  }
}

@media screen and (max-height: 400px) and (max-width: 850px) {
  .dash-nav-container {
    .nav-drawer {
      height: 90% !important;
      width: 50% !important;
    }
  }

  .dash-nav-container {
    position: absolute;
    display: flex !important;
    justify-content: center;
    align-items: center;
  }
  .dash-nav-btn {
    display: block;
    position: absolute;
    top: 1rem;
    right: 2rem;
    z-index: 999999;
  }
}
</style>
