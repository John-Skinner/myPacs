<script setup lang="ts">
import {ref} from 'vue'
const ohifUrl=ref('https://webviz.xyz/ohifViewer/');
const handleIFrameLoaded = ()  => {
  console.log('IFrame Loaded')
}

</script>

<template>

    <iframe class="box-border w-full min-h-screen bg-green-100" :src="ohifUrl" @load="handleIFrameLoaded">

    </iframe>

</template>

<style scoped>

</style>
