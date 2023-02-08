import "./styles.css";

import { useState } from "react";

import IconInputError from "../../../components/IconInputError";
import IconLoginBtn from "../../../components/IconLoginBtn";

import { CredentialsDTO } from "../../../models/auth";

import * as authService from "../../../services/auth-service";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const [formData, setFormData] = useState<CredentialsDTO>({
    username: "",
    password: "",
  });

  const navigate = useNavigate();


  function handleSubmit(event: any) {
    event.preventDefault();

    authService.loginRequest(formData)
      .then((res) => {
        authService.saveAccessToken(res.data.access_token);
        navigate("/cart")
      })
      .catch((err) => {
        console.log("Erro no login: ", err);
      });
  }

  function handleInputChange(event: any) {
    const value = event.target.value;
    const name = event.target.name;

    setFormData({ ...formData, [name]: value });
  }

  return (
    <main>
      <section id="login-section" className="ec-container">
        <div className="ec-login-form-container">
          <form className="ec-card ec-form" onSubmit={handleSubmit}>
            <h2>Fazer Login</h2>

            <div className="ec-form-controls-container">
              <div>
                <input
                  className="ec-form-control"
                  type="text"
                  placeholder="E-mail"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                />

                <div className="ec-form-error">
                  {/*
                  <IconInputError />
                  <h6>Campo Obrigatório</h6>
                  Div para mensagem de erro
                  */}
                </div>
              </div>

              <div>
                <input
                  className="ec-form-control"
                  type="password"
                  placeholder="Senha"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                />

                <div className="ec-form-error">
                  {/*
                  <IconInputError />
                  <h6>Campo Obrigatório</h6>
                  Div para mensagem de erro
                  */}
                </div>
              </div>
            </div>

            <div className="ec-login-form-btns ec-mt20">
              <button type="submit" className="ec-btn ec-btn-login">
                <IconLoginBtn />
                Entrar
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
