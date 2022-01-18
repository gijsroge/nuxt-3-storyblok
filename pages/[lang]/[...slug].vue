<script lang="ts" setup>
import useFetchStoryblokComponent from "~/composables/useFetchStoryblokComponent";
const { data } = await useStoryblokPage();
</script>

<template>
  <div>
    <h1>{{ data.story.name }}</h1>

    <ul>
      <li v-for="block in data.story.content.body">
        <component
          :is="useFetchStoryblokComponent({ component: block.component })"
          :blok="block"
        ></component>
      </li>
    </ul>
  </div>
</template>
