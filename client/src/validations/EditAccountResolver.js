import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'
import { roles } from '../helpers/roles';
const schema = yup.object().shape({
    name: yup
    .string("name must be a String")
    .required("You must enter a new name"),
    email:yup
    .string("Email must be a string")
    .email("enter a valid email").required("You must enter an email"),
    role:yup
    .string("must be a string")
    .oneOf(Object.keys(roles))
    
})
export default yupResolver(schema)