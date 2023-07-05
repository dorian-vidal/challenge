<template>
  <div class="main">
    <c-header class="" />
    <c-card></c-card>
  </div>
</template>
<script>
export default {
  name: "StrateHeroHome",
  props: {
    id: {
      type: String,
      required: false,
    },
    backgroundUrl: {
      type: String,
      required: false,
      default: "/img/photography/child+bus_homepage_green2pink.png",
    },
    title: {
      type: String,
      required: false,
      default: "Duis esse est adipisicing elit veniam",
    },
    subtitle: {
      type: String,
      required: false,
      default: "amet ipsum dolore.",
    },
    ctaLabel: {
      type: String,
      required: false,
      default: "En savoir plus.",
    },
  },
  data: function () {
    return {
      isOpen: false,
    };
  },
};
</script>

<style lang="scss">
.main {
  height: 100vh;
  background-color: #1b1b38;
}
// .strate-hero-home {
//   background-position: center top;
//   background-repeat: no-repeat;
//   background-size: cover;
// }
</style>
