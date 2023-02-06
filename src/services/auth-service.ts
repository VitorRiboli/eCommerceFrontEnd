import { AxiosRequestConfig } from "axios";
import QueryString from "qs";
import { CredentialsDTO } from "../models/auth";
import { requestBackend } from "../utils/requests";
import { CLIENT_ID, CLIENT_SECRET } from "../utils/system";
import * as accessTokenRepository from "../localStorage/access-token-repository";

export function loginRequest(loginData: CredentialsDTO) {
  //Cabeçalho da Requisição
  const headers = {
    Authorization : "Basic " + btoa(CLIENT_ID + ":" + CLIENT_SECRET),
    "Content-Type" : "application/x-www-form-urlencoded",
  };
  //convertendo o corpo da requisição para form-urlenconded
  const data = QueryString.stringify({...loginData, grant_type : "password" });

  //config para a requisição
  const config: AxiosRequestConfig = {
    method: "POST",
    url: "/oauth/token",
    data,
    headers,
  };

  console.log(config)
  return requestBackend(config);
}

export function logout() {
  //Removendo o Token do localStorage
  accessTokenRepository.remove();
}

export function saveAccessToken(token : string) {
  accessTokenRepository.save(token);
}

export function getAccessToken() {
  return accessTokenRepository.get();
}