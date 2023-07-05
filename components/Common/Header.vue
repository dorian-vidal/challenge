<template>
  <header
    class="sticky top-0 z-20 c-header"
    :class="{
      'is-home': isHome,
      'is-fixed': isFixed,
    }"
  >
    <div class="container relative h-full py-6 lg:py-8 c-header__container">
      <div class="min-h-full c-header__row">
        <div class="flex items-center lg:justify-between">
          <div class="flex-1 lg:hidden c-header__burger" @click="openMenu">
            <base-use-svg
              id="burger-close"
              size="xl"
              @click="isOpen = !isOpen"
              :class="{ isOpen: isOpen }"
              class="z-[3]"
              :color="isFixed ? 'black' : 'white'"
            />
          </div>
          <div class="flex flex-auto c-header__logo">
            <h1
              class="
                flex
                py-1
                mx-6
                text-xl
                font-semibold
                text-white
                transition-colors
                md:text-4xl
                lg:text-md
              "
            >
              challenge
            </h1>
          </div>
          <div
            class="
              justify-center
              transition-colors
              c-header__container
              l-nav__item
            "
          >
            <h2
              class="
                flex
                py-1
                mx-6
                text-xl
                font-semibold
                text-white
                transition-colors
                md:text-4xl
                lg:text-md
                t-link
              "
            >
              {{ title }}
            </h2>
            <!-- <t-button
              tagName="a"
              class="w-full px-4 py-2 mb-0 cursor-pointer lg:w-auto"
              variant="secondaryWhite"
              @click="showModal = true"
              ><span class="text-md md:text-lg">Une question ?</span></t-button
            > -->
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";

export default {
  name: "Header",
  data: function () {
    return {
      isFixed: false,
      isMenuOpen: false,
      isOpen: false,
      isClose: false,
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
  props: {
    title: {
      type: String,
      required: false,
    },
    value: {
      type: String,
      required: false,
    },
  },
  computed: {
    ...mapGetters({
      isHome: "global/getIsHome",
      header: "global/getGlobal",
      screen: "global/getScreen",
    }),
  },
  mounted() {
    this.bindEvents();
    this.$nextTick(() => {
      this.onScroll(this.$device.scroll);
    });

    // axios.get("/api/user/get/").then((response) => console.log(response.data));
    // this.submitForm();
  },

  destroyed() {
    this.unbindEvents();
  },
  methods: {
    bindEvents() {
      this.$eventHub.$on("onScroll", (scroll) => {
        this.onScroll(scroll);
      });
      this.$eventHub.$on("onResize", this.onResize);
      this.$eventHub.$on("sidebar:close", (id) => {
        if (id === "menu") this.isMenuOpen = false;
      });
    },
    unbindEvents() {
      this.$eventHub.$off("onScroll");
      this.$eventHub.$off("onResize");
      this.$eventHub.$off("sidebar:close");
    },
    onScroll(scroll) {
      if (this.$fixScroll.state) return;
      this.isFixed = scroll.top > 0;
      this.isLogo = scroll.top > 0 || !this.isHome;
    },
    onResize() {
      this.onScroll(this.$device.scroll);
    },
    openMenu() {
      this.$eventHub.$emit("sidebar:open", "menu");
      this.isMenuOpen = true;
      this.isOpen = true;
    },
    updateValue: function (value) {
      this.$emit("input", value);
    },

    // MODAL / FORM

    submitForm() {
      console.log(this.form);
      // return
      axios
        // .post("/api/question/create", this.form)
        .post("/api/questions/create", {
          name: this.form.name,
          lastname: this.form.lastname,
          phone: this.form.phone,
          mail: this.form.mail,
          profil: this.form.profil,
          text: this.form.text,
        })
        .then((res) => {
          //Perform Success Action
          console.log("res", res);
          this.status = "res";
          this.$router.push("/");
          this.success = true;
          setTimeout(() => {
            this.showModal = false;
            this.form = {};
            this.success = false;
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
  watch: {
    $route() {
      this.$nextTick(() => {
        this.onScroll(this.$device.scroll);
      });
    },
  },
};
</script>

<style lang="scss">
$transition: opacity 450ms $ease-in-out-quad;

.c-header {
  background-color: $background;
}
</style>
