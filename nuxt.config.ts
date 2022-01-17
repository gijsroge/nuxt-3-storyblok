import { defineNuxtConfig } from "nuxt3";
import svgLoader from "vite-svg-loader";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  publicRuntimeConfig: {
    VITE_STORYBLOK_TOKEN: process.env.VITE_STORYBLOK_TOKEN,
  },
  build: {
    transpile: ["@storyblok/nuxt"],
  },
  vite: {
    plugins: [svgLoader()],
  },
});
