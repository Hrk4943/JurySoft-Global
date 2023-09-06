import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import SinglePage from "./Pages/SinglePage";
import Cart from "./Pages/Cart";
import { CartProvider } from "./Helpers/CartContext";
import Succes from "./Components/Succes";
import Cancel from "./Components/Cancel";
import CheckOut from "./Pages/ChechOut";
import img1 from "./assets/img140.jpg";
import img2 from "./assets/img150.jpg";
import img3 from "./assets/img160.jpg";
import img4 from "./assets/img170.jpg";
import img5 from "./assets/img180.jpg";
import img6 from "./assets/img190.jpg";

function App() {
  const products = [
    {
      id: 1,
      name: "Apple MacBook Pro",
      description: "Apple ",
      price: 200000,
      image: [img1, img2, img3, img4],
    },
    {
      id: 2,
      name: "Samsung S23 Ultra",
      description: "Samsung ",
      price: 100000,
      image: [img2, img3, img4, img5],
    },
    {
      id: 3,
      name: "OnePlus 11 Pro",
      description: "OnePlus ",
      price: 80000,
      image: [img3, img4, img5, img6],
    },
    {
      id: 4,
      name: "Google Pixel 8 Pro",
      description: "Google ",
      price: 75000,
      image: [img4, img5, img6, img1],
    },
    {
      id: 5,
      name: "Apple iPad Pro",
      description: "Apple ",
      price: 120000,
      image: [img5, img6, img1, img2],
    },
    {
      id: 6,
      name: "Samsung Galaxy Tab S9",
      description: "Samsung ",
      price: 100000,
      image: [img6, img1, img2, img3],
    },
  ];
  return (
    <>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home products={products} />} />
            <Route
              path="/productDetails/:id"
              element={<SinglePage products={products} />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="/checkout/:id"
              element={<CheckOut products={products} />}
            />
            <Route path="/sucess" element={<Succes />} />
            <Route path="/cancel" element={<Cancel />} />
          </Routes>
        </Router>
      </CartProvider>
    </>
  );
}

export default App;
