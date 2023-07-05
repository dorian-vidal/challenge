<template>
  <section class="py-12 mb-32 md:mb-60 strate-garantee bg-grey-lighter">
    <div
      class="container grid items-start justify-center grid-cols-12 gap-10 md:justify-center"
    >
        <base-garantee-item
          v-for="garanteeItem in garanteeProps"
          :key="garanteeItem.id"
          :title="garanteeItem.title"
          :text="garanteeItem.text"
          :icon="garanteeItem.icon"
        />
      
    </div>
  </section>
</template>
<script>
export default {
  name: "StrateGarantee",
  props: {},
  data: function () {
    return {
      isOpen: false,
      garanteeProps: [
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
};
</script>

<style lang="scss"></style>
