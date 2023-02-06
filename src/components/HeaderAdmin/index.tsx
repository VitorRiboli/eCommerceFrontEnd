import "./styles.css";

import IconUser from "./iconUser";
import ProductIcon from "../../assets/images/products.svg";
import HomeIcon from "../../assets/images/home.svg";

import { Link } from "react-router-dom";

export default function HeaderAdmin() {
  return (
    <header className="ec-header-admin">
      <nav className="ec-container">
        <h1>Top Admin</h1>

        <div className="ec-nav-bar-rigth">
          <div className="ec-menu-items-container">
            <div className="ec-menu-item">
              <img src={HomeIcon} alt="Inicio" />
              <p>Inicio</p>
            </div>
            <div className="ec-menu-item">
              <img src={ProductIcon} alt="Cadastro de Produtos" />
              <p className="ec-menu-item-active ">Produtos</p>
            </div>
          </div>

          <div className="ec-login">
            <div className="ec-login-top">
              <h2>Olá, Vitor </h2>
            </div>
            <div className="ec-login-bottom">
              <h2>
                {" "}
                <Link to={"/"} style={{ textDecoration: "none" }}>
                  MINHA CONTA
                </Link>{" "}
              </h2>
              |{" "}
              <h2>
                <Link to={"/"} style={{ textDecoration: "none" }}>
                  SAIR
                </Link>
              </h2>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
