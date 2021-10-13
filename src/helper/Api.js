import axios from "axios";
import { API_URL } from "./constants";

// Create basic api route
const Axios = axios.create({
  baseURL: API_URL,
});

// To call the get function of axios
export const getRequest = async (url) => {
  try {
    const response = await Axios.get(url);
    return response.data;
  } catch (e) {
    console.log(e);
    throw e.response.data;
  }
};

export const postRequest = async (url, payload) => {
  try {
    const response = await Axios.post(url, payload);
    return response.data;
  } catch (e) {
    console.log(e);
    throw e.response.data;
  }
};

export const putRequest = async (url, payload) => {
  try {
    const response = await Axios.put(url, payload);
    return response.data;
  } catch (e) {
    console.log(e);
    throw e.response.data;
  }
};

export const deleteRequest = async (url) => {
  try {
    const response = await Axios.delete(url);
    return response.data;
  } catch (e) {
    console.log(e);
    throw e.response.data;
  }
};
