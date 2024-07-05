import {ref} from 'vue'

export const inputs = ref([
    {type: 'text', placeholder: 'User', maxlength: '100'},
    {type: 'text', placeholder: 'Password', maxlength: '30'},
    {type: 'email', placeholder: 'Email', maxlength: '155'},
    {type: 'text', placeholder: 'Adress', maxlength: '100'},
    {type: 'text', placeholder: 'Confirm Password', maxlength: '30'},
])