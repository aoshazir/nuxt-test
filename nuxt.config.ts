// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  app: {
    head: {
      title: 'AOS Nuxt',
      meta: [
        {name: 'description', content: 'Nuxt 3 Eğitimi'}
      ]
    }
  }
})
