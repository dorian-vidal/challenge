<template>
  <section class="my-32 strate-faq md:my-60">
    <div
      class="container flex flex-col items-center justify-center mx-auto mb-12"
    >
      <p class="mx-auto mb-16 text-3xl font-bold text-center strate-faq__title">
        {{ title }}
      </p>
    </div>
    <div class="container mx-auto">
      <div class="grid grid-cols-12 gap-x-4 gap-y-10">
        <div class="flex justify-center col-span-4 lg:col-span-2">
          <img
            class="object-contain max-w-min"
            alt="Logo partenaire"
            src="../../static/img/illustrations/partenaire__tennis.png"
          />
        </div>
        <div class="flex justify-center col-span-4 lg:col-span-2">
          <img
            class="object-contain max-w-min"
            alt="Logo partenaire"
            src="../../static/img/illustrations/partenaire__cartune.png"
          />
        </div>
        <div class="flex justify-center col-span-4 lg:col-span-2">
          <img
            class="object-contain max-w-min"
            alt="Logo partenaire"
            src="../../static/img/illustrations/partenaire__maisson-bleue.png"
          />
        </div>
        <div class="flex justify-center col-span-4 lg:col-span-2">
          <img
            class="object-contain max-w-min"
            alt="Logo partenaire"
            src="../../static/img/illustrations/partenaire__france.png"
          />
        </div>
        <div class="flex justify-center col-span-4 lg:col-span-2">
          <img
            class="object-contain max-w-min"
            alt="Logo partenaire"
            src="../../static/img/illustrations/partenaire__ministere.png"
          />
        </div>
        <div class="flex justify-center col-span-4 lg:col-span-2">
          <img
            class="object-contain max-w-min"
            alt="Logo partenaire"
            src="../../static/img/illustrations/partenaire__W.png"
          />
        </div>
      </div>
    </div>

    <!-- <div class="flex justify-around">
      <div class="">
        <img
          alt="Femme rose"
          src="../../static/img/illustrations/partenaire__tennis.png"
        />
      </div>
      <div class="">
        <img
          alt="Femme rose"
          src="../../static/img/illustrations/partenaire__cartune.png"
        />
      </div>
      <div class="">
        <img
          alt="Femme rose"
          src="../../static/img/illustrations/partenaire__maisson-bleue.png"
        />
      </div>
      <div class="">
        <img
          alt="Femme rose"
          src="../../static/img/illustrations/partenaire__france.png"
        />
      </div>
      <div class="">
        <img
          alt="Femme rose"
          src="../../static/img/illustrations/partenaire__ministere.png"
        />
      </div>
      <div class="">
        <img
          alt="Femme rose"
          src="../../static/img/illustrations/partenaire__W.png"
        />
      </div>
    </div> -->
  </section>
</template>
<script>
export default {
  name: "StrateText",
  props: {
    title: {
      type: String,
      required: false,
      default: "Nos partenaires",
    },
    text: {
      type: String,
      required: false,
      default:
        "Consequat laboris sunt incididunt ex cillum id eiusmod reprehenderit commodo do consequat tempor.Sint elit laboris fugiat deserunt sunt.Et id Lorem dolore id id sint mollit cupidatat labore nostrud enim elit id.",
    },
  },
  data: function () {
    return {};
  },
};
</script>

<style lang="scss"></style>
