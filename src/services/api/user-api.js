import axios from "axios";

const apiUser = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchUsers = () => {
  return apiUser.get("/users");
};

export const createUser = (data) => {
  return apiUser.post("/users", data);
};

export const updateUser = (id, data) => {
  return apiUser.put(`/users/${id}`, data);
};

export const deleteUser = (id) => {
  return apiUser.delete(`/users/${id}`);
};
