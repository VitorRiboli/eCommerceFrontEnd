//Recursos para auxiliar as Requisições
import axios, { AxiosRequestConfig } from "axios";

import * as authService from "../services/auth-service";

import { BASE_URL } from "./system";


//Esse método auxiliar serve para centralizar a lógica 
export function requestBackend(config: AxiosRequestConfig) {

  if( config.withCredentials === true ) {
    const headers = {
      ...config.headers,
      Authorization: "Bearer " + authService.getAccessToken()
    }

    return axios( { ...config, headers, baseURL: BASE_URL } );
  } 
  else {
    const headers = config.headers;

    return axios( { ...config, headers, baseURL: BASE_URL } );
  }
}
