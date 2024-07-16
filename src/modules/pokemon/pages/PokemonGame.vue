<template>
  <div class="bg-gradient-to-r from-blue-500 via-yellow-500 to-green-500">
    <div class="text-center">
      <h1 class="pt-4 text-3xl font-extrabold">Pokemon Game</h1>
    </div>

    <div class="flex flex-wrap">
      <div class="w-full md:w-1/2">
        <section
          v-if="isLoading || selectedPokemon === null"
          class="flex flex-col justify-center items-center w-screen h-screen"
        >
          <h1 class="text-3xl">Please wait...</h1>
          <h3 class="animate-pulse">Loading pokemons</h3>
        </section>

        <section class="flex flex-col justify-center items-center h-screen">
          <h1 class="text-3xl">Who's that Pokemon?</h1>
          <div v-if="status !== GameStatus.Playing" class="flex justify-center items-center">
            <h6 class="text-xl capitalize font-extrabold">
              {{ status === GameStatus.Won ? 'Congratulations!!!' : 'Woops!!!' }}
            </h6>
            <button
              @click="getNextRound(4)"
              class="bg-violet-300 shadow-md p-1 px-4 m-2 cursor-pointer text-center rounded-md"
            >
              {{ status === GameStatus.Won ? 'Next Character' : 'Play Again' }}
            </button>
          </div>

          <!-- Pokemon Picture -->
          <PokemonPicture
            class="mt-5"
            v-if="selectedPokemon"
            :pokemon-id="selectedPokemon.id"
            :show-pokemon="status !== GameStatus.Playing"
          />

          <!-- Pokemon Options -->
          <AnswerOptions
            v-if="selectedPokemon"
            :options="options"
            :disable-option="status !== GameStatus.Playing"
            :correct-answer-id="selectedPokemon.id"
            @selected-option="checkAnswer"
          />
        </section>
      </div>

      <div class="w-full md:w-1/2">
        <CardScore :score="score" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePokemon } from '../composables/usePokemon'
import { GameStatus } from '../../core/enums/game-status'
import PokemonPicture from './../components/PokemonPicture.vue'
import CardScore from '@/modules/core/components/CardScore.vue'
import AnswerOptions from '@/modules/core/components/AnswerOptions.vue'

const {
  selectedPokemon,
  status,
  score,
  isLoading,
  pokemonOptions: options,
  checkAnswer,
  getNextRound
} = usePokemon()
</script>

<style scoped></style>
