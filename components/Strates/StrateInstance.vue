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
          border border-gray-200
          rounded-lg
          shadow
          dark:bg-gray-800 dark:border-gray-700
        "
      >
        <h1 class="text-2xl font-bold text-white">
          Configurez l'accès au serveur
        </h1>
        <br />
        <p class="text-white">
          Accordez l'accès a l'utilisateur identifié par la clé publique
          suivante :
        </p>
        <br />
        <textarea
          id="message"
          rows="4"
          class="
            block
            p-2.5
            w-full
            text-sm text-gray-900
            bg-gray-50
            rounded-lg
            border border-gray-300
            focus:ring-blue-500 focus:border-blue-500
            dark:bg-gray-700
            dark:border-gray-600
            dark:placeholder-gray-400
            dark:text-white
            dark:focus:ring-blue-500
            dark:focus:border-blue-500
          "
          placeholder="Write your thoughts here..."
        ></textarea>

        <br />
        <p class="text-white">
          Préciser les coordonnées d'accès de votre utilisateur ici :
        </p>
        <br />
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
        <br />
        <p class="text-white">
          Le challenge utilisera la commande suivante pour connecter à votre
          compte :
        </p>
        <br />
        <p class="text-white">mettre props</p>
        <br />
        <div class="flex justify-between">
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
            Suite
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "StrateInstance",
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
