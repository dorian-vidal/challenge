<template>
  <section class="strate-testimonials">
    <div
      class="flex flex-col items-center justify-center h-full mx-auto max-w-container-3xl"
    >
      <client-only>
        <div class="container text-center">
          <core-aov :delay="250">
            <p
              class="mx-auto mb-16 text-3xl font-bold text-center strate-testimonials__title t-translate-down t-fade-in"
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
            <slot />

          </carousel>
        </core-aov>
      </client-only>
    </div>
  </section>
</template>
<script>
export default {
  name: "StrateTestimonialsPro",
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
