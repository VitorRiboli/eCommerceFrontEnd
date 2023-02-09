import "./styles.css";

import { useContext} from "react";

import { Link } from "react-router-dom";

import IconUser from "./iconUser";
import CartIcon from "../CarIcon";

import iconAdmin from "../../assets/images/admin.svg";

import * as authService from "../../services/auth-service";

import { ContextToken } from "../../utils/context-token";

import LoggedUser from "../LoggedUser";


export default function HeaderClient() {

  const { contextTokenPayload } = useContext(ContextToken);

  return (
    <header className="ec-header-client">
      <nav className="ec-container">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <h1 className="header-title">Top Shop</h1>
        </Link>

        <div className="ec-nav-bar-rigth">

          <div className="ec-menu-items-container">
            
            {
              contextTokenPayload &&
              authService.hasAnyRoles(["ROLE_ADMIN"]) && (
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

         <LoggedUser />

        </div>
      </nav>
    </header>
  );
}
