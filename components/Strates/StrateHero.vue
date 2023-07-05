<template>
  <section
    class="strate-hero w-full h-[50vh] relative mt-[-9.5rem] lg:mt-[-11rem] pt-[9.5rem] lg:pt-44"
    :style="{ backgroundImage: `url(${backgroundUrl})` }"
  >
    <client-only>
      <core-aov :delay="250">
        <div
          class="container flex items-center justify-center h-full t-translate-down t-fade-in"
        >
          <p
            class="mx-auto text-3xl font-black text-center text-white uppercase strate-hero__title md:text-5xl"
          >
            {{ title }}
          </p>
        </div>
      </core-aov>
    </client-only>
  </section>
</template>
<script>
export default {
  name: "StrateHero",
  props: {
    backgroundUrl: {
      type: String,
      required: false,
      default: "/img/photography/hero_others.png",
    },
    title: {
      type: String,
      required: false,
      default: "Duis esse est adipisicing elit veniam",
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
.strate-hero {
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
