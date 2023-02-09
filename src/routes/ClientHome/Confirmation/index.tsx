import "./styles.css";

import { useEffect, useState } from "react";
import { OrderDTO } from "../../../models/order";
import { useParams } from "react-router-dom";

import * as orderService from "../../../services/order-service";
import { Link } from "react-router-dom";

export default function Confitmation() {
  const params = useParams();

  const [order, setOrder] = useState<OrderDTO>();

  useEffect(() => {
    orderService.findByIdRequest(Number(params.orderId)).then((res) => {
      setOrder(res.data);
    });
  }, []);

  return (
    <main>
      <section id="confirmation-section" className="ec-container">
        <div className="ec-cart ec-mb20">
          {
            order?.items.map((item) => (
            <div className="ec-cart-item-container ec-lb">
              <div className="ec-cart-item-left">
                <img src={item.imgUrl} alt={item.name} />
                <div className="ec-cart-item-description">
                  <h3>${item.name}</h3>
                  <div className="ec-cart-item-quantity-container">
                    <p>{item.quantity}</p>
                  </div>
                </div>
              </div>
              <div className="ec-cart-item-right">
                R$ {item.subTotal.toFixed(2)}
              </div>
            </div>
          ))}

          <div className="ec-cart-total-container">
            <h3>R$ {order?.total.toFixed(2)}</h3>
          </div>
        </div>

        <div className="ec-confirmation-message ec-mb20">
          Pedido realizado! Número {order?.id}.
        </div>

        <div className="ec-btn-container">
          <Link to={"/"}>
            <div className="ec-btn ec-btn-white">Inicio</div>
          </Link>
        </div>
      </section>
    </main>
  );
}
