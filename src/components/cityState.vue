<script setup>
import { mainInfo } from '@/utils/mainInfo';
import { states } from '@/utils/states'
</script>
<template>
    <div class="cityState-field">
      <div class="city-field">
        <h2 class="desc city">City:</h2>
        <input type="text" class="inputCity" v-model="mainInfo.city" maxlength="100"/>
      </div>

      <div class="states-field">
        <h2 class="desc states">State:</h2>
        <select class="select states-select" v-model="mainInfo.state">
          <option v-for="state in states" :key="state.id" :value="state.nome">{{ state.id }}</option>
        </select>
      </div>
    </div>
</template>