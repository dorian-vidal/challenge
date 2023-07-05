<template>
  <section class="mt-32 lg:mt-96 strate-manage-race md:mt-60">
    <client-only>
      <core-aov :delay="300">
        <div class="container relative z-[0] t-translate-right t-fade-in t-scale">
          <base-big-letter
            text="VROOM"
            class="absolute items-start hidden lg:flex lg:-bottom-16"
          />
        </div> </core-aov
    ></client-only>
    <div class="relative bg-gradient-r-gradient-green2pink z-[1]">
      <div class="container grid h-full grid-cols-12">
        <div
          class="flex flex-col col-span-12 py-16 lg:py-36 lg:col-span-6 md:col-span-6"
        >
          <h2
            class="max-w-md text-2xl font-extrabold text-white lg:max-w-none md:max-w-none md:text-3xl"
          >
            Gérez la course de votre enfant
          </h2>
          <div class="flex items-start justify-start w-full mt-10 md:flex-row">
            <a href="">
              <img
                alt="Logo Vroom"
                :src="require(`static/img/illustrations/dl_on_applestore.png`)"
                class="my-3 lg:my-6 mr-6 lg:w-72 lg:h-[5.6rem] md:w-72 md:h-[5.6rem] w-64 h-[4.6rem]"
              />
            </a>
            <a href="">
              <img
                :src="require(`static/img/illustrations/dl_on_playstore.png`)"
                alt=""
                class="my-3 lg:my-6 mr-6 lg:w-72 lg:h-[5.6rem] md:w-72 md:h-[5.6rem] w-64 h-[4.6rem]"
              />
            </a>
          </div>
        </div>
        <div
          class="relative justify-center hidden h-full col-span-12 py-24 lg:flex lg:col-span-6"
        >
        <client-only>
          <core-aov :delay="500">
          <div class="absolute flex flex-row lg:bottom-12 t-translate-left t-fade-in">
            <img
              alt="Logo Vroom"
              :src="require(`static/img/illustrations/3iphones-mockup-footer.png`)"
            />
          </div>
          </core-aov>
        </client-only>
          
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "StrateManageRace",
  props: {
    id: {
      type: String,
      required: false,
    },
  },
};
</script>

<style lang="scss">
.strate-manage-race {
  .base-big-letter {
    justify-content: flex-start !important;
  }
}
</style>
