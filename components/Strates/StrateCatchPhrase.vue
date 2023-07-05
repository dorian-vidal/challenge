<template>
  <section
    class="strate-catchphrase flex md:min-h-[47.5rem] mt-32 md:mt-60 overflow-hidden lg:overflow-visible"
    :style="{ background: `${backgroundColor}` }"
  >
    <client-only>
      <div class="container relative grid items-center grid-cols-12 gap-x-8">
        <div
          :class="isInversed != false ? 'order-2' : 'order-1 w-4/5'"
          class="z-10 col-span-12 py-20 lg:col-span-8 lg:w-full"
        >
          <core-aov :delay="250">
            <div class="flex flex-col items-center t-translate-down t-fade-in">
              <p
                class="mx-auto text-2xl font-black text-left text-white uppercase lg:text-center strate-hero__title md:text-6xl"
                :class="
                  isInversed != false ? 'lg:text-center' : 'md:text-center'
                "
              >
                {{ text }}
                <br /><span :style="{ color: `${colorHighlight}` }">{{
                  textHighlight
                }}</span>
              </p>
              <p
                class="pt-2 mx-auto text-sm font-black text-center text-white uppercase strate-hero__title lg:text-md"
                v-if="subtitle"
              >
                {{ subtitle }}
              </p>
            </div>
          </core-aov>
        </div>
        <div
          class="col-span-12"
          :class="
            isInversed != false
              ? 'order-1 lg:col-span-4 left-0 lg:flex hidden'
              : 'order-2 md:col-span-4 absolute right-[-15rem] lg:right-0 max-w-[35rem] md:max-w-[60rem]  bottom-[-15rem] md:bottom-[-10rem] lg:bottom-0'
          "
        >
          <core-aov :delay="250">
            <div class=" t-fade-in"
              :class="
                isInversed != false
                  ? 'absolute left-0 lg:flex hidden  bottom-[-15rem] md:bottom-[-10rem] lg:bottom-0 t-translate-right'
                  : 't-translate-left'
              "
            >
              <img alt="Femme rose" :src="imageUrl" />
            </div>
          </core-aov>
        </div>
      </div>
    </client-only>
  </section>
</template>
<script>
export default {
  name: "StrateCatchPhrase",
  props: {
    backgroundColor: {
      type: String,
      required: false,
      default: "#A6EFED",
    },
    imageUrl: {
      type: String,
      required: false,
      default: "/img/photography/femme_rose.png",
    },
    text: {
      type: String,
      required: false,
      default: "faites comme marie pensez vous aussi à",
    },
    textHighlight: {
      type: String,
      required: false,
      default: "votre planète",
    },
    colorHighlight: {
      type: String,
      required: false,
      default: "#D176E0",
    },
    subtitle: {
      type: String,
      required: false,
    },
    isInversed: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data: function () {
    return {};
  },
};
</script>

<style lang="scss"></style>
