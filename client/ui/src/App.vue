<template>
  <v-app>
    <!-- <v-app-bar
      fixed
      shrink-on-scroll
      scroll-threshold="500"
      scroll-target="#content"
      class="app-bar"
      prominent
      style="background-color:transparent;"
    >
      <v-toolbar-title>Title</v-toolbar-title>
      <v-spacer></v-spacer>
      <template v-slot:extension>
        <v-tabs centered class="nav">
          <v-tab>About</v-tab>
          <v-tab>Menu</v-tab>
          <v-tab>Contact</v-tab>
          <v-tab>Hours + Location</v-tab>
          <v-tab>Reservations</v-tab>
        </v-tabs>
      </template>
    </v-app-bar> -->
    <v-main class="main">
      <!-- <v-sheet class="container">
        <v-container id="content" class="overflow-y-auto">
          <Title />
          <v-container class="secondary-content">
            <About />
            <Menu />
            <Information />
          </v-container>
        </v-container>
      </v-sheet> -->
      <Logo />
      <LandingScreen />
      <InfoText />
    </v-main>
  </v-app>
</template>

<script>
import InfoText from "./components/InfoText.vue"
import Logo from "./components/Logo.vue"
import About from "./views/About.vue"
import Information from "./views/Information.vue"
import LandingScreen from "./views/LandingScreen.vue"
import Menu from "./views/Menu.vue"
import Title from "./views/Title.vue"

export default {
  components: {
    Title,
    About,
    Menu,
    Information,
    LandingScreen,
    Logo,
    InfoText,
  },
  // beforeMount() {
  //   this.$vuetify.theme.themes.light.primary = getCssVariableValue("--primary")
  //   this.$vuetify.theme.themes.light.secondary = getCssVariableValue("--secondary")
  // },
}
</script>

<style lang="scss">
@import url("./styles/_global.scss");
.nav {
  background-color: transparent;
}

.main {
  // border: 5px solid green;
  height: 100vh;
  width: 100vw;
}

.secondary-content {
  // border: 5px solid yellow;
  height: 100%;
  width: 100%;
}

.container {
  height: 100vh;
  width: 100%;
  margin: 0;
  max-width: 100vw;
  padding: 0;
}

#content {
  // border: 1px solid purple;
  position: relative;
  height: 100%;
}
</style>
