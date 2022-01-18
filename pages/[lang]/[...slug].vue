<script lang="ts" setup>
import useFetchStoryblokComponent from "~/composables/useFetchStoryblokComponent";
const { data } = await useStoryblokPage();

/**
 * Load bridge only on storyblok editor
 */
if (process.client && window.location.search.includes("_storyblok")) {
  const { default: useBridge } = await import(
    "~/composables/useStoryblokBridge"
  );
  const { bridgeInstance } = await useBridge();

  bridgeInstance.value.on("input", (inputEvent) => {
    if (data.value) {
      data.value.story = inputEvent.story;
    }
  });
}
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
