import { OrderDTO } from "../models/order";
import { CART_KEY } from "../utils/system";

export function save(cart : OrderDTO) {
  //1-Convertendo o cart que é OBJ para String
  const str =  JSON.stringify(cart); 
  localStorage.setItem(CART_KEY, str);
}

export function get() : OrderDTO {
  //Para pegar um OBJ do localStorage, passa a KEY, vai retornar uma String
  const str = localStorage.getItem(CART_KEY) || '{"items" : []}'; //Caso de erro, vai retornar uma lista vazia de items

  return JSON.parse(str);
}

