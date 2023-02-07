import { AxiosRequestConfig } from "axios";

import QueryString from "qs";

import { AccessTokenPayloadDTO, CredentialsDTO } from "../models/auth";

import { requestBackend } from "../utils/requests";
import { CLIENT_ID, CLIENT_SECRET } from "../utils/system";

import * as accessTokenRepository from "../localStorage/access-token-repository";

import jwtDecode from "jwt-decode";


export function loginRequest(loginData: CredentialsDTO) {
  //Cabeçalho da Requisição
  const headers = {
    Authorization: "Basic " + btoa(CLIENT_ID + ":" + CLIENT_SECRET),
    "Content-Type": "application/x-www-form-urlencoded",
  };
  //convertendo o corpo da requisição para form-urlenconded
  const data = QueryString.stringify({ ...loginData, grant_type: "password" });

  //config para a requisição
  const config: AxiosRequestConfig = {
    method: "POST",
    url: "/oauth/token",
    data,
    headers,
  };

  return requestBackend(config);
}

export function logout() {
  //Removendo o Token do localStorage
  accessTokenRepository.remove();
}

export function saveAccessToken(token: string) {
  accessTokenRepository.save(token);
}

export function getAccessToken() {
  return accessTokenRepository.get();
}

//Pegar o Payload do token
export function getAccessTokenPayload(): AccessTokenPayloadDTO | undefined {
  try {
    //acessando o token
    const token = accessTokenRepository.get();
    //Se o token for null, retorna undefined, caso contrario ai retorna o jwtcode do token tipado com o AccessDTO
    return token == null ? undefined : (jwtDecode(token) as AccessTokenPayloadDTO);
  } catch (error) {
    return undefined;
  }
}

//Verificando se o usuário esta autenticado
export function isAuthenticated(): boolean {
  let tokenPayload = getAccessTokenPayload();
  //Date.now é o instante de agora em ms, o exp é o tempo de expiração em segundos, por isso multiplicado por 1000
  return tokenPayload && tokenPayload.exp * 1000 > Date.now() ? true : false;
}