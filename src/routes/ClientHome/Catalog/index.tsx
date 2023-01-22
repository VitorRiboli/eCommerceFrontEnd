import "./styles.css";

import { useEffect, useState } from "react";

import CatalogCard from "../../../components/CatalogCard";
import SearchBar from "../../../components/SearchBar";
import ButtonNextPage from "../../../components/ButtonNextPage";

import { ProductDTO } from "../../../models/product";

import * as productService from "../../../services/product-service";

export default function Catalog() {
  const [products, setProducts] = useState<ProductDTO[]>([]);

  useEffect(() => {
    productService.findAll().then((res) => {
      setProducts(res.data.content);
    });
  }, []);

  return (
    <main>
      <section id="catalog-section" className="ec-container">
        <SearchBar />

        <div className="ec-catalog-cards ec-mb20 ec-mt20">
          {
            /*Chamando a função findAll() de product-service.ts
             * findAll() é uma função criada no arquivo de productService que retorna uma lista*/
            products.map((product) => (
              <CatalogCard key={product.id} product={product} />
            ))
          }
        </div>

        <ButtonNextPage />
      </section>
    </main>
  );
}
