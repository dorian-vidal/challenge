<template>
  <footer class="pt-24 bg-black c-footer">
    <div class="container mb-24">
      <div class="pt-5">
        <div class="space-y-8 lg:col-span-1">
          <a href="/">
            <base-use-svg
              id="vroom"
              class="vroom"
              color="green1"
              size="logo-xl"
            />
          </a>
          <p class="w-1/2 mt-2 text-white text-md">
            Le service chauffeur et accompagnateur
            <br />
            <span>de votre enfant.</span>
          </p>
        </div>
        <br />
        <div class="mt-10 lg:grid lg:grid-cols-3 lg:gap-8">
          <div class="mt-12 lg:mt-0">
            <h3 class="text-2xl font-black uppercase text-primary-vert1">
              Informations
            </h3>
            <ul role="list" class="mt-10 space-y-4">
              <li>
                <nuxt-link
                  to="/price"
                  class="inline-flex font-normal text-white transition-colors t-link t-link--secondary c-footer__links lg:text-md text-md"
                  >Qui sommes-nous ?
                </nuxt-link>
              </li>
              <li>
                <nuxt-link
                  to="/price"
                  class="inline-flex font-normal text-white transition-colors t-link t-link--secondary c-footer__links lg:text-md text-md"
                  >Nos tarifs
                </nuxt-link>
              </li>
              <li>
                <nuxt-link
                  to="/join-us"
                  class="inline-flex font-normal text-white transition-colors t-link t-link--secondary c-footer__links lg:text-md text-md"
                  >Nous contacter
                </nuxt-link>
              </li>
            </ul>
          </div>
          <div class="mt-12 lg:mt-0">
            <h3 class="text-2xl font-black uppercase text-primary-vert1">
              Chauffeurs
            </h3>
            <ul role="list" class="mt-10 space-y-4">
              <li>
                <nuxt-link
                  to="/join-us"
                  class="inline-flex font-normal text-white transition-colors t-link t-link--secondary c-footer__links lg:text-md text-md"
                  >Devenir chauffeur
                </nuxt-link>
              </li>
              <li>
                <nuxt-link
                  to="/join-us"
                  class="inline-flex font-normal text-white transition-colors t-link t-link--secondary c-footer__links lg:text-md text-md"
                  >Devenir accompagnateur
                </nuxt-link>
              </li>
              <li>
                <nuxt-link
                  to="/"
                  class="inline-flex font-normal text-white transition-colors t-link t-link--secondary c-footer__links lg:text-md text-md"
                  >Plateforme Vroomer
                </nuxt-link>
              </li>
            </ul>
          </div>
          <div class="mt-12 lg:justify-end lg:mt-0">
            <h3 class="text-2xl font-black uppercase text-primary-vert1">
              Vroom
            </h3>
            <div class="py-10 c-footer__socials-icons">
              <div class="flex lg:justify-start">
                <a href="" class="mr-8 lg:mr-12 c-footer__socials-icons-link">
                  <base-use-svg id="facebook" color="white" size="lg" />
                </a>
                <a href="" class="mr-8 lg:mr-12 c-footer__socials-icons-link">
                  <base-use-svg id="instagram" color="white" size="lg" />
                </a>
                <a href="" class="mr-8 lg:mr-12 c-footer__socials-icons-link">
                  <base-use-svg id="twitter" color="white" size="lg" />
                </a>
              </div>
            </div>
            <div>
              <p href="#" class="font-semibold text-white text-md">
                S’abonner à notre newsletter
              </p>
            </div>
            <div
              class="inline-flex items-center w-full gap-2 list-none lg:ml-auto"
            >
              <form
                action=""
                method="post"
                name="revue-form"
                target="_blank"
                class="flex w-full p-1 mt-4 bg-white rounded"
              >
                <div class="flex-1 min-w-0">
                  <input
                    type="email"
                    class="block h-full px-5 py-3 transition duration-500 ease-in-out transform bg-transparent border border-transparent rounded select-none c-footer__input focus: placeholder-grey-light text-md focus:border-transparent focus:ring-0"
                    placeholder="E-mail"
                  />
                </div>
                <div class="mr-1">
                  <t-button
                    type="submit"
                    value="Subscribe"
                    name="member"
                    class="px-5 py-3 my-1 text-sm font-semibold text-white"
                    variant=""
                  >
                    <span>s'abonner</span>
                  </t-button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="py-2 bg-primary-vert1">
      <div class="container justify-between lg:flex">
        <div class="my-4 text-xs text-white">
          © Copyright Vroom 2022. Made with love by Anthony Roux, Dorian Vidal.
        </div>
        <div class="my-4 text-xs text-white">Mentions légales</div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",

  data() {
    return {};
  },
};
</script>

<style lang="scss">
.c-footer {
  &__socials-icons-link {
    border-bottom: solid 2px $green1;
    padding-bottom: 0.4rem;
  }
  &__socials-icons {
    @media (hover: hover) {
      svg {
        fill: $white !important;
        cursor: pointer;

        &:hover {
          use {
            transition: 250ms $linear;
            fill: $green1;
          }
        }
      }
    }
  }
}
</style>
