import axios from 'axios'
// import React,{useEffect} from 'react'

const API_URL = "http://localhost:8080/api/";

const Api = axios.create({
    baseURL: API_URL,
  });
  

export default Api
