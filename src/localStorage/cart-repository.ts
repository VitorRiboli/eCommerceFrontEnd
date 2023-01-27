import { OrderDTO } from "../models/order";


export function save(cart : OrderDTO) {
  //1-Convertendo o cart que é OBJ para String
  const str =  JSON.stringify(cart); 
  localStorage.setItem("com.ecommerce.vitor/Cart", str);
}


