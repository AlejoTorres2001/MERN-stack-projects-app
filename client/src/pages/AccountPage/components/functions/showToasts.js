import { toast } from "react-toastify";
const showToasts = (serverResponses) => {
    serverResponses.forEach((sr) => {
      if (sr.code === 0) return toast.success(sr.message);
      else return toast.error(sr.message);
    });
  };
export default showToasts