//Recursos para auxiliar as Requisições
import axios, { AxiosRequestConfig } from "axios";

import { useNavigate } from "react-router-dom";

import * as authService from "../services/auth-service";

import { BASE_URL } from "./system";

import { history } from "./history";


//Esse método auxiliar serve para centralizar a lógica 
export function requestBackend(config: AxiosRequestConfig) {

  if (config.withCredentials === true) {
    const headers = {
      ...config.headers,
      Authorization: "Bearer " + authService.getAccessToken()
    }

    return axios({ ...config, headers, baseURL: BASE_URL });
  }
  else {
    const headers = config.headers;

    return axios({ ...config, headers, baseURL: BASE_URL });
  }
}

// REQUEST INTERCEPTOR
axios.interceptors.request.use(
  function (config) {
    // DO SOMETHING BEFORE REQUEST IS SENT

    return config;
  },
  function (error) {
    // DO SOMETHING WITH REQUEST ERROR

    return Promise.reject(error);
  }
);

// RESPONSE INTERCEPTOR
axios.interceptors.response.use(
  function (response) {
    // DO SOMETHING WITH RESPONSE DATA IF STATUS IS 2xx /OK

    return response;
  },
  function (error) {
    // DO SOMETHING WITH RESPONSE ERROR
    if(error.response.status === 401) {
      history.push("/login");
    }
    if(error.response.status === 403) {
      history.push("/catalog");
    }

    return Promise.reject(error);
  }
);
