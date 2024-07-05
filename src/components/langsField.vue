<script setup>
import { mainInfo } from '@/utils/mainInfo';
import {langs} from '@/utils/langs'
</script>
<template>
     <div class="langs-field">
        <h2>Languages:</h2>
        <div class="lang-options">
          <label v-for="lang in langs" :key="lang.shortcut" :for='lang.shortcut' class="labelLang"> {{ lang.nome }}
          <input type="checkbox" :value='lang.shortcut' class="check-lang" v-model="mainInfo.langs"/>
          <span class="checkmark"></span>
          </label>
        </div>
      </div>
</template>