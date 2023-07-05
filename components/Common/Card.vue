<template>
  <div class="flex justify-center content-center">
    <div v-if="success" class="mt-3 mb-3 p-3 bg-green-500 text-white rounded-lg">
      E mail envoyé avec succes !
    </div>
    <div v-if="error" class="mt-3 mb-3 p-3 bg-red-500 text-white rounded-lg">
      Erreur lors de l'envoi de l'e-mail.
    </div>
    <div
      class="center-content
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
      >
        Connexion
      </div>
      <div>
        <div>
          <input
            type="email"
            name="email"
            id="email"
            v-model="form.email"
            class="mt-3
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
          <p class="mb-3 mt-3 font-normal text-white">
            Un email sera envoyé à l'adress indiqué afin de vous identifier.
            Merci de consulter également vos spams.
          </p>
        </div>
      </div>

      <div
        class="
          border-t-2 border-neutral-100
          py-3
          dark:border-neutral-600 dark:text-neutral-50
        "
      >
        <a
          @click="sendEmail()"
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
</template>

<script>
import axios from "axios";

export default {
  name: "Card",
  props: {
    value: {
      type: String,
      required: false,
    },
  },
  data: function () {
    return {
      showModal: false,
      success: false,
      error: false,
      response: "",

      form: {
        name: "",
        lastname: "",
        phone: "",
        mail: "",
        profil: "",
        text: "",
      },
    };
  },
  methods: {
    sendEmail() {
      const email = document.getElementById('email').value;

      axios.post("https://mt4challenge.onrender.com/auth/login", this.form )
        .then((response) => {
          this.success = true;
          this.error = false;
          console.log(response)
        })
        .catch((error) => {
          this.success = false;
          this.error = true;
        });
    }
  }
};
</script>

<style scoped lang="scss">
.card__section {
  background-color: #32325a !important;
}
.center-content{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
</style>