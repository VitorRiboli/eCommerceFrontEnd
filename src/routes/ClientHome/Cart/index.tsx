import "./styles.css";

import { useState } from "react";

import { OrderDTO } from "../../../models/order";

import * as cartService from "../../../services/cart-service";
import { Link } from "react-router-dom";

export default function Cart() {
  const [cart, setCart] = useState<OrderDTO>(cartService.getCart);

  function handleClearClick() {
    cartService.clearCart();

    //Chamando setCart para redenrizar novamente o componente
    setCart(cartService.getCart);
  }

  function handleIncreaseItem(productId : number) {
    cartService.increaseItem(productId);

    setCart(cartService.getCart); //Chamando o setCart para atualizar a pagina
  }

  return (
    <main>
      <section id="cart-container-section" className="ec-container">
        {/*Se o tamanho do carrinho for vazio, renderiza so a mensagem, se não renderiza tudo */}
        {cart.items.length === 0 ? (
          <div>
            <h2 className="ec-section-title ec-mb20">
              Seu carrinho está vazio
            </h2>
            <p className="ec-mb20">Deseja olhar outros produtos similares?</p>
          </div>
        ) : (
          <div className="ec-cart ec-mb20">
            {cart &&
              cart.items.map((item) => (
                <div
                  key={item.productId}
                  className="ec-cart-item-container ec-lb"
                >
                  <div className="ec-cart-item-left">
                    <img src={item.imgUrl} alt={item.name} />
                    <div className="ec-cart-item-description">
                      <h3>{item.name}</h3>
                      <div className="ec-cart-item-quantity-container">
                        <div  
                        className="ec-cart-item-quantity-btn">-</div>
                    
                        <p>{item.quantity}</p>
                        
                        <div onClick={() => handleIncreaseItem(item.productId)}
                        className="ec-cart-item-quantity-btn">+</div>
                      </div>
                    </div>
                  </div>
                  <div className="ec-cart-item-right">
                    R$ {item.subTotal.toFixed(2)}
                  </div>
                </div>
              ))}

            <div className="ec-cart-total-container">
              <h3>R$ {cart.total.toFixed(2)}</h3>
            </div>
          </div>
        )}

        <div className="ec-btn-container">
          <div className="ec-btn ec-btn-orange">Finalizar Pedido</div>
          <Link to={"/catalog"} style={{textDecoration:"none"}}>
            <div className="ec-btn ec-btn-white">Continuar Comprando</div>
          </Link>
          <div onClick={handleClearClick} className="ec-btn ec-btn-white">Lampar Carrinho</div>
        </div>
      </section>
    </main>
  );
}
