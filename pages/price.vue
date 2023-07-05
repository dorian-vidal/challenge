<template>
  <section id="page-price" class="">
    <strate-hero
      title="Le meilleur à petit prix"
      backgroundUrl="/img/photography/hero-tarif.png"
    />

    <div class="overflow-hidden">
      <div class="mx-auto">
        <strate-tarif />
        <strate-faq title="Les questions qui reviennent souvent.">
          <base-faq-item
            v-for="itemFAQ in listQuestionsFAQ3"
            v-bind:key="itemFAQ.id"
            @emitEventFaq="selectQuestion"
            :isActive="itemFAQ.isActive"
            :id="itemFAQ.id"
            :question="itemFAQ.question"
            :answer="itemFAQ.answer"
          />
        </strate-faq>
        <strate-manage-race />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Price",

  data() {
    return {
      listQuestionsFAQ3: [
        {
          isActive: false,
          id: "question1",
          question: "Quels moyens de paiement proposez vous ?",
          answer:
            "Nous acceptons une grande partie des modes de paiements : Carte Bancaire ; Visa, MasterCard, American Express, Visa Electron, Carte Bleue, PayPal, Virement bancaire, Apple Pay, Google Pay Vous avez la possibilité d’associer différents moyens de paiements à votre compte.",
        },
        {
          isActive: false,
          id: "question2",
          question: "Quel est la durée d'engagement ? ",
          answer:
            "Les forfaits STARTER et SMART vous engagent sur 1 an d’utilisation. Le forfait Premium vous engage sur 6 mois d’utilisation. Au dela de cet engagement, vous êtes libres de résilier le service Vroom à tout moment. Malgré tout, notre objectif est de toujours vous apporter la meilleure satisfaction et que vous restiez client Vroom le plus longtemps possible.",
        },
        {
          isActive: false,
          id: "question3",
          question: "Comment je choisis le tarif qui me convient ?",
          answer:
            "Afin de vous proposer un forfait adapté, vous avez le choix entre 3 offres. STARTER, SMART et PREMIUM. Si vous avez besoin de conseils pour choisir le forfait qui correspond au mieux à votre besoin, notre équipe Vromm est à disposition pour répondre à vos questions.",
        },
      ],
    };
  },
  head() {
    return {
      bodyAttrs: {
        class: "price",
      },
    };
  },
  methods: {
    selectQuestion(payload) {
      this.listQuestionsFAQ3.forEach((elem) => {
        if (payload.id == elem.id) {
          elem.isActive = !elem.isActive;
        } else {
          elem.isActive = false;
        }
      });
    },
  },
};
</script>
