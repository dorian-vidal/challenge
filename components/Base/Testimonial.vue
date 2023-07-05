<template>
  <div
    class="grid h-full grid-cols-12 gap-8 p-8 mx-10 rounded-md shadow-greyDarkerLight base-testimonial bg-grey-lighter"
  >
    <div class="col-span-12 text-md">
      <p class="italic">
        {{ text }}
      </p>
      <p class="text-sm font-bold text-pink">{{ name }}</p>
      <p class="mt-2 text-xs font-thin text-pink-light">le 02 juin 2022</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Testimonial",
  props: {
    imageUrl: {
      type: String,
      required: false,
      default: "/img/photography/chauffeur6.png",
    },
    name: {
      type: String,
      required: false,
      default: "Jessica Alba",
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
