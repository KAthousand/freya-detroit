<template>
  <div class="title-container">
    <div class="svg-content">
      <SvgAnimationContainer @finished="handleFinished" />
    </div>
    <div class="title-content">
      <div class="title-photo">
        <div
          class="photo"
          :style="
            photoTrigger ? 'transform: scale(1)' : 'transform:scale(1.15)'
          "
        ></div>
      </div>
      <div class="content">
        <div
          class="content-action"
          :style="
            photoTrigger
              ? 'transform: translateY(0); opacity: 1;'
              : 'transform: translateY(100%); opacity: 0'
          "
        >
          <v-btn
            class="title-btn"
            tile
            href="https://www.exploretock.com/freya"
            target="_blank"
            >Reserve a Table</v-btn
          >
        </div>
        <div
          class="address-container"
          :style="
            photoTrigger
              ? 'transform: translateY(0); opacity: 1'
              : 'transform: translateY(100%); opacity: 0'
          "
        >
          <p>2929 E Grand Blvd, Detroit, MI 48202</p>
          <p>
            Wed - Sat from 5pm to 9pm
          </p>
          <span style="width: 1rem"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SvgAnimationContainer from "../components/svg/SvgAnimationContainer.vue"
export default {
  components: { SvgAnimationContainer },
  data: () => ({
    photoTrigger: false,
  }),
  methods: {
    handleFinished() {
      this.photoTrigger = true
    },
  },
}
</script>

<style lang="scss" scoped>
.title-container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  position: relative;
}

.svg-content {
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 99;
}

.title-content {
  height: 100%;
  width: 100%;

  .title-photo {
    overflow: hidden;
    height: 100%;
    width: 100%;
    box-shadow: 0px 20px 38px -21px rgba(0, 0, 0, 0.9);

    .photo {
      height: 100%;
      width: 100%;
      background: linear-gradient(
          to top left,
          rgba(0, 11, 17, 0.4),
          transparent 100%
        ),
        linear-gradient(to bottom right, rgba(0, 11, 17, 0.8), transparent 100%),
        url("../assets/photos/10-2021-Squash-Tart.jpg") no-repeat, center;
      background-size: cover;
      background-position: center;
      background-attachment: fixed;

      transition: 0.5s;
    }
  }

  .content {
    background: transparent;
    height: 20%;
    width: 100%;
    position: absolute;
    bottom: 0;

    .content-action {
      display: flex;
      justify-content: center;
      position: relative;
      bottom: 15rem;
      transition: 1s;
      transition-delay: 0.25s;
      z-index: 99;

      &::before {
        content: "";
        background-color: var(--light);
        height: 1px;
        width: 0%;
        position: absolute;
        top: 50%;
        left: 50%;
        animation: expand 1s forwards ease-in;
        animation-delay: 5.75s;
      }

      &::after {
        content: "";
        background-color: var(--light);
        height: 1px;
        width: 0%;
        position: absolute;
        top: 50%;
        right: 50%;
        animation: expand 1s forwards ease-in;
        animation-delay: 5.75s;
      }
    }

    .title-btn {
      height: 5rem;
      width: 20rem;
      z-index: 2;
      background-color: var(--light);
      font-size: 1.2rem;
      letter-spacing: 1.2px;
      font-weight: 500;
    }

    .address-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: var(--light);
      font-family: var(--font-body);
      transition: 1s;
      transition-delay: 0.5s;

      p {
        margin: 0;
        font-size: 1.6rem !important;
      }

      h6 {
        width: 50%;
        font-size: 1.4rem;
        font-weight: 400;
        text-align: center;
        letter-spacing: 0.5px;
      }
    }

    @keyframes expand {
      0% {
        width: 0%;
      }
      100% {
        width: 30%;
      }
    }
  }
}

@media (max-width: 600px) {
  .photo {
    background-attachment: scroll !important;
  }

  .content-action {
    bottom: 2rem !important;
  }
  .content {
    height: 30% !important;
  }
  @keyframes expand {
    0% {
      width: 0%;
    }
    100% {
      width: 45%;
    }
  }
}
</style>
