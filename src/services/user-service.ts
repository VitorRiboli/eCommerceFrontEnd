import { AxiosRequestConfig } from "axios";
import { requestBackend } from "../utils/requests";
import * as authService from "./auth-service";

//Buscar usuario logado
export function findMe() {

  const config : AxiosRequestConfig= {
    url: "/users/me",
    withCredentials: true
  }

  return requestBackend(config);
}
