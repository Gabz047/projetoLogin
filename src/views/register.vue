<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, computed, reactive } from 'vue'

// States & City

const especiais = [
'!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '{', '|',  '}', '~' 
]

const states = ref([
  'AC',
  'AL',
  'AP',
  'AM',
  'BA',
  'CE',
  'DF',
  'ES',
  'GO',
  'MA',
  'MT',
  'MS',
  'MG',
  'PA',
  'PB',
  'PR',
  'PE',
  'PI',
  'RJ',
  'RN',
  'RS',
  'RO',
  'RR',
  'SC',
  'SP',
  'SE',
  'TO'
])

// States & City end >>>>>>>>>>>>

//Langs & Hobbies

const hobbieV = ref('')
const hobbies = ref([])

function addHobbie() {
    hobbies.value.push(hobbieV.value)
    hobbieV.value = ''
}

function removeHobbie(index) {
    hobbies.value.splice(index, 1)
}


//Langs & Hobbies end >>>>>>>>>>>>

//basic info

const emailV = ref('')
const passwordV = ref('')
const validationV = ref('')

//basic info end >>>>>>>>>>>>

// avatar info

const avatar = reactive({
    photo: null
})

function handleFileUpload(e) {
    const target = e.target;

    if (target && target.files) {
        const file = target.files[0];
        avatar.photo = URL.createObjectURL(file)
    }
}

//avatar info end >>>>>>>>>>>>

// register

const validate = ref(false)

const mainInfo = reactive({
    user: "", //done
    date: "", //done
    password: "", //done
    email: "", //done
    adress: "", //done
    city: "", //city
    state: "", //done
    langs: [], //done
    hobbies: [], //done
    bio: "", //done
})


function register() {
    let validatorEsp = ref(0);

    for (let i = 0; i < especiais.length; i++) {
    if (passwordV.value.includes(especiais[i]))
        validatorEsp.value++;
    }

    if (passwordV.value != validationV.value || !emailV.value.includes("@") || validatorEsp.value < 1) {
        alert("Credentials invalide")
    } else {
    validate.value = true
    mainInfo.hobbies = hobbies.value
    mainInfo.password = passwordV.value
    mainInfo.email = emailV.value
    }
    
}

function edit() {
    validate.value = false
}

//register end >>>>>>>>>>>>
</script>

<template>
  <main>

    <section class="userInfo container-fluid" v-if="validate == true">
        <button @click="edit" class="btn btn-primary">Edit</button>
        <div class="img-field">
        <img  vi-if="avatar.photo" :src="avatar.photo">
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
            <p>Languages:</p>
            <li v-for="(lang, index) in mainInfo.langs" :key="index"> {{ lang }}</li>
        </div>
        <div class="hobbies-info">
            <p>Hobbies:</p>
            <li v-for="(hobbie, index) in hobbies" :key="index"> {{ hobbie }}</li>
        </div>
       
      
        
       
        <p> Biography: {{ mainInfo.bio }}</p>

    </div>

    </section>

    <section class="register-field" v-else>
      <div class="tittleMain">
        <h1>Create your account!</h1>
      </div>
      <div class="basicInfo-field">
        <input type="text" class="inputbasic" placeholder="User" v-model="mainInfo.user" />

        <input type="date" class="inputbasic" name="birth" min="1874-01-01" max="2014-01-01" v-model="mainInfo.date" />

        <input type="text" class="inputbasic" placeholder="Password" v-model="passwordV"/>

        <input type="email" class="inputbasic" placeholder="Email" v-model="emailV"/>

        <input type="text" class="inputbasic" placeholder="Adress" v-model="mainInfo.adress"/>

        <input type="text" class="inputbasic" placeholder="Confirm Password" v-model="validationV"/>
      </div>
      <div class="cityState-field">
        <div class="city-field">
          <h2 class="desc city">City:</h2>
          <input type="text" class="inputCity" v-model="mainInfo.city"/>
        </div>

        <div class="states-field">
          <h2 class="desc states">State:</h2>
          <select class="select states-select" v-model="mainInfo.state">
            <option v-for="(state, index) in states" :key="index">{{ state }}</option>
          </select>
        </div>
      </div>

      <div class="langHobbies-field">
        <div class="langs-field">
          <h2>Languages:</h2>
          <div class="lang-options">
            <label for='js'> JavaScript </label>
            <input type="checkbox" value='js' class="check-lang" v-model="mainInfo.langs"/>

            <label for=' go '> Go </label>
            <input type="checkbox" value='go' class="check-lang" v-model="mainInfo.langs"/>

            <label for=' ruby '> Ruby </label>
            <input type="checkbox" value='ruby' class="check-lang" v-model="mainInfo.langs"/>

            <label for=' py '> Python</label>
            <input type="checkbox" value=' py ' class="check-lang" v-model="mainInfo.langs"/>
            
            <label for=' java '> Java </label>
            <input type="checkbox" value='java' class="check-lang" v-model="mainInfo.langs"/>

            <label for=' c++ '> C++ </label>
            <input type="checkbox" value=' c++ ' class="check-lang" v-model="mainInfo.langs"/>
          </div>
        </div>

        <div class="hobbies-field">

            <div class="hobbies-options">
               <div class="desc-input">
                <h2>Hobbies:</h2>
                <input type="text" placeholder="Hobbies" v-model="hobbieV">
                <button @click="addHobbie">></button>
               </div>
                <div class="lista-hobbies">
                    <li v-for="(hobbie, index) in hobbies" :key="index"> {{ hobbie }} <button @click="removeHobbie(index)">X</button> </li>
                </div>

            </div>

        </div>
      </div>

      <div class="biography-field">

        <h2>biography: </h2>

        <textarea cols="80" rows="5" v-model="mainInfo.bio"></textarea>
      </div>

      <div class="photo-field">

        <h2>Profile-photo</h2>

        <input type="file" @change="handleFileUpload($event)" class="inputbasic">

      </div>

      <button @click="register">Register</button>
    </section>

   

  </main>
