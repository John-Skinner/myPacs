<script setup lang="ts">
import '../stores/ohifViewerAppStore.ts';

const logoutAction = () => {
  console.log('login action')

   const keycloakOptions = {
    'redirectUri': 'https://webviz.xyz/'
  }
  if (window.keyCloakInstance) {
    window.keyCloakInstance.logout(keycloakOptions)
  }



}
</script>

<template>
  <button  class="border-4 border-indigo-500" v-on:click="logoutAction"> Logout </button>
</template>

<style scoped>

</style>
