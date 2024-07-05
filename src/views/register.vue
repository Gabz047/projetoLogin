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



/** Langs & Hobbies field end :>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

/** Biography-field */

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



/** Profile-photo end >>>>>>>>>>> */


/** Register info end>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
</style>
