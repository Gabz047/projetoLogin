<script setup>
import { RouterLink, RouterView } from 'vue-router'
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
        <div id="c-email">
          <div id="c-iconEmail"></div>
          <input type="text" placeholder="Email Adrees" />
        </div>
        <div id="c-password">
          <div id="c-iconPassword"></div>
          <input type="text" placeholder="Password">
        </div>
        <a href="">Forgort password?</a>
      </div>
      <div class="c-btnLogin">
        <button type="submit" class="btn btn-primary">Login</button>
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
  }
</style>
