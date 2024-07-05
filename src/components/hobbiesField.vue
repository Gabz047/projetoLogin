<script setup>
import { mainInfo } from '@/utils/mainInfo';
import {addHobbie, removeHobbie, hobbie} from '@/utils/formsFunctions'
</script>
<template>
     <div class="hobbies-field">

          <div class="hobbies-options">
             <div class="desc-input">
              <h2>Hobbies:</h2>
              <div class="group">
              <input type="text" placeholder="Hobbies" v-model="hobbie">
              <button @click="addHobbie">></button>
              </div>
          </div>
              <div class="lista-hobbies">
                  <li v-for="(hobbie, index) in mainInfo.hobbies" :key="index"> {{ hobbie }} <button @click="removeHobbie(index)">X</button> </li>
              </div>

          </div>

      </div>
</template>