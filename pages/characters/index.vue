<template>
    <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="k in karakterler.results" :key="k.id">
        <KarakterCard :karakter="k" />
      </div>
    </div>
  </div>
</template>

<script setup>

 definePageMeta({
    layout: "characters",
  })


  const { data: karakterler } = await useFetch('https://rickandmortyapi.com/api/character')

  useHead({
    title: 'Rick And Morty Karakterler',
    meta: [
      { name: 'description', content: 'Nuxt 3 Karakterler'}
    ]
  })
</script>

<style scoped>

</style>