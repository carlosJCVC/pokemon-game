<template>
  <div class="flex flex-wrap">
    <div class="w-full md:w-1/2">
      <section
        v-if="isLoading || selectedCharacter === null"
        class="flex flex-col justify-center h-screen text-center"
      >
        <h1 class="text-3xl">Please wait...</h1>
        <h3 class="animate-pulse">Loading Dragon ball characters</h3>
      </section>

      <section class="flex flex-col justify-center items-center h-screen">
        <h1 class="text-3xl">Who's That Character?</h1>
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

        <!-- Character Picture -->
        <CharacterPicture
          v-if="selectedCharacter"
          :image-url="selectedCharacter.imageUrl"
          :show-character="status !== GameStatus.Playing"
          class="mt-5"
        />

        <!-- Character Options -->
        <AnswerOptions
          v-if="selectedCharacter"
          :options="options"
          :disable-option="status !== GameStatus.Playing"
          :correct-answer-id="selectedCharacter.id"
          @selected-option="checkAnswer"
        />
      </section>
    </div>

    <div class="w-full md:w-1/2">
      <CardScore :score="score" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { GameStatus } from '@/modules/core/enums/game-status'
import { useDbzCharacter } from '../composables/useDbzCharacter'
import CharacterPicture from './../../core/components/CharacterPicture.vue'
import CardScore from './../../core/components/CardScore.vue'
import AnswerOptions from '@/modules/core/components/AnswerOptions.vue'

const {
  isLoading,
  selectedCharacter,
  status,
  score,
  checkAnswer,
  getNextRound,
  characterOptions: options
} = useDbzCharacter()
</script>

<style scoped></style>
