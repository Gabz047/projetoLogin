    
    import {ref} from 'vue'
    import { mainInfo } from './mainInfo'
    const especiais = [
    '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '{', '|',  '}', '~' 
    ]
    export const hobbie = ref('')
    export const validate = ref(false)
    

    
    export function addHobbie() {
        mainInfo.hobbies.push(hobbie.value)
        hobbie.value = ''
    }
    
    export function removeHobbie(index) {
        mainInfo.hobbies.splice(index, 1)
    }
   
    export function handleFileUpload(e) {
        const target = e.target;
    
        if (target && target.files) {
            const file = target.files[0];
            mainInfo.photo = URL.createObjectURL(file)
        }
    }
    
    export function register() {
        let validatorEsp = ref(0);
    
        for (let i = 0; i < especiais.length; i++) {
        if (mainInfo.password.includes(especiais[i]))
            validatorEsp.value++;
        }

        if (mainInfo.password != mainInfo.passwordconfirm || !mainInfo.email.includes('@') || validatorEsp.value <= 0 || mainInfo.password == '') {
            alert("Prencha os campos corretamente!")
           
        } else {
            validate.value = true
          
        }

    }
    
    export function edit() {
        validate.value = false
    }