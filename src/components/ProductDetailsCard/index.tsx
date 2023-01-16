import "./styles.css";

import ProductCategory from "../ProductCategory";

import { ProductDTO } from "../../models/product";

type Props = {
  product: ProductDTO;
};

export default function ProductDetailsCard({ product }: Props) {
  return (
    <div className="ec-card ec-mb20">
      <div className="ec-product-details-top ec-lb">
        <img src={product.imgUrl} alt={product.name} />
      </div>

      <div className="ec-product-details-bottom">
        <h3>R$ {product.price.toFixed(2)}</h3>
        <h4>{product.name}</h4>
        <p>{product.description}</p>
        <div className="ec-category-container">
          {product.categories.map((item) => {
            return <ProductCategory key={item.id} name={item.name} />;
          })}
        </div>
      </div>
    </div>
  );
}
