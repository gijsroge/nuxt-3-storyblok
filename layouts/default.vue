<script lang="ts" setup>
import logo from "~/assets/image.svg?component";
</script>
<template>
  <div>
    <router-link to="/nl-be/"><logo width="100px" /></router-link>

    <ul>
      <li><router-link to="/nl-be/">go to home</router-link></li>
      <li>
        <router-link to="/nl-be/jobs"
          >go to page with async component</router-link
        >
      </li>
    </ul>
    <slot />
  </div>
</template>
