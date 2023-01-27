import { OrderDTO } from "../models/order";


export function save(cart : OrderDTO) {
  //1-Convertendo o cart que é OBJ para String
  const str =  JSON.stringify(cart); 
  localStorage.setItem("com.ecommerce.vitor/Cart", str);
}

export function get() : OrderDTO {
  //Para pegar um OBJ do localStorage, passa a KEY, vai retornar uma String
  const str = localStorage.getItem("com.ecommerce.vitor/Cart") || '{"items" = []}'; //Caso de erro, vai retornar uma lista vazia de items

  return JSON.parse(str);
}

