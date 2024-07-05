<template>
    <div class="basicInfo-field">
      <input type="text" class="inputbasic" placeholder="User" v-model="mainInfo.user" maxlength="100"/>

      <input type="date" class="inputbasic" name="birth" min="1874-01-01" max="2014-01-01" v-model="mainInfo.date" />

      <input type="text" class="inputbasic" placeholder="Password" v-model="passwordV" maxlength="30"/>

      <input type="email" class="inputbasic" placeholder="Email" v-model="emailV" maxlength="155"/>

      <input type="text" class="inputbasic" placeholder="Adress" v-model="mainInfo.adress" maxlength="100"/>

      <input type="text" class="inputbasic" placeholder="Confirm Password" v-model="validationV" maxlength="30"/>
    </div>
</template>