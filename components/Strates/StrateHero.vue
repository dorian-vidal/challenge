<template>
  <div class="main">
    <c-header title="Déconnexion" class="" />
    <div v-if="success" class="mt-3 mb-3 p-3 bg-green-500 text-white rounded-lg">
     Inscription validée
    </div>
    <div v-if="error" class="mt-3 mb-3 p-3 bg-red-500 text-white rounded-lg">
      {{error}}
    </div>
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
        <h1 class="text-2xl font-bold text-white">Consignes</h1>
        <br />
        <p class="text-white">Bienvenue sur le challenge unix shell</p>
        <br />
        <p class="text-white">
          Vous allez fgdfdfhgf hgd fhdh dfhfdhd fdhfd h hf hf fd dhhfdhhfhfhf
          hfhffhdfff hfhfhfdfhdfhhfhf ffhhffhd
        </p>
        <br />
        <h1 class="text-2xl font-bold text-white">Coordonnées</h1>
        <br />
        <p class="text-white">Merci de renseigner vos coordonées ici.</p>
        <br />
        <div>
          <input
            type="email"
            name="email"
            v-model="user.email"
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
              dark:text-white
            "
            placeholder="name@company.com"
            required
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
            placeholder="name@company.com"
            required
          />
        </div>
        <br />
        <div class="">
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
            ENVOYEZ !
          </a>
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
    user:{
      email: {
      type: String,
      required: true,
    },
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    }
  },
  data: function () {
    return {
      isOpen: false,
      success: false,
      error: false,
    };
  },
  methods:{
    sendForm() {
      const formData = {
        email: this.user.email,
        first_name: this.user.first_name,
        last_name: this.user.last_name
      };
      console.log(formData)
      axios.post('https://mt4challenge.onrender.com/auth/register', formData,{
        headers: {
          Accept: 'application/json',
        }
      })
      .then((response) => {
        this.success = true;
        this.error = false;
        console.log('Requête POST réussie', response);
      })
      .catch((error) => {
        this.success = false;
        this.error = true;
        console.error('Erreur lors de la requête POST', error);
      });
    },
  }
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
