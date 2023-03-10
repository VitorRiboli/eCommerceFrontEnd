import { AxiosRequestConfig } from "axios";

import { ProductDTO } from "../models/product";

import { requestBackend } from "../utils/requests";


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

export function updateRequest(obj : ProductDTO) {
    const config : AxiosRequestConfig = {
        method: "PUT",
        url: `/products/${obj.id}`,
        withCredentials: true,
        data: obj
    }

    return requestBackend(config);
}

export function insertRequest(obj : ProductDTO) {
    const config : AxiosRequestConfig = {
        method: "POST",
        url: `/products`,
        withCredentials: true,
        data: obj
    }

    return requestBackend(config);
}
