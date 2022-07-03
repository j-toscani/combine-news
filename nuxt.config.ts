import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  head: {
    titleTemplate: "News on Stormgate",
  },
  modules: ["@nuxtjs/tailwindcss"],
  env: {
    TWITTER_API_TOKEN: process.env.TWITTER_API_TOKEN,
  },
});
