<template>
  <header
    class="sticky top-0 z-20 c-header"
    :class="{
      'is-fixed': isFixed,
    }"
  >
    <h3 class="text-lg font-semibold text-white transition-colors t-link">
      Shell challenge
    </h3>
    <a
      class="text-lg font-semibold text-white transition-colors t-link"
      @click="handleTitleClick"
      >{{ title }}
    </a>
  </header>
</template>

<script>
import axios from "axios";
import { removeCookie } from "cookie-universal-nuxt";

export default {
  name: "Header",
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
  computed: {},
  watch: {
    $route() {
      this.$nextTick(() => {
        this.onScroll(this.$device.scroll);
      });
    },
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
    handleTitleClick() {
      this.$cookies.remove("cookie-token");
      this.$router.push("/");
    },

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
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding: 20px 5%;
}
.c-header {
  background-color: $background;
}
a {
  cursor: pointer;
  text-decoration: underline;
}
</style>
