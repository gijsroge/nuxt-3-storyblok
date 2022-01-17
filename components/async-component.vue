<script lang="ts" setup>
import { useFetch } from "#app";

defineProps(["blok"]);
const { data } = await useFetch("https://jsonplaceholder.typicode.com/users");
</script>
<template>
  <div>
    <h1>{{ blok.title }}</h1>
    <strong>Async data:</strong>
    {{ data }}
  </div>
</template>
