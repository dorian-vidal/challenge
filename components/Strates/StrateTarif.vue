<template>
  <section class="relative grid my-32 md:my-60 strate-tarif">
    <div class="container">
      <div class="grid items-start justify-center grid-cols-12 gap-y-16 gap-x-10">
        <base-tarif-item
          v-for="elm in listPricesProps"
          @custom-event-name="selectPrice"
          :isActive="elm.isActive"
          :key="elm.id"
          :id="elm.id"
          :tarifname="elm.tarifname"
          :tarif="elm.tarif"
          :description="elm.description"
          :populary="elm.populary"
        >
          <base-tarif-advantage
            v-for="item in elm.list_advantages"
            :key="item.id"
            :listTitre="item.bold"
            :listText="item.text"
            :highlight="item.highlight"
          />
        </base-tarif-item>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "StrateTarif",

  props: {
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
      isSelected: false,
      listPricesProps: [
        {
          isActive: false,
          id: "Starter",
          tarifname: "Starter",
          tarif: "145 €",
          populary: false,
          description:
            "Les services basics pour gérer vos courses.",
          list_advantages: [
            {
              bold: "15 courses",
              text: " aller-retour par mois.",
              highlight: false,
            },
            {
              bold: "Support chatbot",
              text: " 7j/7 et 24h/24",
              highlight: false,
            },
          ],
        },
        {
          isActive: true,
          id: "Smart",
          tarifname: "Smart",
          tarif: "195 €",
          populary: true,
          description:
            "Une gestion plus facile de vos courses et contact directe avec les équipes.",
          list_advantages: [
            {
              bold: "20 courses",
              text: "aller-retour par mois",
              highlight: false,
            },
            {
              bold: "Support chatbot téléphonique",
              text: " 7j/7 et 24h/24.",
              highlight: true,
            },
            {
              text: "Planification des courses sur le mois à venir",
              highlight: false,
            },
          ],
        },
        {
          isActive: false,
          id: "Premium",
          tarifname: "Premium",
          tarif: "235 €",
          populary: false,
          description:
            "Le forfait incluant la totalité des fonctionnalités et services ainsi qu’une aide prioritaire.",
          list_advantages: [
            {
              bold: "40 courses",
              text: "aller-retour par mois",
              highlight: false,
            },
            {
              bold: "Support chatbot téléphonique prioritaire",
              text: " 7j/7 et 24h/24.",
              highlight: false,
            },
            {
              text: "Planification des courses sur le mois à venir",
              highlight: false,
            },
            {
              text: "Réservation d'un chauffeur particulier à toute heure de la journée hors frais supplémentaire.",
              highlight: false,
            },
          ],
        },
      ],
    };
  },
  methods: {
    selectPrice(payload) {
      console.log(payload);
      this.listPricesProps.forEach((elem) => {
        if (payload.id == elem.id) {
          elem.isActive = !elem.isActive;
        } else {
          elem.isActive = false;
        }
      });
    },
  },
  mounted() {
    // PLAN B
    // const children = document.querySelectorAll(".base-tarif-item");
    // children.forEach((child) => {
    //   child.addEventListener("click", function (e) {
    //     e.preventDefault();
    //     children.forEach((elem) => {
    //       elem.classList.remove("scale-105", "opacity-100");
    //       elem.classList.add("scale-90", "opacity-75");
    //     });
    //     child.classList.remove("scale-90", "opacity-75");
    //     this.classList.add("scale-105", "opacity-100");
    //   });
    // });
  },
};
</script>

<style lang="scss">
.base-tarif-item__item {
  padding: 1rem;

  &.highlight {
    background-color: #edd6f8;
    border-radius: 8px;
  }
}
</style>
