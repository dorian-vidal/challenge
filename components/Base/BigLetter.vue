<template>
  <div class="flex items-center justify-center base-big-letter">
    <span class="text-5xl font-black text-center text-transparent break-all base-big-letter__item md:text-8xl lg:text-9xl bg-clip-text bg-gradient-to-b from-primary-vert1 to-pink animate-text opacity-30 ">{{
      text
    }}</span>
  </div>
</template>

<script>
export default {
  name: "BigLetter",
  props: {
    text: {
      type: String,
      required: false,
      default: "1",
    },
  },
};
</script>

<style lang="scss">
.base-big-letter {
  &__item {
    opacity: 0.3 !important;
    -moz-opacity:0.5 !important;
  }
}
</style>
