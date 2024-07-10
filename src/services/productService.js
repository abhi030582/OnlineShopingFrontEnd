import axios from "axios";
import { BASE_URL, GET_CATEGORIES, GET_PRODUCTS } from '../constant/API';

export const getProducts = () => {
    return axios.get(BASE_URL + GET_PRODUCTS);
}

export const getCategories = () => {
    return axios.get(BASE_URL + GET_CATEGORIES);
}

