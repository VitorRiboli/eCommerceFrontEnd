import axios, { AxiosRequestConfig } from "axios";

import { requestBackend } from "../utils/requests";

import { BASE_URL } from "../utils/system";


export function findPageRequest(page: number, name: string, size = 12, sort = "name") {
    const config : AxiosRequestConfig = {
        method: "GET",
        //baseUrl: BASE_URL,
        url: "/products",
        params: {
            page: page,
            name: name,
            size: size,
            sort: sort
        }
    }

    return requestBackend(config);
    //return axios(config)
    //return axios.get(`${BASE_URL}/products?size=12`);
}

export function findById(id: number) {
    return requestBackend({ url: `/products/${id}`})

    //return axios.get(`${BASE_URL}/products/${id}`)
}

export function deleteById(id : number) {
    const config : AxiosRequestConfig = {
        method: "DELETE",
        url: `/products/${id}`,
        withCredentials: true
    }

    return requestBackend(config);
}

