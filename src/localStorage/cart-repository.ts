import { OrderDTO, OrderItemDTO } from "../models/order";
import { CART_KEY } from "../utils/system";

export function save(cart : OrderDTO) {
  //1-Convertendo o cart que é OBJ para String
  const str =  JSON.stringify(cart); 
  localStorage.setItem(CART_KEY, str);
}

export function get() : OrderDTO {
  //Para pegar um OBJ do localStorage, passa a KEY, vai retornar uma String
  const str = localStorage.getItem(CART_KEY) || '{"items" : []}'; //Caso de erro, vai retornar uma lista vazia de items

  //JSON.parse não cria os metodos que tem no construtor, como subTotal() e total()
  const obj = JSON.parse(str) as OrderDTO;

  //Instanciando manualmente um construtor do OrderDTO para ter acesso as subTotal() e o total()
  const cart = new OrderDTO();

  //Percorrer os items do obj e adiciona-los no OrderDTO
  obj.items.forEach(x => {
    cart.items.push(new OrderItemDTO(x.productId, x.quantity, x.name, x.price, x.imgUrl));
  })

  return cart
}


//Limpar o carrinho, e salvar um carrinho vazio
export function clear() {
  //Nada mais é do que setar uma lista vazia
  localStorage.setItem(CART_KEY, '{"items" : []}');
}

