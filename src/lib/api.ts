import axios from 'axios'
import { configDotenv } from 'dotenv'

configDotenv()

export const api = axios.create({
  baseURL: process.env.BASE_URL,
  params: {
    api_key: process.env.API_KEY
  }
})