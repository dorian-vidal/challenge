<template>
  <div class="main">
    <c-header title="Déconnexion" class="" />
    <div class="flex justify-center content-center">
      <div
        class="
          center-content
          card__section
          max-w-xl
          p-6
          bg-white
          rounded-lg
          shadow
          dark:bg-gray-800 dark:border-gray-700
        "
      >
        <div
          v-html="error"
          v-if="error"
          class="mt-3 mb-3 p-3 bg-red-500 text-white rounded-lg"
        ></div>
        <div class="flex justify-between card__header">
          <a
            href="#"
            class="
              inline-flex
              items-center
              px-3
              py-2
              text-sm
              font-medium
              text-center text-white
              bg-blue-700
              rounded-lg
              hover:bg-blue-800
              focus:ring-4 focus:outline-none focus:ring-blue-300
              dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
            "
          >
            Retour
          </a>
          <h1 class="mb-2 text-2xl font-bold tracking-tight text-white">
            Etes vous prêt ?
          </h1>
        </div>
        <div
          class="
            mb-2
            text-2xl
            font-bold
            tracking-tight
            text-white
            border-b-2 border-neutral-100
            py-3
            dark:border-neutral-600 dark:text-neutral-50
          "
        ></div>
        <br />
        <div class="group__button">
          <button
            @click="startChallenge"
            type="email"
            name="email"
            id="email"
            class="
              bg-gray-50
              border border-gray-300
              text-gray-900 text-sm
              rounded-lg
              focus:ring-blue-500 focus:border-blue-500
              block
              w-full
              p-2.5
              dark:text-white
            "
            placeholder="name@company.com"
            required
          >
            Lancer le Challenge !
          </button>
          <br />
          <div class="card__footer rounded-lg">
            <h1 class="text-xl text-center lg:text-2xl">
              Score: {{ score }}/20
            </h1>
          </div>
          <br />
          <div
            class="border border-gray-200 text-white p-2"
            v-html="description"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "StrateChallenge",
  props: {
    score: {
      type: Number,
      required: true,
      default: 0,
    },
    description: {
      type: String,
      required: false,
      default: "amet ipsum dolore.",
    },
    error: {
      type: String,
      required: false,
      default: null,
    },
  },
  data: function () {
    return {
      isOpen: false,
    };
  },
  methods: {
    startChallenge: function () {
      this.$emit("challenge");
    },
  },
};
</script>

<style lang="scss">
.main {
  height: 100vh;
  background-color: #1b1b38;
}
.card__section {
  background-color: #32325a !important;
}
.card__footer {
  background-color: #d4edda;
}
.center-content {
  position: absolute;
  top: 50%;
  width: 600px;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (max-width: 767px) {
  .center-content {
    width: fit-content !important;
  }
}
</style>
