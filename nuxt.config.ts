// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  head: {
    title: 'floo.one Nuxt Template',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' },
    ],
  },
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  devServer: {
    host: '0.0.0.0',
    port: '3000',
  },
  modules: [
    '@nuxtjs/tailwindcss', // "nuxt-aos",
    '@nuxt/icon',
    '@nuxt/eslint',
    '@vueuse/motion/nuxt',
    '@vueuse/nuxt',
  ],

  // plugins: [
  //   {
  //     src: '~/plugins/aos.client',
  //     mode: 'client'
  //   },
  // ],

  eslint: {
    config: {
      standalone: false,
    },
  },

  // tailwindcss: {
  //   cssPath: ['~/assets/css/tailwind.css', { injectPosition: "first" }],
  //   configPath: 'tailwind.config',
  //   exposeConfig: {
  //     level: 2
  //   },
  //   config: {},
  //   viewer: true,
  // },

  // aos: {
  //   // Global settings:
  //   disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  //   startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  //   initClassName: 'aos-init', // class applied after initialization
  //   animatedClassName: 'aos-animate', // class applied on animation
  //   useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  //   disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  //   debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  //   throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  //   // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  //   offset: 120, // offset (in px) from the original trigger point
  //   delay: 0, // values from 0 to 3000, with step 50ms
  //   duration: 400, // values from 0 to 3000, with step 50ms
  //   easing: 'ease', // default easing for AOS animations
  //   once: false, // whether animation should happen only once - while scrolling down
  //   mirror: false, // whether elements should animate out while scrolling past them
  //   anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  // }

})
