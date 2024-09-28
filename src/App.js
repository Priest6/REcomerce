import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { DATA_HOME } from "./redux/action";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/homePage/HomePage";
import CartPage from "./pages/cartPage/CartPage";
import DetailPage from "./pages/detailPage/DetailPage";
import Checkout from "./pages/checkout/Checkout";
import Login from "./pages/loginPage/Login";
import Register from "./pages/registerPage/Register";
import ShopPage from "./pages/shopPage/ShopPage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(
      "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
    )
      .then((res) => res.json())
      .then((data) => dispatch(DATA_HOME(data)));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
