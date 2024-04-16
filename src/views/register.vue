<script setup>
import { ref, reactive } from 'vue'

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
            <p class="nochange">Languages:</p>
            
            <li v-for="(lang, index) in mainInfo.langs" :key="index"> {{ lang }}</li>

        </div>
        <div class="hobbies-info">
            <p class="nochange">Hobbies:</p>
            <div class="hob">
        
            <li v-for="(hobbie, index) in hobbies" :key="index"> {{ hobbie }}</li>
    
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

    <section class="register-field" v-else>
      <div class="tittleMain">
        <h1>Create your account!</h1>
      </div>
      <div class="basicInfo-field">
        <input type="text" class="inputbasic" placeholder="User" v-model="mainInfo.user" maxlength="100"/>

        <input type="date" class="inputbasic" name="birth" min="1874-01-01" max="2014-01-01" v-model="mainInfo.date" />

        <input type="text" class="inputbasic" placeholder="Password" v-model="passwordV" maxlength="30"/>

        <input type="email" class="inputbasic" placeholder="Email" v-model="emailV" maxlength="155"/>

        <input type="text" class="inputbasic" placeholder="Adress" v-model="mainInfo.adress" maxlength="100"/>

        <input type="text" class="inputbasic" placeholder="Confirm Password" v-model="validationV" maxlength="30"/>
      </div>
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

      <div class="langHobbies-field">
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

        <div class="hobbies-field">

            <div class="hobbies-options">
               <div class="desc-input">
                <h2>Hobbies:</h2>
                <div class="group">
                <input type="text" placeholder="Hobbies" v-model="hobbieV">
                <button @click="addHobbie">></button>
                </div>
            </div>
                <div class="lista-hobbies">
                    <li v-for="(hobbie, index) in hobbies" :key="index"> {{ hobbie }} <button @click="removeHobbie(index)">X</button> </li>
                </div>

            </div>

        </div>
      </div>

      <div class="biography-field">

        <h2>biography: </h2>

        <textarea cols="80" rows="5" v-model="mainInfo.bio" maxlength="255"></textarea>
      </div>

      <div class="photo-field">

        <div class="group-pht">
        <h2>Profile-photo:</h2>

        <input type="file" @change="handleFileUpload($event)" class="inputbasic">
         </div>
      </div>

      <button @click="register" class="btn-regist">Register</button>
    </section>

  </main>
</template>

<style scoped>

main {

  width: 100%;
  background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(56,49,83,1) 87%, rgba(60,44,123,1) 100%);
  height: 160vh;
  display: flex;
  align-items: center;
  justify-content: center;

}

/** Info registered */

.nochange {
    word-break: keep-all;
}

.userInfo {
    width: 80%;
    height: 150vh;
    background-color: #E6E6E7;
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
    background-color: #aeaeaf;
    border-radius: 5px;
    max-width: 100%;
    word-break: break-all;
}

.info-field {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    height: 100%;
    width: 60%;
    align-items: left;
    margin-top: 8vh;
}

.langs-info {
    display: flex;
    height: 5vh;
    padding: 1vh 0 0 0;
    border-radius: 10px;
    align-items:center;
    margin-top: 1vh;
    
}

.langs-info li {
    list-style: none;
    margin-left: 1vh 0 0 0;
    font-size: 2.5vh;
    margin-left: 1.5vh;
    margin-bottom: 2vh;
    border-radius: 5px;
    background-color: #aeaeaf;
    padding: 0.4vh;
}

.langs-info p {
    padding: 1vh 1vh 0 1vh;
}

.langs-info li::after {
    content: ",";
}

.hobbies-info {
    display: flex;
    max-height: 15vh;
    border-radius: 10px;
    align-items:flex-start;
    padding: 1vh 0 0 0;
    margin-top: 2vh;
    max-width: 100%;
}

.hobbies-info li {
    list-style: none;
    margin-left: 1vh 0 0 0;
    font-size: 2.5vh;
    margin-left: 1.5vh;
    margin-bottom: 2vh;
    border-radius: 5px;
    background-color: #aeaeaf;
    padding: 0.4vh;
    width: auto;
}

.hobbies-info p {
    padding: 1vh 1vh 0 1vh;
}

.hobbies-info li::after {
    content: ",";
}

.bio-info {
    background-color: #aeaeaf;
    height: auto;
    border-radius: 5px;
    margin-top: 2vh;
    display: flex;
    flex-wrap: wrap;
    max-width: 100%;
}

.wrapper {
    display: flex;
    flex-wrap: wrap;
    word-break:break-all;
    max-width: 100%;
    height: 100%;
}

