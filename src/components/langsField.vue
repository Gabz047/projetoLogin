<script setup>
import { mainInfo } from '@/utils/mainInfo';
</script>
<template>
     <div class="langs-field">
        <h2>Languages:</h2>
        <div class="lang-options">
          <label for='js' class="labelLang"> JavaScript 
          <input type="checkbox" value='js' class="check-lang" v-model="mainInfo.langs"/>
          <span class="checkmark"></span>
          </label>
          
          <label for=' go ' class="labelLang"> Go 
          <input type="checkbox" value='go' class="check-lang" v-model="mainInfo.langs"/>
          <span class="checkmark"></span>
          </label>

          <label for=' ruby ' class="labelLang"> Ruby 
          <input type="checkbox" value='ruby' class="check-lang" v-model="mainInfo.langs"/>
          <span class="checkmark"></span>
          </label>

          <label for=' py ' class="labelLang"> Python
          <input type="checkbox" value=' py ' class="check-lang" v-model="mainInfo.langs"/>
          <span class="checkmark"></span>
          </label>

          <label for=' java ' class="labelLang"> Java 
          <input type="checkbox" value='java' class="check-lang" v-model="mainInfo.langs"/>
          <span class="checkmark"></span>
          </label>

          <label for=' c++ ' class="labelLang"> C++ 
          <input type="checkbox" value=' c++ ' class="check-lang" v-model="mainInfo.langs"/>
          <span class="checkmark"></span>
          </label>
        </div>
      </div>
</template>