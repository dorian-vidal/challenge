<template>
  <section class="w-full my-32 md:my-60 strate-reservations">
    <div class="container mx-auto">
      <p
        v-if="title"
        class="mx-auto mb-16 text-3xl font-bold text-center lg:mb-32 strate-big-title__text md:text-5xl"
      >
        {{ title }}
      </p>
      <client-only>
        <div
          class="flex flex-col flex-wrap items-start justify-evenly lg:flex-row"
        >
          <div
            v-if="text1"
            class="relative flex justify-center py-12 mx-auto mt-24 text-sm 4xl:mt-0 max-w-[28rem]"
          >
            <core-aov>
              <div class="absolute top-[-6rem] t-translate-up t-fade-in t-scale">
                <slot name="text1"></slot>
              </div>
            </core-aov>

            <div class="flex-col">
              <p v-if="subtitle1" class="text-xl font-bold text-center">
                {{ subtitle1 }}
              </p>
              <p class="text-center">
                {{ text1 }}
              </p>
            </div>
          </div>
          <div
            v-if="text2"
            class="relative flex justify-center py-12 mx-auto mt-24 text-sm 4xl:mt-0 max-w-[28rem]"
          >
            <core-aov :delay="200">
              <div class="absolute top-[-6rem] t-translate-up t-fade-in t-scale">
                <slot name="text2"></slot>
              </div>
            </core-aov>

            <div class="flex-col">
              <p v-if="subtitle2" class="text-xl font-bold text-center">
                {{ subtitle2 }}
              </p>
              <p class="text-center">
                {{ text2 }}
              </p>
            </div>
          </div>
          <div
            v-if="text3"
            class="relative flex justify-center py-12 mx-auto mt-24 text-sm 4xl:mt-0 max-w-[28rem]"
          >
            <core-aov :delay="300">
              <div class="absolute top-[-6rem] t-translate-up t-fade-in t-scale">
                <slot name="text3"></slot>
              </div>
            </core-aov>
            <div class="flex-col">
              <p v-if="subtitle3" class="text-xl font-bold text-center">
                {{ subtitle3 }}
              </p>
              <p class="text-center">
                {{ text3 }}
              </p>
            </div>
          </div>
          <div
            v-if="text4"
            class="relative flex justify-center py-12 mx-auto mt-24 text-sm 4xl:mt-0 max-w-[28rem]"
          >
            <core-aov :delay="400">
              <div class="absolute top-[-6rem] t-translate-up t-fade-in t-scale">
                <slot name="text4"></slot>
              </div>
            </core-aov>
            <div class="flex-col">
              <p v-if="subtitle4" class="text-xl font-bold text-center">
                {{ subtitle4 }}
              </p>
              <p class="text-center">
                {{ text4 }}
              </p>
            </div>
          </div>
        </div>
      </client-only>
    </div>
  </section>
</template>
<script>
export default {
  name: "StrateReservations",
  props: {
    title: {
      type: String,
      required: false,
    },
    subtitle1: {
      type: String,
      required: false,
    },
    subtitle2: {
      type: String,
      required: false,
    },
    subtitle3: {
      type: String,
      required: false,
    },
    subtitle4: {
      type: String,
      required: false,
    },
    text1: {
      type: String,
      required: false,
      default:
        "Précisez simplement vos coordonnées personnelles ainsi que les informations relatives à votre trajet dans le formulaire.",
    },
    text2: {
      type: String,
      required: false,
      default:
        "Vous recevrez un email avec la proposition de prix ainsi qu’un récapitulatif de votre demande. Vous acceptez la course.",
    },
    text3: {
      type: String,
      required: false,
      default:
        "Nous sélectionnons le chauffeur et le véhicule le plus adapté à vos besoins et à celui de l’enfant. Les courses peuvent commencer.",
    },
    text4: {
      type: String,
      required: false,
      default:
        "Le chauffeur et l'accompagnateur viennent chercher le(s) enfant(s) et les accompagne jusqu’à la prise en charge par un adulte.",
    },
  },
  data: function () {
    return {};
  },
};
</script>

<style lang="scss">
.strate-reservations {
  .base-big-letter__item {
    @include mq($until: tablet) {
      font-size: 15rem !important;
      line-height: 15rem !important;
    }
  }
}
</style>
