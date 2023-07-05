<template>
  <core-aov :delay="500">
    <div
      class="pt-8 my-8 rounded-md px-8 md:px-[3.2rem] shadow-greyDarkerLight base-faq-item transition-colors duration-1000"
      :class="
        isActive ? 'bg-grey-light is-visible' : 'bg-grey-lighter is-visible'
      "
    >
      <div
        class="flex items-start justify-between mb-8 transition-colors duration-500 md:items-center base-faq-item__question hover:text-pink"
        :class="isActive ? 'isCollapse text-pink' : ''"
        v-on:click="toggleQuestion"
      >
        <p class="pr-6 font-semibold text-md lg:text-lg">{{ question }}</p>
        <div
          class="relative flex items-center p-2 w-[3.2rem] h-[3.2rem] rounded-full bg-grey"
        >
          <base-use-svg v-if="isActive" id="minus" color="pink" size="xl" />
          <base-use-svg v-if="!isActive" id="plus" color="pink" size="xl" />
        </div>
      </div>
      <transition>
        <div
          class="transition duration-[350ms] base-faq-item__answer text-md"
          :class="isActive ? 'max-h-[80rem] pb-8' : ' max-h-0'"
          v-visible="isActive"
        >
          <p class="text-sm font-normal md:text-md md:pr-16">
            {{ answer }}
          </p>
        </div>
      </transition>
    </div>
  </core-aov>
</template>

<script>
export default {
  name: "FAQItem",
  data() {
    return {
      isCollapse: false,
      toggleIcon: "+",
    };
  },
  props: {
    isActive: false,
    id: {
      type: String,
      required: true,
    },
    question: {
      type: String,
      required: false,
      default:
        "Sit enim aute non dolore dolore reprehenderit aute veniam ad in dolore cillum do ad ?",
    },
    answer: {
      type: String,
      required: false,
      default:
        "Laboris et deserunt veniam proident incididunt occaecat nulla sint labore reprehenderit consequat non enim culpa. Exercitation qui fugiat cupidatat laborum consequat consectetur esse cupidatat. Do irure dolore est enim. Ad dolore non tempor ea est culpa laborum mollit culpa laboris pariatur. Laborum deserunt velit ea magna quis ad in dolore adipisicing fugiat duis pariatur cillum culpa. Laboris minim deserunt ipsum irure exercitation eiusmod proident cupidatat aliquip proident. Irure enim eu aliqua ut ut est irure irure id. Nisi veniam consectetur enim laborum non magna eiusmod. Pariatur ea officia veniam laborum dolor dolor officia dolore do culpa. Sit do irure deserunt aute occaecat laborum id id id sunt officia.",
    },
  },
  methods: {
    toggleQuestion() {
      this.$emit("emitEventFaq", { id: this.id });
    },

    emitEventFaq() {
      this.$emit("emitEventFaq", { id: this.id });
    },
  },
};
</script>

<style lang="scss">
.base-faq-item {
  transform-origin: top;
  * {
    &::selection {
      background-color: transparent !important;
      color: currentColor !important;
    }
  }
  &__question {
    cursor: pointer;
    width: 100%;
    outline: none;
    transform-origin: top;
  }

  &__answer {
    transform-origin: top;
    overflow: hidden;
  }
}
</style>
