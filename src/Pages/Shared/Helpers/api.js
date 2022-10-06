import axios from 'axios'

const api = axios.create({
  baseURL: 'https://min-api.cryptocompare.com/data/',
  authorization: { Apikey: import.meta.env.VITE_API_KEY },
})

export default api
