import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
const schema = yup.object().shape({
  name: yup
    .string("name must be a String")
    .required("You must enter a name"),
  email: yup
    .string("Email must be a string")
    .email("enter a valid email")
    .required("You must enter an email"),
  password: yup.string("must be a string").required("You must enter a password").min(6,"your password must be at least 6 characters long")
});
export default yupResolver(schema);
