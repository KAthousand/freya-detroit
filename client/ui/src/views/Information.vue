<template>
  <div class="information-container">
    <div class="information-content">
      <div class="content-left">
        <div class="contact-information">
          <div class="contact title">
            <h3>CONTACT</h3>
          </div>
          <div class="contact-content body">
            <a href="mailto:infofreyadetroit@gmail.com"
              ><p>info@freyadetroit.com</p></a
            >

            <div class="contact-insta">
              <a
                href="https://www.instagram.com/freyadetroit/"
                target="_blank"
                rel="noreferrer"
                class="info-link"
              >
                <i class="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.facebook.com/freyadetroit/"
                target="_blank"
                rel="noreferrer"
                class="info-link"
              >
                <i class="fab fa-facebook"></i>
              </a>
            </div>
            <a href="tel:313-351-5544"
              ><p style="margin-bottom: 1rem;">(313)351-5544 *</p></a
            >
            <h6>
              * Please note that we do not answer our phone during service.
              Please be sure to leave a voicemail.
            </h6>
          </div>
        </div>
        <div class="location-information">
          <div class="location title"><h3>HOURS &amp; LOCATION</h3></div>
          <div class="location-content body">
            <p>Wednesday - Saturday 5pm to 9pm</p>
            <p>123 Address St, Detroit, MI, 48221</p>
            <v-btn
              class="location-btn"
              tile
              depressed
              target="_blank"
              href="https://www.google.com/maps/place/Freya/@42.372157,-83.0669829,15z/data=!4m5!3m4!1s0x0:0xbacfa182ac4d8bd7!8m2!3d42.372157!4d-83.0669829"
              >view on map</v-btn
            >
          </div>
        </div>
      </div>
      <div class="content-right">
        <div
          class="photo-one"
          :style="
            active
              ? 'transform: translateY(0); opacity: 1;'
              : 'transform:translateY(50%); opacity: 0;'
          "
        ></div>
        <div
          class="photo-two"
          :style="
            active
              ? 'transform: translateY(0); opacity: 1;'
              : 'transform:translateY(50%); opacity: 0;'
          "
        ></div>
        <div
          class="photo-three"
          :style="
            active
              ? 'transform: translateY(0); opacity: 1;'
              : 'transform:translateY(50%); opacity: 0;'
          "
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    activeSection: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    active() {
      if (this.activeSection === 2) {
        return true
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.information-container {
  height: 100%;
  width: 100%;
  background: linear-gradient(
      to top left,
      rgba(70, 97, 114, 0.4),
      transparent 80%
    ),
    url("../assets/information-background.gif") no-repeat center;
  background-size: cover;
  padding: 8vh 2vh 2vh 2vh;
  display: flex;
  justify-content: center;

  .information-content {
    height: 100%;
    width: 100%;
    max-width: 1400px;
    display: flex;
    justify-content: center;
    align-items: center;

    .content-left {
      height: 100%;
      width: 50%;
      display: flex;
      flex-direction: column;

      .title {
        color: var(--darker);
        position: relative;
        text-align: center;
        margin-bottom: 2rem;
        // padding-left: 3rem;

        h3 {
          font-family: var(--font-display);
          font-size: 10rem;
          line-height: 10rem;
          font-weight: 100;
          letter-spacing: 8px;
          margin-bottom: 3rem;
          position: relative;

          &::after {
            content: "";
            height: 0.5rem;
            width: 50%;
            background-color: var(--darker);
            position: absolute;
            bottom: -2rem;
            // bottom: 2.5rem;
            left: 25%;
          }
        }
      }

      .body {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        // text-align: center;
        color: var(--darker);

        a {
          text-decoration: none;
          color: var(--darker);
        }

        p {
          margin: 0;
          font-size: 2.4rem;
          font-style: italic;
        }
      }

      .contact-information,
      .location-information {
        height: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .contact-information {
        margin-left: 60%;
        width: 50%;

        .contact-content {
          width: 80%;
        }

        .contact-insta {
          font-size: 4.8rem;
          width: 100%;
          padding: 1rem;
          display: flex;
          justify-content: space-evenly;
          margin-bottom: 0.5rem;
          a {
            background-color: var(--darker);
            padding: 0.2rem 1.75rem 0rem 1.75rem;
            border-radius: 20%;
            color: var(--beige);
          }
        }
        h6 {
          width: 90%;
          margin: 0 auto;
          font-size: 1.6rem;
          line-height: 1.8rem;
          letter-spacing: 0.25px;
        }
      }

      .location-information {
        justify-content: flex-start;
        align-items: flex-start;
        padding-left: 2%;
        padding-right: 35%;
        margin-left: 15%;

        .location-content {
          width: 100%;
          text-align: left;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          .location-btn {
            background-color: var(--darker);
            color: var(--beige);
            height: 5rem;
            width: 20rem;
            font-size: 1.6rem;
            letter-spacing: 2px;
            font-weight: 500;
            margin-top: 2rem;
            transition: 0.5s;

            &:hover {
              color: var(--light);
            }
          }
        }
      }
    }

    .content-right {
      // border: 1px solid red;
      height: 100%;
      width: 50%;
      position: relative;

      .photo-one {
        position: absolute;
        top: calc(40% - 25rem);
        left: calc(50% - 25rem);
        // border: 2px solid blue;
        height: 60rem;
        width: 50rem;
        border-top-left-radius: 50%;
        border-top-right-radius: 50%;
        background: url("../assets/photos/diningRoom.jpg") no-repeat center;
        background-size: cover;
        transition: 1s;
        transition-delay: 0.75s;

        &::after {
          border: 2px solid var(--light);
          content: "";
          height: 100%;
          width: 100%;
          position: absolute;
          left: 10%;
          top: 8%;
          border-top-left-radius: 50%;
          border-top-right-radius: 50%;
          z-index: 1;
        }
      }
      .photo-two {
        position: absolute;
        top: 52%;
        right: 70%;
        height: 40rem;
        width: 33rem;
        background: url("../assets/photos/10-2021-Chicken-Roulade.jpg")
          no-repeat center;
        background-size: cover;
        background-position: -220px;
        border-top-left-radius: 30%;
        border-top-right-radius: 30%;
        border-bottom-left-radius: 30%;
        border-bottom-right-radius: 30%;
        z-index: 2;
        transition: 1s;
        transition-delay: 1s;
      }
      .photo-three {
        position: absolute;
        top: 12%;
        right: 140%;
        // border: 2px solid blue;
        height: 30rem;
        width: 28rem;
        border-top-left-radius: 50%;
        border-top-right-radius: 50%;
        background: url("../assets/photos/bread.jpg") no-repeat center;
        background-size: cover;
        transition: 1s;
        transition-delay: 0.5s;
      }
    }
  }
}
</style>
