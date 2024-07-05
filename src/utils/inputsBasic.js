import {ref} from 'vue'
import { mainInfo } from './mainInfo'

export const inputs = ref([
    {type: 'text', placeholder: 'User', maxlength: '100', vmodel: ''},
    {type: 'text', placeholder: 'Password', maxlength: '30', vmodel: ''},
    {type: 'email', placeholder: 'Email', maxlength: '155', vmodel: ''},
    {type: 'text', placeholder: 'Adress', maxlength: '100', vmodel: ''},
    {type: 'text', placeholder: 'Confirm Password', maxlength: '30', vmodel: ''},
])