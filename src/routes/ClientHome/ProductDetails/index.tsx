import "./styles.css";

import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import ButtonPrimary from "../../../components/ButtonPrimary";
import ButtonSecondary from "../../../components/ButtonSecondary";
import ProductDetailsCard from "../../../components/ProductDetailsCard";

import * as productService from "../../../services/product-service";

import { ProductDTO } from "../../../models/product";

export default function ProductDetails() {
  /*Aqui vai ler os parametros da rota*/
  const params = useParams();

  //Declarando ESTADO e Armazenando dentro do componente um product
  //setProduc é a função dele que é capaz de alterar o product
  const [product, setProduct] = useState<ProductDTO>();

  useEffect(() => {
    //const productId = Number(params.productId);

    productService.findById(Number(params.productId)).then((res) => {
      console.log(res);
      setProduct(res.data);
    });
  }, []);

  return (
    /*  <HeaderClient /> */
    <main>
      <section id="product-details-section" className="ec-container">
        {product /*Testando se o objeto exite, se não é undefined, se ele não for, pode renderizar */ && (
          <ProductDetailsCard product={product} />
        )}

        <div className="ec-btn-container">
          <ButtonPrimary text="Comprar" />

          <Link to={"/"} style={{ textDecoration: "none" }}>
            <ButtonSecondary text="Inicio" />
          </Link>
        </div>
      </section>
    </main>
  );
}
