<script setup lang="ts">


const loginAction = () => {
  console.log('login action')
}
</script>

<template>

 <button v-on:click="loginAction"> Login</button>
</template>
