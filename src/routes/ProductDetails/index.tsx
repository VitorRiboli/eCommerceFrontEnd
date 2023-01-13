import './styles.css'

import ButtonPrimary from "../../components/ButtonPrimary";
import ButtonSecondary from "../../components/ButtonSecondary";
import HeaderClient from "../../components/HeaderClient";
import ProductDetailsCard from "../../components/ProductDetailsCard";

export default function ProductDetails() {
  return (
    <>
      <HeaderClient />

      <main>
        <section id="product-details-section" className="ec-container">
          <ProductDetailsCard />

          <div className="ec-btn-container">
            <ButtonPrimary />
            <ButtonSecondary />
          </div>
        </section>
      </main>
    </>
  );
}
