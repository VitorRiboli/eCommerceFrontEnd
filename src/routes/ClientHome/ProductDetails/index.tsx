import "./styles.css";

import { useParams } from "react-router-dom";

import ButtonPrimary from "../../../components/ButtonPrimary";
import ButtonSecondary from "../../../components/ButtonSecondary";
import ProductDetailsCard from "../../../components/ProductDetailsCard";

import * as productService from "../../../services/product-service";


export default function ProductDetails() {

  /*Aqui vai ler os parametros da rota*/
  const params = useParams()

  const product = productService.findById(Number(params.productId));

  return (
    /*  <HeaderClient /> */
    <main>
      <section id="product-details-section" className="ec-container">
        {
          product && /*Testando se o objeto exite, se não é undefined, se ele não for, pode renderizar */
          <ProductDetailsCard product={product} />
        }

        <div className="ec-btn-container">
          <ButtonPrimary text="Comprar" />
          <ButtonSecondary text="Inicio" />
        </div>
      </section>
    </main>
  );
}
