import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";

import { useEffect, useState } from "react";

import Catalog from "./routes/ClientHome/Catalog";
import ClientHome from "./routes/ClientHome";
import ProductDetails from "./routes/ClientHome/ProductDetails";
import Cart from "./routes/ClientHome/Cart";
import Login from "./routes/ClientHome/Login";
import Admin from "./routes/AdminHome";
import AdminHome from "./routes/AdminHome/AdmiHome";

import { ContextCartCount } from "./utils/context-cart";
import { history } from "./utils/history";

import { PrivateRoute } from "./components/PrivateRoute";

import { AccessTokenPayloadDTO } from "./models/auth";

import { ContextToken } from "./utils/context-token";

import * as authService from "./services/auth-service";
import * as cartService from "./services/cart-service";
import Confitmation from "./routes/ClientHome/Confirmation";


function App() {
  const [contextCartCount, setContextCartCount] = useState<number>(0);

  const [contextTokenPayload, setContextTokenPayload] = useState<AccessTokenPayloadDTO>();

  //No inicio da aplicação
  useEffect(() => {
    //Iniciar a contagem do cart pegando do localStorage
    setContextCartCount(cartService.getCart().items.length);

    //Verificando se o user está logado e autenticado, para iniciar o estado
    if (authService.isAuthenticated()) {
      const payload = authService.getAccessTokenPayload();
      setContextTokenPayload(payload);
    }

  }, [])

  return (
    <ContextToken.Provider
      value={{ contextTokenPayload, setContextTokenPayload }}
    >
      <ContextCartCount.Provider
        value={{ contextCartCount, setContextCartCount }}
      >
        <HistoryRouter history={history}>
          <Routes>
            <Route path="/" element={<ClientHome />}>
              <Route index element={<Catalog />} />
              <Route path="catalog" element={<Catalog />} />
              <Route
                path="product-details/:productId"
                element={<ProductDetails />}
              />
              <Route path="cart" element={<Cart />} />
              <Route path="login" element={<Login />} />
              <Route
                path="confirmation/:orderId"
                element={<Confitmation />}
              />
            </Route>{" "}
            {/*Rotas do cliente */}
            <Route
              path="/admin/"
              element={
                <PrivateRoute roles={["ROLE_ADMIN"]}>
                  <Admin />
                </PrivateRoute>
              }
            >
              <Route index element={<AdminHome />} />
            </Route>{" "}
            {/*Rotas do admin */}
            <Route path="*" element={<Navigate to={"/"} />} />
          </Routes>
        </HistoryRouter>
      </ContextCartCount.Provider>
    </ContextToken.Provider>
  );
}

export default App;
