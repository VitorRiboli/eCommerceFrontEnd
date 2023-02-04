//Recursos para auxiliar as Requisições
import axios, { AxiosRequestConfig } from "axios";

import { BASE_URL } from "./system";

//Esse método auxiliar serve para centralizar a lógica 
export function requestBackend(config: AxiosRequestConfig) {
  return axios( { ...config, baseURL: BASE_URL} );
}
