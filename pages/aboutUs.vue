<template>
  <section id="page-about-us" class="">
    <strate-hero
      title="Vroom c'est quoi ?"
      backgroundUrl="/img/photography/hero-Aboutus.png"
    />
    <div class="overflow-hidden">
      <div class="mx-auto">
        <strate-advantages
          title="Que proposons-nous?"
          text="Vroom est un service de chauffeur qui s’occupe du déplacement de votre enfant. Ce dernier pourra aller à son cours de sport, de théâtre ou à l’école sans encombre avec un service de qualité. 
          Notre engagement s’inscrit dans une continuité de valeurs fortes qui sont gages de qualités, à savoir :"
          :isInversed="false"
          imageUrl="/img/photography/strate_advantage4.png"
        />
        <strate-reservations
          text4
          subtitle1="Qualité de service"
          subtitle2="Sécurité avant tout"
          subtitle3="Eco-responsable"
        >
          <template v-slot:text1>
            <client-only>
              <core-aov :delay="350">
                <base-big-letter
                  text="1"
                  class="t-translate-down t-fade-in t-scale"
                />
              </core-aov>
            </client-only>
          </template>
          <template v-slot:text2>
            <client-only>
              <core-aov :delay="450">
                <base-big-letter
                  text="2"
                  class="t-translate-down t-fade-in t-scale"
                />
              </core-aov>
            </client-only>
          </template>
          <template v-slot:text3>
            <client-only>
              <core-aov :delay="550">
                <base-big-letter
                  text="3"
                  class="t-translate-down t-fade-in t-scale"
                />
              </core-aov>
            </client-only>
          </template>
        </strate-reservations>
        <strate-advantages
          title="A l’écoute de vos besoins"
          text="Vroom est à l’écoute de la demande de ses clients. C’est pour cela que nous vous proposons un service précis à la hauteur. Les véhicules sont adaptés, le co-voiturage et la mutualisation des trajets sont bien évidemment possibles et répondent à notre problématique eco-responsable. 
          Notre service reste également disponible 7j/7 et propose des collaborations avec les établissements scolaires et extra-scolaires."
          :isInversed="true"
          imageUrl="/img/photography/strate_advantage3.png"
        />

        <client-only>
          <strate-testimonials-pro
            title="Nos chauffeurs témoignent"
            subtitle="Nos chauffeurs sont séléctionnés avec rigueur. Ils sont tous en possession d’une lisence VTC et sont pour la plupart père ou mère de famille."
          >
            <slide class="">
              <base-testimonial-pro
                name="Francis, 43 ans"
                text='"C’est une bonne expérience sociale et humaine qui m’as permis d’abord de découvrir les gens mais aussi la ville de Paris."'
                date="Chauffeur Vroom depuis 2 ans"
                imageUrl="/img/photography/chauffeur1.png"
              />
            </slide>
            <slide class="">
              <base-testimonial-pro
                name="Emma, 29 ans"
                text='"J’aime beaucoup ce métier car ma passion est de conduire, faire chauffeur pour Vroom m’a permi de rencontrer plein de personne et de découvrir différentes villes."'
                date="Chauffeuse Vroom depuis 3 ans"
                imageUrl="/img/photography/chauffeur2.png"
              />
            </slide>
            <slide class="">
              <base-testimonial-pro
                name="Junior, 30 ans"
                text='"Travail très agréable qui permet d’avoir une certaine flexibilité. Etre au contact d’une population jeune est agréable. On se sent utile et je trouve ça très satisfaisant."'
                date="Chauffeur Vroom depuis 2 ans"
                imageUrl="/img/photography/chauffeur3.png"
              />
            </slide>
            <slide class="">
              <base-testimonial-pro
                name="Sonia"
                text='"J’adore conduire, alors mon expérience chez Vroom est une réelle passion. Je fais mon métier tout en exercant ma passion pour la conduite. Merci."'
                date="Chauffeuse Vroom depuis 4 ans"
                imageUrl="/img/photography/chauffeur4.png"
              />
            </slide>
            <slide class="">
              <base-testimonial-pro
                name="Camille, 28 ans"
                text='"Cela fait maintenant deux ans que je suis chauffeur pour Vroom. Nous sommes écoutés et respectés par la hierarchie et le travail est agréable."'
                date="Chauffeur Vroom depuis le début"
                imageUrl="/img/photography/chauffeur5.png"
              />
            </slide>
            <slide class="">
              <base-testimonial-pro
                name="Nathalie, 36 ans"
                text='"J’adore les enfants et je suis passionné par la conduite. Je suis donc très à l’aise dans ce métier et je remercie Vroom de sa confiance. Je recommande."'
                date="Chauffeuse Vroom depuis 8 mois"
                imageUrl="/img/photography/chauffeur6.png"
              />
            </slide>
          </strate-testimonials-pro>
        </client-only>
        <strate-text
          title="Sécurité et respect des régles"
          text="Vroom travaille dans le respect des normes et réglementations. Notre système de recrutement demande une certaine rigueur et demande également des diplômes et certifications spécifiques à nos futurs chauffeurs. 
          
          Pour plus d’informations sur ces aspects, l’équipe reste à votre disposition pour répondre à toutes vos quéstions, nous vous proposons également un lien vers les lois en vigueur “LOI n° 2014-1104 du 1er octobre 2014” "
          backgroundColor="#E9FBFB"
        />
        <client-only>
          <strate-testimonials-pro
            title="Nos accompagnateurs témoignent"
            subtitle="Nos accompagnateurs sont aussi séléctionnés avec choix. Tous diplomés d'un CAP accompagnants educatif petite enfance, ils savent y faire avec les morveux."
          >
            <slide class="">
              <base-testimonial-pro
                name="Gazo, 30 ans"
                text='"Je suis content de travailler pour Vroom et d’être au contact des plus jeunes. Voir qu’ils sont content du service qu’on leur apporte est très satisfaisant."'
                date="Accompagnateur Vroom depuis 2 ans"
                imageUrl="/img/photography/accompagnateur1.png"
              />
            </slide>
            <slide class="">
              <base-testimonial-pro
                name="Emma, 29 ans"
                text='"En venant travailler pour Vroom je savais que j’allais aider beaucoup de familles car le service proposé est vraiment très pratique. Je l’ai moi même utilisé pour mon enfant. C’est génial."'
                date="Chauffeuse Vroom depuis 3 ans"
                imageUrl="/img/photography/accompagnateur2.png"
              />
            </slide>
            <slide class="">
              <base-testimonial-pro
                name="Celine, 30 ans"
                text='"Etant moi même maman je sais que Vroom est une réelle source de soulagement pour les parents. Me rendre utile à cet effet est un véritable épanouissement."'
                date="Chauffeur Vroom depuis 2 ans"
                imageUrl="/img/photography/accompagnateur3.png"
              />
            </slide>
            <slide class="">
              <base-testimonial-pro
                name="Christophe, 32 ans"
                text='"Je suis content de travailler dans de bonnes conditions avec un public jeune et agréable. Il y a beaucoup d’avantages à travailler pour Vroom. Je recommande."'
                date="Chauffeuse Vroom depuis 4 ans"
                imageUrl="/img/photography/accompagnateur4.png"
              />
            </slide>
          </strate-testimonials-pro>
        </client-only>
        <strate-catchphrase
          backgroundColor="#A6EFED"
          imageUrl="/img/photography/perso3.png"
          text="Et en plus, Vroom est engagé pour notre planète, nos véhicules sont "
          textHighlight="hybrides ou éléctriques !"
          colorHighlight="#2CC5C0"
          :isInversed="false"
        />
        <strate-member
          title="Notre équipe"
          subtitle="C’est notre équipe qui permet de vous satisfaire au quotidien."
        ></strate-member>
        <strate-faq title="Les questions qui reviennent souvent.">
          <base-faq-item
            v-for="itemFAQ in listQuestionsFAQ2"
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
  name: "AboutUs",

  data() {
    return {
      listQuestionsFAQ2: [
        {
          isActive: false,
          id: "question1",
          question: "Comment rejoindre notre super team ?",
          answer:
            "Vroom est un service de chauffeur qui s’occupe de votre enfant. Ce dernier pourra aller à son cours de sport, de théâtre ou à l’école sans encombre avec un service de qualité. ",
        },
        {
          isActive: false,
          id: "question2",
          question: "Je peux vous confier mon bébé de 10 mois ?",
          answer:
            "Vroom est un service de chauffeur qui s’occupe de votre enfant. Ce dernier pourra aller à son cours de sport, de théâtre ou à l’école sans encombre avec un service de qualité. ",
        },
        {
          isActive: false,
          id: "question3",
          question: "C'est quoi un accompagnateur ? ",
          answer:
            "Vroom est un service de chauffeur qui s’occupe de votre enfant. Ce dernier pourra aller à son cours de sport, de théâtre ou à l’école sans encombre avec un service de qualité. ",
        },
        {
          isActive: false,
          id: "question4",
          question: "Comment je peux reserver une course ?",
          answer:
            "Vroom est un service de chauffeur qui s’occupe de votre enfant. Ce dernier pourra aller à son cours de sport, de théâtre ou à l’école sans encombre avec un service de qualité. ",
        },
      ],
    };
  },
  head() {
    return {
      bodyAttrs: {
        class: "aboutUs",
      },
    };
  },
  methods: {
    selectQuestion(payload) {
      this.listQuestionsFAQ2.forEach((elem) => {
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
