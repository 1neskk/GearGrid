// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    pageTransition: {name: 'page', mode: 'out-in'},
    head: {
        meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    }
  },

  css: ["./assets/css/main.css"],

  runtimeConfig: {
    public: {
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
    FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
    FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
    FIREBASE_MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID
    }
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@vueuse/nuxt",
    "nuxt-icon",
    "@vee-validate/nuxt",
    "@morev/vue-transitions/nuxt"
  ],

  tailwindcss: {
    exposeConfig: true,
  },

  colorMode: {
    classSuffix: "",
  },

  typescript: {
    shim: false,
  },

  imports: {
    imports: [{
      from: "tailwind-variants",
      name: "tv",
    }, {
      from: "tailwind-variants",
      name: "VariantProps",
      type: true,
    },
    { from: "vue-sonner", name: "toast", as: "useSonner" },],
  },

  build: {
    transpile: ["vue-sonner"]
  }
});