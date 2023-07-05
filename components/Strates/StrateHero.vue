<template>
  <div class="main">
    <c-header title="Déconnexion" class="" />
    <div class="flex justify-center content-center">
      <div
        class="
          center-content
          card__section
          max-w-sm
          p-6
          bg-white
          border border-gray-200
          rounded-lg
          shadow
          dark:bg-gray-800 dark:border-gray-700
        "
      >
        <h1 class="text-2xl font-bold text-white">Connexion</h1>
        <p class="text-white">Bienvenue sur le challenge unix shell</p>
        <br />
        <p class="text-white">
          Vous allez fgdfdfhgf hgd fhdh dfhfdhd fdhfd h hf hf fd dhhfdhhfhfhf
          hfhffhdfff hfhfhfdfhdfhhfhf ffhhffhd
        </p>
        <h1 class="text-2xl font-bold text-white">Coordonnées</h1>
        <p class="text-white">Merci de renseigner vos coordonées ici.</p>

        <div>
          <input
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
          />
          <br />
          <input
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
          />
        </div>

        <div class="">
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
            ENVOYEZ !
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "StrateHero",
  props: {
    id: {
      type: String,
      required: false,
    },
    backgroundUrl: {
      type: String,
      required: false,
      default: "/img/photography/child+bus_homepage_green2pink.png",
    },
    title: {
      type: String,
      required: false,
      default: "Duis esse est adipisicing elit veniam",
    },
    subtitle: {
      type: String,
      required: false,
      default: "amet ipsum dolore.",
    },
    ctaLabel: {
      type: String,
      required: false,
      default: "En savoir plus.",
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
.main {
  height: 100vh;
  background-color: #1b1b38;
}
.card__section {
  background-color: #32325a !important;
}
.center-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
