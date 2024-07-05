<script setup>
import { handleFileUpload } from '@/utils/formsFunctions';
</script>
<template>
     <div class="photo-field">

      <div class="group-pht">
      <h2>Profile-photo:</h2>

      <input type="file" @change="handleFileUpload($event)" class="inputbasic">
       </div>
    </div>
</template>