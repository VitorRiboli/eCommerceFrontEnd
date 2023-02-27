//export const BASE_URL = "http://localhost:8090"; //Configurado no Spring a porta 8090

export const BASE_URL = import.meta.env.VITE_BACKEND_URL ?? "http://localhost:8090";
export const CLIENT_ID = import.meta.env.VITE_CLIENT_ID ?? "myclientid";
export const CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET ?? "myclientsecret";

export const CART_KEY = "com.ecommerce.vitor/Cart";
export const TOKEN_KEY = "com.ecommerce.vitor/Token";

