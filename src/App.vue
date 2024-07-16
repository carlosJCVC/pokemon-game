<script setup lang="ts">
import dbzimage from './assets/images/bg-dbz.png'
import pokemonimage from './assets/images/bg-pokemon.jpeg'
import CardMenu from './modules/core/components/CardMenu.vue'
import DbzGame from './modules/dbz/pages/DbzGame.vue'
import PokemonGame from './modules/pokemon/pages/PokemonGame.vue'
</script>

<template>
  <main>
    <RouterView />
  </main>
</template>

<style scoped></style>
