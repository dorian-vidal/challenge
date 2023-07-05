<template>
  <section id="page-driver" class="">
    <strate-hero
      title="Rejoingnez notre team"
      ctaLabel
      backgroundUrl="/img/photography/hero-joinus.png"
    />

    <div class="overflow-hidden">
      <div class="mx-auto">
        <strate-text
          class="my-32 text-left md:my-32"
          text="Vroom vous assure un service complet et entièrement sécurisé. Nous choisissons rigoureusement nos chauffeurs et nous assurons un accompagnement en toute confiance lors des trajets de vos enfants."
          title="Pourquoi rejoindre l’expérience Vroom ?"
        />
        <section class="py-12 mb-32 strate-garantee bg-grey-lighter">
          <div
            class="container grid items-start justify-center grid-cols-12 gap-10 md:justify-center"
          >
            <base-garantee-item
              v-for="garanteeItem in garanteePropsJoinUs"
              :key="garanteeItem.id"
              :title="garanteeItem.title"
              :text="garanteeItem.text"
              :icon="garanteeItem.icon"
            />
          </div>
        </section>
        <div class="flex flex-col justify-center">
          <div
            class="flex flex-col items-center justify-center mb-32 min-w-max md:mb-0"
          >
            <div
              class="grid items-center justify-around grid-cols-12 gap-y-8 lg:flex-row md:flex-row"
            >
              <div class="col-span-12 lg:col-span-4">
                <base-big-letter text="1 an" />
                <p class="text-lg font-bold text-center">D’expérience</p>
              </div>
              <div class="hidden col-span-12 lg:block md:block lg:col-span-4">
                <img
                  class="max-h-[60rem] mx-auto w-auto"
                  alt="Jeune fille"
                  :src="imageUrl"
                />
              </div>
              <div class="col-span-12 lg:col-span-4">
                <base-big-letter text="100%" />
                <p class="text-lg font-bold text-center">Sécurisé</p>
              </div>
            </div>
          </div>
          <div
            class="relative max-w-6xl py-8 mx-auto bg-white rounded-md md:shadow-greyDarkerLight"
          >
            <div class="px-8 mt-0 mb-16 text-center md:my-16">
              <p class="text-xl font-black">Je veux devenir chauffeur</p>
              <p class="text-md font-regular">
                Envoyez-nous vos coordonnées via le formulaire et un équipier
                Vroom se chargera de revenir vers vous.
              </p>
            </div>

            <form
              action="post"
              class="mt-8"
              data-success="Thanks for your enquiry, we'll be in touch shortly."
              data-error="Please fill in all fields correctly."
              @submit.prevent="submitFormJoinUs"
              v-bind:value="value"
              v-on:input="updateValue($event.target.value)"
            >
              <div class="grid px-8 md:px-12 md:grid-cols-2 md:gap-8">
                <base-input-text
                  type="text"
                  namefor="name"
                  label="Nom"
                  placeholder=" "
                  :required="true"
                  class="md:mr-8"
                  v-model="formJoinUs.name"
                />
                <base-input-text
                  type="text"
                  namefor="lastname"
                  label="Prénom"
                  placeholder=" "
                  :required="true"
                  v-model="formJoinUs.lastname"
                />
              </div>
              <div class="grid px-8 md:px-12 md:grid-cols-2 md:gap-8">
                <base-input-text
                  type="mail"
                  namefor="mail"
                  label="Adresse e-mail"
                  placeholder=" "
                  pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
                  :required="true"
                  class="md:mr-8"
                  v-model="formJoinUs.mail"
                />
                <base-input-text
                  type="tel"
                  namefor="phone"
                  label="Téléphone"
                  placeholder=" "
                  pattern="^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$"
                  :required="true"
                  v-model="formJoinUs.phone"
                />
              </div>
              <div class="px-8 md:px-12">
                <p class="text-sm font-regular">
                  En validant ce formulaire j’accepte les conditions générales
                  d’utilisation de Vroom.
                </p>
                <p class="mt-1 text-xs">
                  * Nous vous recontacterons sous 1-2 jours ouvrables.
                </p>
              </div>

              <p
                v-if="this.success"
                class="px-8 pt-8 pb-0 text-primary-vert1 md:px-12 md:pt-12"
              >
                Merci, votre message a bien été envoyé. <br />
                Un de nos conseillers vous contactera sous 72h.
              </p>
              <p
                v-if="this.error"
                class="px-8 py-8 text-red-500 md:px-12 md:py-12"
              >
                Ah ! une erreur est survenue...
              </p>

              <div
                class="flex justify-between px-8 py-8 mt-8 rounded-b md:py-12 md:px-12 bg-grey-light"
              >
                <t-button type="submit" variant="primary" class="w-full">
                  <span>Envoyer</span>
                </t-button>
              </div>
            </form>
          </div>
        </div>

        <strate-manage-race />
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "JoinUs",

  data: function () {
    return {
      success: false,
      error: false,

      formJoinUs: {
        name: "",
        lastname: "",
        phone: "",
        mail: "",
      },
      garanteePropsJoinUs: [
        {
          title: "Service client et support 24/7.",
          text: "Un service client dédié 24h/24 et 7j/7 toujours à votre écoute pour vous aider à résoudre tout problème.",
          icon: "service",
        },
        {
          title: "Votre sécurité, notre priorité",
          text: "Tenez vos proches informés sur vos itinéraires de voyage ou appelez notre service d'urgence en cas de besoin",
          icon: "call",
        },
        {
          title: "Partenaires chauffeurs les mieux notés",
          text: "Tous nos chauffeurs-partenaires sont antécédents vérifiés et formés pour offrir uniquement la meilleure expérience",
          icon: "star",
        },
      ],
    };
  },
  props: {
    imageUrl: {
      type: String,
      required: false,
      default: "/img/photography/amazing-girl.png",
    },
    value: {
      type: String,
      required: false,
    },
  },
  methods: {
    updateValue: function (value) {
      this.$emit("input", value);
    },
    // FORM
    submitFormJoinUs() {
      axios
        .post("/join-us", this.formJoinUs)
        .then((res) => {
          //Perform Success Action
          console.log("res", res);
          this.status = "res";
          // this.$router.push("/");
          this.success = true;
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

<style lang="scss">
#page-driver {
  .strate-text__title,
  .strate-text__text {
    text-align: left !important;

    @include mq($from: tablet) {
      text-align: center !important;
    }
  }
  .strate-text__title {
    font-size: 2.4rem !important;
    line-height: 3.2rem !important;

    @include mq($from: tablet) {
      text-align: center !important;
    }
  }

  .base-big-letter__item {
    @include mq($until: tablet) {
      font-size: 9.6rem !important;
      line-height: 10.6rem !important;
    }
  }
}
</style>
