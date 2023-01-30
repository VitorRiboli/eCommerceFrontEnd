import "./styles.css";
import cartIcon from '../../assets/images/cart.svg';
import { useContext, useState } from "react";

import * as cartService from "../../services/cart-service";
import { ContextCartCount } from "../../utils/context-cart";


export default function CartIcon() {

  const { contextCartCount } = useContext(ContextCartCount);


  return (
    <>
      <img src={cartIcon} alt="Carrinho"></img>
      { contextCartCount > 0 
        ? <div className="ec-cart-count">{contextCartCount}</div>
        : <div></div>
      }
      
    </>
  );
}
