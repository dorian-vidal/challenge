<template>
  <section class="relative my-32 md:my-60 strate-member">
    <div class="container">
      <client-only>
        <core-aov :delay="250">
          <div class="mb-10 md:mb-14 t-translate-down t-fade-in">
            <p
              class="mx-auto text-3xl font-bold mb-9 strate-testimonials__title"
            >
              {{ title }}
            </p>
            <p class="text-xl ">{{ subtitle }}</p>
          </div>
        </core-aov>
      </client-only>

      <div class="mx-auto">
        <div class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2">
          <base-member
            v-for="item in list_team"
            :name="item.name"
            :key="item.id"
            :value="item.name"
            :role="item.role"
            :text="item.text"
            :imageUrl="item.photo"
          >
          </base-member>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "StrateMember",
  props: {
    backgroundUrl: {
      type: String,
      required: false,
      default: "/img/photography/hero_others.png",
    },
    title: {
      type: String,
      required: false,
    },
    subtitle: {
      type: String,
      required: false,
    },
  },
  data: function () {
    return {
      isOpen: false,
      list_team: [
        {
          photo: "/img/photography/erwan.png",
          name: "Erwan CREPIN",
          role: "Infographiste",
          text: "Spécialiste en UI / UX Design, Erwan crée tous les design Vroom en coopération avec Antoine. Du site vitrine à l’application mobile.",
        },
        {
          photo: "/img/photography/anthony.png",
          name: "Anthony ROUX",
          role: "Développeur Front-End",
          text: "Responsable du site vitrine, Anthony a développé et veillé à maintenir une bonne gestion du site vitrine. Il a également participé à la partie Front du back-office.",
        },
        {
          photo: "/img/photography/dorian.png",
          name: "Dorian VIDAL",
          role: "Développeur Front-End",
          text: "Spécialiste en Front end, Dorian a développé le front du site vitrine au back office en coopération avec Anthony.",
        },
        {
          photo: "/img/photography/priska.png",
          name: "Priska SUMAMPOW",
          role: "Développeuse Fullstack",
          text: "Responsable de l'application mobile, Priska est chargée du développement de l’application mobile Vroom pour les parents et les chauffeurs accompagnateurs.",
        },
        {
          photo: "/img/photography/ricardo.png",
          name: "Ricardo JUSME",
          role: "Développeur Fullstack",
          text: "Leader des développeurs back-end, Ricardo est fort d'une expertise très pointue en terme d'infrastructure technique, il a pensé et réalisé au mieux la partie back-end et api rest du projet.",
        },
        {
          photo: "/img/photography/davy.png",
          name: "Davy CHEN",
          role: "Développeur Back-end",
          text: "...",
        },
        {
          photo: "/img/photography/antoine.png",
          name: "Antoine OLIVER",
          role: "Designer graphique",
          text: "Avec une forte expertise en direction artistique, Antoine s’occupe de la réalisation de l’identité Vroom. Il épaule Erwan dans toutes les réalisations.",
        },
        {
          photo: "/img/photography/gregory.png",
          name: "Gregory DJERRADINE",
          role: "Responsable juridique",
          text: "Grâce à ses nombreuses expériences avec la justice, Greg saura vous accompagner sur la legislation en vigeur. ",
        },
      ],
    };
  },
};
</script>

<style lang="scss"></style>
