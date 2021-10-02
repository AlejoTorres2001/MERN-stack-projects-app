import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
const schema = yup.object().shape({
  password: yup
    .string("Password must be a String")
    .required("You must enter a new Password")
    .length(6, "Password must be at least 5 characters long"),
});
export default yupResolver(schema);
