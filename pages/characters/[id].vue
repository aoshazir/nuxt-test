<template>

    <Head>
      <Title>AOS Nuxt | {{ karakter.name }}</Title>
      <Meta name="description" :content="karakter.status" />
    </Head>
    <KarakterDetay :karakter="karakter" />
</template>

<script setup>

const {id}=useRoute().params

 const uri = 'https://rickandmortyapi.com/api/character/' + id

  
  const { data: karakter } = await useFetch(uri, { key: id })

  if (!karakter.value) {
    throw createError({ statusCode: 404, statusMessage: 'Karakter bulunamadı' })
  }

 definePageMeta({
    layout: "characters",
  })
</script>

<style lang="scss" scoped>

</style>