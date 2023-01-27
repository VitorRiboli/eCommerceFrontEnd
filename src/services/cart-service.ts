import { OrderDTO } from "../models/order";

import * as cartRepository from '../localStorage/cart-repository';

//A função aqui vai repassar para o cartRepository
export function saveCart(cart : OrderDTO) {
  cartRepository.save(cart);
}

export function getCart() : OrderDTO {
  return cartRepository.get();
}
