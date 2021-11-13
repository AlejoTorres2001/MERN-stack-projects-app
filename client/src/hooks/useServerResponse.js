import { useState } from "react";

const useServerResponse = (param) => {
  const [serverResponse, setServerResponse] = useState(param);

  return [serverResponse, setServerResponse];
};

export default useServerResponse;
