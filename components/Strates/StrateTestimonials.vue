<template>
  <section class="strate-testimonials">
    <base-big-letter text="whaaow" class="z-[0]" />

    <div
      class="flex flex-col items-center justify-center h-full mx-auto max-w-container-3xl"
    >
      <client-only>
        <div class="container text-center">
          <core-aov :delay="250">
            <p
              class="mx-auto -mt-8 text-3xl font-black text-center uppercase md:-mt-20 strate-testimonials__title md:text-5xl z-[3] t-translate-down t-fade-in"
            >
              {{ title }}
            </p>
          </core-aov>
          <core-aov :delay="350">
            <p class="text-xl t-translate-down t-fade-in">{{ subtitle }}</p>
          </core-aov>
        </div>
      </client-only>

      <client-only>
        <core-aov :delay="400">
          <carousel
            :autoplay="true"
            :autoplayHoverPause="true"
            :perPageCustom="[
              [320, 1],
              [768, 2],
              [1024, 2],
              [1440, 3],
            ]"
            :loop="true"
            :autoplayTimeout="9000"
            :speed="1000"
            paginationActiveColor="#AD0EC7"
            paginationColor="#EBEBEB"
            :paginationSize="20"
            :paginationPadding="10"
            class="max-w-full mt-24 strate-testimonials__slider t-translate-down t-fade-in"
          >
            <slide class="">
              <base-testimonial
                name="Déborah Hernandez Sekarna"
                text="Vroom à été une découverte incroyable ! Je ne m'en passe plus du tout pour ma petite fille, le temps que je gagne me permet d'aller manger un grec avec mes copines. "
              />
            </slide>
            <slide class="">
              <base-testimonial
                name="Jean-François Di Rienzo"
                text="Je suis ravi du service, je n'ai plus besoin d'aller chercher mon fils à ses activités extra-scolaires. J'ai enfin le temps de prendre du temps pour moi et aller au Yoga !"
              />
            </slide>
            <slide class="">
              <base-testimonial
                name="Françoise Martin"
                text="J'ai longtemps cherché une solution qui m'apporterait un peu d'autonomie, sans me poser des questions... VROOM MERCI !"
              />
            </slide>
            <slide class="">
              <base-testimonial
                name="Roberta Jusme"
                text="Trop contente d'avoir trouvé Vroom qui change notre vie, l'application est très sympa a utiliser. Le Chauffeur qui s'occupe souvent de mes enfants et vraiment un adorable, toujours une petit mars pour mes enfants dans sa voiture."
              />
            </slide>
            <slide class="">
              <base-testimonial
                name="Johnatan Cohen"
                text="Fantastique ! Quel gain de temps dans mes journées ! Mes enfants sont ravis du service, ils ne veulent plus prendre le bus qui n'est pas fiable.. et ils ont raison !"
              />
            </slide>
            <slide class="">
              <base-testimonial
                name="Constance Perrier"
                text="Ma fille est ravi du service, et moi aussi ! Merci Vroom quelle superbe application et service.  "
              />
            </slide>
            <slide class="">
              <base-testimonial
                name="Melissandre Daube"
                text="Enfin, un service quali, et sécurisé en qui je peux faire confiance à 100%. Je recommande désormais Vroom à toutes mes copines."
              />
            </slide>
          </carousel>
        </core-aov>
      </client-only>
    </div>
  </section>
</template>
<script>
export default {
  name: "StrateTestimonials",
  props: {
    backgroundUrl: {
      type: String,
      required: false,
      default: "/img/photography/hero_others.png",
    },
    title: {
      type: String,
      required: false,
    },
    subtitle: {
      type: String,
      required: false,
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
.strate-testimonials {
  .base-big-letter {
    &__item {
      @include mq($until: tablet) {
        font-size: 7rem !important;
      }
    }
  }
  .VueCarousel {
    &-dot {
      transition: 250ms ease;
      border-radius: 1.5rem !important;
      width: 2rem !important;
      height: 1rem !important;

      &:focus {
        outline: none !important;
      }
      &--active {
        width: 4rem !important;
      }
    }
  }
}
</style>
