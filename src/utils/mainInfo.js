import {reactive} from 'vue'

export const mainInfo = reactive({
    user: "", 
    password: "",
    passwordconfirm: "",
    email: "", 
    adress: "",
    city: "", 
    state: "",
    langs: [],
    hobbies: [],
    bio: "",
    photo: null,
    date: ""
})