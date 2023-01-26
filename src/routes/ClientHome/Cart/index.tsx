import "./styles.css";

import pcImg from "../../../assets/images/computer.png";

export default function Cart() {
  return (
    <main>
      <section id="cart-container-section" className="ec-container">
        
        <div className="ec-cart ec-mb20">

          <div className="ec-cart-item-container ec-lb">
            <div className="ec-cart-item-left">
              <img src={pcImg} alt="pc" />
              <div className="ec-cart-item-description">
                <h3>Computador Gamer XT</h3>
                <div className="ec-cart-item-quantity-container">
                  <div className="ec-cart-item-quantity-btn">-</div>
                  <p>1</p>
                  <div className="ec-cart-item-quantity-btn">+</div>
                </div>
              </div>
            </div>
            <div className="ec-cart-item-right">R$ 5000,00</div>
          </div>

          <div className="ec-cart-item-container ec-lb">
            <div className="ec-cart-item-left">
              <img src={pcImg} alt="pc" />
              <div className="ec-cart-item-description">
                <h3>Computador Gamer XT</h3>
                <div className="ec-cart-item-quantity-container">
                  <div className="ec-cart-item-quantity-btn">-</div>
                  <p>1</p>
                  <div className="ec-cart-item-quantity-btn">+</div>
                </div>
              </div>
            </div>
            <div className="ec-cart-item-right">R$ 5000,00</div>
          </div>

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
