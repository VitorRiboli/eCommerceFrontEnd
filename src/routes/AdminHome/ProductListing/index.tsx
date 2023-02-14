import "./styles.css";

import { useEffect, useState } from "react";

import IconEdit from "../../../assets/images/edit.svg";
import IconDelete from "../../../assets/images/delete.svg";

import * as productService from "../../../services/product-service";

import { ProductDTO } from "../../../models/product";
import AdminListingCard from "../../../components/AdminListingCard";


type QueryParams = {
  page: number;
  name: string;
};

export default function ProductListing() {

  const [isLastPage, setIsLastPage] = useState(false);

  const [products, setProducts] = useState<ProductDTO[]>([]);

  const [queryParams, setQueryParams] = useState<QueryParams>({
    page: 0,
    name: "",
  });

  useEffect(() => {
    productService
      .findPageRequest(queryParams.page, queryParams.name)
      .then((res) => {
        const nextPage = res.data.content;
        setProducts(products.concat(nextPage));
        setIsLastPage(res.data.last);
      });
  }, [queryParams]);



  return (
    <main>
    <section id="product-listing-section" className="ec-container">

      <h2 className="ec-section-title ec-mb20">Cadastro de Produtos</h2>

      <div className="ec-btn-container ec-mb20">
        <a className="ec-btn ec-btn-white" href="">
          Novo
        </a>
      </div>

      <form className="ec-search-bar">
        <button type="submit">🔎︎</button>
        <input type="text" placeholder="Nome do Produto" />
        <button type="reset">🗙</button>
      </form>

      <table className="ec-table ec-mb20 ec-mt20">
        <thead>
          <th className="ec-tb576">id</th>
          <th></th>
          <th className="ec-tb768">Preço</th>
          <th className="ec-txt-left">Nome</th>
          <th></th>
          <th></th>
        </thead>
        <tbody>
          {
            products.map(product => <AdminListingCard 
              key={product.id} id={product.id} 
              price={product.price} name={product.name} 
              imgUrl={product.imgUrl}
              />)
          }

        </tbody>

      </table>
    

      <div className="ec-btn-next-page">
        carregar mais
      </div>
      
    </section>
  </main>
  )
}