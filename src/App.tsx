import './App.css';
import computerImg from './assets/images/computer.png';
import cartSvg from './assets/images/cart.svg';

function App() {

  return (
    <>

      <header className="ec-header-client">
        <nav className="ec-container">

          <h1>Top Shop</h1>

          <div className="ec-nav-bar-rigth">
            <div className="ec-menu-items-container">
              <div className="ec-menu-item">
                <img src={cartSvg} alt="Carrinho"></img>
              </div>
              <div className="ec-menu-item">
                <figure id="blocoAvatarUsuario" className="ec-icon-user">
                  <svg width="20" height="20" viewBox="0 0 28 28"
                    fill="none" xmlns="https://www.w3.org/2000/svg" className="IconDefaultProfileLogo">
                    <mask id="mask0" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="28"
                      style={{maskType: "alpha"}}>
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M18.6375 13.5625C20.6063 12.2062 21.875 9.975 21.875 7.4375C21.875 3.325 18.55 0 14.4375 0C10.325 0 7 3.325 7 7.4375C7 9.975 8.26875 12.2062 10.2375 13.5625C6.34375 14.7875 3.5 18.4625 3.5 22.75V28H25.375V22.75C25.375 18.4625 22.5312 14.7875 18.6375 13.5625Z"
                        fill="#347BBE">

                      </path>
                    </mask>
                    <g mask="url(#mask0)">
                      <circle cx="14.5" cy="11.5" r="15.5" fill="#fff"></circle>
                    </g>
                  </svg>
                </figure>
              </div>
            </div>

            <div className="ec-login">
              <h2>Faça <a href="#">LOGIN</a> ou crie seu <a href="#">CADASTRO</a></h2>
            </div>
          </div>

        </nav>
      </header>

      <main>
        <section id="product-details-section" className="ec-container">
          <div className="ec-card ec-mb20">
            <div className="ec-product-details-top ec-lb">
              <img src={computerImg} alt="Computador"></img>
            </div>

            <div className="ec-product-details-bottom">
              <h3>R$ 5000,00</h3>
              <h4>Computador Gamer XT</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione dolores delectus dolor sed repellendus iusto quo ullam magnam, saepe vero ipsam temporibus id eius provident reiciendis pariatur necessitatibus possimus quibusdam?</p>
              <div className="ec-category-container">
                <div className="ec-category">Eletrônicos</div>
                <div className="ec-category">Computadores</div>
              </div>
            </div>
          </div>
          <div className="ec-btn-container">
            <a className="ec-btn ec-btn-blue" href="./cart.html">
              Comprar
            </a>
            <a className="ec-btn ec-btn-white" href="#">
              Inicio
            </a>
          </div>


        </section>

      </main>
    </>

  )

}

export default App
