import "./styles.css";

import IconUser from "./iconUser";
import CartIcon from "../CarIcon";

import iconAdmin from "../../assets/images/admin.svg";

import { Link } from "react-router-dom";

import * as authService from "../../services/auth-service";

export default function HeaderClient() {
  return (
    <header className="ec-header-client">
      <nav className="ec-container">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <h1 className="header-title">Top Shop</h1>
        </Link>

        <div className="ec-nav-bar-rigth">

          <div className="ec-menu-items-container">
            
            {authService.hasAnyRoles(["ROLE_ADMIN"]) && (
              <Link to="/admin">
                <div className="dsc-menu-item icon-admin">
                  <img src={iconAdmin} alt="Admin" />
                </div>
              </Link>
            )}

            <Link to={"/cart"} style={{ textDecoration: "none" }}>
              <div className="ec-menu-item">
                <CartIcon />
              </div>
            </Link>

            <div className="ec-menu-item">
              <Link to={"/myaccount"}>
                <IconUser />
              </Link>
            </div>
          </div>

          <div className="ec-login">
            <h2>
              Faça <Link to={"/login"}>LOGIN</Link>
            </h2>
            <h2>
              ou crie seu <Link to={"/cadastro"}>CADASTRO</Link>
            </h2>
          </div>
        </div>
      </nav>
    </header>
  );
}
