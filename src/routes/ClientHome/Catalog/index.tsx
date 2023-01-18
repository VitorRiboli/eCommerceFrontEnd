import "./styles.css";

import HeaderClient from "../../../components/HeaderClient";
import CatalogCard from "../../../components/CatalogCard";
import SearchBar from "../../../components/SearchBar";
import ButtonNextPage from "../../../components/ButtonNextPage";

import { ProductDTO } from "../../../models/product";

import * as productService from '../../../services/product-service';



export default function Catalog() {
  return (
    /* <HeaderClient /> O headerClient já está alocado na rota principal.
     * Por isso não necessita coloca-lo aqui  */

    <main>
      <section id="catalog-section" className="ec-container">
        <SearchBar />

        <div className="ec-catalog-cards ec-mb20 ec-mt20">
          { /*Chamando a função findAll() de product-service.ts 
            * findAll() é uma função criada no arquivo de productService que retorna uma lista*/
            productService.findAll()
            .map(product => <CatalogCard key={product.id} product={product} />)
          }
        </div>

        <ButtonNextPage />
      </section>
    </main>
  );
}
