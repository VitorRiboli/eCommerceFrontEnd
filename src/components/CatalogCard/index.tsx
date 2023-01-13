import "./styles.css";

import ComputerImg from "../../assets/images/computer.png";

export default function CatalogCard() {
  return (
    <>
      <div className="ec-card">
        <div className="ec-catalog-card-top ec-lb">
          <img src={ComputerImg} alt="Computer" />
        </div>
        <div className="ec-catalog-card-bottom">
          <h3>R$ 5000,00</h3>
          <h4>
            Computador Gamer XT com suporte e 16GB de memória e processador
            turbo plus
          </h4>
        </div>
      </div>
    </>
  );
}
