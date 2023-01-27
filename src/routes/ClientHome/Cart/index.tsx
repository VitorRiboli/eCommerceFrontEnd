import "./styles.css";

import { useEffect, useState } from "react";

import { OrderDTO, OrderItemDTO } from "../../../models/order";

import * as cartService from '../../../services/cart-service';


const item1 : OrderItemDTO = new OrderItemDTO (
  4, 
  1, 
  "PC Gamer", 
  1200, 
  "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/4-big.jpg"
)

const item2 : OrderItemDTO = new OrderItemDTO (
  5, 3, "Rails for Dummies", 10.99, "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/5-big.jpg"
)


export default function Cart() {

  const [cart, setCart] = useState<OrderDTO>(cartService.getCart);



  return (
    <main>
      <section id="cart-container-section" className="ec-container">
        <div className="ec-cart ec-mb20">

          { cart &&
          cart.items.map((item) => (
            <div key={item.productId} className="ec-cart-item-container ec-lb">
              <div className="ec-cart-item-left">
                <img src={item.imgUrl} alt={item.name} />
                <div className="ec-cart-item-description">
                  <h3>{item.name}</h3>
                  <div className="ec-cart-item-quantity-container">
                    <div className="ec-cart-item-quantity-btn">-</div>
                    <p>{item.quantity}</p>
                    <div className="ec-cart-item-quantity-btn">+</div>
                  </div>
                </div>
              </div>
              <div className="ec-cart-item-right">
                R$ {(item.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}

          <div className="ec-cart-total-container">
            <h3>R$ 15000,00</h3>
          </div>
        </div>

        <div className="ec-btn-container">
          <a className="ec-btn ec-btn-blue" href="">
            Finalizar Pedido
          </a>
          <a className="ec-btn ec-btn-white" href="">
            Continuar Comprando
          </a>
        </div>
      </section>
    </main>
  );
}
