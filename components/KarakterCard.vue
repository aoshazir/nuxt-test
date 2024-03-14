<template>
  <div class="card text-center">
    <p class="font-bold text-gray-500 m-4 truncate">{{ karakter.name }}</p>
    <img :src="`${karakter.image}`" class="thumb" />
    
    <NuxtLink :to="`/characters/${karakter.id}`">
      <p class="btn my-4"> <span class="material-icons mr-2">
      </span>Detay Görüntüle</p>
    </NuxtLink>
  </div>
</template>

<script setup>
  const { karakter } = defineProps(['karakter'])
</script>

<style scoped>
  .thumb {
    max-height: 120px;
    max-width: 70%;
    margin: 0 auto;
  }
</style>