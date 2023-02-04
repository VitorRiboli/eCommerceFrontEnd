import { AxiosRequestConfig } from "axios";
import QueryString from "qs";
import { CredentialsDTO } from "../models/auth";
import { requestBackend } from "../utils/requests";
import { BASE_URL, CLIENT_ID, CLIENT_SECRET } from "../utils/system";

export function loginRequest(loginData: CredentialsDTO) {
  //Cabeçalho da Requisição
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: "Basic " + window.btoa(CLIENT_ID + ":" + CLIENT_SECRET),
  };

  //convertendo o corpo da requisição para form-urlenconded
  const data = QueryString.stringify({
    ...loginData,
    grant_type: "password",
  });

  //fazendo a requisição
  const config: AxiosRequestConfig = {
    method: "POST",
    url: "/oauth/token",
    data,
    headers,
  };

  return requestBackend(config);
}