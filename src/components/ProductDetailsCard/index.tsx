import './styles.css'

import computerImg from "../../assets/images/computer.png";
import ProductCategory from '../ProductCategory';

export default function ProductDetailsCard() {
  return (
    <>
      <div className="ec-card ec-mb20">
        <div className="ec-product-details-top ec-lb">
          <img src={computerImg} alt="Computador"></img>
        </div>

        <div className="ec-product-details-bottom">
          <h3>R$ 5000,00</h3>
          <h4>Computador Gamer XT</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
            dolores delectus dolor sed repellendus iusto quo ullam magnam, saepe
            vero ipsam temporibus id eius provident reiciendis pariatur
            necessitatibus possimus quibusdam?
          </p>
          <div className="ec-category-container">
            <ProductCategory />
            <ProductCategory />
          </div>
        </div>
      </div>
    </>
  );
}
