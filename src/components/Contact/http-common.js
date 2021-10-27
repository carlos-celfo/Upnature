import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:8080/api%22",
    headers:{
    "Content-type":"application/json"}
})
