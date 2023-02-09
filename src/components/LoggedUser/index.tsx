import "./styles.css";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { ContextToken } from "../../utils/context-token";
import * as authService from "../../services/auth-service";

export default function LoggedUser() {

  const { contextTokenPayload, setContextTokenPayload } = useContext(ContextToken)


  function handleLogoutClock() {
    return authService.logout();
    setContextTokenPayload(undefined);
  }

  return (
  contextTokenPayload && authService.isAuthenticated() ? (
    <div className="ec-login">
      <div className="ec-login-top">
        <h2>Olá, {contextTokenPayload?.user_name} </h2>
      </div>

      <div className="ec-login-bottom">
        <h2>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            MINHA CONTA
          </Link>{" "}
        </h2>
        |{" "}
        <h2>
          <span onClick={handleLogoutClock}>
            SAIR
          </span>
        </h2>
      </div>
    </div>
  ) 
  : 
  (
    <div className="ec-login">
      <h2>
        Faça <Link to={"/login"}>LOGIN</Link>
      </h2>
      <h2>
        ou crie seu <Link to={"/cadastro"}>CADASTRO</Link>
      </h2>
    </div>
  )
  )}
