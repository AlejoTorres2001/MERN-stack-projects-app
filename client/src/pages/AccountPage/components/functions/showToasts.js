import { toast } from "react-toastify";
const showToasts = (serverResponses) => {
    try {
      serverResponses.forEach((sr) => {
        if (sr.code === 0) return toast.success(sr.message);
        else return toast.error(sr.message);
      });
    } catch (error) {
      console.log(error)
    }
    
  };
export default showToasts