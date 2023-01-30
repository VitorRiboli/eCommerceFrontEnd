import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Catalog from "./routes/ClientHome/Catalog";
import ClientHome from "./routes/ClientHome";
import ProductDetails from "./routes/ClientHome/ProductDetails";
import Cart from "./routes/ClientHome/Cart";
import { useState } from "react";
import { ContextCartCount } from "./utils/context-cart";

function App() {
  const [contextCartCount, setContextCartCount] = useState<number>(0);

  return (
    <ContextCartCount.Provider
      value={{ contextCartCount, setContextCartCount }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ClientHome />}>
            {" "}
            {/*Rota 1*/}
            <Route index element={<Catalog />} />
            <Route path="catalog" element={<Catalog />} />
            <Route
              path="product-details/:productId"
              element={<ProductDetails />}
            />
            {/*Rota aninhada*/}
            <Route path="cart" element={<Cart />} />
          </Route>{" "}
          {/*Rota 1*/}
          {/*Rota 2*/}
          <Route path="*" element={<Navigate to={"/"} />} />
          {/*Se não encontrar a rota, cai em um redirecionamento*/}
        </Routes>
      </BrowserRouter>
    </ContextCartCount.Provider>
  );
}

export default App;
