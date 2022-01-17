<script lang="ts" setup>
import logo from "~/assets/image.svg?component";
</script>
<template>
  <div>
    <router-link to="/"><logo width="100px" /></router-link>

    <ul>
      <li><router-link to="/">go to home</router-link></li>
      <li>
        <router-link to="/nl/one">go to page with async component</router-link>
      </li>
    </ul>
    <slot></slot>
  </div>
</template>
