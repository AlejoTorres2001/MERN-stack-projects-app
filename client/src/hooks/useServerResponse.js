import { useState } from "react";

const useServerResponse = () => {
  const [serverResponse, setServerResponse] = useState([]);

  return [serverResponse, setServerResponse];
};

export default useServerResponse;
