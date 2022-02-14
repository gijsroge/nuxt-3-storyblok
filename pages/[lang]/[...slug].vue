<script lang="ts" setup>
import useFetchStoryblokComponent from "~/composables/useFetchStoryblokComponent";
const { data } = await useStoryblokPage();
</script>

<template>
  <div>
    <h1>Page: {{ data.story.name }}</h1>

    <div v-for="block in data.story.content.body">
      <component
        :is="useFetchStoryblokComponent({ component: block.component })"
        :blok="block"
      ></component>
    </div>
  </div>
</template>
