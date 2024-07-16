<template>
  <div class="flex items-center justify-center flex-wrap min-h-screen p-6">
    <CardMenu :bgimage="dbzimage" />
    <CardMenu :bgimage="pokemonimage" />
  </div>
</template>

<script setup lang="ts">
import CardMenu from '../components/CardMenu.vue'
import dbzimage from './../../../assets/images//bg-dbz.png'
import pokemonimage from './../../../assets/images/bg-pokemon.jpeg'
</script>

<style lang="scss" scoped></style>
