export default {
  target: "server",
  ssr: true,
  telemetry: false,
  mode: "universal",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Vroom",
    htmlAttrs: {
      lang: "fr",
    },

    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Vroom" },
      {
        name: "description",
        content:
          "Nous accompagnons vos enfants selon leur besoins quotidiens. Notre service vous assure pleine tranquillité et sérénité tout au long de la journée.",
      },
      {
        name: "og:title",
        content: "Vroom - La mobilité sur mesure pour vos enfants",
      },
      {
        name: "og:desciption",
        content:
          "Nous accompagnons vos enfants selon leur besoins quotidiens. Notre service vous assure pleine tranquillité et sérénité tout au long de la journée.",
      },
      {
        name: "og:locale",
        content: "fr_FR",
      },
      {
        name: "og:image",
        content: "",
      },
      {
        property: "og:url",
        content: `https://vroom-app.netlify.app/`,
      },
      {
        // a modifier avec le bon url : https://search.google.com/search-console/welcome?hl=fr
        name: "google-site-verification",
        content: "",
      },
    ],

    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  manifest: {
    name: "VroomKids",
    short_name: "VroomKids Nuxt",
    description: "VroomKids manifest description",
    theme_color: "#2C3E50",
    start_url: "/",
  },

  publicRuntimeConfig: {
    assetsPath: process.env.NODE_ASSETS_PATH,
  },
  babel: {
    babelrc: true,
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/styles/theme.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/tailwind-components.js" },
    { src: "~/plugins/eventHub.js", mode: "client" },
    { src: "~/plugins/html/observer.js", mode: "client" },
    { src: "~/plugins/html/device.js", mode: "client" },
    { src: "~/plugins/html/fixScroll.js", mode: "client" },
    { src: "~/plugins/vue-carousel.js", mode: "client" },
    { src: "~/plugins/vue-visible.js", mode: "client" },
    "~/plugins/components",
    "~/plugins/global.js",
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    "~/components",
    { path: "~/components/Base/", prefix: "Base" },
    { path: "~/components/Common/", prefix: "Common" },
    { path: "~/components/Content/", prefix: "Content" },
    { path: "~/components/Strates/", prefix: "Strates" },
    { path: "~/components/Core/", prefix: "Core" },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "nuxt-purgecss",
    "@nuxtjs/style-resources",
    "nuxt-lazysizes",
  ],
  pageTransition: {
    name: "fade",
    mode: "out-in",
    beforeEnter(el) {
      console.log("Before enter...");
    },
  },
  lazySizes: {
    plugins: {
      unveilhooks: true,
    },
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/auth-next",
    "@nuxt/image",
    "nuxt-svg-loader",
    "@nuxtjs/axios",
    "@nuxtjs/proxy",
  ],
  // Purge module configuration: https://purgecss.com/guides/nuxt.html
  purgeCSS: {
    enabled: false,
  },
  styleResources: {
    scss: ["./assets/styles/_all_settings.scss"],
  },
  // Nuxt Axios

  axios: {
    baseURL: "http://localhost:3000/",
    proxyHeaders: false,
    credentials: false,
    proxy: true,
    // proxy:
    //   process.env.NODE_ENV === "production"
    //     ? false
    //     : process.env.NODE_ENV !== "staging",
    // baseURL: process.env.BASE_URL || "http://localhost:30",
  },
  proxy: {
    "/api/": {
      target: "https://hetic-vroom-api.one-website.com/",
      pathRewrite: { "^/api/": "" },
      changeOrigin: true,
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["epic-spinners"],
  },
  loading: false,
  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL || "http://localhost:80",
    nodeEnv: process.env.NODE_ENV || "development",
  },
};