</template>

<style scoped>

main {

  width: 100%;
  background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(56,49,83,1) 87%, rgba(60,44,123,1) 100%);
  height: 120vh;
  display: flex;
  align-items: center;
  justify-content: center;

}

/** Info registered */

.userInfo {
    width: 80%;
    height: 80vh;
    background-color: rgb(235, 235, 235);
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgb(7, 7, 7);
}

.userInfo button {
    width: 80px;
    margin: 2vh;
}

.userInfo img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
}

.img-field {
    width: 15vw;
    height: 30vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
}

p {
    font-size: 2.5vh;
    padding: 1vh;
    
}

.info-field {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    height: 100%;
    width: 60%;
    justify-content: center;
    align-items: left;
}

.langs-info {
    display: flex;
    height: 5vh;
    padding: 1vh 0 0 0;
    border-radius: 10px;
    align-items:center;
}

.langs-info li {
    list-style: none;
    margin-left: 1vh 0 0 0;
    font-size: 2.5vh;
    padding: 0;
}

.langs-info p {
    padding: 1vh 1vh 0 1vh;
}

.langs-info li::after {
    content: ",";
}

.hobbies-info {
    display: flex;
    height: 5vh;
    border-radius: 10px;
    align-items:center;
    padding: 1vh 0 0 0;
}

.hobbies-info li {
    list-style: none;
    margin-left: 1vh 0 0 0;
    font-size: 2.5vh;
    padding: 0;
}

.hobbies-info p {
    padding: 1vh 1vh 0 1vh;
}

.hobbies-info li::after {
    content: ",";
}

/** Info registered end>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

/** Register info */

.register-field {
    width: 90%;
    height: 110vh;
    background-color: rgb(235, 235, 235);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.tittleMain {
    height: 8%;
    width: 90%;
    padding: 2px;
    display: flex;
    justify-content: center;
}
.tittleMain h1 {
    font-size: 6vh;
}

.basicInfo-field {
    width: 90%;
    height: 30%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin-top: 2%;
}

.inputbasic {
    height: 30%;
    width: 30%;
    border-radius: 5px;
    border: 1px solid;
    padding: 1vh;
}

.cityState-field {
    height: 8%;
    width: 90%;
    display: flex;
    justify-content: space-between;

}

.cityState-field h2 {
    background-color: white;
    border: 1px solid;
    border-radius: 5px;
    padding: 15px;
}

.city-field {
    width: 40%;
    display: flex;
    justify-content: space-between;
}

.states-field {
    display: flex;
    width: 40%;
    justify-content: space-between;
}

.inputCity {
    height: 87%;
    width: 76%;
    border-radius: 5px;
    border: 1px solid;
    padding: 10px;
}   

.select {
    height: 87%;
    width: 71%;
    border-radius: 5px;
    border: 1px solid;
    padding: 10px;
}

/** Langs & Hobbies field */

.langHobbies-field {
    height: 38%;
    width: 90%;
    background-color: aqua;
}

.langs-field {
    width: 100%;
    background-color: aquamarine;
    display: flex;
    height: 45%;
    justify-content: space-between;
}

.langs-field h2 {
    background-color: white;
    border: 1px solid;
    border-radius: 5px;
    padding: 10px;
    height: 70%;
}

.lang-options {
    width: 83%;
    height: 100%;
    border-radius: 5px;
    border: 1px solid;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}

.lang-options label {
    font-size: 3.2vh;
}

/** Langs & Hobbies field end :>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/



/** Register info end>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
</style>
