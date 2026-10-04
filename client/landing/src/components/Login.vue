<script setup lang="ts">


const loginAction = () => {
  console.log('login action')
}
</script>

<template>

 <button  class="border-4 border-indigo-500" v-on:click="loginAction"> Login</button>
</template>
