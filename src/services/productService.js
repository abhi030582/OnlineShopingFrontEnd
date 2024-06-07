
import axios from "axios";
import { BASE_URL, GET_PRODUCTS } from '../constant/API'
export const getProducts = () => {

    return axios.get(BASE_URL + GET_PRODUCTS);

}

