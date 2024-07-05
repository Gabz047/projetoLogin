<script setup>
import basicInfo from './basicInfo.vue';
import cityState from './cityState.vue';
import langsHobbiesField from './langsHobbiesField.vue';
import biographyField from './biographyField.vue';
import photoField from './photoField.vue';
import userInfo from './userInfo.vue'
import {register, validate} from '@/utils/formsFunctions'

</script>
<template>
<section class="register-field" v-if="validate == false">
    <div class="tittleMain">
      <h1>Create your account!</h1>
    </div>
    
    <basicInfo />
    <cityState />
    <langsHobbiesField />
    <biographyField />
    <photoField />

    <button @click="register" class="btn-regist">Register</button>
  </section>

  <userInfo v-else/>

</template>