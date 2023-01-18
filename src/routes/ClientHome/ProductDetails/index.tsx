import "./styles.css";

import ButtonPrimary from "../../../components/ButtonPrimary";
import ButtonSecondary from "../../../components/ButtonSecondary";
import HeaderClient from "../../../components/HeaderClient";
import ProductDetailsCard from "../../../components/ProductDetailsCard";

import { ProductDTO } from "../../../models/product";

const product: ProductDTO = {
  id: 2,
  name: "Notebook DELL",
  description:
    "Seja para verificar e-mails, estudar, navegar nas redes sociais ou fazer streaming de música e filmes, os notebooks Inspiron mantém você conectado ao que mais importa.",
  imgUrl: "https://m.media-amazon.com/images/I/61ysTJmINQL._AC_SY450_.jpg",
  price: 5000.0,

  categories: [
    {
      id: 1,
      name: "Eletrônicos",
    },
    {
      id: 2,
      name: "Importados",
    },
    {
      id: 3,
      name: "Computadores",
    },
  ],
};

export default function ProductDetails() {
  return (
    /*  <HeaderClient /> */

    <main>
      <section id="product-details-section" className="ec-container">
        <ProductDetailsCard product={product} />

        <div className="ec-btn-container">
          <ButtonPrimary text="Comprar" />
          <ButtonSecondary text="Inicio" />
        </div>
      </section>
    </main>
  );
}
