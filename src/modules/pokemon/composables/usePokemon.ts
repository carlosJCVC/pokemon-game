import { computed, onMounted, ref } from 'vue'
import confetti from 'canvas-confetti'
import { GameStatus } from '../../core/enums/game-status'
import { pokemonApi } from '../api/pokemonApi'
import type { PokemonListResponse } from '../interfaces/PokemonListResponse'
import type { Pokemon } from '../interfaces/Pokemon'
import type { Character } from '@/modules/dbz/interfaces/Character'

export const usePokemon = () => {
  const status = ref<GameStatus>(GameStatus.Playing)
  const pokemons = ref<Character[]>([])
  const pokemonOptions = ref<Character[]>([])
  const score = ref(0)

  const selectedPokemon = computed(() => {
    if (pokemonOptions.value.length === 0) return undefined

    const randomIndex = Math.floor(Math.random() * pokemonOptions.value.length)

    return pokemonOptions.value[randomIndex]
  })

  const isLoading = computed(() => pokemons.value.length === 0)

  const getPokemons = async (): Promise<Character[]> => {
    const limit = 151
    const response = await pokemonApi.get<PokemonListResponse>(`/?limit=${limit}`)

    const pokemonsArray = response.data.results.map((pokemon) => {
      const urlParts = pokemon.url.split('/')
      const id = urlParts.at(-2) ?? 0

      return {
        name: pokemon.name,
        id: +id
      }
    })

    return pokemonsArray.sort(() => Math.random() - 0.5)
  }

  /**
   * Function to use pokemons
   * @param howMany NUmber
   */
  const getNextRound = (howMany: number = 4) => {
    if (status.value == GameStatus.Lost) {
      score.value = 0
    }

    status.value = GameStatus.Playing
    pokemonOptions.value = pokemons.value.slice(0, howMany)
    pokemons.value = pokemons.value.slice(howMany)
  }

  const checkAnswer = (id: number) => {
    const hasWon = selectedPokemon.value && selectedPokemon.value.id === id

    if (hasWon) {
      status.value = GameStatus.Won

      confetti({
        particleCount: 300,
        spread: 150,
        origin: { y: 0.6 }
      })

      score.value = score.value + 5
      return
    }

    status.value = GameStatus.Lost
  }

  onMounted(async () => {
    pokemons.value = await getPokemons()

    getNextRound()
  })

  return {
    status,
    pokemonOptions,
    isLoading,
    selectedPokemon,
    score,

    // Methods
    getNextRound,
    checkAnswer
  }
}
