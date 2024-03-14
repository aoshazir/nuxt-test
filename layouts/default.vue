<template>
    <div>

        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4 flex justify-between">
                <NuxtLink to="/" class="font-bold">Rick And Morty</NuxtLink>
                <ul class="flex gap-4">
                <li><NuxtLink to="/">Anasayfa</NuxtLink></li>
                <li><NuxtLink to="/about">Hakkımızda</NuxtLink></li>
                <li><NuxtLink to="/characters" class="btn">Karakterler</NuxtLink></li>
                </ul>
            </nav>
        </header>
        <div class="container mx-auto p-4">
            <slot />
        </div>
        
    </div>
</template>

<style scoped>
  .router-link-exact-active {
    color: #e63946;
  }
</style>