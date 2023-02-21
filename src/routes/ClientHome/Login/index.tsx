import "./styles.css";

import { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";

import IconInputError from "../../../components/IconInputError";
import IconLoginBtn from "../../../components/IconLoginBtn";
import FormInput from "../../../components/FormInput";

import { CredentialsDTO } from "../../../models/auth";

import * as authService from "../../../services/auth-service";

import { ContextToken } from "../../../utils/context-token";
import * as forms from "../../../utils/forms";

export default function Login() {
  const navigate = useNavigate();

  const { setContextTokenPayload } = useContext(ContextToken);

  const [submitResponseFail, setSubmitResponseFail] = useState(false);

  const [formData, setFormData] = useState<any>({
    username: {
      value: "",
      id: "username",
      name: "username",
      type: "text",
      placeholder: "Email",
      validation: function (value: string) {
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          value.toLowerCase()
        );
      },
      message: "Favor informar um email válido",
    },
    password: {
      value: "",
      id: "password",
      name: "password",
      type: "password",
      placeholder: "Senha",
    },
  });

  function handleSubmit(event: any) {
    event.preventDefault();

    //verificar formulário
    setSubmitResponseFail(false)
    const formDataValidated = forms.dirtyAndValidateAll(formData);
    if (forms.hasAnyInvalid(formDataValidated)) {
      setFormData(formDataValidated);
      return;
    }

    authService
      .loginRequest(forms.toValues(formData))
      .then((res) => {
        authService.saveAccessToken(res.data.access_token);
        setContextTokenPayload(authService.getAccessTokenPayload()!); //espera argumento undefined, ! para tirar o erro, está atuaizando normal
        navigate("/cart");
      })
      .catch(() => {
        setSubmitResponseFail(true)
      });
  }

  function handleInputChange(event: any) {
    setFormData(forms.update(formData, event.target.name, event.target.value));
  }

  function handleTurnDirty(name: string) {
    setFormData(forms.dirtyAndValidate(formData, name));
  }

  return (
    <main>
      <section id="login-section" className="ec-container">
        <div className="ec-login-form-container">
          <form className="ec-card ec-form" onSubmit={handleSubmit}>
            <h2>Fazer Login</h2>

            <div className="ec-form-controls-container">
              <div>
                <FormInput
                  className="ec-form-control"
                  onTurnDirty={handleTurnDirty}
                  onChange={handleInputChange}
                  {...formData.username}
                  /* Esses 4 atributos podem ser resumido na linha acima
                  type="text"
                  placeholder="E-mail"
                  name="username"
                  value={formData.username.value}
                  */
                />

                <div className="ec-form-error">{formData.username.message}</div>
              </div>

              <div>
                <FormInput
                  onTurnDirty={handleTurnDirty}
                  className="ec-form-control"
                  onChange={handleInputChange}
                  {...formData.password}
                  /*
                  type="password"
                  placeholder="Senha"
                  name="password"
                  value={formData.password.value}
                  */
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

            {submitResponseFail && (
              <div className="ec-form-global-error ">
                Usuário ou senha inválidos
              </div>
            )}

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
