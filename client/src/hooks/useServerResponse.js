import { useState } from "react";

const useServerResponse = () => {
  const [serverResponse, setServerResponse] = useState({
    code: 0,
    message: "",
  });

  return [serverResponse, setServerResponse];
};

export default useServerResponse;
