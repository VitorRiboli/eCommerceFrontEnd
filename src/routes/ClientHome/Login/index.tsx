import IconInputError from "../../../components/IconInputError";
import "./styles.css";

export default function Login() {
  return (
    <main>
      <section id="login-section" className="ec-container">
        <div className="ec-login-form-container">
          <form className="ec-card ec-form">
            <h2>Fazer Login</h2>

            <div className="ec-form-controls-container">
              <div>
                <input
                  className="ec-form-control"
                  type="text"
                  placeholder="E-mail"
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
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="https://www.w3.org/2000/svg"
                  className="IconLoginButton"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20.625 22C20.9974 22 21.3197 21.8675 21.5918 21.6025C21.8639 21.3376 22 21.0117 22 20.625L22 1.375C22 0.988283 21.8639 0.662441 21.5918 0.397464C21.3197 0.132489 20.9974 3.08186e-06 20.625 3.04931e-06L8.9375 2.02755e-06C8.55078 1.99375e-06 8.22494 0.132488 7.95996 0.397463C7.69499 0.662439 7.5625 0.988281 7.5625 1.375L7.5625 7.58399L8.9375 7.58399L8.9375 2.21289C8.9375 1.98372 9.01986 1.78679 9.18457 1.62207C9.34929 1.45736 9.54622 1.375 9.77539 1.375L19.7871 1.375C20.0163 1.375 20.2096 1.45736 20.3672 1.62207C20.5247 1.78679 20.6035 1.98373 20.6035 2.21289L20.582 19.7871C20.582 20.0163 20.5033 20.2132 20.3457 20.3779C20.1881 20.5426 19.9948 20.625 19.7656 20.625L9.77539 20.625C9.54622 20.625 9.34928 20.5426 9.18457 20.3779C9.01986 20.2132 8.9375 20.0163 8.9375 19.7871L8.9375 14.4375L7.5625 14.4375L7.5625 20.625C7.5625 21.0117 7.69499 21.3376 7.95996 21.6025C8.22494 21.8675 8.55078 22 8.9375 22L20.625 22Z"
                    fill="white"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.5898 10.3125L10.0547 7.79883C9.92578 7.6556 9.86133 7.49089 9.86133 7.30469C9.86133 7.11849 9.92578 6.95378 10.0547 6.81055C10.1263 6.75326 10.2051 6.70671 10.291 6.6709C10.377 6.63509 10.4629 6.61719 10.5488 6.61719C10.6348 6.61719 10.7207 6.63509 10.8066 6.6709C10.8926 6.70671 10.9714 6.75326 11.043 6.81055L15.1035 10.9785L11.043 15.1465C10.8997 15.2897 10.735 15.3613 10.5488 15.3613C10.3626 15.3613 10.1979 15.2897 10.0547 15.1465C9.92578 15.0176 9.86133 14.8564 9.86133 14.6631C9.86133 14.4697 9.92578 14.3086 10.0547 14.1797L12.5469 11.6875L0.687503 11.6875C0.48698 11.6875 0.322269 11.623 0.193362 11.4941C0.0644551 11.3652 2.9986e-06 11.2005 3.05119e-06 11C3.10002e-06 10.8138 0.0644553 10.6527 0.193363 10.5166C0.322269 10.3805 0.486981 10.3125 0.687503 10.3125L12.5898 10.3125Z"
                    fill="white"
                  ></path>
                </svg>
                Entrar
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
