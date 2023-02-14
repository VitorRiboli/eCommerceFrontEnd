import "./styles.css";

import { useEffect, useState } from "react";

import CatalogCard from "../../../components/CatalogCard";
import SearchBar from "../../../components/SearchBar";
import ButtonNextPage from "../../../components/ButtonNextPage";

import { ProductDTO } from "../../../models/product";

import * as productService from "../../../services/product-service";
import { hasAnyRoles } from "../../../services/auth-service";

type QueryParams = {
  page: number;
  name: string;
};

export default function Catalog() {

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

  function handleSearch(searchText: string) {
    setProducts([]);
    setQueryParams({ ...queryParams, page:0, name: searchText });
  }

  function handleNextPageClick() {
    setQueryParams({...queryParams, page: queryParams.page +1})
  }

  return (
    <main>
      <section id="catalog-section" className="ec-container">
        <SearchBar onSearch={handleSearch} />

        <div className="ec-catalog-cards ec-mb20 ec-mt20">
          {
            /*Chamando a função findAll() de product-service.ts
             * findAll() é uma função criada no arquivo de productService que retorna uma lista*/
            products.map((product) => (
              <CatalogCard key={product.id} product={product} />
            ))
          }
        </div>

        {
          !isLastPage &&
          <div onClick={handleNextPageClick}>
          <ButtonNextPage />
         </div>
        }
        
      </section>
    </main>
  );
}
