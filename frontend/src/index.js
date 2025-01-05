import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Toaster } from "react-hot-toast";
import store from "./store/index";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
const App = lazy(() => import("./App"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <Suspense fallback={<div>Loading...</div>}>
        <App />
        <Toaster
          toastOptions={{
            position: "top-center",
            style: {
              background: "#283046",
              color: "#fff",
            },
          }}
        />
      </Suspense>
    </Provider>
  </BrowserRouter>
  // </React.StrictMode>
);
