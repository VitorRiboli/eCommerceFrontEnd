import "./styles.css";

import { useContext, useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import ButtonPrimary from "../../../components/ButtonPrimary";
import ButtonSecondary from "../../../components/ButtonSecondary";
import ProductDetailsCard from "../../../components/ProductDetailsCard";

import * as productService from "../../../services/product-service";
import * as cartService from "../../../services/cart-service";

import { ProductDTO } from "../../../models/product";

import { ContextCartCount } from "../../../utils/context-cart";

export default function ProductDetails() {
  /*Aqui vai ler os parametros da rota*/
  const params = useParams();

  const navigate = useNavigate();

  const { setContextCartCount } = useContext(ContextCartCount);

  //Declarando ESTADO e Armazenando dentro do componente um product
  //setProduc é a função dele que é capaz de alterar o product
  const [product, setProduct] = useState<ProductDTO>();

  useEffect(() => {
    //const productId = Number(params.productId);

    productService
      .findById(Number(params.productId))
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => {
        console.log(error.response.data);
        navigate("/catalog"); //Redirecionando
      });
  }, []);


  function handleBuyClick() {
    //Adicionar o produto que estiver aberto na tela, ou seja.
    //Armazenado no useState
    //If() testando se o product não é undefined para adiciona-lo no cart
    if(product) {
      cartService.addProduct(product);

      setContextCartCount(cartService.getCart().items.length);
      
      //Redirecionado para o cart
      navigate("/cart");
    }
    

  }

  return (
    /*  <HeaderClient /> */
    <main>
      <section id="product-details-section" className="ec-container">
        {product /*Testando se o objeto exite, se não é undefined, se ele não for, pode renderizar */ && (
          <ProductDetailsCard product={product} />
        )}

        <div className="ec-btn-container">
          <div onClick={handleBuyClick}>
            <ButtonPrimary text="Comprar" />
          </div>

          <Link to={"/"} style={{ textDecoration: "none" }}>
            <ButtonSecondary text="Inicio" />
          </Link>
        </div>
      </section>
    </main>
  );
}
