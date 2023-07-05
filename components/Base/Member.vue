<template>
  <client-only>
    <div
      class="grid h-full grid-cols-12 gap-8 py-8 rounded-md base-testimonial max-w-[60rem]"
    >
      <core-aov :delay="250">
        <div
          class="flex items-center justify-center col-span-4 md:col-span-3 sm:col-span-2 t-translate-down t-fade-in"
        >
          <img alt="photo d'un humain" :src="imageUrl" class="self-start mx-auto" />
        </div>
      </core-aov>
      <div
        class="flex flex-col justify-center col-span-8 text-xs md:col-span-9 sm:col-span-10"
      >
        <core-aov :delay="300">
          <p class="text-xl font-bold t-translate-down t-fade-in">{{ name }}</p>
        </core-aov>
        <core-aov :delay="350">
          <p
            class="mt-0 mb-2 font-bold text-md text-pink-light t-translate-down t-fade-in"
          >
            {{ role }}
          </p></core-aov
        >
        <core-aov :delay="400">
          <p class="mt-0 text-md t-translate-down t-fade-in">{{ text }}</p>
        </core-aov>
      </div>
    </div>
  </client-only>
</template>

<script>
export default {
  name: "Member",
  props: {
    imageUrl: {
      type: String,
      required: false,
      default: "/img/photography/testimonial1.png",
    },
    name: {
      type: String,
      required: false,
    },
    role: {
      type: String,
      required: false,
    },
    text: {
      type: String,
      required: false,
      default:
        "Laboris et deserunt veniam proident incididunt occaecat nulla sint labore reprehenderit consequat non enim culpa. Exercitation qui fugiat cupidatat laborum consequat consectetur esse cupidatat. Do irure dolore est enim. Ad dolore non tempor ea est culpa laborum mollit culpa laboris pariatur.",
    },
  },
};
</script>

<style lang="scss"></style>
