<template>
  <div class="main">
    <c-header title="Déconnexion" class="" />
    <div
      v-if="success"
      class="mt-3 mb-3 p-3 bg-green-500 text-white rounded-lg"
    >
      Inscription validée
    </div>
    <div v-if="error" class="mt-3 mb-3 p-3 bg-red-500 text-white rounded-lg">
      {{ error_msg }}
    </div>
    <div class="flex justify-center content-center">
      <div class="center-content card__section p-6 bg-white rounded-lg shadow">
        <h1 class="text-2xl font-bold text-white mb-3">Consignes</h1>
        <p class="text-white mb-3">Bienvenue sur le challenge unix shell</p>
        <h1 class="text-2xl font-bold text-white">Coordonnées</h1>
        <p class="text-white mb-3">Merci de renseigner vos coordonées ici.</p>
        <div>
          <input
            type="text"
            name="first_name"
            id="first_name"
            v-model="user.first_name"
            class="
              bg-gray-50
              border border-gray-300
              text-gray-900 text-sm
              rounded-lg
              focus:ring-blue-500 focus:border-blue-500
              block
              w-full
              p-2.5
              mb-3
              dark:text-white
            "
            placeholder="Prénom"
          />
          <input
            type="text"
            v-model="user.last_name"
            name="last_name"
            id="last_name"
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
            placeholder="Nom"
          />
        </div>
        <br />
        <div class="">
          <button
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
            ENVOYEZ !
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "StrateHero",
  props: {
    user: {
      first_name: {
        type: String,
        required: true,
      },
      last_name: {
        type: String,
        required: true,
      },
    },
  },
  data: function () {
    return {
      button_send: true,
      isOpen: false,
      success: false,
      error: false,
      error_msg: null,
    };
  },
  computed: {},
  methods: {
    sendForm() {
      const formData = {
        email: this.$route.query.email,
        first_name: this.user.first_name,
        last_name: this.user.last_name,
        promo_slug: this.$route.query["promo-slug"],
      };
      console.log(formData);
      axios
        .post("https://mt4challenge.onrender.com/auth/register", formData, {
          headers: {
            Accept: "application/json",
          },
        })
        .then((response) => {
          if (this.user.first_name.length > 0) {
            this.button_send = false;
          }
          this.success = true;
          this.error = false;
          console.log("Requête POST réussie", response);
          this.$router.push(`/me?token=${response.data.token}`);
        })
        .catch((error) => {
          this.success = false;
          this.error = true;
          this.error_msg = "Une erreur est survenue.";
          if (error.response.data.message[0] === "INVALID_FIRST_NAME") {
            this.error_msg = "Votre prénom n'est pas valide.";
          }
          if (error.response.data.message[0] === "INVALID_LAST_NAME") {
            this.error_msg = "Votre nom n'est pas valide.";
          }
          if (error.response.data.message === "INVALID_PROMO_SLUG") {
            this.error_msg = "La promo donnée n'existe pas.";
          }
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
@media (max-width: 767px) {
  .center-content {
    width: fit-content !important;
  }
}
</style>
