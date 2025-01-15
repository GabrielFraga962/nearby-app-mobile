import axios from 'axios'

// Sempre verifique se o endereço IP mudou
export const api = axios.create({
    baseURL: 'http://192.168.15.9:3333',
    timeout: 700,
})