import { OrderDTO, OrderItemDTO } from "../models/order";

import * as cartRepository from '../localStorage/cart-repository';
import { ProductDTO } from "../models/product";

//A função aqui vai repassar para o cartRepository
export function saveCart(cart : OrderDTO) {
  cartRepository.save(cart);
}

export function getCart() : OrderDTO {
  return cartRepository.get();
}

//Adicionar um produto no carrinho
export function addProduct(product : ProductDTO) {
  //1-Acessar o carrinho
  const cart = cartRepository.get();

  //2-Procurando dentro dos items do carrinho se já existe um produto igual
  const item = cart.items.find(x => x.productId === product.id)
  
  //3-Se o item não existe, agora adicionamos no carrinho
  if(!item) {
    //3.1-Instanciando um novo produto com a classe construtora
    const newItem = new OrderItemDTO(product.id, 1, product.name, product.price, product.imgUrl);

    //3.2- Instanciando o novo produto
    cart.items.push(newItem);
    //OPCIONAL-poderia ser feito em uma linha só, como no exemplo abaixo
    //cart.items.push(new OrderItemDTO(product.id, 1, product.name, product.price, product.imgUrl));
  
    //3.3-Salvar no localStorage
    cartRepository.save(cart);
  }

}