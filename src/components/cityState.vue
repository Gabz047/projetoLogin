<template>
    <div class="cityState-field">
      <div class="city-field">
        <h2 class="desc city">City:</h2>
        <input type="text" class="inputCity" v-model="mainInfo.city" maxlength="100"/>
      </div>

      <div class="states-field">
        <h2 class="desc states">State:</h2>
        <select class="select states-select" v-model="mainInfo.state">
          <option v-for="(state, index) in states" :key="index">{{ state }}</option>
        </select>
      </div>
    </div>
</template>