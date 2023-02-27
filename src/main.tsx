import React from 'react';
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

window.React = React

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
);
//Por causa do React.StrictMode ele roda duas vezes o projeto no console
