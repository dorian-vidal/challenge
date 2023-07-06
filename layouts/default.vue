<template>
  <main id="main" class="relative dark:bg-gray-800">
    <c-svg-icons />
    <!-- <c-header /> -->
    <transition name="fade">
      <nuxt class="page-content" />
    </transition>
    <c-footer />
    <c-sidebar id="menu">
      <c-nav-menu :is-sidebar="false" />
    </c-sidebar>
  </main>
</template>

<script>
import debounce from "~/utils/debounce";

export default {
  data: function () {
    return {
      date: new Date(),
      lastDate: new Date().getTime(),
      page: this.$route.name,
    };
  },
  computed: {},
  created() {
    this._onResize = debounce(this._onResize, 200);
  },
  mounted() {
    this.bindEvents();
    this._onResize();
    this._onUpdate();
  },
  methods: {
    bindEvents() {
      window.addEventListener("resize", this._onResize);
      document.addEventListener("scroll", this._onScroll, { passive: true });
    },
    _onResize() {
      this.$device._onResize(); // Update value
      this.setScreen();
      this.$eventHub.$emit("onResize");
    },
    _onUpdate() {
      this.date = new Date();
      const currentDate = this.date.getTime();
      const delta = currentDate - this.lastDate;
      this.$eventHub.$emit("onUpdate", delta);
      this.lastDate = currentDate;
      requestAnimationFrame(this._onUpdate);
    },
    _onScroll() {
      this.$device._onScroll(); // Update value
      this.$eventHub.$emit("onScroll", this.$device.scroll);
    },

    setScreen() {
      const bpValues = Object.values(this.config.bp);
      const bpKeys = Object.keys(this.config.bp);
      let screen = "desktop";
      if (bpValues.length) {
        for (let i = 0; i < bpValues.length; i++) {
          if (this.$device.width <= bpValues[i]) {
            screen = bpKeys[i];
            break;
          }
        }
      }
      this.$store.dispatch("global/loadScreen", screen);
    },
  },
  watch: {
    $route() {
      this.$nextTick(() => {
        this.$eventHub.$emit("sidebar:close");
        this.$eventHub.$emit("question:close");
      });
    },
  },
};
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.7s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
