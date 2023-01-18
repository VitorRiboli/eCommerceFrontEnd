import { BrowserRouter, Route, Routes } from "react-router-dom";
import Catalog from "./routes/ClientHome/Catalog";
import ClientHome from "./routes/ClientHome";
import ProductDetails from "./routes/ClientHome/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<ClientHome />}> {/*Rota 1*/}
          <Route index element={<Catalog />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="product-details" element={<ProductDetails />} />{/*Rota aninhada*/}
        </Route> {/*Rota 1*/}

        {/*Rota 2*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
