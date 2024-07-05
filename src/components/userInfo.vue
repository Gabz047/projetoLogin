<script setup>
import { validate, edit } from '@/utils/formsFunctions';
import { mainInfo } from '@/utils/mainInfo';
</script>

<template>
    <section class="userInfo">
        <button @click="edit" class="btn btn-primary">Edit</button>
        <div class="img-field">
        <img  v-if="mainInfo.photo" :src="mainInfo.photo">
        </div>

    <div class="info-field">
        <p> User: {{ mainInfo.user }}</p>
        <p> Password: {{ mainInfo.password }}</p>
        <p> Email: {{ mainInfo.email }}</p>
        <p> Birthday Date: {{ mainInfo.date }}</p>
        <p> Adress: {{ mainInfo.adress }}</p>
        <p> City: {{ mainInfo.city }}</p>
        <p> State: {{  mainInfo.state }} </p>
        <div class="langs-info">
            <p class="nochange">Languages:</p>
            
            <li v-for="(lang, index) in mainInfo.langs" :key="index"> {{ lang }}</li>

        </div>
        <div class="hobbies-info">
            <p class="nochange">Hobbies:</p>
            <div class="hob">
        
            <li v-for="(hobbie, index) in mainInfo.hobbies" :key="index"> {{ hobbie }}</li>
    
        </div>
        </div>
       
      
        
       <div class="bio-info">
        <p>Biography: </p>
        <div class="wrapper">
        <p class="b-p"> {{ mainInfo.bio }}</p>
        </div>
        </div>
    </div>

    </section>
</template>