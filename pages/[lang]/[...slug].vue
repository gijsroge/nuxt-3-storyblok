<script lang="ts" setup>
const { data } = await useStoryblokPage();
</script>

<template>
  <div>
    <h1>{{ data.story.name }}</h1>
    <ul>
      <li v-for="block in data.story.content.body">
        <component :is="block.component" :blok="block"></component>
      </li>
    </ul>
  </div>
</template>
