<template>
  <div class="card">
    <div class="grid grid-cols-2 gap-10">
      <div class="p-7">
        <img :src="`${karakter.image}`" class="mx-auto my-7" />
      </div>
      <div class="p-7">
        <h2 class="text-4xl my-7">{{ karakter.name }}</h2>
        <p class="text-xl my-7">Durum: {{ karakter.status }}</p>
        <p class="text-xl my-7">Cinsiyet: {{ karakter.gender }}</p>
        <h3 class="font-bold border-b-2 mb-4 pb-2">Konum:</h3>
        <p class="mb-7">{{ karakter.location.name }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
  const { karakter } = defineProps(['karakter'])
</script>

<style scoped>
  img {
    max-width: 400px;
  }
</style>