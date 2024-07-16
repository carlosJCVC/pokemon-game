import axios from 'axios'

const dbzApi = axios.create({
  baseURL: 'https://dragonball-api.com/api'
})

export { dbzApi }
