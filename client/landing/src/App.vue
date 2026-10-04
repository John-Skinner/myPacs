<script setup lang="ts">
import ToolBar from "@/components/ToolBar.vue";
import Viewer from "@/components/Viewer.vue";
import { ref } from "vue";

</script>


<template>


  <main class="min-h-screen min-v-screen">
    <div class="min-h-screen min-v-screen">
      <div class="object-top">

        <ToolBar/>
      </div>
      <div class="object-bottom">
        <Viewer/>
      </div>



    </div>


  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 512px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
