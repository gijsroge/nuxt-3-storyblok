<script lang="ts" setup>
const { data } = await useStoryblokPage();
</script>

<template>
  <h1>{{ data.story.name }}</h1>
  <ul>
    <li v-for="block in data.story.content.body">
      {{ block?.title || block._uid }}
    </li>
  </ul>
</template>
