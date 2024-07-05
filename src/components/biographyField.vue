<script setup>
import { mainInfo } from '@/utils/mainInfo';
</script>
<template>
    <div class="biography-field">

<h2>biography: </h2>

<textarea cols="80" rows="5" v-model="mainInfo.bio" maxlength="255"></textarea>
</div>

</template>