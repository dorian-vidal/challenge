<template>
  <div
    class="col-span-12 py-6 lg:col-span-4 strate-garantee__content md:flex-col md:flex md:justify-center md:items-center lg:items-start"
  >
    <client-only>
      <core-aov :delay="200">
        <div
          class="flex items-start mb-6 md:flex-col lg:flex-row md:items-center lg:items-start t-translate-down t-fade-in"
        >
          <base-use-svg :id="icon" size="xxl" color="green1" />

          <p class="mx-auto ml-4 text-xl font-bold strate-garantee__title">
            {{ title }}
          </p>
        </div>
      </core-aov>
      <core-aov :delay="300">
        <p
          class="w-11/12 text-sm md:w-2/3 lg:w-11/12 strate-garantee__text md:text-center lg:text-left t-translate-down t-fade-in"
        >
          {{ text }}
        </p>
      </core-aov>
    </client-only>
  </div>
</template>

<script>
export default {
  name: "GaranteeItem",
  data() {
    return {};
  },
  props: {
    icon: {
      type: String,
      required: false,
      default: false,
    },
    title: {
      type: String,
      required: false,
      default: "Service client et support 24/7.",
    },
    text: {
      type: String,
      required: false,
      default:
        "Un service client dédié 24h/24 et 7j/7 toujours à votre écoute pour vous aider à résoudre tout problème.",
    },
  },
  methods: {
    emitCustomEvent() {
      this.$emit("custom-event-name", { id: this.id });
    },
  },
  mounted() {},
  destroyed() {},
};
</script>

<style lang="scss"></style>
