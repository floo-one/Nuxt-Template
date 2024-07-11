import Aura from '@primevue/themes/aura'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  devServer: { host: '127.0.0.1', port: 3000 },

  modules: ['@nuxt/eslint', '@nuxtjs/tailwindcss', '@primevue/nuxt-module'],

  eslint: {
    config: {
      stylistic: true,
    },
  },

  tailwindcss: {
    viewer: false,
    // editorSupport: true,
    cssPath: '~/assets/css/tailwind.css',
  },

  primevue: {
    options: {
      theme: {
        preset: Aura,
      },
      ripple: true,
    },
    autoImport: true,
  },
})
