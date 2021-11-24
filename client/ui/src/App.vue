<template>
  <v-app id="app" @wheel.prevent @scroll.prevent>
    <v-main>
      <Nav
        style="position: absolute;"
        :anchors="anchors"
        :activeSection="activeSection"
        @route-click="handleRouteClick"
        @nav-click="handleNavClick"
      />
      <Drawer
        :open="open"
        :anchors="anchors"
        :activeSection="activeSection"
        @route-click="handleRouteClick"
        @nav-click="handleNavClick"
        @route-touch="handleRouteTouch"
      />

      <div class="layout-content" id="layout-cont" ref="layoutContent">
        <section class="fullpage" id="home" ref="home" style="margin-top: 0">
          <Title :active-section="activeSection" />
        </section>
        <section class="fullpage" id="about" ref="about">
          <About :activeSection="activeSection" />
        </section>
        <section class="fullpage" id="information" ref="information">
          <Information :activeSection="activeSection" />
        </section>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import Vue from "vue"
import { getCssVariableValue } from "./utils/getCssVariableValue"
import Drawer from "./components/Drawer.vue"
import Nav from "./components/Nav.vue"
import About from "./views/About.vue"
import Information from "./views/Information.vue"
import Title from "./views/Title.vue"

export default Vue.extend({
  components: { Drawer, Nav, Title, About, Information },
  name: "App",
  data: () => ({
    open: false,
    inMove: false,
    activeSection: 0,
    offsets: [],
    touchStartY: 0,
    anchors: ["home", "about", "information"],
    layoutScrollTop: 0,
  }),
  beforeMount() {
    // Sync color palette variables with the vuetify theme so we can use css variables and vuetify theme colors interchangeably
    this.$vuetify.theme.themes.light.primary = getCssVariableValue("--primary")
    this.$vuetify.theme.themes.light.secondary = getCssVariableValue(
      "--secondary"
    )
  },
  methods: {
    handleNavClick() {
      console.log("clicked")
      this.open = !this.open
    },

    handleRouteClick(value) {
      this.scrollToSection(value, true)
    },

    handleRouteTouch(value) {
      this.activeSection = value
      const layout = document.querySelector("#layout-cont")
      const activeRef = this.anchors[value]
      const el = this.$refs[activeRef]
      const elTopPos = el.getBoundingClientRect().top
      console.log(elTopPos)
      layout.scrollBy({ top: elTopPos, behavior: "smooth" })
    },

    calculateSectionOffsets() {
      let sections = document.getElementsByTagName("section")
      let length = sections.length

      for (let i = 0; i < length; i++) {
        let sectionOffset = sections[i].offsetTop
        this.offsets.push(sectionOffset)
      }
    },
    handleMouseWheel: function(e) {
      if (e.wheelDelta < 30 && !this.inMove) {
        this.moveNext()
      } else if (e.wheelDelta > 30 && !this.inMove) {
        this.movePrevious()
      }

      e.preventDefault()
      return false
    },
    handleMouseWheelDOM: function(e) {
      if (e.detail > 0 && !this.inMove) {
        this.moveNext()
      } else if (e.detail < 0 && !this.inMove) {
        this.movePrevious()
      }

      return false
    },
    movePrevious() {
      this.inMove = true
      this.activeSection -= 1

      if (this.activeSection < 0) {
        this.activeSection = this.anchors.length - 1
      }
      this.scrollToSection(this.activeSection, true)
    },
    moveNext() {
      this.inMove = true
      this.activeSection += 1
      if (this.activeSection > this.anchors.length - 1) {
        this.activeSection = 0
      }
      this.scrollToSection(this.activeSection, true)
    },

    scrollToSection(id, force = false) {
      if (this.inMove && !force) return false

      this.activeSection = id
      this.inMove = true

      document
        .getElementsByTagName("section")
        [id].scrollIntoView({ behavior: "smooth" })

      setTimeout(() => {
        this.inMove = false
      }, 400)
    },

    touchStart(e) {
      e.preventDefault()

      this.touchStartY = e.touches[0].clientY
    },

    touchMove(e) {
      if (this.inMove) return false
      e.preventDefault()

      const currentY = e.touches[0].clientY

      if (this.touchStartY < currentY) {
        this.moveDown()
      } else {
        this.moveUp()
      }

      this.touchStartY = 0
      return false
    },
  },

  created() {
    this.calculateSectionOffsets()

    window.addEventListener("DOMMouseScroll", this.handleMouseWheelDOM) // Mozilla Firefox
    window.addEventListener("mousewheel", this.handleMouseWheel, {
      passive: false,
    }) // Other browsers

    // window.addEventListener("touchstart", this.touchStart, { passive: false }) // mobile devices
    // window.addEventListener("touchmove", this.touchMove, { passive: false }) // mobile devices
  },
  destroyed() {
    window.removeEventListener("mousewheel", this.handleMouseWheel, {
      passive: false,
    }) // Other browsers
    window.removeEventListener("DOMMouseScroll", this.handleMouseWheelDOM) // Mozilla Firefox

    // window.removeEventListener("touchstart", this.touchStart) // mobile devices
    // window.removeEventListener("touchmove", this.touchMove) // mobile devices
  },
})
</script>

<style lang="scss">
@import url("./styles/_fonts.scss");
@import url("./styles/_global.scss");
@import url("./styles/_color-palette.scss");

#app {
  width: 100vw;
  overflow-x: hidden;
}

// .v-application--wrap {
//   -webkit-perspective: 1000;
// }

.layout-content {
  height: 100vh;
  width: 100vw;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  // -ms-overflow-style: none;
  scrollbar-width: none;
}

.layout-content::-webkit-scrollbar {
  display: none;
}

.fullpage {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
