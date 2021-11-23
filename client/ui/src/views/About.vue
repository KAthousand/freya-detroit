<template>
  <div class="about-container">
    <div class="content-container">
      <div class="background-photo"></div>
      <div class="about-content">
        <div class="title">
          <h3>OUR MENU</h3>
        </div>
        <div class="menu-description">
          <div class="menu-item top">
            <div
              class="photo one"
              :style="
                active
                  ? 'transform: translateY(0); opacity: 1;'
                  : 'transform:translateY(50%); opacity: 0;'
              "
            ></div>
            <h5
              :style="
                active
                  ? 'transform: translateY(0); opacity: 1;'
                  : 'transform:translateY(50%); opacity: 0;'
              "
            >
              We offer a multi-course dining experience featuring quality
              ingredients cultivated by some of the most talented farmers,
              fishmongers, foragers, and butchers in Southeast Michigan.
            </h5>
          </div>

          <div class="menu-item middle">
            <div
              class="photo two"
              :style="
                active
                  ? 'transform: translateY(0); opacity: 1;'
                  : 'transform:translateY(50%); opacity: 0;'
              "
            ></div>
            <h5
              :style="
                active
                  ? 'transform: translateY(0); opacity: 1;'
                  : 'transform:translateY(50%); opacity: 0;'
              "
            >
              Guests can select from omnivore, pescatarian, or vegan tasting
              menus, with beverage pairings (including non-alcoholic) available.
              The decor and cuisine will offer a nod to Scandinavian design and
              techniques of preservation.
            </h5>
          </div>

          <div class="menu-item bottom">
            <span>everyone</span>
            <h5>
              deserves to be taken care of and treated to a magical night of
              artistic food and beverage, and we are excited to celebrate you
              soon!
            </h5>
          </div>
        </div>
      </div>

      <div class="background-photo"></div>
    </div>
    <div class="photo-three"></div>
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
      if (this.activeSection === 1) {
        return true
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.about-container {
  height: 100%;
  width: 100%;
  background-color: var(--primary-dark);
  position: relative;
  display: flex;
  justify-content: center;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(
        to top left,
        rgba(53, 25, 51, 0.5),
        transparent 80%
      ),
      linear-gradient(to top right, rgba(53, 25, 51, 0.5), transparent 80%);
    background-color: var(--primary-dark);
    opacity: 0.2;
    z-index: 3;
  }

  .content-container {
    height: 100%;
    width: 100%;
    max-width: 1400px;
    display: flex;
  }

  .about-content {
    height: 100%;
    width: 100%;
    padding: 2vh 0 2vh 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    z-index: 3;

    .title {
      position: absolute;
      left: 8%;
      top: 4%;
      // border: 1px solid blue;
      justify-content: flex-start;

      h3 {
        font-family: var(--font-display);
        font-weight: 800;
        color: var(--light);
        text-align: center;
        padding: 1rem;
        line-height: 9rem;
        font-size: 9rem;
        font-weight: 500;
        letter-spacing: 14px;
      }
    }
    .menu-description {
      margin-top: 7rem;
      height: 100%;
      width: 100%;
      padding: 1rem;
      z-index: 3;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      align-items: center;

      h5 {
        width: 30%;
        padding: 1rem;
        color: var(--light);
        font-weight: 800;
        padding: 1rem;
        font-style: italic;
        line-height: 2.4rem;
        font-size: 1.8rem;
        font-weight: 500;
        letter-spacing: 1.2px;
        margin: 0 2rem;
      }

      .menu-item {
        height: 100%;
        width: 100%;
        padding: 0;
        display: flex;
        flex-direction: row-reverse;
        justify-content: center;
        align-items: center;
        position: relative;
        overflow: hidden;

        .photo {
          height: 100%;
          width: 60rem;
          box-shadow: 0px 20px 38px -22px rgba(0, 0, 0, 0.6);
        }
      }

      .top {
        justify-content: flex-start;
        margin-right: 30rem;
        margin-bottom: 1.5rem;
        height: 80%;

        &::after {
          content: "";
          position: absolute;
          height: 75%;
          width: 99%;
          right: 1rem;
          border: 2px solid var(--light);
        }

        .photo {
          height: 80%;
          transition: 0.85s;
          transition-delay: 0.75s;
        }

        h5 {
          margin-right: 10rem;
          transition: 1s;
          transition-delay: 0.5s;
        }
      }

      .middle {
        flex-direction: row;
        justify-content: space-between;
        position: absolute;
        margin-top: 22rem;
        margin-right: 4rem;
        width: 70%;
        height: 50%;
        z-index: 2;

        &::after {
          content: "";
          position: absolute;
          height: 40%;
          width: 88%;
          right: 1rem;
          border: 2px solid var(--light);
        }

        h5 {
          width: 40%;
          transition: 0.5s;
          transition-delay: 0.5s;
        }

        .photo {
          height: 80%;
          width: 42rem;
          margin-left: 10rem;
          margin-right: 3rem;
          z-index: 3;
          transition: 0.75s;
          transition-delay: 0.75s;
        }
      }

      .bottom {
        margin-top: 4rem;
        justify-content: flex-end;

        h5,
        span {
          font-size: 1.8rem;
          position: absolute;
          font-style: italic;
          font-weight: 500;
          font-size: 4rem;
          line-height: 5rem;
          margin-top: 20rem;
          margin-left: 24rem;
          width: 50%;
          z-index: 4;
        }

        h5 {
          text-indent: 30rem;
        }

        span {
          font-family: var(--font-display);
          color: var(--light);
          font-size: 10rem;
          font-weight: 300;
          font-style: normal;
          letter-spacing: 10px;
          margin-top: 0rem;
          margin-left: 20rem;
        }
      }
    }
  }

  .one {
    bottom: 2%;
    right: 2%;
    background: linear-gradient(
        to top right,
        rgba(0, 25, 40, 0.2),
        transparent 100%
      ),
      linear-gradient(to top left, rgba(0, 25, 40, 0.3), transparent 100%),
      url("../assets/photos/10-2021-Blackberry-Cavatelli.jpg") no-repeat center;
    background-size: cover;
  }

  .two {
    bottom: 0%;
    right: 31%;
    // border-radius: 100%;
    background: linear-gradient(
        to top right,
        rgba(0, 25, 40, 0.4),
        transparent 100%
      ),
      linear-gradient(to top left, rgba(0, 25, 40, 0.3), transparent 100%),
      url("../assets/photos/10-2021-Tuna.jpg") no-repeat center;
    background-size: cover;
  }

  .photo-three {
    position: absolute;
    height: 25%;
    width: 100%;
    bottom: 0;
    left: 0;

    background: linear-gradient(
        to right,
        rgba(0, 25, 40, 0.6),
        transparent 100%
      ),
      linear-gradient(to top left, rgba(0, 25, 40, 0.7), transparent 100%),
      url("../assets/photos/10-2021-Panzanella.jpg") no-repeat center;
    background-size: cover;
    background-position: center;
  }
}
</style>
