<script setup lang="ts">
import FormComp from './components/FormComp.vue';
/*import { defineComponent } from 'vue'
export default defineComponent({
  name: 'App',
  data() {
    return {
    }
  }
})*/
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <FormComp />
    </div>

  </header>
</template>

<style scoped>
header {
  margin-top: -100px;
  line-height: 1.1;
  max-height: 100vh;
}
img {
  margin-top: 100px;
}
</style>
