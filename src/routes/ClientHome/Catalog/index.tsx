import "./styles.css";

import { useEffect, useState } from "react";

import CatalogCard from "../../../components/CatalogCard";
import SearchBar from "../../../components/SearchBar";
import ButtonNextPage from "../../../components/ButtonNextPage";

import { ProductDTO } from "../../../models/product";

import * as productService from "../../../services/product-service";

export default function Catalog() {
  const [products, setProducts] = useState<ProductDTO[]>([]);

  const [productName, setProductName] = useState("");

  useEffect(() => {
    productService.findPageRequest(0, productName).then((res) => {
      setProducts(res.data.content);
    });
  }, [productName]);

  function handleSearch (searchText : string) {
    setProductName(searchText)
  }

  return (
    <main>
      <section id="catalog-section" className="ec-container">
        <SearchBar onSearch={handleSearch}/>

        <div className="ec-catalog-cards ec-mb20 ec-mt20">
          {
            /*Chamando a função findAll() de product-service.ts
             * findAll() é uma função criada no arquivo de productService que retorna uma lista*/
            products.map(
              product => <CatalogCard key={product.id} product={product} />
              )
          }
        </div>

        <ButtonNextPage />
      </section>
    </main>
  );
}
