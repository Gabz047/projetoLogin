<script setup>
import { ref, reactive } from 'vue'
import registerInfo from '@/components/registerInfo.vue';
</script>

<template>
  <main>
    <registerInfo />
  </main>
</template>

<style scoped>

main {
  width: 100%;
  background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(56,49,83,1) 87%, rgba(60,44,123,1) 100%);
  height: 160vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
