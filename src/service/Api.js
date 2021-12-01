import axios from "axios";

 const api = axios.create({
  baseURL: "http://localhost:8081",
});

export function postLogin(email, password) {
    let data = {
      email: email,
      password: password
    };
  
    let loginUser = api.post("/auth/login", data)
   
    return loginUser
  }
  