<template>
  <div class="flex justify-center content-center">
    <div
      class="
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
          px-6
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
          <p class="mb-3 font-normal text-white">
            Un email sera envoyé à l'adress indiqué afin de vous identifier.
            Merci de consulter également vos spams.
          </p>
        </div>
      </div>

      <div
        class="
          border-t-2 border-neutral-100
          px-6
          py-3
          dark:border-neutral-600 dark:text-neutral-50
        "
      >
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
    updateValue: function (value) {
      this.$emit("input", value);
    },

    // MODAL / FORM
    submitForm() {
      axios
        .post("/contact", this.form)
        .then((res) => {
          //Perform Success Action
          console.log("res", res);
          this.status = "res";
          this.$router.push("/");
          this.success = true;
          setTimeout(() => {
            this.showModal = false;
          }, 3000);
        })
        .catch((error) => {
          // error.response.status Check status code
          console.log("error", error);
          this.status = "error";
          this.success = true;
        })
        .finally(() => {
          //Perform action in always
        });
    },
  },
};
</script>

<style scoped lang="scss">
.card__section {
  background-color: #32325a !important;
}
</style>
