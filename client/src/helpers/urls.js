export const PROXY = "http://localhost:8080/";
export const USERS = "http://localhost:3001/api/users";
export const LOGIN = "/login";
export const UPDATE = (id) => (id ? `/update/${id}` : "/update/id");
export const DELETE = (id) => (id ? `/delete/${id}` : "/delete/id");
export const setOptions = (method, data = {}) => {
  return {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
};
