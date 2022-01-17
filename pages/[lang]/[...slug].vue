<script lang="ts" setup>
import { defineAsyncComponent } from "vue";

const { data } = await useStoryblokPage();

const fetchComponent = (component) => {
  const components = import.meta.glob("../../components/*.vue");
  return defineAsyncComponent(components[`../../components/${component}.vue`]);
};
</script>

<template>
  <div>
    <h1>{{ data.story.name }}</h1>

    <ul>
      <li v-for="block in data.story.content.body">
        <component
          :is="fetchComponent(block.component)"
          :blok="block"
        ></component>
      </li>
    </ul>
  </div>
</template>
