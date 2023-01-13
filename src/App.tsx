import './App.css';

import ButtonPrimary from './components/ButtonPrimary';
import ButtonSecondary from './components/ButtonSecondary';
import HeaderClient from './components/HeaderClient/index';
import ProductDetailsCard from './components/ProductDetailsCard';

function App() {

  return (
    <>
      <HeaderClient />

      <main>
        <section id="product-details-section" className="ec-container"> 

          <ProductDetailsCard />
          
          <div className="ec-btn-container">
            <ButtonPrimary />
            <ButtonSecondary />    
          </div>

        </section>
      </main>
    </>

  )

}

export default App
