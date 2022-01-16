<script lang="ts" setup>
const { data } = await useStoryblokPage();
</script>

<template>
  <h1>{{ data.story.name }}</h1>
</template>
