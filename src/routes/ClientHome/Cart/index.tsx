import "./styles.css";

import { useContext, useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { OrderDTO } from "../../../models/order";

import * as cartService from "../../../services/cart-service";
import * as orderService from "../../../services/order-service";

import { ContextCartCount } from "../../../utils/context-cart";



export default function Cart() {

  const navigate = useNavigate();

  const [cart, setCart] = useState<OrderDTO>(cartService.getCart);

  const { setContextCartCount } = useContext(ContextCartCount);

  function handleClearClick() {
    cartService.clearCart();
    //Chamando setCart para redenrizar novamente o componente
    updateCart();
  }

  function handleIncreaseItem(productId: number) {
    cartService.increaseItem(productId);

    setCart(cartService.getCart); //Chamando o setCart para atualizar a pagina
  }

  function handleDecreaseItem(productId: number) {
    cartService.decreaseItem(productId);
    updateCart();
  }

  function updateCart() {
    const newCart = cartService.getCart();
    setCart(newCart);
    setContextCartCount(newCart.items.length);
  }


  function handlePlaceOrderClick() {
    orderService.placeOrderRequest(cart) //pedido salvo no banco de dados já
      .then(res => {
        cartService.clearCart(); //limpando o carrinho
        setContextCartCount(0); //zerando o contador de items do carrinho do header
        navigate(`/confirmation/${res.data.id}`)
      })
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
                          onClick={() => handleDecreaseItem(item.productId)}
                          className="ec-cart-item-quantity-btn"
                        >
                          -
                        </div>

                        <p>{item.quantity}</p>

                        <div
                          onClick={() => handleIncreaseItem(item.productId)}
                          className="ec-cart-item-quantity-btn"
                        >
                          +
                        </div>
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
          
          {cart.items.length > 0 ? (
            <div onClick={handlePlaceOrderClick} className="ec-btn ec-btn-orange">
            Finalizar Pedido
          </div>
          ) : (
            ""
          )}
          
          {cart.items.length > 0 ? (
            <Link to={"/catalog"} style={{ textDecoration: "none" }}>
              <div className="ec-btn ec-btn-white">Continuar Comprando</div>
            </Link>
          ) : (
            <Link to={"/catalog"} style={{ textDecoration: "none" }}>
             <div className="ec-btn ec-btn-white">Votar ao catálogo</div>
            </Link>
          )}

          {cart.items.length > 0 ? (
            <div onClick={handleClearClick} className="ec-btn ec-btn-white">
              Limpar Carrinho
            </div>
          ) : (
            ""
          )}

        </div>
      </section>
    </main>
  );
}
