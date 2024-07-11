import axios from "axios";
import { BASE_URL,LOGIN } from "../constant/API";

export const userLogin = (userObject)=>{
    return axios.post(BASE_URL + LOGIN, userObject);
}