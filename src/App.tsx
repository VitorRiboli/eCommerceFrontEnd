import './App.css';
import computerImg from './assets/images/computer.png';
import HeaderClient from './components/HeaderClient/index';

function App() {

  return (
    <>
      <HeaderClient />
      

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
