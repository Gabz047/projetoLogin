<script setup>
import { RouterLink, RouterView } from 'vue-router'
import {ref} from 'vue'

const passwordInput = ref('')
const emailInput = ref('')

const required = {
  maxLenght: 10,
  emailValidate: ["@gmail.com", "@hotmail.com"]
  }

</script>

<!-- em identificadores como id ou class "c" signfica "container" -->

<template>
  <main>
    <section class="c-login">
      <div class="c-mainTxt">
        <h1>Robilson Empreendimentos</h1>
        <RouterLink to="/register">New here? Create an account</RouterLink>
      </div>
      <div class="c-inputField">
        <div class="cput c-email">
          <div class="cicon c-iconEmail"></div>
          <input type="text" placeholder="Email Adrees" class="input emailInput" v-model="emailInput" />
        </div>
        <div class="cput c-password">
          <div class="cicon c-iconPassword"></div>
          <input type="text" placeholder="Password" class="input passInput" v-model="passwordInput" />
        </div>
        <a href="">Forgort password?</a>
      </div>
      <div class="c-btnLogin">
        <button type="submit" class="btn btn-primary" @click="login">Login</button>
      </div>
    </section>
  </main>
</template>

<style scoped>
  main {
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(56,49,83,1) 87%, rgba(60,44,123,1) 100%);
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .c-login {
    width: 35%;
    height: 80vh;
    border-radius: 10px;
    background-color: #E9E8EA;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .input {
    padding: 10px;
    font-size: 20px;
  }

  .c-mainTxt {
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 2.5vh;
  }
  
  .c-mainTxt h1 {
    font-size: 4.5vh;
  }

  .c-inputField {
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }

  .cput {
    width: 90%;
    height: 18%;
    display: flex;
    justify-content: space-between;
  }

  .cicon {
    width: 25%;
    height: 100%;
    background-color: blue;
    border-radius: 10px 0 0 10px;
  }

  .emailInput {
    width: 75%;
    height: 100%;
    border-radius: 0 10px 10px 0;
    border: 1px solid black;
  }

  .passInput {
    width: 75%;
    height: 100%;
    border-radius: 0 10px 10px 0;
    border: 1px solid black;
  }

  .c-btnLogin {
    width: 80%;
    height: 8%;
    background-color: aqua;
    margin-bottom: 10%;
  }

  .btn {
    width: 100%;
    height: 100%;
  }
</style>
