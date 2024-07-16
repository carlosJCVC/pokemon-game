import { computed, onMounted, ref } from 'vue'
import confetti from 'canvas-confetti'
import { GameStatus } from '@/modules/core/enums/game-status'
import type { Character } from '../interfaces/Character'
import { dbzApi } from '../api/DBZApi'
import type { CharacterListResponse } from '../interfaces/CharacterListResponse'

export const useDbzCharacter = () => {
  const status = ref<GameStatus>(GameStatus.Playing)
  const characters = ref<Character[]>([])
  const characterOptions = ref<Character[]>([])
  const score = ref(0)

  const selectedCharacter = computed(() => {
    if (characterOptions.value.length === 0) return undefined

    const randomIndex = Math.floor(Math.random() * characterOptions.value.length)

    return characterOptions.value[randomIndex]
  })

  const isLoading = computed(() => characters.value.length === 0)

  const getCharacters = async (): Promise<Character[]> => {
    const limit = 58
    const response = await dbzApi.get<CharacterListResponse>(`characters?limit=${limit}`)

    const charactersArray = response.data.items.map((character) => {
      return {
        name: character.name,
        id: character.id,
        imageUrl: character.image
      }
    })

    return charactersArray.sort(() => Math.random() - 0.5)
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
    characterOptions.value = characters.value.slice(0, howMany)
    characters.value = characters.value.slice(howMany)
  }

  const checkAnswer = (id: number) => {
    const hasWon = selectedCharacter.value && selectedCharacter.value.id === id

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
    characters.value = await getCharacters()

    getNextRound()
  })

  return {
    status,
    characterOptions,
    isLoading,
    selectedCharacter,
    score,

    // Methods
    getNextRound,
    checkAnswer
  }
}
