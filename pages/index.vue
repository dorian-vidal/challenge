<template class="home">
  <div class="" id="page-home">
    <strate-hero-home
      title="Le meilleur de la mobilité pour votre enfant"
      subtitle
    />

    <!----------/ start main /---------->
    <!-- <div class="overflow-hidden">
      <div class="mx-auto">
        <strate-big-title
          text="Confiez votre enfant en toute sécurité !"
          class="md:-mb-32"
        />
        <strate-advantages
          title="Un accompagnement indispensable"
          text="Vromm vous assure un service complet et entièrement sécurisé, nous choisissons rigoureusement nos chauffeurs et vous assure un accompagnement en toute confiance lors des trajets de vos enfants."
          :isInversed="false"
        />
        <strate-advantages
          title="Gagnez du temps dans votre journée."
          text="Vous êtes un parent avec un emploi du temps très chargé et vous courrez tout les jours pour emmener votre enfant à ses défférentes activités ? Prenez votre temps et ne renversez plus votre café sur votre chemise en le buvant trop vite, faites confiance à Vroom pour plus de sérénité."
          imageUrl="/img/photography/strate_advantage2.png"
          ctaLabel="Télécharger l'application"
          ctaUrl="#"
          :isInversed="true"
        />
        <strate-reservations title="Comment réserver ?">
          <template v-slot:text1><base-big-letter text="1" /></template>
          <template v-slot:text2><base-big-letter text="2" /></template>
          <template v-slot:text3><base-big-letter text="3" /></template>
          <template v-slot:text4><base-big-letter text="4" /></template>
        </strate-reservations>
        <strate-catchphrase
          backgroundColor="#E0A5EA"
          imageUrl="/img/photography/man_1.png"
          text="vroom s'engage pour une mobilité plus juste avec la commission la plus basse du marché, "
          textHighlight="seulement 15%."
          colorHighlight="#D176E0"
          subtitle=""
          :isInversed="true"
        />
        <strate-garantee />
        <strate-text
          text="Nos chauffeurs sont scrupuleusement séléctionnés par leur qualité de sérvice mais aussi pour leur conduite ! Nous privilégions celles et ceux qui partagent nos valeurs pour le respect de l’environnement."
        />

        <strate-catchphrase
          backgroundColor="#A6EFED"
          imageUrl="/img/photography/femme_rose.png"
          text="faites comme marie pensez vous aussi à"
          textHighlight="votre planète"
          colorHighlight="#2CC5C0"
          subtitle="vroom est un acteur eco-responsable"
          :isInversed="false"
          class="mb-32 md:mb-60"
        />

        <client-only>
          <strate-testimonials
            title="Ils sont ravis !"
            subtitle="Quelques témoignages de parents qui nous font confiance."
          >
          </strate-testimonials>
        </client-only>

        <strate-cities />

        <strate-big-title
          text="Rejoindre notre super team Vroom"
          class="md:-mb-32"
        />
        <strate-advantages
          title="Faites parti de l'équipe"
          text="Rejoingnez la team Vroom et faites parti de l’aventure. Nous recherchons en permanence à renforcer notre super équipe. Remplissez notre formulaire et notre équipe se chargera de prendre contact avec vous."
          :isInversed="false"
          ctaLabel="Rejoindre Vroom"
          ctaUrl="/join-us"
          imageUrl="/img/photography/strate_advantage-joinus.png"
        />
        <strate-faq title="Les questions qui reviennent souvent.">
          <base-faq-item
            v-for="itemFAQ in listQuestionsFAQ"
            v-bind:key="itemFAQ.id"
            @emitEventFaq="selectQuestion"
            :isActive="itemFAQ.isActive"
            :id="itemFAQ.id"
            :question="itemFAQ.question"
            :answer="itemFAQ.answer"
          />
        </strate-faq>
        <strate-partners />

        <strate-manage-race />
      </div>
    </div> -->

    <!----------/ end main /---------->
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Home",
  transition: "home",

  computed: {
    ...mapGetters({
      isHome: "global/getIsHome",
      header: "global/getGlobal",
      screen: "global/getScreen",
    }),
  },

  data() {
    return {
      currentSlug: "home",
      page: this.$route.name,
      showModal: false,
      listQuestionsFAQ: [
        {
          isActive: false,
          id: "question1",
          question: "Qu’est ce que Vroom ?",
          answer:
            "Vroom est un service de chauffeur qui s’occupe de votre enfant. Ce dernier pourra aller à son cours de sport, de théâtre ou à l’école sans encombre avec un service de qualité. ",
        },
        {
          isActive: false,
          id: "question2",
          question: "Puis-je utiliser ce service partout en France ?",
          answer:
            "Le service est utilisable dans toute la France, à la fois dans les grandes, moyennes et petites villes. Lancez l’application pour voir les chauffeurs disponibles pour votre course. ",
        },
        {
          isActive: false,
          id: "question3",
          question: "Le service me permet-il de programmer plusieurs courses ?",
          answer:
            "Grace à son application complète, Vroom vous permet de composer une ou plusieurs courses sur différentes dates et lieux. Le système de programmation se fait via un calendrier vous permettant une meilleure utilisation et visibilité de vos courses.",
        },
        {
          isActive: false,
          id: "question4",
          question: "Quel est le délais de réservation ?",
          answer:
            "Vous obtenez une réponse dans les plus brefs délais. Nos chauffeurs peuvent mettre entre quelques minutes et 2h maximum pour les courses programmés.",
        },
        {
          isActive: false,
          id: "question5",
          question: "Y a t il un nombre maximal d’enfant par véhicule ?",
          answer:
            "Cela dépend de votre commande. Nos plus gros véhicules peuvent embarquer jusqu’à 8 enfants.",
        },
        {
          isActive: false,
          id: "question6",
          question:
            "Puis-je résilier ou modifier ma course au dernier moment ?",
          answer:
            "Vous devez résilier votre course en amont afin de laisser le temps au chauffeur de réorganiser ses courses. Il est preférable pour cela de résilier 24h avant le debut de la prise en charge. (Il vous sera soustrait un pourcentage de 10% pour gestion de dossier).",
        },
        {
          isActive: false,
          id: "question7",
          question:
            "À partir de quel age mon enfant peut-il vous être confié ?",
          answer:
            "Nous prenons en charge les enfants à partir de 10 ans. Et pour la sécurité de chaque enfant nous avons si nécéssaire des sièges rehausseurs à disposition.",
        },
        {
          isActive: false,
          id: "question8",
          question:
            "Un accompagnant s’occupe-t-il de mon enfant une fois à destination ?",
          answer:
            "Le chauffeur est toujours accompagné d'un accompagnateur, et c'est ce dernier qui s'occupera de votre enfant jusqu'à sa destination en toute sécurité.",
        },
      ],
    };
  },
  head() {
    return {
      bodyAttrs: {
        class: "homepage",
      },
    };
  },
  methods: {
    selectQuestion(payload) {
      this.listQuestionsFAQ.forEach((elem) => {
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

<style>
.home {
  background-color: #1b1b38 !important;
}
/* .home-enter-active,
.home-leave-active {
  transition: opacity 0.5s;
}
.home-enter,
.home-leave-active {
  opacity: 0;
} */
</style>
