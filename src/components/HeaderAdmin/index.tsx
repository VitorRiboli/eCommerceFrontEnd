import "./styles.css";

import IconUser from "./iconUser";
import ProductIcon from "../../assets/images/products.svg";
import HomeIcon from "../../assets/images/home.svg";

import LoggedUser from "../LoggedUser";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function HeaderAdmin() {
  return (
    <header className="ec-header-admin">
      <nav className="ec-container">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1 className="ec-admin-title">Top Admin</h1>
        </Link>
        

        <div className="ec-nav-bar-rigth">
          <div className="ec-menu-items-container">
            <NavLink 
              to="/admin/home" 
              className={({isActive}) => isActive ? "ec-menu-item-active" : "ec-menu-item-no-active"}
              style={{ textDecoration: "none" }}>
              <div className="ec-menu-item">
                <img src={HomeIcon} alt="Inicio" />
                <p>Inicio</p>
              </div>
            </NavLink>

            <NavLink 
              to="/admin/products" 
              className={({isActive}) => isActive ? "ec-menu-item-active" : "ec-menu-item-no-active"}
              style={{ textDecoration: "none" }}>
              <div className="ec-menu-item">
                <img src={ProductIcon} alt="Cadastro de Produtos" />
                <p >Produtos</p>
              </div>
            </NavLink>
            
          </div>

          <LoggedUser />
        </div>
      </nav>
    </header>
  );
}
