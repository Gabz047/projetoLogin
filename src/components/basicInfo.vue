<script setup>
import { mainInfo } from '@/utils/mainInfo';
import { inputs } from '@/utils/inputsBasic'
</script>
<template>
    <div class="basicInfo-field">
      <input v-for="input in inputs" :type="input.type" class="inputbasic" :placeholder="input.placeholder" v-model="mainInfo.user" :maxlength="input.maxlength"/>

      
      <input type="date" class="inputbasic" name="birth" min="1874-01-01" max="2014-01-01" v-model="mainInfo.date" />
    </div>
</template>