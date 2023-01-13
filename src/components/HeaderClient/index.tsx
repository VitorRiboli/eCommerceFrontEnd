import './styles.css';

import cartIcon from '../../assets/images/cart.svg';
import IconUser from './IconUser';


export default function HeaderClient() {
  return (
    
    <>
      <header className="ec-header-client">
        <nav className="ec-container">

          <h1>Top Shop</h1>

          <div className="ec-nav-bar-rigth">
            <div className="ec-menu-items-container">
              <div className="ec-menu-item">
                <img src={cartIcon} alt="Carrinho"></img>
              </div>
              <div className="ec-menu-item">
                <IconUser />
              </div>
            </div>

            <div className="ec-login">
              <h2>Faça <a href="#">LOGIN</a></h2>
              <h2>ou crie seu <a href="#">CADASTRO</a></h2>
            </div>
          </div>

        </nav>
      </header>
    </>
  )

}
