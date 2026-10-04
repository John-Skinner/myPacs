<script setup lang="ts">
const logoutAction = () => {
  console.log('login action')
}
</script>

<template>
  <button  class="border-4 border-indigo-500" v-on:click="logoutAction"> Logout </button>
</template>

<style scoped>

</style>
