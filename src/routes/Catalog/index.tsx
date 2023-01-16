import "./styles.css";

import HeaderClient from "../../components/HeaderClient";
import CatalogCard from "../../components/CatalogCard";
import SearchBar from "../../components/SearchBar";
import ButtonNextPage from "../../components/ButtonNextPage";


import { ProductDTO } from "../../models/product";


const product: ProductDTO = {
  id: 2,
  name: "Notebook DELL",
  description:
    "Seja para verificar e-mails, estudar, navegar nas redes sociais",
  imgUrl: "https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/inspiron-15-3511/media-gallery/in3511nt_cnb_00000ff090_sl.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=402&qlt=100,1&resMode=sharp2&size=402,402&chrss=full",
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

export default function Catalog() {
  return (
    <>
      <HeaderClient />

      <main>
        <section id="catalog-section" className="ec-container">
          <SearchBar />

          <div className="ec-catalog-cards ec-mb20 ec-mt20">
            <CatalogCard product={product}/>
            <CatalogCard product={product}/>
            <CatalogCard product={product}/>
            <CatalogCard product={product}/>
            <CatalogCard product={product}/>
            <CatalogCard product={product}/>
            <CatalogCard product={product}/>
            <CatalogCard product={product}/>
            <CatalogCard product={product}/>
            <CatalogCard product={product}/>
            <CatalogCard product={product}/>
            <CatalogCard product={product}/>
            <CatalogCard product={product}/>
            <CatalogCard product={product}/>
            <CatalogCard product={product}/>
            
          </div>

          <ButtonNextPage />

        </section>
      </main>
    </>
  );
}
