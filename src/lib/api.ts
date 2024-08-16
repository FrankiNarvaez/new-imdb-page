import axios from 'axios'
import { configDotenv } from 'dotenv'

configDotenv()

export const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '0fa3b691054dfccf9f7d8005c05067e4'
  }
})