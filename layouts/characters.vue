<template>
    <div>

        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4">
                <NuxtLink to="/"  class="font-bold">Rick And Morty</NuxtLink>
                
            </nav>
        </header>
        <div class="container mx-auto p-4">
            <slot />
        </div>
        <footer class="container mx-auto p-4 flex justify-between border-t-2">
            <ul class="flex gap-4">
                <li><NuxtLink to="/">Anasayfa</NuxtLink></li>
                <li><NuxtLink to="/about">Hakkımızda</NuxtLink></li>
                <li><NuxtLink to="/characters" class="btn">Karakterler</NuxtLink></li>
            </ul>
        </footer>
        
    </div>
</template>

