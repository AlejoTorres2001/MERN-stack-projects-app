import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
const schema = yup.object().shape({
    name: yup
      .string("name must be a String")
      .required("You must enter an username"),
    password: yup.string("must be a string").required("You must enter a password")
  });
  export default yupResolver(schema);
  