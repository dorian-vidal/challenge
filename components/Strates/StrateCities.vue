<template>
  <section class="relative my-32 strate-cities md:my-60">
    <div
      class="container grid items-center justify-center h-full grid-cols-12 mx-auto lg:gap-14 lg:max-w-container-xl"
    >
      <client-only>
        <div
          class="order-2 col-span-12 lg:order-1 lg:col-span-7 strate-cities__image"
        >
          <core-aov :delay="250">
            <img
              alt="iphone with app"
              :src="require(`static/img/illustrations/camion+map_entier.png`)"
              class="mx-auto t-translate-down t-fade-in"
            />
          </core-aov>
        </div>
        <div
          class="order-1 col-span-12 lg:order-2 strate-cities__content lg:col-span-4"
        >
          <core-aov :delay="300">
            <p
              class="mx-auto text-xl font-bold strate-cities__title md:text-3xl t-translate-down t-fade-in"
            >
              {{ title }}
            </p>
          </core-aov>
          <core-aov :delay="350">
            <p
              class="mx-auto my-6 text-md strate-cities__paragraph t-translate-down t-fade-in"
            >
              Nous nous développons petit à petit dans toute la france, pour
              plus d'informations n'hésitez pas nous poser une question via
              notre formulaire.
            </p>
          </core-aov>
          <div class="my-10">
            <ul
              class="relative grid grid-cols-3 gap-4 strate-cities__list"
              :class="{ isCollapse: isCollapse }"
            >
              <core-aov :delay="400">
                <li class="font-bold text-pink t-translate-down t-fade-in">
                  Paris
                </li>
              </core-aov>
              <core-aov :delay="450">
                <li class="font-bold text-pink t-translate-down t-fade-in">
                  Lyon
                </li>
              </core-aov>
              <core-aov :delay="500">
                <li class="font-bold text-pink t-translate-down t-fade-in">
                  Nice
                </li>
              </core-aov>
              <core-aov :delay="550">
                <li class="font-bold text-pink t-translate-down t-fade-in">
                  Montpellier
                </li>
              </core-aov>
            </ul>
          </div>
        </div>
      </client-only>
    </div>
  </section>
</template>
<script>
export default {
  name: "StrateCities",
  props: {
    backgroundUrl: {
      type: String,
      required: false,
      default: "/img/photography/hero_others.png",
    },
    title: {
      type: String,
      required: false,
      default: "Dans quelles villes est disponible Vroom ?",
    },
    ctaLabel: {
      type: String,
      required: false,
      default: "Voir plus.",
    },
  },
  data: function () {
    return {
      isCollapse: false,
    };
  },
  methods: {
    openMenu() {
      this.isCollapse = true;
    },
  },
};
</script>

<style lang="scss">
.strate-cities {
  &__list {
    li {
      position: relative;
      margin-left: 1.5rem;
      &::before {
        content: url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='6' cy='6' r='5' stroke='%23B21DCB' stroke-width='2'/%3E%3Ccircle cx='6' cy='6' r='2' fill='%23B21DCB'/%3E%3C/svg%3E%0A");
        position: absolute;
        left: -15px;
        top: 0.1rem;
      }
    }
  }
}
</style>
