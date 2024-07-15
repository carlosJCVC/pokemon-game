<template>
  <section
    v-if="isLoading || selectedPokemon === null"
    class="flex flex-col justify-center items-center w-screen h-screen"
  >
    <h1 class="text-3xl">Please wait...</h1>
    <h3 class="animate-pulse">Loading pokemons</h3>
  </section>

  <section class="flex flex-col justify-center items-center h-screen">
    <h1 class="text-3xl">Who is this Pokemon</h1>
    <h6 class="text-xl capitalize">{{ status }}</h6>

    <!-- Pokemon Picture -->
    <PokemonPicture
      class="mt-5"
      v-if="selectedPokemon"
      :pokemon-id="selectedPokemon.id"
      :show-pokemon="status !== GameStatus.Playing"
    />

    <!-- Pokemon Options -->
    <PokemonOptions
      v-if="selectedPokemon"
      :options="options"
      :disable-option="status !== GameStatus.Playing"
      :correct-answer-id="selectedPokemon.id"
      @selected-option="checkAnswer"
    />
  </section>
</template>

<script setup lang="ts">
import PokemonOptions from '../components/PokemonOptions.vue'
import { usePokemon } from '../composables/usePokemon'
import { GameStatus } from '../enums/game-status'
import PokemonPicture from './../components/PokemonPicture.vue'

const { selectedPokemon, status, isLoading, pokemonOptions: options, checkAnswer } = usePokemon()
</script>

<style scoped></style>
