<template>
  <div class="main">
    <c-header title="Déconnexion" class="" />
    <div
      v-if="success"
      class="mt-3 mb-3 p-3 bg-green-500 text-white rounded-lg"
    >
      Requête reussie !
    </div>
    <div v-if="error" class="mt-3 mb-3 p-3 bg-red-500 text-white rounded-lg">
      Erreur lors de l'envoi de l'e-mail.
    </div>
    <div class="flex justify-center content-center">
      <div
        aria-disabled="false"
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
          disabled
          id="message"
          rows="4"
          v-model="user.sshPublicKey"
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
        ></textarea>

        <br />
        <p class="text-white">
          Préciser les coordonnées d'accès de votre utilisateur ici :
        </p>
        <br />
        <div>
          <input
            type="text"
            name="host"
            v-model="user.host"
            id="host"
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
            placeholder="host"
            required
          />
          <br />
          <input
            type="text"
            name="username"
            v-model="user.username"
            id="username"
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
            placeholder="exemple@company.com"
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
            @click="sendForm"
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
            Envoyer
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "StrateInstance",
  props: {
    user: {
      sshPublicKey: {
        type: String,
        required: true,
      },
      host: {
        type: String,
        required: true,
      },
      username: {
        type: String,
        required: true,
      },
    },
    token: {
      type: String,
      required: true,
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
      success: false,
      error: false,
    };
  },

  methods: {
    sendForm() {
      this.$emit("update-parent-data", this.user);

      console.log(this.user);
      const formData = {
        host: this.user.host,
        username: this.user.username,
      };
      console.log(formData);
      axios
        .patch(
          "https://mt4challenge.onrender.com/challenge/new-instance",
          formData,
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${this.token}`,
            },
          }
        )
        .then((response) => {
          this.success = true;
          this.error = false;
          console.log("Requête POST réussie", response);
        })
        .catch((error) => {
          this.success = false;
          this.error = true;
          console.error("Erreur lors de la requête POST", error);
        });
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
.center-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
