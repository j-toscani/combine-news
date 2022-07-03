import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    env: {
        TWITTER_API_TOKEN: process.env.TWITTER_API_TOKEN
    }
})