.hob {
    display: flex;
    width: 100%;
    max-height: 100%;
    overflow-y: scroll;
    flex-wrap: wrap;
}

.bio-info p {
    font-size: 2.5vh;
}

/** Info registered end>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

/** Register info */

.register-field {
    width: 90%;
    height: 120vh;
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
    margin-top: 1.5vh;
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
    font-size: 3vh;
}

.city-field {
    width: 35%;
    display: flex;
    justify-content: space-between;
}

.city-field h2 {
    font-size: 3vh;
}

.states-field {
    display: flex;
    width: 35%;
    justify-content: space-between;
}

select {
    padding: 5px;
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
    margin-top: 1.5vh;
}

.langs-field {
    width: 100%;
    display: flex;
    height: 49%;
    justify-content: space-between;
}

.langs-field h2 {
    background-color: white;
    border: 1px solid;
    border-radius: 5px;
    padding: 10px;
    height: 50%;
    font-size: 3vh;
}

.lang-options {
    width: 83%;
    height: 80%;
    border-radius: 5px;
    border: 1px solid;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: white
}

.lang-options label {
    font-size: 2.8vh;
}

.labelLangs {
    display: block;
}

.labelLangs input {
    height: 0;
    width: 0;
}

.checkmark {
    width: 35px;
    height: 35px;
    background-color: rgb(252, 0, 0);
}

.hobbies-field {
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 49%;
    margin-top: 0.5%;
}

.hobbies-field h2 {
    font-size: 3vh;
}

.hobbies-options {
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-radius: 5px;
}
.desc-input {
    display: flex;
    justify-content: space-between;
    background-color: white;
    border: 1px solid;
    padding: 10px;
    border-radius: 5px;
    width: 35%;
    height: 60%;
}

.desc-input input {
    padding: 5px;
    border-radius: 5px;
    width: 80%;
    border: 1px solid;
}

.group {
    display: flex;
    justify-content: space-between;
}

.group button {
    border-radius: 5px;
    border: none;
    background-color: rgb(118, 241, 118);
    width: 18%;
    transition: 0.25s;
}
.group button:hover {
    background-color: rgb(85, 221, 85);
}
.group button:active {
    background-color: rgb(21, 109, 21);
}

.lista-hobbies {
    width: 60%;
    height: 80%;
    display: flex;
    flex-wrap: wrap;
    overflow:hidden;
    border-radius: 5px;
    border: 1px solid;
    overflow-y: scroll;
    background-color: white
}

.lista-hobbies li {
    list-style: none;
    margin: 1vh 0 0 1vw;
    padding: 5px 5px 0 5px  ;
    height: 6vh;
    border-radius: 5px;
    background-color: rgba(173, 173, 173, 0.8);
    border: 1px solid;
}

.lista-hobbies button {
    background-color: rgb(240, 75, 75);
    border: none;
    border-radius: 5px;
    transition: 0.25s;
}

.lista-hobbies button:hover {
    background-color: rgb(218, 42, 42);
}

.lista-hobbies button:active {
    background-color: rgb(139, 30, 30);
}



/** Langs & Hobbies field end :>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

/** Biography-field */

.biography-field {
    width: 90%;
    display: flex;
    justify-content: space-between;
    margin-top: 1vh;
    margin-top: 1.5vh;
}

.biography-field h2 {
    background-color: white;
    border: 1px solid;
    border-radius: 5px;
    padding: 15px;
    font-size: 3vh;
    height: 8vh;
}

textarea {
    border-radius: 5px;
    width: 83%;
    height: 80%;
    border: 1px solid;
    padding: 5px;
}

/** Biography-field END >>>>>>>>>>>>>*/


/** Profile-photo */

.photo-field {
    width: 90%;
    display: flex;
    justify-content: space-between;
    margin-top: 1vh;
}

.photo-field h2 {
    background-color: white;
    border: 1px solid;
    border-radius: 5px;
    padding: 15px;
    font-size: 3vh;
    height: 8vh;
}

.photo-field input {
    width: 60%;
    height: 8vh;
}

.group-pht {
    display: flex;
    width: 34.2vw;
    justify-content: space-between;
}

.btn-regist {
    width: 40%;
    margin-top: 2vh;
    margin-bottom: 2vh;
    padding: 10px;
    border: 1px;
    border-radius: 5px;
    background-color: #5200FF;
}

.btn-regist:hover {
    background-color: #6b2feb;
}

/** Profile-photo end >>>>>>>>>>> */


/** Register info end>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
</style>
