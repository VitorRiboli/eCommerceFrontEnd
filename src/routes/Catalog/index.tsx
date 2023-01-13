import "./styles.css";

import HeaderClient from "../../components/HeaderClient";
import CatalogCard from "../../components/CatalogCard";
import SearchBar from "../../components/SearchBar";
import ButtonNextPage from "../../components/ButtonNextPage";


export default function Catalog() {
  return (
    <>
      <HeaderClient />

      <main>
        <section id="catalog-section" className="ec-container">
          <SearchBar />

          <div className="ec-catalog-cards ec-mb20 ec-mt20">
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
          </div>

          <ButtonNextPage />

        </section>
      </main>
    </>
  );
}
