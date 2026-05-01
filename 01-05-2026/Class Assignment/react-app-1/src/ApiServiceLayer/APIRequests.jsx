// npm i axios json-server
//? To Install the axios and the JSON-Server son the Local Project

// npx json-server pathOfTheFile --watch --port portNumber
//? To run the JSON server on the Given Port and Watch for the Changes
//  npx ./db.json --watch --port 3000

//! How to Create the EndPoints For the JSON Server
// ? {"EndPointName":[Array For the Objects]}

import axios from "axios";

let axiosInstance = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export let postProduct = async (data) => {
  let res = await axiosInstance.post("/products", data);
  console.log(res);
  console.log(res.data);
};

export let patchProduct = async (data) => {
  let res = await axiosInstance.patch(`/products/${data.id}`, data);
  console.log(res.data);
};

export let getProducts = async () => {
  let resa = await axiosInstance.get("/products");
  return resa.data;
};

export let deleteProduct = async (id) => {
  let res = await axiosInstance.delete(`/products/${id}`);
  console.log(res);
};

export let getProductById = async (id) => {
  let res = await axiosInstance.get(`/products/${id}`);
  console.log(res);
  return res.data;
};
